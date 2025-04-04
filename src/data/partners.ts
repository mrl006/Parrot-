
import React from 'react';
import { Bitcoin, Globe, Shield, Database, Server, BarChart, Cpu, Link, Gem, Wallet } from 'lucide-react';
import { Partner } from '../types/Partner';

export const partnersData: Partner[] = [
  {
    name: 'Binance',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.binance.com'
  },
  {
    name: 'Solv',
    category: 'Financial Protocol',
    categoryTR: 'Finansal Protokol',
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    url: 'https://solv.xyz'
  },
  {
    name: 'ApeBond',
    category: 'DeFi Platform',
    categoryTR: 'DeFi Platformu',
    icon: React.createElement(Link, { className: "w-6 h-6" }),
    url: 'https://www.apebond.com'
  },
  {
    name: 'Bybit',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.bybit.com'
  },
  {
    name: 'ChainGPT',
    category: 'AI Blockchain Solution',
    categoryTR: 'AI Blokzincir Çözümü',
    icon: React.createElement(Cpu, { className: "w-6 h-6" }),
    url: 'https://www.chaingpt.org'
  },
  {
    name: 'Decubate',
    category: 'Investment Platform',
    categoryTR: 'Yatırım Platformu',
    icon: React.createElement(BarChart, { className: "w-6 h-6" }),
    url: 'https://www.decubate.com'
  },
  {
    name: 'BNB Chain',
    category: 'Blockchain Network',
    categoryTR: 'Blokzincir Ağı',
    icon: React.createElement(Link, { className: "w-6 h-6" }),
    url: 'https://bnbchain.org'
  },
  {
    name: 'StarryNift',
    category: 'NFT Marketplace',
    categoryTR: 'NFT Pazarı',
    icon: React.createElement(Gem, { className: "w-6 h-6" }),
    url: 'https://www.starrynift.com'
  },
  {
    name: 'KuCoin',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.kucoin.com'
  },
  {
    name: 'Hooked',
    category: 'DeFi Platform',
    categoryTR: 'DeFi Platformu',
    icon: React.createElement(Link, { className: "w-6 h-6" }),
    url: 'https://www.hooked.finance'
  },
  {
    name: 'Kommunitas',
    category: 'Launchpad Platform',
    categoryTR: 'Lansman Platformu',
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    url: 'https://www.kommunitas.net'
  },
  {
    name: 'Bitget',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.bitget.com'
  },
  {
    name: 'Biconomy',
    category: 'Infrastructure Provider',
    categoryTR: 'Altyapı Sağlayıcısı',
    icon: React.createElement(Server, { className: "w-6 h-6" }),
    url: 'https://www.biconomy.com'
  },
  {
    name: 'Toobit',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.toobit.com'
  },
  {
    name: 'GT Protocol',
    category: 'Blockchain Protocol',
    categoryTR: 'Blokzincir Protokolü',
    icon: React.createElement(Shield, { className: "w-6 h-6" }),
    url: 'https://www.gtprotocol.io'
  },
  {
    name: 'KIP',
    category: 'Blockchain Solution',
    categoryTR: 'Blokzincir Çözümü',
    icon: React.createElement(Cpu, { className: "w-6 h-6" }),
    url: 'https://www.kip.io'
  },
  {
    name: 'MEXC Global',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    url: 'https://www.mexc.com'
  },
  {
    name: 'Mogul',
    category: 'Entertainment Financing',
    categoryTR: 'Eğlence Finansmanı',
    icon: React.createElement(BarChart, { className: "w-6 h-6" }),
    url: 'https://www.mogulproductions.com'
  },
  {
    name: 'Gate.io',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.gate.io'
  },
  {
    name: 'Huobi',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Wallet, { className: "w-6 h-6" }),
    url: 'https://www.huobi.com'
  },
  {
    name: 'BitMart',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.bitmart.com'
  },
  {
    name: 'Poolz',
    category: 'Decentralized Fundraising',
    categoryTR: 'Merkeziyetsiz Fon Toplama',
    icon: React.createElement(Database, { className: "w-6 h-6" }),
    url: 'https://www.poolz.finance'
  },
  {
    name: 'GPTVerse',
    category: 'AI Platform',
    categoryTR: 'AI Platformu',
    icon: React.createElement(Cpu, { className: "w-6 h-6" }),
    url: 'https://www.gptverse.com'
  },
  {
    name: 'LBank',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Bitcoin, { className: "w-6 h-6" }),
    url: 'https://www.lbank.info'
  },
  {
    name: 'Probit Global',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    url: 'https://www.probit.com'
  },
  {
    name: 'Golden Paws',
    category: 'NFT Project',
    categoryTR: 'NFT Projesi',
    icon: React.createElement(Gem, { className: "w-6 h-6" }),
    url: 'https://www.goldenpaws.io'
  },
  {
    name: 'Web3D',
    category: 'Web3 Solutions',
    categoryTR: 'Web3 Çözümleri',
    icon: React.createElement(Globe, { className: "w-6 h-6" }),
    url: 'https://web3decision.com'
  }
];
