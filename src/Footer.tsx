import { Anchor, Flex, Text } from '@mantine/core'
import { colors } from './lib/theme'

export function Footer() {
  return (
    <Flex
      align="center"
      bg={colors.darkblue}
      justify="center"
      sx={{ height: 84 }}>
      <Text color={colors.offwhite}>
        Made by Han{' ❤️ '}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <Anchor
          href="https://www.nerdstep.com"
          rel="noreferrer"
          target="_blank"
          sx={{
            borderBottom: `1px dotted ${colors.offwhite}`,
            color: colors.offwhite,
            textDecoration: 'none',
            '&:hover': {
              borderBottomStyle: 'solid',
              textDecoration: 'none',
            },
          }}>
          Justin
        </Anchor>
      </Text>
    </Flex>
  )
}
