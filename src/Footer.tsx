import { createStyles, Flex } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    height: 84,
  },
}))

export function Footer() {
  const { classes } = useStyles()

  return (
    <Flex align="center" className={classes.footer} justify="center">
      Made by Han ❤️ Justin in Oakland, CA
    </Flex>
  )
}
