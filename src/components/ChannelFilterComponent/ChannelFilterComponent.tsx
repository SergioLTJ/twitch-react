import {
  FormControlLabel, Grid, Switch,
} from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import useResetInfiniteScroll from '../../hooks/useResetInfiniteScroll';
import { channelsLiveQueryState } from '../../state/channel/channelList';
import { InfiniteLoaderType } from '../InfiniteScrollComponent/types';
import SearchFieldComponent from '../SearchFieldComponent';

const ChannelFilterComponent: React.FC = () => {
  const [live, setLive] = useRecoilState(channelsLiveQueryState);
  const reset = useResetInfiniteScroll(InfiniteLoaderType.Channel);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLive(e.currentTarget.checked);
    reset();
  }, [reset, setLive]);

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justify="center"
    >
      <Grid item style={{ width: '40%' }}>
        <SearchFieldComponent loaderIdentifier={InfiniteLoaderType.Channel} />
      </Grid>
      <Grid item>
        <FormControlLabel
          control={<Switch checked={live} onChange={onChange} />}
          label="Only live channels"
        />
      </Grid>
    </Grid>
  );
};

export default ChannelFilterComponent;
