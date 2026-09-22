export type UniversityId = 'wits' | 'uj' | 'up' | 'ukzn'
export type NsfasStatus = 'rated' | 'capped' | 'private'
export type RoomType = 'Single' | 'Sharing' | 'Double'
export type Catering = 'full' | 'self'

export interface University {
  id: UniversityId
  name: string
  short: string
  campuses: string[]
}

export interface CampusDistance {
  campus: string
  km: number
  walkMin: number
}

export interface Residence {
  slug: string
  name: string
  university: UniversityId
  suburb: string
  city: string
  pricePerMonth: number
  roomType: RoomType
  catering: Catering
  nsfas: NsfasStatus
  popular?: boolean
  beds: number
  image: string
  distances: CampusDistance[]
  amenities: string[]
  portal: string
  steps: string[]
  documents: string[]
  closes: string
}

export const universities: University[] = [
  {
    id: 'wits',
    name: 'University of the Witwatersrand',
    short: 'Wits',
    campuses: ['Braamfontein East Campus', 'Braamfontein West Campus', 'Parktown Health Sciences'],
  },
  {
    id: 'uj',
    name: 'University of Johannesburg',
    short: 'UJ',
    campuses: ['Auckland Park Kingsway', 'Doornfontein Campus', 'Soweto Campus'],
  },
  {
    id: 'up',
    name: 'University of Pretoria',
    short: 'UP',
    campuses: ['Hatfield Campus', 'Hillcrest Campus'],
  },
  {
    id: 'ukzn',
    name: 'University of KwaZulu-Natal',
    short: 'UKZN',
    campuses: ['Howard College', 'Westville Campus'],
  },
]

