import { useState } from "react";

const COLLAPSED_LINES = 20;

export function CodeBlock({ code, caption }: { code: string; caption?: string }) {
  const [expanded, setExpanded] = useState(false);
  const lines = code.split("\n");
  const hiddenLines = lines.length - COLLAPSED_LINES;

  return (
    <figure className="mt-8">
      <pre className="overflow-x-auto rounded-sm border border-border bg-secondary/60 p-5 text-[0.8rem] leading-relaxed text-foreground/90">
        <code className="font-mono">
          {expanded ? code : lines.slice(0, COLLAPSED_LINES).join("\n")}
        </code>
      </pre>
      {hiddenLines > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {expanded
            ? "Collapse script"
            : `Show full script (${lines.length} lines)`}
        </button>
      ) : null}
      {caption ? (
        <figcaption className="mt-3 text-xs text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
