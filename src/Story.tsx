import { Avatar, Container, Text, Timeline } from '@mantine/core'
import { Section } from './components/Section'

export function Story() {
  return (
    <Section desc="We invite you to celebrate our wedding" title="Our Story">
      <Container size="sm">
        <Timeline
          bulletSize={30}
          lineWidth={1}
          mb="xl"
          styles={{
            item: {
              marginBottom: 100,
            },
            itemTitle: {
              fontWeight: 600,
            },
            itemBody: {
              marginLeft: '4rem',
            },
          }}>
          <Timeline.Item
            bullet={<Avatar radius={999} size={96} />}
            title="When We First Met">
            <Text mb="sm" mt="xs" size="sm">
              March 2018
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={<Avatar radius={999} size={96} />}
            title="Our First Date">
            <Text mb="sm" mt="xs" size="sm">
              August 2020
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>
    </Section>
  )
}
