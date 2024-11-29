import { useLocation } from "react-router-dom";

export default function useGetPath() {
  const location = useLocation();

  return location.pathname;
}
