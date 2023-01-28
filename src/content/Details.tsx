import { Anchor, Box, Space, Text, Title } from '@mantine/core'
import { Section } from '../components/Section'

export function Details() {
  return (
    <Section
      //bg={colors.darkblue}
      //color={colors.offwhite}
      title="Wedding Details">
      <Box
        sx={(_theme) => ({
          maxWidth: 500,
          margin: 'auto',
          textAlign: 'left',
        })}>
        <Title size="h2">🏨 Accomodations</Title>
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
          <p>
            We do no have a hotel block of any kind, so please stay anywhere
            that fits your budget and needs.
          </p>
        </Text>
        <Space h="xl" />
        <Title size="h2">💃 Dress Code</Title>
        <Text size="lg">
          <p>Semi-formal attire &mdash; dress to impress!</p>
        </Text>
        <Space h="xl" />
        <Title size="h2">💝 Gifts</Title>
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
