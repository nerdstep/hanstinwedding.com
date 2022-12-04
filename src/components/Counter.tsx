import { createStyles, Flex } from '@mantine/core'
import Countdown from 'react-countdown'

const useStyles = createStyles((theme) => ({
  wrapper: {},

  count: {
    //width: 80,
    //height: 80,
    //background: theme.white,
    //borderRadius: 9999,
    color: theme.white,
    //fontFamily: 'monospace',
    fontSize: '3rem',
    fontWeight: 300,
  },

  unit: {
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 300,
    textTransform: 'uppercase',
  },
}))

const units = ['days', 'hours', 'minutes', 'seconds']

interface CounterProps {
  date: Date
}

export function Counter({ date }: CounterProps) {
  const { classes } = useStyles()
  return (
    <Countdown
      date={date}
      renderer={({ days, hours, minutes, seconds }) => (
        <Flex
          align="center"
          className={classes.wrapper}
          direction="row"
          gap="xl"
          justify="center"
          w="100%"
          wrap="wrap">
          {[days, hours, minutes, seconds].map((el, i) => (
            <Flex align="center" direction="column">
              <Flex align="center" className={classes.count} justify="center">
                {el}
              </Flex>
              <div className={classes.unit}>{units[i]}</div>
            </Flex>
          ))}
        </Flex>
      )}
    />
  )
}
