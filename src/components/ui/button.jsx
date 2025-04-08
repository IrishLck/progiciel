export function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded text-white";
  const styles = {
    default: "bg-blue-600 hover:bg-blue-700",
    destructive: "bg-red-600 hover:bg-red-700",
    outline: "border border-gray-400 text-black"
  };
  return <button {...props} className={base + " " + styles[variant] + " " + (props.className || "")}>{children}</button>;
}
