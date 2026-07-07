import { DocumentTitle, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { useTranslation } from 'react-i18next';
import { Alert, Content, PageSection } from '@patternfly/react-core';
import type { FC } from 'react';

import './example.css';
import QuickstartsCatalog from './QuickstartsCatalog';

const ExamplePage: FC = () => {
  const { t } = useTranslation('plugin__console-plugin-template');

  return (
    <>
      <DocumentTitle>{t('Red Hat AI Quickstarts')}</DocumentTitle>
      <ListPageHeader title={t('Red Hat AI Quickstarts')} />
      <PageSection>
        <Content component="p">
          {t(
            'Use the the AI quickstarts below to quickly setup an environment to test our or demonstrate various AI/ML applications, tools and products from Red Hat and our ecosystem of AI partners.',
          )}
        </Content>
        <Alert variant="danger" isInline title={t('Important Notice')}>
          {t(
            'These AI quickstarts are not officially supported by Red Hat support, and are only to be used for testing.',
          )}
        </Alert>
      </PageSection>
      <QuickstartsCatalog />
    </>
  );
};

export default ExamplePage;
