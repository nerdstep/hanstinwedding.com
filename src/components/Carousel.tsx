import { Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { AnimatePresence, LayoutGroup, motion, PanInfo } from 'framer-motion'
import { wrap } from 'popmotion'
import { useCallback, useState } from 'react'
import {
  CarouselImage,
  swipeConfidenceThreshold,
  swipePower,
  variants,
} from '../lib/carousel'

interface CarouselProps {
  images: CarouselImage[]
  imageIndex?: number
}

export function Carousel({ images, imageIndex = 0 }: CarouselProps) {
  const [[page, direction], setPage] = useState([imageIndex, 0])
  const { height: vHeight } = useViewportSize()

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page]
  )

  const handleDragEnd = useCallback(
    (
      _e: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo
    ) => {
      const swipe = swipePower(offset.x, velocity.x)

      if (swipe < -swipeConfidenceThreshold) {
        paginate(1)
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1)
      }
    },
    [paginate]
  )

  // If we only have 3 images, but we paginate them absolutely
  // (i.e. 1, 2, 3, 4, 5...), then we wrap that within 0-2 to find our
  // image ID in the array below. By passing an absolute page index as the
  // `motion` component's `key` prop, `AnimatePresence` will detect it as an
  // entirely new image. So you can infinitely paginate as few as 1 images.
  const index = wrap(0, images.length, page)

  const { name, title } = images[index]

  return (
    <AnimatePresence custom={direction} initial={false}>
      <LayoutGroup>
        <motion.img
          key={page}
          alt={title}
          animate="center"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          exit="exit"
          height={vHeight - 215}
          initial="enter"
          src={`/img/${name}.jpg`}
          variants={variants}
          style={{
            cursor: 'grab',
            border: '1px solid rgb(0 0 0 / 0.5)',
            borderRadius: 8,
            objectFit: 'cover',
            width: '100%',
          }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          onDragEnd={handleDragEnd}
        />
        <Text
          align="center"
          size="lg"
          sx={(theme) => ({
            color: theme.white,
            textShadow: '1px 1px 1px rgb(0 0 0 / 0.9)',
          })}>
          {title}
        </Text>
      </LayoutGroup>
    </AnimatePresence>
  )
}
