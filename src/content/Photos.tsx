import { Box, Flex, Image, Modal } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useCallback, useState } from 'react'
import { Section } from '../components/Section'
import { colors } from '../lib/theme'

interface Photo {
  name: string
  title: string
}

const photos: Photo[] = [
  {
    name: 'p1',
    title: 'RV Road Trip',
  },
  {
    name: 'p2',
    title: 'The Narrows, Zion National Park',
  },
  {
    name: 'p3',
    title: 'Kayaking, Half Moon Bay',
  },
  {
    name: 'p4',
    title: 'Wine Tasting, Napa Valley',
  },
  {
    name: 'p5',
    title: 'Lake Siskiyou, Mount Shasta',
  },
  {
    name: 'p6',
    title: 'Heavenly, Lake Tahoe',
  },
  {
    name: 'p7',
    title: 'Mount Lassen, Lassen Volcanic National Park',
  },
  {
    name: 'p8',
    title: 'The Cosmopolitan, Las Vegas',
  },
  {
    name: 'p9',
    title: 'Disney World, Florida',
  },
  {
    name: 'p10',
    title: 'Marina Bay Sands, Singapore',
  },
  {
    name: 'p11',
    title: 'Kanto Lampo Waterfall, Bali',
  },
  {
    name: 'p12',
    title: 'The Proposal on Mount Batur, Bali',
  },
]

const sizeLarge = 256
const sizeSmall = 128
const count = photos.length - 1

export function Photos() {
  //const isMobile = useMediaQuery('(max-width: 600px)')
  const [opened, setOpened] = useState(false)
  const [activePhoto, setActivePhoto] = useState<Photo>(photos[0])
  const [index, setIndex] = useState(0)
  const { height: vHeight } = useViewportSize()

  const handleClickThumb = useCallback(
    (photo: Photo, idx: number) => () => {
      setOpened(true)
      setActivePhoto(photo)
      setIndex(idx)
    },
    []
  )

  const handleClickImage = useCallback(() => {
    let idx = index + 1
    idx = idx > count ? 0 : idx
    setActivePhoto(photos[idx])
    setIndex(idx)
  }, [index])

  return (
    <Section
      bg={colors.darkblue}
      color={colors.offwhite}
      title="Our Adventures">
      <Modal
        centered
        //fullScreen={isMobile}
        opened={opened}
        overflow="inside"
        size="auto"
        withCloseButton={false}
        onClose={() => setOpened(false)}>
        <Image
          alt={activePhoto.title}
          caption={activePhoto.title}
          fit="contain"
          height={vHeight - 225}
          src={`/img/${activePhoto.name}.jpg`}
          sx={{
            cursor: 'pointer',
          }}
          onClick={handleClickImage}
        />
      </Modal>
      <Flex
        align="center"
        direction="row"
        gap="xl"
        justify="center"
        wrap="wrap">
        {photos.map((photo, idx) => (
          <Box
            key={photo.name}
            sx={(theme) => ({
              filter:
                'drop-shadow(1px 1px 0px rgb(0 0 0 / 0.7)) drop-shadow(-1px -1px 0px rgb(0 0 0 / 0.7))',
              borderRadius: theme.radius.md,
              width: sizeLarge,
              height: sizeLarge,
              cursor: 'pointer',
              padding: 1,
              [theme.fn.smallerThan('sm')]: {
                width: sizeSmall,
                height: sizeSmall,
              },
            })}
            onClick={handleClickThumb(photo, idx)}>
            <Image
              alt={photo.title}
              height="100%"
              radius="md"
              src={`/img/${photo.name}-tn.jpg`}
              width="100%"
              sx={(_theme) => ({
                '&:hover': {
                  filter:
                    'drop-shadow(0px 8px 8px rgb(0 0 0 / 0.1)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.2))',
                },
              })}
            />
          </Box>
        ))}
      </Flex>
    </Section>
  )
}
