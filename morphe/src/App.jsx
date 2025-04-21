import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Flex , Box, Stack,Center,Separator ,Text} from '@chakra-ui/react'
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { TiThMenuOutline } from "react-icons/ti"
import Sidebar from './Sidebar'
function App() {
  
    const [open, setOpen] = useState(false)

  return (
   <Flex minH={'100dvh'} >
    
              <Drawer.Root placement={'start'} open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="lg">
              <TiThMenuOutline  />
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
             <Sidebar/>
            </Drawer.Body>
            
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
    <Box m={'auto'}>
      <Stack h={'full'}>
        <Box>
          Top
        </Box>
          <Center flex={'1'}>Middle</Center>
          <Box pb={'18px'}>Bottom</Box>
      </Stack>
    </Box>
   </Flex>
  )
}

export default App
