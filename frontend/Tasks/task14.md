# Server Mock

Schreibe einen Test, der überprüft, ob die Liste korrekt gerendert wird.

Bonus:
- überprüfe, ob die Liste auch korrekt anzeigt, wenn keine Daten übermittelt werden (leeres Array)
- überprüfe, ob die Liste auch korrekt funktioniert, wenn der Server einen Fehler meldet.

```ts
return new HttpResponse(null, {
  status: 404,
  statusText: 'Out Of Apples',
})
```

- überpüfe, ob der Filter korrekt funktioniert