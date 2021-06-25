import * as React from 'react';
import styled from 'styled-components';

const LiveIcon = styled.span`
  background-color: ${(props) => (props.color)};
  border-radius: 3px;
  padding: 5px;
`;

export interface LiveIconProps {
  live: boolean
}

const LiveIconComponent: React.FC<LiveIconProps> = ({ live }) => (
  <LiveIcon color={live ? 'green' : 'red'}>{live ? 'LIVE' : 'NOT LIVE'}</LiveIcon>
);

export default LiveIconComponent;
