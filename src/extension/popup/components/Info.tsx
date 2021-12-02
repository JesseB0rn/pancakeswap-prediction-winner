import { Heading, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/layout";
import React from "react";

export default function Info() {
  return (
    <>
      <OrderedList>
        <ListItem>
          Securely Enter Your Private Key Into The Input Field.
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
            REMEMBER: Let PanWin Run Over At Least A Couple Hours. The Longer, The Better!
        </Text>{" "}

    </>
  );
}
