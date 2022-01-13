import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Tag,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import CardArtist from '../components/card-artist'
import CardShowcase from '../components/card-showcase'
import Navbar from '../components/navbar'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import peopleUpdatesJSON from '../data/people-updates.json'
import insipirationShowcaseJSON from '../data/inspiration-showcase.json'

const Home: NextPage = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Navbar />
      <Box bgColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}>
        <VStack align={'start'} spacing={4} px={14} py={8}>
          <Text fontSize={'lg'} fontWeight={'bold'}>
            People Updates
          </Text>
          <HStack spacing={8}>
            {peopleUpdatesJSON.map((artist) => {
              return <CardArtist key={artist.id} artist={artist} />
            })}
          </HStack>
        </VStack>

        <VStack align={'start'} spacing={4} px={14} py={8}>
          <Text fontSize={'lg'} fontWeight={'bold'}>
            Insipiration Showcase
          </Text>
          <Flex justify={'space-between'} w='full'>
            <Menu size={'xs'}>
              <MenuButton
                variant='outline'
                borderRadius={'full'}
                as={Button}
                leftIcon={<Icon as={AiOutlineStar} />}
                rightIcon={<Icon as={IoMdArrowDropdown} />}
              >
                Popular
              </MenuButton>
              <MenuList>
                <MenuItem>Following</MenuItem>
              </MenuList>
            </Menu>
            <HStack>
              <Tag
                size='lg'
                borderRadius={'full'}
                py={2}
                bgColor={colorMode === 'dark' ? 'blue.600' : 'purple.900'}
                textColor={'white'}
                px={4}
              >
                All Categories
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                3D Design
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                Ilustration
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                NFT
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                UIUX Design
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                Graphic Design
              </Tag>
              <Tag size='lg' borderRadius={'full'} py={2} px={4}>
                Animation
              </Tag>
            </HStack>
            <Menu size={'xs'}>
              <MenuButton
                variant='outline'
                borderRadius={'full'}
                as={Button}
                leftIcon={<Icon as={BsFilter} />}
              >
                Filters
              </MenuButton>
              <MenuList>
                <MenuItem>Following</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <SimpleGrid columns={4} spacing={8} w='full'>
            {insipirationShowcaseJSON.map((showcase) => (
              <CardShowcase key={showcase.name} showcase={showcase} />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  )
}

export default Home
