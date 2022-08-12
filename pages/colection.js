import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Pic1 from '../public/images/colection/pic1.jpeg'
import Pic2 from '../public/images/colection/pic2.jpeg'
import Pic3 from '../public/images/colection/pic3.jpeg'
import Pic4 from '../public/images/colection/pic4.jpeg'
import Pic5 from '../public/images/colection/pic5.jpeg'
import Pic6 from '../public/images/colection/pic6.jpeg'
const Main = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const Container = styled.div`
  padding: 50px;
  justify-content: center;
`
const Content = styled.h1`
  color: white;
  text-align: center;
`

export default function Colection() {
  return (
    <>
      <Main>
        <Container>
          <Image src={Pic1} alt="pic1"  />
          <Content>Price 25$</Content>
        </Container>
        <Container>
          <Image src={Pic2} alt="pic1" height="200px" />
          <Content>Price 85$</Content>
        </Container>
        <Container>
          <Image src={Pic3} alt="pic1"  />
          <Content>Price 245$</Content>
        </Container>
      </Main>
      <Main>
        <Container>
          <Image src={Pic4} alt="pic1"  />
          <Content>Price 100$</Content>
        </Container>
        <Container>
          <Image src={Pic5} alt="pic1"  />
          <Content>Price 42$</Content>
        </Container>
        <Container>
          <Image src={Pic6} alt="pic1"  />
          <Content>Price 75$</Content>
        </Container>
      </Main>
    </>
  )
}
