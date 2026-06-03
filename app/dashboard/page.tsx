import { Metadata } from "next";
import DashboardLayout from "../features/dashboard";

export const metadata: Metadata = {
  title: "SteamPay | Dashboard",
  description: "...",
};
export default function DashboardPage() {
  return <DashboardLayout />;
}
