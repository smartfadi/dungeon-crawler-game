import store from '../../config/store'
import {SPRITE_SIZE} from '../../config/constants'

export default function handleMovement(player){
    
    function getNewPosition(direction) {
        const oldPos = store.getState().player.position        
        switch(direction) {
            case 'LEFT':
                return [oldPos[0]-SPRITE_SIZE, oldPos[1]]
            case 'UP':
                return [oldPos[0], oldPos[1]-SPRITE_SIZE]
            case 'RIGHT':
                return [oldPos[0]+SPRITE_SIZE, oldPos[1]]
            case 'DOWN':
                return [oldPos[0], oldPos[1]+SPRITE_SIZE]
            default:
                return console.log('some other key pressed')
        }
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault()

        switch(e.keyCode) {
            case 37:
                return dispatchMove("LEFT")
            case 38:
                return dispatchMove('UP')
            case 39:
                return dispatchMove('RIGHT')
            case 40:
                return dispatchMove('DOWN')
            default:
                console.log(e.keyCode)
        }
    }
    
    window.addEventListener('keydown', (e)=>{
        handleKeyDown(e)
    })
    return player
}