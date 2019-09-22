const users = [
  { name: 'Ms. Madelyn Bailey' },
  { name: 'Cyrus Keeling PhD' },
  { name: "Fern O'Kon" },
  { name: 'Ezekiel Corkery' },
  { name: 'Ofelia Nicolas' },
  { name: 'Jaida Mante Sr.' },
  { name: 'Aracely Yost' },
  { name: 'Dr. Orrin Wolf' },
  { name: 'Robbie Bartoletti' },
];

export default {
  Query: {
    users: () => users,
  },
};
