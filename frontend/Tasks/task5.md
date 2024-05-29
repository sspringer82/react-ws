# Kindkomponenten

Lagere die Darstellung einer Tabellenzeile der `List`-Komponente in eine neue Komponente `ListItem` aus.

Übergib den darzustellenden Book-Datensatz als `book`-Prop.

Übergib die Lösch-Funktion über die `onDelete`-Prop.

```ts
type Props = {
  book: Book;
  onDelete: (id: string) => void;
}
```