import classNames from "classnames";

export default function Header4({ className, children }) {
  return (
    <h4
      className={classNames(
        className,
        "md:text-[28px] nd:leading-[34px] text-2xl font-anDemi"
      )}
    >
      {children}
    </h4>
  );
}
