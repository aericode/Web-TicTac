import React, { useState } from 'react';
import { PlayerSide } from '../../enums/PlayerSide';
import { GameTile } from '../GameTile';
import { GridContainer } from './styles';

export function GameGrid() {
    const [tileStateArray, setTileStateArray] = useState<(PlayerSide | null)[]>(new Array(9).fill(null));

    return (
        <GridContainer>
            {tileStateArray.map((tileState, index) => (
                <GameTile key={index} markValue={tileState} />
            ))}
        </GridContainer>
    );
}