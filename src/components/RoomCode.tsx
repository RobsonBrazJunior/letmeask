import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipeboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipeboard}>
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>
            <span>Room #idroom</span>
        </button>
    )
}