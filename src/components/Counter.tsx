import { Flex, Text } from '@mantine/core'
import Countdown from 'react-countdown'
import { colors } from '../lib/theme'

const units = ['days', 'hours', 'minutes', 'seconds']

interface CounterProps {
  date: Date
}

export function Counter({ date }: CounterProps) {
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <Flex
          align="center"
          direction="row"
          gap="xl"
          justify="center"
          w="100%"
          wrap="wrap">
          {[days, hours, minutes, seconds].map((el, i) => (
            <Flex key={i} align="center" direction="column" mx="md">
              <Flex align="center" justify="center">
                <Text color={colors.offwhite} size={30}>
                  {el}
                </Text>
              </Flex>
              <Text color={colors.offwhite} size="md" transform="uppercase">
                {units[i]}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    />
  )
}
