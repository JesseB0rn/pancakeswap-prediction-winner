import { Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

export default function Config({ address, betAmount }: { address: string; betAmount: string }) {
  return (
    <StatGroup display="flex" justifyItems="space-evenly">
      <Stat textAlign="center">
        <StatLabel color="grey">Address</StatLabel>
        <StatNumber>{address.slice(0, 6) + '...' + address.slice(-4)}</StatNumber>
      </Stat>
      <Stat textAlign="center">
        <StatLabel color="grey">Bet Amount</StatLabel>
        <StatNumber>{betAmount} BNB</StatNumber>
      </Stat>
    </StatGroup>
  )
}
