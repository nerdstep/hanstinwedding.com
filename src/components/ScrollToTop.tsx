import { ActionIcon, Affix, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUpCircle } from '@tabler/icons'
import { colors } from '../lib/theme'

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition mounted={scroll.y > 700} transition="slide-up">
          {(transitionStyles) => (
            <ActionIcon
              color={colors.blue}
              radius="xl"
              size="xl"
              style={transitionStyles}
              title="Scroll to top"
              variant="filled"
              onClick={() => scrollTo({ y: 0 })}>
              <IconArrowUpCircle size={32} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  )
}
