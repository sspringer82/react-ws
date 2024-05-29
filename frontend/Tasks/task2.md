# Listendarstellung

Definiere ein Array aus Book-Objekten

```ts
type Book = {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  pages: number;
  price: number;
  rating: number;
};
```

Zeige die Book-Objekte in der List-Komponente an.

1. Definiere einen lokalen State mit `useState`, nutze ein leeres Array als Initialwert (`useState<Book[]>([])`)
2. Wenn noch keine Bücher vorhanden sind, zeige die Info an: Keine Daten vorhanden
3. Nach 3 Sekunden sollen die Bücher in den State geladen werden (useEffect + setTimeout)
4. Zeige eine Tabelle mit Titel und Autor an