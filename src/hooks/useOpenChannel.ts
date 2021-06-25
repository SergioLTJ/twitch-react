import { useCallback } from 'react';

export type UseOpenChannel = (channelName: string) => () => void;

const useOpenChannel: UseOpenChannel = (channelName: string) => {
  const openChannel = useCallback(() => {
    window.open(`https://twitch.tv/${channelName}`);
  }, [channelName]);

  return openChannel;
};

export default useOpenChannel;
