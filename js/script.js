// PART A (CATALEG DINAMIC)

const array_jocs = [
    { titol: "Uncharted: El tesoro de Drake", genere: "Acció i aventura", plataforma: "PlayStation3", preu: 12.39, valoracio: 88, estoc: 37, imatge: "img/uncharted1_portada_mod.png", descripcio: "Nathan Drake emprèn una aventura a la recerca del llegendari tresor El Dorado, acompanyat per Elena Fisher i Victor Sullivan. Combina exploració, tirotejos, plataformes i puzles en una aventura cinematogràfica per diferents llocs del món"}, //joc 1
    { titol: "Uncharted 2: El reino de los ladrones", genere: "Acctió i aventura", plataforma: "PlayStation3", preu: 12.39, valoracio: 96, estoc: 3, imatge: "img/uncharted2_portada_mod.png", descripcio: "Nathan Drake cerca la llegendària ciutat de Shambhala mentre s'enfronta a mercenaris i antics misteris. Combina tirotejos, exploració, plataformes i puzles amb una aventura cinematogràfica."}, //joc 2
    { titol: "Uncharted 3: la traición de Drake", genere: "Acctió i aventura", plataforma: "PlayStation3", preu: 12.39, valoracio: 92, estoc: 26, imatge: "img/uncharted3_portada_mod.png", descripcio: "Nathan Drake i Victor Sullivan viatgen al desert d'Aràbia a la recerca de la llegendària Atlántida de les Sorres. L'aventura combina tirotejos, exploració, plataformes i puzles, amb grans escenaris i seqüències d'acció."}, //joc 3
    { titol: "Uncharted 4: el desenlace del ladrón", genere: "Acctió i aventura", plataforma: "PlayStation4", preu: 16.52, valoracio: 93, estoc: 26, imatge: "img/uncharted4_portada_mod.png", descripcio: "Nathan Drake, ja retirat, torna a l'aventura al costat del seu germà Sam per a trobar un llegendari tresor pirata. La història porta als protagonistes per diferents llocs del món, combinant exploració, tirotejos, plataformes i grans seqüències cinematogràfiques. (Disponible en PC amb el pack: Uncharted: Legacy of Thieves Collection)"}, //joc 4
    { titol: "The Last of Us", genere: "Acctió, aventura, survival horror i sigil", plataforma: "PlayStation3", preu: 12.40, valoracio: 95, estoc: 29, imatge: "img/tlou1_portadaps3_mod.jpg", descripcio: "Joel ha d'escortar a Ellie a través d'uns Estats Units devastats per una pandèmia, enfrontant-se a infectats i altres supervivents. Combina combat, sigil, exploració i supervivència amb una història centrada en la relació entre tots dos personatges."}, //joc 5
    { titol: "The Last of Us Part II", genere: "Acctió, aventura, supervivència i sigil", plataforma: "PlayStation4", preu: 33.05, valoracio: 93, estoc: 0, imatge: "img/tlou2_portada_mod.jpg", descripcio: "Cinc anys després dels esdeveniments del primer joc, Ellie viu en una comunitat de supervivents en Jackson al costat de Joel. Un esdeveniment violent trenca aquesta tranquil·litat i porta a Ellie a emprendre un viatge marcat per la venjança, la supervivència i les seves conseqüències."}, //joc 6
    { titol: "The Last of Us Part I (Remake)", genere: "Acctió, aventura, survival horror i sigil", plataforma: "PlayStation5", preu: 66.11, valoracio: 89, estoc: 10, imatge: "img/tlou1_portadaremake_mod.jpg", descripcio: "Remake complet del The Last of Us original, amb gràfics, animacions, combat i funcions d'accessibilitat renovades. Inclou també l'expansió Left Behind, mantenint la història de Joel i Ellie mentre travessen uns Estats Units postapocalíptics."}, //joc 7
    { titol: "Ghost of Tsushima", genere: "Acctió, aventura, món obert, combat i sigil", plataforma: "PlayStation4", preu: 66.11, valoracio: 83, estoc: 47, imatge: "img/got_portada_mod.jpg", descripcio: "Al Japó del segle XIII, Jin Sakai lluita contra la invasió mongola de l'illa de Tsushima i ha d'adaptar-se per a protegir el seu poble. És una aventura de món obert que combina exploració, combat amb catana, sigil i una història centrada en el codi samurai. (disponible en PC amb la versió: Director's cut)"}, //joc 8
    { titol: "Ghost of Yotei", genere: "Acctió, aventura i món obert", plataforma: "PlayStation5", preu: 49.58, valoracio: 86, estoc: 68, imatge: "img/goy_portada_mod.jpg", descripcio: "Ambientat 300 anys després de Ghost of Tsushima, segueix a Atsu, una mercenària que busca venjar-se dels qui van assassinar a la seva família. L'aventura transcorre al Japó rural del segle XVII i ofereix un món obert amb combat, exploració i noves armes."}, //joc 9
];

