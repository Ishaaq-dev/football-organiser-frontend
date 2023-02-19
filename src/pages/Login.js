import React, { useState } from 'react';
import EnterPhoneNumber from '../components/enterPhoneNumber';
import EnterCode from '../components/enterCode';
import EnterDetails from '../components/enterDetails';
import { Login_States } from '../utils/enums';

function Login(props) {
    const [loginState, setLoginState] = useState(Login_States.ENTER_MOBILE);

    const loginStateSwitch = () => {
        switch(loginState) {
            case Login_States.ENTER_MOBILE:
                return (<EnterPhoneNumber setLoginState={setLoginState} />)
            case Login_States.ENTER_CODE:
                return (<EnterCode setLoginState={setLoginState} />)
            case Login_States.ENTER_DETAILS:
                return (<EnterDetails setLoginState={setLoginState} />)
            case Login_States.AUTHENTICATED:
                props.setAuthenticated(true);
        }
    }
    
    return (
        <div className="Login">
            { loginStateSwitch() }
        </div>
    );
}

export default Login;