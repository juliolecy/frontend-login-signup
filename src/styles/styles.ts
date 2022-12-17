import styled, { keyframes } from 'styled-components'

const LogoEffect = keyframes`
 0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
    `

export const Container = styled.div`
width: 100%;
height: 100vh;
background: #141414;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
position: relative;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



svg{
    color: #fff;
    font-size: 4rem; 
    cursor: pointer;
}
`

export const Header = styled.header`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 100vh;
background: #000;
display: flex;
justify-content: flex-end;
align-items: center;
transition:1s;
padding: 0 100px;

img{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
}

nav{
  position: relative;
  display: flex;
  z-index:1;

  ul{
    position: relative;
    display: flex;
    transition: 0.25s;
    transform: translateX(100px);
    opacity:0;

    li{
      list-style:none;
      color: #fff;
    }
  }
}

&.sticky{
height: 80px;

img{
  opacity: 0.5;
}

h1{
  /* position: absolute;
  font-size: 2rem;
  left: 100px;
  transform: translate(-50%, -50%); */
}

nav{
  ul{
    transform: translateX(0);
    opacity:1;
    transition-delay: 0.75s;
  }
}
}
`

export const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .5s;

h1{
    font-family: 'Poppins', sans-serif;
    color: #ffffff80;
    font-size: 5rem;
    text-shadow: 2px 2px 3px rgb(255 0 0 / 10%);
    text-transform: uppercase;
    z-index: 1;
}

&.none{
  opacity:0;
  visibility: hidden;
}
`

export const HeroGlitch = styled.h1`
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 2.5rem;
    transform: scale(2);
    padding: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    &:after{
      padding: 30px;
      color: white;
      content: attr(data-text);
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      background: rgba(0, 0, 0, 0);
      overflow: hidden;
      top: 0;
        left: -3px;
      text-shadow: -2px 0 rgb(0, 0, 0);
      animation: glitch-2 2s linear infinite reverse;
    }
    &:before{
      padding: 30px;
  color: white;
  content: attr(data-text);
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  top: 0;
  left: 3px;
  text-shadow: -2px 0 rgb(0, 0, 0);
  animation: glitch-1 2s linear infinite reverse;
    }
    @keyframes glitch-1 {
    0% {
      clip: rect(132px, auto, 101px, 30px);
    }
    5% {
      clip: rect(17px, auto, 94px, 30px);
    }
    10% {
      clip: rect(40px, auto, 66px, 30px);
    }
    15% {
      clip: rect(87px, auto, 82px, 30px);
    }
    20% {
      clip: rect(137px, auto, 61px, 30px);
    }
    25% {
      clip: rect(34px, auto, 14px, 30px);
    }
    30% {
      clip: rect(133px, auto, 74px, 30px);
    }
    35% {
      clip: rect(76px, auto, 107px, 30px);
    }
    40% {
      clip: rect(59px, auto, 130px, 30px);
    }
    45% {
      clip: rect(29px, auto, 84px, 30px);
    }
    50% {
      clip: rect(22px, auto, 67px, 30px);
    }
    55% {
      clip: rect(67px, auto, 62px, 30px);
    }
    60% {
      clip: rect(10px, auto, 105px, 30px);
    }
    65% {
      clip: rect(78px, auto, 115px, 30px);
    }
    70% {
      clip: rect(105px, auto, 13px, 30px);
    }
    75% {
      clip: rect(15px, auto, 75px, 30px);
    }
    80% {
      clip: rect(66px, auto, 39px, 30px);
    }
    85% {
      clip: rect(133px, auto, 73px, 30px);
    }
    90% {
      clip: rect(36px, auto, 128px, 30px);
    }
    95% {
      clip: rect(68px, auto, 103px, 30px);
    }
    100% {
      clip: rect(14px, auto, 100px, 30px);
    }
  };
  @keyframes glitch-2 {
    0% {
      clip: rect(129px, auto, 36px, 30px);
    }
    5% {
      clip: rect(36px, auto, 4px, 30px);
    }
    10% {
      clip: rect(85px, auto, 66px, 30px);
    }
    15% {
      clip: rect(91px, auto, 91px, 30px);
    }
    20% {
      clip: rect(148px, auto, 138px, 30px);
    }
    25% {
      clip: rect(38px, auto, 122px, 30px);
    }
    30% {
      clip: rect(69px, auto, 54px, 30px);
    }
    35% {
      clip: rect(98px, auto, 71px, 30px);
    }
    40% {
      clip: rect(146px, auto, 34px, 30px);
    }
    45% {
      clip: rect(134px, auto, 43px, 30px);
    }
    50% {
      clip: rect(102px, auto, 80px, 30px);
    }
    55% {
      clip: rect(119px, auto, 44px, 30px);
    }
    60% {
      clip: rect(106px, auto, 99px, 30px);
    }
    65% {
      clip: rect(141px, auto, 74px, 30px);
    }
    70% {
      clip: rect(20px, auto, 78px, 30px);
    }
    75% {
      clip: rect(133px, auto, 79px, 30px);
    }
    80% {
      clip: rect(78px, auto, 52px, 30px);
    }
    85% {
      clip: rect(35px, auto, 39px, 30px);
    }
    90% {
      clip: rect(67px, auto, 70px, 30px);
    }
    95% {
      clip: rect(71px, auto, 103px, 30px);
    }
    100% {
      clip: rect(83px, auto, 40px, 30px);
    }
  };
     @media screen and (max-width: 680px){
    font-size: 2rem;
  }
  @media screen and (max-width: 500px){
    font-size: 1.5rem;
  }
  @media screen and (max-width: 366px){
    font-size: 1.2rem;
  }
