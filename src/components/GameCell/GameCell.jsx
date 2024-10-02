import React, { useContext } from 'react';
import { CellStyle } from "./GameCellStyled";
import { ModalContext  } from '../../contexts/ModalContext';
import RoundOverModal from '../Modals/RoundOverModal/RoundOverModal';
import { GameContext} from "../../contexts/GameContext";
import { checkForWinner } from '../../utils/GameUtils';
import { ReactComponent as IconX } from "../../assets/Svgs/icon-x-outlined.svg";
import { ReactComponent as XIconOutline} from "../../assets/Svgs/icon-x-outlined.svg";
import { ReactComponent as IconO } from "../../assets/Svgs/icon-o-filled.svg";
import { ReactComponent as OIconOutline} from "../../assets/Svgs/icon-o-outlined.svg";
import { SfxContext } from '../../contexts/SfxContext';

function GameCell({ cellItem, index, isWinningCell }) {
  const { updatedBoard, game, roundComplete } =useContext(GameContext);
  const{ hoverSfx, clickSfx, winSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    clickSfx();
    updatedBoard(index);
    const result = checkForWinner(game.board)
    console.log(result);
    if(result) {
      roundComplete(result);
      if(result !== "draw") {
        winSfx();
      }
      setTimeout(()=> {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  if (cellItem === "X") {
    return(
    <CellStyle $isWinningCell={isWinningCell ?? false}>
      <IconX className="markedItem"/>
    </CellStyle> 
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle $isWinningCell={ isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  } 
  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;