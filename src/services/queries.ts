const listChannelsEndpoint = (query: string, liveOnly: boolean, cursor: string) : string => `/search/channels?query=${query}&live_only=${liveOnly}&first=52&after=${cursor}`;
export default listChannelsEndpoint;
