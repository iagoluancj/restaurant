import styled from 'styled-components'

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainerColor = styled.div`
    background-color: #CE3246;
    height: 100px;
`


export const HeaderLogin = styled.div`
    background-color: #CE3246;
    padding: 15px;
    span {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 32px;
        font-weight: 500;
        color: white;
    }
`;

export const DivInfoDatas = styled.form`
  display: flex;
  flex-direction: column;
  gap: .50rem;
  padding: 1rem;
`;

export const InfoData = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #B1AFAF;
  text-align: left;

    input {
      width: 99%;
      height: 50px;
      border-radius: 5px;
      padding-left: 40px;
      color: #5b5859;
      border: 1px #B1AFAF solid;
    }

    input::placeholder {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: 100 ;
    }
`;

export const TitleData = styled.span`
  font-size: 20px;
  font-weight: 400;

  span {
    font-weight: 100;
    font-size: 12px;
    font-style: italic;
  }
`

export const IconAndInput = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.span`
  position: absolute;
  padding-left: 10px;
  display: flex;
`

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
`

export const Button = styled.button`
  width: 99%;
  height: 50px;
  border-radius: 5px;
  color: #5b5859;
  border: 1px #B1AFAF solid;

  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;

  div {
    padding-left: 9rem;
  }
`

export const SubmitAcess = styled(Button)`
  background-color: #CE3246;
  color: #fff;

  span {
    font-size: 28px;
    color: white;
    margin-bottom: 1px;
  }
`

export const Waiter = styled(Button)`
  color: #5b5859;
  border: 1px #CE3246 solid;

  span {   
    font-size: 28px;
    margin-bottom: 1px;
  }
`
