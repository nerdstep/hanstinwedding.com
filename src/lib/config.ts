export const weddingLocation = 'Las Vegas, NV'

export const weddingDate = new Date(2023, 8, 3)

export const rsvpDeadline = new Date(2023, 6)

export const weddingDateFull = new Intl.DateTimeFormat('en', {
  dateStyle: 'full',
}).format(weddingDate)
