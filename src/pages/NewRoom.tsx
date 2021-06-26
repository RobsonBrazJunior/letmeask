import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function NewRoom() {
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        });
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration that symbolizes questions and answers" />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Answer your audience's questions in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Create a new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Name's room"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>
                        Would you like to join an existing room? <Link to="/">Click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}