import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { destRouteMap } from "./routesMap";

export default function DestRedirect() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const dest = params.get("DEST");
    const targetRoute = dest ? destRouteMap[dest.toUpperCase()] : undefined;
    navigate(targetRoute ?? "/", { replace: true });
  }, [params, navigate]);

  return null;
}
