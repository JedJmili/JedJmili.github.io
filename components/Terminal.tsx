"use client";

import { useEffect, useRef, useState } from "react";
import { TerminalSquare } from "lucide-react";
import { profile } from "@/data/profile";

interface Line {
  type: "input" | "output";
  text: string;
}

const host = `${profile.handle}@portfolio`;

const OUTPUT: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  help      show this help",
    "  about     about me",
    "  skills    key skills",
    "  projects  selected projects",
    "  contact   how to reach me",
    "  clear     clear the terminal",
  ],
  about: [
    host,
    "Computer Networks & Telecommunications engineering student at INSAT.",
    "CTF handle: Zanpakto",
    "Focus: offensive security, penetration testing, Active Directory,",
    "reverse engineering, network security and CTFs.",
  ],
  skills: [
    "offensive-security  web / network / AD / exploitation",
    "reverse-engineering IDA · GDB · Rizin · Frida · Android RE",
    "networking          TCP/IP · routing · switching · Wireshark",
    "programming         Python · C · C++ · Java · JavaScript · SQL",
    "tooling             Nmap · Burp · Hashcat · Impacket · NetExec",
  ],
  projects: [
    "veilr            onion-routing mobile app (X25519 + AES-256-GCM)",
    "ad-security      Active Directory audit & hardening platform",
    "ctf-research     CTF writeups & security research",
    "Scroll to #projects for full details.",
  ],
  contact: [
    "The fastest way to reach me is via email or the contact section.",
    "Set your links in data/socials.ts — placeholders are configured.",
  ],
};

const DEFAULT_OUTPUT: Line[] = [
  {
    type: "output",
    text: `welcome to ${host}. Type 'help' to get started.`,
  },
  { type: "output", text: "" },
];

export function Terminal() {
  const [history, setHistory] = useState<Line[]>(DEFAULT_OUTPUT);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLines: Line[] = [...history, { type: "input", text: `$ ${raw}` }];

    if (!cmd) {
      setHistory([...newLines]);
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const out = OUTPUT[cmd];
    if (out) {
      out.forEach((line) => newLines.push({ type: "output", text: line }));
    } else {
      newLines.push({
        type: "output",
        text: `command not found: ${raw} (try 'help')`,
      });
    }
    setHistory(newLines);
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-border bg-surface/80">
          <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-textSecondary">
              <TerminalSquare className="h-3.5 w-3.5 text-accent" />
              {host}
            </span>
          </div>

          <div
            className="max-h-80 overflow-y-auto p-4 font-mono text-sm"
            role="log"
            aria-label="Interactive terminal output"
          >
            {history.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.type === "input"
                    ? "text-textPrimary"
                    : "text-textSecondary"
                }`}
              >
                {line.type === "input" ? (
                  <span className="text-accent">$ </span>
                ) : (
                  ""
                )}
                {line.text}
              </div>
            ))}

            <TerminalInput
              value={input}
              onChange={setInput}
              onSubmit={() => {
                run(input);
                setInput("");
              }}
            />
            <div ref={endRef} />
          </div>
        </div>
        <p className="mt-3 text-center font-mono text-xs text-textMuted">
          try: help · about · skills · projects · contact · clear
        </p>
      </div>
    </section>
  );
}

function TerminalInput({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mt-1 flex items-center gap-2">
      <span className="shrink-0 text-accent">$</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
          e.stopPropagation();
        }}
        aria-label="Terminal command input"
        spellCheck={false}
        autoComplete="off"
        className="w-full bg-transparent font-mono text-sm text-textPrimary caret-accent outline-none"
      />
    </div>
  );
}
