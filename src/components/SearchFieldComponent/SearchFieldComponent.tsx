import { TextField } from '@material-ui/core';
import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import useDelayedSet from '../../hooks/useDelayedSet';
import useResetInfiniteScroll from '../../hooks/useResetInfiniteScroll';
import { channelsQueryState } from '../../state/channel/channelList';
import { InfiniteLoaderType } from '../InfiniteScrollComponent';

export type SearchFieldProps = {
  loaderIdentifier: InfiniteLoaderType,
}

const SearchFieldComponent: React.FC<SearchFieldProps> = ({ loaderIdentifier }) => {
  const setQuery = useSetRecoilState(channelsQueryState);
  const reset = useResetInfiniteScroll(loaderIdentifier);
  const delayedSet = useDelayedSet<string>(setQuery, reset);

  return (
    <TextField
      fullWidth
      margin="normal"
      onChange={delayedSet}
    />
  );
};

export default SearchFieldComponent;
