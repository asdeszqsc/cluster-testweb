import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import reset from "styled-reset";
import breakpoint from "./breakpoints";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --color-primary-50: #FEF5F7;
    --color-primary-100: #F3D1DB;
    --color-primary-200: #E6A3B7;
    --color-primary-300: #DA7693;
    --color-primary-400: #CE486F;
    --color-primary-500: #C11A4A;
    --color-primary-600: #9B153C;
    --color-primary-700: #74102D;
    --color-primary-800: #4D0A1E;
    --color-primary-900: #27050F;

    --color-secondary-50: #FFF1E9;
    --color-secondary-100: #FDE1CD;
    --color-secondary-200: #FBC29C;
    --color-secondary-300: #FAA46A;
    --color-secondary-400: #F88539;
    --color-secondary-500: #F66707;
    --color-secondary-600: #C55206;
    --color-secondary-700: #943E04;
    --color-secondary-800: #622903;
    --color-secondary-900: #311501;

    --color-blue-50: #E4EEF8;
    --color-blue-100: #D3E6F7;
    --color-blue-200: #9DC8F0;
    --color-blue-300: #78B2E8;
    --color-blue-400: #4395E0;
    --color-blue-500: #1B7CD5;
    --color-blue-600: #1D67AC;
    --color-blue-700: #164E81;
    --color-blue-800: #0F3456;
    --color-blue-900: #071A2B;

    --color-grey-50: #F4F7F9;
    --color-grey-100: #F1F5F9;
    --color-grey-200: #E2E8F0;
    --color-grey-300: #CBD5E1;
    --color-grey-400: #94A3B8;
    --color-grey-500: #64748B;
    --color-grey-600: #475569;
    --color-grey-700: #334155;
    --color-grey-800: #1E293B;
    --color-grey-900: #0F172A;

    --gradation: linear-gradient(90deg, #A7014E 45.74%, #F88539 145.2%);

    --shadow-dropdown: 0px 4px 12px 0px #0000001F;
    --shadow-popup: 0px 4px 20px 0px #00000033;

    font-family: "Pretendard", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;
    font-synthesis: none;

    --gnb-height: 44px;

    @media ${breakpoint.device.sm} {
      --gnb-height: 60px;
    }

    --content-max-width: 1440px;

    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
`;

export default GlobalStyles;
