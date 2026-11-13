export function Window({ title, level = 2, className = "", children }) {
  const Heading = level === 3 ? "h3" : "h2";

  return (
    <section className={className ? `window ${className}` : "window"}>
      <div className="window-bar">
        <Heading className="window-title pixel">{title}</Heading>
        <span className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="window-body">{children}</div>
    </section>
  );
}
