import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkValue, setDarkValue] = useLocalStorage("dark");
  return [darkValue, setDarkValue];
};

export default useDarkMode;
