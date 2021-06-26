import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>
            <span>Room #idroom</span>
        </button>
    )
}