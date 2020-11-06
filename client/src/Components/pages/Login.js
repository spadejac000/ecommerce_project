import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import FlashMessage from 'react-flash-message';

const Login = () => {
  const [userLogin, setUserLogin] = useState({email: '', password: ''})

  const changeHandler = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
      theLoggedInUserId: theLoggedInUserId 
    })
  }

  let theLoggedInUserId = '';

  // prevents a logged in user from accessing login page
  useEffect(() => {
    axios.get('/api/users/login').then((res) => {
      if (res.data.loggedIn === true) {
        window.location.href = '/'
      }
    })

    axios.get('/api/users').then((res) => {
      theLoggedInUserId = res.data.id;
    })
  }, [])

  const login = (e) => {
    e.preventDefault()
    axios.post('/api/users/login', userLogin).then(res => {
      console.log('th data: ', res)
      window.location.href = res.data.redirect;
    }).catch(err => {
      console.log(err)
    })
  }

  const Message = () => (
    <FlashMessage duration={5000}>
      <strong>I will disapper in 5 seconds!</strong>
    </FlashMessage>
  )

  return (
    <div>
      <Form className="card bg-dark p-5 login-form" onSubmit={login}>
        <h1 className='text-center'>Login</h1>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler}/>
        </FormGroup>
        <Button type="submit" className="mb-3">Login</Button>
        <Label>Not registered yet?</Label>
        <a className="btn btn-info" href="/register">Register</a>
      </Form>
      
    </div>
  );
}

export default Login;