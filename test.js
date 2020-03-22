
var axios = require('axios');

// Paste addresses from spreadsheet here
var addresses = `
Moltkestr. 90\t76133\tKarlsruhe
Im Neuenheimer Feld 583\t69120\tHeidelberg
Keplerstr. 32\t70174\tStuttgart
Friedrich-Ebert-Str. 107\t68167\tMannheim
Otfried-Müller-Straße 4/1\t72076\tTübingen
Helmholtzstr. 10\t89081\tUlm
Hugstetter Str. 55\t79106\tFreiburg
Auerbachstr. 100\t70376\tStuttgart
Hans-Böckler-Straße 2a\t69115\tHeidelberg
Heinrich-von-Stephan-Str. 5\t68161\tMannheim
Herzog-Heinrich-Str. 4\t80336\tMünchen
Marchioninistraße 15d EG\t81375\tMünchen
Heimerichstr. 57\t90419\tNürnberg
Pfannenschmiedsgasse 5\t90402\tNürnberg
Philippine-Welser-Straße 8\t86150\tAugsburg
Spinnereistr. 5b\t95445\tBayreuth
Hallstr. 9\t90762\tFürth
Rathausplatz 11\t85049\tIngolstadt
Dachauer Straße 70\t80335\tMünchen
Aufseßplatz 21\t90459\tNürnberg
Hildegard-vonBingen-Str. 1\t93053\tRegensburg
Stenglinstr. 2\t86156\tAugsburg
Hoher-Kreuz-Weg 7\t93055\tRegensburg
Virchowstr. 22\t97072\tWürzburg
Oberdürrbacher Straße 6\t97080\tWürzburg
Schuhmannstr.22(Erdgeschoss)\t10117\tBerlin
Axel-Springer-Straße 42\t10969\tBerlin
Wilmersdorfer Straße 54\t10627\tBerlin
Peter-Weiss-Gasse 1\t12627\tBerlin
Berliner Straße 25\t13507\tBerlin 
Badstraße 4a\t13357\tBerlin 
Landsberger Allee 117 \t10407\tBerlin
Havemannstraße 12b\t12689\tBerlin 
Fehrbelliner Str. 38, F-Haus\t16816\tNeuruppin
Heilbronner Str. 1, Haus 4\t15230\tFrankfurt/Oder
Charlottenstr. 72, Eingang Hebbelstr. 1, Haus I\t14467\tPotsdam
Charlottenstr. 72, Eingang Hebbelstr. 1, Haus I\t14467\tPotsdam
Thiemstraße 105\t03050\tCottbus
Thiemstraße 105\t03050\tCottbus
Kirchhofstraße 1-2\t14776\tBrandenburg an der Havel
Komplex "Der Oderturm" | Karl-Marx-Str. 2\t15230\tFrankfurt/Oder
Am "Stern-Center" | Nuthestraße 1\t14480\tPotsdam
Johann-Carl-Sybel-Str. 1\t14776\tBrandenburg an der Havel
An der Weide 27-29\t20195\tBremen
Friedrich-Karl-Straße 22a\t28205\tBremen
Postbrookstraße 103\t27574\tBremen
\t\tBremen
Martinistraße 52\t20251\tHamburg
Ottenser Hauptstr. 10\t22765\tHamburg
Langenhorner Markt 5\t22415\tHamburg
Quarree 2\t22041\tHamburg
Lüneburger Str. 25\t21073\tHamburg
Baldingerstraße\t35043\tMarburg
Langhansstraße 7\t35392\tGießen
Otto-Behaghel Strasse 27\t35394\tGießen
Sandhofstraße 1\t60528\tFrankfurt
Stiftstraße 9-17\t60313\tFrankfurt
\t64283\tDarmstadt
Bahnhofstr. 96 – 98\t35390\tGießen
Untere Königsstraße 86\t34117\tKassel 
Mönchebergstraße 57\t34125\tKassel
Wismarsche Straße 298\t19055\tSchwerin
Robert-Koch-Straße 10\t18059\tRostock
Deutsche-Med-Platz 2\t18057\tRostock
Friedrichstraße 18\t19055\tSchwerin
Ärztehaus, Heinrich-Mann-Straße 64\t18435\tStralsund
An der Marienkirche 4\t17033\tNeubrandenburg 
Ferdinand-Sauerbruch-Str\t17475\tGreifswald
Carl-Neuberg-Straße 1\t30625\tHannover
Schillerstraße 23\t30159\tHannover
Brandemburger Straße 21\t26133\tOldenburg
\t\t
Sauerbruchstr. 7\t38440\tWolfsburg
Postbrookstraße 103\t75742\tBremerhaven 
Güterstraße 30\t26382\tWilhelmshaven
Kollegienwall 3-4\t49074\tOsnabrück
Weender Landstr. 1\t37073\tGöttingen
Kettwiger Str. 5\t45127\tEssen
Obertorwall 22\t33602\tBielefeld
Universitätsstraße\t33615\tBielefeld
Brunnenallee 35 \t32257\tBünde
Schwarzenmoorstraße 70\t32049\tHerford
Georgstraße 11\t32545\tBad Oeyenhausen
Am Rathaus 2\t32423\tMinden
Hohenstaufenring 62\t50674\tKöln
Peterstraße 20-24\t52062\tAachen
Venusberg-Campus 1, Gebäude 43\t53127\tBonn
Poststraße 19\t5311\tBonn
Klarissengasse 9\t48143\tMünster
Alexanderstraße 6-10\t44137\tDortmund
Moorenstraße 5\t40225\tDüsseldorf
Westring 2\t59065\tHamm
Kampenstr. 51\t57072\tSiegen
Königsstraße 53\t47051\tDuisburg-Mitte
Centroallee 271\t46047\tOberhausen
Bahnhofstraße 55-65\t45879\tGelsenkirchen
Erholungsstraße 19\t42103\tWuppertal
Löhrstraße 23\t56068\tKoblenz
Augustusplatz (Gebäude 905)\t55131\tMainz
Burgweg 5-7\t55543\tBad Kreuznach
Hellmut-Hartert-Str. 1\t67655\tKaiserslautern
Theodor-Heuss-Str. 128\t66119\tSaarbrücken
Ringstraße 52\t66421\tHomburg/Saar
Johannisallee 32, Haus 8\t4103\tLeipzig
Blasewitzer Str. 68/70\t1307\tDresden
Zeisigwaldstraße 103\t9130\tChemnitz
Rosenhof Arkaden | Markt 5\t9111\tChemnitz
Stadthaus | Lommatzscher Straße 82\t1139\tDresden
Rosenstraße 30\t1067\tDresden
Fetscherplatz 2a\t1307\tDresden
Bahnhofstraße 40-42\t9599\tFreiberg
CityCenter Frauentor | An der Frauenkirche 12\t2826\tGörlitz
Käthe-Kollwitz-Straße 6\t4668\tGrimma
Markt 9\t4109\t Leipzig
Lützowstraße 11\t4155\t Leipzig
Karl-Liebknecht-Straße 153-155\t4277\tLeipzig
Klostermarkt | Oberer Steinweg 10\t8523\tPlauen
Zwickau Arcaden | Marienstraße 3/1\t8056\tZwickau
\t\t
\t\t
\t\t
\t\t
Ernst-Grube-Straße 40\t6120\tHalle an der Saale
Leipziger Str. 44\t39120\tMagdeburg
Rote-Kreuz-Weg 5\t24837\tschleswig
Marienhölzungsweg 2\t24939\tFlensburg
Michaelisstraße 5\t24105\tKiel
Citti-Park, Mühlendamm 1\t24113\tKiel
Ratzeburger Allee 160\t23562\tLübeck
Citti-Park, Herrenholz 14\t23556\tLübeck
Sandstraße 1\t23552\tLübeck
Robert-Koch-Straße 2\t25524\tItzehoe
\t23534\tNeumünster
Albert-Schweitzer-Straße 15\t98527\tSuhl
Mühlhäuser Straße 27\t99817\tEisenach
Wetzlarer Platz 1\t98693\tIlmenau
Mainzer Straße 36-37\t99089\tErfurt
Lachsgasse 3\t99084\tErfurt
Breitscheidstraße 1-5\t´07545\tGera
Oststraße 51\t99867\tGotha
Goethestraße 3a\t´07743\tJena
Steubenstraße 15\t99423\tWeimar
`;

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function geocode() {
  asyncForEach(addresses.split('\n'), async line => {
    if (line.length < 3) {
      console.log('');
      return;
    }

    var response =
      await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(line) + '&key=AIzaSyDwjSllCXFltaD1GG6z0svfURl1cHaSzv8');
    var location = response.data.results[0].geometry.location;

    console.log(("'" + location.lat + "\t'" + location.lng + "")); //.replace(/\./g, ','));
  });
}

geocode();
