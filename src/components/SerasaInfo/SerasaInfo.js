import { CheckIcon, InfoOutlineIcon, StarIcon } from '@chakra-ui/icons';
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Image, 
  Stack, 
  Text } from '@chakra-ui/react'
import { Separator } from 'components/Separator/Separator';
import React from 'react';
import serasaLogo from '../../imgs/serasa-logo.png';

function SerasaInfo({css}) {
  return (
    <Flex
      alignItems="center"
      borderRadius="12px"
      padding="15px"
      backgroundColor="white"
      flexDirection="column"
      {...css}
    >
      <Heading padding="10px 0 20px" size="1l" as="h2">Restritivos</Heading>
      <Separator />
      <Flex
        alignItems="center"
        paddingTop="12px"
        justifyContent="space-between"
        flexDirection="column"
        width="100%"
        height="100%"
      >
        <Flex
          flexDirection="row"
          width="100%"
          justifyContent="space-between"
        >
          <Box
            alignItems="center"
            justifyContent="center"
            backgroundColor="teal.300"
            borderRadius="12px"
            padding="10px"
            width="50%"
            height="64px"
          >
            <Image src={serasaLogo} width="100%"/>
          </Box>
          <Stack
            paddingTop="5px"
            alignItems="flex-start"
            spacing={0} 
            width="45%"
            >
            <Text fontWeight={600} fontSize="0.9em">Sem restritivos</Text>
            <Text color="gray.300" fontSize="0.6em">Verificado ás 21:52:12</Text>
            <CheckIcon color="teal" />
          </Stack>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Flex
            alignItems="center"
            backgroundColor="green.100"
            borderRadius="12px"
            justifyContent="center"
            height="42px"
            width="45%"
          >
            <StarIcon marginRight="4px" color="green.300"/> Score: 650
          </Flex>
          <Flex
            alignItems="center"
            backgroundColor="orange.100"
            borderRadius="12px"
            justifyContent="center"
            height="42px"
            width="45%"
          >
            <InfoOutlineIcon marginRight="4px" color="orange.300"/> Dividas: 0
          </Flex>
        </Flex>
        <Button colorScheme="teal" variant="link">
          Saiba mais
        </Button>
      </Flex>
    </Flex>
  )
}

export default SerasaInfo;