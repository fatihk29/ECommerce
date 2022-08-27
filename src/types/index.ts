export interface ITheme {
  theme: {backgroundColor: string; color: string};
  themeType: IThemeType;
  toggleTheme: () => void;
}

export type IThemeType = 'light' | 'dark';
