# Jet Set Willy – mit Level-Editor

Eine Hommage an den ZX-Spectrum-Klassiker als einzelne HTML-Datei. Einfach `index.html` im Browser öffnen – keine Installation, kein Server nötig.

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
- **18 Wächter-Sprites**: Säge, Mönch, Pinguin, Zylindermann, Geist, Fass, Hase, fliegendes Schwein, Skylab, Spinne, Fledermaus, Roboter, Vogel, Totenkopf, Känguru, Seehund (mit Ball), mutiertes Telefon, Krabbe
- **Pfeile (N)**: tödliche Querschläger im JSW-Stil – schießen periodisch mit Warnton über den Bildschirm (schmale Trefferzone, nur der Schaft); Platzierung links = Flug nach rechts, rechts = nach links
- **Förderbänder** mit den typischen zwei gegenläufig laufenden Kettenreihen; der **Sumpf** (Bröckelboden) hat jetzt Modder-Textur mit ausfransender Abbruchkante
- **19 Deko-Typen** (reine Kulisse): Badewanne, Klo, Waschbecken, Tisch, Stuhl, Kronleuchter, Bild, Fenster, Standuhr, Weinregal, Herd, Pflanze, Schornstein, **Kamin (mit Feuer)**, **Bücherregal**, **Spiegel**, **Teppich**, **Ritterrüstung**, **Stehlampe**
- Welt = 8×4 Räume; Wände an den Rändern öffnen, damit Willy die Räume wechseln kann
- Die Oma blockiert als Türsteherin, bis alle Flaschen der Welt gesammelt sind; das Bett ist das Spielziel (gibt es kein Bett, gewinnt man mit der letzten Flasche)

## Das Herrenhaus (Standard-Level)

15 Räume, 33 Flaschen. Wie im Original startet Willy im **Badezimmer**:

```
             Auf dem Dach — Der Dachboden — Unterm Dach
                  |              |
             Treppenabsatz — Das Badezimmer — Das Schlafzimmer (Oma + Bett)
                  |              |
Ballsaal West — Ballsaal Ost — Eingangshalle — Die Küche — Die Speisekammer
      ↑                          |              |
      ↑ (Portal)            Der Weinkeller — Der Kühlraum
      ↑                          |
Der Stollen — Die Zentrale Höhle (Mine, Manic-Miner-Regeln)
```

## Highscores & Punkte

- Flasche = 100 Punkte, Portal-Sprung = 50, Sieg = 1000 + 500 je Restleben
- Nach Game Over oder Sieg: Bei ausreichender Punktzahl folgt die **Namenseingabe** (bis 8 Zeichen, tippen + Enter) wie am Spectrum
- Die **Ruhmeshalle** (Top 8, im Browser gespeichert) erscheint abwechselnd mit der Sprite-Parade auf dem Titelbild

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

## Speichern & Teilen

- Automatisches Speichern im Browser (localStorage)
- **Export/Import** als JSON-Datei
- **Standard-Level** lädt das 13-Raum-Herrenhaus neu; unveränderte Level älterer Versionen werden beim Start automatisch ersetzt

## Hinweis zu den Originaldaten

Sprites, Level und Musik sind eigene Nachempfindungen im Stil des Originals – es wurden keine Original-Spieldaten (Grafiken, Leveldaten, geschützte Melodien) übernommen.