`

export const Shadow = styled.div`
    background: linear-gradient(0deg,#141414 10%,transparent 90%);
    position:absolute;
    width: 100%;
    height: 245px;
    bottom: 0px;
`

export const Logo = styled.h1`
       font-size:2.5rem;
        cursor: pointer;
        font-weight: normal;
        width: 100px;
        color: white;
        position: relative;
        text-transform: uppercase;
        letter-spacing: 4px;
        background: linear-gradient(90deg, #000, #fff, #000);
        background-repeat: no-repeat;
        background-size: 80%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255,255,255,0);
        font-family: 'Lobster', cursive;
        text-decoration: none;
        animation: ${LogoEffect} 5s linear infinite;
        margin-left: 2rem;
        transform: translateX(100px);
          opacity:0;
        @media screen and (max-width:544px){
            font-size: 2rem;
        }
        @media screen and (max-width:544px){
          display:none;
        }

        &.stickyLogo{
          transform: translateX(100px);
          opacity:0;
        }
`
export const FormSection = styled.section`
position: relative;
min-height: 100vh;
background: #141414;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
transition: .5s;
`
export const ContainerTwo = styled.div`
position: relative;
width: 800px;
height: 500px;
background-color: #fff;
box-shadow: 0 15px 50px rgba(0,0,0,0.1);
`

export const SignInContainer = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;

.LockImage{
  position: relative;
    width: 50%;
    height: 100%;
    transition: .5s;
    
  img{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
}
`

export const SignInFormContainer = styled.div`
position: relative;
width: 50%;
height: 100%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
transition: .5s;


h2{
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

input{
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;

  &[type="submit"]{
    max-width: 100%;
    background: #677eff;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: .5s;
  }
}

p{
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;

  a{
    font-weight: 600;
    text-decoration: none;
    color: #577eff
  }
}
`
export const SignUpContainer = styled.div`

pointer-events: none;

.KeyImage{
  position: relative;
    width: 50%;
    height: 100%;
    transition: .5s;
  img{
   position: absolute;
   top: -100%;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
}`

export const SignUpFormContainer = styled.div`
position: relative;
width: 50%;
height: 100%;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
transition: .5s;
top: 100%;


h2{
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

input{
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 14px;
  margin: 8px 0;
  letter-spacing: 1px;
  font-weight: 300;

  &[type="submit"]{
    max-width: 100%;
    background: #e73e49;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: .5s;
  }

}

p{
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;

  a{
    font-weight: 600;
    text-decoration: none;
    color: #577eff
  }
}
`