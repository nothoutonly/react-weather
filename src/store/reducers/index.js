import {
  LOADING_WEATHER_DATA,
  LOADED_WEATHER_DATA,
  ERROR_WEATHER_DATA
} from "../actions/index";

const initState = {
  locationData: "",
  loading: false,
  loaded: false,
  error: false
};

const rootReducer = function(state = initState, action) {
  console.log("Action received: ", action);
  const { payload } = action;

  switch (action.type) {
    case LOADING_WEATHER_DATA:
      return {
        ...state,
        locationData: payload,
        loading: true,
        loaded: false,
        error: false
      };
    case LOADED_WEATHER_DATA: {
      const { main, weather, name, wind } = payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        main,
        weather,
        name,
        wind
      };
    }
    case ERROR_WEATHER_DATA:
      return { ...state, loading: false, loaded: true, error: true };
    default:
      return state;
  }
};

export default rootReducer;
