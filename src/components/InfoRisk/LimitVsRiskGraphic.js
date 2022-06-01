import { 
  CircularProgress,
   CircularProgressLabel, 
   Flex, 
   Heading, 
   Text,
   Box, 
   Stack} from '@chakra-ui/react'
import { Separator } from 'components/Separator/Separator'
import React from 'react'

function LimitVsRiskGraphic({fields}) {
  const propsCssText = {
    fontWeight: 600,
    color: "gray.300"
  }
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      padding="15px"
      width="40%"
      justifyContent="space-evenly"
      backgroundColor="white"
      borderRadius="15px"
    >
    <CircularProgress 
      value={83} 
      size="120px"
      thickness="17px"
      color="teal.300"
    >
      <CircularProgressLabel>83%</CircularProgressLabel>
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