import {
  Box,
  Flex,
  Image,
  VStack,
  Avatar,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'

const CardShowcase = ({ showcase }) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      pos={'relative'}
      p={4}
      bgColor={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius={'2xl'}
      w='full'
    >
      <Image
        borderRadius={'2xl'}
        w='100%'
        h='150px'
        objectFit={'cover'}
        src={showcase.cover}
        alt='mountain'
      />

      <Flex align={'end'} justify={'space-between'} mt={-4}>
        <VStack>
          <Avatar name='Dan Abrahmov' src={showcase.avatar} />
          <Text>{showcase.name}</Text>
        </VStack>
        <Text
          fontWeight={'bold'}
          textColor={showcase.isFollow ? 'gray.400' : 'blue.300'}
        >
          {showcase.isFollow ? 'Following' : 'Follow'}
        </Text>
      </Flex>
    </Box>
  )
}

export default CardShowcase
