import * as React from 'react';

import {
  Grid, Paper, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { ChannelType } from '../../types/channel';
import { ChannelGridItem, ChannelLogo } from './styles';
import ChannelGameComponent from '../ChannelGameComponent/ChannelGameComponent';
import LiveTimeComponent from '../LiveTimeComponent';
import LiveIconComponent from '../LiveIconComponent';
import useOpenChannel from '../../hooks/useOpenChannel';

export interface ChannelItemProps {
  channel: ChannelType
}

const ChannelCard = styled(Paper)`
  padding: 20px;
  &:hover {
    background-color: #ebebeb;
    cursor: pointer;
  }
`;

const ChannelItemComponent: React.FC<ChannelItemProps> = ({ channel }) => {
  const openChannel = useOpenChannel(channel.broadcaster_login);
  return (
    <ChannelCard elevation={2} onClick={openChannel}>
      <ChannelGridItem container direction="column">
        <Grid item>
          <Grid container spacing={2} justify="center" alignItems="center" direction="column">
            <Grid item>
              <ChannelLogo src={channel.thumbnail_url} alt="Logo" />
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography variant="h5">{channel.display_name}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ChannelGameComponent channel={channel} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs style={{ marginTop: 15 }}>
          <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={2}>
            <Grid item>
              <LiveTimeComponent startTime={channel.started_at} />
            </Grid>
            <Grid item>
              <LiveIconComponent live={channel.is_live} />
            </Grid>
          </Grid>
        </Grid>
      </ChannelGridItem>
    </ChannelCard>
  );
};

export default ChannelItemComponent;
