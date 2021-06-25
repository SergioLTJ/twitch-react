import { atom, selectorFamily } from 'recoil';

import listChannels from '../../services/channelService';

export interface LoadChannelProps {
  limit: number,
  offset: number
}

export const channelsLiveQueryState = atom({
  key: 'channelsLiveQueryState',
  default: false,
});

export const channelsQueryState = atom({
  key: 'channelsQueryState',
  default: 'admir',
});

export const channelsState = atom({
  key: 'channelsStateAtom',
  default: null,
});

export const visibleChannelsState = atom({
  key: 'visibleChannelsState',
  default: 0,
});

export const totalChannelsState = atom({
  key: 'totalChannelsState',
  default: 0,
});

export const channelCursorState = atom({
  key: 'channelCursor',
  default: '',
});

export const loadChannelsQuery = selectorFamily({
  key: 'loadChannelsQuery',
  get: (cursor: string) => async ({ get }) => {
    const query = get(channelsQueryState);
    const liveOnly = get(channelsLiveQueryState);
    return listChannels(query, liveOnly, cursor);
  },
});
