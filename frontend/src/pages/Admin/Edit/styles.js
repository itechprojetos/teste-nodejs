import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const InfoForm = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 10px;
  border: 1px solid #888;

  form {
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    align-items: center;

    label {
      font-size: 15px;
      margin-bottom: 6px;
      margin-left: 9px;
      background: #fff;
      border-radius: 0 16px 16px 0;
      padding: 0 0 0 5px;
      border: 1px solid #999;
      width: 100%;

      input {
        border-radius: 0 12px 12px 0;
        padding: 4px 10px;
        border-left: 1px solid #999;
      }
    }

    .options {
      font-size: 15px;
      margin-bottom: 6px;
      margin-left: 9px;
      padding: 0 0 0 5px;
      border-bottom: 1px solid #999;
      width: 100%;
      display: flex;
      align-items: center;
    }

    select {
      border-radius: 12px;
      border: 1px solid #999;
      padding: 4px 10px;
      width: 80%;
    }

  }
`;

export const AbilityForm = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 10px;
  border: 1px solid #888;
  max-height: 100%;
  max-width: 100%;

  form {
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    align-items: center;

    label {
      font-size: 15px;
      margin-bottom: 6px;
      margin-left: 9px;
      padding: 0 0 0 5px;
      border-bottom: 1px solid #999;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .ability {
      font-size: 15px;
      margin-bottom: 6px;
      margin-left: 9px;
      padding: 0 0 0 5px;
      border-bottom: 1px solid #999;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      select {
        margin-left: 10px;
        border-radius: 12px;
        border: 1px solid #999;
        padding: 4px 10px;
        width: 20%;
        margin-top: 5px;
      }
    }

    input {
      border-radius: 9px;
      padding: 4px 10px;
      border: 1px solid #999;
      width: 80%;
      margin-left: 5px;
    }

    .aditional {
      border-radius: 9px;
      padding: 4px 10px;
      border: 1px solid #999;
      width: 80%;
    }

    select {
      border-radius: 12px;
      border: 1px solid #999;
      padding: 4px 10px;
      width: 80%;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5A91FF;
    height: 60px;
    width: 120px;
    color: #fff;
    border-radius: 15px;

    &:hover {
      cursor: pointer;
    }
  }

`;
