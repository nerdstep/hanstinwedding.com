import { Button, Group, LoadingOverlay, Modal, ScrollArea } from '@mantine/core'
import { useState } from 'react'

export function Rsvp() {
  const [opened, setOpened] = useState(false)

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
            frameBorder={0}
            height={1810}
            marginHeight={0}
            marginWidth={0}
            src="https://forms.gle/NxPWoStZ3BXTWaDh7"
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
