import { MantineProvider } from '@mantine/core'
import { theme } from './lib/theme'
import { Index } from './pages/Index'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Index />
    </MantineProvider>
  )
}
