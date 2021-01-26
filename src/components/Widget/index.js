import styled from 'styled-components'
import db from '../../../db.json'
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

export default Widget;