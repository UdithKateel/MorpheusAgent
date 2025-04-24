// Inputbar.jsx
import { Box, Field, Textarea, defineStyle } from "@chakra-ui/react"

const Inputbar = ({ value, onChange, onKeyDown }) => {
  return (
    <Field.Root>
      <Box pos="relative" w="full">
        <Textarea
          className="peer"
          placeholder=""
          resize="vertical"
          overflowY="auto"
          lineHeight="1.5"
          pr="4"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          css={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
             
              borderRadius: "6px",
            },
          }}
        />
        <Field.Label css={floatingStyles}>Task is ..</Field.Label>
      </Box>
    </Field.Root>
  )
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})

export default Inputbar
