import { Box, createStyles, Flex, Image, Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Carousel } from '../components/Carousel'
import { Section } from '../components/Section'
import { images } from '../lib/carousel'
import { colors } from '../lib/theme'

const useModalStyles = createStyles((theme) => ({
  close: {
    color: colors.offwhite,
  },
  modal: {
    backgroundColor: 'transparent',
    //backgroundColor: colors.darkblue,
    boxShadow: 'none',
    padding: '0 !important',
    [theme.fn.largerThan('sm')]: {
      backgroundColor: 'transparent',
      padding: '0 !important',
    },
  },
  body: {
    overflow: 'hidden',
  },
}))

const sizeLarge = 256
const sizeSmall = 112

export function Photos() {
  const { classes: modalClasses } = useModalStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const [opened, setOpened] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const handleClickThumb = useCallback(
    (index: number) => () => {
      setOpened(true)
      setImageIndex(index)
    },
    []
  )

  return (
    <Section
      bg={colors.darkblue}
      color={colors.offwhite}
      title="Our Adventures">
      <Modal
        centered
        classNames={modalClasses}
        //fullScreen={isMobile}
        opened={opened}
        overflow="inside"
        overlayBlur={3}
        overlayOpacity={0.6}
        size="auto"
        withCloseButton={false}
        onClose={() => setOpened(false)}>
        <Carousel imageIndex={imageIndex} images={images} />
      </Modal>
      <Flex
        align="center"
        direction="row"
        gap={isMobile ? 'xs' : 'xl'}
        justify="center"
        wrap="wrap">
        {images.map((image, index) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Box
              key={image.name}
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
              onClick={handleClickThumb(index)}>
              <Image
                alt={image.title}
                height="100%"
                radius="md"
                src={`/img/${image.name}-tn.jpg`}
                width="100%"
              />
            </Box>
          </motion.div>
        ))}
      </Flex>
    </Section>
  )
}
