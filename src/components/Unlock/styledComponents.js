// Style your elements here

import styled from 'styled-components'

export const BackGround = styled.div`
background-image:linear-gradient(to bottom,#161617,#0b0c1e,#3c2940);
height:100vh;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const LockImage = styled.img`
height:15vh;
width:20%;`
export const DeviceParagraph = styled.p`
color: #e2e8f0;
font-size:30px;
font-family:"Roboto";
font-weight:bold;
`
export const LockButton = styled.button`
 color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  background-color: #06b6d4;
  border: none;
  border-radius: 12px;
  margin-top: 90px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
