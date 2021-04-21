import React from 'react';
import AppLoading from 'expo-app-loading';

import { Welcome } from './src/pages/Welcome';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App(){
  const [ fontsLoader ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoader)
    return <AppLoading />
    
  return(
       <Welcome />
  );
}
