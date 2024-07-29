import "styled-components";
import { ThemeType } from "../global/styles/theme";

declare module "styled-components" {
    type ThemeType = typeof theme;
    export interface DefaultTheme extends ThemeType {}
}