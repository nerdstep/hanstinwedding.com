import { MantineThemeOverride } from '@mantine/core'

export const colors = {
  black: '#231f20',
  offwhite: '#eeebdf',
  gray: '#d1d3d4',
  darkblue: '#002648',
  blue: '#317cc0',
  red: '#e11f27',
  orange: '#e19a4f',
} as const

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  black: '#231f20',
  primaryShade: 7,
  fontFamily: '"Montserrat", sans-serif',
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  headings: {
    fontWeight: 400,
    sizes: {
      h1: {
        fontSize: 40,
      },
    },
  },
}
