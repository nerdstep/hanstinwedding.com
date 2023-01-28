import { Box } from '@mantine/core'
import { colors } from '../lib/theme'

export function Hero() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: colors.darkblue,
        position: 'relative',
        height: '100vh',
        paddingTop: theme.spacing.xl,
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
        [theme.fn.smallerThan('sm')]: {
          maxHeight: 500,
        },
      })}>
      <Box
        sx={{
          backgroundImage: 'url(/img/hero.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          height: '100%',
        }}
      />
    </Box>
  )
}
