import classNames from "classnames";

export default function Header1({ className, children }) {
  return (
    <h1
      className={
        classNames(className, " text-4xl lg:text-7xl font-anMedium lg:font-anBold")
      }
    >
      {children}
    </h1>
  );
}
