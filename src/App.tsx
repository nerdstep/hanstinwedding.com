import { MantineProvider } from '@mantine/core'
import { theme } from './lib/theme'
import { Page } from './Page'

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Page />
    </MantineProvider>
  )
}
