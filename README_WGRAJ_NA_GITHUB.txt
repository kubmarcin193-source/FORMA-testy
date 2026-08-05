FORMA PRO PWA v18.0

WDROŻENIE NA GITHUB PAGES
1. Rozpakuj ZIP.
2. Nadpisz wszystkie stare pliki aplikacji plikami z tej paczki.
3. Wgraj je bez dodatkowego folderu — index.html ma leżeć bezpośrednio w katalogu publikowanym przez GitHub Pages.
4. Zatwierdź zmiany i poczekaj na zakończenie wdrożenia.
5. Otwórz WERSJA.txt na stronie. Powinien pokazać wersję v18.0.
6. Zamknij aplikację całkowicie i uruchom ją ponownie, aby wymusić nowy cache.

LOGOWANIE
- Nie ma już ekranu ustawiania nowego hasła.
- Przy pierwszym uruchomieniu wpisz ustalone hasło właściciela.
- Jawne hasło nie jest zapisane w plikach. Statyczna aplikacja zawiera weryfikator PBKDF2 potrzebny do lokalnego sprawdzenia hasła.
- Telefon po pierwszym poprawnym logowaniu zostaje zapamiętany.
- Komputer wymaga hasła po uruchomieniu i blokuje aplikację po 5 minutach bezczynności.

TRYB TRENINGOWY
- Powtórzenia i czas maleją z każdą kolejną serią.
- Przyciski zawsze pozostają w kolejności: Poprzednie, Pauza/Wznów, Seria wykonana, Następne, Zakończ.
- Podczas odpoczynku wyświetlane jest następne ćwiczenie wraz ze zdjęciem i celem.
- Timer w górnym pasku parametrów pokazuje czas od rozpoczęcia treningu, z uwzględnieniem pauz.
- Przerwy: 20 sekund między ćwiczeniami, 60 sekund między seriami obwodu, brak przerwy po ostatnim kroku.

DANE
- Zakładka Posiłki została usunięta.
- Niewykonane plany po terminie są usuwane z kalendarza i podsumowania tygodniowego.
- Biblioteka ćwiczeń, zdjęcia centralne, import i eksport ćwiczeń pozostają dostępne.
