import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/GameLogo.jpeg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius='25px'></Image>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar