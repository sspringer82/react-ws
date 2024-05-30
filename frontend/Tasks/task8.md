# Formularhandling

Implementiere ein Filter-Formular, um die Liste zu filtern.

Das Formular besteht aus einem Eingabefeld und die Liste soll beim submit des Formulars gefiltert werden.

Der filter soll rein zur Anzeige im Frontend dienen.

1. Implementiere das Formular als Controlled Component
2. Implementiere das Formular als Uncontrolled Component
3. Implementiere den Filter so, dass die Tabelle bei jeder Eingabe eines Buchstaben gefiltert wird.

Tipp:

```ts

{books.map(book => ...)}

{books.filter(book => ...).map(book => ...)}
```

`npm install immer`