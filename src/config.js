import ThunderStormIcon from "./assets/weather_icons/01W.svg";
import RainIcon from "./assets/weather_icons/02W.svg";
import SnowIcon from "./assets/weather_icons/03W.svg";
import ClearIcon from "./assets/weather_icons/04W-DAY.svg";
import CloudsIcon from "./assets/weather_icons/05W.svg";
import NoLocationFound from "./assets/no-location.svg";

export function weatherIcon(weatherId) {
  if (weatherId <= 232) {
    return ThunderStormIcon;
  } else if (weatherId >= 300 && weatherId <= 531) {
    return RainIcon;
  } else if (weatherId >= 600 && weatherId <= 622) {
    return SnowIcon;
  } else if (weatherId === 800) {
    return ClearIcon;
  } else if (weatherId >= 801 && weatherId <= 804) {
    return CloudsIcon;
  }

  return NoLocationFound;
}
const API_KEY = "6d3cabea0249d1f0d7a871df89c713d2";
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
