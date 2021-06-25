import Grid from '@material-ui/core/Grid';

import React, { FC } from 'react';
import { loadChannelsQuery } from '../../state/channel/channelList';
import ChannelItemComponent from '../ChannelItemComponent/ChannelItemComponent';
import InfiniteScrollComponent from '../InfiniteScrollComponent/InfiniteScrollComponent';
import { ChannelType } from '../../types/channel';
import { InfiniteLoaderType } from '../InfiniteScrollComponent';

const ChannelListComponent: FC = () => (
  <Grid container spacing={3}>
    <InfiniteScrollComponent
      identifier={InfiniteLoaderType.Channel}
      query={loadChannelsQuery}
      renderElement={(channel) => {
        const typed = channel as ChannelType;
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={typed.id}>
            <ChannelItemComponent channel={typed} />
          </Grid>
        );
      }}
    />
  </Grid>
);
export default ChannelListComponent;
