import { Accordion, Container, createStyles } from '@mantine/core'
import { Section } from './components/Section'
import { mailto, rsvpDeadline } from './lib/config'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}))

const formattedDate = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
}).format(rsvpDeadline)

export function Faq() {
  const { classes } = useStyles()

  return (
    <Section title="Frequently Asked Questions">
      <Container size="sm">
        <Accordion
          variant="separated"
          styles={{
            label: {
              lineHeight: 1.5,
            },
          }}>
          <Accordion.Item className={classes.item} value="rsvp">
            <Accordion.Control>When is the RSVP deadline</Accordion.Control>
            <Accordion.Panel>
              Please confirm your attendance no later than {formattedDate}.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="plus-one">
            <Accordion.Control>Are plus-ones allowed?</Accordion.Control>
            <Accordion.Panel>
              We will only be able to accommodate the name(s) formally listed on
              your invitation. Contact us if you have any questions.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="children">
            <Accordion.Control>Are children allowed?</Accordion.Control>
            <Accordion.Panel>
              Our preference is for an adult themed wedding, however we
              understand the logistical challenges of that ask. Please contact
              us to let us know if your little ones will be attending.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="registry">
            <Accordion.Control>Where are you registered?</Accordion.Control>
            <Accordion.Panel>
              We are fortunate enough to have all of the earthly possessions we
              could need, and your attendance is gift enough for us! However if
              you insist, we love new experiences and making memories together,
              so feel free to surprise us.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="questions">
            <Accordion.Control>Have any other questions?</Accordion.Control>
            <Accordion.Panel>
              <a href={mailto} rel="noreferrer" target="_blank">
                Shoot us an email
              </a>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Section>
  )
}
