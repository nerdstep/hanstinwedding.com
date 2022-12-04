import { Box, Container, Text, Title } from '@mantine/core'

interface SectionProps {
  children: React.ReactNode
  className?: string
  desc?: React.ReactNode
  hasBg?: boolean
  title: string
}

export function Section({
  children,
  className,
  desc,
  hasBg,
  title,
}: SectionProps) {
  return (
    <Box bg={hasBg ? 'gray.1' : undefined}>
      <Container className={className} py="xl" size="lg">
        <Box mb="xl">
          <Title
            align="center"
            className="font-updock"
            fw={300}
            mb="lg"
            size={60}>
            {title}
          </Title>
          {desc && <Text align="center">{desc}</Text>}
        </Box>
        {children}
      </Container>
    </Box>
  )
}
