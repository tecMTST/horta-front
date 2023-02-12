import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

import { PasswordField } from 'app/components/Senha';
import { LoginInput, loginSchema } from 'types/Login';
import { useLogin } from 'services/Authentication';

export function LoginPage() {
  const login = useLogin();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, isSubmitting },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<LoginInput> = values => {
    login.mutate(values);
  };

  return (
    <>
      <Helmet>
        <title>Horta Automatizada - Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <Wrapper>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <TextField label="E-mail" type="email" {...register('email')} />
            <PasswordField />
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        </FormProvider>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  min-height: 320px;
`;

const Form = styled.form`
  display: inline-grid;
  justify-content: center;
`;
