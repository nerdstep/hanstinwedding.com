import { Divider } from '@mantine/core'
import { ScrollToTop } from './components/ScrollToTop'
import { Faq } from './Faq'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Info } from './Info'
import { Intro } from './Intro'
import { Story } from './Story'

export function Page() {
  return (
    <div>
      <Hero />
      <Intro />
      <Divider variant="dashed" />
      <Info />
      <Divider variant="dashed" />
      <Story />
      <Divider variant="dashed" />
      <Faq />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
