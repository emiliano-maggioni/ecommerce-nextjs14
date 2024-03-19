'use client';

import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from '@mui/material/styles';

type Props = {
    onChange: (orderType:string) => void
};

const SearchFieldStyled = styled(TextField)({
    width: '100%',
    marginBottom: '1.3rem',
    '& .MuiOutlinedInput-root': {
        fontFamily: '__Maven_Pro_3316a2',
    },
    '& .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(204, 204, 204, 0.8)',
        borderWidth: ' 2px ',
        borderRadius: '8px',
    },
    '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(127, 163, 211, 0.8)',
        borderWidth: ' 2px ',
    },
    "@media (min-width: 576px)": {
        flex: '1',
        marginRight: '0.6rem',
        maxWidth: '23rem',
    }
});

const SearchField = ({onChange}:Props) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [showClearIcon, setShowClearIcon] = useState<string>("none");

  const handleClick = () => {
    setSearchFilter('');
    setShowClearIcon("none");
  };

  useEffect(() =>{
      let dateInputChange:number = new Date().getTime();
      const timer = setTimeout(() => {
        let actualDate:number = new Date().getTime();
        let difference:number = actualDate - dateInputChange;
        if(difference > 600)
          onChange(searchFilter);
      }, 600);

      return() => {
        clearTimeout(timer);
      };
  }, [searchFilter, onChange]);

    return(
        <SearchFieldStyled
            size="small"
            variant="outlined"
            placeholder='Buscar'
            onFocus={e => e.target.select()}
            value={searchFilter}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchFilter(event.target.value);
              setShowClearIcon(event.target.value === "" ? "none" : "flex");
            }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ display: showClearIcon, cursor: 'pointer' }}
                      onClick={handleClick}
                    >
                      <ClearIcon />
                    </InputAdornment>
                  )
            }}
        />
  );
}

export default SearchField;

