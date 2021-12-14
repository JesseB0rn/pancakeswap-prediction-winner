import { Button } from "@chakra-ui/button";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useBoolean } from "@chakra-ui/hooks";
import { FaTwitter } from "react-icons/fa";
import { IoSquareOutline } from "react-icons/io5";
import {
  CheckIcon,
  CloseIcon,
  LockIcon,
  NotAllowedIcon,
  PlusSquareIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  StarIcon,

} from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Box, Flex, HStack, Link, Text, Heading, Divider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Switch } from "@chakra-ui/switch";
import { Wallet } from "@ethersproject/wallet";
import React, { useEffect, useState } from "react";
import { LogMessage, PLATFORMS, sleep, STRATEGIES } from "src/lib";
import Config from "./Config";
import Info from "./Info";
import { IconButton } from "@chakra-ui/react";

export default function Main() {
  const [privateKey, setPrivateKey] = useState("");
  const [betAmount, setBetAmount] = useState("0.1");
  const [storageBetAmount, setStorageBetAmount] = useState("");
  const [address, setAddress] = useState("");

  const [strategy, setStrategy] = useState(false);

  const [fetchFlag, setFetchFlag] = useBoolean();

  const [logs, setLogs] = useState<LogMessage[]>();

  const [platforms, setPlatforms] = useState({
    [PLATFORMS.PancakeSwap]: true,
    [PLATFORMS.CandleGenieBTC]: true,
    [PLATFORMS.CandleGenieBNB]: true,
    [PLATFORMS.CandleGenieETH]: true,
  });

  useEffect(() => {
    chrome.storage.sync
      .get(["privateKey", "betAmount", "logs"])
      .then(({ privateKey, betAmount, logs }) => {
        try {
          setAddress(new Wallet(privateKey).address);
        } catch {}

        setBetAmount(betAmount);
        setStorageBetAmount(betAmount);

        setLogs(logs);
      });
  }, [fetchFlag]);

  useEffect(() => {
    chrome.storage.onChanged.addListener(({ privateKey, betAmount, logs }) => {
      privateKey && setPrivateKey(privateKey.newValue);

      betAmount && setStorageBetAmount(betAmount.newValue);

      logs && setLogs(logs.newValue);
    });
  }, []);

  return (
    <>
      <HStack justify="space-between" mb="0">
        <IconButton href="https://panwin.net/tutorials/" variant='outline' isRound={true} aria-label='Help' icon={<QuestionIcon />} size="md"/>
        <IconButton href="https://twitter.com/PanWinBot" variant='outline' isRound={true} aria-label='Help' icon={<FaTwitter />} size="md" />
      </HStack>

      <Box p="6" pt="0" mt="-30px" mb="12" w="lg-8">
      <HStack justify="center" mb="1">
        <Heading fontSize="4xl">
          PanWin
        </Heading>
        <Image src="../../icons/icon128.png" width="40px" />
      </HStack>
      <HStack justify="space-between" mb="4" mt="6">
        <Button
          size="xs"
          colorScheme="brand"
          variant={platforms[PLATFORMS.PancakeSwap] ? "solid" : "outline"}
          leftIcon={
            platforms[PLATFORMS.PancakeSwap] ? <CheckIcon /> : <IoSquareOutline />
          }
          onClick={() =>
            setPlatforms((p) => ({
              ...p,
              [PLATFORMS.PancakeSwap]: !p[PLATFORMS.PancakeSwap],
            }))
          }
        >
          {PLATFORMS.PancakeSwap}
        </Button>
        <Button
          size="xs"
          colorScheme="brand"
          variant={platforms[PLATFORMS.CandleGenieBTC] ? "solid" : "outline"}
          leftIcon={
            platforms[PLATFORMS.CandleGenieBTC] ? <CheckIcon /> : <IoSquareOutline />
          }
          onClick={() =>
            setPlatforms((p) => ({
              ...p,
              [PLATFORMS.CandleGenieBTC]: !p[PLATFORMS.CandleGenieBTC],
            }))
          }
        >
          {PLATFORMS.CandleGenieBTC}
        </Button>
        <Button
          size="xs"
          colorScheme="brand"
          variant={platforms[PLATFORMS.CandleGenieBNB] ? "solid" : "outline"}
          leftIcon={
            platforms[PLATFORMS.CandleGenieBNB] ? <CheckIcon /> : <IoSquareOutline />
          }
          onClick={() =>
            setPlatforms((p) => ({
              ...p,
              [PLATFORMS.CandleGenieBNB]: !p[PLATFORMS.CandleGenieBNB],
            }))
          }
        >
          {PLATFORMS.CandleGenieBNB}
        </Button>
        <Button
          size="xs"
          colorScheme="brand"
          variant={platforms[PLATFORMS.CandleGenieETH] ? "solid" : "outline"}
          leftIcon={
            platforms[PLATFORMS.CandleGenieETH] ? <CheckIcon /> : <IoSquareOutline />
          }
          onClick={() =>
            setPlatforms((p) => ({
              ...p,
              [PLATFORMS.CandleGenieETH]: !p[PLATFORMS.CandleGenieETH],
            }))
          }
        >
          {PLATFORMS.CandleGenieETH}
        </Button>
      </HStack>

     

      <Info />

      <HStack justify="center" mt="2">
        <Box border="1px" borderColor="grey" borderRadius="6px" display="flex" justifyItems="center" justifyContent="center" alignItems="center" p="2" py="1">
          <FormControl display="flex" justifyItems="center" alignItems="center" justifyContent="center">
            <FormLabel mb="0" w="38" fontSize="m">
              Experimental Strategy
            </FormLabel>
            <Switch colorScheme="brand" isChecked={strategy} onChange={() => setStrategy(!strategy)} />
          </FormControl>
      </Box>
      </HStack>

      <Box mt="3" experimental_spaceY="2">
        <Config address={address} betAmount={storageBetAmount} />
        <HStack mt="4">
          <Input
            placeholder="Private Key"
            type="password"
            w="full"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />

          <Button
            colorScheme="brand"
            leftIcon={<LockIcon />}
            onClick={() => {
              chrome.storage.sync
                .set({ privateKey })
                .then(() => setFetchFlag.toggle());
            }}
          >
            Set
          </Button>
        </HStack>

        <HStack>
          <InputGroup>
            <InputLeftAddon bgColor="brand.500">BNB</InputLeftAddon>
            <Input
              type="number"
              placeholder="BNB Amount"
              w="full"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
            />
          </InputGroup>
          <Button
            colorScheme="brand"
            leftIcon={<PlusSquareIcon />}
            onClick={() => {
              chrome.storage.sync
                .set({ betAmount })
                .then(() => setFetchFlag.toggle());
            }}
          >
            Set
          </Button>
        </HStack>

        <HStack justify="center">
          <Button
            onClick={async () => {
              chrome.runtime.sendMessage({
                type: "START",
                data: {
                  platforms,
                  strategy: strategy
                    ? STRATEGIES.Experimental
                    : STRATEGIES.Standard,
                },
              });

              await sleep(100);
              setFetchFlag.toggle();
            }}
            w="30"
            size="lg"
            colorScheme="brand"
            mt="3"
            mb="5"
          >
            START BOT
            </Button>
            <Button
            onClick={async () => {
              chrome.runtime.sendMessage({
                type: "STOP",
                data: {
                  
                },
              });

              await sleep(100);
              setFetchFlag.off();
            }}
            w="30"
            size="lg"
            colorScheme="red"
            mt="3"
            mb="5"
          >
            STOP BOT
          </Button>
        </HStack>

        <HStack justify="space-evenly" mb="8">
          <Text as="span" color="white" w="90" size="xl">
            <Link fontSize="xl"
                fontWeight={500}
                href='https://t.me/panwin'
                isExternal
                w="60"
                verticalAlign="bottom"
                textDecoration="underline">
              Telegram
            </Link>
          </Text>
          <Text as="span" color="white" w="90" size="xl">

            <Link fontSize="xl"
                fontWeight={500}
                href='https://discord.gg/panwin'
                isExternal
                w="60"
                verticalAlign="bottom"
                textDecoration="underline">
              Discord
            </Link>
          </Text>
        </HStack>
        

        <Button
          onClick={async () => {
            chrome.storage.sync.set({ logs: [] }).then(setFetchFlag.toggle);
          }}
          size="xs"
          w="full"
          variant="outline"
          mt="16"
        >
          Clear Logs
        </Button>

        {logs?.map((log, index) => (
          <Text key={index} textColor={log.color + ".300"}>
            {log.text}
          </Text>
        ))}
        </Box>
        </Box>
    </>
  );
}
