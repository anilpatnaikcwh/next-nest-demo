import { Suspense } from "react";
import { LoadingComp } from "@/components";

export function SuspenseComp({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingComp />}>{children}</Suspense>;
}
