import { useEffect, useState } from "react";
import { Shell, GapBand, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

type CalNamespace = (...args: unknown[]) => void;
type CalApi = ((...args: unknown[]) => void) & {
  ns?: Record<string, CalNamespace>;
  config?: {
    forwardQueryParams?: boolean;
  };
};

const QUOTES = [
  {
    text: "With great power comes great responsibility.",
    author: "Uncle Ben",
  },
  {
    text: "If you're nothing without this suit, then you shouldn't have it.",
    author: "Tony Stark",
  },
  {
    text: "Why do we fall, Bruce? So that we can learn to pick ourselves up.",
    author: "Thomas Wayne",
  },
  {
    text: "It's not who I am underneath, but what I do that defines me.",
    author: "Batman",
  },
  {
    text: "The door is more than it appears. It separates who you are from who you can be. You do not have to walk through it alone.",
    author: "Doctor Strange",
  },
];

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://app.cal.com/embed/embed.js"]',
    );
    const initializeCal = () => {
      const cal = (window as Window & { Cal?: CalApi }).Cal;
      if (!cal) return;

      cal("init", "15min", { origin: "https://app.cal.com" });
      cal.config = cal.config || {};
      cal.config.forwardQueryParams = true;
      cal.ns?.["15min"]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    if (existingScript) {
      initializeCal();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = initializeCal;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full">
      <GapBand h="h-12" />
      {/* Booking Section */}
      <SectionHeader title="Book a Call" />
      <Shell className="px-6 py-10 text-center sm:px-8">
        <p className="text-[14px] text-[var(--muted)]">
          Have an idea, opportunity, or project in mind? Let&apos;s talk.
        </p>
        <a
          href="#book-15min"
          data-cal-link="shanmukha-nzn84x/15min"
          data-cal-namespace="15min"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-2.5 text-[13px] font-semibold text-[var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Book a 15-minute call
        </a>
      </Shell>

      {/* Quote Band */}
      <GapBand className="border-t border-[var(--line)]" />
      <div className="w-full border-y border-[var(--line)]">
        <Shell className="px-8 py-12 text-center min-h-[160px] flex flex-col items-center justify-center bg-[var(--bg)] select-none">
          <div className="w-full max-w-[580px] min-h-[140px] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-4xl text-[var(--soft)] leading-none">&ldquo;</span>
                <p className="font-serif mx-auto -mt-2 max-w-md text-[20px] sm:text-[22px] italic leading-snug text-[var(--fg)]">
                  {QUOTES[quoteIndex].text}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--soft)] font-bold">
                  — {QUOTES[quoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Shell>
      </div>

      {/* Footer Bottom */}
      <GapBand h="h-5" />
      <div className="w-full border-t border-[var(--line)]">
        <Shell className="border-b-0 px-6 py-8 text-center sm:px-8">
          <p className="text-[14.5px] text-[var(--muted)]">
            Designed &amp; Developed by <span className="font-semibold text-[var(--fg)]">{site.name}</span>
          </p>
          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.location} · {localTime || "IST"}
          </p>
        </Shell>
      </div>
    </footer>
  );
}
