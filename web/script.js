let DescriptionDiv = document.getElementById('Description')
let CapitalDiv = document.getElementById('capital')
let FlagIMG = document.getElementById('flag')
let maplocationDiv = document.getElementById('maplocation')
let GuessInputDiv = document.getElementById('GuessInput')
let GuessInputButtonDiv = document.getElementById('GuessInputButton')
let MessageDiv = document.getElementById('Message')
let newgameButton = document.getElementById('newgame')
let picDiv = document.getElementById('pic')
let body = document.getElementById('body')
let lang = document.getElementById('lang-switch')
if(localStorage.lang==undefined) localStorage.lang="en";
lang.options[lang.selectedIndex].value = localStorage.lang;
let numberOfGuesses = 0
if(localStorage.streak==undefined) {localStorage.streak=0;}
NotWriting=true;
NotWriting2=true;
gameEnded = false;
let arrcountries = [
      {
          "name": "Afghanistan",
          "namees": "Afganistán",
          "namefr": "Afghanistan",
          "description": "A landlocked country located at the crossroads of Central Asia and South Asia. Referred to as the Heart of Asia.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/19/Afghanistan_%28orthographic_projection%29.svg",
          "code": "AF",
          "capital": "Kabul",
          "picture": "https://images.pexels.com/photos/628549/pexels-photo-628549.jpeg",
          "descriptionfr": "Un pays sans littoral situé au carrefour d'Asie centrale et d'Asie du Sud. Appelé le cœur de l'Asie.",
          "descriptiones": "Un país sin litoral ubicado en la encrucijada de Asia Central y Asia del Sur. Referido como el corazón de Asia."
      },
      {
          "name": "Albania",
          "namees": "Albania",
          "namefr": "Albanie",
          "description": "An independent country in Southeastern Europe, with an area of 28,748 square kilometres (11,100 sq mi).",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Location_Albania_Europe.png",
          "code": "AL",
          "capital": "Tirana",
          "picture": "https://images.pexels.com/photos/28542766/pexels-photo-28542766/free-photo-of-aerial-view-of-mountainous-lake-in-albania.jpeg",
          "descriptionfr": "Un pays indépendant dans le sud-est de l'Europe, avec une superficie de 28 748 kilomètres carrés (11100 km2).",
          "descriptiones": "Un país independiente en el sureste de Europa, con un área de 28,748 kilómetros cuadrados (11,100 millas cuadradas)."
      },
      {
          "name": "Algeria",
          "namees": "Argelia",
          "namefr": "Algérie",
          "description": "The largest country in Africa. It is part of the Maghreb region.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/23/Algeria_%28centered_orthographic_projection%29.svg",
          "code": "DZ",
          "capital": "Algiers",
          "picture": "https://images.pexels.com/photos/28531007/pexels-photo-28531007/free-photo-of-panoramic-view-of-skikda-algeria-landscape.jpeg",
          "descriptionfr": "Le plus grand pays d'Afrique. Il fait partie de la région de Maghreb.",
          "descriptiones": "El país más grande de África. Es parte de la región de Magreb."
      },
      {
          "name": "Andorra",
          "namees": "Andorra",
          "namefr": "Andorre",
          "description": "A landlocked sovereign country located in the eastern Pyrenees Mountains, ruled by a Spanish Bishop and the French President",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/12/Location_Andorra_Europe.png",
          "code": "AD",
          "capital": "Andorra la Vella",
          "picture": "https://images.pexels.com/photos/3257805/pexels-photo-3257805.jpeg",
          "descriptionfr": "Un pays souverain sans littoral situé dans les montagnes des Pyrénées orientales, gouvernés par un évêque espagnol et le président français",
          "descriptiones": "Un país soberano sin litoral ubicado en las montañas de los Pirineos orientales, gobernado por un obispo español y el presidente francés"
      },
      {
          "name": "Angola",
          "namees": "Angola",
          "namefr": "Angola",
          "description": "The second-largest Lusophone country in both total area and population, and is the seventh-largest country in Africa.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/89/Angola_%28orthographic_projection%29.svg",
          "code": "AO",
          "capital": "Luanda",
          "picture": "https://images.pexels.com/photos/5672007/pexels-photo-5672007.jpeg",
          "descriptionfr": "Le deuxième plus grand pays lusophone de la superficie totale et de la population, et est le septième plus grand pays d'Afrique.",
          "descriptiones": "El segundo país lusófono más grande tanto en el área total como en la población, y es el séptimo país más grande de África."
      },
      {
          "name": "Antigua and Barbuda",
          "namees": "Antigua y Barbuda",
          "namefr": "Antigua-et-Barbuda",
          "description": "An island nation which lies at the conjuncture of the Caribbean Sea and the Atlantic Ocean in the Leeward Islands part of the Lesser Antilles. It does have several smaller islands, including Great Bird, Green, Guiana, Long, Maiden, Prickly Pear, York, and Redonda.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/21/ATG_orthographic.svg",
          "code": "AG",
          "capital": "St. John's",
          "picture": "https://images.pexels.com/photos/16893066/pexels-photo-16893066/free-photo-of-clear-sky-over-sea-shore.jpeg",
          "descriptionfr": "Une nation insulaire qui se trouve à la conjoncture de la mer des Caraïbes et de l'océan Atlantique dans les îles sous les îles sous les moindres Antilles. Il a plusieurs îles plus petites, dont un grand oiseau, le vert, la Guyane, Long, Maiden, Barbaqueau, York et Redonda.",
          "descriptiones": "Una nación isleña que se encuentra en la coyuntura del mar Caribe y el Océano Atlántico en las Islas de Sotavento, parte de las Antillas Menores. Tiene varias islas más pequeñas, incluyendo Great Bird, Green, Guayan, Long, Maiden, Prickly Pear, York y Redonda."
      },
      {
          "name": "Argentina",
          "namees": "Argentina",
          "namefr": "Argentine",
          "description": "The second-largest country in South America, the eighth-largest country in the world and Spanish is the most spoken language in that country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/5f/ARG_orthographic_%28%2Ball_claims%29.svg",
          "code": "AR",
          "capital": "Buenos Aires",
          "picture": "https://images.pexels.com/photos/3955093/pexels-photo-3955093.jpeg",
          "descriptionfr": "Le deuxième plus grand pays d'Amérique du Sud, le huitième plus grand pays du monde et de l'espagnol est la langue la plus parlée de ce pays.",
          "descriptiones": "El segundo país más grande de América del Sur, el octavo país más grande del mundo y el español es el idioma más hablado de ese país."
      },
      {
          "name": "Armenia",
          "namees": "Armenia",
          "namefr": "Arménie",
          "description": "A landlocked country located in the Caucasus region. It is a unitary, multi-party, democratic nation-state with an ancient cultural heritage. Agriculture accounted for less than 20% of both net material product and total employment before the dissolution of the Soviet Union in 1991.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/96/Armenia_%28orthographic_projection%29.svg",
          "code": "AM",
          "capital": "Yerevan",
          "picture": "https://images.pexels.com/photos/13190743/pexels-photo-13190743.jpeg",
          "descriptionfr": "Un pays sans littoral situé dans la région du Caucase. Il s'agit d'un État-nation démocrate unitaire et multipartite avec un ancien patrimoine culturel. L'agriculture a représenté moins de 20% du produit net et de l'emploi total avant la dissolution de l'Union soviétique en 1991.",
          "descriptiones": "Un país sin litoral ubicado en la región del Cáucaso. Es un estado nación demócrata unitario, múltiple y demócrata con un antiguo patrimonio cultural. La agricultura representó menos del 20% del producto material neto y el empleo total antes de la disolución de la Unión Soviética en 1991."
      },
      {
          "name": "Australia",
          "namees": "Australia",
          "namefr": "Australie",
          "description": "The sixth biggest country in the world by land area. About 85% of the population lives near the east coast.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/da/Australia_with_AAT_%28orthographic_projection%29.svg",
          "code": "AU",
          "capital": "Canberra",
          "picture": "https://images.pexels.com/photos/5326944/pexels-photo-5326944.jpeg",
          "descriptionfr": "Le sixième plus grand pays du monde par la région foncière. Environ 85% de la population vit près de la côte est.",
          "descriptiones": "El sexto país más grande del mundo en la superficie de la tierra. Alrededor del 85% de la población vive cerca de la costa este."
      },
      {
          "name": "Austria",
          "namees": "Austria",
          "namefr": "L'Autriche",
          "description": "A country in Central Europe, a member-state of the United Nations since 1955, the European Union since 1995 and OPEC since 2019. Its history can be followed to the ninth century.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/38/EU-Austria_%28orthographic_projection%29.svg",
          "code": "AT",
          "capital": "Vienna",
          "picture": "https://images.pexels.com/photos/28505490/pexels-photo-28505490/free-photo-of-scenic-landscape-of-austrian-alps-in-summer.jpeg",
          "descriptionfr": "Un pays en Europe centrale, un membre de l'État des Nations Unies depuis 1955, l'Union européenne depuis 1995 et l'OPEP depuis 2019. Son histoire peut être suivie jusqu'au IXe siècle.",
          "descriptiones": "Un país en Europa Central, un miembro miembro de las Naciones Unidas desde 1955, la Unión Europea desde 1995 y la OPEP desde 2019. Su historia puede seguirse al siglo IX."
      },
      {
          "name": "Azerbaijan",
          "namees": "Azerbaiyán",
          "namefr": "Azerbaïdjan",
          "description": "A country in the South Caucasus region of Eurasia. Over half of the nation's landmass consists of mountain ridges, crests, highlands, and plateaus.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Azerbaijan_with_Nagorno_Karabakh_region.svg",
          "code": "AZ",
          "capital": "Baku",
          "picture": "https://images.pexels.com/photos/792778/pexels-photo-792778.jpeg",
          "descriptionfr": "Un pays de la région du Caucase du Sud en Eurasie. Plus de la moitié de la masse terrestre du pays se compose de crêtes de montagne, de crêtes, de hautes terres et de plateaux.",
          "descriptiones": "Un país en la región del Sur del Cáucaso de Eurasia. Más de la mitad de la masa de tierra de la nación consiste en crestas de montaña, crestas, tierras altas y mesetas."
      },
      {
          "name": "Bahamas",
          "namees": "Bahamas",
          "namefr": "Bahamas",
          "description": "A group of islands in the Caribbean Sea. The capital of the country is on New Providence Island.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29.svg",
          "code": "BS",
          "capital": "Nassau",
          "picture": "https://images.pexels.com/photos/1062021/pexels-photo-1062021.jpeg",
          "descriptionfr": "Un groupe d'îles de la mer des Caraïbes. La capitale du pays se trouve sur New Providence Island.",
          "descriptiones": "Un grupo de islas en el Mar del Caribe. La capital del país se encuentra en la Isla New Providence."
      },
      {
          "name": "Bahrain",
          "namees": "Bahrain",
          "namefr": "Bahreïn",
          "description": "An island country in the Arabian Gulf. A \"Friendship Bridge\", not yet built, will link this country and Qatar as the longest fixed bridge in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/archive/8/83/20090611010005%21Map_of_Bahrain.svg",
          "code": "BH",
          "capital": "Manama",
          "picture": "https://images.pexels.com/photos/951962/pexels-photo-951962.jpeg",
          "descriptionfr": "Un pays insulaire dans le golfe Persique. Un \"pont d'amitié\", non encore construit, reliera ce pays et le Qatar comme le plus long pont fixe du monde.",
          "descriptiones": "Un país isleño en el Golfo Arábigo. Un \"puente de la amistad\", aún no construido, vinculará este país y Qatar como el puente fijo más largo del mundo."
      },
      {
          "name": "Bangladesh",
          "namees": "Bangladesh",
          "namefr": "Bangladesh",
          "description": "A country in South Asia. To its west is West Bengal in India.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangladesh_%28orthographic_projection%29.svg",
          "code": "BD",
          "capital": "Dhaka",
          "picture": "https://images.pexels.com/photos/3560020/pexels-photo-3560020.jpeg",
          "descriptionfr": "Un pays en Asie du Sud. À son ouest se trouve le Bengale occidental en Inde.",
          "descriptiones": "Un país en el sur de Asia. A su oeste se encuentra Bengala Occidental en India."
      },
      {
          "name": "Barbados",
          "namees": "Barbados",
          "namefr": "Barbade",
          "description": "An island country in the Atlantic Ocean. The island has an area of about 430 km².",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a1/BRB_orthographic.svg",
          "code": "BB",
          "capital": "Bridgetown",
          "picture": "https://images.pexels.com/photos/8920863/pexels-photo-8920863.jpeg",
          "descriptionfr": "Un pays insulaire de l'océan Atlantique. L'île a une superficie d'environ 430 km².",
          "descriptiones": "Un país isleño en el Océano Atlántico. La isla tiene un área de aproximadamente 430 km²."
      },
      {
          "name": "Belarus",
          "namees": "Bielorrusia",
          "namefr": "Biélorussie",
          "description": "A country in Eastern Europe. About nine million people live there. It was part of the Soviet Union until 1991.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/70/Europe-Belarus_%28orthographic_projection%29.svg",
          "code": "BY",
          "capital": "Minsk",
          "picture": "https://images.pexels.com/photos/673803/pexels-photo-673803.jpeg",
          "descriptionfr": "Un pays en Europe de l'Est. Environ neuf millions de personnes y vivent. Cela faisait partie de l'Union soviétique jusqu'en 1991.",
          "descriptiones": "Un país en Europa del Este. Alrededor de nueve millones de personas viven allí. Formó parte de la Unión Soviética hasta 1991."
      },
      {
          "name": "Belgium",
          "namees": "Bélgica",
          "namefr": "Belgique",
          "description": "A federal state in Western Europe. There are three regions in that country: Flanders, Wallonia and the Capital Region",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/79/Belgium_%28orthographic_projection%29.svg",
          "code": "BE",
          "capital": "Brussels",
          "picture": "https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg",
          "descriptionfr": "Un État fédéral en Europe occidentale. Il y a trois régions dans ce pays: la Flandre, la Wallonie et la région de la capitale",
          "descriptiones": "Un estado federal en Europa occidental. Hay tres regiones en ese país: Flandes, Wallonia y la Región Capital"
      },
      {
          "name": "Belize",
          "namees": "Belgo",
          "namefr": "Belize",
          "description": "A country that used to be called British Honduras, but changed its name in 1973. Long before that it was part of the Mayan Empire. Also it is the only English-speaking country in Central America.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/43/BLZ_orthographic.svg",
          "code": "BZ",
          "capital": "Belmopan",
          "picture": "https://images.pexels.com/photos/2473986/pexels-photo-2473986.jpeg",
          "descriptionfr": "Un pays qui s'appelait auparavant le Honduras britannique, mais a changé son nom en 1973. Bien avant cela, il faisait partie de l'Empire maya. C'est également le seul pays anglophone d'Amérique centrale.",
          "descriptiones": "Un país que solía llamarse honduras británicas, pero cambió su nombre en 1973. Mucho antes de eso, era parte del Imperio Maya. También es el único país de habla inglesa en América Central."
      },
      {
          "name": "Benin",
          "namees": "Benin",
          "namefr": "Bénin",
          "description": "The government of the country is based in Cotonou. Most people live on the small southern coastline.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/01/Benin_%28orthographic_projection_with_inset%29.svg",
          "code": "BJ",
          "capital": "Porto-Novo",
          "picture": "https://images.pexels.com/photos/8655016/pexels-photo-8655016.jpeg",
          "descriptionfr": "Le gouvernement du pays est basé à Cotonou. La plupart des gens vivent sur la petite côte sud.",
          "descriptiones": "El gobierno del país tiene su sede en Cotonou. La mayoría de las personas viven en la pequeña costa sur."
      },
      {
          "name": "Bhutan",
          "namees": "Bután",
          "namefr": "Bhoutan",
          "description": "A small landlocked country in the Himalaya mountains of South Asia. It is ruled by King Jigme Khesar Namgyel Wangchuck, who has been king since 2006. It was founded in 1644 by Shabdrung Ngawang Namgyel.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bhutan_%28orthographic_projection%29.svg",
          "code": "BT",
          "capital": "Thimphu",
          "picture": "https://images.pexels.com/photos/910368/pexels-photo-910368.jpeg",
          "descriptionfr": "Un petit pays sans littoral dans les montagnes de l'Himalaya en Asie du Sud. Il est dirigé par le roi Jigme Khesar Namgyel Wangchuck, qui est roi depuis 2006. Il a été fondé en 1644 par Shabdrung Ngawang Namgyel.",
          "descriptiones": "Un pequeño país sin litoral en las montañas del Himalaya del sur de Asia. Está gobernado por el rey Jigme Khesar Namgyel Wangchuck, quien ha sido rey desde 2006. Fue fundada en 1644 por Shabdrung Ngawang Namgyel."
      },
      {
          "name": "Bolivia",
          "namees": "Bolivia",
          "namefr": "Bolivie",
          "description": "A landlocked country in South America. The main languages are Spanish and Quechua, but there are other languages too.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/83/BOL_orthographic.svg",
          "code": "BO",
          "capital": "Sucre",
          "picture": "https://images.pexels.com/photos/2613110/pexels-photo-2613110.jpeg",
          "descriptionfr": "Un pays sans littoral en Amérique du Sud. Les langues principales sont l'espagnol et le quechua, mais il y a aussi d'autres langues.",
          "descriptiones": "Un país sin litoral en América del Sur. Los idiomas principales son el español y el quechua, pero también hay otros idiomas."
      },
      {
          "name": "Bosnia and Herzegovina",
          "namees": "Bosnia y Herzegovina",
          "namefr": "Bosnie Herzégovine",
          "description": "A country in Southeastern Europe, with an area of 51,197 km2 and 4,600,000 people. The country was a part of Yugoslavia. The assassination of Archduke Franz Ferdinand (one of the causes of WWI) was executed in the capital of that country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/94/Europe-Bosnia_and_Herzegovina.svg",
          "code": "BA",
          "capital": "Sarajevo",
          "picture": "https://images.pexels.com/photos/2707974/pexels-photo-2707974.jpeg",
          "descriptionfr": "Un pays du sud-est de l'Europe, avec une superficie de 51 197 km2 et 4 600 000 personnes. Le pays faisait partie de la Yougoslavie. L'assassinat de l'archiduc Franz Ferdinand (l'une des causes de la Première Guerre mondiale) a été exécuté dans la capitale de ce pays.",
          "descriptiones": "Un país en el sureste de Europa, con un área de 51,197 km2 y 4,600,000 personas. El país era parte de Yugoslavia. El asesinato del archiduque Franz Ferdinand (una de las causas de la Primera Guerra Mundial) se ejecutó en la capital de ese país."
      },
      {
          "name": "Botswana",
          "namees": "Botswana",
          "namefr": "Botwana",
          "description": "A country in southern Africa. The economy of the country comes mostly from mining. This includes diamonds, metals (including copper) and minerals (including salt). The country is the highest producer of diamonds by value in the world",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/79/Botswana_%28centered_orthographic_projection%29.svg",
          "code": "BW",
          "capital": "Gaborone",
          "picture": "https://images.pexels.com/photos/3184843/pexels-photo-3184843.jpeg",
          "descriptionfr": "Un pays en Afrique australe. L'économie du pays vient principalement de l'exploitation minière. Cela comprend les diamants, les métaux (y compris le cuivre) et les minéraux (y compris le sel). Le pays est le plus grand producteur de diamants par valeur dans le monde",
          "descriptiones": "Un país en el sur de África. La economía del país proviene principalmente de la minería. Esto incluye diamantes, metales (incluido cobre) y minerales (incluida la sal). El país es el mayor productor de diamantes por valor en el mundo"
      },
      {
          "name": "Brazil",
          "namees": "Brasil",
          "namefr": "Brésil",
          "description": "The fifth largest country and the only country in South America that speaks Portuguese.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/bc/BRA_orthographic.svg",
          "code": "BR",
          "capital": "Brasilia",
          "picture": "https://images.pexels.com/photos/975761/pexels-photo-975761.jpeg",
          "descriptionfr": "Le cinquième plus grand pays et le seul pays d'Amérique du Sud qui parle portugais.",
          "descriptiones": "El quinto país más grande y el único país de América del Sur que habla portugués."
      },
      {
          "name": "Brunei",
          "namees": "Brunei",
          "namefr": "Brunei",
          "description": "A country on the island of Borneo. It is one of the smallest Muslim countries in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Brunei_%28orthographic_projection%29.svg",
          "code": "BN",
          "capital": "Bandar Seri Begawan",
          "picture": "https://images.pexels.com/photos/6613502/pexels-photo-6613502.jpeg",
          "descriptionfr": "Un pays sur l'île de Bornéo. C'est l'un des plus petits pays musulmans du monde.",
          "descriptiones": "Un país en la isla de Borneo. Es uno de los países musulmanes más pequeños del mundo."
      },
      {
          "name": "Bulgaria",
          "namees": "Bulgaria",
          "namefr": "Bulgarie",
          "description": "A country in south-eastern Europe, on the Balkan Peninsula. It is south of the River Danube and west of the Black Sea.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/e9/EU-Bulgaria.svg",
          "code": "BG",
          "capital": "Sofia",
          "picture": "https://images.pexels.com/photos/4081837/pexels-photo-4081837.jpeg",
          "descriptionfr": "Un pays du sud-est de l'Europe, sur la péninsule des Balkans. Il est au sud de la rivière Danube et à l'ouest de la mer Noire.",
          "descriptiones": "Un país en el sudeste de Europa, en la península de los Balcanes. Está al sur del río Danubio y al oeste del Mar Negro."
      },
      {
          "name": "Burkina Faso",
          "namees": "Burkina Faso",
          "namefr": "Burkina Faso",
          "description": "A country in West Africa which used to be called Upper Volta. Once ruled by France, now independent since 1960.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/86/Burkina_Faso_%28orthographic_projection%29.svg",
          "code": "BF",
          "capital": "Ouagadougou",
          "picture": "https://img.freepik.com/free-photo/cloudy-blue-sky-valley-tatacoa-desert-colombia_181624-19677.jpg?t=st=1727424574~exp=1727428174~hmac=968f136a13494e6af91257e8b71e41c75c5f2052997d362d63230506e553d954&w=1800",
          "descriptionfr": "Un pays en Afrique de l'Ouest qui s'appelait Upper Volta. Autrefois gouverné par la France, maintenant indépendant depuis 1960.",
          "descriptiones": "Un país en África occidental que solía llamarse Upper Volta. Una vez gobernado por Francia, ahora independiente desde 1960."
      },
      {
          "name": "Burundi",
          "namees": "Burundi",
          "namefr": "Burundi",
          "description": "A small country in Africa. The official languages of that country are Kirundi, French and English. One of the poorest countries in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/27/Burundi_%28orthographic_projection%29.svg",
          "code": "BI",
          "capital": "Gitega",
          "picture": "https://images.pexels.com/photos/5859993/pexels-photo-5859993.jpeg",
          "descriptionfr": "Un petit pays en Afrique. Les langues officielles de ce pays sont Kirundi, le français et l'anglais. L'un des pays les plus pauvres du monde.",
          "descriptiones": "Un país pequeño en África. Los idiomas oficiales de ese país son Kirundi, francés e inglés. Uno de los países más pobres del mundo."
      },
      {
          "name": "Cambodia",
          "namees": "Camboya",
          "namefr": "Cambodge",
          "description": "A country in Southeast Asia. Khmer is the official language. The country has recently emerged from a long civil war and the rule of the Khmer Rouge. It is part of ASEAN, Association of South East Asian Nations.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cambodia_on_the_globe_%28Cambodia_centered%29.svg",
          "code": "KH",
          "capital": "Phnom Penh",
          "picture": "https://images.pexels.com/photos/3226403/pexels-photo-3226403.jpeg",
          "descriptionfr": "Un pays en Asie du Sud-Est. Khmer est la langue officielle. Le pays est récemment sorti d'une longue guerre civile et de la règle du Khmers Rouge. Il fait partie de l'ANASE, Association des nations d'Asie du Sud-Est.",
          "descriptiones": "Un país en el sudeste asiático. Khmer es el idioma oficial. El país ha surgido recientemente de una larga guerra civil y la regla del jemer rouge. Es parte de la ASEAN, asociación de las naciones del sudeste asiático."
      },
      {
          "name": "Cameroon",
          "namees": "Camerún",
          "namefr": "Cameroun",
          "description": "A country which became a German colony in 1884 and then after World War I, it was divided between France and the United Kingdom as League of Nations mandates. They speak nearly 250 languages in that country. French and English are the official languages.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cameroon_%28orthographic_projection%29.svg",
          "code": "CM",
          "capital": "Yaounde",
          "picture": "https://images.pexels.com/photos/12251155/pexels-photo-12251155.jpeg",
          "descriptionfr": "Un pays qui est devenu une colonie allemande en 1884, puis après la Première Guerre mondiale, elle a été divisée entre la France et le Royaume-Uni en tant que mandats de la Ligue des Nations. Ils parlent près de 250 langues dans ce pays. Le français et l'anglais sont les langues officielles.",
          "descriptiones": "Un país que se convirtió en una colonia alemana en 1884 y luego, después de la Primera Guerra Mundial, se dividió entre Francia y el Reino Unido como mandatos de la Liga de las Naciones. Hablan casi 250 idiomas en ese país. El francés y el inglés son los idiomas oficiales."
      },
      {
          "name": "Canada",
          "namees": "Canadá",
          "namefr": "Canada",
          "description": "Its land reaches from the Atlantic Ocean in the east to the Pacific Ocean in the west. The country has ten provinces and three territories.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/67/CAN_orthographic.svg",
          "code": "CA",
          "capital": "Ottawa",
          "picture": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
          "descriptionfr": "Ses terres atteignent l'océan Atlantique à l'est à l'océan Pacifique à l'ouest. Le pays compte dix provinces et trois territoires.",
          "descriptiones": "Su tierra alcanza desde el Océano Atlántico en el este hasta el Océano Pacífico en el oeste. El país tiene diez provincias y tres territorios."
      },
      {
          "name": "Cabo Verde",
          "namees": "Cabo Verde",
          "namefr": "Cabo Verde",
          "description": "An island country in Africa. It is a group of islands in the Atlantic Ocean, which have a volcanic origin.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/47/Cape_Verde_%28orthographic_projection%29.svg",
          "code": "CV",
          "capital": "Praia",
          "picture": "https://images.pexels.com/photos/1133540/pexels-photo-1133540.jpeg",
          "descriptionfr": "Un pays insulaire en Afrique. C'est un groupe d'îles de l'océan Atlantique, qui ont une origine volcanique.",
          "descriptiones": "Un país isleño en África. Es un grupo de islas en el Océano Atlántico, que tienen un origen volcánico."
      },
      {
          "name": "Central African Republic",
          "namees": "República Centroafricana",
          "namefr": "République centrafricaine",
          "description": "A landlocked country in Central Africa.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Central_African_Republic_%28centered_orthographic_projection%29.svg",
          "code": "CF",
          "capital": "Bangui",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/b/be/CARvillagefromthesky.jpg",
          "descriptionfr": "Un pays enclavé en Afrique centrale.",
          "descriptiones": "Un país sin litoral en África Central."
      },
      {
          "name": "Chad",
          "namees": "Chad",
          "namefr": "Tchad",
          "description": "It was a French colony until 1960. It suffers from poverty, illness, drought, and armed conflicts.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/46/Chad_%28orthographic_projection%29.svg",
          "code": "TD",
          "capital": "N'Djamena",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Danse_fille_mboum_Tchad.jpg",
          "descriptionfr": "C'était une colonie française jusqu'en 1960. Elle souffre de pauvreté, de maladie, de sécheresse et de conflits armés.",
          "descriptiones": "Era una colonia francesa hasta 1960. Sufre de pobreza, enfermedad, sequía y conflictos armados."
      },
      {
          "name": "Chile",
          "namees": "Chile",
          "namefr": "Chili",
          "description": "A country in the western part of South America. It is the southernmost country in the world, and the closest to Antarctica, occupying a long and narrow strip of land between the Andes to the east and the Pacific Ocean to the west.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/5d/CHL_orthographic.svg",
          "code": "CL",
          "capital": "Santiago",
          "picture": "https://images.pexels.com/photos/2017751/pexels-photo-2017751.jpeg",
          "descriptionfr": "Un pays de la partie ouest de l'Amérique du Sud. C'est le pays le plus au sud du monde, et le plus proche de l'Antarctique, occupant une longue et étroite bande de terre entre les Andes à l'est et l'océan Pacifique à l'ouest.",
          "descriptiones": "Un país en la parte occidental de América del Sur. Es el país más meridional del mundo, y el más cercano a la Antártida, que ocupa una larga y estrecha franja de tierra entre los Andes hacia el este y el Océano Pacífico hacia el oeste."
      },
      {
          "name": "China",
          "namees": "China",
          "namefr": "Chine",
          "description": "The country has the oldest continuous civilization near Yellow River region. It has one of the world's oldest writing systems (and the oldest in use today)",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/78/People%27s_Republic_of_China_%28orthographic_projection%29.svg",
          "code": "CN",
          "capital": "Beijing",
          "picture": "https://images.pexels.com/photos/1586205/pexels-photo-1586205.jpeg",
          "descriptionfr": "Le pays a la plus ancienne civilisation continue près de la région de la rivière Yellow. Il possède l'un des plus anciens systèmes d'écriture du monde (et le plus ancien utilisé aujourd'hui)",
          "descriptiones": "El país tiene la civilización continua más antigua cerca de la región del río Amarillo. Tiene uno de los sistemas de escritura más antiguos del mundo (y los más antiguos en uso hoy)"
      },
      {
          "name": "Colombia",
          "namees": "Colombia",
          "namefr": "Colombie",
          "description": "A tropical equatorial country in northern South America. It is in the northwest part of the continent.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg",
          "code": "CO",
          "capital": "Bogota",
          "picture": "https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg",
          "descriptionfr": "Un pays équatorial tropical dans le nord de l'Amérique du Sud. C'est dans la partie nord-ouest du continent.",
          "descriptiones": "Un país ecuatorial tropical en el norte de América del Sur. Está en la parte noroeste del continente."
      },
      {
          "name": "Comoros",
          "namees": "Comoras",
          "namefr": "Comores",
          "description": "A small island nation in the Indian Ocean. It is between Madagascar and mainland Africa.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Comoros_%28orthographic_projection%29.svg",
          "code": "KM",
          "capital": "Moroni",
          "picture": "https://images.pexels.com/photos/1854713/pexels-photo-1854713.jpeg",
          "descriptionfr": "Une petite nation insulaire dans l'océan Indien. C'est entre Madagascar et l'Afrique continentale.",
          "descriptiones": "Una pequeña nación isleña en el Océano Índico. Es entre Madagascar y África continental."
      },
      {
          "name": "Congo",
          "namees": "Congo",
          "namefr": "Congo",
          "description": "A former colony of France. The north of the country has very large areas of rainforest, but in the south are many farms which grow cashcrops like bananas, peanuts.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Republic_of_the_Congo_%28orthographic_projection%29.svg",
          "code": "CG",
          "capital": "Brazzaville",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Pro-constitutional_reform_demonstration_in_Brazzaville_-_2015-10_%2821518932913%29.jpg",
          "descriptionfr": "Une ancienne colonie de France. Le nord du pays a de très grandes zones de forêt tropicale, mais dans le sud, de nombreuses fermes qui cultivent des trésorerie comme les bananes, les arachides.",
          "descriptiones": "Una antigua colonia de Francia. El norte del país tiene áreas muy grandes de selva tropical, pero en el sur hay muchas granjas que cultivan cajas de caja como plátanos, maní."
      },
      {
          "name": "Democratic republic of congo",
          "namees": "República Democrática del Congo",
          "namefr": "République Démocratique du Congo",
          "description": "A country in central Africa. It was known as Zaïre from 1971 to 1997. It is the second largest country in Africa by area and the eleventh largest in the world. With a population of over 71 million.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29.svg",
          "code": "CD",
          "capital": "Kinshasa",
          "picture": "https://images.pexels.com/photos/4580060/pexels-photo-4580060.jpeg",
          "descriptionfr": "Un pays en Afrique centrale. Il était connu sous le nom de Zaïre de 1971 à 1997. C'est le deuxième plus grand pays d'Afrique par la région et le onzième plus grand du monde. Avec une population de plus de 71 millions d'habitants.",
          "descriptiones": "Un país en África Central. Fue conocido como Zaïre de 1971 a 1997. Es el segundo país más grande de África por área y el undécimo más grande del mundo. Con una población de más de 71 millones."
      },
      {
          "name": "Costa Rica",
          "namees": "Costa Rica",
          "namefr": "Costa Rica",
          "description": "A country in Central America. It has enjoyed a long period of peace since the 1863 civil war. Because of its natural beauty and political stability, it is nicknamed the Switzerland of Latin America. The country has had no army since December 1, 1948. Instead of spending money on the military, the government spends money on education and health.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/89/CRI_orthographic.svg",
          "code": "CR",
          "capital": "San Jose",
          "picture": "https://images.pexels.com/photos/1478941/pexels-photo-1478941.jpeg",
          "descriptionfr": "Un pays en Amérique centrale. Il a connu une longue période de paix depuis la guerre civile de 1863. En raison de sa beauté naturelle et de sa stabilité politique, il est surnommé la Suisse d'Amérique latine. Le pays n'a aucune armée depuis le 1er décembre 1948. Au lieu de dépenser de l'argent pour l'armée, le gouvernement dépense de l'argent pour l'éducation et la santé.",
          "descriptiones": "Un país en América Central. Ha disfrutado de un largo período de paz desde la Guerra Civil de 1863. Debido a su belleza natural y estabilidad política, se le apoda la Suiza de América Latina. El país no ha tenido el ejército desde el 1 de diciembre de 1948. En lugar de gastar dinero en el ejército, el gobierno gasta dinero en educación y salud."
      },
      {
          "name": "Ivory coast",
          "namees": "Costa de Marfil",
          "namefr": "Côte d'Ivoire",
          "description": "The country has a religiously diverse population, including numerous followers of Christianity, Islam, and indigenous faiths. Before its colonization by Europeans, it was home to several states, including Gyaaman, the Kong Empire, and Baoulé. The area became a protectorate of France in 1843 and was consolidated as a French colony in 1893 amid the European Scramble for Africa.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29.svg",
          "code": "CI",
          "capital": "Yamoussoukro",
          "picture": "https://images.pexels.com/photos/6322448/pexels-photo-6322448.jpeg",
          "descriptionfr": "Le pays a une population religieusement diversifiée, y compris de nombreux disciples du christianisme, de l'islam et des confessions autochtones. Avant sa colonisation par les Européens, il abritait plusieurs États, dont Gyaaman, l'Empire Kong et Baoulé. La région est devenue un protectorat de France en 1843 et a été consolidée comme colonie française en 1893 au milieu de la course européenne pour l'Afrique.",
          "descriptiones": "El país tiene una población religiosamente diversa, que incluye numerosos seguidores del cristianismo, el Islam y las religiones indígenas. Antes de su colonización por los europeos, era el hogar de varios estados, incluidos Gyaaman, el Imperio Kong y Baoulé. El área se convirtió en un protectorado de Francia en 1843 y se consolidó como una colonia francesa en 1893 en medio de la lucha europea de África."
      },
      {
          "name": "Croatia",
          "namees": "Croacia",
          "namefr": "Croatie",
          "description": "A unitary democratic parliamentary republic in Europe at the crossroads of Central Europe, and Southern Europe, being influenced by powers from both regions at varying points in its history. It was one of the republics of the Socialist Federal Republic of Yugoslavia.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/15/EU-Croatia.svg",
          "code": "HR",
          "capital": "Zagreb",
          "picture": "https://images.pexels.com/photos/3566139/pexels-photo-3566139.jpeg",
          "descriptionfr": "République parlementaire démocratique unitaire en Europe au carrefour d'Europe centrale et en Europe du Sud, influencée par les pouvoirs des deux régions à différents moments de son histoire. C'était l'une des républiques de la République fédérale socialiste de Yougoslavie.",
          "descriptiones": "Una república parlamentaria democrática unitaria en Europa en la encrucijada de Europa Central y el sur de Europa, siendo influenciada por poderes de ambas regiones en diferentes puntos de su historia. Fue una de las repúblicas de la República Federal Socialista de Yugoslavia."
      },
      {
          "name": "Cuba",
          "namees": "Cuba",
          "namefr": "Cuba",
          "description": "An island country in the Caribbean Sea, made up of one big island, which the nation is named after, the Isla de la Juventud island (Isle of Youth), and many smaller islands.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/16/CUB_orthographic.svg",
          "code": "CU",
          "capital": "Havana",
          "picture": "https://images.pexels.com/photos/5472343/pexels-photo-5472343.jpeg",
          "descriptionfr": "Un pays insulaire de la mer des Caraïbes, composé d'une grande île, que la nation porte le nom de l'île d'Isla de la Juventud (île de jeunesse) et de nombreuses îles plus petites.",
          "descriptiones": "Un país de la isla en el Mar del Caribe, compuesto por una gran isla, del cual lleva el nombre de la nación, la Isla de la Juventud (Isla de la Juventud) y muchas islas más pequeñas."
      },
      {
          "name": "Cyprus",
          "namees": "Chipre",
          "namefr": "Chypre",
          "description": "An island country in the Mediterranean Sea and member state of the European Union. The country is in Asia, but it is often associated with Europe because of the culture and history of the people.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Republic_of_Cyprus_%28orthographic_projection%29.svg",
          "code": "CY",
          "capital": "Nicosia",
          "picture": "https://images.pexels.com/photos/1150027/pexels-photo-1150027.jpeg",
          "descriptionfr": "Un pays insulaire de la mer Méditerranée et de l'État membre de l'Union européenne. Le pays est en Asie, mais il est souvent associé à l'Europe en raison de la culture et de l'histoire du peuple.",
          "descriptiones": "Un país isleño en el Mar Mediterráneo y el Estado miembro de la Unión Europea. El país está en Asia, pero a menudo se asocia con Europa debido a la cultura e historia de las personas."
      },
      {
          "name": "Czech Republic",
          "namees": "República Checa",
          "namefr": "République tchèque",
          "description": "Its history dates from the 9th century AD, for a long time it was one of the most powerful countries in Central Europe. Later on it was the biggest, most populated and richest country of the First Reich, where many Emperors started their career. It has one of the least religious populations in the world. (According to the 'Královec' meme: 97.9% of Kaliningrad residents decided to merge with that country and rename Kaliningrad to Královec.)",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/31/EU-Czech_Republic.svg",
          "code": "CZ",
          "capital": "Prague",
          "picture": "https://images.pexels.com/photos/28557491/pexels-photo-28557491/free-photo-of-aerial-view-of-a-scenic-rural-landscape-in-czechia.jpeg",
          "descriptionfr": "Son histoire date du 9ème siècle après JC, pendant longtemps, il a été l'un des pays les plus puissants d'Europe centrale. Plus tard, c'était le pays le plus grand, le plus peuplé et le plus riche du premier Reich, où de nombreux empereurs ont commencé leur carrière. Il a l'une des populations les moins religieuses au monde. (Selon le mème «Královec»: 97,9% des résidents de Kaliningrad ont décidé de fusionner avec ce pays et de renommer Kaliningrad à Královec.)",
          "descriptiones": "Su historia data del siglo IX DC, durante mucho tiempo fue uno de los países más poderosos de Europa Central. Más tarde fue el país más grande, poblado y rico del primer Reich, donde muchos emperadores comenzaron su carrera. Tiene una de las poblaciones menos religiosas del mundo. (Según el meme 'Královec': el 97.9% de los residentes de Kaliningrado decidieron fusionarse con ese país y cambiar el nombre de Kaliningrado a Královec)."
      },
      {
          "name": "Denmark",
          "namees": "Dinamarca",
          "namefr": "Danemark",
          "description": "A Nordic country, that was first united in the 10th century, during the Viking period, by the king Harald Bluetooth (c. 985), who first converted the nation to Christianity. The Vikings are well known for invading countries.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/10/Kingdom_of_Denmark_%28orthographic_projection%29.svg",
          "code": "DK",
          "capital": "Copenhagen",
          "picture": "https://images.pexels.com/photos/3596017/pexels-photo-3596017.jpeg",
          "descriptionfr": "Un pays nordique, qui a été uni au 10e siècle, pendant la période Viking, par le roi Harald Bluetooth (vers 985), qui a d'abord converti la nation au christianisme. Les Vikings sont bien connus pour les pays envahisseurs.",
          "descriptiones": "Un país nórdico, que se unió por primera vez en el siglo X, durante el período vikingo, por el rey Harald Bluetooth (c. 985), quien primero convirtió la nación al cristianismo. Los vikingos son bien conocidos por los países invasores."
      },
      {
          "name": "Djibouti",
          "namees": "Djibouti",
          "namefr": "Djibouti",
          "description": "A country on the eastern coast of Africa. In 2020, about 920,000 people lived there. It is one of the least populous countries in Africa. Two ethnic groups, the Somali and the Afar people, account for most of the people living in the country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Djibouti_%28orthographic_projection%29.svg",
          "code": "DJ",
          "capital": "Djibouti",
          "picture": "https://images.pexels.com/photos/4154222/pexels-photo-4154222.jpeg",
          "descriptionfr": "Un pays sur la côte orientale de l'Afrique. En 2020, environ 920 000 personnes y vivaient. C'est l'un des pays les moins peuplés d'Afrique. Deux groupes ethniques, le Somali et le peuple Afar, représentent la plupart des personnes vivant dans le pays.",
          "descriptiones": "Un país en la costa oriental de África. En 2020, alrededor de 920,000 personas vivían allí. Es uno de los países menos poblados de África. Dos grupos étnicos, el somalí y el pueblo lejos, representan a la mayoría de las personas que viven en el país."
      },
      {
          "name": "Dominica",
          "namees": "Dominio",
          "namefr": "Dominique",
          "description": "An island nation in the Caribbean Sea. It is an English-speaking country. It is between the French-speaking territories of Guadeloupe and Martinique.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/78/Dominica_on_the_globe_%28Americas_centered%29.svg",
          "code": "DM",
          "capital": "Roseau",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Batalie_Bay%2C_Dominica_002.jpg",
          "descriptionfr": "Une nation insulaire de la mer des Caraïbes. C'est un pays anglophone. C'est entre les territoires francophones de la Guadeloupe et de la Martinique.",
          "descriptiones": "Una nación isleña en el mar Caribe. Es un país de habla inglesa. Es entre los territorios de habla francesa de Guadalupe y Martinica."
      },
      {
          "name": "Dominican Republic",
          "namees": "República Dominicana",
          "namefr": "République dominicaine",
          "description": "A Latin American country on the Caribbean island of Hispaniola; the other country on the island is Haiti.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/95/Dominican_Republic_%28orthographic_projection%29.svg",
          "code": "DO",
          "capital": "Santo Domingo",
          "picture": "https://images.pexels.com/photos/3914044/pexels-photo-3914044.jpeg",
          "descriptionfr": "Un pays d'Amérique latine sur l'île des Caraïbes d'Hispaniola; L'autre pays de l'île est Haïti.",
          "descriptiones": "Un país latinoamericano en la isla caribeña de la hispaniola; El otro país en la isla es Haití."
      },
      {
          "name": "Ecuador",
          "namees": "Ecuador",
          "namefr": "Equateur",
          "description": "A small country in South America. It used to be part of the Spanish Empire. Before Spain, it was part of the Inca Empire.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ecuador_%28orthographic_projection%29.svg",
          "code": "EC",
          "capital": "Quito",
          "picture": "https://images.pexels.com/photos/2873419/pexels-photo-2873419.jpeg",
          "descriptionfr": "Un petit pays en Amérique du Sud. Il faisait partie de l'Empire espagnol. Avant l'Espagne, cela faisait partie de l'Empire Inca.",
          "descriptiones": "Un pequeño país en América del Sur. Solía ​​ser parte del imperio español. Antes de España, era parte del Imperio Inca."
      },
      {
          "name": "Egypt",
          "namees": "Egipto",
          "namefr": "Egypte",
          "description": "A country in northeast Africa, parts of the country hang on to the Middle East. It is famous for it's ancient monuments, such as the Pyramids and the Sphinx.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a1/EGY_orthographic.svg",
          "code": "EG",
          "capital": "Cairo",
          "picture": "https://images.pexels.com/photos/5609738/pexels-photo-5609738.jpeg",
          "descriptionfr": "Un pays en Afrique du Nord-Est, certaines parties du pays s'accrochent au Moyen-Orient. Il est célèbre pour ses monuments anciens, comme les pyramides et le sphinx.",
          "descriptiones": "Un país en el noreste de África, partes del país se aferran al Medio Oriente. Es famoso por sus antiguos monumentos, como las pirámides y la esfinge."
      },
      {
          "name": "El Salvador",
          "namees": "El Salvador",
          "namefr": "Le Salvador",
          "description": "The country is the smallest and it is the most densely populated country in Central America. The nation borders the Pacific Ocean.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/e3/El_Salvador_%28orthographic_projection%29.svg",
          "code": "SV",
          "capital": "San Salvador",
          "picture": "https://images.pexels.com/photos/2533090/pexels-photo-2533090.jpeg",
          "descriptionfr": "Le pays est le plus petit et c'est le pays le plus densément peuplé d'Amérique centrale. La nation borde l'océan Pacifique.",
          "descriptiones": "El país es el más pequeño y es el país más densamente poblado de América Central. La nación limita con el Océano Pacífico."
      },
      {
          "name": "Equatorial Guinea",
          "namees": "Guinea Ecuatorial",
          "namefr": "Guinée Équatoriale",
          "description": "An african country that is one of the smallest countries in Africa. It borders the Gulf of Guinea on the west. The country's territory is both on the continent and on islands. The continental part is known as Río Muni.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b9/GNQ_orthographic.svg",
          "code": "GQ",
          "capital": "Malabo",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Dschungel_bei_Oyala.JPG",
          "descriptionfr": "Un pays africain qui est l'un des plus petits pays d'Afrique. Il borde le golfe de Guinée à l'ouest. Le territoire du pays est à la fois sur le continent et sur les îles. La partie continentale est connue sous le nom de Río Muni.",
          "descriptiones": "Un país africano que es uno de los países más pequeños de África. Rimera al Golfo de Guinea en el oeste. El territorio del país está en el continente y en las islas. La parte continental se conoce como Río Muni."
      },
      {
          "name": "Eritrea",
          "namees": "Eritrea",
          "namefr": "Érythrée",
          "description": "An african country that is located on the coast of the Red Sea. It is north of the Bab-el-Mandeb and the Horn of Africa. It is one of the smallest countries in Africa.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/43/Eritrea_%28Africa_orthographic_projection%29.svg",
          "code": "ER",
          "capital": "Asmara",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Qohaito%2C_Eritrea_%2833628113490%29.jpg",
          "descriptionfr": "Un pays africain situé sur la côte de la mer Rouge. Il est au nord du Bab-el-Mandeb et de la corne de l'Afrique. C'est l'un des plus petits pays d'Afrique.",
          "descriptiones": "Un país africano que se encuentra en la costa del Mar Rojo. Está al norte del Bab-El-Mandeb y el Cuerno de África. Es uno de los países más pequeños de África."
      },
      {
          "name": "Estonia",
          "namees": "Estonia",
          "namefr": "Estonie",
          "description": "A small european country that is in the Baltic Region of Northern Europe. Its population is 1,332,893. The territory of the country has the mainland and 2,222 islands in the Baltic Sea.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a2/EU-Estonia.svg",
          "code": "EE",
          "capital": "Tallinn",
          "picture": "https://images.pexels.com/photos/5534595/pexels-photo-5534595.jpeg",
          "descriptionfr": "Un petit pays européen qui se trouve dans la région baltique de l'Europe du Nord. Sa population est de 1 332 893. Le territoire du pays a le continent et 2 222 îles de la mer Baltique.",
          "descriptiones": "Un pequeño país europeo que se encuentra en la región báltica del norte de Europa. Su población es de 1.332.893. El territorio del país tiene las islas continentales y 2.222 en el Mar Báltico."
      },
      {
          "name": "Ethiopia",
          "namees": "Etiopía",
          "namefr": "Ethiopie",
          "description": "It has one of the longest and most well known histories as a country in Africa and the world. It was one of the few countries in Africa that escaped the Scramble for Africa. It avoided being colonized until 1935, when it was invaded by the Italians under Benito Mussolini, who took over the country for a brief time. The nation used to be called Abyssinia.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ethiopia_%28Africa_orthographic_projection%29.svg",
          "code": "ET",
          "capital": "Addis Ababa",
          "picture": "https://images.pexels.com/photos/1001883/pexels-photo-1001883.jpeg",
          "descriptionfr": "Il possède l'une des histoires les plus longues et les plus connues en tant que pays en Afrique et dans le monde. C'est l'un des rares pays d'Afrique qui a échappé à la course pour l'Afrique. Il a évité d'être colonisé jusqu'en 1935, date à laquelle il a été envahi par les Italiens sous Benito Mussolini, qui a repris le pays pendant un bref moment. La nation s'appelait autrefois Abyssinie.",
          "descriptiones": "Tiene una de las historias más largas y conocidas como país de África y el mundo. Fue uno de los pocos países de África que escapó de la lucha por África. Evitó ser colonizado hasta 1935, cuando los italianos lo invadieron bajo Benito Mussolini, quien se hizo cargo del país por un breve tiempo. La nación solía llamarse Abisinia."
      },
      {
          "name": "Fiji",
          "namees": "Fiji",
          "namefr": "Fidji",
          "description": "An island country in the Pacific Ocean. It has 322 islands. The most important islands are Vanua Levu and Viti Levu. There are about 844,330 people in the country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg",
          "code": "FJ",
          "capital": "Suva",
          "picture": "https://images.pexels.com/photos/191744/pexels-photo-191744.jpeg",
          "descriptionfr": "Un pays insulaire de l'océan Pacifique. Il a 322 îles. Les îles les plus importantes sont Vanua Levu et Viti Levu. Il y a environ 844 330 personnes dans le pays.",
          "descriptiones": "Un país isleño en el Océano Pacífico. Tiene 322 islas. Las islas más importantes son Vanua Levu y Viti Levu. Hay alrededor de 844,330 personas en el país."
      },
      {
          "name": "Finland",
          "namees": "Finlandia",
          "namefr": "Finlande",
          "description": "A country in Northern Europe and is a member state of the European Union. It is one of the Nordic countries and is also part of Fennoscandia.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/6e/EU-Finland.svg",
          "code": "FI",
          "capital": "Helsinki",
          "picture": "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg",
          "descriptionfr": "Un pays en Europe du Nord et est un État membre de l'Union européenne. C'est l'un des pays nordiques et fait également partie de la Fennoscandie.",
          "descriptiones": "Un país en el norte de Europa y es un estado miembro de la Unión Europea. Es uno de los países nórdicos y también es parte de FennoScandia."
      },
      {
          "name": "France",
          "namees": "Francia",
          "namefr": "France",
          "description": "A country in Western Europe. It also includes various departments and territories of it overseas. Mainland extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is sometimes referred to as L’Hexagone because of the shape of its territory.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a4/EU-France_%28orthographic_projection%29.svg",
          "code": "FR",
          "capital": "Paris",
          "picture": "https://images.pexels.com/photos/28530087/pexels-photo-28530087/free-photo-of-chateau-azay-le-rideau-surrounded-by-lush-gardens.jpeg",
          "descriptionfr": "Un pays en Europe occidentale. Il comprend également divers départements et territoires à l'étranger. Le continent s'étend de la mer Méditerranée à la Manche et à la mer du Nord, et du Rhin à l'océan Atlantique. Il est parfois appelé L’Hexagone en raison de la forme de son territoire.",
          "descriptiones": "Un país en Europa occidental. También incluye varios departamentos y territorios en el extranjero. El continente se extiende desde el mar Mediterráneo hasta el Canal de la Mancha y el Mar del Norte, y desde el Rin hasta el Océano Atlántico. A veces se le conoce como L’Hexagone debido a la forma de su territorio."
      },
      {
          "name": "Gabon",
          "namees": "Gabón",
          "namefr": "Gabon",
          "description": "A country in Africa, located on the equator. It was a colony of France. It became a new country on August 17, 1960.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Gabon_%28orthographic_projection%29.svg",
          "code": "GA",
          "capital": "Libreville",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/8/84/Park_In_Gabon.JPG",
          "descriptionfr": "Un pays d'Afrique, situé sur l'équateur. C'était une colonie de France. Il est devenu un nouveau pays le 17 août 1960.",
          "descriptiones": "Un país en África, ubicado en el ecuador. Era una colonia de Francia. Se convirtió en un nuevo país el 17 de agosto de 1960."
      },
      {
          "name": "Gambia",
          "namees": "Gambia",
          "namefr": "Gambie",
          "description": "A long, thin country. The nation gained independence from the United Kingdom on 18 February 1965. It was ruled by Dawda Jawara and his People's Progressive Party (PPP) from 1965 to 1994. There was a military take-over in 1994. In 1996, Yahya Jammeh became president.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/16/Gambia_%28orthographic_projection_with_inset%29.svg",
          "code": "GM",
          "capital": "Banjul",
          "picture": "https://images.pexels.com/photos/12633356/pexels-photo-12633356.jpeg",
          "descriptionfr": "Un pays long et mince. La nation a obtenu l'indépendance du Royaume-Uni le 18 février 1965. Elle a été dirigée par Dawda Jawara et son parti progressiste (PPP) de son peuple de 1965 à 1994. Il y a eu une prise de contrôle militaire en 1994. En 1996, Yahya Jammeh est devenu président.",
          "descriptiones": "Un país largo y delgado. La nación ganó la independencia del Reino Unido el 18 de febrero de 1965. Fue gobernado por Dawda Jawara y el Partido Progresivo de su pueblo (PPP) de 1965 a 1994. Hubo una toma militar en 1994. En 1996, Yahya Jammeh se convirtió en presidente."
      },
      {
          "name": "Georgia",
          "namees": "Georgia",
          "namefr": "Géorgie",
          "description": "A country that spans Eastern Europe and western Asia. It is largely encircled by the Greater and Lesser Caucasus mountain ranges.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/67/Georgia_%28orthographic_projection_with_inset%29.svg",
          "code": "GE",
          "capital": "Tbilisi",
          "picture": "https://images.pexels.com/photos/2990775/pexels-photo-2990775.jpeg",
          "descriptionfr": "Un pays qui s'étend sur l'Europe de l'Est et l'Asie occidentale. Il est largement entouré des chaînes de montagnes du Caucase plus grandes et moindres.",
          "descriptiones": "Un país que abarca Europa del Este y Asia occidental. Está en gran medida rodeado por las cadenas montañosas de Cáucaso Grandes y Menores."
      },
      {
          "name": "Germany",
          "namees": "Alemania",
          "namefr": "Allemagne",
          "description": "A country located in central Europe. In March 2021, the nation had a population of 83.1 million people, the largest in Europe (excluding Russia). After the United States, it is the second most popular country for migration in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/af/EU-Germany_%28orthographic_projection%29.svg",
          "code": "DE",
          "capital": "Berlin",
          "picture": "https://images.pexels.com/photos/547494/pexels-photo-547494.jpeg",
          "descriptionfr": "Un pays situé en Europe centrale. En mars 2021, la nation comptait 83,1 millions d'habitants, le plus important d'Europe (à l'exclusion de la Russie). Après les États-Unis, c'est le deuxième pays le plus populaire pour la migration au monde.",
          "descriptiones": "Un país ubicado en Europa Central. En marzo de 2021, la nación tenía una población de 83.1 millones de personas, la más grande de Europa (excluyendo Rusia). Después de los Estados Unidos, es el segundo país más popular para la migración en el mundo."
      },
      {
          "name": "Ghana",
          "namees": "Ghana",
          "namefr": "Ghana",
          "description": "A country located in West Africa. The name of it used to be Gold Coast. Since the country is near the Equator, the climate is very warm and tropical. Lake Volta (the world’s largest artificial lake) extends through the east side of the nation.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/30/Ghana_%28orthographic_projection%29.svg",
          "code": "GH",
          "capital": "Accra",
          "picture": "https://images.pexels.com/photos/2787815/pexels-photo-2787815.jpeg",
          "descriptionfr": "Un pays situé en Afrique de l'Ouest. Le nom était auparavant Gold Coast. Étant donné que le pays est près de l'équateur, le climat est très chaud et tropical. Le lac Volta (le plus grand lac artificiel du monde) s'étend à travers le côté est de la nation.",
          "descriptiones": "Un país ubicado en África occidental. El nombre solía ser Gold Coast. Como el país está cerca del ecuador, el clima es muy cálido y tropical. Lake Volta (el lago artificial más grande del mundo) se extiende a través del lado este de la nación."
      },
      {
          "name": "Greece",
          "namees": "Grecia",
          "namefr": "Grèce",
          "description": "A country located in Southeastern Europe. It is historically known as Hellas. The nation created democracy, philosophy, science and mathematics, drama and theater and the Olympic Games.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/21/EU-Greece.svg",
          "code": "GR",
          "capital": "Athens",
          "picture": "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
          "descriptionfr": "Un pays situé dans le sud-est de l'Europe. Il est historiquement connu comme Hellas. La nation a créé la démocratie, la philosophie, les sciences et les mathématiques, le théâtre et le théâtre et les Jeux olympiques.",
          "descriptiones": "Un país ubicado en el sureste de Europa. Históricamente se conoce como Hellas. La nación creó democracia, filosofía, ciencia y matemáticas, drama y teatro y los Juegos Olímpicos."
      },
      {
          "name": "Grenada",
          "namees": "Granada",
          "namefr": "Grenade",
          "description": "An island nation that is located in the Caribbean Sea that received its independence from the United Kingdom in 1974. The island was invaded by the American military in 1983 because of Cuba's presence there. In 2004, a hurricane named Ivan destroyed most of the island's resources.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Grenada_on_the_globe_%28Americas_centered%29.svg",
          "code": "GD",
          "capital": "St. George's",
          "picture": "https://images.pexels.com/photos/4156554/pexels-photo-4156554.jpeg",
          "descriptionfr": "Une nation insulaire qui est située dans la mer des Caraïbes qui a reçu son indépendance du Royaume-Uni en 1974. L'île a été envahie par l'armée américaine en 1983 en raison de la présence de Cuba là-bas. En 2004, un ouragan nommé Ivan a détruit la plupart des ressources de l'île.",
          "descriptiones": "Una nación isleña que se encuentra en el Mar del Caribe que recibió su independencia del Reino Unido en 1974. La isla fue invadida por el ejército estadounidense en 1983 debido a la presencia de Cuba allí. En 2004, un huracán llamado Ivan destruyó la mayoría de los recursos de la isla."
      },
      {
          "name": "Guatemala",
          "namees": "Guatemala",
          "namefr": "Guatemala",
          "description": "A country which is located in Central America. Its culture is a mix of both Mayan and Spanish from the colonial period. It has many languages, a total of 23. Because of its natural beauty, it is also a popular tourist destination.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/70/Guatemala_%28orthographic_projection%29.svg",
          "code": "GT",
          "capital": "Guatemala City",
          "picture": "https://images.pexels.com/photos/335887/pexels-photo-335887.jpeg",
          "descriptionfr": "Un pays qui est situé en Amérique centrale. Sa culture est un mélange de maya et d'espagnol de la période coloniale. Il a de nombreuses langues, un total de 23. En raison de sa beauté naturelle, c'est aussi une destination touristique populaire.",
          "descriptiones": "Un país que se encuentra en América Central. Su cultura es una mezcla de maya y español del período colonial. Tiene muchos idiomas, un total de 23. Debido a su belleza natural, también es un destino turístico popular."
      },
      {
          "name": "Guinea",
          "namees": "Guinea",
          "namefr": "Guinée",
          "description": "A country located in Western Africa. The national language is French and it is a member of the Economic Community of West African States.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/04/Location_Guinea_AU_Africa.svg",
          "code": "GN",
          "capital": "Conakry",
          "picture": "https://images.pexels.com/photos/11763548/pexels-photo-11763548.jpeg",
          "descriptionfr": "Un pays situé en Afrique occidentale. La langue nationale est française et elle est membre de la communauté économique des États ouest-africains.",
          "descriptiones": "Un país ubicado en África occidental. El idioma nacional es francés y es miembro de la comunidad económica de los estados de África occidental."
      },
      {
          "name": "Guinea-Bissau",
          "namees": "Guinea-Bissau",
          "namefr": "Guinée-Bissau",
          "description": "A country located in Western Africa. The official language is Portuguese. The country was a Portuguese colony in the 19th century. At that time is was called Portuguese Guinea. It became independent in 1973.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c3/LocationGuineaBissau.svg",
          "code": "GW",
          "capital": "Bissau",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/4/44/Lagoa_com_hipop%C3%B3tamos_01.jpg",
          "descriptionfr": "Un pays situé en Afrique occidentale. La langue officielle est portugaise. Le pays était une colonie portugaise au 19e siècle. À ce moment-là, s'appelait Portugais Guinée. Il est devenu indépendant en 1973.",
          "descriptiones": "Un país ubicado en África occidental. El idioma oficial es portugués. El país era una colonia portuguesa en el siglo XIX. En ese momento se llamaba Guinea portuguesa. Se hizo independiente en 1973."
      },
      {
          "name": "Guyana",
          "namees": "Guayana",
          "namefr": "Guyane",
          "description": "A country located in South America. It is one of the most sparsely populated countries in the world. The capital, like most of the country's settlements, is on a flat coastal plain that goes from northwest to southeast.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/20/Guyana_%28orthographic_projection%29.svg",
          "code": "GY",
          "capital": "Georgetown",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/2/22/Tractor_in_field_of_rice_by_Khirsah1.jpg",
          "descriptionfr": "Un pays situé en Amérique du Sud. C'est l'un des pays les plus peu peuplés du monde. La capitale, comme la plupart des colonies du pays, se trouve sur une plaine côtière plate qui va du nord-ouest au sud-est.",
          "descriptiones": "Un país ubicado en América del Sur. Es uno de los países más poblados del mundo. La capital, como la mayoría de los asentamientos del país, se encuentra en una llanura costera plana que va del noroeste al sureste."
      },
      {
          "name": "Haiti",
          "namees": "Haití",
          "namefr": "Haïti",
          "description": "A country that is located on the Caribbean island of Hispaniola, however it only owns half of the island. The nation has two official languages: French and Haitian Creole, or 'Kreyol', which is a simple version of French mixed with African languages.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Haiti_%28orthographic_projection%29.svg",
          "code": "HT",
          "capital": "Port-au-Prince",
          "picture": "https://images.pexels.com/photos/2898214/pexels-photo-2898214.jpeg",
          "descriptionfr": "Un pays situé sur l'île des Caraïbes d'Hispaniola, mais il ne possède que la moitié de l'île. La nation a deux langues officielles: le créole français et haïtien, ou «Kreyol», qui est une version simple de français mélangée à des langues africaines.",
          "descriptiones": "Un país que se encuentra en la isla caribeña de Hispaniola, sin embargo, solo posee la mitad de la isla. La nación tiene dos idiomas oficiales: criollo francés y haitiano, o 'kreyol', que es una versión simple de francés mezclado con idiomas africanos."
      },
      {
          "name": "Vatican city",
          "namees": "Ciudad del Vaticano",
          "namefr": "Cité du Vatican",
          "description": "An independent sovereign state and the smallest country in the world by size. Its territory is completely surrounded by Italy and it is one of three countries in the world that are enclaves of another country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Location_Vatican_City_Europe.png",
          "code": "VA",
          "capital": "Vatican City",
          "picture": "https://images.pexels.com/photos/3892129/pexels-photo-3892129.jpeg",
          "descriptionfr": "Un État souverain indépendant et le plus petit pays du monde par taille. Son territoire est complètement entouré d'Italie et c'est l'un des trois pays du monde qui sont des enclaves d'un autre pays.",
          "descriptiones": "Un estado soberano independiente y el país más pequeño del mundo por tamaño. Su territorio está completamente rodeado de Italia y es uno de los tres países del mundo los que son enclaves de otro país."
      },
      {
          "name": "Honduras",
          "namees": "Honduras",
          "namefr": "Honduras",
          "description": "A country located in Central America. Most people of the nation speak the Spanish language. It has the world's 4th highest murder rate.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/0c/HND_orthographic.svg",
          "code": "HN",
          "capital": "Tegucigalpa",
          "picture": "https://images.pexels.com/photos/1630334/pexels-photo-1630334.jpeg",
          "descriptionfr": "Un pays situé en Amérique centrale. La plupart des gens de la nation parlent la langue espagnole. Il a le 4e taux de meurtre le plus élevé au monde.",
          "descriptiones": "Un país ubicado en América Central. La mayoría de la gente de la nación habla el idioma español. Tiene la cuarta tasa de asesinatos más alta del mundo."
      },
      {
          "name": "Hungary",
          "namees": "Hungría",
          "namefr": "Hongrie",
          "description": "A country located in Central Europe. It has been a member of the European Union since 2004. The people who live in the nation call it Magyar Köztársaság. This is named after the Magyar tribes who came to the nation in the late 9th century.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/60/EU-Hungary.svg",
          "code": "HU",
          "capital": "Budapest",
          "picture": "https://images.pexels.com/photos/3148096/pexels-photo-3148096.jpeg",
          "descriptionfr": "Un pays situé en Europe centrale. Il est membre de l'Union européenne depuis 2004. Les gens qui vivent dans la nation l'appellent Magyar Köztársaság. Ceci porte le nom des tribus Magyar qui sont venues à la nation à la fin du 9ème siècle.",
          "descriptiones": "Un país ubicado en Europa Central. Ha sido miembro de la Unión Europea desde 2004. Las personas que viven en la nación lo llaman Magyar Köztársasag. Esto lleva el nombre de las tribus Magyar que llegaron a la nación a fines del siglo IX."
      },
      {
          "name": "Iceland",
          "namees": "Islandia",
          "namefr": "Islande",
          "description": "The country is an island located in the North Atlantic, formerly a possession of Denmark. It is culturally considered to be part of Europe.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Iceland_%28orthographic_projection%29.svg",
          "code": "IS",
          "capital": "Reykjavik",
          "picture": "https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg",
          "descriptionfr": "Le pays est une île située dans l'Atlantique Nord, anciennement une possession du Danemark. Il est culturellement considéré comme faisant partie de l'Europe.",
          "descriptiones": "El país es una isla ubicada en el Atlántico Norte, anteriormente una posesión de Dinamarca. Se considera culturalmente como parte de Europa."
      },
      {
          "name": "India",
          "namees": "India",
          "namefr": "Inde",
          "description": "The country is in South Asia and it is the second largest country by number of people and seventh largest country by land area. It also has the most people of any democracy in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/70/India_%28orthographic_projection%29-2.svg",
          "code": "IN",
          "capital": "New Delhi",
          "picture": "https://images.pexels.com/photos/5205555/pexels-photo-5205555.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud et c'est le deuxième plus grand pays en nombre de personnes et septième plus grand pays par région foncière. Il a également le plus de gens de toute démocratie dans le monde.",
          "descriptiones": "El país se encuentra en el sur de Asia y es el segundo país más grande por el número de personas y el séptimo país más grande por la superficie terrestre. También tiene la mayoría de las personas de cualquier democracia en el mundo."
      },
      {
          "name": "Indonesia",
          "namees": "Indonesia",
          "namefr": "Indonésie",
          "description": "The country is in Southeast Asia and Oceania. As the biggest archipelago country in the world, it has 18,108 islands. The most important islands are Java, Bali, Kalimantan, Sulawesi, and Sumatra.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/05/Indonesia_%28orthographic_projection%29.svg",
          "code": "ID",
          "capital": "Jakarta",
          "picture": "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud-Est et en Océanie. En tant que plus grand pays d'archipel au monde, il compte 18 108 îles. Les îles les plus importantes sont Java, Bali, Kalimantan, Sulawesi et Sumatra.",
          "descriptiones": "El país está en el sudeste asiático y Oceanía. Como el país de archipiélago más grande del mundo, tiene 18,108 islas. Las islas más importantes son Java, Bali, Kalimantan, Sulawesi y Sumatra."
      },
      {
          "name": "Iran",
          "namees": "Irán",
          "namefr": "L'Iran",
          "description": "The country is in Western Asia. It is part of the Middle East region. It is the eighteenth largest country in the world. The nation has been a member of the United Nations since 1945.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iran_%28orthographic_projection%29.svg",
          "code": "IR",
          "capital": "Tehran",
          "picture": "https://images.pexels.com/photos/3799047/pexels-photo-3799047.jpeg",
          "descriptionfr": "Le pays est en Asie occidentale. Il fait partie de la région du Moyen-Orient. C'est le dix-huitième plus grand pays du monde. La nation est membre des Nations Unies depuis 1945.",
          "descriptiones": "El país está en Asia occidental. Es parte de la región de Medio Oriente. Es el decimoctavo país más grande del mundo. La nación ha sido miembro de las Naciones Unidas desde 1945."
      },
      {
          "name": "Iraq",
          "namees": "Irak",
          "namefr": "Irak",
          "description": "The country is in southwestern Asia. The nation has been known by the Greek name Mesopotamia which means 'Land between the rivers' and has been home to continuous successive civilizations since the 6th millennium BC.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/59/Iraq_%28orthographic_projection%29.svg",
          "code": "IQ",
          "capital": "Baghdad",
          "picture": "https://images.pexels.com/photos/2789762/pexels-photo-2789762.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud-Ouest. La nation est connue sous le nom grec en Mésopotamie qui signifie «terre entre les rivières» et abrite des civilisations successives continues depuis le 6e millénaire avant JC.",
          "descriptiones": "El país está en el suroeste de Asia. La nación ha sido conocida por el nombre griego Mesopotamia, que significa 'tierra entre los ríos' y ha sido el hogar de civilizaciones sucesivas continuas desde el sexto milenio antes de Cristo."
      },
      {
          "name": "Ireland",
          "namees": "Irlanda",
          "namefr": "Irlande",
          "description": "The country is an eastern European country. It is a member of the European Union. It covers about five-sixths of the island it is on.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/2a/EU-Ireland.svg",
          "code": "IE",
          "capital": "Dublin",
          "picture": "https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg",
          "descriptionfr": "Le pays est un pays d'Europe de l'Est. C'est un membre de l'Union européenne. Il couvre environ cinq-sixième de l'île sur laquelle il se trouve.",
          "descriptiones": "El país es un país de Europa del Este. Es miembro de la Unión Europea. Cubre unos cinco sextos de la isla en la que está."
      },
      {
          "name": "Israel",
          "namees": "Israel",
          "namefr": "Israël",
          "description": "The country is in southwestern Asia. It is the only Jewish country, and the spiritual home for Jews all over the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/47/ISR_orthographic.svg",
          "code": "IL",
          "capital": "Jerusalem",
          "picture": "https://images.pexels.com/photos/190339/pexels-photo-190339.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud-Ouest. C'est le seul pays juif et la maison spirituelle pour les Juifs du monde entier.",
          "descriptiones": "El país está en el suroeste de Asia. Es el único país judío y el hogar espiritual para los judíos de todo el mundo."
      },
      {
          "name": "Italy",
          "namees": "Italia",
          "namefr": "Italie",
          "description": "The country is in Southern Europe. It is a founding member of the European Union and the nation is known for its wine and food.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/ba/EU-Italy.svg",
          "code": "IT",
          "capital": "Rome",
          "picture": "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg",
          "descriptionfr": "Le pays est en Europe du Sud. C'est un membre fondateur de l'Union européenne et la nation est connue pour son vin et sa nourriture.",
          "descriptiones": "El país está en el sur de Europa. Es miembro fundador de la Unión Europea y la nación es conocida por su vino y comida."
      },
      {
          "name": "Jamaica",
          "namees": "Jamaica",
          "namefr": "Jamaïque",
          "description": "The country is an island in the Caribbean. It is part of the Greater Antilles. The island is divided into three counties – Cornwall, Middlesex and Surrey",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jamaica_%28orthographic_projection%29.svg",
          "code": "JM",
          "capital": "Kingston",
          "picture": "https://images.pexels.com/photos/4093927/pexels-photo-4093927.jpeg",
          "descriptionfr": "Le pays est une île des Caraïbes. Cela fait partie des Antilles du Grand. L'île est divisée en trois comtés - Cornwall, Middlesex et Surrey",
          "descriptiones": "El país es una isla en el Caribe. Es parte de las mayores Antillas. La isla se divide en tres condados: Cornwall, Middlesex y Surrey"
      },
      {
          "name": "Japan",
          "namees": "Japón",
          "namefr": "Japon",
          "description": "A country in East Asia. It is a group of many islands. Most people in the nation live on the biggest island called Honshu. Honshu is the 7th largest island in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/62/Japan_%28orthographic_projection%29.svg",
          "code": "JP",
          "capital": "Tokyo",
          "picture": "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg",
          "descriptionfr": "Un pays en Asie de l'Est. C'est un groupe de nombreuses îles. La plupart des gens de la nation vivent sur la plus grande île appelée Honshu. Honshu est la 7e plus grande île du monde.",
          "descriptiones": "Un país en el este de Asia. Es un grupo de muchas islas. La mayoría de las personas en la nación viven en la isla más grande llamada Honshu. Honshu es la séptima isla más grande del mundo."
      },
      {
          "name": "Jordan",
          "namees": "Jordán",
          "namefr": "Jordan",
          "description": "The country is in southwest Asia, in the Middle East, in the southern part of the Levant region, and the northern part of the Arabian Peninsula.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Jordan_%28orthographic_projection%29.svg",
          "code": "JO",
          "capital": "Amman",
          "picture": "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
          "descriptionfr": "Le pays se trouve en Asie du Sud-Ouest, au Moyen-Orient, dans la partie sud de la région Levant et dans la partie nord de la péninsule arabe.",
          "descriptiones": "El país se encuentra en el suroeste de Asia, en el Medio Oriente, en la parte sur de la región de Levante, y en la parte norte de la Península Arábiga."
      },
      {
          "name": "Kazakhstan",
          "namees": "Kazajstán",
          "namefr": "Kazakhstan",
          "description": "The country is in the middle of Eurasia. It is the ninth biggest country in the world, and it is also the biggest landlocked country in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kazakhstan_%28orthographic_projection%29.svg",
          "code": "KZ",
          "capital": "Astana",
          "picture": "https://images.pexels.com/photos/2418224/pexels-photo-2418224.jpeg",
          "descriptionfr": "Le pays est au milieu de l'Eurasie. C'est le neuvième plus grand pays du monde, et c'est aussi le plus grand pays sans littoral du monde.",
          "descriptiones": "El país está en medio de Eurasia. Es el noveno país más grande del mundo, y también es el país sin litoral más grande del mundo."
      },
      {
          "name": "Kenya",
          "namees": "Kenia",
          "namefr": "Kenya",
          "description": "The country is in East Africa, about halfway down, near the horn of Africa. It is about the size of France, and almost as large as Texas. The first humans may have lived near the lakes of the nation along the Great Rift Valley.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kenya_%28orthographic_projection%29.svg",
          "code": "KE",
          "capital": "Nairobi",
          "picture": "https://images.pexels.com/photos/3992510/pexels-photo-3992510.jpeg",
          "descriptionfr": "Le pays est en Afrique de l'Est, à mi-chemin, près de la corne de l'Afrique. C'est à peu près la taille de la France, et presque aussi grand que le Texas. Les premiers humains ont peut-être vécu près des lacs de la nation le long de la grande vallée du Rift.",
          "descriptiones": "El país está en África Oriental, a mitad de camino, cerca del Cuerno de África. Se trata del tamaño de Francia, y casi tan grande como Texas. Los primeros humanos pueden haber vivido cerca de los lagos de la nación a lo largo del Gran Valle del Rift."
      },
      {
          "name": "Kiribati",
          "namees": "Kiribati",
          "namefr": "Kiribati",
          "description": "The country is made up of several islands located on the Pacific Ocean. It has 33 atolls, groups of tiny islands. The country is near the equator. The nation also used to be known as the Great Gilbert islands.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "KI",
          "capital": "Tarawa",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Marakei_Atoll.jpg",
          "descriptionfr": "Le pays est composé de plusieurs îles situées sur l'océan Pacifique. Il a 33 atolls, des groupes de minuscules îles. Le pays est près de l'équateur. La nation était également connue comme les grandes îles de Gilbert.",
          "descriptiones": "El país está compuesto por varias islas ubicadas en el Océano Pacífico. Tiene 33 atolones, grupos de pequeñas islas. El país está cerca del ecuador. La nación también solía ser conocida como las grandes islas Gilbert."
      },
      {
          "name": "North Korea",
          "namees": "Corea del Norte",
          "namefr": "Corée du Nord",
          "description": "The country is in the northern part of the Korean peninsula, in the north east region of Asia. It was founded in 1948 after it had been freed from Japanese occupation, and a socialist state backed by the Soviet Union was established.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/7b/North_Korea_%28orthographic_projection%29.svg",
          "code": "KP",
          "capital": "Pyongyang",
          "picture": "https://images.pexels.com/photos/21629276/pexels-photo-21629276/free-photo-of-juche-tower-and-statue-in-pyongyang-in-north-korea.jpeg",
          "descriptionfr": "Le pays se trouve dans la partie nord de la péninsule coréenne, dans la région du Nord-Est de l'Asie. Il a été fondé en 1948 après avoir été libéré de l'occupation japonaise et un État socialiste soutenu par l'Union soviétique a été créé.",
          "descriptiones": "El país se encuentra en la parte norte de la península coreana, en la región noreste de Asia. Fue fundada en 1948 después de haber sido liberada de la ocupación japonesa, y se estableció un estado socialista respaldado por la Unión Soviética."
      },
      {
          "name": "South Korea",
          "namees": "Corea del Sur",
          "namefr": "Corée du Sud",
          "description": "The country is in the southern part of the Korean peninsula, in the north east region of Asia. The capital city is one of the most populous metropolitan areas in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Republic_of_Korea_%28orthographic_projection%29.svg",
          "code": "KR",
          "capital": "Seoul",
          "picture": "https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg",
          "descriptionfr": "Le pays se trouve dans la partie sud de la péninsule coréenne, dans la région du Nord-Est de l'Asie. La capitale est l'une des régions métropolitaines les plus peuplées au monde.",
          "descriptiones": "El país se encuentra en la parte sur de la península coreana, en la región noreste de Asia. La ciudad capital es una de las áreas metropolitanas más pobladas del mundo."
      },
      {
          "name": "Kosovo",
          "namees": "Kosovo",
          "namefr": "Kosovo",
        "flag":"https://flagcdn.com/84x63/xk.png",
          "description": "The country is a partially-recognised state and disputed territory in Southeastern Europe. On 17 February 2008, it unilaterally declared its independence from another country. It has since gained diplomatic recognition as a sovereign state by 95 UN member states.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/18/Europe-Republic_of_Kosovo.svg",
          "code": "XK",
          "capital": "Pristina",
          "picture": "https://images.pexels.com/photos/7805664/pexels-photo-7805664.jpeg",
          "descriptionfr": "Le pays est un État et un territoire contestés partiellement reconnus en Europe du Sud-Est. Le 17 février 2008, il a déclaré unilatéralement son indépendance d'un autre pays. Il a depuis acquis une reconnaissance diplomatique en tant qu'État souverain par 95 États membres de l'ONU.",
          "descriptiones": "El país es un estado parcialmente reconocido y en territorio en disputa en el sureste de Europa. El 17 de febrero de 2008, declaró unilateralmente su independencia de otro país. Desde entonces, ha obtenido el reconocimiento diplomático como un estado soberano por 95 Estados miembros de la ONU."
      },
      {
          "name": "Kuwait",
          "namees": "Kuwait",
          "namefr": "Koweit",
          "description": "The country is located in the Middle East. It is the most socially progressive country in the Gulf region and it has a small and rich economy. The nation about has about 96 billion barrels of crude oil reserves.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/41/KWT_orthographic.svg",
          "code": "KW",
          "capital": "Kuwait City",
          "picture": "https://images.pexels.com/photos/1598338/pexels-photo-1598338.jpeg",
          "descriptionfr": "Le pays est situé au Moyen-Orient. C'est le pays le plus progressiste socialement de la région du Golfe et il a une petite économie riche. La nation a environ 96 milliards de barils de réserves de pétrole brut.",
          "descriptiones": "El país está ubicado en el Medio Oriente. Es el país más progresivo socialmente en la región del Golfo y tiene una economía pequeña y rica. La nación tiene alrededor de 96 mil millones de barriles de reservas de petróleo crudo."
      },
      {
          "name": "Kyrgyzstan",
          "namees": "Kirguistán",
          "namefr": "Kirghizistan",
          "description": "The country is in Central Asia. It is landlocked and mountainous. It was a socialist republic of the Soviet Union, but became independent in 1991.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kyrgyzstan_%28orthographic_projection%29.svg",
          "code": "KG",
          "capital": "Bishkek",
          "picture": "https://images.pexels.com/photos/840719/pexels-photo-840719.jpeg",
          "descriptionfr": "Le pays est en Asie centrale. Il est enclavé et montagneux. C'était une République socialiste de l'Union soviétique, mais est devenue indépendante en 1991.",
          "descriptiones": "El país está en Asia Central. Es sin litoral y montañoso. Era una República Socialista de la Unión Soviética, pero se independizó en 1991."
      },
      {
          "name": "Laos",
          "namees": "Laos",
          "namefr": "Laos",
          "description": "The country is in southeast Asia. The only landlocked country in Southeast Asia. It is slightly smaller than Romania and Colorado. The landscape is mostly rugged mountains.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/70/Laos_in_its_region.svg",
          "code": "LA",
          "capital": "Vientiane",
          "picture": "https://images.pexels.com/photos/947994/pexels-photo-947994.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud-Est. Le seul pays enclavé en Asie du Sud-Est. Il est légèrement plus petit que la Roumanie et le Colorado. Le paysage est principalement des montagnes accidentées.",
          "descriptiones": "El país está en el sudeste asiático. El único país sin litoral en el sudeste asiático. Es ligeramente más pequeño que Rumania y Colorado. El paisaje es principalmente montañas resistentes."
      },
      {
          "name": "Latvia",
          "namees": "Letonia",
          "namefr": "Lettonie",
          "description": "The country is in Northern Europe. It is one of the Baltic States and the nation is split into four parts called Kurzeme, Vidzeme, Zemgale, and Latgale.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/32/EU-Latvia.svg",
          "code": "LV",
          "capital": "Riga",
          "picture": "https://images.pexels.com/photos/3805891/pexels-photo-3805891.jpeg",
          "descriptionfr": "Le pays est en Europe du Nord. C'est l'un des États baltes et la nation est divisée en quatre parties appelées Kurzeme, Vidzeme, Zemgale et Latgale.",
          "descriptiones": "El país está en el norte de Europa. Es uno de los estados bálticos y la nación se divide en cuatro partes llamadas Kurzeme, Vidzeme, Zemgale y Latgale."
      },
      {
          "name": "Lebanon",
          "namees": "Líbano",
          "namefr": "Liban",
          "description": "The country is in the Middle East in Western Asia. The nation was named Phoenicia under the Roman Empire. Some of the biggest temples in Antiquity were there at Heliopolis. In the eighth century Arabs conquered Phoenicia and imposed their religion Islam.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/96/Lebanon_%28orthographic_projection%29.svg",
          "code": "LB",
          "capital": "Beirut",
          "picture": "https://images.pexels.com/photos/3610377/pexels-photo-3610377.jpeg",
          "descriptionfr": "Le pays est au Moyen-Orient en Asie occidentale. La nation a été nommée Phenicia sous l'Empire romain. Certains des plus grands temples de l'antiquité étaient là à Heliopolis. Au VIIIe siècle, les Arabes ont conquis la Phénicie et imposé leur religion Islam.",
          "descriptiones": "El país está en el Medio Oriente en Asia occidental. La nación fue nombrada Fenicia bajo el Imperio Romano. Algunos de los templos más grandes en la antigüedad estaban allí en Heliópolis. En el siglo VIII, los árabes conquistaron Fenicia e impusieron su religión Islam."
      },
      {
          "name": "Lesotho",
          "namees": "Lesoto",
          "namefr": "Lesotho",
          "description": "The country is in southern Africa, it is an enclave of South Africa. It is landlocked and it is one of the only enclave country in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Location_Lesotho_AU_Africa.svg",
          "code": "LS",
          "capital": "Maseru",
          "picture": "https://images.pexels.com/photos/28451920/pexels-photo-28451920/free-photo-of-lush-cornfield-in-semonkong-lesotho-landscape.jpeg",
          "descriptionfr": "Le pays est en Afrique australe, c'est une enclave d'Afrique du Sud. Il est enclavé et c'est l'un des seuls pays enclaves au monde.",
          "descriptiones": "El país se encuentra en el sur de África, es un enclave de Sudáfrica. Es sin litoral y es uno de los únicos países del enclave del mundo."
      },
      {
          "name": "Liberia",
          "namees": "Liberia",
          "namefr": "Libéria",
          "description": "The country is on the coast of West Africa. For ships the nation is flag of convenience. Except for the coast, most of it is low mountains, with an altitude of an average 400 metres (1,300 ft) above sea level.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/91/Liberia_%28orthographic_projection%29.svg",
          "code": "LR",
          "capital": "Monrovia",
          "picture": "https://images.pexels.com/photos/28344264/pexels-photo-28344264/free-photo-of-busy-marketplace-and-traffic-in-monrovia-liberia.jpeg",
          "descriptionfr": "Le pays est sur la côte de l'Afrique de l'Ouest. Pour les navires, la nation est un drapeau de commodité. À l'exception de la côte, la majeure partie des montagnes basses, avec une altitude de 400 mètres en moyenne (1 300 pieds) au-dessus du niveau de la mer.",
          "descriptiones": "El país está en la costa de África occidental. Para los barcos, la nación es una bandera de conveniencia. Excepto por la costa, la mayor parte es de montañas bajas, con una altitud de un promedio de 400 metros (1,300 pies) sobre el nivel del mar."
      },
      {
          "name": "Libya",
          "namees": "Libia",
          "namefr": "Libye",
          "description": "The country is in Northern Africa and is the 17th largest country in the world and it covers 1,8m square kilometers (700k sq mi) of land.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/07/Libya_%28orthographic_projection%29.svg",
          "code": "LY",
          "capital": "Tripoli",
          "picture": "https://images.pexels.com/photos/12095379/pexels-photo-12095379.jpeg",
          "descriptionfr": "Le pays se trouve en Afrique du Nord et est le 17e plus grand pays du monde et couvre 1,8 m de kilomètres carrés (700k m²) de terrain.",
          "descriptiones": "El país se encuentra en el norte de África y es el 17º país más grande del mundo y cubre 1,8 millones de kilómetros cuadrados (700k millas cuadradas) de tierra."
      },
      {
          "name": "Liechtenstein",
          "namees": "Liechtenstein",
          "namefr": "Liechtenstein",
          "description": "The country is in Western Europe. It is the sixth smallest country in the world andalong with Uzbekistan, one of the only two doubly landlocked countries. This means that it is landlocked by landlocked countries.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/36/Location_Liechtenstein_Europe.png",
          "code": "LI",
          "capital": "Vaduz",
          "picture": "https://images.pexels.com/photos/5742914/pexels-photo-5742914.jpeg",
          "descriptionfr": "Le pays est en Europe occidentale. Il s'agit du sixième plus petit pays du monde et de l'Ouzbékistan, l'un des deux seuls pays à laclasse double. Cela signifie qu'il est enclavé par les pays enclavés.",
          "descriptiones": "El país está en Europa occidental. Es el sexto país más pequeño del mundo andalong con Uzbekistán, uno de los únicos dos países doblemente listones. Esto significa que está sin litoral por países sin litoral."
      },
      {
          "name": "Lithuania",
          "namees": "Lituania",
          "namefr": "Lituanie",
          "description": "The country is considered by some to be in Eastern Europe, however most say it is in Northern Europe. It is one of the Baltic states. The nation has been fighting for it's independance for centuries and acquired it on March 11th, 1990.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/ec/EU-Lithuania.svg",
          "code": "LT",
          "capital": "Vilnius",
          "picture": "https://images.pexels.com/photos/2350345/pexels-photo-2350345.png",
          "descriptionfr": "Le pays est considéré par certains comme en Europe de l'Est, mais la plupart disent que c'est en Europe du Nord. C'est l'un des états baltes. La nation se bat pour son indépendance depuis des siècles et l'a acquise le 11 mars 1990.",
          "descriptiones": "Algunos consideran que el país está en Europa del Este, sin embargo, la mayoría dice que se encuentra en el norte de Europa. Es uno de los estados bálticos. La nación ha estado luchando por su independencia durante siglos y la adquirió el 11 de marzo de 1990."
      },
      {
          "name": "Luxembourg",
          "namees": "Luxemburgo",
          "namefr": "Luxembourg",
          "description": "The country is in Western Europe and it is pretty small by land area. It was one of the first countries in the European Union and it is also a member of the Benelux. The nation is also one of Europes most densely populated.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c3/EU-Luxembourg.svg",
          "code": "LU",
          "capital": "Luxembourg",
          "picture": "https://images.pexels.com/photos/17297336/pexels-photo-17297336/free-photo-of-view-of-people-paddleboarding-on-a-body-of-water.jpeg",
          "descriptionfr": "Le pays est en Europe occidentale et il est assez petit par la superficie. C'était l'un des premiers pays de l'Union européenne et il est également membre du Benelux. La nation est également l'une des Europes les plus densément peuplées.",
          "descriptiones": "El país está en Europa occidental y es bastante pequeño en la superficie terrestre. Fue uno de los primeros países de la Unión Europea y también es miembro del Benelux. La nación también es una de las europes más densamente pobladas."
      },
      {
          "name": "North Macedonia",
          "namees": "Macedonia del Norte",
          "namefr": "Macédoine du Nord",
          "description": "The country is located on the Balkan peninsula and in Southeastern Europe. It was part of Yugoslavia and it is often called a land of lakes and mountains.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Europe-Republic_of_North_Macedonia.svg",
          "code": "MK",
          "capital": "Skopje",
          "picture": "https://images.pexels.com/photos/4248120/pexels-photo-4248120.jpeg",
          "descriptionfr": "Le pays est situé sur la péninsule des Balkans et dans le sud-est de l'Europe. Cela faisait partie de la Yougoslavie et il est souvent appelé un pays de lacs et de montagnes.",
          "descriptiones": "El país está ubicado en la península de los Balcanes y en el sureste de Europa. Era parte de Yugoslavia y a menudo se llama una tierra de lagos y montañas."
      },
      {
          "name": "Madagascar",
          "namees": "Madagascar",
          "namefr": "Madagascar",
          "description": "The country is a large island nation in the Indian Ocean. It is off of the east coast of Africa. It is the world's fourth largest island.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/41/Location_Madagascar_AU_Africa.svg",
          "code": "MG",
          "capital": "Antananarivo",
          "picture": "https://images.pexels.com/photos/2592537/pexels-photo-2592537.jpeg",
          "descriptionfr": "Le pays est une grande nation insulaire dans l'océan Indien. Il est hors de la côte est de l'Afrique. C'est la quatrième plus grande île au monde.",
          "descriptiones": "El país es una gran nación isleña en el Océano Índico. Está fuera de la costa este de África. Es la cuarta isla más grande del mundo."
      },
      {
          "name": "Malawi",
          "namees": "Malawi",
          "namefr": "Malawi",
          "description": "The country is in south-east Africa. The spoken languages are English and Chichewa. It's official language is English. The country is also called 'The Warm Heart of Africa'. The nation is one of the smallest in Africa. Lake Malawi takes about a third of the entire country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Malawi_%28orthographic_projection%29.svg",
          "code": "MW",
          "capital": "Lilongwe",
          "picture": "https://images.pexels.com/photos/27136812/pexels-photo-27136812/free-photo-of-elephants-with-calves-in-a-forest.jpeg",
          "descriptionfr": "Le pays est en Afrique du Sud-Est. Les langues parlées sont l'anglais et le chichewa. Sa langue officielle est l'anglais. Le pays est également appelé «le cœur chaleureux de l'Afrique». La nation est l'une des plus petites d'Afrique. Le lac Malawi prend environ un tiers de tout le pays.",
          "descriptiones": "El país está en el sudeste de África. Los idiomas hablados son inglés y chichewa. Su idioma oficial es el inglés. El país también se llama \"el cálido corazón de África\". La nación es una de las más pequeñas de África. El lago Malawi toma aproximadamente un tercio de todo el país."
      },
      {
          "name": "Malaysia",
          "namees": "Malasia",
          "namefr": "Malaisie",
          "description": "The country is in Southeast Asia. the nation is world's 43rd-most populous country. It is one of 17 megadiverse countries, home to a number of endemic species.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Location_Malaysia_ASEAN.svg",
          "code": "MY",
          "capital": "Kuala Lumpur",
          "picture": "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg",
          "descriptionfr": "Le pays est en Asie du Sud-Est. La nation est le 43e pays le plus peuplé du monde. C'est l'un des 17 pays mégadivers, qui abrite un certain nombre d'espèces endémiques.",
          "descriptiones": "El país está en el sudeste asiático. La nación es el país 43 más poblado del mundo. Es uno de los 17 países megadiverso, hogar de varias especies endémicas."
      },
      {
          "name": "Maldives",
          "namees": "Maldivas",
          "namefr": "Maldives",
          "description": "The country is a group of islands in the Indian Ocean. The nation has over 1,200 islands. It has more than 1126 coral reefs. It is the flattest country in the world. The highest point in it is only 2 m (7 ft) high above the level of the sea.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Maldives_%28orthographic_projection%29.svg",
          "code": "MV",
          "capital": "Male",
          "picture": "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
          "descriptionfr": "Le pays est un groupe d'îles de l'océan Indien. La nation compte plus de 1 200 îles. Il compte plus de 1126 récifs coralliens. C'est le pays le plus flatté du monde. Le point le plus élevé qui lui est à seulement 2 m (7 pi) de haut au-dessus du niveau de la mer.",
          "descriptiones": "El país es un grupo de islas en el Océano Índico. La nación tiene más de 1,200 islas. Tiene más de 1126 arrecifes de coral. Es el país más plano del mundo. El punto más alto en él tiene solo 2 m (7 pies) de altura por encima del nivel del mar."
      },
      {
          "name": "Mali",
          "namees": "Malí",
          "namefr": "Mali",
          "description": "A landlocked country in West Africa. Physical features of it include the Sahara desert in the north, with the Niger River and Sénégal River in the southern part of the country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mali_%28orthographic_projection%29.svg",
          "code": "ML",
          "capital": "Bamako",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Djenne_market.jpg",
          "descriptionfr": "Un pays enclavé en Afrique de l'Ouest. Les caractéristiques physiques comprennent le désert du Sahara dans le nord, avec la rivière Niger et la rivière Sénégal dans la partie sud du pays.",
          "descriptiones": "Un país sin litoral en África occidental. Las características físicas incluyen el desierto del Sahara en el norte, con el río Níger y el río Sénégal en la parte sur del país."
      },
      {
          "name": "Malta",
          "namees": "Malta",
          "namefr": "Malte",
          "description": "The country is in the European Union and considered to be part of Southern Europe. It is an island near the center of the Mediterranean Sea. The nation is one of the most densely populated countries in the world and it is also one of the smallest countries in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/63/EU-Malta.svg",
          "code": "MT",
          "capital": "Valletta",
          "picture": "https://images.pexels.com/photos/3567189/pexels-photo-3567189.jpeg",
          "descriptionfr": "Le pays est dans l'Union européenne et considéré comme faisant partie de l'Europe du Sud. C'est une île près du centre de la mer Méditerranée. La nation est l'un des pays les plus densément peuplés du monde et c'est aussi l'un des plus petits pays du monde.",
          "descriptiones": "El país está en la Unión Europea y se considera parte del sur de Europa. Es una isla cerca del centro del mar Mediterráneo. La nación es uno de los países más densamente poblados del mundo y también es uno de los países más pequeños del mundo."
      },
      {
          "name": "Marshall Islands",
          "namees": "Islas Marshall",
          "namefr": "Iles Marshall",
          "description": "The country is a Micronesian island nation in the western Pacific Ocean. The official languages are Marshallese and English. Each year, the inhabitants of the nation host a homecoming event so friends and relatives can get together to celebrate and spread their islands culture.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg",
          "code": "MH",
          "capital": "Majuro",
          "picture": "https://images.pexels.com/photos/18885701/pexels-photo-18885701/free-photo-of-aerial-view-of-arrak-campus-on-majuro-atoll-marshall-islands.jpeg",
          "descriptionfr": "Le pays est une nation insulaire micronésienne dans l'océan occidental du Pacifique. Les langues officielles sont Marshallese et l'anglais. Chaque année, les habitants de la nation organisent un événement de retour pour le retour afin que les amis et les proches puissent se réunir pour célébrer et répandre la culture de leurs îles.",
          "descriptiones": "El país es una nación isleña micronesia en el Océano Pacífico occidental. Los idiomas oficiales son Marshalese e Inglés. Cada año, los habitantes de la nación organizan un evento de regreso a casa para que amigos y familiares puedan reunirse para celebrar y difundir la cultura de sus islas."
      },
      {
          "name": "Mauritania",
          "namees": "Mauritania",
          "namefr": "Mauritanie",
          "description": "The country is in northwest Africa. The nation is on the Atlantic coast. It is the world's 29th-largest country. The land is flat in most places.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mauritania_%28orthographic_projection%29.svg",
          "code": "MR",
          "capital": "Nouakchott",
          "picture": "https://images.pexels.com/photos/5627263/pexels-photo-5627263.jpeg",
          "descriptionfr": "Le pays est en Afrique du Nord-Ouest. La nation est sur la côte atlantique. C'est le 29e plus grand pays du monde. Le terrain est plat dans la plupart des endroits.",
          "descriptiones": "El país está en el noroeste de África. La nación está en la costa atlántica. Es el país número 29 más grande del mundo. La tierra es plana en la mayoría de los lugares."
      },
      {
          "name": "Mauritius",
          "namees": "Mauricio",
          "namefr": "Maurice",
          "description": "The country is an island nation in the Mascarene Islands. It includes Rodrigues, Agaléga and St. Brandon as well as Mauritius. It was formerly ruled by the European countries: France, Portugal, and the United Kingdom, but is now independent from all of these European Colonies. The country is prosperous, and trades mainly with South Africa and Indian Sub Continent.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mauritius_%28orthographic_projection_with_inset%29.svg",
          "code": "MU",
          "capital": "Port Louis",
          "picture": "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg",
          "descriptionfr": "Le pays est une nation insulaire des îles Mascarene. Il comprend Rodrigues, Agalega et St. Brandon ainsi que Maurice. Il était autrefois dirigé par les pays européens: la France, le Portugal et le Royaume-Uni, mais est désormais indépendant de toutes ces colonies européennes. Le pays est prospère et se négocie principalement avec l'Afrique du Sud et le sous-continent indien.",
          "descriptiones": "El país es una nación isleña en las Islas Mascareno. Incluye Rodrigues, Agaléga y St. Brandon, así como Mauricio. Anteriormente estaba gobernado por los países europeos: Francia, Portugal y el Reino Unido, pero ahora es independiente de todas estas colonias europeas. El país es próspero y cotiza principalmente con Sudáfrica y el subtinente indio."
      },
      {
          "name": "Mexico",
          "namees": "México",
          "namefr": "Mexique",
          "description": "The country is in North America. Most people there can speak Spanish. Most modern people from the nation are descended from Native Americans such as Aztecs and Mayans and mostly have native blood. The country is Catholic.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/06/MEX_orthographic.svg",
          "code": "MX",
          "capital": "Mexico City",
          "picture": "https://images.pexels.com/photos/1589347/pexels-photo-1589347.jpeg",
          "descriptionfr": "Le pays est en Amérique du Nord. La plupart des gens peuvent parler espagnol. La plupart des gens modernes de la nation sont issus d'Amérindiens tels que les Aztèques et les Mayas et ont principalement du sang indigène. Le pays est catholique.",
          "descriptiones": "El país está en América del Norte. La mayoría de las personas pueden hablar español. La mayoría de las personas modernas de la nación descienden de nativos americanos como aztecas y mayas y en su mayoría tienen sangre nativa. El país es católico."
      },
      {
          "name": "Micronesia",
          "namees": "Micronesia",
          "namefr": "Micronésie",
          "description": "A country located in the Pacific Ocean, made up of more than 600 islands. It is known for its beautiful beaches, coral reefs, and diverse marine life.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Micronesia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29.svg",
          "code": "FM",
          "capital": "Palikir",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/b/b5/South_Tarawa_from_the_air.jpg",
          "descriptionfr": "Un pays situé dans l'océan Pacifique, composé de plus de 600 îles. Il est connu pour ses belles plages, ses récifs coralliens et sa vie marine diversifiée.",
          "descriptiones": "Un país ubicado en el Océano Pacífico, compuesto por más de 600 islas. Es conocido por sus hermosas playas, arrecifes de coral y diversa vida marina."
      },
      {
          "name": "Moldova",
          "namees": "Moldava",
          "namefr": "Moldavie",
          "description": "A small country located in Eastern Europe. The country is known for its picturesque countryside, including the wine-producing region of Nistreana.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Location_Moldova_Europe.png",
          "code": "MD",
          "capital": "Chisinau",
          "picture": "https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg",
          "descriptionfr": "Un petit pays situé en Europe de l'Est. Le pays est connu pour sa campagne pittoresque, y compris la région productrice de viticoles de Nistana.",
          "descriptiones": "Un pequeño país ubicado en Europa del Este. El país es conocido por su pintoresco campo, incluida la región productora de vinos de Nistrana."
      },
      {
          "name": "Monaco",
          "namees": "Mónaco",
          "namefr": "Monaco",
          "description": "A small, independent city-state located on the Mediterranean coast. It is known for its luxurious lifestyle, high-end shopping, and famous Monte Carlo casino. The country is also known for its beautiful beaches, as well as its historic old town.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Location_Monaco_Europe.png",
          "code": "MC",
          "capital": "Monaco",
          "picture": "https://images.pexels.com/photos/3834352/pexels-photo-3834352.jpeg",
          "descriptionfr": "Une petite état de la ville indépendante située sur la côte méditerranéenne. Il est connu pour son style de vie luxueux, ses achats haut de gamme et son célèbre casino Monte Carlo. Le pays est également connu pour ses belles plages, ainsi que pour sa vieille ville historique.",
          "descriptiones": "Una pequeña ciudad-estado independiente ubicada en la costa mediterránea. Es conocido por su lujoso estilo de vida, compras de alta gama y su famoso casino Monte Carlo. El país también es conocido por sus hermosas playas, así como por su histórico casco antiguo."
      },
      {
          "name": "Mongolia",
          "namees": "Mongolia",
          "namefr": "Mongolie",
          "description": "A large, landlocked country located in Central Asia. It is known for its vast grasslands, the Gobi Desert, and its nomadic culture.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mongolia_%28orthographic_projection%29.svg",
          "code": "MN",
          "capital": "Ulaanbaatar",
          "picture": "https://images.pexels.com/photos/2689623/pexels-photo-2689623.jpeg",
          "descriptionfr": "Un grand pays sans littoral situé en Asie centrale. Il est connu pour ses vastes prairies, le désert de Gobi et sa culture nomade.",
          "descriptiones": "Un gran país sin litoral ubicado en Asia Central. Es conocido por sus vastos praderas, el desierto de Gobi y su cultura nómada."
      },
      {
          "name": "Montenegro",
          "namees": "Montenegro",
          "namefr": "Monténégro",
          "description": "A small country located in the Balkans, known for its beautiful coastal landscapes and historic towns. The country has a rich cultural heritage, with influences from the medieval Serbian state and the Ottoman Empire.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Europe-Montenegro.svg",
          "code": "ME",
          "capital": "Podgorica",
          "picture": "https://images.pexels.com/photos/2932540/pexels-photo-2932540.jpeg",
          "descriptionfr": "Un petit pays situé dans les Balkans, connu pour ses beaux paysages côtiers et ses villes historiques. Le pays a un riche patrimoine culturel, avec des influences de l'État serbe médiéval et de l'Empire ottoman.",
          "descriptiones": "Un pequeño país ubicado en los Balcanes, conocido por sus hermosos paisajes costeros y ciudades históricas. El país tiene un rico patrimonio cultural, con influencias del estado serbio medieval y el imperio otomano."
      },
      {
          "name": "Morocco",
          "namees": "Marruecos",
          "namefr": "Maroc",
          "description": "A country located in North Africa, known for its diverse culture, rich history, and beautiful landscapes. It has influences from the Berbers, Arabs, and French.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/af/Morocco_WS-included_%28orthographic_projection%29.svg",
          "code": "MA",
          "capital": "Rabat",
          "picture": "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg",
          "descriptionfr": "Un pays situé en Afrique du Nord, connu pour sa culture diversifiée, sa riche histoire et ses beaux paysages. Il a des influences des Berbères, des Arabes et du français.",
          "descriptiones": "Un país ubicado en el norte de África, conocido por su diversa cultura, rica historia y hermosos paisajes. Tiene influencias de los bereberes, árabes y franceses."
      },
      {
          "name": "Mozambique",
          "namees": "Mozambique",
          "namefr": "Mozambique",
          "description": "A country in southeastern Africa. In 1975, it became independent from Portugal. The country was the capital of Portuguese Africa. There was a big civil war from 1977 to 1992.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozambique_%28orthographic_projection%29.svg",
          "code": "MZ",
          "capital": "Maputo",
          "picture": "https://images.pexels.com/photos/27517473/pexels-photo-27517473/free-photo-of-a-church-with-a-steeple-and-a-steeple-on-the-side.jpeg",
          "descriptionfr": "Un pays en Afrique du Sud-Est. En 1975, il est devenu indépendant du Portugal. Le pays était la capitale de l'Afrique portugaise. Il y a eu une grande guerre civile de 1977 à 1992.",
          "descriptiones": "Un país en el sureste de África. En 1975, se independizó de Portugal. El país era la capital de África portuguesa. Hubo una gran guerra civil de 1977 a 1992."
      },
      {
          "name": "Myanmar",
          "namees": "Myanmar",
          "namefr": "Myanmar",
          "description": "A country in Southeast Asia. It used to be called Burma. It is also part of South Asia. It has the Andaman Sea to the south, and the Bay of Bengal to the southwest. There are over 2,000 kilometres (1,200 mi) of coastline.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Location_Burma_%28Myanmar%29_ASEAN.svg",
          "code": "MM",
          "capital": "Naypyidaw",
          "picture": "https://images.pexels.com/photos/3560161/pexels-photo-3560161.jpeg",
          "descriptionfr": "Un pays en Asie du Sud-Est. Il s'appelait la Birmanie. Il fait également partie de l'Asie du Sud. Il a la mer d'Andaman au sud et la baie du Bengale au sud-ouest. Il y a plus de 2 000 kilomètres (1 200 mi) de littoral.",
          "descriptiones": "Un país en el sudeste asiático. Solía ​​llamarse Birmania. También es parte del sur de Asia. Tiene el Mar de Andaman al sur y la Bahía de Bengala al suroeste. Hay más de 2,000 kilómetros (1,200 millas) de costa."
      },
      {
          "name": "Namibia",
          "namees": "Namibia",
          "namefr": "Namibie",
          "description": "A country in southern Africa on the Atlantic coast. It gained independence from South Africa in 1990. Before World War I it was a German colony. German is still widely spoken in the country, although English is the official language. The name of the country is from the Namib Desert. This is said to be the oldest desert in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/67/Location_Namibia_AU_Africa.svg",
          "code": "NA",
          "capital": "Windhoek",
          "picture": "https://images.pexels.com/photos/3714891/pexels-photo-3714891.jpeg",
          "descriptionfr": "Un pays en Afrique australe sur la côte atlantique. Il a obtenu l'indépendance de l'Afrique du Sud en 1990. Avant la Première Guerre mondiale, c'était une colonie allemande. L'allemand est encore largement parlé dans le pays, bien que l'anglais soit la langue officielle. Le nom du pays provient du désert du Namib. On dit que c'est le plus ancien désert du monde.",
          "descriptiones": "Un país en el sur de África en la costa atlántica. Obtuvo la independencia de Sudáfrica en 1990. Antes de la Primera Guerra Mundial era una colonia alemana. El alemán todavía se habla ampliamente en el país, aunque el inglés es el idioma oficial. El nombre del país es del desierto de Namib. Se dice que este es el desierto más antiguo del mundo."
      },
      {
          "name": "Nauru",
          "namees": "Nauru",
          "namefr": "Nauru",
          "description": "A sovereign island nation in the Micronesian South Pacific. It is the world's smallest island nation, covering just 21 square kilometres (8 sq mi), the smallest independent republic, and the only republican state in the world without an official capital. The nation is the third least-populated country after Vatican City and Tuvalu.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/25/Nauru_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "NR",
          "capital": "Yaren",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Aerial_view_of_Nauru.jpg",
          "descriptionfr": "Une nation insulaire souveraine dans le Pacifique sud micronésien. C'est la plus petite nation insulaire du monde, couvrant seulement 21 kilomètres carrés (8 m²), la plus petite république indépendante et le seul État républicain au monde sans capitale officielle. La nation est le troisième pays le moins peuplé après la ville du Vatican et Tuvalu.",
          "descriptiones": "Una nación isleña soberana en el Pacífico Sur de Micronesia. Es la nación isleña más pequeña del mundo, que cubre solo 21 kilómetros cuadrados (8 millas cuadradas), la república independiente más pequeña y el único estado republicano del mundo sin una capital oficial. La nación es el tercer país menos poblado después de la ciudad del Vaticano y Tuvalu."
      },
      {
          "name": "Nepal",
          "namees": "Nepal",
          "namefr": "Népal",
          "description": "A country in South Asia. Mount Everest, the highest mountain in the world, and the Himalaya Mountains are in it. 12 of the world's highest mountain peaks are in the nation. It is also the birthplace of Buddha.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nepal_%28orthographic_projection%29.svg",
          "code": "NP",
          "capital": "Kathmandu",
          "picture": "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg",
          "descriptionfr": "Un pays en Asie du Sud. Mount Everest, la plus haute montagne du monde et les montagnes de l'Himalaya y sont. 12 des plus hauts sommets du monde se trouvent dans le pays. C'est aussi le lieu de naissance de Bouddha.",
          "descriptiones": "Un país en el sur de Asia. Monte Everest, la montaña más alta del mundo y las montañas del Himalaya están en ella. 12 de los picos de montaña más altos del mundo están en la nación. También es el lugar de nacimiento de Buda."
      },
      {
          "name": "Netherlands",
          "namees": "Países Bajos",
          "namefr": "Pays-Bas",
          "description": "A transcontinental sovereign state whose form of government is a constitutional monarchy. The country was formed in 1954 and is now made up of four countries, but the most notable and populated one is in Western Europe.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/41/Kingdom_of_the_Netherlands_%28orthographic_projection%29.svg",
          "code": "NL",
          "capital": "Amsterdam",
          "picture": "https://images.pexels.com/photos/2026451/pexels-photo-2026451.jpeg",
          "descriptionfr": "Un État souverain transcontinental dont la forme de gouvernement est une monarchie constitutionnelle. Le pays a été formé en 1954 et est maintenant composé de quatre pays, mais le plus notable et le plus peuplé est en Europe occidentale.",
          "descriptiones": "Un estado soberano transcontinental cuya forma de gobierno es una monarquía constitucional. El país se formó en 1954 y ahora está compuesto por cuatro países, pero el más notable y poblado es en Europa occidental."
      },
      {
          "name": "New Zealand",
          "namees": "Nueva Zelanda",
          "namefr": "Nouvelle-Zélande",
          "description": "An island country in Oceania. It is a sovereign state in the south-western part of the Pacific Ocean. It is made up of two large islands and many smaller islands. It was one of the last places in the world that humans discovered, because it is a long way away from most of the world. During its time without humans, it was a great place for an unusual range of plants and animals to develop.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/29/NZL_orthographic_NaturalEarth.svg",
          "code": "NZ",
          "capital": "Wellington",
          "picture": "https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg",
          "descriptionfr": "Un pays insulaire en Océanie. C'est un État souverain dans la partie sud-ouest de l'océan Pacifique. Il est composé de deux grandes îles et de nombreuses îles plus petites. C'était l'un des derniers endroits du monde que les humains ont découvert, car il est loin de la plupart du monde. Pendant son temps sans humains, c'était un endroit idéal pour une gamme inhabituelle de plantes et d'animaux à se développer.",
          "descriptiones": "Un país de la isla en Oceanía. Es un estado soberano en la parte suroeste del Océano Pacífico. Está compuesto por dos grandes islas y muchas islas más pequeñas. Fue uno de los últimos lugares del mundo que descubrieron los humanos, porque está muy lejos de la mayor parte del mundo. Durante su tiempo sin humanos, fue un gran lugar para que se desarrollara una gama inusual de plantas y animales."
      },
      {
          "name": "Nicaragua",
          "namees": "Nicaragua",
          "namefr": "Nicaragua",
          "description": "A country in Central America. It is the largest country in Central America. The capital of the nation is the third-largest city in Central America.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/34/NIC_orthographic.svg",
          "code": "NI",
          "capital": "Managua",
          "picture": "https://images.pexels.com/photos/3470478/pexels-photo-3470478.jpeg",
          "descriptionfr": "Un pays en Amérique centrale. C'est le plus grand pays d'Amérique centrale. La capitale de la nation est la troisième plus grande ville d'Amérique centrale.",
          "descriptiones": "Un país en América Central. Es el país más grande de América Central. La capital de la nación es la tercera ciudad más grande de América Central."
      },
      {
          "name": "Niger",
          "namees": "Níger",
          "namefr": "Niger",
          "description": "A country in western Africa. It's official language is French. The nation is landlocked. It gets its name from the Niger River, whose name possibly comes from the Berber word 'River of Rivers'.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/88/Niger_%28orthographic_projection%29.svg",
          "code": "NE",
          "capital": "Niamey",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Niger%2C_Barkiawal_B%C3%A9ri_%2804%29%2C_vue_a%C3%A9rienne_avec_RN25.jpg",
          "descriptionfr": "Un pays en Afrique occidentale. Sa langue officielle est le français. La nation est enclavée. Il tire son nom de la rivière Niger, dont le nom provient peut-être du mot berbère «River of Rivers».",
          "descriptiones": "Un país en África occidental. Su idioma oficial es el francés. La nación está sin litoral. Obtiene su nombre del río Níger, cuyo nombre posiblemente proviene de la palabra bereber 'río de ríos'."
      },
      {
          "name": "Nigeria",
          "namees": "Nigeria",
          "namefr": "Nigeria",
          "description": "A country in West Africa. It has a population of 216.7 million, more than any other country in Africa. The nation is a large country, with the largest population in Africa and is the most powerful in Africa. In whole Africa and in the world, the country has a record for the lowest median age.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nigeria_%28orthographic_projection%29.svg",
          "code": "NG",
          "capital": "Abuja",
          "picture": "https://images.pexels.com/photos/3172830/pexels-photo-3172830.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Ouest. Il compte 216,7 millions d'habitants, plus que tout autre pays en Afrique. La nation est un grand pays, avec la plus grande population d'Afrique et est la plus puissante d'Afrique. En Afrique entière et dans le monde, le pays a un record pour l'âge médian le plus bas.",
          "descriptiones": "Un país en África occidental. Tiene una población de 216.7 millones, más que cualquier otro país de África. La nación es un país grande, con la población más grande de África y es la más poderosa de África. En África entera y en el mundo, el país tiene un récord de la edad media más baja."
      },
      {
          "name": "Norway",
          "namees": "Noruega",
          "namefr": "Norvège",
          "description": "A country in North Europe. It is on the western part of the Scandinavian peninsula. The southern coast of the nation touches the Oslofjord, Skagerrak, and the North Sea. It is also the Northest country in Europe.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/01/Europe-Norway.svg",
          "code": "NO",
          "capital": "Oslo",
          "picture": "https://images.pexels.com/photos/713081/pexels-photo-713081.jpeg",
          "descriptionfr": "Un pays en Europe du Nord. Il se trouve sur la partie ouest de la péninsule scandinave. La côte sud de la nation touche à Oslofjord, Skagerrak et la mer du Nord. C'est aussi le pays le plus au nord de l'Europe.",
          "descriptiones": "Un país en el norte de Europa. Está en la parte occidental de la península escandinava. La costa sur de la nación toca el Oslofjord, Skagerrak y el Mar del Norte. También es el país del norte de Europa."
      },
      {
          "name": "Oman",
          "namees": "Omán",
          "namefr": "Oman",
          "description": "A country in the Southwestern part of Asia, on the southeastern coast of the Arabian Peninsula. The coast is formed by the Arabian Sea to the south and east, and the Gulf of Oman to the northeast. The country is a monarchy, ruled by a Sultan.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Oman_on_the_globe_%28Afro-Eurasia_centered%29.svg",
          "code": "OM",
          "capital": "Muscat",
          "picture": "https://images.pexels.com/photos/28551695/pexels-photo-28551695/free-photo-of-stunning-landscape-of-ibri-desert-in-oman.jpeg",
          "descriptionfr": "Un pays du sud-ouest de l'Asie, sur la côte sud-est de la péninsule arabe. La côte est formée par la mer d'Oman au sud et l'est et le golfe d'Oman au nord-est. Le pays est une monarchie, gouvernée par un sultan.",
          "descriptiones": "Un país en la parte suroeste de Asia, en la costa sureste de la Península Arábiga. La costa está formada por el Mar Arábigo hacia el sur y el este, y el Golfo de Omán hacia el noreste. El país es una monarquía, gobernada por un sultán."
      },
      {
          "name": "Pakistan",
          "namees": "Pakistán",
          "namefr": "Pakistan",
          "description": "A country in South Asia. It has a long coastline along the Arabian Sea in the south. The nation has the fifth largest population in the world, 34th largest country in the world and it has the seventh largest army in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pakistan_%28orthographic_projection%29.svg",
          "code": "PK",
          "capital": "Islamabad",
          "picture": "https://images.pexels.com/photos/1299383/pexels-photo-1299383.jpeg",
          "descriptionfr": "Un pays en Asie du Sud. Il a un long littoral le long de la mer d'Oman dans le sud. La nation possède la cinquième plus grande population du monde, 34e plus grand pays du monde et a la septième plus grande armée du monde.",
          "descriptiones": "Un país en el sur de Asia. Tiene una larga costa a lo largo del Mar Arábigo en el sur. La nación tiene la quinta población más grande del mundo, el 34º país más grande del mundo y tiene el séptimo ejército más grande del mundo."
      },
      {
          "name": "Palau",
          "namees": "Palau",
          "namefr": "Palaos",
          "description": "An island nation in Oceania. It got independence from United Nations trusteeship administration in 1994. It is one of the world's youngest and smallest nations. It is sometimes referred to in English under its native name Belau.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/57/Palau_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29.svg",
          "code": "PW",
          "capital": "Ngerulmud",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Palau_Maritime_Police_vessel.jpg",
          "descriptionfr": "Une nation insulaire en Océanie. Il a obtenu l'indépendance de l'administration de la tutelle des Nations Unies en 1994. C'est l'une des plus jeunes et des plus petites nations du monde. Il est parfois mentionné en anglais sous son nom natal Belau.",
          "descriptiones": "Una nación isleña en Oceanía. Obtuvo la independencia de la administración de la confianza de las Naciones Unidas en 1994. Es una de las naciones más jóvenes y más pequeñas del mundo. A veces se hace referencia en inglés con su nombre nativo Belau."
      },
      {
          "name": "Palestine",
          "namees": "Palestina",
          "namefr": "Palestine",
          "description": "A country in the Middle East. It is recognized by 141 United Nations members. Since 2012 it has non-member observer status in the United Nations. This amounts to a de facto, or implicit, recognition of statehood.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29.svg",
          "code": "PS",
          "capital": "Ramallah",
          "picture": "https://images.pexels.com/photos/3805146/pexels-photo-3805146.jpeg",
          "descriptionfr": "Un pays au Moyen-Orient. Il est reconnu par 141 membres des Nations Unies. Depuis 2012, il a un statut d'observateur non membre aux Nations Unies. Cela équivaut à une reconnaissance de facto, ou implicite, de l'État.",
          "descriptiones": "Un país en el Medio Oriente. Es reconocido por 141 miembros de las Naciones Unidas. Desde 2012 tiene el estatus de observador no miembro en las Naciones Unidas. Esto equivale a un reconocimiento de facto, o implícito, de la condición de estado."
      },
      {
          "name": "Panama",
          "namees": "Panamá",
          "namefr": "Panama",
          "description": "A country in North America. It is most famous for the Panama Canal. The nation is between the Caribbean Sea and the Pacific Ocean. Most of the people in the country are Roman Catholic (about 80%).",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/39/PAN_orthographic.svg",
          "code": "PA",
          "capital": "Panama City",
          "picture": "https://images.pexels.com/photos/1494576/pexels-photo-1494576.jpeg",
          "descriptionfr": "Un pays en Amérique du Nord. Il est surtout célèbre pour le canal de Panama. La nation est entre la mer des Caraïbes et l'océan Pacifique. La plupart des habitants du pays sont catholiques romains (environ 80%).",
          "descriptiones": "Un país en América del Norte. Es más famoso por el Canal de Panamá. La nación se encuentra entre el Mar del Caribe y el Océano Pacífico. La mayoría de las personas en el país son católicas romanas (alrededor del 80%)."
      },
      {
          "name": "Papua New Guinea",
          "namees": "Papúa Nueva Guinea",
          "namefr": "Papouasie Nouvelle Guinée",
          "description": "An island country located on the Pacific Ocean. It is the east half of New Guinea island, plus some nearby islands. The population of the country are mostly the Indigenous peoples of the island. The island is in both Australasia and Oceania.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/79/Papua_New_Guinea_%28orthographic_projection%29.svg",
          "code": "PG",
          "capital": "Port Moresby",
          "picture": "https://images.pexels.com/photos/10404248/pexels-photo-10404248.png",
          "descriptionfr": "Un pays insulaire situé sur l'océan Pacifique. Il s'agit de la moitié est de l'île de la Nouvelle-Guinée, plus quelques îles voisines. La population du pays est principalement les peuples autochtones de l'île. L'île est en Australasie et en Océanie.",
          "descriptiones": "Un país isleño ubicado en el Océano Pacífico. Es la mitad este de la isla de Nueva Guinea, además de algunas islas cercanas. La población del país son principalmente los pueblos indígenas de la isla. La isla está tanto en Australasia como en Oceanía."
      },
      {
          "name": "Paraguay",
          "namees": "Paraguay",
          "namefr": "Paraguay",
          "description": "A small country in South America. It is landlocked, meaning that it does not touch the ocean. The main languages are Spanish and GuaranA. Over 20% of the population lives below the poverty line.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/80/Paraguay_%28orthographic_projection%29.svg",
          "code": "PY",
          "capital": "Asuncion",
          "picture": "https://images.pexels.com/photos/5382674/pexels-photo-5382674.jpeg",
          "descriptionfr": "Un petit pays en Amérique du Sud. Il est enclavé, ce qui signifie qu'il ne touche pas l'océan. Les langues principales sont l'espagnol et le guarana. Plus de 20% de la population vit en dessous du seuil de pauvreté.",
          "descriptiones": "Un pequeño país en América del Sur. Es sin litoral, lo que significa que no toca el océano. Los idiomas principales son el español y la guarana. Más del 20% de la población vive por debajo de la línea de pobreza."
      },
      {
          "name": "Peru",
          "namees": "Perú",
          "namefr": "Pérou",
          "description": "A country in South America. The ruins of Machu Picchu, the Andes mountains, and the source of the Amazon River are all found in it.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/07/PER_orthographic.svg",
          "code": "PE",
          "capital": "Lima",
          "picture": "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg",
          "descriptionfr": "Un pays en Amérique du Sud. Les ruines de Machu Picchu, les Andes et la source de la rivière Amazon se trouvent toutes dedans.",
          "descriptiones": "Un país en América del Sur. Las ruinas de Machu Picchu, las montañas de los Andes y la fuente del río Amazonas se encuentran en él."
      },
      {
          "name": "Philippines",
          "namees": "Filipinas",
          "namefr": "Philippines",
          "description": "An island country in Southeast Asia in the Pacific Ocean. It has 7,641 islands. Spain, and the United States, colonized the country for many centuries. The nation and East Timor are the only nations in East Asia where most people are Christians.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/6d/PHL_orthographic.svg",
          "code": "PH",
          "capital": "Manila",
          "picture": "https://images.pexels.com/photos/757444/pexels-photo-757444.jpeg",
          "descriptionfr": "Un pays insulaire en Asie du Sud-Est dans l'océan Pacifique. Il compte 7 641 îles. L'Espagne et les États-Unis ont colonisé le pays pendant de nombreux siècles. La nation et le Timor oriental sont les seules nations d'Asie de l'Est où la plupart des gens sont chrétiens.",
          "descriptiones": "Un país isleño en el sudeste asiático en el Océano Pacífico. Tiene 7,641 islas. España y Estados Unidos colonizaron el país durante muchos siglos. La nación y el Timor Oriental son las únicas naciones en el este de Asia donde la mayoría de las personas son cristianos."
      },
      {
          "name": "Poland",
          "namees": "Polonia",
          "namefr": "Pologne",
          "description": "A country in Central Europe. The Baltic Sea is to the north of it. The total land area of the nation is about 312,679 km2 (120,728 mi2), slightly larger than Oman. It makes the nation the 77th largest country in the world with over 38.5 million people.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/9b/EU-Poland.svg",
          "code": "PL",
          "capital": "Warsaw",
          "picture": "https://images.pexels.com/photos/2091018/pexels-photo-2091018.jpeg",
          "descriptionfr": "Un pays en Europe centrale. La mer Baltique est au nord de celle-ci. La superficie totale de la nation est d'environ 312 679 km2 (120 728 mi2), légèrement plus grande qu'Oman. Il fait de la nation le 77e plus grand pays du monde avec plus de 38,5 millions de personnes.",
          "descriptiones": "Un país en Europa Central. El mar Báltico está al norte de la misma. La superficie total de la nación es de aproximadamente 312,679 km2 (120,728 MI2), ligeramente más grande que Omán. Hace que la nación sea el 77º país más grande del mundo con más de 38.5 millones de personas."
      },
      {
          "name": "Portugal",
          "namees": "Portugal",
          "namefr": "le Portugal",
          "description": "A country in Southern Europe on the Iberian Peninsula. It is the westernmost country of Europe and part of the Mediterranean. It has been a member of the European Union since 1986. The nation was under a dictatorship between 1926 and 1974 called Estado Novo.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a5/EU-Portugal_%28orthographic_projection%29.svg",
          "code": "PT",
          "capital": "Lisbon",
          "picture": "https://images.pexels.com/photos/1013427/pexels-photo-1013427.jpeg",
          "descriptionfr": "Un pays du sud de l'Europe sur la péninsule ibérique. C'est le pays le plus à l'ouest de l'Europe et une partie de la Méditerranée. Il est membre de l'Union européenne depuis 1986. La nation était sous une dictature entre 1926 et 1974 appelée Estado Novo.",
          "descriptiones": "Un país en el sur de Europa en la península ibérica. Es el país más occidental de Europa y parte del Mediterráneo. Ha sido miembro de la Unión Europea desde 1986. La nación estaba bajo una dictadura entre 1926 y 1974 llamada Estado Novo."
      },
      {
          "name": "Qatar",
          "namees": "Katar",
          "namefr": "Qatar",
          "description": "A sovereign country in Western Asia. It is on a small Peninsula on the northeastern coast of the Arabian Peninsula. The nation only shares a border with 1 country, and the rest of its territory is surrounded by the Persian Gulf.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d4/QAT_orthographic.svg",
          "code": "QA",
          "capital": "Doha",
          "picture": "https://images.pexels.com/photos/3703813/pexels-photo-3703813.jpeg",
          "descriptionfr": "Un pays souverain en Asie occidentale. Il se trouve sur une petite péninsule sur la côte nord-est de la péninsule arabique. La nation ne partage une frontière avec 1 pays, et le reste de son territoire est entouré du golfe Persique.",
          "descriptiones": "Un país soberano en Asia occidental. Está en una pequeña península en la costa noreste de la Península Arábiga. La nación solo comparte una frontera con 1 país, y el resto de su territorio está rodeado por el Golfo Pérsico."
      },
      {
          "name": "Romania",
          "namees": "Rumania",
          "namefr": "Roumanie",
          "description": "A country in southeastern Europe. It is north of the Balkan Peninsula, on the Lower Danube River. The western part of the country is circled by the Carpathian Mountains. It also has a border on the Black Sea. Most of the Danube Delta is found inside the nation.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c5/EU-Romania_%28orthographic_projection%29.svg",
          "code": "RO",
          "capital": "Bucharest",
          "picture": "https://images.pexels.com/photos/3955001/pexels-photo-3955001.jpeg",
          "descriptionfr": "Un pays du sud-est de l'Europe. Il se trouve au nord de la péninsule des Balkans, sur la rivière du Danube inférieur. La partie ouest du pays est encerclée par les montagnes des Carpates. Il a également une frontière sur la mer Noire. La majeure partie du delta du Danube se trouve à l'intérieur de la nation.",
          "descriptiones": "Un país en el sureste de Europa. Está al norte de la península de los Balcanes, en el río Bajo Danubio. La parte occidental del país está rodeada por las montañas de los Cárpatos. También tiene una frontera en el Mar Negro. La mayor parte del Delta del Danubio se encuentra dentro de la nación."
      },
      {
          "name": "Russia",
          "namees": "Rusia",
          "namefr": "Russie",
          "description": "A country in Eastern Europe and North Asia. It has land from the Baltic Sea to the Bering Strait. It is the largest country in the world. It is the most populous country in Europe. Its capital city is also the largest city in Europe.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Russian_Federation_%28orthographic_projection%29_-_Annexed_Territories_disputed.svg",
          "code": "RU",
          "capital": "Moscow",
          "picture": "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg",
          "descriptionfr": "Un pays en Europe de l'Est et en Asie du Nord. Il a des terres de la mer Baltique au détroit de Béring. C'est le plus grand pays du monde. Si ce n'est pas un cadeau, je ne sais pas ce qui est lol. C'est le pays le plus peuplé d'Europe. Sa capitale est également la plus grande ville d'Europe.",
          "descriptiones": "Un país en Europa del Este y Asia del Norte. Tiene tierra desde el Mar Báltico hasta el Estrecho de Bering. Es el país más grande del mundo. Si eso no es un sorteo, no sé qué es LOL. Es el país más poblado de Europa. Su ciudad capital también es la ciudad más grande de Europa."
      },
      {
          "name": "Rwanda",
          "namees": "Ruanda",
          "namefr": "Rwanda",
          "description": "A landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. It is highly elevated, giving it the soubriquet \"land of a thousand hills\", with its geography dominated by mountains in the west and savanna to the southeast, with numerous lakes throughout the country. The country had a genocide in 1994, in which over one million people were killed.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f6/LocationRwanda.svg",
          "code": "RW",
          "capital": "Kigali",
          "picture": "https://images.pexels.com/photos/27605609/pexels-photo-27605609/free-photo-of-african-shepherds.jpeg",
          "descriptionfr": "Un pays enclavé dans la Grande Vallée de Rift d'Afrique centrale, où la région africaine des Grands Lacs et l'Afrique du Sud-Est convergent. Il est très élevé, lui donnant le Soubriquet \"Land of a Thousand Hills\", avec sa géographie dominée par les montagnes à l'ouest et la savane au sud-est, avec de nombreux lacs à travers le pays. Le pays avait un génocide en 1994, au cours duquel plus d'un million de personnes ont été tuées.",
          "descriptiones": "Un país sin litoral en el Gran Valle del Rift de África Central, donde convergen la región de los Grandes Lagos africanos y el sureste de África. Es muy elevado, dándole la \"tierra de mil colinas\" de Soubriquet, con su geografía dominada por montañas en el oeste y sabana al sureste, con numerosos lagos en todo el país. El país tenía un genocidio en 1994, en el que más de un millón de personas fueron asesinadas."
      },
      {
          "name": "Saint Kitts and Nevis",
          "namees": "Saint Kitts y Nevis",
          "namefr": "Saint-Christophe-et-Niévès",
          "description": "A federal nation made up of two small islands in the Caribbean Sea. It is the smallest independent country in the Western Hemisphere.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/5d/KNA_orthographic.svg",
          "code": "KN",
          "capital": "Basseterre",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/0/00/Saint_Kitts_and_Nevis_Government_building_2.JPG",
          "descriptionfr": "Une nation fédérale composée de deux petites îles dans la mer des Caraïbes. C'est le plus petit pays indépendant de l'hémisphère occidental.",
          "descriptiones": "Una nación federal compuesta por dos pequeñas islas en el mar Caribe. Es el país independiente más pequeño del hemisferio occidental."
      },
      {
          "name": "Saint Lucia",
          "namees": "Santa Lucía",
          "namefr": "Sainte-Lucie",
          "description": "A tropical island country in the eastern Caribbean Sea. It is a part of the Lesser Antilles. As of 2010 there are about 174,000 people. The official language is English. Saint Lucian Creole French (Kwéyòl), which is a French-based Creole is spoken by 95% of the people.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29.svg",
          "code": "LC",
          "capital": "Castries",
          "picture": "https://images.pexels.com/photos/19213366/pexels-photo-19213366/free-photo-of-sulphur-springs-geothermal-field-on-the-island-of-saint-lucia.jpeg",
          "descriptionfr": "Un pays insulaire tropical dans la mer des Caraïbes orientales. Cela fait partie des Antilles moindres. En 2010, il y a environ 174 000 personnes. La langue officielle est l'anglais. Saint-Lucian Créole français (Kwéyòl), qui est un créole en français est parlé par 95% des gens.",
          "descriptiones": "Un país de la isla tropical en el mar del Caribe Oriental. Es una parte de las Antillas Menores. A partir de 2010 hay alrededor de 174,000 personas. El idioma oficial es el inglés. Santo Lucian Creole French (Kwéyòl), que es un criollo francés, es hablado por el 95% de las personas."
      },
      {
          "name": "Saint Vincent and the Grenadines",
          "namees": "San Vicente y las Granadinas",
          "namefr": "Saint-Vincent-et-les-Grenadines",
          "description": "An island nation in the Caribbean Sea. It is a member of the Commonwealth of Nations, the Organisation of Eastern Caribbean States and CARICOM. The country speaks English as its official language.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/70/VCT_orthographic.svg",
          "code": "VC",
          "capital": "Kingstown",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/e/e9/St._Vincent%2C_Karibik_-_Kingstown_-_Looking_north_from_Fort_Charlotte_-_panoramio.jpg",
          "descriptionfr": "Une nation insulaire de la mer des Caraïbes. Il est membre du Commonwealth des nations, de l'Organisation des États des Caraïbes orientales et de la CARICOM. Le pays parle l'anglais comme sa langue officielle.",
          "descriptiones": "Una nación isleña en el mar Caribe. Es miembro de la Commonwealth of Nations, la Organización de los Estados del Caribe Oriental y Caricom. El país habla inglés como su idioma oficial."
      },
      {
          "name": "Samoa",
          "namees": "Samoa",
          "namefr": "Samoa",
          "description": "A country in the Pacific Ocean. It became independent from New Zealand in 1962. It has two islands, including Upolu and Savai'i. The capital of the nation is on the island of Upolu.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/74/Samoa_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "WS",
          "capital": "Apia",
          "picture": "https://images.pexels.com/photos/19844888/pexels-photo-19844888/free-photo-of-aerial-view-of-a-hotel-in-apia.jpeg",
          "descriptionfr": "Un pays de l'océan Pacifique. Il est devenu indépendant de la Nouvelle-Zélande en 1962. Il a deux îles, dont Upolu et Savai'i. La capitale de la nation se trouve sur l'île d'Upolu.",
          "descriptiones": "Un país en el Océano Pacífico. Se volvió independiente de Nueva Zelanda en 1962. Tiene dos islas, incluidas Upolu y Savai'i. La capital de la nación está en la isla de Upolu."
      },
      {
          "name": "San Marino",
          "namees": "San Marino",
          "namefr": "Saint Marin",
          "description": "A country in Southern Europe. It is one of the smallest countries in the world. The nation is fully surrounded by Italy, this is called an enclave, and this nation is one of the only countries in the world that is an enclave.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/79/Location_San_Marino_Europe.png",
          "code": "SM",
          "capital": "San Marino",
          "picture": "https://images.pexels.com/photos/2564850/pexels-photo-2564850.jpeg",
          "descriptionfr": "Un pays du sud de l'Europe. C'est l'un des plus petits pays du monde. La nation est entièrement entourée de l'Italie, c'est ce qu'on appelle une enclave, et cette nation est l'un des seuls pays au monde à être une enclave.",
          "descriptiones": "Un país en el sur de Europa. Es uno de los países más pequeños del mundo. La nación está completamente rodeada de Italia, esto se llama enclave, y esta nación es uno de los únicos países del mundo que es un enclave."
      },
      {
          "name": "Sao Tome and Principe",
          "namees": "Santo Tomé y Príncipe",
          "namefr": "Sao tome et principe",
          "description": "An island nation in Central Africa, it is located off the Gulf of Guinea. The nation is the second-smallest and second-least populous African sovereign state after Seychelles as well as the smallest and least populous Portuguese-speaking country in the world.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa.svg",
          "code": "ST",
          "capital": "Sao Tome",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/2/29/Sao_Tome_Cathedral_7_%2816223085806%29.jpg",
          "descriptionfr": "Une nation insulaire en Afrique centrale, elle est située au large du golfe de Guinée. La nation est l'État souverain africain le plus petit et le plus petit après les Seychelles ainsi que le pays portugais le plus petit et le moins peuplé au monde.",
          "descriptiones": "Una nación isleña en África Central, se encuentra fuera del Golfo de Guinea. La nación es el segundo estado soberano africano más pequeño y segundo pobre después de Seychelles, así como el país de habla portuguesa más pequeña y menos poblada del mundo."
      },
      {
          "name": "Saudi Arabia",
          "namees": "Arabia Saudita",
          "namefr": "Arabie Saoudite",
          "description": "A country in Western Asia including most of the Arabian Peninsula. It is geographically the 5th-largest state in Asia and 2nd-largest state in the Arab world after Algeria.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/47/Saudi_Arabia_%28orthographic_projection%29.svg",
          "code": "SA",
          "capital": "Riyadh",
          "picture": "https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg",
          "descriptionfr": "Un pays en Asie occidentale, y compris la majeure partie de la péninsule arabique. C'est géographiquement le 5e plus grand État d'Asie et le 2e plus grand État du monde arabe après l'Algérie.",
          "descriptiones": "Un país en Asia occidental, incluida la mayoría de la Península Arábiga. Es geográficamente el quinto estado más grande de Asia y el segundo estado más grande del mundo árabe después de Argelia."
      },
      {
          "name": "Senegal",
          "namees": "Senegal",
          "namefr": "Sénégal",
          "description": "A country in West Africa. It has population of about 13 million. The climate is tropical with two seasons: the dry season and the rainy cold season. The nation was given independence by France in 1960.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/33/Location_Senegal_AU_Africa.svg",
          "code": "SN",
          "capital": "Dakar",
          "picture": "https://images.pexels.com/photos/18189706/pexels-photo-18189706/free-photo-of-town-on-sea-shore-in-senegal.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Ouest. Il compte environ 13 millions d'habitants. Le climat est tropical avec deux saisons: la saison sèche et la saison froide pluvieuse. La nation a été indépendante de la France en 1960.",
          "descriptiones": "Un país en África occidental. Tiene una población de aproximadamente 13 millones. El clima es tropical con dos temporadas: la estación seca y la temporada de frío lluvioso. La nación recibió independencia por Francia en 1960."
      },
      {
          "name": "Serbia",
          "namees": "Serbia",
          "namefr": "Serbie",
          "description": "A landlocked country at the crossroads of Southeast and Central Europe, located in the Balkans and the Pannonian Plain. A survey from 2014 showed that 47% of the citizens of the country favour the Latin alphabet, 36% favour the Cyrillic one and 17% have no preference.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/95/Location_map_of_Serbia_on_the_globe_%282011%29.svg",
          "code": "RS",
          "capital": "Belgrade",
          "picture": "https://images.pexels.com/photos/28531964/pexels-photo-28531964/free-photo-of-scenic-alpine-farm-landscape-with-cows.jpeg",
          "descriptionfr": "Pays enclavé au carrefour de l'Europe du Sud-Est et de l'Europe centrale, situé dans les Balkans et la plaine de Pannonie. Un sondage réalisé en 2014 a montré que 47 % des citoyens du pays sont favorables à l'alphabet latin, 36 % à l'alphabet cyrillique et 17 % n'ont pas de préférence.",
          "descriptiones": "País sin salida al mar situado en la encrucijada del sureste y el centro de Europa, ubicado en los Balcanes y la llanura panónica. Una encuesta de 2014 mostró que el 47% de los ciudadanos del país está a favor del alfabeto latino, el 36% del cirílico y el 17% no tiene preferencias."
      },
      {
          "name": "Seychelles",
          "namees": "Seychelles",
          "namefr": "les Seychelles",
          "description": "An African country in the Indian Ocean. The official languages are Creole, English, and French. It is a republic is made up of 115 islands. The nation had legal slavery and were part of the slave trade. Most of the people are descendants of freed slaves, who make up about 90% of the population.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Location_Seychelles_AU_Africa.svg",
          "code": "SC",
          "capital": "Victoria",
          "picture": "https://images.pexels.com/photos/2956511/pexels-photo-2956511.jpeg",
          "descriptionfr": "Un pays africain dans l'océan Indien. Les langues officielles sont créoles, anglais et français. C'est une république composée de 115 îles. La nation avait l'esclavage légal et faisait partie de la traite des esclaves. La plupart des gens sont des descendants d'esclaves libérés, qui représentent environ 90% de la population.",
          "descriptiones": "Un país africano en el Océano Índico. Los idiomas oficiales son criollo, inglés y francés. Es una república está compuesta por 115 islas. La nación tenía esclavitud legal y era parte del comercio de esclavos. La mayoría de las personas son descendientes de esclavos liberados, que representan alrededor del 90% de la población."
      },
      {
          "name": "Sierra Leone",
          "namees": "Sierra Leona",
          "namefr": "Sierra Leone",
          "description": "A country in West Africa. The official language is English. The country was first made as a place where freed slaves could live. From 1991 until 2000, there was a civil war in it between rebels and the government. The war is now over. The nation is known for its blood diamonds. These were mined and sold during the civil war for weapons.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Location_Sierra_Leone_AU_Africa.svg",
          "code": "SL",
          "capital": "Freetown",
          "picture": "https://images.pexels.com/photos/27791782/pexels-photo-27791782/free-photo-of-street-scenes.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Ouest. La langue officielle est l'anglais. Le pays a été fait pour la première fois comme un endroit où les esclaves libérés pouvaient vivre. De 1991 à 2000, il y a eu une guerre civile entre les rebelles et le gouvernement. La guerre est maintenant terminée. La nation est connue pour ses diamants de sang. Ceux-ci ont été extraits et vendus pendant la guerre civile pour les armes.",
          "descriptiones": "Un país en África occidental. El idioma oficial es el inglés. El país se hizo por primera vez como un lugar donde los esclavos liberados podían vivir. Desde 1991 hasta 2000, hubo una guerra civil entre los rebeldes y el gobierno. La guerra ha terminado. La nación es conocida por sus diamantes de sangre. Estos fueron extraídos y vendidos durante la Guerra Civil por armas."
      },
      {
          "name": "Singapore",
          "namees": "Singapur",
          "namefr": "Singapour",
          "description": "A sovereign country as well as a city-state. It is an island state at the southern end of the Malay Peninsula in Asia, between the Straits of Malacca and the South China Sea. The nation is about one degree of latitude north of the equator.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/37/Singapore_on_the_globe_%28Southeast_Asia_centered%29_zoom.svg",
          "code": "SG",
          "capital": "Singapore",
          "picture": "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg",
          "descriptionfr": "Un pays souverain ainsi qu'un État de la ville. C'est un État insulaire à l'extrémité sud de la péninsule malaise en Asie, entre le détroit de Malacca et la mer de Chine méridionale. La nation est à environ un degré de latitude au nord de l'équateur.",
          "descriptiones": "Un país soberano y una ciudad-estado. Es un estado isleño en el extremo sur de la península malaya en Asia, entre el estrecho de Malacca y el Mar del Sur de China. La nación es aproximadamente un grado de latitud al norte del ecuador."
      },
      {
          "name": "Slovakia",
          "namees": "Eslovaquia",
          "namefr": "Slovaquie",
          "description": "A landlocked country in Central Europe. Its capital is the only capital in the world that borders with other two countries. The nation has been a member of the European Union since 2004 and its official currency is the Euro.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/1d/EU-Slovakia.svg",
          "code": "SK",
          "capital": "Bratislava",
          "picture": "https://images.pexels.com/photos/2990671/pexels-photo-2990671.jpeg",
          "descriptionfr": "Un pays sans littoral en Europe centrale. Son capital est le seul capital au monde qui borde les deux autres pays. La nation est membre de l'Union européenne depuis 2004 et sa monnaie officielle est l'euro.",
          "descriptiones": "Un país sin litoral en Europa Central. Su capital es la única capital en el mundo que limita con otros dos países. La nación ha sido miembro de la Unión Europea desde 2004 y su moneda oficial es el euro."
      },
      {
          "name": "Slovenia",
          "namees": "Eslovenia",
          "namefr": "Slovènie",
          "description": "A country in Southern Europe. It's leading exports are manufactured goods and aluminium. The nation is a parliamentary republic. The country is a member of the European Union and NATO. The economy of it is small, open, and export-oriented.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/84/EU-Slovenia.svg",
          "code": "SI",
          "capital": "Ljubljana",
          "picture": "https://images.pexels.com/photos/1556145/pexels-photo-1556145.jpeg",
          "descriptionfr": "Un pays du sud de l'Europe. Ses principales exportations sont des produits manufacturés et de l'aluminium. La nation est une république parlementaire. Le pays est membre de l'Union européenne et de l'OTAN. L'économie est petite, ouverte et orientée vers l'exportation.",
          "descriptiones": "Un país en el sur de Europa. Sus principales exportaciones son productos fabricados y aluminio. La nación es una república parlamentaria. El país es miembro de la Unión Europea y la OTAN. La economía es pequeña, abierta y orientada a las exportaciones."
      },
      {
          "name": "Solomon Islands",
          "namees": "Islas Salomón",
          "namefr": "Les îles Salomon",
          "description": "An island country consisting of six major islands and over 900 smaller islands, it has a land area of 28,400 square kilometres, and a population of about 700,000. Its capital is located on the largest island, Guadalcanal",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29.svg",
          "code": "SB",
          "capital": "Honiara",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Medium_shot_of_idyllic_villages_beach_near_Auki%2C_the_capital_of_Malaita._%2810702263414%29.jpg",
          "descriptionfr": "Un pays insulaire composé de six îles grandes et de plus de 900 îles plus petites, elle a une superficie de 28 400 kilomètres carrés et une population d'environ 700 000 habitants. Sa capitale est située sur la plus grande île, Guadalcanal",
          "descriptiones": "Un país de la isla que consta de seis islas principales y más de 900 islas más pequeñas, tiene un área de tierra de 28,400 kilómetros cuadrados y una población de aproximadamente 700,000. Su capital se encuentra en la isla más grande, Guadalcanal"
      },
      {
          "name": "Somalia",
          "namees": "Somalia",
          "namefr": "Somalie",
          "description": "A country in Eastern Africa, it is also located on the Horn of Africa. The nation has a hot, dry climate.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Somalia_%28orthographic_projection%29.svg",
          "code": "SO",
          "capital": "Mogadishu",
          "picture": "https://images.pexels.com/photos/5301310/pexels-photo-5301310.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Est, il est également situé sur la corne de l'Afrique. La nation a un climat chaud et sec.",
          "descriptiones": "Un país en el este de África, también se encuentra en el Cuerno de África. La nación tiene un clima cálido y seco."
      },
      {
          "name": "South Africa",
          "namees": "Sudáfrica",
          "namefr": "Afrique du Sud",
          "description": "A country in the Southern region of Africa. The country has three capitals for different purposes. The nation also has 11 national languages.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/85/Location_South_Africa_AU_Africa.svg",
          "code": "ZA",
          "capital": "Pretoria",
          "picture": "https://images.pexels.com/photos/3814243/pexels-photo-3814243.jpeg",
          "descriptionfr": "Un pays de la région sud de l'Afrique. Le pays a trois capitales à des fins différentes. La nation a également 11 langues nationales.",
          "descriptiones": "Un país en la región sur de África. El país tiene tres capitales para diferentes propósitos. La nación también tiene 11 idiomas nacionales."
      },
      {
          "name": "South Sudan",
          "namees": "Sudán del Sur",
          "namefr": "Soudan du sud",
          "description": "A landlocked country in East Africa. It was part of Sudan until 2011. The nation includes the vast swamp region of the Sudd formed by the White Nile, locally called the Bahr al Jabal.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/65/South_Sudan_%28orthographic_projection%29.svg",
          "code": "SS",
          "capital": "Juba",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Juba_City.jpg",
          "descriptionfr": "Un pays enclavé en Afrique de l'Est. Il faisait partie du Soudan jusqu'en 2011. La nation comprend la vaste région de marais du Sudd formée par le Nil blanc, localement appelé le Bahr al Jabal.",
          "descriptiones": "Un país sin litoral en África Oriental. Formó parte de Sudán hasta 2011. La nación incluye la vasta región del pantano del Sudd formada por el Nilo Blanco, llamada localmente la Bahr Al Jabal."
      },
      {
          "name": "Spain",
          "namees": "España",
          "namefr": "Espagne",
          "description": "A country in Southern Europe. It is in the Iberian Peninsula. In the nations northeast side are the Pyrenees mountains.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/21/EU-Spain.svg",
          "code": "ES",
          "capital": "Madrid",
          "picture": "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg",
          "descriptionfr": "Un pays du sud de l'Europe. C'est dans la péninsule ibérique. Dans les nations nord-est se trouvent les montagnes des Pyrénées.",
          "descriptiones": "Un país en el sur de Europa. Está en la península ibérica. En las naciones del lado noreste están las montañas de los Pirineos."
      },
      {
          "name": "Sri Lanka",
          "namees": "Sri Lanka",
          "namefr": "Sri Lanka",
          "description": "An island country in South Asia, formerly known as Ceylon, which lies in the Indian Ocean, southwest of the Bay of Bengal, and southeast of the Arabian Sea; it is separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sri_Lanka_%28orthographic_projection%29.svg",
          "code": "LK",
          "capital": "Colombo",
          "picture": "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg",
          "descriptionfr": "Un pays insulaire en Asie du Sud, anciennement connu sous le nom de Ceylan, qui se trouve dans l'océan Indien, au sud-ouest de la baie du Bengale et au sud-est de la mer d'Oman; Il est séparé du sous-continent indien par le golfe de Mannar et le détroit de Palk",
          "descriptiones": "Un país isleño en el sur de Asia, anteriormente conocido como Ceilán, que se encuentra en el Océano Índico, al suroeste de la Bahía de Bengala y al sureste del Mar Arábigo; Está separado del subcontinente indio por el Golfo de Mannar y el Estrecho de Palk"
      },
      {
          "name": "Sudan",
          "namees": "Sudán",
          "namefr": "Soudan",
          "description": "A country in East Africa. It used to have the largest area of all the countries in Africa. However, on July 9, 2011, the southern part of the country left and became a new country. Now this nation is the third largest country in Africa by area.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sudan_%28orthographic_projection%29_highlighted.svg",
          "code": "SD",
          "capital": "Khartoum",
          "picture": "https://images.pexels.com/photos/980265/pexels-photo-980265.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Est. Il avait le plus grand domaine de tous les pays d'Afrique. Cependant, le 9 juillet 2011, la partie sud du pays est partie et est devenue un nouveau pays. Maintenant, cette nation est le troisième plus grand pays d'Afrique par la région.",
          "descriptiones": "Un país en África Oriental. Solía ​​tener el área más grande de todos los países de África. Sin embargo, el 9 de julio de 2011, la parte sur del país se fue y se convirtió en un nuevo país. Ahora esta nación es el tercer país más grande de África por área."
      },
      {
          "name": "Suriname",
          "namees": "Surinam",
          "namefr": "Suriname",
          "description": "A country in South America. It used to be known as Nederlands Guyana, Netherlands Guiana or Dutch Guiana. The nation became independent from the Netherlands in 1975.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/8/87/Suriname_%28orthographic_projection%29.svg",
          "code": "SR",
          "capital": "Paramaribo",
          "picture": "https://images.pexels.com/photos/6673095/pexels-photo-6673095.jpeg",
          "descriptionfr": "Un pays en Amérique du Sud. Il était connu comme Nederlands Guyana, les Pays-Bas en Guyane ou en Guiane néerlandaise. La nation est devenue indépendante des Pays-Bas en 1975.",
          "descriptiones": "Un país en América del Sur. Solía ​​ser conocido como Nederlands Guyana, Holanda Guayana o Guayana holandesa. La nación se independizó de los Países Bajos en 1975."
      },
      {
          "name": "Eswatini",
          "namees": "Eswatini",
          "namefr": "Eswatini",
          "description": "A landlocked country in Southern Africa. Its government is an absolute monarchy, the last of its kind in Africa, and has been ruled by King Mswati III since 1986.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Eswatini_on_the_globe_%28special_marker%29_%28Madagascar_centered%29.svg",
          "code": "SZ",
          "capital": "Mbabane",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/2/20/Eswatini_landscape.jpg",
          "descriptionfr": "Un pays enclavé en Afrique australe. Son gouvernement est une monarchie absolue, la dernière du genre en Afrique, et est gouvernée par le roi Mswati III depuis 1986.",
          "descriptiones": "Un país sin litoral en el sur de África. Su gobierno es una monarquía absoluta, la última de su tipo en África, y ha sido gobernada por el Rey Mswati III desde 1986."
      },
      {
          "name": "Sweden",
          "namees": "Suecia",
          "namefr": "Suède",
          "description": "The largest Nordic country located on the Scandinavian Peninsula in Northern Europe. In 2014, the country celebrated 200 years of peace, a longer span of peacetime than even Switzerland.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c2/EU-Sweden_%28orthographic_projection%29.svg",
          "code": "SE",
          "capital": "Stockholm",
          "picture": "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg",
          "descriptionfr": "Le plus grand pays nordique situé sur la péninsule scandinave en Europe du Nord. En 2014, le pays a célébré 200 ans de paix, une plus longue durée en temps de paix que même la Suisse.",
          "descriptiones": "El país nórdico más grande ubicado en la península escandinava del norte de Europa. En 2014, el país celebró 200 años de paz, un tramo más largo de tiempo de paz que incluso Suiza."
      },
      {
          "name": "Switzerland",
          "namees": "Suiza",
          "namefr": "Suisse",
          "description": "A landlocked country located at the confluence of Western, Central and Southern Europe. Since the Reformation of the 16th century, the country has maintained a policy of armed neutrality. It has not fought an international war since 1815. It joined the United Nations only in 2002, though it pursues an active foreign policy, including participation in frequent peace-building processes worldwide.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/61/Europe-Switzerland.svg",
          "code": "CH",
          "capital": "Bern",
          "picture": "https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg",
          "descriptionfr": "Un pays enclavé situé au confluent de l'Europe occidentale, centrale et méridionale. Depuis la réforme du XVIe siècle, le pays a maintenu une politique de neutralité armée. Il n'a pas combattu de guerre internationale depuis 1815. Il n'a rejoint les Nations Unies qu'en 2002, bien qu'il poursuive une politique étrangère active, y compris la participation à des processus fréquents de consolidation de la paix dans le monde.",
          "descriptiones": "Un país sin litoral ubicado en la confluencia de Europa occidental, central y sur. Desde la reforma del siglo XVI, el país ha mantenido una política de neutralidad armada. No ha luchado contra una guerra internacional desde 1815. Se unió a las Naciones Unidas solo en 2002, aunque persigue una política exterior activa, incluida la participación en procesos frecuentes de construcción de paz en todo el mundo."
      },
      {
          "name": "Syria",
          "namees": "Siria",
          "namefr": "Syrie",
          "description": "A unitary republic that consists of 14 governorates (subdivisions). A country of fertile plains, high mountains, and deserts, it is home to diverse ethnic and religious groups. It was suspended from the Arab League in November 2011 and the Organisation of Islamic Cooperation, and self-suspended from the Union for the Mediterranean.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/68/Syria_%28orthographic_projection%29_disputed.svg",
          "code": "SY",
          "capital": "Damascus",
          "picture": "https://images.pexels.com/photos/3743622/pexels-photo-3743622.jpeg",
          "descriptionfr": "Une république unitaire qui se compose de 14 gouverneurs (subdivisions). Un pays de plaines fertiles, de hautes montagnes et de déserts, il abrite divers groupes ethniques et religieux. Il a été suspendu à la Ligue arabe en novembre 2011 et à l'organisation de coopération islamique et à suspension de l'Union pour la Méditerranée.",
          "descriptiones": "Una república unitaria que consta de 14 gobernaciones (subdivisiones). Un país de llanuras fértiles, altas montañas y desiertos, es el hogar de diversos grupos étnicos y religiosos. Fue suspendido de la Liga Árabe en noviembre de 2011 y la organización de la cooperación islámica, y la auto-colocación de la Unión para el Mediterráneo."
      },
      {
          "name": "Taiwan",
          "namees": "Taiwán",
          "namefr": "Taïwan",
          "description": "Officially the Republic of China (ROC). It is claimed by the PRC, which refuses diplomatic relations with countries that recognise the ROC. Though it was a founding member of United Nations, the ROC now has neither official membership nor observer status in the organization.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Taiwan_%28orthographic_projection%3B_southeast_Asia_centered%29.svg",
          "code": "TW",
          "capital": "Taipei",
          "picture": "https://images.pexels.com/photos/981147/pexels-photo-981147.jpeg",
          "descriptionfr": "Officiellement la République de Chine (ROC). Il est revendiqué par la RPC, qui refuse les relations diplomatiques avec les pays qui reconnaissent le ROC. Bien qu'il s'agisse d'un membre fondateur des Nations Unies, le ROC n'a désormais ni membre officiel ni statut d'observateur dans l'organisation.",
          "descriptiones": "Oficialmente la República de China (ROC). Es reclamado por la RPC, que rechaza las relaciones diplomáticas con países que reconocen la REC. Aunque era un miembro fundador de las Naciones Unidas, la ROC ahora no tiene membresía oficial ni estatus de observador en la organización."
      },
      {
          "name": "Tajikistan",
          "namees": "Tayikistán",
          "namefr": "Tadjikistan",
          "description": "On 9 September 1991, The country declared itself an independent sovereign nation as the Soviet Union was disintegrating. A civil war was fought almost immediately after independence, lasting from 1992 to 1997. Since the end of the war, newly established political stability and foreign aid have allowed the country's economy to grow.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tajikistan_%28orthographic_projection%29.svg",
          "code": "TJ",
          "capital": "Dushanbe",
          "picture": "https://images.pexels.com/photos/4169042/pexels-photo-4169042.jpeg",
          "descriptionfr": "Le 9 septembre 1991, le pays s'est déclaré une nation souverain indépendante alors que l'Union soviétique se désintégrait. Une guerre civile a été menée presque immédiatement après l'indépendance, de 1992 à 1997. Depuis la fin de la guerre, la stabilité politique nouvellement établie et l'aide étrangère ont permis à l'économie du pays de croître.",
          "descriptiones": "El 9 de septiembre de 1991, el país se declaró una nación soberana independiente cuando la Unión Soviética se estaba desintegrando. Una guerra civil se libró casi inmediatamente después de la independencia, que duró entre 1992 y 1997. Desde el final de la guerra, la estabilidad política y la ayuda política recientemente establecida han permitido que la economía del país crezca."
      },
      {
          "name": "Tanzania",
          "namees": "Tanzania",
          "namefr": "Tanzanie",
          "description": "A country in East Africa within the African Great Lakes region. The name of the country was created as a clipped compound of the names of the two states that unified to create the country: Tanganyika and Zanzibar.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tanzania_%28orthographic_projection%29.svg",
          "code": "TZ",
          "capital": "Dodoma",
          "picture": "https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg",
          "descriptionfr": "Un pays en Afrique de l'Est dans la région africaine des Grands Lacs. Le nom du pays a été créé comme un composé coupé des noms des deux États qui se sont unifiés pour créer le pays: Tanganyika et Zanzibar.",
          "descriptiones": "Un país en África Oriental dentro de la región de los Grandes Lagos africanos. El nombre del país fue creado como un compuesto recortado de los nombres de los dos estados que se unifican para crear el país: Tanganika y Zanzíbar."
      },
      {
          "name": "Thailand",
          "namees": "Tailandia",
          "namefr": "Thaïlande",
          "description": "A middle power in global affairs and a founding member of ASEAN, and ranks very high in the Human Development Index. It has the second-largest economy in Southeast Asia and the 22nd-largest in the world by PPP.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Thailand_%28orthographic_projection%29.svg",
          "code": "TH",
          "capital": "Bangkok",
          "picture": "https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg",
          "descriptionfr": "Une puissance moyenne dans les affaires mondiales et un membre fondateur de l'ANASE, et se classe très haut dans l'indice de développement humain. Il possède la deuxième économie en Asie du Sud-Est et le 22e plus grand au monde par PPP.",
          "descriptiones": "Un poder medio en los asuntos mundiales y un miembro fundador de la ASEAN, y ocupa un lugar muy alto en el índice de desarrollo humano. Tiene la segunda economía más grande del sudeste asiático y la 22a 22 más grande del mundo por PPP."
      },
      {
          "name": "Timor-Leste",
          "namees": "Timor-Leste",
          "namefr": "Timor-Leste",
          "description": "The country came under Portuguese influence in the sixteenth century, remaining a Portuguese colony until 1975. Internal conflict preceded a unilateral declaration of independence and an Indonesian invasion and annexation. Resistance continued throughout Indonesian rule, and in 1999 a United Nations–sponsored act of self-determination led to Indonesia relinquishing control of the territory. On 20 May 2002 it became the first new sovereign state of the 21st century.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Timor_Leste_%28orthographic_projection%29.svg",
          "code": "TL",
          "capital": "Dili",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/e/e4/National_Parliament_building%2C_Dili%2C_2018_%2801%29.jpg",
          "descriptionfr": "Le pays est passé sous l'influence portugaise au XVIe siècle, restant une colonie portugaise jusqu'en 1975. Le conflit interne a précédé une déclaration d'indépendance unilatérale et une invasion et une annexion indonésiennes. La résistance s'est poursuivie tout au long du régime indonésien et, en 1999, un acte d'autodétermination parasorisé des Nations Unies a conduit à l'abandon du contrôle du territoire en Indonésie. Le 20 mai 2002, il est devenu le premier nouvel état souverain du 21e siècle.",
          "descriptiones": "El país fue bajo influencia portuguesa en el siglo XVI, permaneciendo una colonia portuguesa hasta 1975. El conflicto interno precedió a una declaración unilateral de independencia y una invasión y anexión indonesia. La resistencia continuó durante todo el dominio indonesio, y en 1999 un acto de autodeterminación patrocinado por las Naciones Unidas condujo al control del territorio de Indonesia. El 20 de mayo de 2002 se convirtió en el primer nuevo estado soberano del siglo XXI."
      },
      {
          "name": "Togo",
          "namees": "Togo",
          "namefr": "Togo",
          "description": "A tropical, sub-Saharan nation whose economy depends mostly on agriculture. The official language is French, but other languages are spoken, particularly those of the Gbe family. 42.3% of the population adhere to Christianity, making it the largest religion in the country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Location_Togo_AU_Africa.svg",
          "code": "TG",
          "capital": "Lome",
          "picture": "https://images.pexels.com/photos/6205076/pexels-photo-6205076.jpeg",
          "descriptionfr": "Une nation tropicale et subsaharienne dont l'économie dépend principalement de l'agriculture. La langue officielle est française, mais d'autres langues sont parlées, en particulier celles de la famille GBE. 42,3% de la population adhère au christianisme, ce qui en fait la plus grande religion du pays.",
          "descriptiones": "Una nación tropical y subsahariana cuya economía depende principalmente de la agricultura. El idioma oficial es el francés, pero se hablan otros idiomas, particularmente los de la familia GBE. El 42.3% de la población se adhiere al cristianismo, lo que la convierte en la religión más grande del país."
      },
      {
          "name": "Tonga",
          "namees": "Tonga",
          "namefr": "Tonga",
          "description": "A Polynesian country and archipelago. The country has 171 islands – of which 45 are inhabited. According to its mythology, the demigod Maui drew up a group of islands from the ocean, first appearing Lofanga, the Ha'apai Islands and Vava'u, integrating into the country.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "TO",
          "capital": "Nuku'alofa",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Royal_Palace%2C_Nuku%27alofa.jpg",
          "descriptionfr": "Un pays polynésien et un archipel. Le pays compte 171 îles - dont 45 sont habitées. Selon sa mythologie, le demi-dieu Maui a élaboré un groupe d'îles de l'océan, apparaissant d'abord Lofanga, les îles Ha'apai et Vava'u, s'intégrant dans le pays.",
          "descriptiones": "Un país y archipiélago polinesio. El país tiene 171 islas, de las cuales 45 están habitadas. Según su mitología, el semidiós Maui elaboró ​​un grupo de islas del océano, que apareció por primera vez en Lofanga, las Islas Ha'apai y Vava'u, integrándose en el país."
      },
      {
          "name": "Trinidad and Tobago",
          "namees": "Trinidad y Tobago",
          "namefr": "Trinité-et-Tobago",
          "description": "A country consisting of two main main islands and numerous much smaller islands. The main ecosystems are: coastal and marine (coral reefs, mangrove swamps, open ocean and seagrass beds); forest; freshwater (rivers and streams); karst; man-made ecosystems (agricultural land, freshwater dams, secondary forest); and savanna.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29.svg",
          "code": "TT",
          "capital": "Port of Spain",
          "picture": "https://images.pexels.com/photos/5107933/pexels-photo-5107933.jpeg",
          "descriptionfr": "Un pays composé de deux îles principales principales et de nombreuses îles beaucoup plus petites. Les principaux écosystèmes sont les suivants: côte et marine (récifs coralliens, marécages de mangrove, lits en océan et herbe maritime); forêt; eau douce (rivières et ruisseaux); Karst; écosystèmes artificiels (terres agricoles, barrages d'eau douce, forêt secondaire); et savane.",
          "descriptiones": "Un país que consta de dos islas principales principales y numerosas islas mucho más pequeñas. Los principales ecosistemas son: costeras y marinas (arrecifes de coral, pantanos de manglares, camas abiertas de océano y pastos marinos); bosque; agua dulce (ríos y arroyos); karst; Ecosistemas artificiales (tierra agrícola, presas de agua dulce, bosque secundario); y sabana."
      },
      {
          "name": "Tunisia",
          "namees": "Túnez",
          "namefr": "Tunisie",
          "description": "A country part of the Maghreb region. From 2014 to 2020, it was considered the only democratic state in the Arab World, according to the Economist Intelligence Unit's Democracy Index, and was rated a hybrid regime in the 2021 Index. It is one of the few countries in Africa ranking high in the Human Development Index, with one of the highest per capita incomes on the continent, ranking 129th in GDP per capita income.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tunisia_location_%28orthographic_projection%29.svg",
          "code": "TN",
          "capital": "Tunis",
          "picture": "https://images.pexels.com/photos/891118/pexels-photo-891118.jpeg",
          "descriptionfr": "Une partie de la région de Maghreb. De 2014 à 2020, il a été considéré comme le seul État démocratique du monde arabe, selon l'indice de démocratie de l'unité de renseignement de l'économie, et a été évalué un régime hybride dans l'indice 2021. C'est l'un des rares pays en Afrique qui se classement dans l'indice de développement humain, avec l'un des revenus les plus élevés par habitant sur le continent, se classant 129e du PIB par revenu par habitant.",
          "descriptiones": "Un país parte de la región de Magreb. De 2014 a 2020, se consideró el único estado democrático en el mundo árabe, según el índice de democracia de la Unidad de Inteligencia Economista, y fue calificado como un régimen híbrido en el índice 2021. Es uno de los pocos países de África que se clasifican en el índice de desarrollo humano, con uno de los ingresos per cápita más altos en el continente, ocupando el puesto 129 en el ingreso del PIB per cápita."
      },
      {
          "name": "Turkey",
          "namees": "Turquía",
          "namefr": "Turquie",
          "description": "A transcontinental country located mainly on the Anatolian Peninsula (Asia minor) in Western Asia.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Turkey_%28orthographic_projection%29.svg",
          "code": "TR",
          "capital": "Ankara",
          "picture": "https://images.pexels.com/photos/2048865/pexels-photo-2048865.jpeg",
          "descriptionfr": "Un pays transcontinental situé principalement sur la péninsule anatolienne (Asie mineure) en Asie occidentale.",
          "descriptiones": "Un país transcontinental ubicado principalmente en la península de Anatolia (Asia Menor) en Asia occidental."
      },
      {
          "name": "Turkmenistan",
          "namees": "Turkmenistán",
          "namefr": "Turkménistan",
          "description": "One of the most sparsely populated nations in Asia. It has long served as a thoroughfare for other nations and cultures. The country possesses the world's fifth largest reserves of natural gas. Most of the country is covered by the Karakum Desert. From 1993 to 2017, citizens received government-provided electricity, water and natural gas free of charge.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Turkmenistan_on_the_globe_%28Afro-Eurasia_centered%29.svg",
          "code": "TM",
          "capital": "Ashgabat",
          "picture": "https://images.pexels.com/photos/7031502/pexels-photo-7031502.jpeg",
          "descriptionfr": "L'une des nations les plus peu peuplées d'Asie. Il a longtemps servi de voie à autres nations et cultures. Le pays possède les cinquième plus grandes réserves de gaz naturel au monde. La majeure partie du pays est couverte par le désert de Karakum. De 1993 à 2017, les citoyens ont reçu gratuitement de l'électricité, de l'eau et du gaz naturel fourni par le gouvernement.",
          "descriptiones": "Una de las naciones más escasamente pobladas de Asia. Durante mucho tiempo ha servido como vía para otras naciones y culturas. El país posee las quinta reservas más grandes de gas natural del mundo. La mayor parte del país está cubierto por el desierto de Karakum. De 1993 a 2017, los ciudadanos recibieron electricidad, agua y gas natural proporcionados por el gobierno sin cargo."
      },
      {
          "name": "Tuvalu",
          "namees": "Tuvalu",
          "namefr": "Tuvalu",
          "description": "A volcanic archipelago, consisting of three reef islands and six true atolls. The government revenues largely come from sales of fishing licences, income from the country's Trust Fund, and from the lease of its .tv Internet Top Level Domain (TLD).",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "TV",
          "capital": "Funafuti",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/4/41/Tuvalu_Funafuti_atoll_beach.jpg",
          "descriptionfr": "Un archipel volcanique, composé de trois îles de récif et de six vrais atolls. Les revenus du gouvernement proviennent en grande partie des ventes de permis de pêche, de revenus du fonds en fiducie du pays et du bail de son domaine de haut niveau .tv (TLD).",
          "descriptiones": "Un archipiélago volcánico, que consta de tres islas de arrecifes y seis atolones verdaderos. Los ingresos del gobierno provienen en gran medida de las ventas de licencias de pesca, ingresos del fondo fiduciario del país y del arrendamiento de su dominio de nivel superior de Internet .TV (TLD)."
      },
      {
          "name": "Uganda",
          "namees": "Uganda",
          "namefr": "Ouganda",
          "description": "A landlocked country in East Africa. The southern part of the country includes a substantial portion of Lake Victoria. It also lies within the Nile basin and has a varied but generally a modified equatorial climate. In 2007 it became the first country in sub-Saharan Africa to introduce universal secondary education.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Uganda_%28orthographic_projection%29.svg",
          "code": "UG",
          "capital": "Kampala",
          "picture": "https://images.pexels.com/photos/1233286/pexels-photo-1233286.jpeg",
          "descriptionfr": "Un pays enclavé en Afrique de l'Est. La partie sud du pays comprend une partie substantielle du lac Victoria. Il se trouve également dans le bassin du Nil et a un climat équatorial varié mais généralement modifié. En 2007, il est devenu le premier pays d'Afrique subsaharienne à introduire l'enseignement secondaire universel.",
          "descriptiones": "Un país sin litoral en África Oriental. La parte sur del país incluye una porción sustancial del lago Victoria. También se encuentra dentro de la cuenca del Nilo y tiene un clima ecuatorial variado pero generalmente modificado. En 2007 se convirtió en el primer país en África subsahariana en introducir educación secundaria universal."
      },
      {
          "name": "Ukraine",
          "namees": "Ucrania",
          "namefr": "Ukraine",
          "description": "The second-largest European country. Since the outbreak of war with Russia, the country has continued to seek closer ties with the European Union and NATO.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ukraine_-_disputed_%28orthographic_projection%29.svg",
          "code": "UA",
          "capital": "Kiev",
          "picture": "https://images.pexels.com/photos/2787267/pexels-photo-2787267.jpeg",
          "descriptionfr": "Le deuxième plus grand pays européen. Depuis le déclenchement de la guerre avec la Russie, le pays a continué à rechercher des liens plus étroits avec l'Union européenne et l'OTAN.",
          "descriptiones": "El segundo país europeo más grande. Desde el estallido de la guerra con Rusia, el país ha seguido buscando lazos más cercanos con la Unión Europea y la OTAN."
      },
      {
          "name": "United Arab Emirates",
          "namees": "Emiratos Árabes Unidos",
          "namefr": "Emirats Arabes Unis",
          "description": "A country in The Middle East. The country's oil and natural gas reserves are the world's sixth and seventh-largest, respectively. Human rights groups regard the country as generally substandard on human rights, with citizens criticising the regime imprisoned and tortured, families harassed by the state security apparatus, and cases of forced disappearances.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/c/cd/United_Arab_Emirates_%28orthographic_projection%29.svg",
          "code": "AE",
          "capital": "Abu Dhabi",
          "picture": "https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg",
          "descriptionfr": "Un pays au Moyen-Orient. Les réserves de pétrole et de gaz naturel du pays sont respectivement la sixième et le septième plus grande au monde. Les groupes de défense des droits de l'homme considèrent le pays comme généralement inférieur aux droits de l'homme, les citoyens critiquant le régime emprisonné et torturé, les familles harcelées par l'appareil de sécurité de l'État et les cas de disparitions forcées.",
          "descriptiones": "Un país en el Medio Oriente. Las reservas de petróleo y gas natural del país son las sextas y séptimas más grandes del mundo, respectivamente. Los grupos de derechos humanos consideran que el país es generalmente deficiente a los derechos humanos, con ciudadanos criticando el régimen encarcelado y torturado, las familias acosadas por el aparato de seguridad del estado y los casos de desapariciones forzadas."
      },
      {
          "name": "United Kingdom",
          "namees": "Reino Unido",
          "namefr": "Royaume-Uni",
          "description": "The country with the longest formal name. It is a constitutional monarchy and parliamentary democracy. It is also commonly associated with colonization.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/da/Europe-UK_%28orthographic_projection%29.svg",
          "code": "GB",
          "capital": "London",
          "picture": "https://images.pexels.com/photos/3061171/pexels-photo-3061171.jpeg",
          "descriptionfr": "Le pays avec le nom formel le plus long. Il s'agit d'une monarchie constitutionnelle et d'une démocratie parlementaire. Il est également généralement associé à la colonisation.",
          "descriptiones": "El país con el nombre formal más largo. Es una monarquía constitucional y una democracia parlamentaria. También se asocia comúnmente con la colonización."
      },
      {
          "name": "United States",
          "namees": "Estados Unidos",
          "namefr": "États-Unis",
          "description": "A country consisting of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations. It developed the first nuclear weapons and used them on Japan.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/dc/USA_orthographic.svg",
          "code": "US",
          "capital": "Washington",
          "picture": "https://images.pexels.com/photos/28532673/pexels-photo-28532673/free-photo-of-scenic-view-of-half-dome-in-yosemite-national-park.jpeg",
          "descriptionfr": "Un pays composé de 50 États, un district fédéral, cinq territoires majeurs non constitués en société, neuf îles périphériques mineures et 326 réserves indiennes. Il a développé les premières armes nucléaires et les a utilisées sur le Japon.",
          "descriptiones": "Un país que consta de 50 estados, un distrito federal, cinco territorios principales no incorporados, nueve islas menores que pertenecen a las islas y 326 reservas indias. Desarrolló las primeras armas nucleares y las usó en Japón."
      },
      {
          "name": "Uruguay",
          "namees": "Uruguay",
          "namefr": "Uruguay",
          "description": "The country ranked first in Latin America in democracy, peace, low perception of corruption, and e-government. Between the years 2007 and 2009, it was the only country in the Americas that did not technically experience a recession (two consecutive downward quarters).",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/4/43/URY_orthographic.svg",
          "code": "UY",
          "capital": "Montevideo",
          "picture": "https://images.pexels.com/photos/2119163/pexels-photo-2119163.jpeg",
          "descriptionfr": "Le pays s'est classé premier en Amérique latine dans la démocratie, la paix, la faible perception de la corruption et le gouvernement électronique. Entre les années 2007 et 2009, c'était le seul pays des Amériques qui n'a pas techniquement connu une récession (deux quartiers descendants consécutifs).",
          "descriptiones": "El país ocupó el primer lugar en América Latina en democracia, paz, baja percepción de corrupción y gobierno electrónico. Entre los años 2007 y 2009, fue el único país en las Américas que técnicamente no experimentó una recesión (dos trimestres consecutivos a la baja)."
      },
      {
          "name": "Uzbekistan",
          "namees": "Uzbekistán",
          "namefr": "Ouzbékistan",
          "description": "A doubly landlocked country located in Central Asia. The country's largest export is gold. The government restricts foreign imports in many ways, including high import duties. Excise taxes are applied in a highly discriminatory manner to protect locally produced goods, although the excises taxes were removed for foreign cars in 2020.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/7/76/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD_%D0%BD%D0%B0_%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5.svg",
          "code": "UZ",
          "capital": "Tashkent",
          "picture": "https://images.pexels.com/photos/5964318/pexels-photo-5964318.jpeg",
          "descriptionfr": "Un pays doublement enclavé situé en Asie centrale. La plus grande exportation du pays est l'or. Le gouvernement restreint les importations étrangères de plusieurs manières, y compris les droits à importation élevés. Les taxes d'accise sont appliquées de manière très discriminatoire pour protéger les marchandises produites localement, bien que les taxes sur les accises aient été supprimées pour les voitures étrangères en 2020.",
          "descriptiones": "Un país doblemente sin litoral ubicado en Asia Central. La mayor exportación del país es el oro. El gobierno restringe las importaciones extranjeras de muchas maneras, incluidos los altos aranceles de importación. Los impuestos especiales se aplican de manera altamente discriminatoria para proteger los bienes producidos localmente, aunque los impuestos sobre los impuestos se eliminaron para automóviles extranjeros en 2020."
      },
      {
          "name": "Vanuatu",
          "namees": "Vanuatu",
          "namefr": "Vanuatu",
          "description": "An island country located in the South Pacific Ocean. The archipelago is of volcanic origin. The country's name derives from the word vanua (\"land\" or \"home\")",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29.svg",
          "code": "VU",
          "capital": "Port Vila",
          "picture": "https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg",
          "descriptionfr": "Un pays insulaire situé dans l'océan Pacifique Sud. L'archipel est d'origine volcanique. Le nom du pays dérive du mot Vanua (\"terre\" ou \"maison\")",
          "descriptiones": "Un país isleño ubicado en el Océano Pacífico Sur. El archipiélago es de origen volcánico. El nombre del país deriva de la palabra Vanua (\"tierra\" o \"hogar\")"
      },
      {
          "name": "Venezuela",
          "namees": "Venezuela",
          "namefr": "Venezuela",
          "description": "A country consisting of a continental landmass and many islands and islets in the Caribbean Sea. It lies within the Neotropical realm; large portions of the country were originally covered by moist broadleaf forests.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/0/05/Venezuela_Orthographic_Map.svg",
          "code": "VE",
          "capital": "Caracas",
          "picture": "https://images.pexels.com/photos/28523284/pexels-photo-28523284/free-photo-of-scenic-beachfront-with-boats-in-puerto-cabello.jpeg",
          "descriptionfr": "Un pays composé d'une masse terrestre continentale et de nombreuses îles et îlots de la mer des Caraïbes. Il se trouve dans le domaine néotropical; De grandes parties du pays étaient à l'origine couvertes de forêts à feuilles larges humides.",
          "descriptiones": "Un país que consiste en una masa terrestre continental y muchas islas e islotes en el mar Caribe. Se encuentra dentro del reino neotropical; Grandes porciones del país estaban originalmente cubiertas por bosques húmedos de hoja ancha."
      },
      {
          "name": "Vietnam",
          "namees": "Vietnam",
          "namefr": "Vietnam",
          "description": "A Socialist Republic in Southeast Asia.  The country went through prolonged warfare in the 20th century. Its largest city is Ho Chi Minh City.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/28/Vietnam_%28orthographic_projection%29.svg",
          "code": "VN",
          "capital": "Hanoi",
          "picture": "https://images.pexels.com/photos/1018478/pexels-photo-1018478.jpeg",
          "descriptionfr": "République socialiste en Asie du Sud-Est. Le pays a subi une guerre prolongée au 20e siècle. Sa plus grande ville est Ho Chi Minh-Ville.",
          "descriptiones": "Una república socialista en el sudeste asiático. El país pasó por una guerra prolongada en el siglo XX. Su ciudad más grande es la ciudad de Ho Chi Minh."
      },
      {
          "name": "Yemen",
          "namees": "Yemen",
          "namefr": "Yémen",
          "description": "A country situated on the southern end of the Arabian Peninsula. A member of the Arab League, the United Nations, the Non-Aligned Movement and the Organisation of Islamic Cooperation. It belongs to the least developed country group, referring to its numerous \"severe structural impediments to sustainable development\". The country was divided between the Ottoman and British empires in the 1800s.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Yemen_%28orthographic_projection%29.svg",
          "code": "YE",
          "capital": "Sanaa",
          "picture": "https://images.pexels.com/photos/11201283/pexels-photo-11201283.jpeg",
          "descriptionfr": "Un pays situé à l'extrémité sud de la péninsule arabique. Un membre de la Ligue arabe, des Nations Unies, du mouvement non aligné et de l'organisation de la coopération islamique. Il appartient au groupe de pays les moins développé, faisant référence à ses nombreux \"obstacles structurels graves au développement durable\". Le pays était divisé entre les empires ottomans et britanniques dans les années 1800.",
          "descriptiones": "Un país situado en el extremo sur de la Península Arábiga. Miembro de la Liga Árabe, las Naciones Unidas, el Movimiento no Alineado y la Organización de la Cooperación Islámica. Pertenece al grupo de países menos desarrollado, refiriéndose a sus numerosos \"impedimentos estructurales severos para el desarrollo sostenible\". El país se dividió entre los imperios otomanos y británicos en el siglo XIX."
      },
      {
          "name": "Zambia",
          "namees": "Zambia",
          "namefr": "Zambie",
          "description": "A landlocked country at the crossroads of Central, Southern and East Africa, although it is typically referred to as being in Southern Africa at its most central point. It contains abundant natural resources, including minerals, wildlife, forestry, freshwater and arable land. In 2010, the World Bank named the country one of the world's fastest economically reformed countries.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/2/26/Zambia_%28orthographic_projection%29.svg",
          "code": "ZM",
          "capital": "Lusaka",
          "picture": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_05.jpg",
          "descriptionfr": "Un pays sans littoral au carrefour de l'Afrique centrale, sud et orientale, bien qu'il soit généralement appelé être en Afrique australe à son point le plus central. Il contient de nombreuses ressources naturelles, notamment des minéraux, de la faune, de la foresterie, de l'eau douce et des terres arables. En 2010, la Banque mondiale a nommé le pays l'un des pays réformés économiquement les plus rapides du monde.",
          "descriptiones": "Un país sin litoral en la encrucijada de África central, sur y este, aunque generalmente se conoce como en el sur de África en su punto más central. Contiene abundantes recursos naturales, que incluyen minerales, vida silvestre, silvicultura, agua dulce y tierras cultivables. En 2010, el Banco Mundial nombró al país uno de los países económicamente reformados más rápidos del mundo."
      },
      {
          "name": "Zimbabwe",
          "namees": "Zimbabue",
          "namefr": "Zimbabwe",
          "description": "A landlocked country which has 16 official languages. From 2000 to 2009 the economy experienced decline and hyperinflation before rebounding after the use of currencies other than the country's dollar was permitted, although growth has since faltered.",
          "maplocation": "https://upload.wikimedia.org/wikipedia/commons/5/50/Zimbabwe_%28orthographic_projection%29.svg",
          "code": "ZW",
          "capital": "Harare",
          "picture": "https://images.pexels.com/photos/3378996/pexels-photo-3378996.jpeg",
          "descriptionfr": "Un pays enclavé qui a 16 langues officielles. De 2000 à 2009, l'économie a connu le déclin et l'hyperinflation avant de rebondir après l'utilisation de devises autres que le dollar du pays, bien que la croissance ait depuis failli.",
          "descriptiones": "Un país sin litoral que tiene 16 idiomas oficiales. De 2000 a 2009, la economía experimentó una disminución e hiperinflación antes de recuperarse después del uso de monedas distintas del dólar del país, aunque el crecimiento ha vacilado desde entonces."
      }
  ]
