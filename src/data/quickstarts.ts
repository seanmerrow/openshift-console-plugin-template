export interface Quickstart {
  id: string;
  title: string;
  vendor: string;
  description: string;
  featured: boolean;
  badges?: string[];
  githubPath: string;
}

export const quickstarts: Quickstart[] = [
  {
    id: 'rag',
    title: 'RAG (Retrieval Augmented Generation)',
    vendor: 'Red Hat',
    description:
      'Build a Retrieval Augmented Generation system to enhance LLM responses with relevant context from your knowledge base.',
    featured: false,
    badges: ['LLM', 'Vector DB'],
    githubPath: 'RAG',
  },
  {
    id: 'ai-virtual-agent',
    title: 'AI Virtual Agent',
    vendor: 'Red Hat',
    description:
      'Create an intelligent virtual agent that can interact with users and provide automated assistance.',
    featured: false,
    badges: ['Agent', 'Automation'],
    githubPath: 'ai-virtual-agent',
  },
  {
    id: 'aml-rag-nvidia',
    title: 'AML RAG with NVIDIA',
    vendor: 'Red Hat & NVIDIA',
    description: 'Advanced machine learning RAG implementation leveraging NVIDIA GPU acceleration.',
    featured: false,
    badges: ['NVIDIA', 'GPU', 'RAG'],
    githubPath: 'aml-rag-nvidia',
  },
  {
    id: 'ansible-log-analysis',
    title: 'Ansible Log Analysis',
    vendor: 'Red Hat',
    description: 'Analyze and troubleshoot Ansible automation logs using AI-powered insights.',
    featured: false,
    badges: ['Ansible', 'Observability'],
    githubPath: 'ansible-log-analysis',
  },
  {
    id: 'data-governance-co-pilot',
    title: 'Data Governance Co-Pilot',
    vendor: 'Red Hat',
    description:
      'AI assistant for managing and enforcing data governance policies across your organization.',
    featured: false,
    badges: ['Governance', 'Compliance'],
    githubPath: 'data-governance-co-pilot',
  },
  {
    id: 'f5-ai-guardrails',
    title: 'F5 AI Guardrails',
    vendor: 'F5',
    description: 'Implement AI safety guardrails and content filtering using F5 technologies.',
    featured: false,
    badges: ['F5', 'Security', 'Guardrails'],
    githubPath: 'f5-ai-guardrails',
  },
  {
    id: 'f5-api-security',
    title: 'F5 API Security',
    vendor: 'F5',
    description:
      'Protect your APIs with AI-enhanced security monitoring and threat detection from F5.',
    featured: false,
    badges: ['F5', 'API', 'Security'],
    githubPath: 'f5-api-security',
  },
  {
    id: 'guardrailing-llms',
    title: 'Guardrailing LLMs',
    vendor: 'Red Hat',
    description: 'Apply safety constraints and content filters to ensure responsible LLM usage.',
    featured: false,
    badges: ['LLM', 'Safety', 'Ethics'],
    githubPath: 'guardrailing-llms',
  },
  {
    id: 'it-self-service-agent',
    title: 'IT Self-Service Agent',
    vendor: 'Red Hat',
    description: 'Automate IT support with an intelligent agent that handles common user requests.',
    featured: false,
    badges: ['Agent', 'IT Support'],
    githubPath: 'it-self-service-agent',
  },
  {
    id: 'lemonade-stand-assistant',
    title: 'Lemonade Stand Assistant',
    vendor: 'Red Hat',
    description:
      'A simple demonstration of an AI assistant for business operations and customer service.',
    featured: false,
    badges: ['Demo', 'Business'],
    githubPath: 'lemonade-stand-assistant',
  },
  {
    id: 'llm-cpu-serving',
    title: 'LLM CPU Serving',
    vendor: 'Red Hat',
    description: 'Deploy and serve large language models efficiently on CPU-only infrastructure.',
    featured: false,
    badges: ['LLM', 'Inference', 'CPU'],
    githubPath: 'llm-cpu-serving',
  },
  {
    id: 'lls-observability',
    title: 'LLM Observability',
    vendor: 'Red Hat',
    description:
      'Monitor, trace, and debug LLM applications with comprehensive observability tools.',
    featured: false,
    badges: ['Observability', 'Monitoring'],
    githubPath: 'lls-observability',
  },
  {
    id: 'maas-code-assistant',
    title: 'Model as a Service Code Assistant',
    vendor: 'Red Hat',
    description: 'AI-powered code completion and assistance using models as a service.',
    featured: false,
    badges: ['Coding', 'MaaS'],
    githubPath: 'maas-code-assistant',
  },
  {
    id: 'multi-agent-loan-origination',
    title: 'Multi-Agent Loan Origination',
    vendor: 'Red Hat',
    description: 'Coordinate multiple AI agents to automate the loan origination process.',
    featured: false,
    badges: ['Multi-Agent', 'Finance'],
    githubPath: 'multi-agent-loan-origination',
  },
  {
    id: 'openshift-ai-observability-summarizer',
    title: 'OpenShift AI Observability Summarizer',
    vendor: 'Red Hat',
    description:
      'Automatically summarize observability data and alerts from OpenShift AI workloads.',
    featured: false,
    badges: ['OpenShift', 'Observability'],
    githubPath: 'openshift-ai-observability-summarizer',
  },
  {
    id: 'product-recommender-system',
    title: 'Product Recommender System',
    vendor: 'Red Hat',
    description: 'Build personalized product recommendation engines using machine learning.',
    featured: false,
    badges: ['ML', 'E-commerce'],
    githubPath: 'product-recommender-system',
  },
  {
    id: 'rh-research',
    title: 'Red Hat Research',
    vendor: 'Red Hat',
    description: 'Explore cutting-edge AI research projects and experimental technologies.',
    featured: false,
    badges: ['Research', 'Experimental'],
    githubPath: 'rh-research',
  },
  {
    id: 'spending-transaction-monitor',
    title: 'Spending Transaction Monitor',
    vendor: 'Red Hat',
    description: 'Monitor and analyze financial transactions using AI-powered anomaly detection.',
    featured: false,
    badges: ['Finance', 'Analytics'],
    githubPath: 'spending-transaction-monitor',
  },
];
