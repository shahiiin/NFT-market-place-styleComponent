import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding: 10px;
  border-radius: 7px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #b5bcb9;
`

const Container = styled.div`
  background-color: #353937;
  height: 450px;
  width: 400px;
  border-radius: 15px;
`
const Param = styled.h1`
  color: white;
  margin-left: 162px;
  margin-top: 3rem;
  font-size: 30px;
`
const Form = styled.form`
  margin-top: 2rem;
  margin-left: 25px;
  width: 350px;
  height: 300px;
`
const Button = styled.button`
  background-color: #b5bcb9;
  border-radius: 7px;
  margin-top: 1rem;
  width: 100%;
  height: 45px;
  border: none;
`
const Label = styled.label`
  color: white;
  padding-top: 1rem;
`
export default function signin() {
  return (
    <Main>
      <Container>
        <Param>Signin</Param>
        <Form>
          <Label>Username:</Label>
          <Input placeholder="user name..." />
          <Label>Password:</Label>
          <Input placeholder="password.." />
          <Button>signin</Button>
        </Form>
      </Container>
    </Main>
  )
}
