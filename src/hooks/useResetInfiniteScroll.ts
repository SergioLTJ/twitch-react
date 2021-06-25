import React from 'react';
import { useResetRecoilState } from 'recoil';
import { InfiniteLoaderType } from '../components/InfiniteScrollComponent/types';
import {
  chunksState,
  loadingState,
  overState,
} from '../state/inifiniteScroll';

export type UseResetInfiniteScroll = (identifier: InfiniteLoaderType) => () => void;

const useResetInfiniteScroll: UseResetInfiniteScroll = (identifier: InfiniteLoaderType) => {
  const resetList = useResetRecoilState(chunksState(identifier));
  const resetOver = useResetRecoilState(overState(identifier));
  const resetLoading = useResetRecoilState(loadingState(identifier));

  const reset = React.useCallback(() => {
    resetList();
    resetOver();
    resetLoading();
  }, [resetList, resetLoading, resetOver]);

  return reset;
};

export default useResetInfiniteScroll;
