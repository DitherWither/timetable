import * as React from "react";
import {
  CatchNotFound,
  Link,
  Outlet,
  createRootRoute,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <CatchNotFound fallback={() => <h1>Not Found</h1>}>
      <Outlet />
    </CatchNotFound>
  );
}
