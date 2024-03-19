'use client';

import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

type Props = {
  onChange: (orderType:string) => void
};

const OrderFieldStyled = styled(Select)({
    width: '100%',
    marginBottom: '1.5rem',
    fontFamily: '__Maven_Pro_3316a2',
    '& *': { fontFamily: '__Maven_Pro_3316a2' },
    '&  fieldset.MuiOutlinedInput-notchedOutline, &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': { 
        borderColor: ' rgba(204, 204, 204, 0.8)',
        borderWidth: ' 2px ',
        borderRadius: '8px',
     },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(127, 163, 211, 0.8)',
        borderWidth: ' 2px ',
     },
     "@media (min-width: 576px)": {
        width: '11rem',
     }
});

const options = [
  'Precio mayor',
  'Precio menor',
];

const OrderField = ({onChange}:Props) => {
  const [orderType, setOrderType] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof orderType>) => {
    const { target: { value } } = event;
    setOrderType(typeof value === 'string' ? value.split(',') : value);
  };

  useEffect(()=> {
    onChange(orderType?.[0]);
  },[onChange, orderType]);

    return(
      <OrderFieldStyled
            displayEmpty
            value={orderType}
            onChange={(e:any) => handleChange(e)}
            input={<OutlinedInput />}
            size='small'
            renderValue={(selected:any) => {
                if (selected.length === 0 || selected[0] == '' ) { return <>Ordenar por</>; }
                return selected[0];
            }}
            data-testid="orderField"
       >
            <MenuItem selected value="">Ordenar por</MenuItem>
            {options.map((option) => <MenuItem key={option} value={option} >{option}</MenuItem> )}
       </OrderFieldStyled>
    );
}

export default OrderField;

