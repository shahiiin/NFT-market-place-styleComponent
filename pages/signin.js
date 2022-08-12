import React from 'react'
import styled from 'styled-components'




const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input1 = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  padding: 10px;
  border-radius: 7px;
`
const Input2 = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  padding: 10px;
  border-radius: 7px;
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
  margin-left: 125px;
  margin-top: 2rem;
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 7px;
`
const Label = styled.label`
  color: white;
  
`
export default function signin() {
  return (
    <Main>
      <Container>
        <Param>signin</Param>
        <Form>
          <Label>Username:</Label>
          <Input1 placeholder="user name..." />
          <Label>Password:</Label>
          <Input2 placeholder="password.." />
          <Button>signin</Button>
        </Form>
      </Container>
    </Main>
  )
}
