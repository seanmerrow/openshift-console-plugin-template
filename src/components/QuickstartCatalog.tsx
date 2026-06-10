import {
  Card,
  CardBody,
  CardTitle,
  Gallery,
  GalleryItem,
  SearchInput,
  Sidebar,
  SidebarContent,
  SidebarPanel,
  Nav,
  NavList,
  NavItem,
  Title,
} from '@patternfly/react-core';
import { useState, useMemo } from 'react';
import type { FC } from 'react';

import './quickstart-catalog.css';

interface Quickstart {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  tags?: string[];
  categories?: string[];
}

const quickstarts: Quickstart[] = [
  {
    id: 'rag',
    title: 'Enterprise RAG Chatbot',
    description:
      'Centralize company knowledge with an Enterprise RAG Chatbot. Enhance large language models with specialized data sources for more accurate and context-aware responses.',
    repoUrl: 'https://github.com/rh-ai-quickstart/RAG',
    tags: ['RAG', 'LLaMA', 'OpenShift AI'],
    categories: ['RAG', 'Business Use-case'],
  },
  {
    id: 'ai-virtual-agent',
    title: 'AI Virtual Agent',
    description:
      'Build and deploy a conversational AI virtual agent on Red Hat OpenShift AI to automate customer interactions and provide instant support.',
    repoUrl: 'https://github.com/rh-ai-quickstart/ai-virtual-agent',
    tags: ['Conversational AI', 'OpenShift AI', 'LlamaStack'],
    categories: ['Business Use-case'],
  },
  {
    id: 'guardrailing-llms',
    title: 'Privacy-Focused AI Assistant',
    description:
      'Deploy a healthcare AI assistant with multiple protection layers for HIPAA-compliant applications. Implements PII detection, content moderation, and prompt injection protection.',
    repoUrl: 'https://github.com/rh-ai-quickstart/guardrailing-llms',
    tags: ['Healthcare', 'TrustyAI', 'Guardrails'],
    categories: ['Safety', 'Governance'],
  },
  {
    id: 'aml-rag-nvidia',
    title: 'AML RAG with NVIDIA',
    description: 'Retrieval-augmented generation solution optimized for NVIDIA GPU acceleration.',
    repoUrl: 'https://github.com/rh-ai-quickstart/aml-rag-nvidia',
    tags: ['RAG', 'NVIDIA'],
    categories: ['RAG'],
  },
  {
    id: 'ansible-log-analysis',
    title: 'Ansible Log Analysis',
    description: 'AI-powered analysis of Ansible automation logs for troubleshooting and insights.',
    repoUrl: 'https://github.com/rh-ai-quickstart/ansible-log-analysis',
    tags: ['Ansible', 'Log Analysis'],
    categories: ['Observability'],
  },
  {
    id: 'data-governance-co-pilot',
    title: 'Data Governance Co-Pilot',
    description: 'AI assistant for data governance and compliance workflows.',
    repoUrl: 'https://github.com/rh-ai-quickstart/data-governance-co-pilot',
    tags: ['Data Governance'],
    categories: ['Governance'],
  },
  {
    id: 'f5-ai-guardrails',
    title: 'F5 AI Guardrails',
    description: 'AI guardrails implementation using F5 technologies for secure AI deployments.',
    repoUrl: 'https://github.com/rh-ai-quickstart/f5-ai-guardrails',
    tags: ['F5', 'Guardrails', 'Partner'],
    categories: ['Safety'],
  },
  {
    id: 'f5-api-security',
    title: 'F5 API Security',
    description: 'API security for AI applications using F5 technologies.',
    repoUrl: 'https://github.com/rh-ai-quickstart/f5-api-security',
    tags: ['F5', 'API Security', 'Partner'],
    categories: ['Safety'],
  },
  {
    id: 'it-self-service-agent',
    title: 'IT Self-Service Agent',
    description: 'AI-powered IT support agent for common helpdesk tasks and troubleshooting.',
    repoUrl: 'https://github.com/rh-ai-quickstart/it-self-service-agent',
    tags: ['IT Support', 'Agent'],
    categories: ['Business Use-case'],
  },
  {
    id: 'lemonade-stand-assistant',
    title: 'Lemonade Stand Assistant',
    description: 'Demonstration AI assistant for business operations and customer service.',
    repoUrl: 'https://github.com/rh-ai-quickstart/lemonade-stand-assistant',
    tags: ['Demo', 'Business'],
    categories: ['Business Use-case'],
  },
  {
    id: 'llm-cpu-serving',
    title: 'LLM CPU Serving',
    description:
      'Serve large language models efficiently on CPU infrastructure without GPU requirements.',
    repoUrl: 'https://github.com/rh-ai-quickstart/llm-cpu-serving',
    tags: ['LLM', 'CPU'],
    categories: ['Business Use-case'],
  },
  {
    id: 'lls-observability',
    title: 'LLM Observability',
    description: 'Monitoring and observability for large language model deployments.',
    repoUrl: 'https://github.com/rh-ai-quickstart/lls-observability',
    tags: ['Observability', 'Monitoring'],
    categories: ['Observability'],
  },
  {
    id: 'maas-code-assistant',
    title: 'Code Assistant (MaaS)',
    description: 'Model-as-a-Service code assistant for developer productivity.',
    repoUrl: 'https://github.com/rh-ai-quickstart/maas-code-assistant',
    tags: ['Code Assistant', 'MaaS'],
    categories: ['Business Use-case'],
  },
  {
    id: 'multi-agent-loan-origination',
    title: 'Multi-Agent Loan Origination',
    description: 'Multi-agent AI system for automated loan processing and origination workflows.',
    repoUrl: 'https://github.com/rh-ai-quickstart/multi-agent-loan-origination',
    tags: ['Multi-Agent', 'Financial Services'],
    categories: ['Business Use-case'],
  },
  {
    id: 'openshift-ai-observability-summarizer',
    title: 'OpenShift AI Observability Summarizer',
    description: 'AI-powered summarization of OpenShift observability data and metrics.',
    repoUrl: 'https://github.com/rh-ai-quickstart/openshift-ai-observability-summarizer',
    tags: ['OpenShift AI', 'Observability'],
    categories: ['Observability'],
  },
  {
    id: 'product-recommender-system',
    title: 'Product Recommender System',
    description: 'AI-driven product recommendation engine for e-commerce applications.',
    repoUrl: 'https://github.com/rh-ai-quickstart/product-recommender-system',
    tags: ['Recommendations', 'E-commerce'],
    categories: ['Business Use-case'],
  },
  {
    id: 'rh-research',
    title: 'Red Hat Research',
    description: 'Research-focused AI/ML experiments and proof-of-concepts.',
    repoUrl: 'https://github.com/rh-ai-quickstart/rh-research',
    tags: ['Research'],
    categories: ['Business Use-case'],
  },
  {
    id: 'spending-transaction-monitor',
    title: 'Spending Transaction Monitor',
    description:
      'AI-powered monitoring and analysis of financial transactions and spending patterns.',
    repoUrl: 'https://github.com/rh-ai-quickstart/spending-transaction-monitor',
    tags: ['Financial Services', 'Monitoring'],
    categories: ['Business Use-case', 'Observability'],
  },
];

