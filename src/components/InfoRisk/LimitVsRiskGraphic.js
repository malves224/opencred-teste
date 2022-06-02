import { 
  CircularProgress,
   CircularProgressLabel, 
   Flex, 
   Heading, 
   Text,
   Box, 
   Stack} from '@chakra-ui/react'
import { Separator } from 'components/Separator/Separator'
import dataProducer from 'context';
import React, { useContext } from 'react'

function LimitVsRiskGraphic({fields}) {
  const { producerInfo } = useContext(dataProducer);
  const propsCssText = {
    fontWeight: 600,
    color: "gray.300"
  }

  const calculatePercentage = () => {
    const porcentagem = (producerInfo.risk / producerInfo.limit) * 100;
    return porcentagem.toFixed();
  }

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      padding="15px"
      width="45%"
      justifyContent="space-evenly"
      backgroundColor="white"
      borderRadius="15px"
    >
    <CircularProgress 
      value={calculatePercentage()} 
      size="120px"
      thickness="17px"
      color="teal.300"
    >
      <CircularProgressLabel>{`${calculatePercentage()}%`}</CircularProgressLabel>
    </CircularProgress>
      <Flex
        alignItems="center"
        flexDirection="column"
      >
        <Heading 
          as="h3" 
          fontSize="4l" 
          marginBottom="10px"
          fontWeight={600}
        >
          Crédito
        </Heading>
        <Stack>
          <Text {...propsCssText}>Risco: {fields.risk}</Text>
          <Separator />
          <Text {...propsCssText}>Limite: {fields.limit}</Text>
        </Stack>
      </Flex>

    </Flex>
  )
}

export default LimitVsRiskGraphic