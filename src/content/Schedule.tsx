import { Avatar, Box, createStyles, Space, Text, Timeline } from '@mantine/core'
import { Section } from '../components/Section'
import { colors } from '../lib/theme'

const useStyles = createStyles((_theme) => ({
  item: {
    paddingLeft: 60,
  },
}))

const items = [
  {
    title: 'Saturday Night',
    desc: 'Bachelor & Bachelorette outings (details TBD)',
    image: 'img/icon-chip-party.svg',
    alt: 'party poker chip',
  },
  {
    title: 'Sunday 2pm - 2:30pm',
    desc: 'Ceremony at Royal Wedding Chapel',
    image: 'img/icon-chip-ceremony.svg',
    alt: 'ceremony poker chip',
  },
  {
    title: 'Sunday 5:30pm - 7:30pm',
    desc: 'Reception at Momofuku',
    image: 'img/icon-chip-reception.svg',
    alt: 'eception poker chip',
  },
  {
    title: 'Sunday 7:30pm to whenever',
    desc: 'Party time (details TBD)',
    image: 'img/icon-chip-champagne.svg',
    alt: 'champagne poker chip',
  },
]

export function Schedule() {
  const { classes } = useStyles()
  return (
    <Section
      bg={colors.darkblue}
      color={colors.offwhite}
      title="Event Schedule">
      <Box mb="xl" sx={{ maxWidth: 500, margin: 'auto' }}>
        <Timeline bulletSize={58} classNames={classes}>
          {items.map((item, i) => (
            <Timeline.Item
              color={colors.offwhite}
              bullet={
                <Avatar alt={item.alt} radius="xl" size={80} src={item.image} />
              }
              title={
                <Text color={colors.offwhite} fw={600} size="lg">
                  {item.title}
                </Text>
              }>
              <Text color={colors.offwhite}>{item.desc}</Text>
              {i !== items.length - 1 && <Space h="xl" />}
            </Timeline.Item>
          ))}
        </Timeline>
      </Box>
    </Section>
  )
}
