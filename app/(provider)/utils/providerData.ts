// utils/providerData.ts
export const currentJobs = [
  {
    id: "1",
    title: "Bathroom Plumbing Repair",
    client: "John Smith",
    time: "Today, 2:00 PM",
    price: 120,
  },
  {
    id: "2",
    title: "Kitchen Sink Installation",
    client: "Sarah Johnson",
    time: "Tomorrow, 10:00 AM",
    price: 200,
  },
];

export const earningsData = {
  today: 320,
  week: 1250,
  month: 4800,
};

export const serviceRequests = [
  {
    id: "1",
    service: "Leaky Faucet Repair",
    description: "Kitchen faucet is leaking and needs replacement",
    location: "1.2 miles away",
    time: "15 minutes",
    price: 80,
  },
  {
    id: "2",
    service: "Toilet Installation",
    description: "Need to install a new toilet in master bathroom",
    location: "2.5 miles away",
    time: "1 hour",
    price: 150,
  },
  {
    id: "3",
    service: "Water Heater Check",
    description: "Water heater making strange noises, need inspection",
    location: "3.1 miles away",
    time: "2 hours",
    price: 100,
  },
];

export const providerProfile = {
  name: "Alex Johnson",
  rating: 4.8,
  reviews: 124,
  services: ["Plumbing", "Pipe Repair", "Faucet Installation", "Water Heater"],
  completedJobs: 287,
  repeatClients: 84,
  responseRate: 95,
};
