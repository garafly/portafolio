// app/loading.tsx

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06101f] px-4 text-[#86C7FF]">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/50">
              Preparing experience
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[#86C7FF]">
              Have a chicken run while you wait!
            </h1>
          </div>

          <div className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70">
            loading
          </div>
        </div>

        <div className="relative h-36 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-[#071523] to-[#1f548e]">
          <div className="absolute right-8 top-8 h-7 w-7 rounded-full bg-white/70 shadow-[0_0_28px_rgba(255,255,255,0.55)]" />

          <div className="runner-floor absolute bottom-9 left-0 h-px w-[200%] bg-[repeating-linear-gradient(90deg,rgba(134,199,255,0.65)_0_24px,transparent_24px_44px)]" />

          <div className="runner-obstacle absolute bottom-9 right-[-40px] h-8 w-7 rounded-t-md bg-[#86C7FF]/35" />

          <div className="runner-chick absolute bottom-9 left-12 h-12 w-12 rounded-full bg-[#F6C83E] shadow-[inset_-8px_-10px_0_rgba(0,0,0,0.08),0_10px_22px_rgba(0,0,0,0.18)]">
            <span className="absolute -top-4 left-3 h-5 w-5 rounded-full bg-[#EF3B28]" />
            <span className="absolute -top-5 left-6 h-6 w-5 rounded-full bg-[#EF3B28]" />
            <span className="absolute right-3 top-4 h-2.5 w-2.5 rounded-full bg-black" />
            <span className="absolute -right-4 top-5 h-0 w-0 border-y-[7px] border-l-[18px] border-y-transparent border-l-[#F59E2E]" />
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/25 px-3 py-1 text-xs text-white/70">
            Loading the experience...
          </div>
        </div>

        <p className="mt-4 text-sm text-white/55">
          Warming up the chick, loading the model, preparing the scene.
        </p>
      </div>

      <style>{`
        @keyframes runnerFloor {
          0% { transform: translateX(0); }
          100% { transform: translateX(-88px); }
        }

        @keyframes runnerObstacle {
          0% { transform: translateX(0); }
          100% { transform: translateX(-620px); }
        }

        @keyframes chickRun {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        .runner-floor {
          animation: runnerFloor 1.3s linear infinite;
        }

        .runner-obstacle {
          animation: runnerObstacle 2.2s linear infinite;
        }

        .runner-chick {
          animation: chickRun 420ms ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}