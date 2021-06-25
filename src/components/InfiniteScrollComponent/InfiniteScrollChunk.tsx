import * as React from 'react';
import {
  RecoilValueReadOnly,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { useEffect } from 'react';
import { PagedData } from '../../types/pagedData';
import {
  chunkCursorState,
  loadingState,
  overState,
} from '../../state/inifiniteScroll';
import { InfiniteLoaderType } from './types';

export type InfiniteScrollChunkProps<T> = {
  index: number,
  query: (param: string) => RecoilValueReadOnly<PagedData<T>>;
  renderComponent: (element: T) => React.ReactNode;
  identifier: InfiniteLoaderType;
}

const InfiniteScrollChunk : React.FC<InfiniteScrollChunkProps<unknown>> = ({
  index,
  query,
  renderComponent,
  identifier,
}) => {
  const cursor = useRecoilValue(chunkCursorState([identifier, index]));
  const currentQueryElements = useRecoilValue(query(cursor));

  const setLoading = useSetRecoilState(loadingState(identifier));
  useEffect(() => setLoading(false), [currentQueryElements, setLoading]);

  const setOver = useSetRecoilState(overState(identifier));
  const setNextCursor = useSetRecoilState(chunkCursorState([identifier, index + 1]));
  useEffect(() => {
    if (currentQueryElements.pagination?.cursor) setNextCursor(currentQueryElements.pagination.cursor || '');
    else setOver(true);
  }, [
    currentQueryElements.pagination?.cursor,
    index,
    setNextCursor,
    setOver,
  ]);

  return (
    <>
      {currentQueryElements.data?.map((element) => renderComponent(element))}
    </>
  );
};

export default InfiniteScrollChunk;
