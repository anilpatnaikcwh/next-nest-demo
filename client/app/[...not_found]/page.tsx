import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-xl my-10">404 | Page Not Found</div>
      <Image
        src="/next-nest.png"
        width={624}
        height={197}
        alt="next nest"
        loading="lazy"
        className="border border-solid border-gray-200"
      />
    </div>
  );
}
