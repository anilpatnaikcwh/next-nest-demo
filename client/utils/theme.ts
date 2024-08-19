"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const theme = createTheme({
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
});
