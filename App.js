import React from 'react';
import { View } from 'react-native';
import SeleccionarImagen from './screens/index'; 

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
      <SeleccionarImagen />
    </View>
  );
};

export default App;
