"use client";

import { PropsWithChildren } from "react";
import { MediaContextProvider } from "@/lib/media";

export function MediaProvider({ children }: PropsWithChildren) {
  return <MediaContextProvider>{children}</MediaContextProvider>;
} 