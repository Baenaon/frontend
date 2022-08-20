// 초기 state 입니다.
export const initialState = {
  isLoggedIn: false,
  user: null,
};

// 액션 이름을 정의한 것입니다. 오타 방지를 위한 코드입니다.
export const LOG_IN = "LOG_IN";
export const NAME_INPUT = "NAME_INPUT";

// 액션을 만들어 주는 함수 입니다.
export const logInAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const nameInputAction = (data) => {
  return {
    type: NAME_INPUT,
    data,
  };
};

// 액션 실행을 위한 reducer 입니다. dispatch 시 실행됩니다.
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case NAME_INPUT: {
      return {
        ...state,
        user: action.data,
      };
    }
    default:
      return state;
  }
};
