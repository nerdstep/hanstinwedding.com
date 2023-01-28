import { Button, Flex } from '@mantine/core'
import { Section } from '../components/Section'
import { mailto } from '../lib/config'

export function Contact() {
  return (
    <Section title="Any Questions?">
      <Flex align="center" direction="column">
        <Button
          component="a"
          href={mailto}
          rel="noreferrer"
          size="xl"
          target="_blank"
          variant="white">
          Contact Us
        </Button>
      </Flex>
    </Section>
  )
}
