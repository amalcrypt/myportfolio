import petrochatImage from './assets/petrochat.webp';
import movieSentimentImage from './assets/moviesentiment.webp';
import educhainImage from './assets/educhain.webp';
import { Bolt, Graph, Link, Loop, Plan, Sparkle, Target } from './components/icons';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'skills', label: 'Skills' },
];

export const contact = {
  email: 'amala2627@gmail.com',
  linkedin: 'https://linkedin.com/in/cryptadiar',
  github: 'https://github.com/amalcrypt',
};

export const stack = ['LangChain', 'LangGraph', 'OpenAI'];

export const capabilities = [
  'LangChain',
  'LangGraph',
  'OpenAI',
  'Multi-Agent Orchestration',
  'Tool Calling',
  'Retrieval-Augmented Generation',
  'Agent Memory',
  'Structured Outputs',
  'Stateful Workflows',
  'Human-in-the-Loop',
];

// Scripted run shown in the hero console. `node` is the graph node lit up during each step.
export const agentRun = {
  nodes: ['Input', 'Planner', 'Tools', 'Output'],
  steps: [
    { type: 'goal', node: 0, text: 'Compare top agent frameworks and draft a short report' },
    { type: 'plan', node: 1, text: 'Split into: search → extract features → compare → write' },
    { type: 'tool', node: 2, text: 'web_search(query="best agent frameworks")' },
    { type: 'observe', node: 1, text: '8 sources found · extracting key features…' },
    { type: 'tool', node: 2, text: 'write_report(format="markdown", sections=4)' },
    { type: 'done', node: 3, text: 'Report ready · 6 steps · 2 tool calls · 3.8s' },
  ],
};

export const projects = [
  {
    title: 'PetroChat',
    subtitle: 'An AI-powered conversational assistant designed for the petroleum industry.',
    features: ['AI Assistant', 'Domain Knowledge', 'Data Visualization'],
    accent: 'from-orange-500 to-amber-700',
    link: 'https://petrochat.streamlit.app/',
    image: petrochatImage,
  },
  {
    title: 'Movie Sentiment Analysis',
    subtitle: 'An AI-powered tool to analyze movie reviews and sentiments.',
    features: ['NLP', 'Sentiment Analysis', 'Machine Learning'],
    accent: 'from-blue-600 to-cyan-500',
    link: 'https://moviesentimentanalaysis.vercel.app/',
    image: movieSentimentImage,
  },
  {
    title: 'Educhain',
    subtitle: 'A decentralized certificate validation system using blockchain.',
    features: ['Smart Contracts', 'Immutable Records', 'Instant Verification'],
    accent: 'from-indigo-600 to-violet-700',
    link: 'https://liveeduchain.vercel.app/',
    image: educhainImage,
  },
  {
    title: 'Project Gamma',
    subtitle: 'My next agentic AI build, currently in development.',
    accent: 'from-violet-600 via-fuchsia-600 to-indigo-700',
    isComingSoon: true,
  },
];

export const workflowSteps = [
  {
    title: 'Understand',
    description: 'Turn a goal, its context, and its constraints into a clear objective the agent can act on.',
    code: 'parse(goal)',
    icon: Target,
  },
  {
    title: 'Plan',
    description: 'Break the objective into steps and pick the right tools, data, and sub-agents for each one.',
    code: 'plan(steps)',
    icon: Plan,
  },
  {
    title: 'Act',
    description: 'Call tools, APIs, and other agents to carry out each step, keeping state along the way.',
    code: 'call(tool)',
    icon: Bolt,
  },
  {
    title: 'Reflect',
    description: 'Check the results, recover from errors, and loop back until the goal is actually met.',
    code: 'evaluate(result)',
    icon: Loop,
  },
];

export const skills = [
  {
    name: 'LangChain',
    role: 'Framework',
    install: 'pip install langchain',
    icon: Link,
    items: ['Chains & Prompt Templates', 'Tool Integration', 'Retrieval-Augmented Generation', 'Agent Memory'],
  },
  {
    name: 'LangGraph',
    role: 'Orchestration',
    install: 'pip install langgraph',
    icon: Graph,
    items: ['Stateful Agent Workflows', 'Multi-Agent Orchestration', 'Checkpointing', 'Human-in-the-Loop'],
  },
  {
    name: 'OpenAI',
    role: 'Models',
    install: 'pip install openai',
    icon: Sparkle,
    items: ['GPT Models', 'Function Calling', 'Structured Outputs', 'Embeddings'],
  },
];
