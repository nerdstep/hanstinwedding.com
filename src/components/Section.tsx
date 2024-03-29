import { Box, Container, Text, Title } from '@mantine/core'
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
    <Box bg={bg} component="section">
      <Container className={className} py="4rem" size="lg">
        <Box mb={children ? 'xl' : undefined}>
          {title && (
            <Title
              align="center"
              color={color}
              mb="lg"
              size="h1"
              transform="uppercase">
              {title}
            </Title>
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