let randomwintxtsMain=[];
let randomwintxtsloseMain=[];
let randomwintxts=[{text:'You have won, the country was indeed'},{text:'You have won, the country really was'},{text:'You have won, fortunately for you the country was'},{text:'You have won, yep it is'},{text:'You have won, it was obviously'}]
let randomwintxtslose=[{text:'You have lost, the country was'},{text:'You have lost, the country really was'},{text:'You have lost, unfortunately for you the country was'},{text:'You have lost, it is'},{text:'You have lost, it was obviously'}]
let randomwintxtsfr=[{text:'Bon travail c\'est vraiment'},{text:'Heureusement pour toi c\'était'},{text:'Bravo, c\'est vraiment'},{text:'Oui c\'était'},{text:'Bravo, c\'était évidemment'}]
let randomwintxtslosefr=[{text:'Tu as perdu, malheureusement, vous avez perdu, le pays était'},{text:'Tu as perdu, difficile, c\'était'},{text:'Tu as perdu, comment tu n\'as pas pensé à'},{text:'Tu as perdu, c\'est juste'},{text:'Tu as perdu, le pays que vous recherchiez était'}]
let randomwintxtses=[{text:'Bien hecho, tí@, de verdad es'},{text:'Has ganado, fue obvio que es'},{text:'Has ganado, afortunadamente para ti es'},{text:'Has ganado, sí, es'},{text:'Has ganado, fue'}]
let randomwintxtslosees=[{text:'Has perdido, realmente es'},{text:'Has perdido, el país fue'},{text:'Has perdido, desafortunadamente para ti es'},{text:'Has perdido, es'},{text:'Has perdido, fue obvio que es'}]
let changelang = (country,language) =>{
  switch (language) {
  case 'en':
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      newgameButton.innerText = "New game";
  break;
  case 'es':
      country.description=country.descriptiones;
      country.name=country.namees;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxtses[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslosees[i];}
      GuessInputButton.innerText = "Adivina";
      newgameButton.innerText = "Nuevo juego";
  break;
      case 'fr':
          country.description=country.descriptionfr;
          country.name=country.namefr;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxtsfr[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslosefr[i];}
      GuessInputButton.innerText = "Deviner";
      newgameButton.innerText = "Nouveau jeu";
      break;
  default:
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      newgameButton.innerText = "New game";
  }
}
let changelang1 = (country,language) =>{
  switch (language) {
  case 'en':
      country.name=country.name;
  break;
  case 'es':
      country.name=country.namees;
  break;
  case 'fr':
          country.name=country.namefr;
      break;
  default:
      country.description=country.description;
      country.name=country.name;
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsMain[i] = randomwintxts[i];}
      for(let i=0;i<randomwintxts.length;i++){ randomwintxtsloseMain[i] = randomwintxtslose[i];}
      GuessInputButton.innerText = "Guess";
      newgameButton.innerText = "New game";
  }
}
let country

