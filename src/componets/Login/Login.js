import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login!!</h3>
            <div style={{margin:'20px'}}>
                <button>Google SignIn</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;