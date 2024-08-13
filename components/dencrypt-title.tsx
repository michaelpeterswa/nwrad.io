"use client";

import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

export default function DencryptTitle({
  initial,
  strings,
}: {
  initial: string;
  strings: string[];
}) {
  if (!strings) {
    strings = ["fallback"];
  }

  const [value, setValue] = useDencrypt(initial, { interval: 70 });

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      setValue(strings[i]);

      i = i === strings.length - 1 ? 0 : i + 1;
    }, 2250);

    return () => clearInterval(action);
  }, []);

  return <div>{value}</div>;
}
