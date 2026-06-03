import { UserLayout } from "@/app/features/users";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SteamPay | User",
  description: "...",
};
export default function UsersPage() {
  return <UserLayout />;
}
