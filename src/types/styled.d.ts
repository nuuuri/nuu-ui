import { Colors } from '@/styles/themes/colors';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in Colors]: string };
  }
}
