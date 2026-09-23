import { useEffect, useState } from 'react';
import { agentRun } from '../data';
import { prefersReducedMotion, useInView } from '../hooks';

const stepStyles = {
  goal: { label: 'GOAL', chip: 'bg-violet-500/15 text-violet-300 ring-violet-400/30' },
  plan: { label: 'PLAN', chip: 'bg-sky-500/15 text-sky-300 ring-sky-400/30' },
  tool: { label: 'TOOL', chip: 'bg-amber-500/15 text-amber-300 ring-amber-400/30' },
  observe: { label: 'OBSERVE', chip: 'bg-slate-500/20 text-slate-300 ring-slate-400/30' },
  done: { label: 'DONE', chip: 'bg-emerald-500/15 text-emerald-300 ring-emerald-400/30' },
};

const { nodes, steps } = agentRun;
const NODE_X = [44, 128, 212, 296];

// Colors a tool call like code: function name bright, arguments dim.
const StepText = ({ type, text }) => {
  if (type !== 'tool') return text;
  const paren = text.indexOf('(');
  if (paren === -1) return <span className="text-amber-200">{text}</span>;
  return (
    <>
      <span className="text-amber-200">{text.slice(0, paren)}</span>
      <span className="text-slate-400">{text.slice(paren)}</span>
    </>
  );
};

function AgentGraph({ activeNode, visited, done }) {
  return (
    <svg viewBox="0 0 340 96" className="w-full" aria-hidden="true">
      {/* forward edges */}
      {NODE_X.slice(0, -1).map((x, i) => (
        <line
          key={x}
          x1={x + 30}
          y1="30"
          x2={NODE_X[i + 1] - 30}
          y2="30"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className={`animate-dash transition-colors duration-500 ${visited.has(i + 1) ? 'stroke-violet-400' : 'stroke-slate-700'}`}
        />
      ))}
      {/* Tools → Planner loop-back edge */}
      <path
        d={`M${NODE_X[2]} 44 C${NODE_X[2]} 82, ${NODE_X[1]} 82, ${NODE_X[1]} 44`}
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className={`animate-dash transition-colors duration-500 ${visited.has(2) ? 'stroke-fuchsia-400/80' : 'stroke-slate-700'}`}
      />
      <text x={(NODE_X[1] + NODE_X[2]) / 2} y="92" textAnchor="middle" className="fill-slate-500 font-mono text-[9px]">
        loop
      </text>
      {nodes.map((label, i) => {
        const isActive = i === activeNode;
        const isDone = done && i === nodes.length - 1;
        return (
          <g key={label}>
            {isActive && !done && (
              <rect
                x={NODE_X[i] - 34}
                y="12"
                width="68"
                height="36"
                rx="12"
                className="animate-pulse fill-violet-500/20"
              />
            )}
            <rect
              x={NODE_X[i] - 30}
              y="16"
              width="60"
              height="28"
              rx="9"
              strokeWidth="1.2"
              className={`transition-colors duration-500 ${
                isDone
                  ? 'fill-emerald-500 stroke-emerald-300'
                  : isActive
                    ? 'fill-violet-500 stroke-violet-300'
                    : visited.has(i)
                      ? 'fill-slate-900 stroke-violet-400/60'
                      : 'fill-slate-900 stroke-slate-700'
              }`}
            />
            <text
              x={NODE_X[i]}
              y="34"
              textAnchor="middle"
              className={`font-mono text-[10px] font-medium transition-colors duration-500 ${
                isActive || isDone ? 'fill-white' : 'fill-slate-400'
              }`}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function AgentConsole() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [reduced] = useState(prefersReducedMotion);
  const [step, setStep] = useState(() => (reduced ? steps.length : 0));
  const [chars, setChars] = useState(0);
  const [run, setRun] = useState(1);

  // Type each step out, pause, move on; loop after the final step. Paused while off screen.
  useEffect(() => {
    if (reduced || !inView) return;
    let timeout;
    if (step >= steps.length) {
      timeout = setTimeout(() => {
        setStep(0);
        setChars(0);
        setRun((value) => value + 1);
      }, 3200);
    } else if (chars < steps[step].text.length) {
      timeout = setTimeout(() => setChars((value) => value + 1), 18);
    } else {
      timeout = setTimeout(() => {
        setStep((value) => value + 1);
        setChars(0);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [reduced, inView, step, chars]);

  const done = step >= steps.length;
  const shownSteps = steps.slice(0, Math.min(step + 1, steps.length));
  const visited = new Set(shownSteps.map((s) => s.node));
  const activeNode = done ? nodes.length - 1 : steps[step].node;
  const toolCalls = steps.slice(0, step).filter((s) => s.type === 'tool').length;
  const progress = (Math.min(step, steps.length) / steps.length) * 100;

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 animate-pulse-slow rounded-[3rem] bg-gradient-to-tr from-violet-500/30 via-fuchsia-400/20 to-indigo-400/30 blur-2xl"
      />

      <div
        role="img"
        aria-label="Animated demo of an AI agent planning a task, calling tools, and completing it"
        className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-violet-950/30"
      >
        {/* title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="truncate font-mono text-xs text-slate-500">research-agent · run #{String(run).padStart(3, '0')}</span>
          {done ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
              ✓ complete
            </span>
          ) : (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] font-medium text-violet-300 ring-1 ring-inset ring-violet-400/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              running
            </span>
          )}
        </div>

        {/* agent graph */}
        <div className="border-b border-white/10 bg-white/[0.02] px-4 pt-3">
          <AgentGraph activeNode={activeNode} visited={visited} done={done} />
        </div>

        {/* trace */}
        <ol className="min-h-[304px] space-y-3 px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:min-h-[244px]">
          {shownSteps.map((s, i) => {
            const style = stepStyles[s.type];
            const isTyping = i === step && !done;
            const text = isTyping ? s.text.slice(0, chars) : s.text;
            return (
              <li key={i} className="flex animate-fade-up items-start gap-3">
                <span className={`mt-px w-[68px] shrink-0 rounded-md py-0.5 text-center text-[10px] font-semibold tracking-wider ring-1 ring-inset ${style.chip}`}>
                  {style.label}
                </span>
                <span className={`min-w-0 break-words ${s.type === 'done' ? 'text-emerald-200' : 'text-slate-300'}`}>
                  <StepText type={s.type} text={text} />
                  {isTyping && <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-violet-400" />}
                </span>
              </li>
            );
          })}
        </ol>

        {/* footer stats */}
        <div className="border-t border-white/10 px-5 py-3.5">
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-fuchsia-400 transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-500">
            <span>steps {Math.min(step, steps.length)}/{steps.length}</span>
            <span>tool calls {toolCalls}</span>
            <span>langgraph · openai</span>
          </div>
        </div>
      </div>
    </div>
  );
}
