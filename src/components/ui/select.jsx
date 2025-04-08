import { useState } from "react";

export function Select({ children, onValueChange, value }) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children }) {
  return <div className="border px-3 py-2 rounded">{children}</div>;
}

export function SelectContent({ children }) {
  return <div className="border rounded mt-1">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <div onClick={() => alert(value)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}
