"use client";
import { useState } from "react";

export default function HeaderButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Info</button>
      {open && <p>This is client-side interaction</p>}
    </div>
  );
}
