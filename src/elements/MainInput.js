import React from 'react';
import styled from 'styled-components';
import { MainGrid } from './index';

const MainInput = props => {
  const {
    label,
    placeholder,
    _onChange,
    onSubmit,
    type,
    multiLine,
    edit,
    value,
    margin,
    width,
    padding,
    height,
    border,
    borderRadius,
    bg,
    backgroundImage,
    backgroundColor,
    innerRef,
    inputFocusOutline,
    inputFocusBorder,
    inputFocusBoxShadow,
    fontSize,
  } = props;
  const styles = {
    padding,
    height,
    border,
    borderRadius,
    bg,
    backgroundImage,
    inputFocusOutline,
    inputFocusBorder,
    inputFocusBoxShadow,
    fontSize,
  };
  if (multiLine) {
    return (
      <MainGrid>
        {label && <p>{label}</p>}
        <Textarea backgroundColor={backgroundColor} value={value} rows={10} placeholder={placeholder} onChange={_onChange}></Textarea>
      </MainGrid>
    );
  }

  if (edit) {
    return (
      <MainGrid>
        {label && <p>{label}</p>}
        <Input
          {...styles}
          backgroundColor={backgroundColor}
          width={width}
          margin={margin}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          ref={innerRef}
          onKeyPress={(e) => {
            console.log(e.key);
            if (e.key === 'Enter') {
              console.log('pass');
              onSubmit(e);
            }
          }}
        />
      </MainGrid>
    );
  }

  return (
    <MainGrid>
      {label && <p>{label}</p>}
      <Input
        {...styles}
        backgroundColor={backgroundColor}
        width={width}
        margin={margin}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        ref={innerRef}
        onKeyPress={e => {
          console.log(e.key);
          if (e.key === 'Enter') {
            console.log('pass');
            onSubmit(e);
          }
        }}
      />
    </MainGrid>
  );
};

MainInput.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  margin: 0,
  padding: false,
  width: '100%',
  height: false,
  border: false,
  borderRadius: false,
  bg: false,
  backgroundImage: false,
  is_submit: false,
  _onChange: () => {},
  onSubmit: () => {},
};

const Textarea = styled.textarea`
  margin: ${props => props.margin};
  border: ${props => props.border};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  background-image: ${props => props.backgroundImage};
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
`;

const Input = styled.input`
  margin: ${props => props.margin};
  border: ${props => props.border};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  background-image: ${props => props.backgroundImage};
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize};
  &:focus {
    outline: ${props => props.inputFocusOutline};
    border: ${props => props.inputFocusBorder};
    box-shadow: ${props => props.inputFocusBoxShadow};
  }
`;

export default MainInput;