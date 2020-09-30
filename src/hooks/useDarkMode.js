import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [darkValue, setDarkValue] = useLocalStorage("dark", initialValue);
  return [darkValue, setDarkValue];
};

export default useDarkMode;
