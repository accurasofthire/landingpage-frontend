import { createAsyncThunk } from '@reduxjs/toolkit';

const CASE_STUDIES = [
  {
    id: 'health-platform',
    title: 'AI-Powered Health Diagnostics',
    category: 'AI',
    summary: 'A telemedicine platform using computer vision to triage patient scans in under a minute.',
    year: 2024,
  },
  {
    id: 'fintech-dashboard',
    title: 'Fintech Analytics Dashboard',
    category: 'Web',
    summary: 'Real-time portfolio analytics dashboard serving 50k daily active traders.',
    year: 2023,
  },
  {
    id: 'robotics-fleet',
    title: 'Robotics Fleet Control',
    category: 'Mobile',
    summary: 'Fleet management app controlling warehouse robots with sub-second latency.',
    year: 2023,
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace & Wallet',
    category: 'Blockchain',
    summary: 'Gas-optimized marketplace with embedded wallet and 2M+ monthly mints.',
    year: 2024,
  },
  {
    id: 'sports-streaming',
    title: 'Sports Live Streaming App',
    category: 'Mobile',
    summary: 'Multi-bitrate streaming app hitting 4K@60fps across 1M concurrent viewers.',
    year: 2022,
  },
  {
    id: 'supply-chain-ledger',
    title: 'Supply Chain Ledger',
    category: 'Blockchain',
    summary: 'Immutable shipment tracking across 30+ countries with zero reconciliation errors.',
    year: 2023,
  },
  {
    id: 'ecommerce-recommender',
    title: 'Recommender Engine for E-commerce',
    category: 'AI',
    summary: 'Personalized product discovery lifting conversion by 34% for a fashion retailer.',
    year: 2024,
  },
  {
    id: 'construction-crm',
    title: 'Construction Project CRM',
    category: 'Web',
    summary: 'Unified CRM for contractors tracking 12k concurrent site operations.',
    year: 2022,
  },
  {
    id: 'survey-analytics',
    title: 'Survey Analytics Suite',
    category: 'Web',
    summary: 'Sentiment analysis toolkit turning open-ended survey answers into insights.',
    year: 2023,
  },
  {
    id: 'defi-lending',
    title: 'DeFi Lending Protocol',
    category: 'Blockchain',
    summary: 'Lending protocol audited twice, managing $80M TVL with transparent risk models.',
    year: 2024,
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCaseStudies = createAsyncThunk(
  'caseStudies/fetchCaseStudies',
  async (_, { rejectWithValue }) => {
    await delay(800);

    if (Math.random() < 0.15) {
      return rejectWithValue('Network failed');
    }

    return CASE_STUDIES;
  }
);