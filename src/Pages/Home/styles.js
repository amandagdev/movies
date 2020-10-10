import styled from 'styled-components'

export const Section = styled.section`
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 80rem;
  h1 {
    font-size:2rem
  }
  `

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
width: 100%;
height:100%;
padding: 1rem 0;
gap: 0.5rem;

@media(max-width:1090px) {
  grid-template-columns: repeat(3,1fr);
}

@media(max-width:800px) {
  grid-template-columns: repeat(2,1fr);
}

@media(max-width: 420px) {
  grid-template-columns: repeat(1,1fr);
}
`
