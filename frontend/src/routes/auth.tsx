import { useAuth, queryConfigUser } from "@/lib/hooks/user";
import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
  loader: async ({ context }) =>
    await context.queryClient.prefetchQuery(queryConfigUser),
});

function RouteComponent() {
  const navigate = useNavigate();
  const { handleGoogleAuth } = useAuth(navigate);
  const userQuery = useQuery(queryConfigUser);

  useEffect(() => {
    if (userQuery?.data?.id) navigate({ to: "/dashboard" });
  }, [userQuery?.data]);

  return (
    <div className="bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 tracking-tight transform -rotate-1">
          welcome aboard
        </h1>

        <p className="text-sm text-gray-600 mb-12 font-mono bg-yellow-100 inline-block p-2">
          sign in to continue
        </p>

        <button
          onClick={handleGoogleAuth}
          className="w-full p-3 flex items-center justify-center gap-3
        border-2 border-black bg-white
        hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transition-all text-sm"
        >
          <GoogleIcon />
          continue with google
        </button>

        <div className="mt-12 space-y-6">
          <div className="border-2 border-black p-4 bg-white text-sm">
            <h2 className="font-bold mb-4">key features</h2>
            <ul className="space-y-2 font-mono text-sm">
              <li>• feature one</li>
              <li>• feature two</li>
              <li>• feature three</li>
              <li>• feature four</li>
            </ul>
          </div>

          <p className="text-xs text-gray-500 font-mono text-center">
            additional auth methods coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
// separate component for cleaner jsx
const GoogleIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="-3 0 262 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);
