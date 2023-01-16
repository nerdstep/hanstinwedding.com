import { Counter } from './components/Counter'
import { Section } from './components/Section'

import { weddingDate } from './lib/config'

export function Intro() {
  return (
    <Section desc="Please come celebrate with us!" title="You're Invited">
      <Counter date={weddingDate} />
    </Section>
  )
}
