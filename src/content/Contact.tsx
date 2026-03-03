import { Button, Flex } from '@mantine/core'
import { Section } from '../components/Section'

export function Contact() {
  return (
    <Section title="Any Questions?">
      <Flex align="center" direction="column">
        <Button
          component="a"
          href="#"
          rel="noreferrer"
          size="xl"
          target="_blank"
          variant="white"
        >
          Contact Us
        </Button>
      </Flex>
    </Section>
  )
}
