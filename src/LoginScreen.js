import "./App.css";
import voteImg from "./vote.png";
import VotingPage from "./VotingPage";
import React, { useState } from 'react';


function LoginScreen() {
    const [signIn, setSignIn] = useState(false);    
    return (
        <>
        {signIn ? (<VotingPage/>) :(
        <div className="container" id="container">
           
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1><br/>
                    <input type="text" placeholder="CMS-ID" /><br/>
                    <input type="password" placeholder="Password" /><br/>
                    <button onClick={() => setSignIn(true)}>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                     <div className="overlay-panel overlay-right">
                        <h1>E-Voting System</h1>
                        <img src={voteImg} height={300} width={300} alt="vote" />
                    </div>
                </div>
            </div>
        </div>

        
        )}
        </>
        
    );
}


export default LoginScreen;
