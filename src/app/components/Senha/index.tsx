import * as React from 'react';

import { IconButton, InputAdornment, Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';

export interface PasswordFieldProps {}

export function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const { register } = useFormContext();
  return (
    <Input
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      color={'secondary'}
      endAdornment={
        <Pass position="end">
          <PasswordToggle
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            color={'secondary'}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </PasswordToggle>
        </Pass>
      }
      {...props}
      {...register('password')}
    />
  );
}

const PasswordToggle = styled(IconButton)`
  color: '#E6EAEB';
`;

const Pass = styled(InputAdornment)`
  color: '#E6EAEB';
`;
