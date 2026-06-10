import type { FC } from 'react';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import { Gallery } from '@patternfly/react-core';
import { CubeIcon } from '@patternfly/react-icons';
import { quickstarts } from '../data/quickstarts';

import './quickstarts-catalog.css';

const QuickstartsCatalog: FC = () => {
  const handleTileClick = (quickstartId: string) => {
    const quickstart = quickstarts.find((qs) => qs.id === quickstartId);
    if (quickstart) {
      window.open(
        `https://github.com/rh-ai-quickstart/ai-quickstart-pub/tree/main/quickstart/${quickstart.githubPath}`,
        '_blank',
      );
    }
  };

  return (
    <Gallery hasGutter minWidths={{ default: '280px' }} className="quickstarts-catalog__gallery">
      {quickstarts.map((quickstart) => (
        <CatalogTile
          key={quickstart.id}
          id={quickstart.id}
          title={quickstart.title}
          vendor={quickstart.vendor}
          description={quickstart.description}
          featured={quickstart.featured}
          href={`https://github.com/rh-ai-quickstart/ai-quickstart-pub/tree/main/quickstart/${quickstart.githubPath}`}
          icon={<CubeIcon />}
          badges={quickstart.badges?.map((badge) => (
            <span key={badge} className="quickstarts-catalog__badge">
              {badge}
            </span>
          ))}
          onClick={() => {
            handleTileClick(quickstart.id);
          }}
        />
      ))}
    </Gallery>
  );
};

export default QuickstartsCatalog;
