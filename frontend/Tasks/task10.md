# Context

Erzeuge einen Context für Books in einer Datei mit dem Namen BooksProvider.tsx

Erzeuge den BooksContext `type ContextType = [Book[], Dispatch<SetStateAction<Book[]>>] | null;`

Erzeuge einen Provider für diesen Context, binde den Context in der App-Komponente ein.

Verwende den Context in der useList-Funktion statt des lokalen States.

Bonus: entkopple das Formular von der Liste (beide liegen in der App-Komponente)