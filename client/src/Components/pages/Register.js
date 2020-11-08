import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios'

const Register = () => {
  const [userInfo, setUserInfo] = useState({name: '', username: '', email: '', password: ''})

  const changeHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value 
    })
  }

  // prevents a logged in user from accessing register page
  useEffect(() => {
    axios.get('https://warm-sands-34549.herokuapp.com/api/users/register').then((res) => {
      if (res.data.loggedIn === true) {
        window.location.href = '/'
      }
    })
  }, [])

  const register = (e) => {
    e.preventDefault()
    axios.post('https://warm-sands-34549.herokuapp.com/api/users/register', userInfo).then(res => {
      console.log(res.data)
      window.location.href = res.data.redirect;
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <Form className="card bg-dark p-5 register-form" onSubmit={register}>
        <h1 className="text-center">Register</h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Name" onChange={changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={changeHandler}/>
        </FormGroup>
        <Button type="submit" className="mb-3">Register</Button>
        <Label>Already a user?</Label>
        <a className="btn btn-info" href="/login">Login</a>
      </Form>
    </div>
  );
}

export default Register;