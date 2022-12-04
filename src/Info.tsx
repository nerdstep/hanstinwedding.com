import { Avatar, Box, createStyles, Flex, Image, Text } from '@mantine/core'
import imgProposal from './assets/proposal.jpg'
import { Section } from './components/Section'
import { weddingDateFull, weddingLocation } from './lib/config'

const useStyles = createStyles((_theme) => ({
  eventItem: {
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
}))

const items = [
  {
    time: '14:00 Ceremony',
    location: 'Royal Wedding Chapel, 1215 S Las Vegas Blvd',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/img/chapel.png',
  },
  {
    time: '17:30 Reception',
    location: 'Momofuku, The Cosmopolitan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/img/momofuku.png',
  },
  {
    time: '20:00 Party!',
    location: 'TBD',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/img/las-vegas-sign.png',
  },
]

export function Info() {
  const { classes } = useStyles()

  return (
    <Section
      hasBg
      title="Wedding Events"
      desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.">
      <Flex gap="lg">
        <Image alt="The proposal" radius="md" src={imgProposal} width={500} />
        <Box p="lg">
          <Text mb="lg" size="xl">
            {weddingDateFull} | {weddingLocation}
          </Text>
          {items.map((item) => (
            <Flex className={classes.eventItem} my="lg">
              {item.image && (
                <Avatar mr="lg" radius="xl" size="xl" src={item.image} />
              )}
              <Box>
                <Text fw={600}>{item.time}</Text>
                <Text mb="xs">{item.location}</Text>
                <Text>{item.desc}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Section>
  )
}
