import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { CgSearch } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Colors, Devices } from './Theme'
import SearchBar from './Header/SearchBar'
import SearchBarMob from './Header/MobileSearchBar'
import { useState } from 'react'
import Link from 'next/link'

const HeaderEl = styled.header`
  z-index: 10;
  display: flex;
  color: ${Colors.White};
  width: 100%;
  align-items: center;
  height: 10%;
  gap: 1rem;
  padding: 1rem 1.5rem;
  top: 0;
  background-color: ${Colors.Background};
  position: sticky;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoText = styled.a`
  font-size: 1.2rem;
  font-weight: 500;
  color: #bbbbbb;
`

const Logo = styled.img`
  width: 45px;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
`

const Nav = styled.nav`
  margin-left: auto;
  border-right: 1px solid ${Colors.Gray};
  padding-right: 1rem;
  display: none;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }

  @media ${Devices.Laptop} {
    display: block;
  }
`

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 400;
`

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Devices.Laptop} {
    display: none;
  }
`
const MenuIcon = styled(SearchIcon)``

const AuthItems = styled(NavItem)`
  font-size: 1rem;
  display: none;
  @media ${Devices.Laptop} {
    display: inherit;
  }
`

export default function Header({ mobileMenu }) {
  const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu
  const [SearchIsOpen, setSearchIsOpen] = useState(false)

  function toggleMenu() {
    setMobileMenuIsOpen(!MobileMenuIsOpen)
  }

  return (
    <HeaderEl>
      <MenuIcon>
        {MobileMenuIsOpen ? (
          <IoClose
            style={{ fontSize: '2.5rem' }}
            color={Colors.Primary}
            onClick={() => {
              toggleMenu()
            }}
          />
        ) : (
          <FiMenu
            onClick={() => {
              toggleMenu()
            }}
          />
        )}
      </MenuIcon>
      <Center>
        <Logo src="/images/cryptoLogo.png" />
        <LogoText href="#">NFT</LogoText>
        <SearchBar />
        <Nav>
          <ul>
            <li>
              <Link
                target="_blank"
                href="https://www.binance.com/en/nft/home?ads=true&utm_source=googleadwords_int&utm_medium=cpc&utm_campaign=paid_NFT&ref=HDYAHEES&gclid=CjwKCAjw9NeXBhAMEiwAbaY4lt_x3Uf_bJozDFxzbpoCpowJxYR5IeXnwGAtrEkFqTa9bc3yo-5HDBoCmu4QAvD_BwE"
              >
                <a>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="/colection">
                <a>colections</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Brands</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </Center>
      {SearchIsOpen ? (
        <SearchBarMob
          SearchIsOpen={SearchIsOpen}
          setSearchIsOpen={setSearchIsOpen}
        />
      ) : (
        ''
      )}
      <Link href="/signin">
        <a>Sign In</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up</a>
        </Link>
      <SearchIcon>
        <CgSearch
          onClick={() => {
            setSearchIsOpen(!SearchIsOpen)
          }}
        />
      </SearchIcon>
    </HeaderEl>
  )
}
