"use client";

import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Status = "all" | "active" | "completed";

const status: Record<Status, string> = {
  all: "Tous",
  active: "Actifs",
  completed: "Terminés",
};

const statusEntries = Object.entries(status) as [Status, string][];

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Corriger la complétion d'une tâche", completed: false },
    { id: 2, text: "Corriger la suppression d'une tâche", completed: false },
    { id: 3, text: "Corriger la création de tâche vide", completed: false },
    { id: 4, text: "Corriger le compteur de tâche restante", completed: false },
    { id: 5, text: "Corriger le système de filtrage", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<Status>("all");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // BUG: No verification to avoid empty todos
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleTodo = (id: number) => {
    // BUG: When a todo is checked, nothing happens
    console.log("Modification de la tâche: ", id);
  };

  const handleDeleteTodo = (id: number) => {
    // BUG: The delete button won't work because it's not correctly linked or doesn't update state
    console.log("Suppression de la tâche: ", id);
  };

  // BUG: Filter logic is present in state but not applied to the rendered list
  const filteredTodos = todos;

  // BUG: Remaining count is wrong (shows all todos instead of only active ones)
  const remainingCount = todos.length;

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Mes tâches
        </h1>

        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ajouter une nouvelle tâche..."
          />
          <Button type="submit">Ajouter</Button>
        </form>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500 border-b pb-4">
          <span>{remainingCount} tâches restantes</span>
          <div className="flex gap-1">
            {statusEntries.map(([key, label]) => (
              <Button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                variant="ghost"
                size="sm"
                className={
                  filter === key ? "text-primary hover:text-primary" : ""
                }
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <ItemGroup>
          {filteredTodos.map((todo) => (
            <Item key={todo.id} size="sm" variant="muted" className="group">
              <ItemMedia>
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => handleToggleTodo(todo.id)}
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{todo.text}</ItemTitle>
              </ItemContent>
              <Button
                variant="ghost"
                size="icon-sm"
                type="button"
                aria-label="Supprimer la tâche"
                className="opacity-0 group-hover:opacity-100"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <Trash2Icon className="text-red-500" />
              </Button>
            </Item>
          ))}
          {filteredTodos.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              Aucune tâche trouvée.
            </p>
          )}
        </ItemGroup>
      </div>
    </main>
  );
}
