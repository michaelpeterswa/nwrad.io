import DencryptTitle from "@/components/dencrypt-title";
import { kodemono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaSteam } from "react-icons/fa6";
import { SiDiscord, SiOpensea } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <div className="fixed top-0 bottom-0 left-0 right-0 -z-10 bg-[radial-gradient(hsl(var(--foreground)/.2)_0%,hsl(var(--background))_70%)]"></div>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-20 pointer-events-none bg-[repeating-linear-gradient(transparent_0px_1px,hsl(var(--background)/.4)_3px_4px)] animate-vhs-lines"></div>
      <div className="text-center">
        <div className="w-[300px] md:w-[600px]">
          <div
            className={cn(
              "text-4xl md:text-8xl font-bold p-4 drop-shadow-[0_0_5px_hsl(var(--primary))] text-[hsl(var(--primary)/.9)]",
              kodemono.className
            )}
          >
            <DencryptTitle
              initial="loading..."
              strings={["nwrad.io", "you've", "found", "me"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row p-8 gap-8 drop-shadow-[0_0_5px_hsl(var(--primary))] text-[hsl(var(--primary)/.9)]">
        <Link href="https://opensea.io/nwradio-cold">
          <SiOpensea className="w-10 h-10" />
        </Link>
        <Link href="https://discordapp.com/users/348342430090788871">
          <SiDiscord className="w-10 h-10" />
        </Link>
        <Link href="https://steamcommunity.com/id/nwradio">
          <FaSteam className="w-10 h-10" />
        </Link>
      </div>
    </main>
  );
}
