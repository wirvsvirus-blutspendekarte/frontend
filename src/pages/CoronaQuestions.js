import React from 'react';
import { Card, Accordion, Button } from "react-bootstrap";

class CoronaQuestions extends React.Component {
  render() {
    return (
      <div className={"text-content"}>
        <h1>Corona-Informationen</h1>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="1">
                Was haben Blutspenden mit COVID-19 zu tun?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Da das öffentliche Leben in Zeiten von COVID-19 deutlich eingeschränkt ist, kommen immer weniger Spender:innen in die Blutspendezentralen. Dennoch werden weiterhin täglich tausende Blutspenden benötigt. Viele Menschen sind angewiesen auf aktive Spender:innen und die Kliniken laufen Gefahr, nicht mehr genug Spenden zur Verfügung zu haben. Eine Blutspende zu leisten ist in Zeiten von Corona ein großer Beitrag zum Erhalt des Gesundheitswesens!
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="2">
                Fallen Blutspenden unter das Versammlungsverbot?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Nein! Blutspenden sind zu jeden Zeitpunkt erlaubt und benötigt. Derzeit nimmt die Zahl der Spenden rapide ab. Da Blutkonserven jedoch ein begrenztes Haltbarkeitsdatum haben, steuern wir damit in eine Krise für chronisch Kranke und Verletzte Patient:innen Deutschlandweit.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="3">
                Ist in Zeiten von COVID-19 mit Gefahren zu rechnen, wenn ich Blut spenden gehe?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  Um Sie und Ihre Mitmenschen zu schützen, bitten wir Sie, die Spendenzentren nur zu betreten, wenn Sie folgende Aussagen bestätigen können:
                </p>

                <ul>
                  <li>Ich fühle mich gesund und fit für die Spende.</li>
                  <li>Ich hatte in den letzten vier Wochen keinen Kontakt zu einer nachweislich mit dem Coronavirus infizierten Person.</li>
                  <li>Ich war nicht in einem Coronavirus-Risikogebiet.</li>
                </ul>

                <p>
                  Blutspendetermine unterliegen sehr strengen hygienischen Regularien. Alle ohnehin schon geltenden Zulassungsbestimmungen garantieren einen sehr hohen Schutz für Blutspender:innen und Helfer:innen. Alle potentiellen Spender:innen kommen, wenn sie sich gesund und fit fühlen. Es besteht keine erhöhte Ansteckungsgefahr bei der Blutspende. Es gibt bisher des Weiteren keine Hinweise auf eine Übertragung des Virus über das Blut.
                </p>

                <p>
                  Blutspendelokale haben des Weiteren vorgesorgt, indem Sie nur Spender aufnehmen, die den Checklisten  zum Schutz vor COVID-19 entsprechen. Alle anderen werden aufgefordert zu gehen. Vor der Registrierung erfolgt in vielen Lokalen zudem eine vorsorgliche Temperaturmessung. Zudem kommt es zu verstärkten Hygienischen Maßnahmen in den Spendelokalen. Mitarbeiter:innen, die aus Risikogebieten zurückkehren oder risikoreichen Kontakt hatten, werden nicht eingesetzt.
                </p>

                <p>
                  Am besten bringen Sie Ihren eigenen Stift zum Ausfüllen der Formulare mit!
                </p>

                <p>
                  Wenn Sie Ihren Termin über diese Seite buchen, haben Sie die Möglichkeit, die Auslastung der Lokale zu überprüfen und die Wartezeiten so gering wie möglich zu halten. So reduzieren Sie die Dauer von potentiellen Kontakten und senken das Infektionsrisiko enorm.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
      </div>
    );
  }
}

export default CoronaQuestions;


