// import { useContext } from "react";
// import {ThemeContext} from './ThemeContext'

// export const useTheme = () =>  useContext(ThemeContext);
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // ✅ not ThemeProvider

export const useTheme = () => useContext(ThemeContext);


