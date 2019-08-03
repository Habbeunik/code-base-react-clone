import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export function InputComponentWrapper({ children, style, label, name }) {
  return (
    <Form.Field style={{ marginBottom: '15px', ...style }} fluid>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      {children}
    </Form.Field>
  );
}

InputComponentWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

InputComponentWrapper.defaultProps = {
  style: {},
  label: ''
};

export class Input extends React.PureComponent {
  state = {
    isFocus: false
  };

  handleBlur = () => this.setState({ isFocus: false });

  handleFocus = () => this.setState({ isFocus: true });

  render() {
    const { name, placeholder, type, style, wrapperStyle, label } = this.props;
    const { isFocus } = this.state;

    return (
      <InputComponentWrapper style={wrapperStyle} label={label} name={name}>
        <input
          name={name}
          className={`input ${isFocus ? 'input-focus' : ''} `}
          type={type}
          placeholder={placeholder}
          style={style}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </InputComponentWrapper>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  label: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  style: {},
  wrapperStyle: {},
  label: ''
};

export default {};
