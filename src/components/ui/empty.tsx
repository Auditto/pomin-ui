import * as React from "react";
import { EmptyState } from "./empty-state";

type EmptyProps = React.ComponentProps<typeof EmptyState>;

function Empty(props: EmptyProps) {
  return <EmptyState {...props} />;
}

export { Empty };
