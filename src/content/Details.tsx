import { Anchor, Box, Text, Title } from '@mantine/core'
import { Section } from '../components/Section'

export function Details() {
  return (
    <Section
      //bg={colors.darkblue}
      //color={colors.offwhite}
      title="Wedding Details">
      <Box sx={{ textAlign: 'center' }}>
        <Title align="center" size="h2">
          🏨 Accomodations
        </Title>
        <Text size="lg">
          <p>
            We will be staying at{' '}
            <Anchor
              href="https://www.cosmopolitanlasvegas.com/"
              rel="noreferrer"
              target="_blank">
              The Cosmopolitan
            </Anchor>
            , where our reception is being held.
          </p>
          <p>We do no have a hotel block of any kind.</p>
          <p>Please stay anywhere that fits your budget and needs.</p>
        </Text>
        <Title align="center" size="h2">
          💃 Dress Code
        </Title>
        <Text size="lg">
          <p>Semi-formal attire; dress to impress!</p>
        </Text>
        <Title align="center" size="h2">
          💝 Gifts
        </Title>
        <Text size="lg">
          <p>
            Having you as part of our special day is the best wedding gift we
            can ask for, so no gifts please.
          </p>
          <p>If you insist, you can contribute to our honeymoon fund.</p>
        </Text>
      </Box>
    </Section>
  )
}