const categories = [
  'All items',
  'Business Use-case',
  'RAG',
  'Safety',
  'Observability',
  'Governance',
];

const QuickstartCatalog: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All items');
  const [searchValue, setSearchValue] = useState('');

  const handleCardClick = (quickstart: Quickstart) => {
    window.open(quickstart.repoUrl, '_blank', 'noopener,noreferrer');
  };

  const filteredQuickstarts = useMemo(() => {
    return quickstarts.filter((quickstart) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All items' || quickstart.categories?.includes(selectedCategory);

      // Search filter
      const matchesSearch =
        searchValue === '' ||
        quickstart.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        quickstart.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        quickstart.tags?.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchValue]);

  const sidebarPanel = (
    <SidebarPanel variant="sticky" className="console-plugin-template__sidebar-panel">
      <Nav>
        <NavList>
          {categories.map((category) => (
            <NavItem
              key={category}
              itemId={category}
              isActive={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category);
              }}
              className="console-plugin-template__nav-item"
            >
              {category}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </SidebarPanel>
  );

  const mainContent = (
    <SidebarContent className="console-plugin-template__sidebar-content">
      <div className="console-plugin-template__catalog-header">
        <Title headingLevel="h2" size="xl">
          {selectedCategory} ({filteredQuickstarts.length})
        </Title>
        <SearchInput
          placeholder="Filter by keyword..."
          value={searchValue}
          onChange={(_event, value) => {
            setSearchValue(value);
          }}
          onClear={() => {
            setSearchValue('');
          }}
          className="console-plugin-template__search-input"
        />
      </div>
      <Gallery
        hasGutter
        minWidths={{
          default: '100%',
          sm: 'calc(50% - 8px)',
          md: 'calc(33.333% - 11px)',
          lg: 'calc(25% - 12px)',
        }}
        maxWidths={{ lg: 'calc(25% - 12px)' }}
      >
        {filteredQuickstarts.map((quickstart) => (
          <GalleryItem key={quickstart.id}>
            <Card
              isClickable
              isFullHeight
              onClick={() => {
                handleCardClick(quickstart);
              }}
              className="console-plugin-template__quickstart-card"
            >
              <CardTitle>{quickstart.title}</CardTitle>
              <CardBody>
                <p>{quickstart.description}</p>
                {quickstart.tags && quickstart.tags.length > 0 && (
                  <div className="console-plugin-template__quickstart-tags">
                    {quickstart.tags.map((tag) => (
                      <span key={tag} className="console-plugin-template__quickstart-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
      {filteredQuickstarts.length === 0 && (
        <div className="console-plugin-template__no-results">
          No quickstarts found matching your criteria.
        </div>
      )}
    </SidebarContent>
  );

  return (
    <Sidebar hasGutter>
      {sidebarPanel}
      {mainContent}
    </Sidebar>
  );
};

export default QuickstartCatalog;
