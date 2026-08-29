# Jet Set Willy – mit Level-Editor

Eine Hommage an den ZX-Spectrum-Klassiker als einzelne HTML-Datei. Einfach `index.html` im Browser öffnen – keine Installation, kein Server nötig.

**Online spielen:** https://choplifter.github.io/jetsetwilly/ – auch auf dem Handy: Auf Touch-Geräten erscheinen automatisch On-Screen-Tasten (◀ ▶ laufen, ● springen, ▲▼ Lianen klettern, ⏎/ESC Menü).

**Als App aufs Handy:** Die Seite ist eine PWA – im Browser-Menü „Zum Startbildschirm hinzufügen" wählen, dann startet das Spiel mit eigenem Icon im Vollbild (Querformat) und läuft dank Service Worker auch offline. Alternativ gibt es den ⛶-Vollbild-Knopf direkt auf der Seite; im Hochformat erinnert ein Hinweis ans Querhalten.

## Die Geschichte

Willy hat die Party des Jahrhunderts gefeiert – überall im Herrenhaus liegen Flaschen herum. Die Oma lässt ihn erst ins Schlafzimmer, wenn **alle Flaschen** eingesammelt sind. Dann darf Willy endlich ins Bett.

## Titelbild & Musik

- Titelscreen mit Laufschrift, Sprite-Parade und **Mondscheinsonate** (Beethoven, gemeinfrei – wie im Original)
- Im Spiel läuft **„In der Halle des Bergkönigs"** (Grieg, gemeinfrei) als Beeper-Musik. Die In-Game-Melodie des Originals ist noch urheberrechtlich geschützt und wurde deshalb ersetzt.
- Beeper-Soundeffekte im Original-Stil: das Sprung-„Jaulen" folgt der Sprungkurve, dazu Sammel-, Todes- und Fanfaren-Sounds
- `M` bzw. der ♫-Knopf schaltet die Musik um, 🔊 die Soundeffekte

## Spielen

- **← / →** oder **A / D**: laufen
- **Leertaste / ↑ / W**: springen
- **Tab**: Spiel ↔ Editor · **Esc**: zurück · **Enter**: Neustart
- Tödlich: Wächter, Stacheln, tiefe Stürze, aus der Welt fallen
- Bröckelböden zerfallen, Förderbänder schieben

## Level-Editor

- **Linksklick** malen, **Rechtsklick** löschen; Werkzeuge per Taste **1–9, 0, R, O, B, D, F, P, L, Q, E, V, J**
- Werkzeuge: Kacheln (inkl. Strahl, MM-Bänder, Schwundboden), Flasche, Wächter (↔/↕/↓), **Liane**, **Oma**, **Bett**, **Portal**, **Deko**, Startpunkt
- **21 Wächter-Sprites**: Säge, Mönch, Pinguin, Zylindermann, Geist, Fass, Hase, fliegendes Schwein, Skylab, Spinne, Fledermaus, Roboter, Vogel, Totenkopf, Känguru, Seehund (mit Ball), mutiertes Telefon, Krabbe, **Ritter**, **Drache**, **rotierendes Schwert**
- **Pfeile (N)**: tödliche Querschläger im JSW-Stil – schießen periodisch mit Warnton über den Bildschirm (schmale Trefferzone, nur der Schaft); Platzierung links = Flug nach rechts, rechts = nach links
- **Förderbänder** mit den typischen zwei gegenläufig laufenden Kettenreihen; der **Sumpf** (Bröckelboden) hat jetzt Modder-Textur mit ausfransender Abbruchkante
- **19 Deko-Typen** (reine Kulisse): Badewanne, Klo, Waschbecken, Tisch, Stuhl, Kronleuchter, Bild, Fenster, Standuhr, Weinregal, Herd, Pflanze, Schornstein, **Kamin (mit Feuer)**, **Bücherregal**, **Spiegel**, **Teppich**, **Ritterrüstung**, **Stehlampe**
- Welt = 8×4 Räume; Wände an den Rändern öffnen, damit Willy die Räume wechseln kann
- Die Oma blockiert als Türsteherin, bis alle Flaschen der Welt gesammelt sind; das Bett ist das Spielziel (gibt es kein Bett, gewinnt man mit der letzten Flasche)

## Das Herrenhaus (Standard-Level)

29 Räume, 69 Flaschen. Wie im Original startet Willy im **Badezimmer**:

```
Über den Dächern — Auf dem Dach       — Der Dachboden     — Unterm Dach      — Der Albtraum-Raum — Der Wächterturm  — Die Baumkrone   — Quirkafleeg-Galerie*
|                  |                    |                                                          |                  |
Die Orangerie    — Der Treppenabsatz  — Das Badezimmer    — Das Schlafzimmer   Der Rittersaal      Die Bibliothek   — Der Baumstamm   — Das Schwimmbecken
                   |                    |                                      |                   |                  |
Ballsaal West    — Ballsaal Ost       — Die Eingangshalle — Die Küche        — Die Speisekammer  — Der Ostflügel      Die Baumwurzeln
                                        |                   |                                      |
Der Stollen      — Die Zentrale Höhle — Der Weinkeller    — Der Kühlraum     — Der Maschinenraum   Die Schatzkammer
```

\* Original-Vorbild: „We Must Perform a Quirkafleeg"

Besonderheiten einzelner Räume:

