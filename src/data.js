export const bookingRequests = [
  {
    id: 1,
    username: 'user1',
    name: 'Mark Otto',
    date: 'January 15, 2021',
    time: '21:45',
  },
  {
    id: 2,
    username: 'user2',
    name: 'Chris Thornton',
    date: 'January 11, 2021',
    time: '18:45',
  },
  {
    id: 3,
    username: 'user3',
    name: 'Larry Paige',
    date: 'January 02, 2021',
    time: '15:45',
  },
]

export const users = [
  {
    id: 1,
    username: 'user1',
    type: 0,
    name: 'Mark Otto',
    city: 'Dhaka',
    country: 'Bangladesh',
    profile_photo: 'team_2_img_3.jpg',
    rating: 4.5,
    rating_count: 12,
    phone: '+019989893598',
    approved: true,
  },
  {
    id: 2,
    username: 'user2',
    type: 0,
    name: 'Chris Thornton',
    city: 'Chittagong',
    country: 'Bangladesh',
    profile_photo: 'team_2_img_1.jpg',
    rating: 4.8,
    rating_count: 1,
    phone: '+019989893714',
    approved: true,
  },
  {
    id: 3,
    username: 'user3',
    type: 1,
    name: 'Larry Paige',
    city: 'Gazipur',
    country: 'Bangladesh',
    profile_photo: 'team_2_img_2.jpg',
    rating: 4.9,
    rating_count: 25,
    phone: '+019989893935',
    vehicle: 2,
    approved: true,
  },
]

export const reviewsData = [
  {
    id: 1,
    username: 'user1',
    rating: 5,
    receiver: 'user4',
    date: '2021-01-24',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua adipiscing elit.',
  },
  {
    id: 2,
    username: 'user2',
    rating: 5,
    receiver: 'user4',
    date: '2021-01-23',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua adipiscing elit.',
  },
  {
    id: 3,
    username: 'user3',
    rating: 4,
    receiver: 'user4',
    date: '2021-01-23',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  olore magna aliqua adipiscing elit.',
  },
]

export const vehiclesData = [
  {
    id: 1,
    driver: 'user3',
    name: 'Rocket Ambulance',
    type: '2',
    cost: 8,
    features: { wheelChair: true, oxygen: true, stretcher: true, seat: 2 },
    photo: 'ambulance01.png',
  },
  {
    id: 2,
    driver: 'user3',
    name: 'FirstCoast Ambulance',
    type: '1',
    cost: 6,
    features: { wheelChair: false, oxygen: true, stretcher: true, seat: 4 },
    photo: 'ambulance02.png',
  },
  {
    id: 3,
    driver: 'user3',
    name: 'NorthPole Ambulance',
    type: '3',
    cost: 9,
    features: { wheelChair: false, oxygen: false, stretcher: true, seat: 1 },
    photo: 'ambulance03.png',
  },
  {
    id: 4,
    driver: 'user3',
    name: 'MaxSpeed Ambulance',
    type: '4',
    cost: 10,
    features: { wheelChair: true, oxygen: true, stretcher: true, seat: 2 },
    photo: 'ambulance01.png',
  },
]
