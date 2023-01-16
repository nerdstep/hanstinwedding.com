import { Box, Divider } from '@mantine/core'
import { ScrollToTop } from '../components/ScrollToTop'
import { Contact } from '../content/Contact'
import { Details } from '../content/Details'
import { Footer } from '../content/Footer'
import { Hero } from '../content/Hero'
import { Photos } from '../content/Photos'
import { Schedule } from '../content/Schedule'
import { Summary } from '../content/Summary'
import { colors } from '../lib/theme'

const dividerSize = 6

export function Index() {
  return (
    <Box bg={colors.offwhite}>
      <Hero />
      <Divider color={colors.orange} size={dividerSize} />
      <Summary />
      <Divider color={colors.blue} size={dividerSize} />
      <Schedule />
      <Divider color={colors.orange} size={dividerSize} />
      <Details />
      <Divider color={colors.blue} size={dividerSize} />
      <Photos />
      <Divider color={colors.orange} size={dividerSize} />
      <Contact />
      <Divider color={colors.blue} size={dividerSize} />
      <Footer />
      <ScrollToTop />
    </Box>
  )
}
