import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';
import Button from '../Button';
import PropTypes from 'prop-types';

const InputBase = styled.input`
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
  user-select: none;
  line-height: normal;
  transition: all .25s cubic-bezier(.23,1,.32,1) 0s;
  background: linear-gradient(180deg,rgba(1,1,2,.97),rgba(21,13,6,.97));
  border: 1px solid #352011;
  color: ${db.theme.colors.contrastText};
  outline: none;
  box-sizing: border-box;
`;

export default function Input({onChange, placeholder, ...props }) {
  return (
      <InputBase onChange={onChange} placeholder={placeholder}  {...props}/>
  )
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}