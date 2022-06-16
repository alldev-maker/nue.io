import classNames from "classnames";

export default function Header2({ className, children }) {
  return (
    <h2
      className={classNames(
        className,
        "text-3xl md:text-5xl font-anDemi"
      )}
    >
      {children}
    </h2>
  );
}
