# Formularhandling

Erzeugt ein Formular mit dem ihr neue Produkte erzeugen könnt.

Schreibt eine Funktion handleChange, mit der Ihr die Änderungen an den Fomularfeldern generisch handeln könnt, damit nicht für jedes Feld ein separater change handler geschrieben werden muss.

Beim Speichern des Formulars, sollen die Werte an den Server gesendet werden und der Benutzer auf die Liste zurückgeleitet werden.

Felder:

- "category" fix auf 2
- "title"
- "price",
- "description"

Es gibt: onClick, onChange, onSubmit

POST http://localhost:3001/products

fetch(URL, {
method: 'POST',
body: data
})
