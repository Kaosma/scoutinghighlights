declare module 'react/jsx-runtime' {
  import { ReactElement } from 'react';

  export const jsx: (type: any, props: any, key?: any) => ReactElement;
  export const jsxs: (type: any, props: any, key?: any) => ReactElement;
  export const Fragment: any;
}
