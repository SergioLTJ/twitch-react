import React from 'react';
import { ChannelType } from '../../types/channel';

export interface ChannelStateProps {
  channel: ChannelType;
}

const ChannelStateComponent: React.FC<ChannelStateProps> = ({ channel }) => {
  const elapsed = Date.now() - new Date(channel.started_at).getTime();
  const totalMinutes = elapsed / 1000 / 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes - (hours * 60));

  const liveTime = hours > 0
    ? `${hours} hours and ${Math.floor(minutes)} minutes.`
    : `${minutes} minutes.`;

  return (
    <>
      <b>{channel.display_name}</b>
      <span> is currently</span>
      {channel.is_live
        ? (
          <span>
            {` LIVE :D. They have been live for ${liveTime}`}
          </span>
        )
        : <span> not live :(</span>}
    </>
  );
};

export default ChannelStateComponent;
