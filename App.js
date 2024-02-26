import React from 'react';
import { View } from 'react-native';
import ImagePickerExample from './screens/index'; 

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImagePickerExample />
    </View>
  );
};

export default App;
