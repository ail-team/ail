import { color } from './styles/color';

/** @type {import('tailwindcss').Config} */
export const content = ['./app/**/*.{js,ts,jsx,tsx}', './common/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      'a-gray': {
        100: color.gray[100],
        95: color.gray[95],
        90: color.gray[90],
        85: color.gray[85],
        80: color.gray[80],
        60: color.gray[60],
        40: color.gray[40],
        20: color.gray[20],
        10: color.gray[10],
      },
      'a-purple': {
        80: color.purple[80],
        60: color.purple[60],
      },
      'a-blue': {
        60: color.blue[60],
        40: color.blue[40],
      },
      'a-bp': {
        100: color.blueToPurple[100],
        90: color.blueToPurple[90],
        80: color.blueToPurple[80],
        70: color.blueToPurple[70],
        60: color.blueToPurple[60],
        50: color.blueToPurple[50],
        40: color.blueToPurple[40],
        30: color.blueToPurple[30],
        20: color.blueToPurple[20],
        10: color.blueToPurple[10],
      },
    },
  },
};
export const plugins = [];
