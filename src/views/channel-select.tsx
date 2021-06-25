import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components';
import ChannelFilterComponent from '../components/ChannelFilterComponent';

import ChannelListComponent from '../components/ChannelListComponent';

const FullWidth = styled(Grid)`
  width: 100%;
`;

const ChannelSelect: FC = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={1}
    style={{ width: '99%' }}
  >
    <FullWidth item>
      <ChannelFilterComponent />
    </FullWidth>
    <FullWidth item>
      <ChannelListComponent />
    </FullWidth>
  </Grid>
);

export default ChannelSelect;
