import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return <div className="mx-auto w-full max-w-screen-2xl">{children}</div>;
}