- **Das Schlafzimmer**: Oma + Bett – das Spielziel
- **Die Schatzkammer**: Hebel-Rätsel – ein Ritter bewacht drei Flaschen hinter einem Gitter
- **Der Stollen** / **Die Zentrale Höhle**: Mine mit Manic-Miner-Luftvorrat; per Portal mit **Ballsaal West** verbunden
- **Der Albtraum-Raum**: `nightmare`-Flag – Willy erscheint dort als fliegendes Schwein
- **Der Baumstamm**: zwei parallele Lianen als Schacht-Abkürzung zwischen Baumkrone und Baumwurzeln
- Der neue Anbau im Osten (Albtraum-Raum, Wächterturm, die drei Baum-Räume, Schwimmbecken, Quirkafleeg-Galerie) ist über **Unterm Dach** und die **Bibliothek** erreichbar – im Stil der Originalkarte (Nightmare Room, Watch Tower, Tree Top/MegaTrunk, Swimming Pool)
- **Der Maschinenraum** (Emergency Generator) hängt am **Kühlraum** im Keller

## Treppen & Rätsel

- **Treppen (T)**: Steinstufen, die Willy beim Laufen automatisch hinaufsteigt – kein Springen nötig. Große Treppenaufgänge im Rittersaal und Ostflügel.
- **Hebel & Gitter (U / I)**: Ein berührter Hebel öffnet alle Gittertüren seines Raums (einmal pro Partie). In der Schatzkammer bewacht ein Ritter hinter Gittern drei Flaschen – der Hebel sitzt am anderen Ende des Raums, und das geöffnete Gitter lässt auch den Ritter frei …

## Globale Highscores (für alle Spieler)

Es gibt genau eine Ruhmeshalle – die weltweite aus der Datenbank („★ RUHMESHALLE ★" im Titelbild-Wechsel). Qualifizierte Ergebnisse (globale Top 8) werden nach der Namenseingabe automatisch dorthin gemeldet. Als Speicher dient ein kostenloses [Supabase](https://supabase.com)-Projekt:

1. Auf supabase.com ein kostenloses Projekt anlegen
2. Im SQL-Editor einmal ausführen:

```sql
create table public.highscores (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 8),
  score int not null check (score between 1 and 100000),
  created_at timestamptz not null default now()
);
alter table public.highscores enable row level security;
create policy "lesen" on public.highscores for select using (true);
create policy "eintragen" on public.highscores for insert with check (true);
```

3. In `index.html` bei `const HS_API` die Projekt-URL und den „anon public"-Key eintragen (Project Settings → API)

Ohne Konfiguration zeigt die Ruhmeshalle „nicht konfiguriert". Hinweis: Wie bei jedem rein clientseitigen Spiel sind eingesendete Punktzahlen technisch fälschbar – für ein Hobby-Projekt üblich.

## Highscores & Punkte

- Flasche = 100 Punkte, Portal-Sprung = 50, Sieg = 1000 + 500 je Restleben
- Nach Game Over oder Sieg: Wer die globalen Top 8 erreicht, bekommt die **Namenseingabe** (bis 8 Zeichen, tippen + Enter) wie am Spectrum
- Die **Ruhmeshalle** (weltweite Top 8) erscheint abwechselnd mit der Sprite-Parade auf dem Titelbild

## Lianen (JSW-Seile)

Schwingende grüne Seile: Berühren = festhalten, **↑/↓** = klettern, **Sprungtaste** = mit Schwung abspringen. Im Editor mit Werkzeug **Liane (J)** am Ankerpunkt platzieren (nochmal klicken = entfernen). Standard-Level: Eingangshalle und Unterm Dach.

## Manic-Miner-Elemente

- **Luftvorrat**: In markierten Räumen (Mine) läuft eine LUFT-Leiste ab – leer = Tod. Pro Raum im Editor zuschaltbar.
- **Sonnenstrahl**: Kachel-Typ, der den Luftvorrat vierfach schnell absaugt, solange Willy im Strahl steht.
- **Skylab-Wächter** (Wächter↓): stürzen herab, zerschellen am Boden und tauchen seitlich versetzt wieder auf.
- **Spinne am Faden**: Wächter-Sprite, das bei senkrechten Wächtern einen Faden zur Decke zeichnet.
- **Portale**: blinken, sobald alle Flaschen des jeweiligen Raums gesammelt sind, und teleportieren dann paarweise (Stollen ↔ Ballsaal West im Standard-Level).
- **Game-Over-Stiefel**: senkt sich nach dem letzten Leben auf Willy herab.

Senkrechte Verbindungen laufen durch Lücken in Decke/Boden (hochspringen bzw. hinunterfallen – unter jedem Schacht wartet eine Plattform). Alle Sprünge sind auf Sprunghöhe (2 Kacheln) und Sprungweite (max. 3 Kacheln Lücke) ausgelegt.

## Eigene Level ins HTML übernehmen

Mit dem Editor gebaute Welten lassen sich als **eingebautes Standard-Level** in die `index.html` übernehmen:

1. Im Editor unter „Meine Level" auf **„⬇ Quelltext"** klicken → lädt `default-rooms.txt` (der komplette `DEFAULT_ROOMS`-Block im Quellcode-Format)
2. Im Projektordner ausführen: `node apply-level.mjs default-rooms.txt`
3. Das Skript validiert alle Kartenzeilen, ersetzt den Block zwischen den Markern in `index.html` und erhöht `DEFAULT_REV` automatisch – dann committen/pushen

## Speichern & Teilen

- Automatisches Speichern im Browser (localStorage)
- **Export/Import** als JSON-Datei
- **Standard-Level** lädt das 29-Raum-Herrenhaus neu; unveränderte Level älterer Versionen werden beim Start automatisch ersetzt

## Hinweis zu den Originaldaten

Sprites, Level und Musik sind eigene Nachempfindungen im Stil des Originals – es wurden keine Original-Spieldaten (Grafiken, Leveldaten, geschützte Melodien) übernommen.
