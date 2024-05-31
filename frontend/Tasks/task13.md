# Testing

1. Installation `npm install -D vitest jsdom @testing-library/jest-dom @testing-library/react @vitest/coverage-v8 msw`
2. Test setup in vite.config.ts
3. Anlegen der Datei test/setup.ts
4. test/setup.ts in die tsconfig.js inkludieren
5. package.json: scripts > test
6. erzeuge einen einfachen Test und führe ihn aus. wie den button test

Teil 2:
Schreibe einen Test für die ListItem-Komponente
1. Stelle sicher, dass der Titel und der Autor korrekt gerendert werden
2. Prüfe, ob der Delete-Button richtig funktioniert

Nutze die <MemoryRouter>-Komponente, um Fehler durch die Link-Abhängigkeit zu umgehen.