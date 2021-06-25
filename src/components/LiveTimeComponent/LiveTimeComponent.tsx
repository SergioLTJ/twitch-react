import { AccessTime } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { LiveTimeWrapper } from './styles';

export interface LiveTimeComponentProps {
  startTime: string;
}

const TimeIcon = styled(AccessTime)`
  margin-right: 5px;
`;

const LiveTimeComponent: React.FC<LiveTimeComponentProps> = ({ startTime }) => {
  if (!startTime) return <></>;

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const elapsed = Date.now() - new Date(startTime).getTime();
  const totalMinutes = elapsed / 1000 / 60;
  const hours = formatTime(Math.floor(totalMinutes / 60));
  const minutes = formatTime(Math.floor(totalMinutes % 60));

  const time = `${hours}:${minutes}`;

  return (
    <LiveTimeWrapper>
      <TimeIcon />
      <span>{time}</span>
    </LiveTimeWrapper>
  );
};

export default LiveTimeComponent;
