import { createGlobalStyle } from 'styled-components';
import * as theme from '@Components/theme';

const GlobalStyle = createGlobalStyle`

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: ${theme.colors.grey};
    }

    p {
        margin: 0;
    }

    a {
        color: ${theme.colors.green};
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
