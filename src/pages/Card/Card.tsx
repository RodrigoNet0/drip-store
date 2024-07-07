'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react";


export default function CardPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(name, email);
    reload();
  };
  function reload() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className=" bg-slate-600 flex justify-center items-center h-screen">
      <Card className="bg-slate-100 w-96 shadow-md rounded-lg p-4">
        <CardHeader>
          <CardTitle>Cadastro do Bolsa Escola</CardTitle>
          <CardDescription>Bolsa escola Brasil, um país de todes!</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Digite seu nome:</label>
          <input
            required
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-sm font-medium text-gray-600">Digite seu email:</label>
          <input
            required
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#c92071] hover:bg-[#f161a7] text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Cadastrar
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}