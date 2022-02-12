import React from 'react'
import styled from "styled-components"

const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Top>Empowering Women and Girls world wide</Top>
            <Bottom>
                <Mission>
                    <Big>our Mission</Big>
                    <Small>Our goal, vision and commitment</Small>
                </Mission>
                <Events>
                    <Big>our Events</Big>
                    <Small>Register and help make a change</Small>
                </Events>
                <Involved>
                    <Big>Get Involved</Big>
                    <Small>Register and help make a change</Small>
                </Involved>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-image: url("/Images/newBack.jpg");
    background-position: top center;
    background-size: 100% calc(100vh - 80px);
    background-repeat: no-repeat;
`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
const Top = styled.div`
    color: white;
    font-family: Lobster;
    font-size: 80px;
    width: 60%;
    text-align: center;
    font-weight: bold;
    /* height: 100%; */
    margin-bottom: 150px;
    background-color: rgba(0,0,0, 0.2) ;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 0;
    }
`
const Bottom = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    @media (min-width: 300px) and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const Mission = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #E9538D;
    color: white;
    font-family: Lobster;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
const Big = styled.div`
    
`
const Small = styled.div`
    font-size: 20px;
    font-family: poppins;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 10px;
    }
`
const Events = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #72A4EE;
    color: white;
    font-family: Lobster;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
const Involved = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #2E427F;
    color: white;
    font-family: Lobster;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`