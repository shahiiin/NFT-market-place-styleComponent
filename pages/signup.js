import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`
const Input1 = styled.input`
  margin-top: 4rem;
  width: 300px;
  margin-left: 20px;
  height: 35px;
  border: none;
  padding: 10px;
  border-radius: 7px;
`
const Input2 = styled.input`
  margin-top: 5rem;
  width: 300px;
  margin-left: 20px;
  height: 35px;
  border: none;
  padding: 10px;
  border-radius: 7px;
`
const Container = styled.div`
  background-color: black;
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
const Button= styled.button`
  margin-left: 125px;
  margin-top: 2rem;
  width: 100px;
  height: 25px;
  border: none;
  border-radius: 7px;
`

export default function Signup() {
  return (
    <Main>
      <Container>
        <Param>signup</Param>
        <Form>
          <Input1 placeholder="user name..." />
          <Input2 placeholder="password.." />
          <Button>signup</Button>
        </Form>
      </Container>
    </Main>
  )
}
