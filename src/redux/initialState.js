const initialState = {
  columns: [
    { id: '1', title: 'Games', icon: 'gamepad' },
    { id: '2', title: 'Movies', icon: 'film' },
    { id: '3', title: 'Books', icon: 'book' }
  ],
  cards: [
    { id: '1', columnId: '1', title: 'Skyrim' },
    { id: '2', columnId: '1', title: 'Witcher 3' },
    { id: '3', columnId: '2', title: 'Inception' },
    { id: '4', columnId: '2', title: 'Matrix' },
    { id: '5', columnId: '3', title: '1984' }
  ],
  searchString: ''
};

export default initialState;
