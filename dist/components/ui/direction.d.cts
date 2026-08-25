import * as React from 'react';

type Direction = "ltr" | "rtl";
type DirectionProviderProps = React.HTMLAttributes<HTMLDivElement> & {
    dir?: Direction;
};
declare function DirectionProvider({ dir, children, ...props }: DirectionProviderProps): React.JSX.Element;
declare function useDirection(): Direction;

export { DirectionProvider, useDirection };
