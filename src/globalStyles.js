import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

#root {
  --primary-color: #fea;
  --secondary-color: #764701
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #333;
  --font-first: Helvetica, Arial, sans-serif;
  --font-second: 'Montserrat', geogia;
}

html,
body,
#root {
  min-height: 100%;
}

h1,
h2,
h3,
p {
  margin: 0;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  display: block;
  font-size: 1rem;
}

a {
  text-decoration: none;
  color: #333;
}
button {
  cursor: pointer;
}
`;
 
export default GlobalStyle;