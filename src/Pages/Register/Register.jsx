import React from 'react';
import { useForm } from 'react-hook-form';
import {
  RegisterForm,
  RegisterLogo,
  RegisterText,
  RegisterWrapper,
  RegisterSubmit,
  ErrorMessage,
  Title,
} from './styles';

// watch can be used to rerender only when you are changing a value like Email or password ex. watch('Email')
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    },
  });

  return (
    <RegisterWrapper>
      {' '}
      {/* <-- da rifare come wrapper component */}
      <RegisterLogo src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" />
      <RegisterForm onSubmit={handleSubmit((data) => {})}>
        <Title>Register</Title>
        <ErrorMessage>{errors.Email?.message}</ErrorMessage>
        <RegisterText
          type="email"
          {...register('Email', {
            required: 'this is required',
          })}
          placeholder="Insert your Email"
        />
        <ErrorMessage>{errors.Password?.message}</ErrorMessage>
        <RegisterText
          type="password"
          {...register('Password', {
            required: 'this is required',
            minLength: {
              value: 8,
              message: 'minimum length is 8',
            },
          })}
          placeholder="Insert your Password"
        />
        <RegisterSubmit>Submit</RegisterSubmit>
      </RegisterForm>
    </RegisterWrapper>
  );
};
