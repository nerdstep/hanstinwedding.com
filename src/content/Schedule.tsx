import { Avatar, Box, createStyles, Space, Text, Timeline } from '@mantine/core'
import { Section } from '../components/Section'
import { colors } from '../lib/theme'

const useStyles = createStyles((_theme) => ({
  item: {
    paddingLeft: 40,
  },
}))

export function Schedule() {
  const { classes } = useStyles()
  return (
    <Section
      bg={colors.darkblue}
      color={colors.offwhite}
      title="Event Schedule">
      <Box mb="xl" sx={{ maxWidth: 440, margin: 'auto' }}>
        <Timeline bulletSize={58} classNames={classes}>
          <Timeline.Item
            bullet="🎉"
            color={colors.offwhite}
            title={
              <Text color={colors.offwhite} fw={600} size="lg">
                Saturday Night
              </Text>
            }>
            <Text color={colors.offwhite}>
              Bachelor &amp; Bachelorette outings (details TBD)
            </Text>
            <Space h="xl" />
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <Avatar
                alt="ceremony poker chip"
                radius="xl"
                size={60}
                src="img/icon-chip-ceremony.svg"
              />
            }
            title={
              <Text color={colors.offwhite} fw={600} size="lg">
                Sunday 2pm - 2:30pm
              </Text>
            }>
            <Text color={colors.offwhite}>
              Ceremony at Royal Wedding Chapel
            </Text>
            <Space h="xl" />
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <Avatar
                alt="reception poker chip"
                radius="xl"
                size={60}
                src="img/icon-chip-reception.svg"
              />
            }
            title={
              <Text color={colors.offwhite} fw={600} size="lg">
                Sunday 5:30pm - 7:30pm
              </Text>
            }>
            <Text color={colors.offwhite}>Reception at Momofuku</Text>
            <Space h="xl" />
          </Timeline.Item>
          <Timeline.Item
            bullet="🥂"
            title={
              <Text color={colors.offwhite} fw={600} size="lg">
                Sunday 7:30pm to whenever
              </Text>
            }>
            <Text color={colors.offwhite}>Party time (details TBD)</Text>
          </Timeline.Item>
        </Timeline>
      </Box>
    </Section>
  )
}
