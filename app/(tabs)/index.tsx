import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7CBA9F', dark: '#1B5E20' }}
      headerImage={
        <Image
          source={require('@/assets/images/benito-fashions-logo.jpg')} // Update with your app logo if available
          style={styles.benitoLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Benito Fashions!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Start Your Journey</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to customize this welcome message and make it your own.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Discover Sustainable Fashion</ThemedText>
        <ThemedText>
          Explore eco-friendly products, track your donations, and learn how your actions make a difference in reducing waste.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Join the Movement</ThemedText>
        <ThemedText>
          When you're ready, become a part of our sustainable community. Start donating and shopping with purpose. Let's make a difference, together!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  benitoLogo: {
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 75, // Makes the logo circular if it's square-shaped
  },
});
