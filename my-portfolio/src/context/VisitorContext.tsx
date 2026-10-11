import React, { createContext, useContext, useEffect, useState } from "react";

interface VisitorContextType {
  count: number | null;
  isLoading: boolean;
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      const key = "shanmukharajah22_portfolio_views";
      const sessionKey = "has_visited_session";
      const hasVisited = sessionStorage.getItem(sessionKey);
      const endpoint = hasVisited ? "get" : "hit";

      try {
        if (!hasVisited) {
          sessionStorage.setItem(sessionKey, "true");
        }

        const response = await fetch(
          `https://countapi.mileshilliard.com/api/v1/${endpoint}/${key}`,
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch visitor count: ${response.statusText}`);
        }

        const data: { value?: unknown } = await response.json();
        if (typeof data.value !== "number") {
          throw new Error("Visitor count response did not contain a number");
        }

        setCount(data.value);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchCount();
  }, []);

  return (
    <VisitorContext.Provider value={{ count, isLoading }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const context = useContext(VisitorContext);
  if (context === undefined) {
    throw new Error("useVisitor must be used within a VisitorProvider");
  }
  return context;
}