export const residences: Residence[] = [
  {
    slug: 'wits-vista',
    name: 'Wits Vista Residences',
    university: 'wits',
    suburb: 'Braamfontein',
    city: 'Johannesburg',
    pricePerMonth: 2850,
    roomType: 'Single',
    catering: 'full',
    nsfas: 'rated',
    beds: 142,
    image: '/images/res-vista.jpg',
    distances: [
      { campus: 'Braamfontein East Campus', km: 1.2, walkMin: 15 },
      { campus: 'Braamfontein West Campus', km: 1.8, walkMin: 23 },
      { campus: 'Parktown Health Sciences', km: 4.6, walkMin: 57 },
    ],
    amenities: ['Fibre Wi-Fi', 'Laundry', 'Study lounge', '24h security'],
    portal: 'Wits Student Accommodation portal (self-service)',
    steps: [
      'Register on the Wits accommodation portal with your student number',
      'Confirm your NSFAS funding status and room preference',
      'Upload your ID and proof of registration',
      'Pay the R600 refundable deposit to hold your bed',
    ],
    documents: ['ID document', 'Proof of registration', 'NSFAS certification', 'Guarantor details'],
    closes: '15 September',
  },
  {
    slug: 'oakhurst-flats',
    name: 'Oakhurst Flats',
    university: 'wits',
    suburb: 'Parktown',
    city: 'Johannesburg',
    pricePerMonth: 3100,
    roomType: 'Single',
    catering: 'full',
    nsfas: 'capped',
    popular: true,
    beds: 210,
    image: '/images/res-oakhurst.jpg',
    distances: [
      { campus: 'Braamfontein East Campus', km: 1.8, walkMin: 23 },
      { campus: 'Braamfontein West Campus', km: 2.4, walkMin: 30 },
      { campus: 'Parktown Health Sciences', km: 0.9, walkMin: 11 },
    ],
    amenities: ['Fibre Wi-Fi', 'Dining hall', 'Gym', 'Security gate'],
    portal: 'Wits Student Accommodation portal (self-service)',
    steps: [
      'Apply through the accredited provider listing on the Wits portal',
      'Upload your NSFAS accommodation allocation letter',
      'Attend the online placement interview',
      'Accept your offer within 7 days',
    ],
    documents: ['ID document', 'NSFAS allocation letter', 'Proof of registration'],
    closes: '21 September',
  },
  {
    slug: 'northmead-house',
    name: 'Northmead House',
    university: 'wits',
    suburb: 'Illovo',
    city: 'Johannesburg',
    pricePerMonth: 3400,
    roomType: 'Single',
    catering: 'self',
    nsfas: 'private',
    beds: 98,
    image: '/images/res-northmead.jpg',
    distances: [
      { campus: 'Braamfontein East Campus', km: 2.6, walkMin: 33 },
      { campus: 'Braamfontein West Campus', km: 3.1, walkMin: 39 },
      { campus: 'Parktown Health Sciences', km: 5.4, walkMin: 68 },
    ],
    amenities: ['Shared kitchen', 'Shuttle service', 'Bike storage', 'Laundry'],
    portal: 'Wits Student Accommodation portal (self-service)',
    steps: [
      'Enquire directly with the residence manager',
      'Complete the private lease application form',
      'Submit affordability documents or a guarantor',
      'Sign the lease and pay the first month upfront',
    ],
    documents: ['ID document', 'Proof of income or guarantor', 'Signed lease'],
    closes: '30 September',
  },
  {
    slug: 'kingsway-commons',
    name: 'Kingsway Commons',
    university: 'uj',
    suburb: 'Auckland Park',
    city: 'Johannesburg',
    pricePerMonth: 2600,
    roomType: 'Sharing',
    catering: 'self',
    nsfas: 'rated',
    beds: 180,
    image: '/images/res-vista.jpg',
    distances: [
      { campus: 'Auckland Park Kingsway', km: 0.6, walkMin: 8 },
      { campus: 'Doornfontein Campus', km: 6.2, walkMin: 78 },
      { campus: 'Soweto Campus', km: 14.1, walkMin: 176 },
    ],
    amenities: ['Study rooms', 'Wi-Fi', 'Laundry', 'Shuttle'],
    portal: 'UJ uLink accommodation application',
    steps: [
      'Apply on uLink under accommodation',
      'Select Kingsway Commons as your first choice',
      'Upload NSFAS confirmation',
      'Accept placement and sign the residence agreement',
    ],
    documents: ['ID document', 'NSFAS confirmation', 'Proof of registration'],
    closes: '10 October',
  },
  {
    slug: 'doornfontein-lofts',
    name: 'Doornfontein Lofts',
    university: 'uj',
    suburb: 'Doornfontein',
    city: 'Johannesburg',
    pricePerMonth: 2400,
    roomType: 'Double',
    catering: 'self',
    nsfas: 'capped',
    beds: 120,
    image: '/images/res-northmead.jpg',
    distances: [
      { campus: 'Auckland Park Kingsway', km: 5.9, walkMin: 74 },
      { campus: 'Doornfontein Campus', km: 0.5, walkMin: 6 },
      { campus: 'Soweto Campus', km: 18.3, walkMin: 229 },
    ],
    amenities: ['Shared kitchen', 'Security gate', 'Laundry'],
    portal: 'UJ uLink accommodation application',
    steps: [
      'Apply on uLink under accommodation',
      'Confirm the NSFAS cap covers the rent',
      'Submit supporting documents',
      'Collect keys at registration',
    ],
    documents: ['ID document', 'NSFAS confirmation'],
    closes: '3 October',
  },
  {
    slug: 'hatfield-square-res',
    name: 'Hatfield Square Residence',
    university: 'up',
    suburb: 'Hatfield',
    city: 'Pretoria',
    pricePerMonth: 3250,
    roomType: 'Single',
    catering: 'full',
    nsfas: 'rated',
    popular: true,
    beds: 260,
    image: '/images/res-hatfield.jpg',
    distances: [
      { campus: 'Hatfield Campus', km: 0.7, walkMin: 9 },
      { campus: 'Hillcrest Campus', km: 2.2, walkMin: 28 },
    ],
    amenities: ['Dining hall', 'Wi-Fi', 'Gym', '24h security'],
    portal: 'UP TuksRes online application',
    steps: [
      'Apply on the TuksRes portal',
      'Upload your NSFAS allocation letter',
      'Accept your residence placement offer',
      'Pay the placement fee',
    ],
    documents: ['ID document', 'NSFAS allocation letter', 'Placement fee proof'],
    closes: '12 October',
  },
  {
    slug: 'howard-heights',
    name: 'Howard Heights',
    university: 'ukzn',
    suburb: 'Glenwood',
    city: 'Durban',
    pricePerMonth: 2200,
    roomType: 'Sharing',
    catering: 'self',
    nsfas: 'rated',
    beds: 150,
    image: '/images/res-vista.jpg',
    distances: [
      { campus: 'Howard College', km: 1.4, walkMin: 18 },
      { campus: 'Westville Campus', km: 9.8, walkMin: 123 },
    ],
    amenities: ['Wi-Fi', 'Study lounge', 'Laundry'],
    portal: 'UKZN Student Housing application',
    steps: [
      'Apply through UKZN Student Housing',
      'Confirm NSFAS accreditation of the building',
      'Submit documents to the housing office',
      'Sign the residence contract',
    ],
    documents: ['ID document', 'NSFAS confirmation', 'Proof of registration'],
    closes: '28 September',
  },
]

export function getUniversity(id: UniversityId): University {
  return universities.find((university) => university.id === id)!
}

export function formatPrice(amount: number): string {
  const grouped = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
  return `R${grouped}`
}

export function nsfasLabel(status: NsfasStatus): string {
  if (status === 'rated') return 'NSFAS rated'
  if (status === 'capped') return 'NSFAS capped'
  return 'Private lease'
}

export function roomTypeLabel(roomType: RoomType): string {
  return `${roomType} rooms`
}

export function cateringLabel(catering: Catering): string {
  return catering === 'full' ? 'Catered' : 'Self-catering'
}

export function distanceFrom(residence: Residence, campus: string): CampusDistance | undefined {
  return residence.distances.find((distance) => distance.campus === campus)
}