let game1 = () => {
  country = {
        "name": "Serbia",
        "namees": "Serbia",
        "namefr": "Serbie",
        "description": "A landlocked country at the crossroads of Southeast and Central Europe, located in the Balkans and the Pannonian Plain. A survey from 2014 showed that 47% of the citizens of the country favour the Latin alphabet, 36% favour the Cyrillic one and 17% have no preference.",
        "maplocation": "https://upload.wikimedia.org/wikipedia/commons/9/95/Location_map_of_Serbia_on_the_globe_%282011%29.svg",
        "code": "RS",
        "capital": "Belgrade",
        "picture": "https://images.pexels.com/photos/28531964/pexels-photo-28531964/free-photo-of-scenic-alpine-farm-landscape-with-cows.jpeg",
        "descriptionfr": "Pays enclavé au carrefour de l'Europe du Sud-Est et de l'Europe centrale, situé dans les Balkans et la plaine de Pannonie. Un sondage réalisé en 2014 a montré que 47 % des citoyens du pays sont favorables à l'alphabet latin, 36 % à l'alphabet cyrillique et 17 % n'ont pas de préférence.",
        "descriptiones": "País sin salida al mar situado en la encrucijada del sureste y el centro de Europa, ubicado en los Balcanes y la llanura panónica. Una encuesta de 2014 mostró que el 47% de los ciudadanos del país está a favor del alfabeto latino, el 36% del cirílico y el 17% no tiene preferencias."
  }
         // country = arrcountries[Math.floor(Math.random() * arrcountries.length)]
  
  changelang(country,localStorage.lang);
 

  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 width = 250 class=fla>`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if(country.flag==undefined) {country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} class=fla>`
  maplocationDiv.style.display = 'none'
  if(country.picture!=undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
let game = () => {
  country = arrcountries[Math.floor(Math.random() * arrcountries.length)]
  changelang(country,localStorage.lang);
  maplocationDiv.innerHTML = `<img src = ${country.maplocation} height = 250 width = 250 class=fla>`
  //country.flag=`https://countryflagsapi.com/png/${country.code}`
  if(country.flag==undefined) {country.flag = `https://flagsapi.com/${country.code.toUpperCase()}/shiny/64.png`}
  FlagIMG.style.display = 'none'
  FlagIMG.innerHTML = `<img src = ${country.flag} class=fla>`
  maplocationDiv.style.display = 'none'
  if(country.picture!=undefined) body.style.backgroundImage = `url(${country.picture})`
  else body.style.backgroundImage = `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3416336.jpg&f=1&nofb=1&ipt=c360357dde07f57cd9aee85cc2a13e6940e022536c3898d602bfa1da72244bbf&ipo=images)`
}
newgamecheck = ()=>{
  if(NotWriting && NotWriting2) newgameButton.style = ''
  else setTimeout(newgamecheck, 1000)
}
Win = () => {
  
  localStorage.streak++;
  MessageDiv.classList.add('strokemegreen');
  MessageDiv.classList.remove('strokemered');
let randomwintext=randomwintxtsMain[Math.floor(Math.random() *randomwintxts.length)]

gameEnded = true; 
MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak}`;
GuessInputButtonDiv.style.display = 'none';
  for (let i = 0; i < 4; i++) { NewHint() }
  newgamecheck()
}
Lose = () => {
  
  MessageDiv.classList.add('strokemered');
  MessageDiv.classList.remove('strokemegreen');
let randomwintext=randomwintxtsloseMain[Math.floor(Math.random() *randomwintxtsloseMain.length)]
   gameEnded = true;
  MessageDiv.innerText = `${randomwintext.text} ${country.name}. Streak: ${localStorage.streak} -> 0.`; 
  localStorage.streak=0;
  GuessInputButtonDiv.style.display = 'none'
  newgamecheck()
}
NewHint = () => {
  GuessInputDiv.value=''
  if (!country.description) {
    if (CapitalDiv.innerText != `Capital: ${country.capital}`) { CapitalDiv.innerText = `Capital: ${country.capital}` }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
  }
  else {
    if (DescriptionDiv.innerText != `Description: ${country.description}` && NotWriting) { 

      var p = 0;
var txt = `Description: ${country.description}`
var speed = 10;

function typeWriter() {
  NotWriting=false;
  if (p < txt.length) {
    DescriptionDiv.textContent += txt[p];
    p++;
    setTimeout(typeWriter, speed);
  } else { NotWriting=true;}

}
      typeWriter();
      //DescriptionDiv.innerText = `Description: ${country.description}` 
    }
    else if (CapitalDiv.innerText != `Capital: ${country.capital}` && NotWriting2) { 

      var q = 0;
var txt2 = `Capital: ${country.capital}`
var speed2 = 10;

function typeWriter2() {
  NotWriting2=false;
  if (q < txt2.length) {
    CapitalDiv.textContent += txt2[q];
    q++;
    setTimeout(typeWriter2, speed2);
  } else { NotWriting2=true;}

}
      typeWriter2();
      //CapitalDiv.innerText = `Capital: ${country.capital}`
    }
    else if (FlagIMG.style.display == 'none') { FlagIMG.style.display = 'inherit' }
    else if (maplocationDiv.style.display == 'none') { maplocationDiv.style.display = 'inherit' }
  }
}

let checker = () => {

  numberOfGuesses++
  let Guess = GuessInputDiv.value.toLowerCase()
  if (Guess == (country.name).toLowerCase()) Win()
  else {
    if(numberOfGuesses>4){Lose()}
    else{
    NewHint()
  }
  }
}
let anewgame = () => {
  gameEnded = false;
  DescriptionDiv.innerText = ''
  CapitalDiv.innerText = ''
  FlagIMG.innerHTML = ''
  maplocationDiv.innerHTML = ''
  MessageDiv.innerText = ''
  numberOfGuesses = 0
  GuessInputButtonDiv.style.display = ''
  newgameButton.style.display = 'none'
  GuessInputDiv.value = ''
  game()
}
game1()
GuessInputButtonDiv.onclick = () => { checker() }
GuessInput.addEventListener("keydown", (k) => {
  if (k.keyCode == 13 && !gameEnded) { checker() }
})
newgameButton.onclick = () => {
      {newgameButton.style.display = 'none';setTimeout(anewgame, 1000);}
}
let l=document.getElementById('countries')
for(let i =0;i<arrcountries.length;i++){
  changelang1(arrcountries[i],localStorage.lang);
  l.options[i].value=arrcountries[i].name
}
GuessInput.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && newgameButton.style.display == '') {newgameButton.style.display = 'none';setTimeout(anewgame, 1000);}
})
document.addEventListener("keydown", (k) => {
  if (k.keyCode == 32 && newgameButton.style.display == '') {newgameButton.style.display = 'none';setTimeout(anewgame, 1000);}
})



var dropdown = document.querySelectorAll(".dropdown");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}