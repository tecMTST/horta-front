import * as React from 'react';

import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
      {...register('password')}
    />
  );
}
