import React from 'react'
import styled from "styled-components"
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                L
            </Logo>
            <Middle>
            <Links>Home</Links>
                <Links>About</Links>
                <Links>Support Us</Links>
                <Links>Events</Links>
                <Links>Contact</Links>
            </Middle>
            <Donate>Donate</Donate>
            <Dehaze><DehazeIcon  sx={{ fontSize: 50 }}/></Dehaze>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
`
const Wrapper =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;

    @media (min-width: 300px) and (max-width: 768px) {
        display: none;
    }
  
`
const Links = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const Donate = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    background: #E9538D;

    @media (min-width: 300px) and (max-width: 768px) {
        display: none;
    }
`
const Dehaze = styled.div`
    margin-right: 20px;
    display: flex;

    @media (min-width: 769px) {
        display: none;
    }
`