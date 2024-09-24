import React from 'react'
import { PlayerWrapper, AvatarWrapper } from './Player.style';
import Avatar from 'react-nice-avatar';
import { Subtitle } from "../../styles/General.styled";

function Player ({player, isPlayerActive}) {
  return (
   <PlayerWrapper>
    <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
    <Avatar {...player.AvatarConfig} />
    </AvatarWrapper>
      <Subtitle>
        {player.name} ({player.choice. toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
}

export default Player;