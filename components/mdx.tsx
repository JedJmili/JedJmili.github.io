import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-2 text-2xl font-bold text-textPrimary"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 border-b border-border pb-2 text-xl font-bold text-textPrimary"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold text-textPrimary" {...props} />
  ),
  p: (props) => (
    <p className="my-4 text-base leading-relaxed text-textSecondary" {...props} />
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-bright"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-bright"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: (props) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-textSecondary" {...props} />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-textSecondary"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent bg-surface/60 px-4 py-3 text-textSecondary"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-[#0d1016] p-4 font-mono text-sm leading-relaxed text-textPrimary"
      {...props}
    />
  ),
  code: (props) => {
    const inPre = (props as { "data-inline"?: string })["data-inline"];
    const { className, children, ...rest } = props as {
      className?: string;
      children?: React.ReactNode;
      "data-inline"?: string;
    };
    if (className && !inPre) {
      return (
        <code
          className={`rounded bg-surface2 px-1.5 py-0.5 font-mono text-[0.9em] text-accent ${className}`}
          {...rest}
        >
          {children}
        </code>
      );
    }
    return <code {...props} />;
  },
  hr: () => <hr className="my-8 border-border" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-6 w-full rounded-lg border border-border"
      loading="lazy"
      alt=""
      {...props}
    />
  ),
};
