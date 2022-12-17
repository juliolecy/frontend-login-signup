import Head from 'next/head'
import Image from 'next/image'
import * as k from '../styles/styles'
import {BsChevronDoubleDown} from 'react-icons/bs'
import useAOS from "../effects/useAos";
import { useEffect, useState } from 'react';


export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAOS({ duration: 2000 })
  }, [])

   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <>
    <k.Container>
      <k.Header className={ scrollY > 0? 'sticky' : ''}>
        <img src="images/background.jpg" alt="" />
        <k.Logo  className={ scrollY > 0? 'stickylogo' : ''}>JLins</k.Logo>

    <nav>
      <ul>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
    </nav>
      </k.Header>

      <k.CallToAction className={ scrollY > 0? 'none' : ''}>
        <h1>Become a</h1>
            <k.HeroGlitch data-text='DEVELOPER'>Developer</k.HeroGlitch>

      <BsChevronDoubleDown
       data-aos="fade-left"
         data-aos-duration="3000" 
         />
      </k.CallToAction>
      <k.Shadow>

      </k.Shadow>




    </k.Container>

    <k.FormSection>
      <k.ContainerTwo>
        <k.SignInContainer>
          <div className='LockImage'>
            <img src="images/lock.jpg" alt="" />
          </div>

          <k.SignInFormContainer>
           <form>
            <h2>Sign In</h2>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password' />
            <input type="submit" placeholder='Login' />
            <p>don&apos;t have an account? <a href="#">Sign up.</a></p>
            </form>  
          </k.SignInFormContainer> 
        </k.SignInContainer>

        <k.SignUpContainer>
        <div className='KeyImage'>
            <img src="images/key.jpg" alt="" />
          </div>

          <k.SignUpFormContainer>
           <form >
            <h2>Create an account</h2>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Email Address'/>
            <input type="password" placeholder='Create Password' />
            <input type="password" placeholder='Confirm Password' />
            <input type="submit" placeholder='Sign Up' />
            <p>Already have an account?<a href="#">Sign in.</a></p>
            </form>  
          </k.SignUpFormContainer> 
        </k.SignUpContainer>

      </k.ContainerTwo>
      </k.FormSection>
    </>
  )
}
