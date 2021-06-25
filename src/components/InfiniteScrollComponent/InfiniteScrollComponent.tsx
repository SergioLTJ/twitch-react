import { CircularProgress, Grid } from '@material-ui/core';
import * as React from 'react';
import {
  RecoilValueReadOnly,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  chunksState,
  loadingState,
  overState,
} from '../../state/inifiniteScroll';
import { PagedData } from '../../types/pagedData';
import InfiniteScrollChunk from './InfiniteScrollChunk';
import { InfiniteLoaderType } from './types';

export type InfiniteScrollProps<T> = {
  query: (param: string) => RecoilValueReadOnly<PagedData<T>>;
  renderElement: (element: T) => React.ReactNode;
  identifier: InfiniteLoaderType;
};

const InfiniteScrollComponent : React.FC<InfiniteScrollProps<unknown>> = ({
  query,
  renderElement,
  identifier,
}) => {
  const [isLoading, setLoading] = useRecoilState(loadingState(identifier));
  const isOver = useRecoilValue(overState(identifier));
  const [chunks, setChunks] = useRecoilState<Array<number>>(chunksState(identifier));

  const loaderRef = React.useRef<HTMLDivElement | null>(null);

  const callback = React.useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting
      && !isLoading
      && !isOver) {
      setLoading(true);
      setChunks((current) => {
        const last = current[current.length - 1];
        return [...current, last + 1];
      });
    }
  }, [isLoading, isOver, setChunks, setLoading]);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '750px',
      threshold: 0,
    };

    const obs = new IntersectionObserver(callback, options);
    if (loaderRef.current) obs.observe(loaderRef.current);

    return () => obs.disconnect();
  }, [callback, loaderRef]);

  return (
    <>
      {chunks.map((chunk) => (
        <React.Suspense fallback={<></>} key={chunk}>
          <InfiniteScrollChunk
            index={chunk}
            query={query}
            renderComponent={renderElement}
            identifier={identifier}
          />
        </React.Suspense>
      ))}
      <Grid
        container
        justify="center"
        alignItems="center"
        ref={loaderRef}
      >
        <Grid item>
          {isLoading && <CircularProgress />}
        </Grid>
      </Grid>
    </>
  );
};

export default InfiniteScrollComponent;
