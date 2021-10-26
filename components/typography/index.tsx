
export function H1({children}: {children: string}): JSX.Element {
  return (
    <h1 className="font-mono text-primary dark:text-primary-dark text-5xl font-bold">
      {children}
    </h1>
  );
}

export function H2({children}: {children: string}): JSX.Element {
  return (
    <h2 className="text-secondary dark:text-secondary-dark text-4xl font-semibold">
      {children}
    </h2>
  );
}
