import { atomFamily } from 'recoil';

export const loadingState = atomFamily({
  key: 'loadingState',
  default: true,
});

export const overState = atomFamily({
  key: 'overState',
  default: false,
});

export const chunkCursorState = atomFamily({
  key: 'chunkCursorState',
  default: '',
});

export const chunksState = atomFamily({
  key: 'chunks',
  default: [0],
});
