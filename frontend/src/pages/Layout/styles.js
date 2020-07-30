import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 50px;

  background: #222;

  p {
    display: flex;
    font-size: 16px;
    color: #fff;
    margin-left: 30px;

    transition: .2s;

    &:hover {
      cursor: pointer;
      color: #aaa;
    }
  }
`;

export const Admin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 50px;

  background: #222;

  p {
    font-size: 16px;
    color: #fff;
    margin-right: 30px;

    transition: .2s;

    &:hover {
      cursor: pointer;
      color: #aaa;
    }
  }
`;
