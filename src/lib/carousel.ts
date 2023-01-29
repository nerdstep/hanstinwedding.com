export const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

/**
 * Experimenting with distilling swipe offset and velocity into a single
 * variable, so theless distance a user has swiped, the more velocity they
 * need to register as a swipe. Should accomodate longer swipes and short
 * flicks without having binary checks on just distance thresholds
 * and velocity > 0.
 */
export const swipeConfidenceThreshold = 10000

export const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity

export interface CarouselImage {
  name: string
  title: string
}

export const images: CarouselImage[] = [
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
