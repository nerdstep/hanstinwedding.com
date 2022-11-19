import { MantineProvider, Stack, Text, Title } from '@mantine/core'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Stack align="center" mt={50}>
        <Title>
          Welcome to{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'purple', to: 'blue' }}>
            Han & Justin's
          </Text>{' '}
          wedding site. ❤️
        </Title>
        <Text size="xl">🚧 Under construction. Check back soon! 🚧</Text>
      </Stack>
    </MantineProvider>
  )
}
