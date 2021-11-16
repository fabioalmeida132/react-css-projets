import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  top: 0px;
  background-color: #60b4df;
  width: 100%;
  z-index: 1000;
`



export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Logo = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 3rem;
`

export const Navbar = styled.nav`
  flex: 3;
  display: flex;
  
  @media (max-width: 920px){
    position: fixed;
    height: calc(100vh - 3rem);
    top: 3rem;
    left: 0;
    width: 100%;
    background-color: #69bde7;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: auto;
    transform: ${props => props.open ? '' : 'translateX(100%)'};
    transition: ${props => props.open ? '.65s' : ''};
  }
`

export const NavbarLinks = styled.div`
 flex: 2; 
 
   @media (max-width: 920px){
    flex: initial;
    width: 100%;
  }
`

export const NavbarLinkUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 920px){
    flex-direction: column;
  }
`
export const NavbarDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 10rem;
  transform: translateY(10px);
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  
  @media (max-width: 920px){
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: auto;
    width: 100%;
    padding: 0;
    background-color: #3183ac;
    display: none;
  }
     
`

export const NavbarDropdownSecond = styled.div`
  position: absolute;
  width: 10rem;
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  top: 0;
  left: 92%;
  padding-left: .8rem;
  cursor: pointer;
  transform: translateX(10px);
  
  @media (max-width: 920px){
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    opacity: 1;
    pointer-events: auto;
    width: 100%;
    padding: 0;
    background-color: #3183ac;
    display: none;
  }
`

export const NavbarLinkLI = styled.li`
  position: relative;
  
  a {
    line-height: 3rem;
    color: #fff;
    padding: 0 .8rem;
    letter-spacing: 1px;
    font-size: .95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .5s;
    
    &:hover{
    background-color: #fff;
    color: #3498db;
    }
    
    @media (max-width: 920px){
      line-height: 1;
      padding: 1.6rem 2rem;
    }
   
  }
  
  &:hover ${NavbarDropdown} {
    transform: translate(0,0);
    opacity: 1;
    pointer-events: auto;
  }
  
  @media (max-width: 920px){
    width: 100%;
    opacity: 1;
    transform: translateY(15px);
    
    &:hover ${NavbarDropdown} {
      display: block;
    }
  }
  

`



export const NavbarDropdownUL = styled.ul`
  position: relative;
`

export const NavbarDropdownLI = styled.li`
  position: relative;
  
  a {
    background-color: #6cbaea;
    color: #fff;
    
      
   @media (max-width: 920px){
      pointer-events: auto;
      padding: 1.2rem 2rem 1.2rem 3rem;
   }
  }
  
   &:hover ${NavbarDropdownSecond} {
    transform: translate(0,0);
    opacity: 1;
    pointer-events: auto;
  }
  
 @media (max-width: 920px){
   &:hover ${NavbarDropdownSecond} {
    display: block;
    a {
     padding: 1.2rem 2rem 1.2rem 4rem;
    }
   }
  }

`


export const NavbarButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
  a {
    background-color: #fff;
    color: #69bde7;
    display: inline-block;
    padding: .5rem 1.3rem;
    font-size: .8rem;
    border: 2px solid #fff;
    border-radius: 2rem;
    line-height: 1;
    margin: 0 .2rem;
    transition: .3s;
    text-transform: uppercase;
  }
`

export const Container = styled.div`
  max-width: 65rem;
  padding: 0 2rem;
  position: relative;
  height: 3rem;
  margin: 0 auto;
  display: flex;

`
