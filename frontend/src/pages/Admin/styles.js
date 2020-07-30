import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Candidates = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Candidate = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  list-style: none;

  margin: 30px 100px;

  li {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "t ."
      "i a";
    background: #aaa;
    border: 1px solid #888;
    border-radius: 9px;
    padding: 15px 30px;

    h1 {
      font-size: 18px;
      margin-bottom: 10px;
      grid-area: t;

      svg:hover {
        cursor: pointer;
      }
    }

    main {
      display: flex;
      flex-direction: column;
      grid-area: i;

      p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      grid-area: a;

      p {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }

    span {
      font-size: 14px;
      margin-bottom: 3px;
    }
  }
`;
