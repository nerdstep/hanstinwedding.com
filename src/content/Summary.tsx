import { Anchor, Flex, Image, SimpleGrid, Text } from '@mantine/core'
import { Rsvp } from '../components/Rsvp'
import { Section } from '../components/Section'
import { rsvpDeadline } from '../lib/config'
import { colors } from '../lib/theme'

const formattedDate = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
}).format(rsvpDeadline)

export function Summary() {
  return (
    <Section>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}>
        <Flex align="center" direction="column" mb="xl">
          <Image
            mx="auto"
            radius="xl"
            src="/img/icon-chip-ceremony.svg"
            width={120}
          />
          <Text color={colors.red} mb="md" size={40} transform="uppercase">
            Ceremony
          </Text>
          <Text fw={600} mb="xs" size="xl">
            <Anchor
              href="https://royalweddingchapel.com/"
              rel="noreferrer"
              target="_blank">
              Royal Wedding Chapel
            </Anchor>
          </Text>
          <Text size="lg">
            <Anchor
              href="https://goo.gl/maps/w4GR2TbRmvGCHK5d8"
              rel="noreferrer"
              target="_blank">
              1215 S Las Vegas Blvd
            </Anchor>
          </Text>
          <Text fw={600} mt="xs" size="lg">
            2:00pm
          </Text>
        </Flex>
        <Flex align="center" direction="column" mb="xl">
          <Image
            mx="auto"
            radius="xl"
            src="/img/icon-chip-reception.svg"
            width={120}
          />
          <Text color={colors.orange} mb="md" size={40} transform="uppercase">
            Reception
          </Text>
          <Text fw={600} mb="xs" size="xl">
            <Anchor
              href="https://vegas.momofuku.com/"
              rel="noreferrer"
              target="_blank">
              Momofuku
            </Anchor>
          </Text>
          <Text align="center" size="lg">
            The Cosmopolitan Hotel &amp; Casino
          </Text>
          <Text size="lg">Level 2, Boulevard Tower</Text>
          <Text size="lg">
            <Anchor
              href="https://goo.gl/maps/t5CkHzTS4fqjQE5B9"
              rel="noreferrer"
              target="_blank">
              3708 Las Vegas Blvd S
            </Anchor>
          </Text>
          <Text fw={600} mt="xs" size="lg">
            5:30pm
          </Text>
        </Flex>
        <Flex align="center" direction="column">
          <Image
            mx="auto"
            radius="xl"
            src="/img/icon-chip-rsvp.svg"
            width={120}
          />
          <Text color={colors.blue} mb="md" size={40} transform="uppercase">
            RSVP
          </Text>
          <Text align="center" mb="lg" size="lg">
            Please confirm your attendance by <strong>{formattedDate}</strong>
          </Text>
          <Rsvp />
        </Flex>
      </SimpleGrid>
    </Section>
  )
}
