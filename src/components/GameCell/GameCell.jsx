import React, { useContext } from 'react';
import { CellStyle } from "./GameCellStyled";
import { GameContext} from "../../contexts/GameContext";
import { checkForWinner } from '../../utils/GameUtils';

function GameCell({ cellItem, index}) {
  const { updatedBoard, game } =useContext(GameContext);

  const cellClickHandler = () => {
    updatedBoard(index)
    const result = checkForWinner(game.board)

    if(result) {
    }
  }
 return <CellStyle
 onClick={cellClickHandler }
>
 {cellItem}
 </CellStyle>;
}
export default GameCell;