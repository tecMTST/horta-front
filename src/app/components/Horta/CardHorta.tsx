import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, SvgIcon, Card, CardContent } from '@mui/material';
import { ReactComponent as Icon } from '../../../static/media/4-folhas.svg';
import { PlantaCount } from '../Plantas';
import { Horta } from 'types/Horta';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

interface HortaProps {
  horta: Horta;
}

export const CardHorta = (props: HortaProps) => {
  const { lots, name, id } = props.horta;
  const navigate = useNavigate();

  const onClick = e => {
    e?.preventDefault();
    navigate(`/${ROUTES.HORTA}/${id}`);
  };

  return (
    <CardHortaWrapper key={id} onClick={onClick}>
      <CardContent>
        <HortaName>
          <SvgIcon component={Icon} inheritViewBox={true} />
          {name}
        </HortaName>
        <HortaMetrics>
          {lots.length} canteiros. <PlantaCount />
        </HortaMetrics>
      </CardContent>
    </CardHortaWrapper>
  );
};

const CardHortaWrapper = styled(Card)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
  };
});

const HortaMetrics = styled(Box)`
  text-align: center;
  font-size: 16px;
  line-height: auto;
`;

const HortaName = styled(Box)(({ theme }) => {
  return {
    fontSize: 28,
    lineHeight: 'auto',
    '& svg': {
      marginRight: 10,
    },
  };
});
