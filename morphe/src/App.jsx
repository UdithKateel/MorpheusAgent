import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Flex , Box, Stack,Center,Separator ,Text} from '@chakra-ui/react'
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { TiThMenuOutline } from "react-icons/ti"
import Sidebar from './Sidebar'
import Inputbar from './Inputbar'
import { Heading } from '@chakra-ui/react'
function App() {
  
    const [open, setOpen] = useState(false)

  return (
    <Flex minH="100vh" w="100%" direction="column" >
  {/* Navbar */}
  <Flex px="4" pt="4" align="center" justify="start" >
    <Drawer.Root placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="lg">
          <TiThMenuOutline />
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
              <Sidebar />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  </Flex>

  {/* Main content vertically and horizontally centered */}
  <Flex flex="1" justify="center" align="center"  minH="calc(100vh - 100px)" >
    <Stack align="center" spacing={4} w="full" mb={10} >
      <Heading size="3xl" p={'4px'} color="white" textAlign="center">
        What can I do for you Today?
      </Heading>
      <Box w="full" maxW="600px">
        <Inputbar />
      </Box>
    </Stack>
  </Flex>
</Flex>

  )
}

export default App
