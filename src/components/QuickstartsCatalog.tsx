import { useState, type FC, useMemo } from 'react';
import {
  CatalogTile,
  FilterSidePanel,
  FilterSidePanelCategory,
  FilterSidePanelCategoryItem,
} from '@patternfly/react-catalog-view-extension';
import { Gallery, PageSection, SearchInput } from '@patternfly/react-core';
import { CubeIcon } from '@patternfly/react-icons';
import { quickstarts } from '../data/quickstarts';
import redhatIcon from '../assets/redhat-logo.png';
import nvidiaIcon from '../assets/nvidia-logo.png';
import f5Icon from '../assets/f5-logo.png';

import './quickstarts-catalog.css';

const CATEGORIES = [
  'All items',
  'Governance',
  'Observability',
  'RAG',
  'Safety',
  'Use-Case',
  'Partners',
] as const;

const QuickstartsCatalog: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['All items']);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTileClick = (quickstartId: string) => {
    const quickstart = quickstarts.find((qs) => qs.id === quickstartId);
    if (quickstart) {
      window.open(
        `https://docs.redhat.com/en/learn/ai-quickstarts/rh-${quickstart.githubPath}`,
        '_blank',
      );
    }
  };

  const handleFilterChange = (category: string) => {
    if (category === 'All items') {
      setSelectedFilters(['All items']);
    } else {
      const newFilters = selectedFilters.includes(category)
        ? selectedFilters.filter((f) => f !== category)
        : [...selectedFilters.filter((f) => f !== 'All items'), category];

      setSelectedFilters(newFilters.length === 0 ? ['All items'] : newFilters);
    }
  };

  const handleSearchChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setSearchQuery(value);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  const filteredQuickstarts = useMemo(() => {
    let filtered = quickstarts;

    // Apply category filters
    if (!selectedFilters.includes('All items') && selectedFilters.length > 0) {
      filtered = filtered.filter((qs) =>
        selectedFilters.some((filter) => qs.categories.includes(filter)),
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const keywords = query.split(/\s+/);

      filtered = filtered.filter((qs) => {
        const searchableText =
          `${qs.title} ${qs.description} ${qs.vendor} ${qs.badges?.join(' ') ?? ''}`.toLowerCase();
        return keywords.every((keyword) => searchableText.includes(keyword));
      });
    }

    return filtered;
  }, [selectedFilters, searchQuery]);

  const getCategoryCount = (category: string) => {
    if (category === 'All items') {
      return quickstarts.length;
    }
    return quickstarts.filter((qs) => qs.categories.includes(category)).length;
  };

  const getVendorIcon = (vendor: string) => {
    switch (vendor.toLowerCase()) {
      case 'red hat':
        return <img src={redhatIcon} alt="Red Hat" className="quickstarts-catalog__vendor-icon"/>;
      case 'nvidia':
        return <img src={nvidiaIcon} alt="NVIDIA" className="quickstarts-catalog__vendor-icon" />;
      case 'f5':
        return <img src={f5Icon} alt="F5" className="quickstarts-catalog__vendor-icon" />;
      default:
        return <CubeIcon />;
    }
  };

  return (
    <div className="quickstarts-catalog__container">
      <FilterSidePanel>
        <FilterSidePanelCategory title="Category">
          {CATEGORIES.map((category) => (
            <FilterSidePanelCategoryItem
              key={category}
              checked={selectedFilters.includes(category)}
              onClick={() => {
                handleFilterChange(category);
              }}
              count={getCategoryCount(category)}
            >
              {category}
            </FilterSidePanelCategoryItem>
          ))}
        </FilterSidePanelCategory>
      </FilterSidePanel>
      <PageSection className="quickstarts-catalog__content">
        <SearchInput
          className="quickstarts-catalog__search"
          placeholder="Search quickstarts..."
          value={searchQuery}
          onChange={handleSearchChange}
          onClear={handleSearchClear}
          aria-label="Search quickstarts"
        />
        <Gallery hasGutter minWidths={{ default: '280px' }}>
          {filteredQuickstarts.map((quickstart) => (
            <CatalogTile
              key={quickstart.id}
              id={quickstart.id}
              title={quickstart.title}
              vendor={quickstart.vendor}
              description={quickstart.description}
              featured={quickstart.featured}
              href={`https://github.com/rh-ai-quickstart/ai-quickstart-pub/tree/main/quickstart/${quickstart.githubPath}`}
              icon={getVendorIcon(quickstart.vendor)}
              onClick={() => {
                handleTileClick(quickstart.id);
              }}
            />
          ))}
        </Gallery>
      </PageSection>
    </div>
  );
};

export default QuickstartsCatalog;
