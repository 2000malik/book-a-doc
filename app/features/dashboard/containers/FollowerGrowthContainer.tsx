'use client';
import { useFollowerGrowth } from '../hooks/useFollowerGrowth';
import { FollowerGrowthChart } from '../components/FollowerGrowthChart';

export const FollowerGrowthContainer = () => {
  const { data, isLoading } = useFollowerGrowth();
  return <FollowerGrowthChart data={data} isLoading={isLoading} />;
};