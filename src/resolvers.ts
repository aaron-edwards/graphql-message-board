const quote = {
  id: 1,
  text: 'Some Text',
  userId: 1,
  category: 'LL',
};

export default {
  Query: {
    quotes: () => [quote],
  },
};
