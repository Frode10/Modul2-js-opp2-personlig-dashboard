# 📚 Funksjoner i Boksystemet

Dette boksystemet lar brukeren lagre, vise, filtrere og analysere bøker lokalt i nettleseren ved hjelp av `localStorage`.

## Funksjonalitet

1. **Legg til bok**  
   Brukeren fyller inn tittel, forfatter, sjanger og antall sider. Boken lagres lokalt i nettleseren.

2. **Vis bokliste**  
   Alle lagrede bøker vises i en strukturert oversikt.

3. **Slett bok**  
   Hver bok har en slett-knapp for å fjerne den fra systemet og `localStorage`.

4. **Slett alle bøker**  
   En knapp for å slette hele boklisten på én gang.

5. **Filtrer på sjanger**  
   Dynamisk filtrering av bøker basert på valgt sjanger fra nedtrekksmeny.

6. **Sorter alfabetisk**  
   Sortering av boklisten etter tittel i alfabetisk rekkefølge.

7. **Statistikk (bonus)**  
   Viser total antall sider lest ved hjelp av `reduce()`.

---

> Systemet bruker også moderne JavaScript-funksjoner som `map()`, `filter()`, `sort()`, `reduce()` og `destructuring` for databehandling.
