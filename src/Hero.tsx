import { createStyles, Flex, Overlay, Text, Title } from '@mantine/core'
import { Parallax } from 'react-parallax'
import { Counter } from './components/Counter'
import { weddingDate, weddingDateFull, weddingLocation } from './lib/config'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    height: '100vh',
    paddingTop: 0,
    paddingBottom: 0,
    '@media (max-width: 520px)': {},
  },

  inner: {
    zIndex: 2,
  },

  title: {
    fontFamily: 'Updock, cursive',
    fontWeight: 400,
    fontSize: '10rem',
    color: theme.white,
    textAlign: 'center',
    textShadow: '1px 1px 2px #000',

    '@media (max-width: 520px)': {
      fontSize: '6rem',
    },
  },

  description: {
    fontWeight: 500,
    fontSize: '2rem',
    color: theme.white,
    textAlign: 'center',
    textShadow: '1px 1px 2px #000',

    '@media (max-width: 520px)': {
      fontSize: '1.5rem',
    },
  },
}))

export function Hero() {
  const { classes } = useStyles()

  return (
    <>
      <Parallax
        bgImage="/img/cover.jpg"
        bgImageAlt="Hanstin Wedding"
        strength={200}>
        <div className={classes.wrapper}>
          <Overlay blur={3} color="#000" opacity={0.25} zIndex={1} />
          <Flex
            align="center"
            className={classes.inner}
            direction="column"
            gap="md"
            h="100%"
            justify="center"
            pos="relative"
            wrap="wrap">
            <div>
              <Title className={classes.title}>Han & Justin</Title>
              <Text className={classes.description} my="xl">
                ~ {weddingDateFull} ~<br />
                {weddingLocation}
              </Text>
              <Counter date={weddingDate} />
            </div>
          </Flex>
        </div>
      </Parallax>
    </>
  )
}
