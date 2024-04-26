# Index Signatures

No exemplo fornecido, a classe `Movies` não está utilizando index signatures, mas a classe `HotelRooms` sim. Vou explicar os dois exemplos separadamente.

### Exemplo 1: Classe Movies

```typescript
class Movies {
    constructor(
        public readonly id: number,
        public name: string,
        private _price: number
    ) {}
}

let movie1 = new Movies(1, 'Spider-Man', 20);
```

Neste exemplo, a classe `Movies` não faz uso de index signatures. Ela é uma classe simples que representa um filme, com três propriedades: `id`, `name` e `_price`. O constructor da classe é usado para inicializar essas propriedades ao criar um novo objeto `Movies`.

### Exemplo 2: Classe HotelRooms com Index Signatures

```typescript
class HotelRooms {
    [roomNumber: string]: string;
}

let room = new HotelRooms();

room.A01 = 'Ana';
room.A02 = 'Charles';
```

Neste exemplo, a classe `HotelRooms` utiliza index signatures. A index signature `[roomNumber: string]: string;` indica que cada chave do objeto será do tipo `string` (representando o número do quarto), e cada valor associado a essas chaves também será do tipo `string`.

- Ao criar uma instância da classe `HotelRooms`, você pode adicionar propriedades ao objeto usando notação de ponto (`room.A01`) e atribuir valores a elas (`'Ana'`). Essas propriedades são tratadas como índices do objeto e são do tipo `string`, conforme definido pela index signature na classe.

- O uso de index signatures permite que você adicione propriedades dinamicamente ao objeto `HotelRooms` sem precisar declará-las explicitamente na classe. Isso é útil quando você precisa lidar com um conjunto variável de propriedades. No exemplo, cada propriedade representa um quarto do hotel, e o valor associado a cada propriedade é o nome do hóspede que está ocupando o quarto.