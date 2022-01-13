import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Avatar,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'

export interface ImagesInterface {
  alt: string
  src: string
}

export interface ArtistInterface {
  id: number
  name: string
  avatar: string
  isFollow: boolean
  images: ImagesInterface[]
}

export interface CardArtistProps {
  artist: ArtistInterface
}

const CardArtist: React.FC<CardArtistProps> = ({ artist }) => {
  return (
    <Box pos={'relative'}>
      <WrapItem pos={'absolute'} top={8}>
        <Avatar
          size='lg'
          shadow={'lg'}
          name={artist.name}
          src={artist.avatar}
        />
      </WrapItem>
      <Box ml={10}>
        <HStack spacing={2}>
          {artist.images.map((item) => (
            <Image
              key={item.alt}
              src={item.src}
              alt={item.alt}
              w='130px'
              h='130px'
              borderRadius={'lg'}
              objectFit={'cover'}
            />
          ))}
        </HStack>
        <Flex justify={'space-between'} mt={3}>
          <Text>Jakobs Martino</Text>
          <Text
            fontWeight={'bold'}
            textColor={artist.isFollow ? 'blue.300' : 'gray.600'}
          >
            {artist.isFollow ? 'Following' : 'Follow'}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default CardArtist
