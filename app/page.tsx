import Link from "next/link";
import { Stats } from "./components/stats";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24 overflow-hidden">
        <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto sm:min-h-screen sm:mt-0 sm:px-0">
          <div>
            <h1 className="py-4 text-5xl max-w-3xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
              Share Documents Securely
            </h1>
            <p className="max-w-3xl mb-10 mt-6 leading-5 text-zinc-600 sm:text-center">
              Your document is encrypted in your browser before being stored for a limited period of time and read
              operations. Unencrypted data never leaves your browser.
            </p>
          </div>
          <h2 className="mt-10 py-4 text-3xl font-bold text-center text-zinc-300 ">Used and trusted by a growing community</h2>
          <Stats />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
