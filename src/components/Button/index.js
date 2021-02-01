import styled from 'styled-components';
import db from '../../../db.json';

const ButtonBase = styled.button`
  width: 100%;
  display: block;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 4px 16px;
  min-width: 64px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-weight: 500;
  text-decoration:none; 
  line-height: 1.75;
  font-weight: bolder;
  background: url(${db.bg3}) repeat-x 0 0;
  &:disabled {
    color: ${({ theme }) => theme.colors.contrastText};
   background: linear-gradient(180deg,rgba(1,1,2,.7),rgba(21,13,6,.9)), url(${db.bg3});
}
  &:focus {
    box-shadow: inset 0 0 0 1000px rgba(11,156,49,0.2);
    }

  color: ${({ theme }) => theme.colors.secondary};
  * {
    margin: 0;
  } 
`;

Button.Link = styled.a`
  width: 100%;
  display: block;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 4px 16px;
  min-width: 64px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-weight: 500;
  text-decoration:none; 
  line-height: 1.75;
  font-weight: bolder;
  background: url(${db.bg3}) repeat-x 0 0;
  &:disabled {
    color: ${({ theme }) => theme.colors.contrastText};
   background: linear-gradient(180deg,rgba(1,1,2,.7),rgba(21,13,6,.9)), url(${db.bg3});
}
  color: ${({ theme }) => theme.colors.secondary};
  * {
    margin: 0;
  }
`;

export default function Button({...props}) {
  return (
    <ButtonBase {...props}/>
  )
}

