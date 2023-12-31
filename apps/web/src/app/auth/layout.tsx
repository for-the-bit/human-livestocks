import { Card } from "@tremor/react";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="flex w-[24rem] flex-col items-center justify-center gap-3">
        {children}
      </Card>
    </div>
  );
}
