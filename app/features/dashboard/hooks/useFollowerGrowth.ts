import { useState, useEffect } from 'react';
import { FOLLOWER_GROWTH_DATA } from '../data/mockData';
import { FollowerGrowthSummary } from '@/app/types/dashboard';

export function useFollowerGrowth() {
  const [data, setData] = useState<FollowerGrowthSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({
        newFollowers: 12800,
        growthRate: 22.8,
        chartData: FOLLOWER_GROWTH_DATA,
      });
      setIsLoading(false);
    }, 800);
  }, []);

  return { data, isLoading };
}