import { useState, useRef, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  CloseButton,
  Drawer,
  Portal
} from '@chakra-ui/react';
import { TiThMenuOutline } from 'react-icons/ti';
import Sidebar from './Sidebar';
import Inputbar from './Inputbar';
import React from 'react';
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IconButton } from '@chakra-ui/react';
import {  Dialog, Field, Input, Stack } from "@chakra-ui/react"
import { BiSolidRightArrow } from "react-icons/bi";


function App() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);
  const endOfMessagesRef = useRef(null);
const [searchopen, searchsetOpen] = useState(false);
const ref = useRef<HTMLInputElement>(null)
  const handleSend = () => {
    if (!input.trim()) return;

    if (currentChatIndex === null) {
      // Create new conversation
      const newConv = [input];
      setConversations([newConv, ...conversations]);
      setCurrentChatIndex(0);
    } else {
      // Append to existing
      const updated = [...conversations];
      updated[currentChatIndex] = [...updated[currentChatIndex], input];
      setConversations(updated);
    }

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (currentChatIndex !== null) {
      setMessages(conversations[currentChatIndex]);
    }
  }, [currentChatIndex, conversations]);

  const isFirstMessage = currentChatIndex === null;

  return (
    <Flex direction="column" minH="100vh" color="white">
      {/* Navbar */}
      <Flex px="4" pt="4" align="center" justify="start" bg="gray.800">
        <Drawer.Root placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <Button variant="outline" fontSize="2xl" size="lg">
              <TiThMenuOutline fontSize={'4em'} />
              Morpheus Agent
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Morpheus Agent</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Flex p={'10px'} justify={'space-between'}>
                  <Dialog.Root initialFocusEl={() => ref.current} >
      <Dialog.Trigger asChild>
        <Button width={'25px'} ><FaSearch /></Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="gray.800">
            <Dialog.Header>
              <Dialog.Title>Search Task </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Field.Root>
                  
                  <Input placeholder="Task Name " />
                </Field.Root>
              
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Search <BiSolidRightArrow /></Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
                     
                    <IconButton aria-label="New Chat"
  onClick={() => {
    setCurrentChatIndex(null);  // just reset, don't create
    setInput("");               // optional: clear input box
    setOpen(false); // optional: close drawer if you want
  }} >
                      <FaRegPenToSquare />'
                      </IconButton>
                  </Flex>
                  {conversations.map((conv, index) => (
                    <Box
                      key={index}
                      onClick={() => {
                        setCurrentChatIndex(index);
                        setOpen(false);
                      }}
                      cursor="pointer"
                      p={3}
                      bg={index === currentChatIndex ? "gray.800" : "gray.600"}
                      mb={2}
                      borderRadius="md"
                      _hover={{ bg: "gray.600" }}
                    >
                      <Text fontWeight="bold">Chat {conversations.length - index}</Text>
                      <Text fontSize="sm" isTruncated>
                        {conv[0]}
                      </Text>
                    </Box>
                  ))}
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>

      {/* Chat UI */}
      {isFirstMessage ? (
        <Flex flex="1" direction="column" align="center" justify="center" px={4} textAlign="center">
          <Heading size="3xl" mb={6} color="gray.100">
            What can I do for you Today?
          </Heading>
          <Box w="full" maxW="600px">
            <Inputbar value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
          </Box>
        </Flex>
      ) : (
        <>
          <Flex flex="1" justify="flex-end" direction="column" overflowY="auto" px={4} py={4} gap={4}>
            {messages.map((msg, index) => (
              <React.Fragment key={index}>
                {/* User message (right   ) */}
                <Flex justify="flex-end">
                  <Box bg="blue.500" p={4} borderRadius="md" color="white" maxW="70%">
                    {msg}
                  </Box>
                </Flex>

                {/* AI dummy response (left) */}
                <Flex justify="flex-start">
                  <Box bg="gray.600" p={4} borderRadius="md" maxW="70%">
                    Here's a dummy response from your AI agent!
                  </Box>
                </Flex>
              </React.Fragment>
            ))}
            <div ref={endOfMessagesRef} />
          </Flex>
          <Box px={4} py={3} borderTop="1px solid #444">
            <Inputbar value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
          </Box>
        </>
      )}
    </Flex>
  );
}

export default App;
