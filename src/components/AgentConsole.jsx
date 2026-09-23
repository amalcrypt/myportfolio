import { useEffect, useState } from 'react';
import { agentRun } from '../data';
import { prefersReducedMotion, useInView } from '../hooks';

// The console is a terminal, so it stays dark in both themes and uses its own fixed palette.
const labelColor = {
  goal: 'text-[#a3a19b]',
  plan: 'text-[#a3a19b]',
  tool: 'text-[#8199ff]',
  observe: 'text-[#a3a19b]',
  done: 'text-[#6ee7a8]',
};

const { nodes, steps } = agentRun;
const NODE_X = [44, 128, 212, 296];

// Colors a tool call like code: function name bright, arguments dim.
const StepText = ({ type, text }) => {
  if (type !== 'tool') return text;
  const paren = text.indexOf('(');
  if (paren === -1) return <span className="text-[#aebcff]">{text}</span>;
  return (
    <>
      <span className="text-[#aebcff]">{text.slice(0, paren)}</span>
      <span className="text-[#8f8d86]">{text.slice(paren)}</span>
    </>
  );
};

function AgentGraph({ activeNode, visited, done }) {
  return (
    <svg viewBox="0 0 340 96" className="w-full" aria-hidden="true">
      {NODE_X.slice(0, -1).map((x, i) => (
        <line
          key={x}
          x1={x + 30}
          y1="30"
          x2={NODE_X[i + 1] - 30}
          y2="30"
          strokeWidth="1.2"
          strokeDasharray="3 5"
          className={`animate-dash transition-colors duration-500 ${visited.has(i + 1) ? 'stroke-[#8199ff]' : 'stroke-[#3a3936]'}`}
        />
      ))}
      {/* Tools → Planner loop-back edge */}
      <path
        d={`M${NODE_X[2]} 44 C${NODE_X[2]} 80, ${NODE_X[1]} 80, ${NODE_X[1]} 44`}
        fill="none"
        strokeWidth="1.2"
        strokeDasharray="3 5"
        className={`animate-dash transition-colors duration-500 ${visited.has(2) ? 'stroke-[#8199ff]' : 'stroke-[#3a3936]'}`}
      />
      <text x={(NODE_X[1] + NODE_X[2]) / 2} y="91" textAnchor="middle" className="fill-[#85837d] font-mono text-[9px]">
        loop
      </text>
      {nodes.map((label, i) => {
        const isActive = i === activeNode && !done;
        const isDone = done && i === nodes.length - 1;
        return (
          <g key={label}>
            <rect
              x={NODE_X[i] - 30}
              y="17"
              width="60"
              height="26"
              rx="6"
              strokeWidth="1"
              className={`transition-colors duration-500 ${
                isDone
                  ? 'fill-[#10261b] stroke-[#6ee7a8]'
                  : isActive
                    ? 'fill-[#1b2140] stroke-[#8199ff]'
                    : 'fill-[#171716] stroke-[#3a3936]'
              }`}
            />
            <text
              x={NODE_X[i]}
              y="34"
              textAnchor="middle"
              className={`font-mono text-[10px] transition-colors duration-500 ${
                isDone ? 'fill-[#6ee7a8]' : isActive ? 'fill-white' : visited.has(i) ? 'fill-[#a3a19b]' : 'fill-[#85837d]'
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
      }, 3500);
    } else if (chars < steps[step].text.length) {
      timeout = setTimeout(() => setChars((value) => value + 1), 20);
    } else {
      timeout = setTimeout(() => {
        setStep((value) => value + 1);
        setChars(0);
      }, 650);
    }
    return () => clearTimeout(timeout);
  }, [reduced, inView, step, chars]);

  const done = step >= steps.length;
  const shownSteps = steps.slice(0, Math.min(step + 1, steps.length));
  const visited = new Set(shownSteps.map((s) => s.node));
  const activeNode = done ? nodes.length - 1 : steps[step].node;
  const progress = (Math.min(step, steps.length) / steps.length) * 100;

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Animated demo of an AI agent planning a task, calling tools, and completing it"
      className="overflow-hidden rounded-xl border border-ink/10 bg-[#121211] font-mono shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)] dark:border-line"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2e2d2b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2e2d2b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2e2d2b]" />
        </div>
        <span className="truncate text-[#8f8d86]">research_agent.py — run {String(run).padStart(3, '0')}</span>
        <span className={`flex shrink-0 items-center gap-1.5 ${done ? 'text-[#6ee7a8]' : 'text-[#a3a19b]'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-[#6ee7a8]' : 'animate-pulse bg-[#8199ff]'}`} />
          {done ? 'done' : 'running'}
        </span>
      </div>

      <div className="border-b border-white/[0.07] px-4 pt-3">
        <AgentGraph activeNode={activeNode} visited={visited} done={done} />
      </div>

      <ol className="min-h-[300px] space-y-2.5 px-4 py-5 text-[12.5px] leading-relaxed sm:min-h-[232px]">
        {shownSteps.map((s, i) => {
          const isTyping = i === step && !done;
          const text = isTyping ? s.text.slice(0, chars) : s.text;
          return (
            <li key={i} className="flex gap-3">
              <span className={`w-[4.5rem] shrink-0 ${labelColor[s.type]}`}>{s.type}</span>
              <span className={`min-w-0 break-words ${s.type === 'done' ? 'text-[#6ee7a8]' : 'text-[#dcdad4]'}`}>
                <StepText type={s.type} text={text} />
                {isTyping && <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 animate-blink bg-[#dcdad4]" />}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="flex items-center gap-4 border-t border-white/[0.07] px-4 py-3 text-[11px] text-[#8a8882]">
        <span className="shrink-0">
          {Math.min(step, steps.length)}/{steps.length} steps
        </span>
        <span className="h-px flex-1 bg-white/[0.08]">
          <span className="block h-px bg-[#8199ff] transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </span>
        <span className="shrink-0">langgraph · openai</span>
      </div>
    </div>
  );
}
