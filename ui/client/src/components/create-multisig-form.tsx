import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { size } from 'polished';

import Button from './button';
import space from '../assets/images/space.jpg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Curve } from '../assets/curve.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import { colors, unit } from '../styles';
import { CreateMultisigVariables } from '../__generated__/CreateMultisig';

interface LoginFormProps {
  createMultisig: (a: { variables: CreateMultisigVariables }) => void;
}

interface LoginFormState {
  title: string;
  description: string;
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = { title: '', description: '' };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).name ;
    const value = (event.target as HTMLInputElement).value;
   
    this.setState(s => ({ [name]: value } as Pick<LoginFormState, keyof LoginFormState>));
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.createMultisig({ variables: { title: this.state.title, description: this.state.description } });
  };

  render() {
    return (
      <Container>
        <Header>
          
        </Header>
        <StyledLogo />
        <Heading>Create New Multisig</Heading>
        <StyledForm onSubmit={(e) => this.onSubmit(e)}>
          <StyledInput
            required
            name="title"
            placeholder="Title"
            onChange={(e) => this.onChange(e)}
          />
          <StyledInput
            required
            name="description"
            placeholder="Description"
            onChange={(e) => this.onChange(e)}
          />
          <Button type="submit">Create Multisig</Button>
        </StyledForm>
      </Container>
    );
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: 'white',
  backgroundColor: colors.primary,
  backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const svgClassName = css({
  display: 'block',
  fill: 'currentColor',
});

const Header = styled('header')(svgClassName, {
  width: '100%',
  marginBottom: unit * 5,
  padding: unit * 2.5,
  position: 'relative',
});

const StyledLogo = styled(Logo)(size(56), {
  display: 'block',
  margin: '0 auto',
  position: 'relative',
});

const StyledCurve = styled(Curve)(size('100%'), {
  fill: colors.primary,
  position: 'absolute',
  top: 0,
  left: 0,
});

const Heading = styled('h1')({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

const StyledRocket = styled(Rocket)(svgClassName, {
  width: 250,
});

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 406,
  padding: unit * 3.5,
  borderRadius: 3,
  boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
  color: colors.text,
  backgroundColor: 'white',
});

const StyledInput = styled('input')({
  width: '100%',
  marginBottom: unit * 2,
  padding: `${unit * 1.25}px ${unit * 2.5}px`,
  border: `1px solid ${colors.grey}`,
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: colors.primary,
  },
});
