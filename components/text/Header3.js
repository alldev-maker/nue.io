import classNames from "classnames";

export default function Header3({ className, children }) {
  return (
    <h3
      className={classNames(
        className,
        "lg:text-[38px] lg:leading-[48px] text-2xl font-anDemi"
      )}
    >
      {children}
    </h3>
  );
}
