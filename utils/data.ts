import {
  ServiceCategory,
  ServiceProvider,
  Booking,
  Review,
  UserProfile,
} from './types';

export const categories: ServiceCategory[] = [
  {
    id: '1',
    name: 'Plumbing',
    icon: 'droplet',
    image: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg',
    description: 'Professional plumbers for all your home water system needs',
    color: '#4A90E2',
  },
  {
    id: '2',
    name: 'Electrical',
    icon: 'zap',
    image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
    description: 'Licensed electricians for repairs and installations',
    color: '#F5A623',
  },
  {
    id: '3',
    name: 'Cleaning',
    icon: 'spray-can',
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg',
    description: 'Professional home and office cleaning services',
    color: '#7ED321',
  },
  {
    id: '4',
    name: 'Teaching',
    icon: 'book-open',
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg',
    description: 'Expert tutors for all subjects and grade levels',
    color: '#BD10E0',
  },
  {
    id: '5',
    name: 'Gardening',
    icon: 'flower',
    image: 'https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg',
    description: 'Professional gardeners for maintenance and landscaping',
    color: '#50E3C2',
  },
  {
    id: '6',
    name: 'Carpentry',
    icon: 'hammer',
    image: 'https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg',
    description: 'Skilled carpenters for woodwork and furniture repair',
    color: '#C86C00',
  },
];

export const providers: ServiceProvider[] = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    profession: 'Master Plumber',
    categoryId: '1',
    rating: 4.9,
    reviewCount: 128,
    verified: true,
    experience: 12,
    hourlyRate: 85,
    bio: 'Licensed master plumber with over 12 years of experience. Specializing in both residential and commercial plumbing services.',
    location: 'New York, NY',
    services: [
      'Pipe repair',
      'Fixture installation',
      'Drain cleaning',
      'Water heater installation',
    ],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: '8:00 AM - 6:00 PM',
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    avatar:
      'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg',
    profession: 'Electrical Engineer',
    categoryId: '2',
    rating: 4.8,
    reviewCount: 96,
    verified: true,
    experience: 8,
    hourlyRate: 90,
    bio: 'Certified electrical engineer specializing in residential and commercial electrical installations and repairs.',
    location: 'Los Angeles, CA',
    services: [
      'Wiring installation',
      'Electrical repair',
      'Lighting installation',
      'Panel upgrades',
    ],
    availability: {
      days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '9:00 AM - 7:00 PM',
    },
  },
  {
    id: '3',
    name: 'Michael Lee',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    profession: 'Cleaning Specialist',
    categoryId: '3',
    rating: 4.7,
    reviewCount: 72,
    verified: true,
    experience: 5,
    hourlyRate: 40,
    bio: 'Professional cleaner with expertise in deep cleaning, organization, and sanitization for homes and offices.',
    location: 'Chicago, IL',
    services: [
      'Deep cleaning',
      'Regular maintenance',
      'Move-in/out cleaning',
      'Office cleaning',
    ],
    availability: {
      days: ['Monday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
      hours: '8:00 AM - 8:00 PM',
    },
  },
  {
    id: '4',
    name: 'Jessica Martinez',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    profession: 'Math Tutor',
    categoryId: '4',
    rating: 5.0,
    reviewCount: 64,
    verified: true,
    experience: 10,
    hourlyRate: 60,
    bio: 'Mathematics educator with 10 years of experience. Specializing in calculus, algebra, and test preparation.',
    location: 'Boston, MA',
    services: [
      'Mathematics tutoring',
      'Test preparation',
      'Homework help',
      'Advanced topics',
    ],
    availability: {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      hours: '3:00 PM - 9:00 PM',
    },
  },
  {
    id: '5',
    name: 'David Wilson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    profession: 'Landscape Gardener',
    categoryId: '5',
    rating: 4.6,
    reviewCount: 48,
    verified: true,
    experience: 15,
    hourlyRate: 55,
    bio: 'Professional gardener with a passion for creating beautiful outdoor spaces. Specializing in sustainable garden design.',
    location: 'Seattle, WA',
    services: [
      'Garden maintenance',
      'Landscape design',
      'Planting services',
      'Lawn care',
    ],
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      hours: '7:00 AM - 5:00 PM',
    },
  },
  {
    id: '6',
    name: 'Robert Chen',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    profession: 'Master Carpenter',
    categoryId: '6',
    rating: 4.9,
    reviewCount: 87,
    verified: true,
    experience: 20,
    hourlyRate: 75,
    bio: 'Master carpenter with 20 years of experience. Specializing in custom furniture, cabinetry, and fine woodworking.',
    location: 'Portland, OR',
    services: [
      'Custom furniture',
      'Cabinet making',
      'Wood repairs',
      'Deck building',
    ],
    availability: {
      days: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: '8:00 AM - 6:00 PM',
    },
  },
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    providerId: '1',
    userId: 'current-user',
    serviceType: 'Pipe repair',
    date: '2025-05-15',
    timeSlot: '10:00 AM - 12:00 PM',
    status: 'confirmed',
    paymentStatus: 'completed',
    amount: 170,
    bookingNotes: 'Leaking pipe under kitchen sink',
  },
  {
    id: '2',
    providerId: '3',
    userId: 'current-user',
    serviceType: 'Deep cleaning',
    date: '2025-05-20',
    timeSlot: '9:00 AM - 1:00 PM',
    status: 'pending',
    paymentStatus: 'pending',
    amount: 160,
  },
  {
    id: '3',
    providerId: '4',
    userId: 'current-user',
    serviceType: 'Mathematics tutoring',
    date: '2025-05-12',
    timeSlot: '4:00 PM - 6:00 PM',
    status: 'completed',
    paymentStatus: 'completed',
    amount: 120,
    bookingNotes: 'Calculus preparation for final exam',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    providerId: '1',
    userId: 'user1',
    userName: 'Emma Thompson',
    userAvatar:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    rating: 5,
    text: 'John was prompt, professional, and fixed our leaking pipe quickly. Highly recommend!',
    date: '2025-04-10',
  },
  {
    id: '2',
    providerId: '1',
    userId: 'user2',
    userName: 'Mark Davis',
    userAvatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 4,
    text: 'Great service. Fixed our clogged drain and gave helpful tips to prevent future issues.',
    date: '2025-04-02',
  },
  {
    id: '3',
    providerId: '4',
    userId: 'user3',
    userName: 'Alex Johnson',
    userAvatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'Jessica is an amazing math tutor! She helped my daughter improve her calculus grade from a C to an A.',
    date: '2025-03-28',
  },
];

export const currentUser: UserProfile = {
  id: 'current-user',
  name: 'Ritik Gupta',
  email: 'RitikGupta@gmail.com',
  phone: '9696548987',
  avatar: 'https://avatars.githubusercontent.com/u/142598621?v=4',
  address: 'Chaubeypur Kanpur, Uttar Pradesh, India',
  savedProviders: ['1', '4', '6'],
  recentlyViewed: ['2', '3', '1'],
};
