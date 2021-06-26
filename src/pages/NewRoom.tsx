import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

export function NewRoom() {
    // const { user } = useContext(AuthContext);

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
                    <form>
                        <input
                            type="text"
                            placeholder="Name's room"
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