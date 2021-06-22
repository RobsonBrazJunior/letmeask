import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
                        Would you like to join an existing room? <a href="#">Click here</a>
                    </p>
                </div>
            </main>
        </div>
    )
}