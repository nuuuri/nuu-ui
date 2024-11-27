import { ColorsType } from '@/styles/themes/colors';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
