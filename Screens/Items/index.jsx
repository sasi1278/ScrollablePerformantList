import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Card from '../../Comonents/Card';

const ItemList = ({ data, onToggle, onRefresh,refreshing }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Card item={item} onToggle={onToggle} />
      )}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default ItemList;
