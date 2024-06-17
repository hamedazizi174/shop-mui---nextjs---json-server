import { useQuery } from "@tanstack/react-query";
import { getUsersByEmailPass } from "../api/api";
import { UserProps } from "../types/types";

export default function useGetUserByEmailPass(data: UserProps) {
  return useQuery({
    queryKey: ["user-by-email-pass"],
    queryFn: () => getUsersByEmailPass(data),
  });
}
