import React from 'react';
import { Card, Accordion, Button } from "react-bootstrap";

class FrequentlyAskedQuestions extends React.Component {
  render() {
    return (
      <div className={"text-content"}>
        <h1>Häufig gestellte Fragen</h1>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="0">
                Warum sollte ich Blut spenden?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Blutspenden sind nicht nur kostbar, sondern auch überlebenswichtig. Täglich werden mehrere Tausend Blutspenden benötigt, um das Leben zahlreicher Menschen zu retten.
                Dabei werden alle Blutgruppen benötigt und dankend empfangen. Denn die passende Blutgruppe ist wichtig, damit die Spende empfangen werden kann.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="4">
                Warum sollte ich diese Website benutzen, um meinen Spendentermin zu planen?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  Diese Website entstand im Rahmen des WirvsVirus-HackAthons der Bundesregierung, bei der Lösungen im Angesicht von COVID-19 gesucht wurden.
                </p>

                <p>
                  Wir haben es uns zur Aufgabe gemacht, Menschen in dieser schweren Zeit zum Blutspenden zu motivieren und gleichzeitig die Wartezeiten in den Blutspendezentren zu vermindern und so das Infektionsrisiko vor Ort zu minimieren.
                </p>

                <p>
                  Dies wollen wir durch eine verbesserte Koordination der Spendentermine erreichen. So können die Spender:innen besser und gleichmäßiger auf die Spendenlokale verteilt werden. Des Weiteren kann die Wartezeit abgeschätzt und verringert werden. So werden Kontakte und Infektionsrisiken ergänzend zu den Maßnahmen vor Ort minimiert.
                </p>

              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="5">
                Wer kann Blut spenden?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  Jeder gesunde Mensch kann ab dem 18. Geburtstag bis zum 73. Geburtstag Blut spenden. Ab dem 68. Geburtstag muss eine ärztliche Einschätzung vorgelegt werden, um Risiken zu vermindern. Erstspender:innen werden bis zum 64. Lebensjahr aufgenommen, ab dem 60. Lebensjahr ist auch hier eine ärztliche Beurteilung nötig.
                </p>

                <p>
                  Zudem ist es nötig, vor Ort einen medizinischen Fragebogen auszufüllen, mit dem beispielsweise Infektionserkrankungen und andere Risiken für die Spendenempfänger:innen ausgeschlossen werden können. Es folgt dann eine medizinische Untersuchung vor Ort, bei der weitere Risiken ausgeschlossen werden können (bsp.: HIV-Testung).
                </p>

                <p>
                  Spender:innen müssen über 50kg wiegen und vor der Spende ausreichend gegessen und getrunken haben. Zudem sind Spenden nur alle 55 Tage möglich.
                </p>

                <p>Eine vorherige Untersuchung durch den Hausarzt ist nicht nötig.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="6">
                Wem hilft meine Blutspende?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                Das meiste Blut – etwa 19 Prozent – kommt bei der Krebstherapie zum Einsatz. 16 Prozent werden bei Herzerkrankungen eingesetzt, weitere 16 Prozent bei Magen- und Darmerkrankungen. 12 Prozent aller Blutprodukte helfen bei Verletzungen aus Unfällen.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as="div" eventKey="7">
                Welche unterschiedlichen Spendeformen gibt es und worin unterscheiden sie sich?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <p>
                Die grundlegenden Spendenarten sind Vollblutspende, Thrombozytenspende, Plasmaspende und Stammzellspenden.
                </p>

                <p>

                  Bei einer Vollblutspende werden 500ml Blut abgenommen und in die einzelnen Komponenten aufgetrennt, dadurch können zielgerichtet Päparate nach Bedarf eingesetzt werden. Dies Spendendauer beträgt ca 10 min und es darf nur alle 55 Tage gespendet werden. Die meisten Vollblutspenden werden von Krebspatienten:innen benötigt, aber auch für Herz- und Magen-Darm-Erkrankungen, sowie bei Unfällen.
                </p>

                <p>

                  Eine Thrombozytenspende wird vor allem von Patient:innen mit Gerinnungsstörungen benötigt. Aber auch Krebspatient:innen unter einer schweren Chemotherapie benötigen Thrombozyten, sowie auch Patient:innen nach einer Knochenmarkstransplantation oder einer schweren Sepsis.
                  Die Thrombozyten werden durch Zellseparatoren vom Rest des Blutes getrennt. Alle Blustbestandteile außer den Thrombozyten werden dem Blutkreislauf der Spender:innen wieder zugeführt.
                  Thrombozytenspenden dürfen nur bei ausreichender Anzahl von Thrombozyten durchgeführt werden. Dazu müssen im Voraus Tests durchgeführt werden.
                  Bei der Thrombozytenspende wird Blut aus einer Armvene unter Zusatz eines gerinnungshemmenden Mittels entnommen und im Zellseparator durch Zentrifugation aufgetrennt. Ein Teil der Blutplättchen mit Blutflüssigkeit (Plasma) wird entfernt, der Rest (rote Zellen und Plasma) wird im Wechsel mit der Entnahme wieder über dieselbe Armvene (Ein-Arm-System) oder ständig über eine andere Armvene (Zwei-Arm-System) zurückgegeben. Der Vorgang dauert insgesamt ca. 1 – 1,5 Stunden. Danach kann gegebenenfalls Kochsalzlösung infundiert werden, um den Flüssigkeitshaushalt wiederherzustellen.
                </p>

                <p>
                  Die Plasmaspende verläuft unter Trennung von Blutzellen und Blutplasma. Alle festen Blutbestandteile werden den Spender:innen wieder zugeführt. Die Plasmaspende hilft vor allem Patient:innen, deren Funktion des Blutes durch eine Krankheit, Verletzung oder Verbrennung beeinträchtigt ist. Plasmaspenden werden aber auch bei angeborenen Immunschwächen und Blutgerinnungsstörungen benötigt.
                </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="8">
              Was sollte ich vor der Blutspende beachten?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p>
                Vor der Blutspende sollte ausreichend gegessen und getrunken werden. Das Rauchen von Zigaretten und sehr fettiges Essen können die Qualität des Plasmas beeinträchtigen und sollten vor der Spende vermieden werden.
              </p>

              <p>
                Besonders Erstspender sollten ausreichend Zeit für die Spende mitbringen.
              </p>

              <p>
                Starke körperliche Belastung sollten direkt vor und innerhalb der 24h nach der Spende vermieden werden.
              </p>

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="15">
              Was muss ich zur Blutspende mitbringen?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="15">
            <Card.Body>
              <p>
                Jeder Blutspender muss sich ausweisen. Aus diesem Grund müssen Sie einen gültigen Lichtbildausweis zur Spende mitbringen. Wenn Sie einen Blutspendeausweis haben, bringen Sie bitte auch diesen zur Spende mit.
              </p>

              <p>
                Um das Infektionsrisiko weiter zu verringern, bitten viele Spendenlokale die Spender, ihren eigenen Stift mitzuführen. Haben Sie also gerne einen Stift dabei.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="9">
              Wie lange dauert eine Blutspende?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              Blutspenden dauern meist um die 10 Minuten. Für das Ausfüllen des Fragebogens und das Arztgespräch sollten zusätzlich noch einige Minuten eingeplant werden.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="10">
              Was sollte ich nach der Blutspende beachten?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              Sie sollten nach der Blutspende ausreichend essen und trinken. Bestenfalls planen Sie nach Ihrer Spende eine ausreichende Ruhepause ein.
              Spender:innen, die mit dem Pkw oder Motorrad angereist sind, sollten 30 Min. warten, ehe sie erneut am Straßenverkehr teilnehmen..
              Direkt nach der Spende wird von einem Besuch des Fitnessstudios, starker körperlicher Anstrengung und beispielsweise Saunagängen abgeraten.
              Raucher:innen sollten nicht direkt nach der Spende rauchen, da Nikotin den Kreislauf negativ beeinflussen kann.

            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="11">
              Wie lange dauert es, bis mein Körper das gespendete Blut nachgebildet hat?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <p>
                Der Verlust des abgenommenen Blutvolumens von etwa 500 ml ist schnell wieder ausgeglichen. Die Nachbildung der weißen Blutkörperchen (= Leukozyten), welche für die Abwehr von Krankheitskeimen zuständig sind, geschieht innerhalb weniger Tage. Das Blutplasma wird ebenfalls kurzfristig nachgebildet. Auch die Thrombozyten (= Blutplättchen) brauchen wenige Tage. Die Neubildung der roten Blutkörperchen dauert etwa zwei Monate. Die Leistungsfähigkeit ist während dieser Zeit in der Regel nicht beeinträchtigt. Die vorgeschriebenen Spendeabstände der verschiedenen Spendearten ergeben sich aus den Zeiträumen, die die jeweiligen Blutbestandteile für ihre Neubildung benötigen.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="12">
              Darf ich mit Grippe oder Erkältung Blut spenden?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <p>
                Prinzipiell sind während eines Infekts keine Blutspenden möglich.
              </p>

              <p>
                Nach Infekten mit leichten Symptomen darf 7 Tage nach Abklingen gespendet werden. Wenn sogar eine Antibiotikaeinnahme nötig ist, darf erst 4 Wochen nach Ende der Medikation gespendet werden.
              </p>

              <p>
                In Anbetracht der derzeitigen Situation möchten wir jedoch Menschen mit Infektsymptomen und Symptomen wie Halsschmerzen, trocknem Husten, Fieber und Schnupfen bitten, sich von jeglichen Einrichtungen und Kontaktstätten fernzuhalten. Dazu zählen auch alle Blutspendezentren. Kontaktieren Sie in diesem Fall bitte telefonisch Ihren Hausarzt und sprechen mit diesem Ihr weiteres Vorgehen ab.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as="div" eventKey="14">
              Ist Blutspenden ungesund?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="14">
            <Card.Body>
              <p>
                Im Blutspendezentrum erhalten Sie vor jeder Spende eine kostenfreie ärztliche Beratung und einen kleinen Checkup Ihres Allgemeinzustandes und einiger Blutwerte. Auch Ihre Blutspende wird auf einige Parameter untersucht. Falls sich Ergebnisse auftun, die auf Erkrankungen hinweisen, werden diese Ihnen oder Ihrem Hausarzt mitgeteilt. So können Krankheiten erkannt und damit rechtzeitig behandelt werden.
              </p>

              <p>
                Gesundheitliche Nachteile ergeben sich aus einer Blutspende an gesunden Spendern in der Regel nicht.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion>
      </div>
    );
  }
}

export default FrequentlyAskedQuestions;


