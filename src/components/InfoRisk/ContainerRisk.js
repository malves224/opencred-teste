import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import LimitRiskLiquidity from './LimitRiskLiquidity';
import LimitVsRiskGraphic from './LimitVsRiskGraphic';

function ContainerRisk() {
  const [fields, setField] = useState({
    limit: "R$ 1.5M",
    risk: "R$ 1.3M",
    liquidity: "58%"
  });

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="40%"
    >
      <LimitRiskLiquidity fields={fields} />
      <LimitVsRiskGraphic fields={fields} />
      {
        // limitVsRiskGraphic
      }
    </Flex>
  )
}

export default ContainerRisk