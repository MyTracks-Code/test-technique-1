"use client";

import { MinusIcon, PlusIcon, RotateCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function TodoApp() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    console.log("Incrémentation");
  };

  const handleDecrement = () => {
    console.log("Décrémentation");
  };

  const handleReset = () => {
    console.log("Reset");
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <Card className="max-w-sm mx-auto shadow-md">
        <CardHeader className="flex flex-col gap-2 items-center">
          <div className="w-full flex items-center justify-between gap-2">
            <Button size="icon-lg" onClick={handleDecrement}>
              <MinusIcon />
            </Button>
            <span className="text-7xl font-medium">{count}</span>
            <Button size="icon-lg" onClick={handleIncrement}>
              <PlusIcon />
            </Button>
          </div>
          <Button size="icon-lg" variant="secondary" onClick={handleReset}>
            <RotateCw />
          </Button>
        </CardHeader>
      </Card>
    </main>
  );
}
