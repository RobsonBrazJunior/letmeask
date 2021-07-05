import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss'

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id} />
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>React Room</h1>
                    <span>4 Questions</span>
                </div>

                <form>
                    <textarea
                        placeholder="What would you like to ask?"
                    />

                    <div className="form-footer">
                        <span>To submit a question, <button>please login</button>.</span>
                        <Button type="submit">Submit a question</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}