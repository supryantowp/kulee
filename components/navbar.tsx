import React from 'react'
import {
  Icon,
  Flex,
  HStack,
  Image,
  Text,
  Switch,
  Input,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { BiPulse } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack
      justify={'space-between'}
      py={6}
      px={14}
      borderBottom={'1px'}
      borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
      bgColor={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
    >
      <HStack align={'center'}>
        <Image
          alt='profile'
          src='https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=800x600&vertical=top'
          w={'50px'}
          h={'50px'}
          objectFit={'cover'}
          borderRadius={'lg'}
        />
        <Flex direction={'column'}>
          <Text fontWeight={'bold'}>Rara Aura</Text>
          <Text mt={-1} fontSize={'sm'}>
            UIUX Designer
          </Text>
        </Flex>
      </HStack>

      <HStack spacing={8}>
        <Text>Discover</Text>
        <Text>For You</Text>
        <Text>Article</Text>
        <Text>Project</Text>
        <Text>Teams</Text>
      </HStack>

      <HStack spacing={8}>
        <Input placeholder='Search' borderRadius={'full'} />
        <Switch size='lg' onChange={toggleColorMode} />
        <Icon as={BiPulse} w={6} h={6} />
        <Icon as={IoMdMail} w={6} h={6} />
        <Button colorScheme={'blue'} px={8} borderRadius={'full'}>
          Upload
        </Button>
      </HStack>
    </HStack>
  )
}

export default Navbar
