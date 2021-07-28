import React, { Suspense } from 'react';
import 'dotenv/config'
import './App.less';
import { ConnectionProvider } from './utils/connection';
import { WalletProvider } from './utils/wallet';
import { GlobalStyle } from './global_style';
import { Spin } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes } from './routes';
import { PreferencesProvider } from './utils/preferences';
import { ReferrerProvider } from './utils/referrer';

export default function App() {
  console.log('process.env', process.env.REACT_APP_USDC_REFERRAL_FEES_ADDRESS)

  return (
    <Suspense fallback={() => <Spin size="large" />}>
      <GlobalStyle />
      <ErrorBoundary>
        <ConnectionProvider>
          <ReferrerProvider>
            <WalletProvider>
              <PreferencesProvider>
                <Suspense fallback={() => <Spin size="large" />}>
                  <Routes />
                </Suspense>
              </PreferencesProvider>
            </WalletProvider>
          </ReferrerProvider>
        </ConnectionProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
