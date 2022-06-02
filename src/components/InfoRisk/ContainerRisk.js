import { Flex } from '@chakra-ui/react'
import dataProducer from 'context';
import React, { useContext, useEffect, useState } from 'react'
import toMoneyAbbreviation from 'utils';
import LimitRiskLiquidity from './LimitRiskLiquidity';
import LimitVsRiskGraphic from './LimitVsRiskGraphic';

function ContainerRisk({css}) {
  const { producerInfo } = useContext(dataProducer);
  const [fields, setField] = useState({
    limit: "",
    risk: "",
    liquidity: ""
  });

  useEffect(() => {
    setField({
      limit: toMoneyAbbreviation(producerInfo.limit),
      risk: toMoneyAbbreviation(producerInfo.risk),
      liquidity: producerInfo.liquidity
      })
  }, [producerInfo]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      {...css}
    >
      <LimitRiskLiquidity fields={fields} />
      <LimitVsRiskGraphic fields={fields} />
    </Flex>
  )
}

export default ContainerRisk