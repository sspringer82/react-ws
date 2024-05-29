# Löschen von Datensätzen

1. erzeuge eine Funktion `async removeBook(id: string): Promise<void>` in der Datei book.api.ts
2. Füge in jede Zeile der List-Komponente einen Button ein
3. Beim Betätigen des Buttons `onClick` wird der Datensatz gelöscht
   1. removeBook ausführen
   2. State aktualisieren und den gelöschten Datensatz entfernen

```ts
fetch('/api/books/' + id, {
  method: 'DELETE'
})
```

```ts
setState((prevState) => {
  const filteredState = prevState.filter(b => b.id !== id);
  return filteredState;
})
```

Bonus:
Fehlermeldung, wenn Löschen nicht erfolgreich war (z.B. Tippfehler im Pfad)