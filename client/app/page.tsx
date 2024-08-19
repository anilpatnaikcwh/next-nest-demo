import Image from "next/image";
import { SuspenseComp } from "@/components";

export default function HomePage() {
  return (
    <SuspenseComp>
      <div className="flex flex-col items-center gap-2">
        <div className="text-3xl my-10">Welcome to Next Nest demo 👋</div>
        <Image
          src="/next-nest.png"
          width={624}
          height={197}
          alt="next nest"
          loading="lazy"
          className="border border-solid border-gray-200"
        />
      </div>
    </SuspenseComp>
  );
}
