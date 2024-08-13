import DencryptTitle from "@/components/dencrypt-title";
import { kodemono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="fixed top-0 bottom-0 left-0 right-0 -z-10 bg-[radial-gradient(hsl(40_5%_15%)_0%,hsl(40_50%_5%)70%)]"></div>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-10 pointer-events-none bg-[repeating-linear-gradient(transparent_0px_1px,hsl(40_0%_0%/.3)_3px_4px)] animate-vhs-lines"></div>
      <div className="text-center">
        <div className="max-w-2xl">
          <div
            className={cn(
              "text-4xl md:text-8xl font-bold p-4 drop-shadow-[0_0_5px_hsl(40,94%,50%)]",
              kodemono.className
            )}
          >
            <DencryptTitle
              initial="loading..."
              strings={["nwrad.io", "you've", "made", "it"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
