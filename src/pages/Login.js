import React, { useState } from 'react';
import EnterPhoneNumber from '../components/enterPhoneNumber';
import EnterCode from '../components/enterCode';

function Login(props) {
    const [codeSent, setCodeSent] = useState(false);
    return (
        <div className="Login">
            { codeSent 
            ? <EnterCode setAuthenticated={props.setAuthenticated} />
            : <EnterPhoneNumber setCodeSent={setCodeSent} /> }
        </div>
    );
}

export default Login;