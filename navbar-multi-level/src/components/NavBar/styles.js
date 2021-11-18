import styled from "styled-components";
import {ChevronDown} from '@styled-icons/bootstrap/ChevronDown'
import {MenuArrowOutline} from '@styled-icons/evaicons-outline/MenuArrowOutline'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'

export const HideDesktop = styled.div`
  display: none;
`

export const MenuHamburguer = styled(MenuArrowOutline)`
  
  display: none;

  @media (max-width: 920px){
    color: #2575ae;
    position: absolute;
    top: 25px;
    right: 5px;
    cursor: pointer;
    display: ${props => props.open ? 'none' : 'block'};
  }
`

export const MenuClose = styled(CloseOutline)`
  display: none;
  
  @media (max-width: 920px){
    color: #2575ae;
    position: absolute;
    top: 25px;
    right: 5px;
    cursor: pointer;
    display: ${props => props.open ? 'block' : 'none'};
  }
`

export const Header = styled.div`
  //background-color: #60b4df;
  background-color: #fff;
  width: 100%;
  z-index: 1000;

  @media (max-width: 920px){
    position: fixed;
    top: 0px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 165px;
  }

  @media (max-width: 920px){
    img {
      width: 100%;
      max-width: 125px;
    }
  }
`

export const Logo = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 3rem;
`

export const Navbar = styled.nav`
  display: flex;
  
  
  @media (max-width: 920px){
    position: fixed;
    height: 100vh;
    top: 5rem;
    left: 0;
    width: 100%;
    background-color: #2575ae;
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
   @media (max-width: 920px){
    flex: initial;
    width: 100%;
  }
`

export const NavbarLinkUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 920px){
    flex-direction: column;
  }
`
export const NavbarDropdown = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  white-space: nowrap;
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
    //background-color: #2e88cb;
    display: none;
  }
     
`

export const Arrow = styled(ChevronDown)`
  //color: #fff;
  color: #3498db;
  cursor: pointer;

  @media (max-width: 920px){
    color: #fff;
    transform: ${props => props.open && props.link === props.indice ? 'rotate(-90deg)' : ''};
  }
`

export const NavbarDropdownSecond = styled.div`
  display: flex;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  top: 0;
  left: 95%;
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
    //background-color: #3183ac;
    display: none;
    
  }
`

export const NavbarLinkLI = styled.li`
  position: relative;

  display: ${props => props.hide === true ? 'none' : ''};
  
  a {
    line-height: 3rem;
    color: #3498db;
    padding: 0 .8rem;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    &:hover{
      background-color: #fff;
      color: #3498db;
    }

 
    
    @media (max-width: 920px){
      line-height: 0;
      padding: 1.6rem 2rem;

      &:hover{
        background-color: transparent;
        color: #fff;
      }
      
    }
   
  }
  
  &:hover ${NavbarDropdown} {
    transform: translate(0,0);
    opacity: 1;
    pointer-events: auto;
  }
  
  @media (max-width: 920px){
    display: block;
    width: 100%;
    opacity: 1;
    transform: translateY(15px);
    
    a {
      color: #fff;
    }

    &:hover{
      background-color: transparent;
      color: #3498db;
    }
    
    ${NavbarDropdown}{
      display: ${props => props.open && props.link === props.indice ? 'block' : 'none'};
    }
    
  }
  
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;

  
  &:hover > a {
    color: #fff;
    background-color: #2e88cb;
  }
  
  &:hover{
    //background-color: #fff;
    background-color: #2e88cb;
    color: white;
  }

  &:hover ${Arrow}{
    background-color: #2e88cb;
    color: white;
  }

  @media (max-width: 920px){
    &:hover{
      background-color: transparent;
    }
    

    &:hover > a {
      color: #fff;
      background-color: transparent;
    }

    &:hover ${Arrow}{
      color: #fff;
    }
    
  }
`



export const NavbarDropdownUL = styled.ul`
  position: relative;
  background-color: #fff;
`

export const NavbarDropdownLI = styled.li`
  position: relative;
  background-color: #fff;
  min-width: 150px;
  
  a {
    
   @media (max-width: 920px){
      pointer-events: auto;
      padding: 1.2rem 2rem 1.2rem 3rem;
   }
    
  }

  &:hover {

    a {
      background-color: #2e88cb;
      color: white;
    }

    & ${Arrow}{
     color: #fff;
    }
  }
  
  & ${Arrow}{
    transform: rotate(-90deg);
  }
  
  
  &:hover {
    background-color: #2e88cb;
    color: white;
  }
  
   &:hover ${NavbarDropdownSecond} {
     transform: translate(0,0);
     opacity: 1;
     pointer-events: auto;
     a {
       color: #2e88cb;
       background-color: #fff;
     }
     
     a:hover{
       color: #fff;
       background-color: #2e88cb;
     }
  }
  
 @media (max-width: 920px){

   & ${Arrow}{
     transform: ${props => props.openSecond && props.linkSecond === props.indiceSecond ? 'rotate(-360deg)' : ''};
   }

   background-color: #2e88cb;
   
   & ${NavbarDropdownSecond} {
    a {
      padding: 1.2rem 2rem 1.2rem 4rem;
      background-color: #2e88cb;
    }
     
   }

   &:hover ${NavbarDropdownSecond} {
     transform: translate(0,0);
     opacity: 1;
     pointer-events: auto;
     a {
       color: #fff;
       background-color: #2e88cb;
     }
   }

   ${NavbarDropdownSecond}{
     display: ${props => props.openSecond && props.linkSecond === props.indiceSecond ? 'block' : 'none'};
   }
  }

`


export const NavbarButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  
  a {
    background-color: #DC6A01;
    color: #fff;
    display: inline-block;
    padding: .5rem 1.3rem;
    font-size: 15px;
    font-weight: 600;
    border: 2px solid #fff;
    border-radius: 10px;
    line-height: 1;
    margin: 0 .2rem;
    transition: .3s;
  }

  @media (max-width: 920px){
    a{
      display: none;
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  padding: 0 2rem;
  position: relative;
  height: 96px;
  margin: 0 auto;
  
  @media (max-width: 920px){
    height: 5rem;
    
    & ${HideDesktop}{
      display: block;
    }
  }
  
`
export const Section = styled.div`
    height: 200vh;
    min-height: 200vh;
    background-color: orange;
`