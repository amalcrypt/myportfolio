import petrochatImage from './assets/petrochat.webp';
import movieSentimentImage from './assets/moviesentiment.webp';
import educhainImage from './assets/educhain.webp';

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
];

export const contact = {
  email: 'amala2627@gmail.com',
  linkedin: 'https://linkedin.com/in/cryptadiar',
  github: 'https://github.com/amalcrypt',
};

export const stack = ['LangChain', 'LangGraph', 'OpenAI'];

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
    link: 'https://petrochat.streamlit.app/',
    image: petrochatImage,
  },
  {
    title: 'Movie Sentiment Analysis',
    subtitle: 'An AI-powered tool to analyze movie reviews and sentiments.',
    features: ['NLP', 'Sentiment Analysis', 'Machine Learning'],
    link: 'https://moviesentimentanalaysis.vercel.app/',
    image: movieSentimentImage,
  },
  {
    title: 'Educhain',
    subtitle: 'A decentralized certificate validation system using blockchain.',
    features: ['Smart Contracts', 'Immutable Records', 'Instant Verification'],
    link: 'https://liveeduchain.vercel.app/',
    image: educhainImage,
  },
];

export const processSteps = [
  {
    title: 'Understand',
    description: 'Turn a goal, its context, and its constraints into a clear objective the agent can act on.',
    code: 'parse(goal)',
  },
  {
    title: 'Plan',
    description: 'Break the objective into steps and pick the right tools, data, and sub-agents for each one.',
    code: 'plan(steps)',
  },
  {
    title: 'Act',
    description: 'Call tools, APIs, and other agents to carry out each step, keeping state along the way.',
    code: 'call(tool)',
  },
  {
    title: 'Reflect',
    description: 'Check the results, recover from errors, and loop back until the goal is actually met.',
    code: 'evaluate(result)',
  },
];

export const skills = [
  {
    name: 'LangChain',
    role: 'Framework',
    install: 'pip install langchain',
    items: ['Chains & Prompt Templates', 'Tool Integration', 'Retrieval-Augmented Generation', 'Agent Memory'],
  },
  {
    name: 'LangGraph',
    role: 'Orchestration',
    install: 'pip install langgraph',
    items: ['Stateful Agent Workflows', 'Multi-Agent Orchestration', 'Checkpointing', 'Human-in-the-Loop'],
  },
  {
    name: 'OpenAI',
    role: 'Models',
    install: 'pip install openai',
    items: ['GPT Models', 'Function Calling', 'Structured Outputs', 'Embeddings'],
  },
];

export const facts = [
  { label: 'Based in', value: 'India' },
  { label: 'Focus', value: 'Autonomous agents, multi-agent systems, RAG' },
  { label: 'Stack', value: stack.join(', ') },
  { label: 'Currently', value: 'Open to roles & freelance projects' },
];
