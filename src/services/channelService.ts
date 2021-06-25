import axiosInstance from '../config/api';
import { ChannelType } from '../types/channel';
import { PagedData } from '../types/pagedData';
import listChannelsEndpoint from './queries';

type ChannelSearchReturnType = PagedData<ChannelType>;

const listChannels = async (query: string, liveOnly: boolean, cursor: string):
  Promise<ChannelSearchReturnType> => {
  if (query === null
      || query === '') {
    return {
      data: [],
      pagination: null,
    };
  }

  const { data } = await axiosInstance.get<ChannelSearchReturnType>(
    listChannelsEndpoint(query, liveOnly, cursor),
  );

  return data;
};

export default listChannels;
