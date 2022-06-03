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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requestApi from 'utils/api';
import serasaLogo from '../../imgs/serasa-logo.png';

function SerasaInfo({css}) {
  const [infoSerasa, setInfoSerasa] = useState([null]);
  const params = useParams();
  const idParamUrl = params.id ? params.id : "1";
  

  const getColorScore = (value) => {
    console.log(value)
    if (value >= 0 && value <= 400) {
      return "red"
    } else if (value >= 401 && value <= 599) {
      return "yellow"
    } else if (value > 600) {
      return "green"
    }
  }

  const getHourCompleteNow = () => {
    const dateObj = new Date();
    console.log(dateObj.getHours());
    const minutesFromObj = dateObj.getMinutes();
    const minutes = minutesFromObj >= 0 && minutesFromObj <= 10 
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();
    return `${dateObj.getHours()}:${minutes}`
  }


  useEffect(() => {
    requestApi(`/serasa/${idParamUrl}`, 'GET')
      .then((res) => setInfoSerasa(res))
  }, []);

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
            backgroundColor={infoSerasa.debts ? "orange.300" : "teal.300"} 
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
            <Text fontWeight={600} fontSize="0.9em">
              {infoSerasa.debts ? "Há restritivos" : "Sem restritivos"}
            </Text>
            <Text color="gray.300" fontSize="0.6em">{`Verificado ás ${getHourCompleteNow()}`}</Text>
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
            backgroundColor={`${getColorScore(infoSerasa.score)}.100`}
            borderRadius="12px"
            justifyContent="center"
            height="42px"
            width="45%"
          >
            <StarIcon marginRight="4px" color={`${getColorScore(infoSerasa.score)}.300`}/>
            {`Score: ${infoSerasa.score}`}
          </Flex>
          <Flex
            alignItems="center"
            backgroundColor="orange.100"
            borderRadius="12px"
            justifyContent="center"
            height="42px"
            width="45%"
          >
            <InfoOutlineIcon marginRight="4px" color="orange.300"/> 
            {`Dividas: ${infoSerasa.debts}`}
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