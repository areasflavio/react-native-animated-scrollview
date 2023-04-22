import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

type ProgressBarProps = {
  value: number;
  onMoveToTop: () => void;
};

export function ProgressBar({ value, onMoveToTop }: ProgressBarProps) {
  const widthContainer = useSharedValue(200);

  const endReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  }, []);

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, {
      mass: 0.25,
    });
  }, [value]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <AnimatedPressable
          onPress={onMoveToTop}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Feather name="arrow-up" size={24} color={'#c4c4c4'} />
        </AnimatedPressable>
      ) : (
        <Animated.View
          style={styles.progressContent}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={styles.value}>{value}%</Text>
          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]}></View>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 32,
    paddingHorizontal: 16,
    backgroundColor: '#292929',
  },
  value: {
    color: '#c4c4c4',
    marginRight: 10,
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#505050',
  },
  progress: {
    height: 3,
    backgroundColor: '#1e90ff',
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
