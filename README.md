# FORMA — repozytorium testowe

Kopia FORMA do niezależnego sprawdzania zmian. Stare repozytorium pozostaje bez zmian.

## Zmiany 18.7.1

- Osobne klucze localStorage, IndexedDB i cache PWA, także w Studio i test_index.
- Widoczne oznaczenie testów i stan połączenia.
- Nawigacja do Studio nie nadpisuje kopii głównej aplikacji w cache offline.
- Odczyt null oraz błędnego typu danych używa wartości domyślnej bez zmiany zapisu.
- Bezpieczne wyświetlanie notatki w szybkim formularzu.
- Powiększanie na telefonie, widoczny fokus klawiatury i ograniczenie animacji.

Dane starej aplikacji nie są automatycznie przenoszone. Użyj jej eksportu i importu w kopii testowej. Nie importuj danych prywatnych do repozytorium Git — import działa w przeglądarce.

Testy: `node tests/regression.cjs`. Obejmują składnię wszystkich skryptów, odczyt danych i działanie cache. Testy automatyczne nie zastępują odbioru całego interfejsu na telefonie.
