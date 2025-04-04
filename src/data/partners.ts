
import React from 'react';
import { Bitcoin, Ethereum, Database, Globe, Server, Shield, Cpu, BarChart, Crown, Gem } from 'lucide-react';
import { Partner } from '../types/Partner';

export const partnersData: Partner[] = [
  {
    name: 'CryptoFuture',
    category: 'Blockchain Analytics',
    categoryTR: 'Blokzincir Analizi',
    icon: <BarChart className="w-6 h-6" />,
    url: 'https://example.com/cryptofuture'
  },
  {
    name: 'EtherWorks',
    category: 'Smart Contract Development',
    categoryTR: 'Akıllı Kontrat Geliştirme',
    icon: <Ethereum className="w-6 h-6" />,
    url: 'https://example.com/etherworks'
  },
  {
    name: 'BitSolutions',
    category: 'Cryptocurrency Exchange',
    categoryTR: 'Kripto Para Borsası',
    icon: <Bitcoin className="w-6 h-6" />,
    url: 'https://example.com/bitsolutions'
  },
  {
    name: 'ChainSecure',
    category: 'Blockchain Security',
    categoryTR: 'Blokzincir Güvenliği',
    icon: <Shield className="w-6 h-6" />,
    url: 'https://example.com/chainsecure'
  },
  {
    name: 'DataBlock',
    category: 'Decentralized Storage',
    categoryTR: 'Merkeziyetsiz Depolama',
    icon: <Database className="w-6 h-6" />,
    url: 'https://example.com/datablock'
  },
  {
    name: 'NodeMasters',
    category: 'Validator Services',
    categoryTR: 'Doğrulayıcı Hizmetleri',
    icon: <Server className="w-6 h-6" />,
    url: 'https://example.com/nodemasters'
  },
  {
    name: 'Web3Connect',
    category: 'Web3 Infrastructure',
    categoryTR: 'Web3 Altyapısı',
    icon: <Globe className="w-6 h-6" />,
    url: 'https://example.com/web3connect'
  },
  {
    name: 'TechNodes',
    category: 'Protocol Development',
    categoryTR: 'Protokol Geliştirme',
    icon: <Cpu className="w-6 h-6" />,
    url: 'https://example.com/technodes'
  },
  {
    name: 'RoyalChain',
    category: 'Governance Solutions',
    categoryTR: 'Yönetişim Çözümleri',
    icon: <Crown className="w-6 h-6" />,
    url: 'https://example.com/royalchain'
  },
  {
    name: 'TokenValue',
    category: 'Token Economics',
    categoryTR: 'Token Ekonomisi',
    icon: <Gem className="w-6 h-6" />,
    url: 'https://example.com/tokenvalue'
  }
];
