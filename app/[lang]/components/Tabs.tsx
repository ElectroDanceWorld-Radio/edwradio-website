'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
  defaultTab?: string;
}

export function Tabs({ tabs, children, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>
        {/* Tab navigation */}
        <div className="flex justify-center mb-10">
          <div className="grid w-full max-w-xl grid-cols-2 rounded-xl bg-white/5 border border-purple-500/20 p-1.5 gap-1 sm:inline-flex sm:w-auto sm:grid-cols-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-w-0 px-3 py-2.5 rounded-lg text-xs leading-tight text-center font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-purple-500/30 text-white shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {children}
        </div>
      </div>
    </TabsContext.Provider>
  );
}

interface TabPanelProps {
  tabId: string;
  children: ReactNode;
}

export function TabPanel({ tabId, children }: TabPanelProps) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  if (ctx.activeTab !== tabId) return null;
  return <div className="animate-fade-in-up">{children}</div>;
}

export function useActiveTab() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('useActiveTab must be used within Tabs');
  return ctx;
}
