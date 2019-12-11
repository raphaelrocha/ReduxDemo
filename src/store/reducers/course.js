const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Inciando',
      lessons: [
        {
          id: 1,
          title: 'Primeira Aula',
        },
        {
          id: 2,
          title: 'Segunda Aula',
        },
      ],
    },
    {
      id: 2,
      title: 'Redux',
      lessons: [
        {
          id: 3,
          title: 'Terceira Aula',
        },
        {
          id: 4,
          title: 'Quarta Aula',
        },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case 'TOGGLE_LESSON': {
      return {
        ...state,
        activeModule: action.module,
        activeLesson: action.lesson,
      };
    }
    default: {
      return state;
    }
  }
}
