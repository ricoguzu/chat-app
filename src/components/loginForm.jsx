import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
     const [username, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const handleSubmit = async (e) => {
         e.preventDefault(); //prevent the browser from refreshening our we submit

         //authenticate
         const authObject = { 'Project-ID': "5907df2d-ed51-47ba-843c-8de948b5f0d9", 'User-Name': username, 'User-Secret': password}

         try {
             //username / password => chatengine -> give use message
             await axios.get('https://api.chatengine.io/chats', { headers: authObject});

             //if it works out we are logged
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

             window.location.reload();
         } catch (error) {
             //else error -> try with new username credentials...
             setError('Oops, Incorrect Credentials..Jaribu Tena')
         }

     }

     return (
         <div className="wrapper">
             <div className="form">
                 <h1 className="title">Chat App <br/> ©ᶢᶹᶼᶹ ᶧᶟᶜᶣ</h1>
                 <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} 
                    className="input" placeholder="User-Name" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                    className="input" placeholder="Password" required />

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                 </form>
             </div>
         </div>
     );
};

export default LoginForm;