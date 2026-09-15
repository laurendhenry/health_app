//from vscode agents pane
import { StyleSheet } from "react-native";

export const colors = {
  background: '#F6F8F7',
  surface: '#FFFFFF',
  surfaceMuted: '#EAF4F0',
  primary: '#2F7D6B',
  primaryDark: '#205B4D',
  primarySoft: '#DDF0EA',
  accent: '#F3B562',
  text: '#17332C',
  textMuted: '#6B7D77',
  border: '#D9E6E1',
  white: '#FFFFFF',
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const typography = {
  title: 32,
  heading: 22,
  body: 16,
  caption: 13,
};

export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '800',
    letterSpacing: -0.6,
  },
  heading: {
    color: colors.text,
    fontSize: typography.heading,
    fontWeight: '700',
  },
  body: {
    color: colors.textMuted,
    fontSize: typography.body,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    padding: spacing.lg,
    shadowColor: colors.primaryDark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
});

export const paperTheme = {
  colors: {
    primary: colors.primary,
    onPrimary: colors.white,
    background: colors.background,
    surface: colors.surface,
    onSurface: colors.text,
    outline: colors.border,
  },
};