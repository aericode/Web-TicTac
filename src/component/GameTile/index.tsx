import { InnerContent, Tile } from "./styles";
import { PlayerSide } from '../../enums/PlayerSide';

type Props = {
    markValue: PlayerSide | null
}

export function GameTile({markValue}:Props){
    return(
    <Tile>
        <InnerContent>
            {markValue!==null &&( (markValue===PlayerSide.playerX) ? '❌' : '⭕' )}
        </InnerContent>
    </Tile>
    )
}