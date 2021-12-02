import { Heading, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";

export default function Info() {
  return (
    <>
      <OrderedList mb="3" mt="3">
        <ListItem>
          Securely Enter{' '}<Link color="brand" href="https://panwin.net/tutorials/#private-key" isExternal textDecoration="underline">
          Your Private Key
          </Link>{' '}Into The Input Field.
        </ListItem>
        <ListItem>Press The Set Button To Localy Store Your Private Key.</ListItem>
        <ListItem>Set Your BNB Betting Amount, And Then Press Set.</ListItem>
        <ListItem>
          Press The Start Button To Start The Bot.
        </ListItem>
        <ListItem>Sit back, Relax, And Let PanWin Do It's Job!</ListItem>

      </OrderedList>

        <Text as="span" style={{fontWeight: "bold"}}>
            IMPORTANT: Open Extensions -&gt; PanWin -&gt; Developer Mode ON -&gt; Service Worker.
      </Text>{" "}
      <br />
        <Text as="span" style={{fontWeight: "bold"}}>
            REMEMBER: Let PanWin run for at least a couple hours. The longer, the better!
        </Text>{" "}

    </>
  );
}
