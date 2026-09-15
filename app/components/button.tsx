import { StyleSheet, View, Pressable, Text } from 'react-native';
import { colors, spacing } from '../styles';


type Props = {
  label: string;
  selected?: boolean;
  onClick: () => void;
};

export default function Button({ label, selected = false, onClick }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={({ pressed }) => [
          styles.button,
          selected && styles.selectedButton,
          pressed && styles.pressedButton,
        ]}
        onPress={onClick}>
        <Text style={[styles.buttonLabel, selected && styles.selectedLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    flexGrow: 1,
    minWidth: 94,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
  buttonLabel: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  selectedLabel: {
    color: colors.white,
  },
  pressedButton: {
    opacity: 0.8,
  },
});
//https://docs.expo.dev/tutorial/build-a-screen/