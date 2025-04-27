export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  color: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  avatar: string;
  profession: string;
  categoryId: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  experience: number;
  hourlyRate: number;
  bio: string;
  location: string;
  services: string[];
  availability: {
    days: string[];
    hours: string;
  };
}

export interface Booking {
  id: string;
  providerId: string;
  userId: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'completed';
  amount: number;
  bookingNotes?: string;
}

export interface Review {
  id: string;
  providerId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  savedProviders: string[];
  recentlyViewed: string[];
}