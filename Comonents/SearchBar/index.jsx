import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (text) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <TextInput
      style={styles.container}
      placeholder="Search by ID..."
      value={query}
      onChangeText={handleChange}
    />
  );
};

export default SearchBar;