# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Wojtek Stokowski i Antoni Ferenc
**Klasa:** 3B Technikum
**Data:** 19.03.2026

---
## 1. Analiza wymagań klienta
Aplikacja powinna posiadać następujące funkcjonalności:

1. Możliwość wyboru rodzaju sprzętu wodnego (kajak, rower wodny lub żaglówka typu Omega).

2. Możliwość określenia liczby godzin wynajmu przy pomocy suwaka.

3. Możliwość dodania opcji dodatkowych (kapok dla dziecka, instruktor).

4. Wyświetlanie aktualnej ceny wynajmu w czasie rzeczywistym (przesunięcie suwaka zmienia cenę na bieżąco).

5. Wyświetlenie ostrzeżenia przy wyborze żaglówki (wymagany patent).

6. Możliwość podania imienia klienta.

7. Wybór metody płatności (karta lub BLIK),

8. Akceptacja regulaminu.

9. Przycisk rezerwacji aktywny tylko gdy wszystkie wymagane dane są podane.

---
## 2. Architektura rozwiązania
Komponenty (components)
Zawierają elementy interfejsu użytkownika.
Najważniejszy komponent to:
ReservationCalculator.tsx
Odpowiada za:
- wyświetlenie formularza
- obsługę zdarzeń użytkownika
- zarządzanie stanem aplikacji
- wyświetlanie ceny

Logika aplikacji (Logic)
Zawiera funkcje odpowiedzialne za obliczenia.
CalculatorLogic.ts
Zawiera funkcję:
calculatePrice()
która oblicza cenę wynajmu na podstawie:
- wybranego sprzętu
- liczby godzin
- opcji dodatkowych

Dzięki temu logika biznesowa jest oddzielona od interfejsu użytkownika, co jest dobrą praktyką programistyczną.

Style (css)
Plik:
ReservationCalculator.css
zawiera stylizację formularza, przycisków oraz layoutu aplikacji.

---
## 3. Zarządzanie stanem (`useState`)
| Nazwa zmiennej stanu | Typ danych    | Za co odpowiada?                               |
| -------------------- | ------------- | ---------------------------------------------- |
| hours                | number        | przechowuje liczbę godzin wynajmu              |
| name                 | string        | przechowuje imię klienta                       |
| equipment            | EquipmentType | przechowuje wybrany sprzęt wodny               |
| childVest            | boolean       | informuje czy dodano kapok dla dziecka         |
| instructor           | boolean       | informuje czy wybrano instruktora              |
| payment              | string        | przechowuje wybraną metodę płatności           |
| acceptedRules        | boolean       | sprawdza czy użytkownik zaakceptował regulamin |

---
## 4. Algorytm obliczania ceny
Obliczanie ceny odbywa się w pliku:
CalculatorLogic.ts
w funkcji:
calculatePrice()

Cena bazowa:
Najpierw ustalana jest cena za godzinę w zależności od sprzętu:
kajak = 20 zł/h
rower wodny = 35 zł/h
omega = 150 zł/h

Wpływ godzin:
Cena podstawowa jest obliczana według wzoru:
cena = cena_za_godzine × liczba_godzin

Opcje dodatkowe:
Następnie do ceny doliczane są dodatki:
- kapok dla dziecka +5 zł
- instruktor +50 zł × liczba godzin
- 
Ostateczny wzór:

---
## 5. Layout i Stylizacja (`Flexbox`)
Wykorzystane właściwości:

1. display: flex
umożliwia używanie systemu Flexbox do rozmieszczania elementów.

2. flex-direction: column
ustawia elementy formularza jeden pod drugim w kolumnie.

3. justify-content: center
centruje formularz w poziomie.

4. align-items: center
ustawia formularz na środku w pionie.

---
## 6. Wnioski z realizacji projektu (SDLC)
* **Co było najtrudniejsze?** Poprawne zarządzanie stanem w React oraz powiązanie formularza z dynamicznym obliczaniem ceny.
* **Czego nowego się nauczyliście?**
- pracy z React i hookiem useState
- podziału projektu na komponenty i logikę
- pisania funkcji w TypeScript
- stylowania aplikacji za pomocą Flexbox
- tworzenia interaktywnych formularzy
  
* **Co byście zmienili, gdybyście mieli więcej czasu?**
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
