import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-image: url(${db.bg2});
  background-color: #444;
  background-position: 50%;
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background: linear-gradient(180deg,#261812 0,#1a0f0b);
  border-bottom: 1px solid #352011;
  color: ${({ theme }) => theme.colors.secondary};
  * {
    margin: 0;
  }
  text-align: center;
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  text-align: center;
  &:hover,
    &:focus {
      opacity: .9;
    }
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
Widget.Topic = styled.a`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px 16px;
  min-width: 64px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-weight: 500;
  user-select: none;
  font-weight: bolder;
  line-height: normal;
  transition: all .25s cubic-bezier(.23,1,.32,1) 0s;
  background: linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97));
  border: 1px solid #352011;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  box-sizing: border-box;
`;
export default Widget;
