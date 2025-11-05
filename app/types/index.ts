import { User } from "@/src/generated/client";

export type SafeUser = Omit<
   User,
   "createdAt" | "updatedAt" | "emailVerified"
> & {
   createdAt: string;
   updatedAt: string;
   emailVerified: string | null;
};