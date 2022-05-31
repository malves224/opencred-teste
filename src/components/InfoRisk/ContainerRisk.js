import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import LimitRiskLiquidity from './LimitRiskLiquidity';

function ContainerRisk() {
 const [infoRisk, setInfoRisk] = useState({});
  return (
    <Flex
      flexDirection="row"
      width="40%"
    >
      <LimitRiskLiquidity />
      {
        // limitVsRiskGraphic
      }
    </Flex>
  )
}

export default ContainerRisk