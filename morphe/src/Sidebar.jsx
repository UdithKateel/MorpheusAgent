import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { TiThMenuOutline } from "react-icons/ti";
import { Tooltip } from '@chakra-ui/react'
import { LuPencil } from "react-icons/lu";
import { HStack } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import { Flex , Box, Stack,Center,Separator ,Text} from '@chakra-ui/react'
const Sidebar = () => {
  return (
    <Box  bg={'bg.muted'} width={'260px'} >
    <Flex direction="column" justify="space-between" height="100dvh" p={4}>
      <Stack>
        <Flex justify={"space-between"}>
            
         
         
          <IconButton variant='ghost' size={'2xl'}>
          <FaSearch />
          </IconButton>
         <IconButton variant='ghost' size={'2xl'}>
          <LuPencil />
          </IconButton>
         
        
      
         
          
        </Flex>
        <Stack p={'20px'}  >
      <Text>First</Text>
      <Separator size="lg" />
      <Text>Second</Text>
      <Separator size="lg" />
      <Text>Third</Text>
    </Stack>
   
      </Stack>
      <Box pl={'20px'}  >
      <Text >History</Text>
    </Box>
    </Flex>
    </Box>
  )
}

export default Sidebar