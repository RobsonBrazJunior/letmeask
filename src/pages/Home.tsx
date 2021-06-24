import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            history.push('/rooms/new');
        })
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