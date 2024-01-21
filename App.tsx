import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <CalculadoraScreen />
      <StatusBar backgroundColor='black' style="auto" />
    </SafeAreaView>
  );
} 