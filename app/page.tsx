import QrCodegenerator from "@/components/QrCodegenerator"

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100vh] h-full flex justify-center items-center">
      <QrCodegenerator />
      <Image
        src="/glass.png"
        width={1600}
        height={1200}
        alt="Background glass"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />
    </div>
  );
}
