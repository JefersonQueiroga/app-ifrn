import { Image, Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


function LogoTitle() {
    return (
      <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
  }

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href="/about">
        <Text style={{ color: 'blue' }}>Go to About Page</Text>
      </Link>
      <Link href="/teste">
        <Text style={{ color: 'blue' }}>Teste de Tab</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 50,
      height: 50,
    },
  });
  