import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Register = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 150px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #BABABA;
    border: 1px solid #999;
    border-radius: 4px;

    height: 150px;
    width: 250px;

    label {
      font-size: 15px;
      margin-bottom: 6px;
      margin-left: 9px;
      background: #fff;
      border-radius: 5px;

      input {
        border-radius: 0 12px 12px 0;
        padding: 4px 3px;
        border-left: 1px solid #999;
      }

    }
    button {
      background: #5A91FF;
      color: #fff;
      padding: 5px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
`;
