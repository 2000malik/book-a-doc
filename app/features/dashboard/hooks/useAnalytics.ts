import { useState, useEffect } from 'react';
import { STAT_CARDS } from '../data/mockData';
import { AnalyticsOverview } from '@/app/types/dashboard';

export function useAnalytics(period: string = 'Last 30 days') {
  const [data, setData] = useState<AnalyticsOverview | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace with: const res = await fetch(`/api/analytics?period=${period}`)
    const timer = setTimeout(() => {
      setData({ stats: STAT_CARDS, period });
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [period]);

  return { data, isLoading, error };
}