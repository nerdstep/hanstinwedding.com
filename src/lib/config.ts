export const weddingLocation = 'Las Vegas, NV'

export const weddingDate = new Date(2023, 8, 3)

export const rsvpDeadline = new Date(2023, 2, 15)

export const weddingDateFull = new Intl.DateTimeFormat('en', {
  dateStyle: 'full',
}).format(weddingDate)

export const mailto =
  'mailto:justinwilliams42@gmail.com?cc=hanmccullough@gmail.com&subject=Hanstin Wedding'

export const rsvpUrl = 'https://forms.gle/NxPWoStZ3BXTWaDh7'
