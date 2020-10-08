import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

#root {
  --primary-color: #fea;
  --secondary-color: #764701;
  font-family:'Montserrat', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #333;
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
  height: 100%;
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

.container {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}
`;
 
export default GlobalStyle;