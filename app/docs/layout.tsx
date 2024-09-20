import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
    // root-toggle 根文档切换
    sidebar={{
      banner: (
        <RootToggle
          options={[
            {
              title: 'Framework',
              description: '开源低代码框架',
              url: '/docs',
            },
            {
              title: 'ERPNext',
              description: '全球最好的免费开源ERP',
              url: '/docs',
            },
          ]}
        />
      ),
    }}
    tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