const TIPUS_IVA = 21;

function calculaPreuAmbIva(preu) {
  return preu + (preu * TIPUS_IVA) / 100; // calcula el preu amb iva del 21% inclos
}

function creaTargeta(joc) {
  const targeta = document.createElement("article"); // crea article
  targeta.classList.add("article_cataleg");

  const imatge = document.createElement("img"); 
  imatge.classList.add("img_cataleg");
  imatge.src = joc.imatge;
  imatge.alt = joc.titol;

  const titol = document.createElement("h3");
  titol.textContent = joc.titol;

  const div = document.createElement("div");
  div.classList.add("div_article");

  const genere = document.createElement("p");
  genere.classList.add("p_cataleg");
  const genereEt = document.createElement("strong");
  genereEt.textContent = "Gènere:";
  genere.append(genereEt, " " + joc.genere);

  const plataforma = document.createElement("p");
  plataforma.classList.add("p_cataleg");
  const plataformaEt = document.createElement("strong");
  plataformaEt.textContent = "Plataforma original:";
  plataforma.append(plataformaEt, " " + joc.plataforma);

  const preu = document.createElement("p");
  preu.classList.add("p_cataleg");
  const preuEt = document.createElement("strong");
  preuEt.textContent = "Preu:";
  preu.append(preuEt, " " + calculaPreuAmbIva(joc.preu).toFixed(2) + "€");

  const valoracio = document.createElement("p");
  valoracio.classList.add("p_cataleg");
  const valoracioEt = document.createElement("strong");
  valoracioEt.textContent = "Valoració:";
  valoracio.append(valoracioEt, " " + joc.valoracio + "/100");

  const descripcio = document.createElement("p");
  descripcio.classList.add("p_cataleg");
  const descripcioEt = document.createElement("strong");
  descripcioEt.textContent = "Descripció:";
  descripcio.append(descripcioEt, " " + joc.descripcio);

  const estoc = document.createElement("p");
  estoc.classList.add("p_cataleg");
  if (joc.estoc === 0) {                  // si estoc es 0 aplica clase estoc baix i surt missatge indicant que esta esgotat
    estoc.textContent = "Esgotat";
    targeta.classList.add("estoc_baix");
  } else if (joc.estoc < 5) {             // si estoc es menor a 5 aplica clase estoc baix i surt missatge indicant les unitats que queden
    estoc.textContent = "Només en queden " + joc.estoc;
    targeta.classList.add("estoc_baix");
  } else {
    estoc.textContent = "Estoc: " + joc.estoc;
  }

  div.append(genere, plataforma, preu, valoracio, descripcio, estoc);
  targeta.append(imatge, titol, div);
  return targeta; // retorna targeta
}

function mostraCataleg(llista) {
  const contenidor = document.querySelector("#cataleg");
  for (const joc of llista) {
    contenidor.appendChild(creaTargeta(joc));
  }
}

// només es mostra si la pagina te el cataleg
if (document.querySelector("#cataleg")) {
  mostraCataleg(array_jocs);
}


//PART B (FILTRAR JOCS)

const contenidor_cataleg = document.querySelector("#cataleg");

if (contenidor_cataleg) { // si la pagna te contenidor_cataleg
  const buscador = document.querySelector("#buscador");
  const filtre_plataforma = document.querySelector("#filtre_plataforma");
  const comptador = document.querySelector("#comptador");

  function filtra_cataleg() {
    const text = buscador.value.toLowerCase(); // no fa diferencia entre mayuscules i minuscules
    const plataforma = filtre_plataforma.value; // filtra per el valor de la plataforma

    const filtrats = array_jocs.filter(joc => {
      const coincideix_titol = joc.titol.toLowerCase().includes(text);
      const coincideix_plataforma = plataforma === "" || joc.plataforma === plataforma;
      return coincideix_titol && coincideix_plataforma;
    });

    contenidor_cataleg.textContent = "";
    mostraCataleg(filtrats);

    if (filtrats.length === 0) {
      comptador.textContent = "No s'ha trobat cap joc";
    } else {
      comptador.textContent = "Mostrant " + filtrats.length + " de " + array_jocs.length + " jocs"; // mostra x jocs de la longitud ttal dels jocs
    }
  }

  buscador.addEventListener("input", filtra_cataleg);
  filtre_plataforma.addEventListener("change", filtra_cataleg);

  filtra_cataleg();
}


