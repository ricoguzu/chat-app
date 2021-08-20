import { ChatEngine } from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed';

import './App.css';
import LoginForm from './components/loginForm';

//component for the app 
const App = () => {
     //if user not login in return the login page
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="5907df2d-ed51-47ba-843c-8de948b5f0d9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;