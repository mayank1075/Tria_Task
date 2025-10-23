export const Contacts = [
  {
    id: 1,
    name: 'Sarah Anderson',
    email: 'sarah.anderson@example.com',
    phone: '+91 9991234567',
    avatar: 'SA',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+91 9992345678',
    avatar: 'MC',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '+91 9993456789',
    avatar: 'ER',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '+91 9994567890',
    avatar: 'JW',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 5,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9995678901',
    avatar: 'PP',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 6,
    name: 'David Kim',
    email: 'david.kim@example.com',
    phone: '+91 9996789012',
    avatar: 'DK',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 7,
    name: 'Olivia Thompson',
    email: 'olivia.t@example.com',
    phone: '+91 9997890123',
    avatar: 'OT',
    createdAt: new Date('22-10-2025')
  },
  {
    id: 8,
    name: 'Alex Martinez',
    email: 'alex.martinez@example.com',
    phone: '+91 9998901234',
    avatar: 'AM',
    createdAt: new Date('22-10-2025')
  }
];

export const generateAvatar = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const getAvatarColor = (id) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-red-500'
  ];
  return colors[id % colors.length];
};