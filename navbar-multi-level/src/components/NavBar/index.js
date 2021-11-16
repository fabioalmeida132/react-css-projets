import * as S from './styles'
import {useState} from "react";

function NavBar() {

  const [isOpenMenu,setIsOpenMenu] = useState(true);

  return(
   <S.Header>
     <S.Container>
       <S.LogoContainer>
         <S.Logo>teste</S.Logo>
       </S.LogoContainer>
       <S.Navbar open={isOpenMenu}>
         <S.NavbarLinks>
          <S.NavbarLinkUL>
            <S.NavbarLinkLI>
              <a href="/">Home</a>
            </S.NavbarLinkLI>
            <S.NavbarLinkLI>
              <a href="/">Produtos</a>
              <S.NavbarDropdown>
                <S.NavbarDropdownUL>
                  <S.NavbarDropdownLI>
                    <a href="/">LINK 1</a>
                  </S.NavbarDropdownLI>
                  <S.NavbarDropdownLI>
                    <a href="/">LINK 2</a>
                  </S.NavbarDropdownLI>
                  <S.NavbarDropdownLI>
                    <a href="/">LINK 3</a>
                    <S.NavbarDropdownSecond>
                      <S.NavbarDropdownUL>
                        <S.NavbarDropdownLI>
                          <a href="/">LINK 1</a>
                        </S.NavbarDropdownLI>
                        <S.NavbarDropdownLI>
                          <a href="/">LINK 2</a>
                        </S.NavbarDropdownLI>
                        <S.NavbarDropdownLI>
                          <a href="/">LINK 3</a>
                        </S.NavbarDropdownLI>
                      </S.NavbarDropdownUL>
                    </S.NavbarDropdownSecond>
                  </S.NavbarDropdownLI>
                </S.NavbarDropdownUL>
              </S.NavbarDropdown>
            </S.NavbarLinkLI>
            <S.NavbarLinkLI>
              <a href="/">Serviços</a>
            </S.NavbarLinkLI>
            <S.NavbarLinkLI>
              <a href="/">Contato</a>
            </S.NavbarLinkLI>
          </S.NavbarLinkUL>
         </S.NavbarLinks>
         <S.NavbarButton>
           <a href="#" onClick={() => setIsOpenMenu(!isOpenMenu)}>ORÇAMENTO</a>
         </S.NavbarButton>
       </S.Navbar>
     </S.Container>
   </S.Header>
  );
}

export default NavBar;
