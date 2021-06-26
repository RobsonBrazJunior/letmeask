import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new');
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google's logo" />
                        Create your room with Google
                    </button>
                    <div className="separator">Or entry in a room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter the room code"
                        />
                        <Button type="submit">
                            Enter the room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}