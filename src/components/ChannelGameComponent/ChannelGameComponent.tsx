import React from 'react';
import { ChannelType } from '../../types/channel';

export interface ChannelGameProps {
  channel: ChannelType
}

const ChannelGameComponent: React.FC<ChannelGameProps> = ({ channel }) => {
  let gameDescription = '';
  if (channel.game_name !== '') {
    gameDescription = channel.is_live
      ? `They are currently playing ${channel.game_name}`
      : `They were last playing ${channel.game_name}`;
  } else {
    gameDescription = 'Looks like they were never live :(';
  }

  return (
    <span>{gameDescription}</span>
  );
};

export default ChannelGameComponent;
