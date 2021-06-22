import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Illustration that symbolizes questions and answers" />
                <strong>Create live Q&amp;A rooms</strong>
                <p>Answer your audience's questions in real time</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Google's logo" />
                        Create your room with Google
                    </button>
                    <div>Or entry in a room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter the room code"
                        />
                        <button>
                            Enter the room
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}