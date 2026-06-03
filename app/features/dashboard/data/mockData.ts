import { StatCardData, FollowerGrowthDataPoint, MediaPost } from "@/app/types/dashboard";


export const STAT_CARDS: StatCardData[] = [
  {
    id: 'followers',
    label: 'Total followers',
    value: '21.2k',
    iconType: 'followers',
  },
  {
    id: 'impressions',
    label: 'Impressions',
    value: '1.6k',
    changePercent: 112.71,
    iconType: 'impressions',
  },
  {
    id: 'reach',
    label: 'Reach',
    value: '826',
    changePercent: -24.2,
    iconType: 'reach',
  },
  {
    id: 'engagement',
    label: 'Engagement Rate',
    value: '18.2%',
    changePercent: 112.71,
    iconType: 'engagement',
  },
];

export const FOLLOWER_GROWTH_DATA: FollowerGrowthDataPoint[] = [
  { month: 'Jan', followers: 4200, goal: 6000 },
  { month: 'Feb', followers: 8100, goal: 6000 },
  { month: 'Mar', followers: 5300, goal: 6000 },
  { month: 'Apr', followers: 9800, goal: 6000 },
  { month: 'May', followers: 5600, goal: 6000 },
  { month: 'Jun', followers: 6200, goal: 6000 },
  { month: 'Jul', followers: 5100, goal: 6000 },
  { month: 'Aug', followers: 4300, goal: 6000 },
  { month: 'Sep', followers: 3800, goal: 6000 },
];

export const MEDIA_POSTS: MediaPost[] = [
  {
    id: '1',
    title: 'Get More Likes this Summer',
    likesCount: 29200,
    likesGoal: 36000,
    percentComplete: 77,
  },
];