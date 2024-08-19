"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="font-bold">Error Message</div>
        <div>{error?.message}</div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold">Error Stack</div>
        <div>{error?.stack}</div>
      </div>
    </div>
  );
}
