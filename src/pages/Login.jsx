import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
  const navigate = useNavigate()
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  })
  const location = useLocation()
  const stateLocation = location?.state

  const changeEmail = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value

    setForm({
      ...form,
      email: value
    })
  }

  const changePassword = (e) => {
    // console.log(e.target?.value)
    const value = e.target?.value

    setForm({
      ...form,
      password: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(form)
    if (form.email && form.password) {
      fetch('https://6247d3b64bd12c92f4041c17.mockapi.io/users')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        const findUser = data?.find(user => (user?.email === form.email) && (user?.password === form.password)) 
        if (findUser) {
          console.log('dia berhasil login')
          toast.success('Success Login !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          // console.log(location)
          localStorage.setItem('userLogin', form.email)
          localStorage.setItem('userLoginID', findUser.id)
          const fromLocation = stateLocation?.from?.pathname
          if (fromLocation) {
            navigate(fromLocation)
          } else {
            navigate('/')
          }
        } else {
          console.log('dia gagal login')
          toast.error('Invalid Auth !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <Container style={{ marginTop: '100px' }}>
      <ToastContainer />
      <div className="row row-cols-2">
        <div>
          <img
            src="https://res.cloudinary.com/skilvul/image/upload/v1648863714/assets%20img/project-5-final/undraw_login_re_4vu2_e0hzqv.svg"
            width="100%"
            height="90%"
            alt="img-login"
          />
        </div>
        <div>
          <h1 className="text-center mb-3">Masuk</h1>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukin email"  value={form.email} onChange={(e) => changeEmail(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => changePassword(e)} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Masuk
              </Button>
            </div>
          </Form>
          <div style={{ 
            marginTop: '30px', 
            display: 'flex', 
            justifyContent: 'center',
            borderTop: '1px solid black',
            paddingTop: '20px',
            cursor: 'pointer'
          }}
            onClick={() => navigate("/register")}
          >
            Haven't an account ? Daftar disini !
          </div>
        </div>
      </div>
      
    </Container>
  );
}

export default LoginPage;
