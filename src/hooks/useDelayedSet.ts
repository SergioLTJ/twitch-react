import React from 'react';
import { SetterOrUpdater } from 'recoil';

function useDelayedSet<T>(
  setter: SetterOrUpdater<T>,
  onPreChange?: () => void | null,
): (event: unknown) => void {
  const [lastUpdate, setLastUpdate] = React.useState(0);
  const [timeoutId, setTimeoutId] = React.useState(0);

  const checkUpdateValue = React.useCallback((
    value: T,
  ) => {
    const currentTs = Date.now();
    if ((currentTs - lastUpdate) > 300) {
      if (onPreChange) onPreChange();
      setter(value);
      setLastUpdate(currentTs);
      setTimeoutId(0);
    } else {
      setTimeoutId(window.setTimeout(() => checkUpdateValue(value), 300));
    }
  }, [lastUpdate, onPreChange, setter]);

  const set = React.useCallback((event) => {
    if (timeoutId !== 0) {
      window.clearTimeout(timeoutId);
    }

    checkUpdateValue(event.currentTarget.value);
  }, [checkUpdateValue, timeoutId]);

  return set;
}

export default useDelayedSet;
