import { Box, Flex, Text } from '@chakra-ui/react'
import { Separator } from "components/Separator/Separator"
import React, { useState } from 'react'

function LimitRiskLiquidity({fields}) {

  const generateItem = (textContent, field, key) => {
    const fieldParam = {
      limit: ["orange.200", "Limite"],
      risk: ["red.200", "Risco"],
      liquidity: ["blue.200", "Liquidez"]
    }
    return (      
    <Flex
      key={key}
      alignItems="center"
      flexDirection="row"
      height="80px"
    >
      <Flex
        alignItems="center"
        borderRadius="15px"
        backgroundColor={fieldParam[field][0]}
        justifyContent="center"
        color="white"
        height="80%"
        minWidth="50%"
        width="50%"
      >
        <Text fontSize="2l" fontWeight={600}>{textContent}</Text>
      </Flex>
      <Separator
        minWidth="30px"
        width="30px"
        transform="rotate(90deg)"
      />
      <Text fontSize="smal" fontWeight={600}>{fieldParam[field][1]}</Text>
    </Flex>);
  }

  return (
    <Flex
      flexDirection="column"
      padding="15px"
      width="45%"
      justifyContent="space-evenly"
      backgroundColor="white"
      borderRadius="15px"
    >
      {
        Object.keys(fields)
          .map((field, index) => generateItem(fields[field], field, index))
      }
    </Flex>
  )
}

export default LimitRiskLiquidity