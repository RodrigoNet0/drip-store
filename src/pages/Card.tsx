import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardPage() {
  return (
    <Card className="bg-slete-500 w-96 shadow-md shadow-black">
      <CardHeader>
        <CardTitle>Cadastro do Bolsa Escola</CardTitle>
        <CardDescription>Bolsa escola Brasil, um país de todes! </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center gap-2">
        <label>Digite seu nome: </label>
        <input type="text" placeholder="Nome" className="border border-slate-500 rounded p-0.5"/>
        <label>Digite seu email: </label>
        <input type="email" placeholder="Email" className="border border-slate-500 rounded p-0.5"/>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>

  );
}
