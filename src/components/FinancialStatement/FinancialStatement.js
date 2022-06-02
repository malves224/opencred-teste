import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { 
  Flex, 
  Heading, 
  Table, 
  TableContainer, 
  Thead, 
  Tr, Th, Tbody, Td } from '@chakra-ui/react'
import dataProducer from 'context';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import requestApi from 'utils/api';

function FinancialStatement({css}) {
  const { listDRE, setListDRE } = useContext(dataProducer);
  const [fields, setFields] = useState([]);
  const params = useParams();
  const idParamUrl = params.id ? params.id : "1";
  const fieldsReduced = {
    netWorth: "Patrimônio Líquido",
    invoicing: "Faturamento",
    EBTIDA: "EBTIDA",
    netProfit: "Lucro Liquido",
    shortIndebtedness: "Endividamento CP",
    longIndebtedness: "Endividamento LP"
  }

  useEffect(() => {
    requestApi(`/dre/${idParamUrl}`, "GET")
    .then((res) => {
      setFields(Object.keys(res[0]).slice(3));
      setListDRE(res);
    });
  }, []);

  const renderRow = (field, index) => (
      <Tr  key={index}>
        <Td fontWeight={600}>{fieldsReduced[field]}</Td>
        {
        listDRE && listDRE
          .map((dre, indexValue) => {
            if (indexValue > 0) {
             const isVariantPositive = listDRE[indexValue -1][field] < dre[field];
             return (
              <Td>
               {dre[field]}
               {isVariantPositive ? <ArrowUpIcon color="green" /> : <ArrowDownIcon color="red" />}
              </Td>
             )
          }
            return (<Td>{dre[field]}</Td>)
          })
        }
      </Tr>
    );

  return (
    <Flex
      borderRadius="12px"
      backgroundColor="white"
      flexDirection="column"
      padding="20px"
      {...css}
    >
      <Heading size="1l" as="h2">Balanço e DRE</Heading>
      <TableContainer>
        <Table size="sm" variant="simple">
          <Thead fontWeight={600} >
            <Tr>
              <Th></Th>
              {
                listDRE && listDRE
                  .map(({period}, index) => <Th key={index} >{period}</Th>)
              }
            </Tr>
          </Thead>
          <Tbody>
            {
                fields && fields.map(renderRow)
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default FinancialStatement