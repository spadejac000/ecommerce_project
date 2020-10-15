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

  const register = (e) => {
    e.preventDefault()
    axios.post('/api/users/register', userInfo).then(res => {
      console.log(res.data)
      window.location.href = res.data.redirect;
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <Form className="card bg-dark p-5" onSubmit={register}>
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
        <Button type="submit">Register</Button>
      </Form>
      <a className="btn btn-info mt-5" href="/login">Login</a>
    </div>
  );
}

export default Register;