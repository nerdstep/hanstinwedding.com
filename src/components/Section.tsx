import { Box, Container, Text } from '@mantine/core'
import { colors } from '../lib/theme'

interface SectionProps {
  bg?: string
  children?: React.ReactNode
  className?: string
  color?: string
  desc?: React.ReactNode
  title?: string
}

export function Section({
  bg = colors.offwhite,
  color,
  children,
  className,
  desc,
  title,
}: SectionProps) {
  return (
    <Box bg={bg}>
      <Container className={className} py="4rem" size="lg">
        <Box mb={children ? 'xl' : undefined}>
          {title && (
            <Text
              align="center"
              color={color}
              mb="lg"
              size={40}
              transform="uppercase">
              {title}
            </Text>
          )}
          {desc && (
            <Text align="center" color={color} size="xl">
              {desc}
            </Text>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  )
}