// PART C (FORMULARI DE CONTACTE)

const form = document.querySelector("#form");

if (form) {
  const resum = document.querySelector("#resum");
  const nom = document.querySelector("#nom");
  const mail = document.querySelector("#mail");
  const assumpte = document.querySelector("#assumpte");
  const missatge = document.querySelector("#missatge");
  const comptador_caracters = document.querySelector("#comptador_caracters");

  const camps = [nom, mail, assumpte, missatge];

  // crea missatge de error i aplica clase missatge_error
  function mostra_error(camp, text) {
    camp.classList.add("error");
    const p = document.createElement("p");
    p.classList.add("missatge_error");
    p.textContent = text;
    camp.after(p);
  }

  // tru la clase error
  function neteja_error_camp(camp) {
    camp.classList.remove("error");
    const seguent = camp.nextElementSibling;
    if (seguent && seguent.classList.contains("missatge_error")) {
      seguent.remove();
    }
  }

  function valida_formulari() {
    let es_valid = true;

    // borra errors anteriors
    camps.forEach(neteja_error_camp);

    // fa que el nom sigui obligatori i que contingui mes de 3 caracters
    if (nom.value.trim().length < 3) {
      mostra_error(nom, "El nom ha de tenir com a mínim 3 caràcters.");
      es_valid = false;
    }

    // fa que el correu sigui obligatori i que contingui @ y . (nom@example.com) 
    const format_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail.value.trim() === "") {
      mostra_error(mail, "El correu és obligatori.");
      es_valid = false;
    } else if (!format_mail.test(mail.value.trim())) {
      mostra_error(mail, "El correu no té un format vàlid.");
      es_valid = false;
    }

    // Assumpte: obligatori
    if (assumpte.value.trim() === "") {
      mostra_error(assumpte, "L'assumpte és obligatori.");
      es_valid = false;
    }

    // Missatge: entre 20 i 300 caràcters
    const longitud = missatge.value.trim().length;
    if (longitud < 20 || longitud > 300) {
      mostra_error(missatge, "El missatge ha de tenir entre 20 i 300 caràcters.");
      es_valid = false;
    }

    return es_valid;
  }

  // Quan l'usuari corregeix un camp, el seu error desapareix
  camps.forEach(camp => {
    camp.addEventListener("input", () => neteja_error_camp(camp));
  });

  // Comptador de caràcters en directe
  missatge.addEventListener("input", () => {
    comptador_caracters.textContent = missatge.value.length + " / 300 caràcters";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!valida_formulari()) {
      return;
    }

    // Llegeix les dades ABANS del reset()
    const dades = [
      ["Nom:", nom.value.trim()],
      ["Correu:", mail.value.trim()],
      ["Assumpte:", assumpte.value.trim()],
      ["Missatge:", missatge.value.trim()],
    ];
    const nom_persona = nom.value.trim();

    // Buida el resum anterior perquè el nou el substitueixi
    resum.textContent = "";

    const targeta = document.createElement("article");
    targeta.classList.add("targeta_resum");

    const titol = document.createElement("h3");
    titol.textContent = "Gràcies, " + nom_persona + "!";

    const agraiment = document.createElement("p");
    agraiment.textContent = "Hem rebut el teu missatge. Et respondrem el més aviat possible.";

    targeta.append(titol, agraiment);

    for (const [etiqueta, valor] of dades) {
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = etiqueta;
      p.append(strong, " " + valor);
      targeta.appendChild(p);
    }

    resum.appendChild(targeta);

    form.reset();
    comptador_caracters.textContent = "0 / 300 caràcters";  // reset() no dispara l'event input
  });
}


// PART D (MODE FOSC)

const clau_tema = "tema";
const boton_tema = document.querySelector("#btn_tema");

// Al recaregar la pagina si l'ultim cop en accedir estava seleccionat el mode fosc es queda seleccionat
if (localStorage.getItem(clau_tema) === "oscuro") {
  document.body.classList.add("oscuro");
}

if (boton_tema) {
  boton_tema.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    // Guarda la alecció del mode en el navegador
    if (document.body.classList.contains("oscuro")) {
      localStorage.setItem(clau_tema, "oscuro");
    } else {
      localStorage.setItem(clau_tema, "clar");
    }
  });
}