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


export default function CardPage(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email);
  } 
  



  
  

  return (

    <Card className="bg-slate-100 w-96 shadow-md shadow-black">
      <CardHeader>
        <CardTitle >Cadastro do Bolsa Escola</CardTitle>
        <CardDescription >Bolsa escola Brasil, um país de todes! </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center gap-2">
        <label >Digite seu nome: </label>
        <input type="text" placeholder="Nome" className="border border-slate-500 rounded p-0.5"/>
        <label >Digite seu email: </label>
        <input type="email" placeholder="Email" className="border border-slate-100 rounded p-0.5"/>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
       <div>
         <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Cadastrar
         </button>
       </div>
      </CardFooter>
    </Card>

  );
}
