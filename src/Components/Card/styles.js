import styled from 'styled-components';

export const CardMovie = styled.div`
  width: 100%;
  height: 27rem;
  margin-bottom: 0.5rem;
  img {
    width: 100%;
    max-height: 22rem;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  div {
    background: var(--primary-color);
    padding: 0.5rem;
    border-radius: 0.2rem;
    color: var(--secondary-color);
    font-weight: bold;
    text-align: center;
  }
`;
