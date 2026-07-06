import { PIPELINE } from "../data/content.js";

export default function PipelineBar() {
  return (
    <div className="w-full max-w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex items-center min-w-[560px] sm:min-w-[720px] py-2">
        {PIPELINE.map((stage, i) => (
          <div key={stage} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center flex-none">
              <span className="block w-3.5 h-3.5 rounded-full bg-gold pipeline-dot"
                    style={{ animationDelay: `${i * 0.3}s` }} />
              <span className="mt-2.5 font-mono text-[10px] sm:text-[11px] tracking-wide text-slateLt whitespace-nowrap">
                {stage}
              </span>
            </div>
            {i < PIPELINE.length - 1 && (
              <span className="flex-1 h-0.5 bg-navyLine mx-1 mb-[22px]" />
            )}
          </div>
        ))}
      </div>
      <style>{`
        .pipeline-dot { box-shadow: 0 0 0 4px rgba(201,162,39,0.14); animation: pulseGate 2.4s infinite; }
        @keyframes pulseGate {
          0%,100% { box-shadow: 0 0 0 4px rgba(201,162,39,0.12); }
          50%     { box-shadow: 0 0 0 8px rgba(201,162,39,0.22); }
        }
      `}</style>
    </div>
  );
}
