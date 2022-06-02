import { 
  Flex, 
  Heading, 
  Table, 
  TableContainer, 
  Thead, 
  Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'

function FinancialStatement({css}) {
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
                ["2019", "2020", "2021"]
                  .map((yearColumn, index) => <Th key={index} >{yearColumn}</Th>)
              }
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight={600}>Patrimônio Líquido</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600}>Faturamento</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600}>EBTIDA</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600}>Endividamento CP</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
            </Tr>
            <Tr>
              <Td fontWeight={600}>Endividamento LP</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
              <Td>R$ 554.543</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default FinancialStatement