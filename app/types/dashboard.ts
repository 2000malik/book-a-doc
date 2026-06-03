export interface StatCardData {
  id: string;
  label: string;
  value: string | number;
  changePercent?: number;       // positive = green, negative = red
  iconType: 'followers' | 'impressions' | 'reach' | 'engagement';
}

export interface FollowerGrowthDataPoint {
  month: string;
  followers: number;
  goal: number;
}

export interface MediaPost {
  id: string;
  title: string;
  likesCount: number;
  likesGoal: number;
  percentComplete: number;
}

export interface AnalyticsOverview {
  stats: StatCardData[];
  period: string;
}

export interface FollowerGrowthSummary {
  newFollowers: number;
  growthRate: number;
  chartData: FollowerGrowthDataPoint[];
}