import * as S from './styles'
import {useState} from "react";
import menu from './menu.json'

function NavBar() {

  const [isOpenMenu,setIsOpenMenu] = useState(false);
  const [isOpenSub,setIsOpenSub] = useState(false);
  const [link,setLink] = useState(0);

  const [isOpenSubSecond,setIsOpenSubSecond] = useState(false);
  const [linkSecond,setLinkSecond] = useState(0);

  function clickOpenSub (link){
    setIsOpenSub(!isOpenSub);
    setLink(link);
  }

  function clickOpenSubSecond (link){
    setIsOpenSubSecond(!isOpenSubSecond);
    setLinkSecond(link)
  }


  return(
      <>
        <S.Header>
          <S.Container>
            <S.LogoContainer>
              <img src="../../logo.svg" alt=""/>
            </S.LogoContainer>
            <S.Navbar open={isOpenMenu}>
              <S.NavbarLinks>
                <S.NavbarLinkUL>
                  {menu.links.map((el,index) => {
                    return (
                        <S.NavbarLinkLI open={isOpenSub} link={link} indice={index} key={index} hide={el.hideOnDesktop}>
                          <S.LinkContainer>
                            <a href={el.url}>{el.title}</a>
                            {el.type === 'dropdown' &&
                              <S.Arrow size={20} onClick={() => clickOpenSub(index)} open={isOpenSub} link={link} indice={index}/>
                            }
                          </S.LinkContainer>
                          {el.type === 'dropdown' &&
                          <S.NavbarDropdown>
                            <S.NavbarDropdownUL>
                              {el.dropdown.map((drop,indexDrop) => {
                                return (
                                    <S.NavbarDropdownLI openSecond={isOpenSubSecond} linkSecond={linkSecond} indiceSecond={indexDrop} key={indexDrop}>
                                      <S.LinkContainer>
                                        <a href={drop.url}>{drop.title}</a>
                                        {drop.type === 'dropdown' &&
                                          <S.Arrow size={20} onClick={() => clickOpenSubSecond(indexDrop)} openSecond={isOpenSub} link={linkSecond} indice={indexDrop}/>
                                        }
                                      </S.LinkContainer>
                                      {drop.type === 'dropdown' &&
                                      <S.NavbarDropdownSecond>
                                        <S.NavbarDropdownUL>
                                          {drop.dropdown.map((dropSecond, indexDropSecond) => {
                                            return (
                                                <S.NavbarDropdownLI key={indexDropSecond}>
                                                  <a href={dropSecond.url}>{dropSecond.title}</a>
                                                </S.NavbarDropdownLI>
                                            )
                                          })}
                                        </S.NavbarDropdownUL>
                                      </S.NavbarDropdownSecond>
                                      }
                                    </S.NavbarDropdownLI>
                                )
                              })}
                            </S.NavbarDropdownUL>
                          </S.NavbarDropdown>
                          }
                        </S.NavbarLinkLI>
                    )
                  })}
                </S.NavbarLinkUL>
              </S.NavbarLinks>
            </S.Navbar>
            <S.MenuHamburguer open={isOpenMenu} size={30} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
            <S.MenuClose open={isOpenMenu} size={30} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
            {menu.button && (
                <S.NavbarButton>
                  <a href={menu.button_url}>{menu.button}</a>
                </S.NavbarButton>
            )}
          </S.Container>
        </S.Header>
        <S.Section>

        </S.Section>
      </>

  );
}

export default NavBar;
