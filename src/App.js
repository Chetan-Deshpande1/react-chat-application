import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


const projectID = '93e11552-dfc4-47b1-a312-1f51e3a530a8';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height='100vh'
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}
export default App