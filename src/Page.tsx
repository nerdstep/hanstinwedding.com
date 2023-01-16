import { Box, Divider } from '@mantine/core'
import { ScrollToTop } from './components/ScrollToTop'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Info } from './Info'
import { colors } from './lib/theme'
import { Photos } from './Photos'

const dividerSize = 6

export function Page() {
  return (
    <Box bg={colors.offwhite}>
      <Hero />
      <Divider color={colors.orange} size={dividerSize} />
      <Info />
      <Divider color={colors.orange} size={dividerSize} />
      <Photos />
      <Divider color={colors.orange} size={dividerSize} />
      <Contact />
      <Divider color={colors.blue} size={dividerSize} />
      <Footer />
      <ScrollToTop />
    </Box>
  )
}
