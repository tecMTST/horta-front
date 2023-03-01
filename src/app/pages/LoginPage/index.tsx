import React from 'react';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Container, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PasswordField } from 'app/components/Senha';
import { LoginInput, loginSchema } from 'types/Login';
import { useLogin } from 'services/Authentication';
import { Navigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Botao } from 'app/components/BotaoNT';

export function LoginPage() {
  let { invalidateQueries } = useQueryClient();
  const login = useLogin();

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, isSubmitting },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginInput> = async (values, e) => {
    e?.preventDefault();

    login.mutate(values, {
      onError: () => {
        invalidateQueries({ queryKey: ['authenticated-user'] });
      },
    });
  };

  if (isSubmitSuccessful && login.isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <InputLabel>Email</InputLabel>
          <TextField
            type="email"
            color={'secondary'}
            variant="standard"
            {...register('email')}
          />
          <InputLabel>Senha</InputLabel>
          <PasswordField />
          <ButtonWrapper>
            <Botao tipo="azul" disabled>
              Registrar
            </Botao>
            <Botao
              type="submit"
              tipo="vermelho"
              disabled={isSubmitting || login.isLoading}
            >
              Entrar
            </Botao>
          </ButtonWrapper>
        </Form>
      </FormProvider>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  height: 100vh;
  flex-direction: column;
`;

const Form = styled('form')`
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const ButtonWrapper = styled('div')`
  align-self: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  width: 30%;
  margin-top: 15px;
`;
