import { Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/react'
import React from 'react'

export default function Info() {
  return (
    <>
      <OrderedList mb="3" mt="3">
        <ListItem>
          Securely Enter{' '}
          <Link color="brand" href="https://panwin.net/tutorials/#private-key" isExternal textDecoration="underline">
            Your Private Key
          </Link>{' '}
          Into The Input Field.
        </ListItem>
        <ListItem>Press The Set Button To Locally Store Your Private Key.</ListItem>
        <ListItem>Set Your BNB Betting Amount, And Then Press Set.</ListItem>
        <ListItem>Press The Start Button To Start The Bot / The Betting.</ListItem>
        <ListItem>Sit back, Relax, And Let PanWin Do Its Magic! Enjoy :)</ListItem>
      </OrderedList>
      <Text as="span" style={{ fontWeight: 'bold' }}>
        IMPORTANT: Extensions -&gt; PanWin -&gt; Developer Mode -&gt; Service Worker.
      </Text>{' '}
      <br />
      <Text as="span" style={{ fontWeight: 'bold' }}>
        REMEMBER: Let PanWin Run For At Least A Couple Hours. The Longer, The Better!
      </Text>{' '}
    </>
  )
}
