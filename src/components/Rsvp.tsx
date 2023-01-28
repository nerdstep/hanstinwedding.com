import { Button, Group, LoadingOverlay, Modal, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { rsvpUrl } from '../lib/config'

export function Rsvp() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [opened, setOpened] = useState(false)

  if (isMobile) {
    return (
      <Group position="center">
        <Button
          component="a"
          href={rsvpUrl}
          rel="noreferrer"
          size="xl"
          target="_blank"
          variant="white">
          RSVP
        </Button>
      </Group>
    )
  }

  return (
    <>
      <Modal
        centered
        opened={opened}
        overlayBlur={3}
        overlayOpacity={0.55}
        size="auto"
        withCloseButton={false}
        onClose={() => setOpened(false)}>
        <ScrollArea offsetScrollbars style={{ height: 800 }} type="auto">
          <iframe
            height={1810}
            src={rsvpUrl}
            style={{ border: 0, borderSpacing: 0 }}
            title="RSVP"
            width={600}>
            <div style={{ width: '100', position: 'relative' }}>
              <LoadingOverlay visible overlayBlur={2} />
            </div>
          </iframe>
        </ScrollArea>
      </Modal>
      <Group position="center">
        <Button size="xl" variant="white" onClick={() => setOpened(true)}>
          RSVP
        </Button>
      </Group>
    </>
  )
}
