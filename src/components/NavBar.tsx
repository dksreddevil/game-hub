import { HStack,Image, Text } from '@chakra-ui/react'
import logo from '../assets/GameLogo.jpeg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'></Image>
        <Text>Hello</Text>
    </HStack>
  )
}

export default NavBar