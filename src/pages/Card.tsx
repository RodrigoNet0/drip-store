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
        <Card className="bg-slete-500">
        <CardHeader>
          <CardTitle>Cadastro do Bolsa Escola</CardTitle>
          <CardDescription>Bolsa escola Brasil, um país de todes! </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center">
          <label>Seu Nome</label>
          <input type="text"  placeholder="Seu Nome....."/>
          <label>Seu Email </label>
          <input type="email" placeholder="Digite seu Email....." />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      
    );
  }
