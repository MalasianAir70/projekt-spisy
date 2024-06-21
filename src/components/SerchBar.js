import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" justifyContent="center" m={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="Znajdź przepis"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginLeft: 2 }}>
        Szukaj
      </Button>
    </Box>
  );
};

export default SearchBar;
