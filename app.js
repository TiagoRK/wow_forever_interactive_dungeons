const dungeons = [
  {id:'hall',name:'Hall of Thanes',zone:'Ironforge · Alta Sede',min:13,max:18,side:'both',x:586,y:199,scene:'snow',icon:'♜',lore:'Sob Alta Sede, os salões funerários dos reis anões foram invadidos pelos Ferro Negro. A antiga disputa entre os clãs ainda ecoa nas câmaras, agora perturbadas por intrusos e espíritos inquietos. A instância é acessível às duas facções, embora a jornada seja bem mais difícil para a Horda.',bosses:['Faldrim Anvilmar','Magmatus','Plunder','Durgen Dirgehammer'],quests:['An Ancient Grudge','Important Heirlooms','Old Ironforge Incursion','The Restless Dead'],questGiver:'Os nomes estão listados no guia de instâncias Forever; locais dos NPCs ainda não confirmados.'},
  {id:'ragefire',name:'Ragefire Chasm',zone:'Orgrimmar · Cleft of Shadow',min:13,max:18,side:'horde',x:227,y:205,scene:'fire',icon:'♨',lore: 'Sob Orgrimmar, cavernas vulcânicas escondem os Troggs de Ragefire e uma seita do Shadow Council. As chamas e os túneis formam um foco de corrupção no coração da capital órquica.',bosses:[],quests:[]},
  {id:'lordaeron',name:'Ruins of Lordaeron',zone:'Clareiras de Tirisfal · acima da Cidade Baixa',min:15,max:20,side:'horde',x:643,y:141,scene:'crypt',icon:'☠',lore:'As ruínas da antiga capital guardam ameaças entre os restos do reino de Lordaeron. A instância fica sobre a Cidade Baixa; os habitantes da Horda estão próximos, enquanto a Aliança encara uma jornada mais hostil.',bosses:['Witherfang','The Baron','Viktor the Vile','The Abandoned','Bjork',"Rath'mael"],quests:[]},
  {id:'wailing',name:'Wailing Caverns',zone:'Os Sertões do Norte',min:15,max:25,side:'both',x:253,y:365,scene:'forest',icon:'〰',lore:'No coração dos Sertões, fissuras de vapor emitem lamentos que deram nome às cavernas. O druida noturno Naralex tentou restaurar a região por meio do Sonho Esmeralda, mas sua ligação foi corrompida e seus acólitos tornaram-se os Druidas da Presa.',bosses:[],quests:[]},
  {id:'deadmines',name:'The Deadmines',zone:'Cerro Oeste · Moonbrook',min:18,max:23,side:'alliance',x:554,y:391,scene:'fire',icon:'⚒',lore:'A antiga mina de ouro, antes a maior das terras humanas, virou refúgio da Irmandade Defias. Edwin VanCleef comanda trabalhadores revoltosos e goblins, construindo um poderoso juggernaut nas profundezas.',bosses:[],quests:[]},
  {id:'shadowfang',name:'Shadowfang Keep',zone:'Floresta de Pinhaprata · Vila Pata do Bosque',min:22,max:30,side:'horde',x:638,y:126,scene:'crypt',icon:'♞',lore:'O arquimago Arugal convocou os worgen para lutar contra o Flagelo; as criaturas se voltaram também contra os magos de Dalaran. Consumido pela culpa, Arugal adotou os worgen e se refugiou na fortaleza caída do Barão Silverlaine.',bosses:[],quests:[]},
  {id:'stockade',name:'The Stockade',zone:'Ventobravo · Distrito dos Canais',min:22,max:30,side:'alliance',x:576,y:345,scene:'crypt',icon:'▤',lore:'Esta prisão de alta segurança sob Ventobravo foi tomada por uma revolta de prisioneiros. O diretor Thelwater busca aventureiros para deter o mentor do levante, Bazil Thredd.',bosses:[],quests:[]},
  {id:'wetlands',name:'Excavation Site: Wetlands',zone:'Pantanal · Whelgar’s Excavation Site',min:24,max:29,side:'both',x:656,y:269,scene:'forest',icon:'⚒',lore:'Uma escavação recém-conectada por estradas revela atividade titânica no Pantanal. O acampamento no antigo sítio de Whelgar foi tomado por raptores, enquanto mistérios ancestrais despertam nas proximidades.',bosses:['Saltspine','Shadetooth','Relic Guardian'],quests:[]},
  {id:'bfd',name:'Blackfathom Deeps',zone:'Floresta de Ashenvale · Costa Zoram',min:24,max:32,side:'both',x:175,y:289,scene:'coast',icon:'⌁',lore:'Um templo dedicado à deusa lunar Elune afundou durante a Separação. Naga, sátiros e o Martelo do Crepúsculo percorrem as ruínas submersas, atraídos pela antiga criatura Aku’mai.',bosses:[],quests:[]},
  {id:'dalaran',name:'City of Dalaran',zone:'Montanhas Alterac',min:28,max:33,side:'both',x:650,y:181,scene:'arcane',icon:'✧',lore:'A barreira que protegia Dalaran caiu e a cidade foi restaurada, mas ainda não está sob controle. O Kirin Tor precisa de ajuda para enfrentar as ameaças que ocupam as ruas e os salões da cidade arcana.',bosses:['Atrexis the Grave Knight','Arcane Anomaly','Arcanic Enigma','Unstable Sentinel','Mana Devourer','Fel Ancient','Lyn the Ignored','Shade of the Archmage'],quests:[]},
  {id:'sm-gy',name:'Scarlet Monastery: Graveyard',zone:'Clareiras de Tirisfal',min:28,max:38,side:'both',x:680,y:156,scene:'crypt',icon:'✝',lore:'O antigo centro de estudos do sacerdócio de Lordaeron foi tomado pela Cruzada Escarlate. Seus fanáticos enxergam a praga em qualquer não humano e mantêm um bastião armado nas Clareiras de Tirisfal.',bosses:[],quests:[]},
  {id:'sm-library',name:'Scarlet Monastery: Library',zone:'Clareiras de Tirisfal',min:29,max:39,side:'both',x:688,y:162,scene:'crypt',icon:'✝',lore:'A biblioteca do Mosteiro Escarlate guarda registros e conhecimento sob a vigilância dos cruzados. A facção acredita combater a ameaça dos mortos-vivos, mas sua campanha também volta-se contra todos os não humanos.',bosses:[],quests:[]},
  {id:'gnomeregan',name:'Gnomeregan',zone:'Dun Morogh',min:29,max:38,side:'both',x:564,y:218,scene:'arcane',icon:'⚙',lore:'A capital gnômica foi tomada por troggs mutantes. A liberação emergencial de resíduos radioativos expulsou seus habitantes; o conselheiro Mekgineer Thermaplugg agora governa as instalações, sob suspeita de ter permitido a invasão.',bosses:[],quests:[]},
  {id:'rfk',name:'Razorfen Kraul',zone:'Os Sertões do Sul',min:30,max:40,side:'both',x:238,y:427,scene:'forest',icon:'♧',lore:'Espinhos e vinhas cresceram onde caiu o sangue do semideus Agamaggan, e os quilboar consideram o lugar sagrado. A anciã Charlga Razorflank governa o Kraul; há rumores de que negocia com agentes do Flagelo.',bosses:[],quests:[]},
  {id:'sm-armory',name:'Scarlet Monastery: Armory',zone:'Clareiras de Tirisfal',min:32,max:42,side:'both',x:696,y:167,scene:'fire',icon:'⚔',lore:'A Cruzada Escarlate mantém suas armas e guerreiros no complexo do mosteiro. Sob o comando do Comandante Mograine e da Alta Inquisidora Whitemane, o local é um dos principais redutos da facção.',bosses:[],quests:[]},
  {id:'drowned',name:'The Drowned City',zone:'Costa da Selva do Espinhaço',min:35,max:40,side:'both',x:682,y:550,scene:'coast',icon:'≈',lore:'Uma antiga ruína troll repousa além da costa da Selva do Espinhaço. A entrada fica submersa, mas a instância se passa em terra firme. Informações de chefes e recompensas ainda não foram confirmadas no guia consultado.',bosses:[],quests:[]},
  {id:'sm-cathedral',name:'Scarlet Monastery: Cathedral',zone:'Clareiras de Tirisfal',min:35,max:45,side:'both',x:703,y:172,scene:'crypt',icon:'✝',lore:'A catedral é o coração da Cruzada Escarlate. O Comandante Escarlate Mograine lidera suas tropas, enquanto a Alta Inquisidora Whitemane pode erguer guerreiros caídos para lutar novamente.',bosses:[],quests:[]},
  {id:'kroldok',name:"Krol'dok Stronghold",zone:'Riverglades · Colinas',min:40,max:45,side:'both',x:682,y:111,scene:'forest',icon:'♜',lore:'Nas colinas de Riverglades, o complexo dos ogros Krol’dok serve como base para ataques contra os povoados próximos. A instância expande a aventura para a nova região costeira dos Reinos do Leste.',bosses:[],quests:[]},
  {id:'rfd',name:'Razorfen Downs',zone:'Os Sertões do Sul',min:40,max:50,side:'both',x:250,y:444,scene:'forest',icon:'♧',lore:'Construídas pelas mesmas vinhas do Kraul, as Downs são a capital tradicional dos quilboar. O Flagelo, liderado pelo lich Amnennar, tomou o labirinto e o transformou em uma fortaleza de mortos-vivos.',bosses:[],quests:[]},
  {id:'uldaman',name:'Uldaman',zone:'Ermos',min:42,max:52,side:'both',x:610,y:329,scene:'desert',icon:'◈',lore:'Um cofre titânico permaneceu enterrado desde a criação do mundo. Escavações anãs libertaram troggs que os Titãs haviam selado; os Ferro Negro agora procuram os Discos de Norgannon, guardados por Archaedas.',bosses:[],quests:[]},
  {id:'zf',name:"Zul'Farrak",zone:'Tanaris',min:44,max:54,side:'both',x:288,y:579,scene:'desert',icon:'☀',lore:'Lendas troll dizem que as duas partes da espada Sul’thraze estão dentro das muralhas da cidade. O lugar também abriga mercenários presos e um semideus adormecido em uma piscina sagrada.',bosses:[],quests:[]},
  {id:'mara-wicked',name:'Maraudon: Wicked Grotto',zone:'Desolação',min:45,max:53,side:'both',x:180,y:516,scene:'forest',icon:'♧',lore:'Maraudon é um dos locais sagrados de Desolação e o túmulo de Zaetar, filho de Cenarius. Os salões são assombrados pelos espíritos dos Khans centauros e por elementais a serviço de Theradras.',bosses:[],quests:[]},
  {id:'mara-foul',name:'Maraudon: Foulspore Cavern',zone:'Desolação',min:45,max:53,side:'both',x:188,y:524,scene:'forest',icon:'♧',lore:'Os túneis de Foulspore fazem parte do complexo sagrado de Maraudon, local de repouso de Zaetar. Centauros e forças elementais guardam as cavernas e a presença de Theradras.',bosses:[],quests:[]},
  {id:'alcaz',name:'Alcaz Prison',zone:'Pântano Vasto · Ilha Alcaz',min:48,max:53,side:'both',x:714,y:303,scene:'coast',icon:'▤',lore:'A Ilha Alcaz, a nordeste do Pântano Vasto, abriga uma prisão ligada aos Defias e um conflito com os naga. O guia de Forever informa localização e nível; outros detalhes da instância ainda são limitados.',bosses:[],quests:[]},
  {id:'mara-earth',name:'Maraudon: Earth Song Falls',zone:'Desolação',min:48,max:57,side:'both',x:195,y:535,scene:'coast',icon:'♧',lore:'A ala interna de Maraudon conduz às Earth Song Falls, no complexo sagrado dos centauros. As cavernas e quedas d’água guardam o túmulo de Zaetar e as forças elementais de Princess Theradras.',bosses:[],quests:[]},
  {id:'sunken',name:"Temple of Atal'Hakkar",zone:'Pântano das Mágoas · Templo Submerso',min:50,max:60,side:'both',x:665,y:466,scene:'coast',icon:'≈',lore:'Sacerdotes Atal’ai ergueram o templo para preparar o retorno de Hakkar, o Esfolador de Almas. Ysera afundou a estrutura no pântano, e seus dragões verdes ainda protegem as ruínas dos sacerdotes sobreviventes.',bosses:[],quests:[]},
  {id:'brd',name:'Blackrock Depths',zone:'Garganta Abrasadora · Montanha Rocha Negra',min:52,max:60,side:'both',x:686,y:461,scene:'fire',icon:'♨',lore:'Antiga capital dos anões Ferro Negro, as profundezas são hoje o centro do poder de Ragnaros. O Senhor do Fogo planeja construir um exército de golens para dominar a Montanha Rocha Negra.',bosses:[],quests:[]},
  {id:'blackmaw',name:'Blackmaw Hold',zone:'Azshara · norte',min:55,max:60,side:'both',x:309,y:169,scene:'forest',icon:'♧',lore:'Descrita como uma grande cidade dos furbolgs, Blackmaw Hold fica atrás dos portões dos furbolgs no norte de Azshara. A instância leva a aventura para uma região até então inacessível.',bosses:[],quests:[]},
  {id:'lbrs',name:'Blackrock Spire: Lower',zone:'Garganta Abrasadora · Montanha Rocha Negra',min:55,max:60,side:'both',x:696,y:470,scene:'fire',icon:'♜',lore:'A metade inferior da Espiral Rocha Negra funciona como quartel da Horda Negra de Rend. Orcs, ogros Spirestone, trolls Smolderthorn e aranhas disputam as ruínas.',bosses:[],quests:[]},
  {id:'shaper',name:"Shaper's Terrace",zone:'Cratera Un’Goro · Refúgio do Marshal',min:58,max:60,side:'both',x:305,y:633,scene:'arcane',icon:'◈',lore:'Um antigo complexo dos Titãs fica nas colinas da Cratera Un’Goro, próximo ao Refúgio do Marshal. É uma das novas instâncias de alto nível de WoW Forever.',bosses:[],quests:[]},
  {id:'ubrs',name:'Blackrock Spire: Upper',zone:'Garganta Abrasadora · Montanha Rocha Negra',min:58,max:60,side:'both',x:707,y:477,scene:'fire',icon:'♜',lore:'Os andares superiores da Espiral foram tomados por Nefarian e sua ninhada negra. A instância admite grupo de até dez jogadores e exige o Selo da Ascensão para entrar.',bosses:[],quests:[]},
  {id:'diremaul',name:'Dire Maul',zone:'Feralas',min:58,max:60,side:'both',x:173,y:445,scene:'forest',icon:'♧',lore:'As ruínas de Eldre’Thalas foram construídas por Altaneiros para proteger segredos arcanos da Rainha Azshara. Espectros, sátiros e ogros ocupam a cidade caída, dividida em alas.',bosses:[],quests:[]},
  {id:'scholo',name:'Scholomance',zone:'Terras Pestilentas Ocidentais · Caer Darrow',min:58,max:60,side:'both',x:729,y:198,scene:'crypt',icon:'☠',lore:'A escola de necromancia ocupa criptas sob Caer Darrow, entregues ao Flagelo pela família Barov. O lich Ras Frostwhisper domina o local, enquanto Darkmaster Gandling dirige a escola.',bosses:[],quests:[]},
  {id:'strath',name:'Stratholme',zone:'Terras Pestilentas Orientais',min:58,max:60,side:'both',x:752,y:182,scene:'crypt',icon:'☠',lore:'Foi em Stratholme que o príncipe Arthas massacrou seus próprios súditos atingidos pela peste. A cidade está dividida entre o Flagelo de Kel’Thuzad e a Cruzada Escarlate de Dathrohan.',bosses:[],quests:[]}
];

// Names are taken from WoWhead's Forever PT-BR pages where available.
const ptNames={hall:'Salão dos Thanes',ragefire:'Cavernas Ígneas',lordaeron:'Ruínas de Lordaeron',wailing:'Caverna Ululante',deadmines:'Minas Mortas',shadowfang:'Bastilha da Presa Negra',stockade:'O Cárcere',wetlands:'Sítio de Escavação: Pantanal',bfd:'Profundezas Negras','sm-gy':'Monastério Escarlate: Cemitério','sm-library':'Monastério Escarlate: Biblioteca',gnomeregan:'Gnomeregan',rfk:'Urzal dos Tuscos','sm-armory':'Monastério Escarlate: Arsenal',drowned:'A Cidade Afogada','sm-cathedral':'Monastério Escarlate: Catedral',kroldok:"Fortaleza de Krol'Dok",rfd:'Urzal dos Mortos',uldaman:'Uldaman',zf:"Zul'Farrak",'mara-wicked':'Maraudon: Gruta Sombria','mara-foul':'Maraudon: Caverna Fétida',alcaz:'Prisão de Alcaz','mara-earth':'Maraudon: Cascatas da Canção da Terra',sunken:'Templo Submerso',brd:'Abismo Rocha Negra',blackmaw:'Fortaleza Presa Negra',lbrs:'Pico da Rocha Negra: Inferior',shaper:'Terraço do Moldador',ubrs:'Pico da Rocha Negra: Superior',diremaul:'Gládio Cruel',scholo:'Scolomântia',strath:'Stratholme'};
const ptZones={'Ironforge':'Altaforja','Ironforge · Alta Sede':'Altaforja · Alta Sede','Orgrimmar · Cleft of Shadow':'Orgrimmar · Fenda das Sombras','Tirisfal Glades':'Clareiras de Tirisfal','Clareiras de Tirisfal':'Clareiras de Tirisfal','The Barrens':'Sertões','Os Sertões do Norte':'Sertões do Norte','Westfall':'Cerro Oeste','Silverpine Forest':'Floresta de Pinhaprata','Stormwind City':'Ventobravo','Pantanal':'Pantanal','Wetlands':'Pantanal','Ashenvale':'Vale Gris','Alterac Mountains':'Montanhas de Alterac','Stranglethorn Vale':'Selva do Espinhaço','Riverglades':'Sendas do Rio','Desolace':'Desolação','Badlands':'Ermos','Tanaris':'Tanaris','Searing Gorge':'Garganta Abrasadora','Blackrock Mountain':'Montanha Rocha Negra','Azshara':'Azshara','Un’Goro Crater':'Cratera Un’Goro','Un\'Goro Crater':'Cratera Un’Goro','Feralas':'Feralas','Western Plaguelands':'Terras Pestilentas Ocidentais','Eastern Plaguelands':'Terras Pestilentas Orientais'};
dungeons.forEach(d=>{d.name=ptNames[d.id]||d.name;for(const [en,pt] of Object.entries(ptZones))if(d.zone===en||d.zone.startsWith(en+' ·'))d.zone=d.zone.replace(en,pt)});

// Dungeon entrances projected onto the 1659x1103 Azeroth terrain map (coordinates from the wowforever.gg atlas; see README).
dungeons.forEach(d=>{const p=WOWDATA.pins[d.id];if(p)[d.x,d.y]=p;d.approx=WOWDATA.approx.includes(d.id);});

// Quest names, NPCs and zone coordinates from the Portuguese WoW Forever dungeon quest guide.
// The map positions are zone-level focus points on the world atlas; x/y below are the in-zone coordinates.
const questNPCs={
  ragefire:[
    {quest:'Mate a besta',npc:'Neeru Cortafogo',npcId:3216,where:'Orgrimmar · Cleft of Shadow',coord:'49, 50',side:'horde',mapX:228,mapY:205},
    {quest:'O poder de destruir...',npc:'Varimathras',npcId:2425,where:'Cidade Baixa · Bairro Real',coord:'56, 92',side:'horde',mapX:643,mapY:141},
    {quest:'Testando a força do inimigo',npc:'Rahauro',npcId:11833,where:'Penhasco do Trovão · Elevação dos Anciões',coord:'70, 30',side:'horde',mapX:242,mapY:461},
    {quest:'Em busca da algibeira perdida',npc:'Rahauro',npcId:11833,where:'Penhasco do Trovão · Elevação dos Anciões',coord:'70, 30',side:'horde',mapX:242,mapY:461},
    {quest:'Inimigos ocultos',npc:'Thrall',npcId:4949,where:'Orgrimmar · Vale da Sabedoria',coord:'31, 37',side:'horde',mapX:228,mapY:205}
  ],
  hall:[
    {quest:'Heranças importantes',npc:'Tom Mão-leve',npcId:265003,where:'Altaforja · Altaforja Antiga',coord:'32.6, 44.6',side:'alliance',mapX:586,mapY:199},
    {quest:'Os mortos inquietos',npc:'Afadra Dunwall',npcId:264943,where:'Altaforja · Altaforja Antiga',coord:'64.8, 58.4',side:'alliance',mapX:586,mapY:199},
    {quest:'Incursão à Antiga Altaforja',npc:'Vidente da Terra Farsen',npcId:264936,where:"Dun Morogh · Pedreira Gol'Golar",coord:'64.8, 58.4',side:'alliance',mapX:566,mapY:218},
    {quest:'Uma mágoa ancestral',npc:'Atendente Fantasmagórica',npcId:265002,where:'Salão dos Thanes · Repouso de Anvilmar',coord:'Dentro da masmorra',side:'both',mapX:586,mapY:199}
  ],
  lordaeron:[
    {quest:"A ira de Rath'mael",npc:'Necroguarda Lina',npcId:1495,where:'Clareiras de Tirisfal · Patrulha da Retaguarda',coord:'65.6, 60.2',side:'horde',mapX:665,mapY:148},
    {quest:'Pedido desesperado',npc:'Tábata Tececórdio',npcId:250686,where:'Floresta de Pinhaprata · Sepulcro',coord:'44.6, 42.8',side:'horde',mapX:638,mapY:126},
    {quest:'Justiça da Luz',npc:'Morbin Ruinaluz',npcId:266484,where:'Cidade Baixa · Apothecarium',coord:'57.8, 89.8',side:'horde',mapX:643,mapY:141},
    {quest:'A nova peste',npc:'Boticário Renferrel',npcId:1937,where:'Floresta de Pinhaprata',coord:'42.8, 40.8',side:'horde',mapX:638,mapY:126},
    {quest:'Criaturas abomináveis',npc:'Capitão Truman',npcId:265701,where:'Ruínas de Lordaeron · entrada da masmorra',coord:'Entrada',side:'both',mapX:643,mapY:141}
  ],
  wailing:[
    {quest:'Ofídeas',npc:'Boticário Zaqueu',npcId:3419,where:'Penhasco do Trovão · Poças da Visão',coord:'34, 21',side:'horde',mapX:242,mapY:461},
    {quest:'Bebidas inteligentes',npc:'Cáliper Porcatraca',npcId:3446,where:'Os Sertões · Ratchet',coord:'62, 37',side:'both',mapX:253,mapY:385},
    {quest:'Encrencas nas docas',npc:'Operador de Grua Mafuá',npcId:3665,where:'Os Sertões · Ratchet',coord:'63, 37',side:'both',mapX:253,mapY:385},
    {quest:'Pelegos anormais',npc:'Nalpak',npcId:5767,where:'Os Sertões · acima da entrada da Caverna Ululante',coord:'46, 35',side:'both',mapX:253,mapY:365},
    {quest:'Erradicação de Anormais',npc:'Ebru',npcId:5768,where:'Os Sertões · acima da entrada da Caverna Ululante',coord:'46, 35',side:'both',mapX:253,mapY:365},
    {quest:'Líderes da Presa',npc:'Nara Juba Agreste',npcId:5770,where:'Penhasco do Trovão · Elevação dos Anciões',coord:'45, 23',side:'horde',mapX:242,mapY:461}
  ],
  deadmines:[
    {quest:'Lembranças dos que se foram',npc:'Wilder Urtigão',npcId:656,where:'Ventobravo · Distrito dos Anões',coord:'65, 21',side:'alliance',mapX:576,mapY:345},
    {quest:'Meu irmão...',npc:'Wilder Urtigão',npcId:656,where:'Ventobravo · Distrito dos Anões',coord:'65, 21',side:'alliance',mapX:576,mapY:345},
    {quest:'Ataque subterrâneo',npc:'Shoni, a Shilenchiosa',npcId:6579,where:'Ventobravo · Distrito dos Anões',coord:'55, 13',side:'alliance',mapX:576,mapY:345},
    {quest:'Bandana de seda vermelha',npc:'Batedora Riell',npcId:820,where:'Cerro Oeste · Colina Sentinela',coord:'56, 47',side:'alliance',mapX:554,mapY:391},
    {quest:'A Irmandade Défias',npc:'Miguel Mantoforte',npcId:234,where:'Cerro Oeste · Colina Sentinela',coord:'56, 47',side:'alliance',mapX:554,mapY:391},
    {quest:'Destruição nas Minas Mortas',npc:'Alba Belua',npcId:253092,where:'Cerro Oeste',coord:'52.6, 53.2',side:'alliance',mapX:554,mapY:391}
  ],
  shadowfang:[
    {quest:'O Livro de Ur',npc:"Guardião Bel'dugur",npcId:2934,where:'Cidade Baixa · Apothecarium',coord:'53, 54',side:'horde',mapX:643,mapY:141},
    {quest:'Sicários na Presa Negra',npc:'Alto-executor Hadrec',npcId:1952,where:'Floresta de Pinhaprata · Sepulcro',coord:'43, 41',side:'horde',mapX:638,mapY:126},
    {quest:'Arugal tem que morrer',npc:'Dalar Tessalba',npcId:1938,where:'Floresta de Pinhaprata · Sepulcro',coord:'44, 39',side:'horde',mapX:638,mapY:126}
  ],
  bfd:[
    {quest:"A essência de Aku'mai",npc:"Je'neu Sancrea",npcId:12736,where:"Vale Gris · Posto Zoram'gar",coord:'11, 34',side:'horde',mapX:175,mapY:289},
    {quest:'Nas ruínas',npc:"Je'neu Sancrea",npcId:12736,where:"Vale Gris · Posto Zoram'gar",coord:'11, 34',side:'horde',mapX:175,mapY:289},
    {quest:'Conhecimento nas Profundezas',npc:'Gerrig Agarrosso',npcId:6727,where:'Altaforja · Caverna Desolada',coord:'50, 5',side:'alliance',mapX:586,mapY:199},
    {quest:'Pesquisar a corrupção',npc:'Gershala Umbrurmúrio',npcId:3649,where:'Costa Negra · Auberdine',coord:'38, 43',side:'alliance',mapX:180,mapY:222},
    {quest:'A Hora do Crepúsculo',npc:'Guarda Argênteo Manados',npcId:4783,where:'Darnassus · Terraço dos Artesãos',coord:'55, 24',side:'alliance',mapX:159,mapY:233}
  ],
  stockade:[
    {quest:'Sufoque a rebelião',npc:'Carcereiro-chefe Thelágua',npcId:1719,where:'Ventobravo · entrada do Cárcere',coord:'41, 58',side:'alliance',mapX:576,mapY:345},
    {quest:'A cor do sangue',npc:'Nikova Raskol',npcId:1721,where:'O Cárcere · Cidade Velha',coord:'Patrulha',side:'alliance',mapX:576,mapY:345},
    {quest:'Crime e castigo',npc:'Conselheiro Millstipe',npcId:270,where:'Floresta do Crepúsculo · Vila Sombria',coord:'42, 47',side:'alliance',mapX:553,mapY:426},
    {quest:'Tudo que vai...',npc:'Guarda Berto',npcId:859,where:'Montanhas Cristarrubra · Vila Plácida',coord:'26, 46',side:'alliance',mapX:590,mapY:381}
  ],
  wetlands:[
    {quest:'Os couros do planalto',npc:'Iago Halberque',npcId:2094,where:'Pantanal · Porto de Menethil',coord:'8, 55',side:'alliance',mapX:656,mapY:269},
    {quest:'Em busca do Espada-cantante',npc:'Dorin Espada-cantante',npcId:956,where:'Montanhas Cristarrubra',coord:'25.6, 46.6',side:'alliance',mapX:590,mapY:381},
    {quest:'Pavores no planalto',npc:'Rethiel, o Verdião',npcId:1244,where:'Pantanal',coord:'56.2, 40.6',side:'alliance',mapX:656,mapY:269},
    {quest:'No olho do matagal',npc:'Llana',npcId:3970,where:'Vale Gris',coord:'35.0, 48.6',side:'alliance',mapX:175,mapY:289},
    {quest:'Mudando o cardápio',npc:'Borsgan',npcId:3368,where:'Orgrimmar',coord:'57, 33',side:'horde',mapX:228,mapY:205}
  ],
  dalaran:[
    {quest:'O Cavaleiro da Sepultura',npc:'Melissara',npcId:2278,where:'Serraria Tarren',coord:'62, 21',side:'horde',mapX:652,mapY:181},
    {quest:'Fonte de poder',npc:'Doutor Martinho Nunes',npcId:11044,where:'Cidade Baixa · Apothecarium',coord:'46, 74',side:'horde',mapX:643,mapY:141},
    {quest:'Pequenas bibliotecas, grandes negócios',npc:'Rexxie Caçacobre',npcId:268743,where:'Cidade de Dalaran · entrada da masmorra',coord:'Entrada',side:'both',mapX:650,mapY:181},
    {quest:'Poder esmagador',npc:'Grão-Feiticeiro Andromath',npcId:5694,where:'Ventobravo · Distrito dos Magos',coord:'49, 88',side:'alliance',mapX:576,mapY:345},
    {quest:'Uma amostra verde',npc:'Shylamiir',npcId:5502,where:'Ventobravo · O Parque',coord:'32, 63',side:'alliance',mapX:576,mapY:345}
  ]
};
function questWorldPoint(q,dungeonId){
  const p=WOWDATA.npcPos[q.npcId];
  if(p)return p;
  const d=dungeons.find(x=>x.id===dungeonId);
  return [d.x,d.y];
}
Object.entries(questNPCs).forEach(([dungeonId,records])=>records.forEach(q=>{[q.mapX,q.mapY]=questWorldPoint(q,dungeonId);q.exact=!!WOWDATA.npcPos[q.npcId]}));
const bossIds={
  'Faldrim Anvilmar':261306,'Magmatus':261316,'Plunder':261311,'Durgen Dirgehammer':261319,
  'Witherfang':250483,'The Baron':250660,'Viktor the Vile':256035,'The Abandoned':250631,'Bjork':256097,"Rath'mael":250657,
  'Saltspine':260322,'Shadetooth':260325,'Relic Guardian':260326,'Atrexis the Grave Knight':247126,'Arcane Anomaly':245999,'Arcanic Enigma':246016,'Unstable Sentinel':246017,'Mana Devourer':246008,'Fel Ancient':246003,'Lyn the Ignored':247032,'Shade of the Archmage':246020
};
// Loot rows transcribed from the WoWhead Forever PT dungeon guides.
const lootData={
  hall:{
    'Faldrim Anvilmar':[['Clâmide da Aparição Espiritual','Manto'],['Gargantilha Efêmera','Pescoço'],['Braçadeiras de Fogo-fátuo Etéreo','Tecido']],
    'Magmatus':[['Cinturão Acende-gema','Malha'],['Guantes Punhoflama','Couro'],['Presa de Magmatus','Adaga']],
    'Plunder':[['Báculo do Coração de Golem','Cajado'],['Peitoral Guardagolem','Malha'],['Botinas do Golem Protetor','Malha']],
    'Durgen Dirgehammer':[['Machado Crescente de Durgen','Machado'],['Perneiras Martelo Cruel','Couro'],['Vestes do Thane Desonrado','Tecido']]
  },
  lordaeron:{
    'Witherfang':[['Cinturão Atrófico','Malha'],['Perna de Aranha Segmentada','Cajado'],['Braçadeiras Mordemurcha','Couro']],
    'The Baron':[['Gancho de Açougue Fatiador','Adaga'],['Ossos de Abominação','Malha'],['Sobra de Pele de Abominação','Tecido']],
    'Viktor the Vile':[['Cimitarra de Sangue Vil','Espada'],['Cotão Ensanguentado','Couro'],['Vilewalkers','Malha']],
    'The Abandoned':[['Cetro do Abandonado','Maça'],['Garra do Medo','Malha'],['Perneiras de Tramafátua','Tecido']],
    'Bjork':[['Corpse Chopper','Machado'],['Perneiras Osteóxidas','Malha'],['Cinto Presatilho','Tecido']],
    "Rath'mael":[['Espelho de Rath’mael','Escudo'],['Cajado Espirafria','Cajado'],['Botinas da Perdição Gélida','Tecido']]
  },
  wetlands:{
    'Saltspine':[['Sapatilhas Brilha-olho','Tecido'],['Cinturão Sal-gema','Malha'],['Perneiras de Pele Ventral Maleável','Couro']],
    'Shadetooth':[['Grevas Garraptor','Malha'],['Olhar do Raptor','Mão secundária'],['Induto de Penas Floridas','Couro']],
    'Relic Guardian':[['Relíquia Titânica','Missão'],['Anel de Regulação de Poder','Anel'],['Rifle Miragolem','Arma de fogo'],['Dragonas do Relicário','Malha']]
  },
  dalaran:{
    'Atrexis the Grave Knight':[['Braceletes de Sepultrama','Tecido'],['Sinete do Ataossos','Anel'],['Repetidora Espeta-cova','Besta']],
    'Arcane Anomaly':[['Guantes Efêmeros','Tecido'],['Selo do Emenda-runas','Anel'],['Camisa Encadeada Distorcida por Mana','Malha']],
    'Arcanic Enigma':[['Vestes do Feiticeiro Violeta','Tecido'],['Clâmide de Energia Cambiante','Manto'],['Varinha de Concentração de Mana','Varinha']],
    'Unstable Sentinel':[['Lâmina Dupla do Guardião','Machado'],['Ombreiras Cristalinas Instáveis','Couro'],['Guardescamas Refratários','Malha'],['Projeto: Roca','Alfaiataria']],
    'Mana Devourer':[['Cinturão Enrola-serpe','Couro'],['Botinas de Pele de Mana','Malha'],['Espinha do Devorador','Cajado']],
    'Fel Ancient':[['Braço de Ramo Vil','Arma de haste'],['Induto do Troncovil Caído','Couro'],['Corda Folhalume','Tecido']],
    'Lyn the Ignored':[['Moldadores de Cartilagem','Couro'],['Olhar da Pilha de Ossos','Escudo'],['Adaga Raspa-tendões','Adaga']],
    'Shade of the Archmage':[['Pingente Facetado do Arquimagíster','Pescoço'],['Dragonas do Feiticeiro Violeta','Tecido'],['Orbe Ponderoso','Mão secundária'],['Projeto: Recuperador Arcano','Encantamento']]
  }
};
const dungeonPhotos={
  hall:'https://wow.zamimg.com/uploads/blog/images/55375-the-hall-of-thanes-new-dungeon-walkthrough-for-wow-forever.jpg',
  lordaeron:'https://wow.zamimg.com/uploads/blog/images/55390-the-ruins-of-lordaeron-new-dungeon-walkthrough-for-wow-forever.jpg',
  dalaran:'https://wow.zamimg.com/uploads/blog/images/55504-what-to-do-in-dalaran-in-wow-forever.jpg',
  drowned:'https://wow.zamimg.com/uploads/blog/images/56089-explore-the-drowned-city-new-dungeon-in-wow-forever.jpg'
};
// Classic encounters are present in the Forever database as well; these IDs are used by its Wowhead model pages.
const classicBosses={
  wailing:[['Lady Anacondra',3671],['Lord Cobrahn',3669],['Kresh',3653],['Lord Pythas',3670],['Skum',3674],['Lord Serpentis',3673],['Verdan the Everliving',5775],['Mutanus the Devourer',3654]],
  deadmines:[['Rhahk’Zor',644],['Sneed’s Shredder',642],['Gilnid',1763],['Mr. Smite',646],['Captain Greenskin',647],['Edwin VanCleef',639],['Cookie',645]],
  shadowfang:[['Razorclaw the Butcher',3886],['Baron Silverlaine',3887],['Commander Springvale',4278],['Odo the Blindwatcher',4279],['Fenrus the Devourer',4274],['Wolf Master Nandos',3927],['Archmage Arugal',4275]],
  stockade:[['Targorr the Dread',1696],['Kam Deepfury',1666],['Hamhock',1653],['Bazil Thredd',1716],['Dextren Ward',1663],['Bruegal Ironknuckle',1720]],
  bfd:[['Ghamoo-ra',4887],['Lady Sarevess',4831],['Gelihast',6243],['Lorgus Jett',12902],['Twilight Lord Kelris',4832],['Aku’mai',4829]],
  gnomeregan:[['Grubbis',7361],['Viscous Fallout',7079],['Electrocutioner 6000',6235],['Mekgineer Thermaplugg',7800]],
  rfk:[['Roogug',6168],['Aggem Thorncurse',4424],['Death Speaker Jargba',4428],['Overlord Ramtusk',4420],['Agathelos the Raging',4422],['Charlga Razorflank',4421]],
  rfd:[['Tuten’kash',7355],['Mordresh Fire Eye',7357],['Glutton',8567],['Amnennar the Coldbringer',7358]],
  zf:[['Antu’sul',8127],['Theka the Martyr',7272],['Witch Doctor Zum’rah',7271],['Gahz’rilla',7273],['Chief Ukorz Sandscalp',7796]],
  'mara-wicked':[['Noxxion',13282],['Razorlash',12258],['Lord Vyletongue',12236]],
  'mara-foul':[['Celebras the Cursed',12225],['Landslide',12203],['Tinkerer Gizlock',13601]],
  'mara-earth':[['Rotgrip',13596],['Princess Theradras',12201]],
  sunken:[['Atal’alarion',8580],['Jammal’an the Prophet',5710],['Avatar of Hakkar',8443],['Shade of Eranikus',5709]],
  brd:[['High Interrogator Gerstahn',9018],['Lord Roccor',9025],['Houndmaster Grebmar',9319],['Fineous Darkvire',9056],['Bael’Gar',9016],['General Angerforge',9033],['Golem Lord Argelmach',8983],['Ambassador Flamelash',9156],['Emperor Dagran Thaurissan',9019]],
  lbrs:[['Highlord Omokk',9196],['Shadow Hunter Vosh’gajin',9236],['War Master Voone',9237],['Mother Smolderweb',10596],['Urok Doomhowl',10584],['Halycon',10220],['Overlord Wyrmthalak',9568]],
  ubrs:[['Pyroguard Emberseer',9816],['Solakar Flamewreath',10264],['General Drakkisath',10363],['Rend Blackhand',10429],['The Beast',10430],['Gyth',10339],['Jed Runewatcher',10509]],
  scholo:[['Kirtonos the Herald',10506],['Jandice Barov',10503],['Rattlegore',11622],['Ras Frostwhisper',10508],['Lord Alexei Barov',10504],['Lady Illucia Barov',10505],['Darkmaster Gandling',1853]],
  strath:[['The Unforgiven',10516],['Baroness Anastari',10436],['Nerub’enkan',10437],['Maleki the Pallid',10438],['Magistrate Barthilas',10435],['Ramstein the Gorger',10439],['Baron Rivendare',10440]],
  ragefire:[['Oggleflint',11517],['Taragaman the Hungerer',11520],['Jergosh the Invoker',11518],['Bazzalan',11519]],
  uldaman:[['Revelosh',6910],['Ironaya',7228],['Obsidian Sentinel',7023],['Ancient Stone Keeper',7206],['Galgann Firehammer',7291],['Grimlok',4854],['Archaedas',2748]],
  'sm-gy':[['Interrogator Vishas',3983],['Bloodmage Thalnos',4543]],
  'sm-library':[['Houndmaster Loksey',3974],['Arcanist Doan',6487]],
  'sm-armory':[['Herod',3975]],
  'sm-cathedral':[['High Inquisitor Fairbanks',4542],['Scarlet Commander Mograine',3976],['High Inquisitor Whitemane',3977]],
  diremaul:[['Hydrospawn',13280],['Lethtendris',14327],['Zevrim Thornhoof',11490],['Alzzin the Wildshaper',11492],['Illyanna Ravenoak',11488],['Magister Kalendris',11487],['Immol’thar',11496],['Prince Tortheldrin',11486],['Guard Mol’dar',14326],['Stomper Kreeg',14322],['Guard Fengus',14321],['Guard Slip’kik',14323],['Captain Kromcrush',14325],['Cho’Rush the Observer',14324],['King Gordok',11501]]
};
Object.entries(classicBosses).forEach(([dungeonId,records])=>{const d=dungeons.find(x=>x.id===dungeonId);if(d&&!d.bosses.length)d.bosses=records.map(([name])=>name);records.forEach(([name,id])=>{bossIds[name]=id})});

const labels={alliance:'Aliança',horde:'Horda',both:'Ambas'};
const levelGroups=[['10—19',10,19],['20—29',20,29],['30—39',30,39],['40—49',40,49],['50—60',50,60]];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let faction='alliance',selected=null,selectedBoss=null,selectedNpc=null,activeTab='bosses',routeMode=false,origin=null,zoom=1,routeChoice=0;
function filtered(){const q=$('#search').value.trim().toLowerCase(),lv=Number($('#levelRange').value),all=lv===10;return dungeons.filter(d=>(d.side==='both'||d.side===faction)&&(!q||(d.name+' '+d.zone).toLowerCase().includes(q))&&(all||(d.min<=lv&&d.max>=lv)));}
function renderList(){const list=$('#dungeonList'),data=filtered();$('#dungeonCount').textContent=data.length;$('#statusText').textContent=`${data.length} ${data.length===1?'local':'locais'} mapeados`;let html='';for(const [title,min,max] of levelGroups){const items=data.filter(d=>d.min<=max&&d.min>=min);if(!items.length)continue;html+=`<section class="level-group"><div class="level-group-title">NÍVEIS ${title}</div>`+items.map(d=>`<button class="dungeon-item faction-${d.side} ${selected?.id===d.id?'selected':''}" data-id="${d.id}"><span class="item-icon">${d.icon}</span><span class="item-copy"><span class="item-name">${d.name}</span><span class="item-meta">${d.zone}</span></span><span class="item-range">${d.min}–${d.max}</span></button>`).join('')+'</section>';}if(!html)html='<p class="info-note">Nenhuma dungeon encontrada para este filtro.</p>';list.innerHTML=html;$$('.dungeon-item').forEach(b=>b.onclick=()=>selectDungeon(b.dataset.id));renderPins();}
function pinColor(d){return d.side==='alliance'?'#86b8d5':d.side==='horde'?'#ce7662':'#c8b879'}
function renderPins(){const g=$('#pins'),visible=new Set(filtered().map(d=>d.id)),questList=selected&&activeTab==='quests'?(questNPCs[selected.id]||[]).filter(q=>q.side==='both'||q.side===faction):[],questMarks=questList.map((q,i)=>`<g class="npc-map-pin ${selectedNpc===i?'active':''}" data-npc-index="${i}" transform="translate(${q.mapX} ${q.mapY})"><circle r="13" class="npc-halo"/><circle r="6" class="npc-core"/><text class="pin-label" x="11" y="3">${q.npc}</text></g>`).join('');g.innerHTML=dungeons.map(d=>`<g class="map-pin ${selected?.id===d.id?'active':''} ${visible.has(d.id)?'':'hidden'}" data-id="${d.id}" transform="translate(${d.x} ${d.y})"><circle class="pin-halo" r="15"/><circle class="pin-core" r="7" fill="${pinColor(d)}"/><text class="pin-label" x="11" y="3">${d.name}</text></g>`).join('')+questMarks;$$('.map-pin').forEach(p=>p.addEventListener('click',e=>{e.stopPropagation();const d=dungeons.find(x=>x.id===p.dataset.id);if(routeMode){finishRoute({name:d.zone,region:d.zone,x:d.x,y:d.y});return;}selectDungeon(d.id)}));$$('.npc-map-pin').forEach(p=>p.addEventListener('click',e=>{e.stopPropagation();if(routeMode)return;selectedNpc=Number(p.dataset.npcIndex);renderPanel();const q=questList[selectedNpc];focusMap(q.mapX,q.mapY,2.1)}));}
function emptyPanel(){return `<div class="empty-state"><div class="empty-emblem">✧</div><span class="eyebrow">SEU PRÓXIMO DESTINO</span><h2>Azeroth espera.</h2><p>Escolha uma dungeon na lista ou selecione um marcador no mapa para descobrir a história, os chefes e como chegar.</p><div class="empty-tip">✦ Dungeons neutras aparecem para as duas facções</div></div>`}
function renderPanel(){const p=$('#detailPanel');if(!selected){p.innerHTML=emptyPanel();p.classList.remove('open');$('#topLabel').textContent='VISÃO GERAL';renderPins();return;}$('#topLabel').textContent=selected.name.toUpperCase();p.classList.add('open');const d=selected,tabContent=activeTab==='bosses'?bossContent(d):activeTab==='quests'?questContent(d):routeContent(d);p.innerHTML=`<div class="detail-content"><div class="detail-header"><button class="back-button" id="backButton" aria-label="Voltar à lista">←</button><div><div class="detail-kicker">${d.zone.toUpperCase()}</div><h2>${d.name}</h2></div></div><div class="detail-cover"><div class="cover-scene" data-scene="${d.scene}"></div><div class="cover-icon">${d.icon}</div><div class="cover-bottom"><span>${d.name}</span><small>Níveis ${d.min}–${d.max}</small></div></div><div class="detail-body"><div class="detail-tags"><span class="tag level">NÍVEL ${d.min}—${d.max}</span><span class="tag">${labels[d.side].toUpperCase()}</span><span class="tag">WOW FOREVER</span></div><section class="detail-section"><div class="section-title"><h3>HISTÓRIA DA DUNGEON</h3><span>FOREVER</span></div><p class="lore">${d.lore}</p></section><section class="detail-section"><div class="tab-row"><button class="tab-button ${activeTab==='bosses'?'active':''}" data-tab="bosses">Chefes & loot</button><button class="tab-button ${activeTab==='quests'?'active':''}" data-tab="quests">Missões</button><button class="tab-button ${activeTab==='route'?'active':''}" data-tab="route">Como chegar</button></div>${tabContent}</section>${activeTab!=='route'?`<button class="route-action" id="routeButton">⌖ &nbsp; COMO CHEGAR À DUNGEON</button>`:''}</div></div>`;$('#backButton').onclick=()=>{selected=null;selectedNpc=null;routeMode=false;origin=null;renderList();renderPanel();$('#routeHint').classList.remove('visible')};$$('.tab-button[data-tab]').forEach(b=>b.onclick=()=>{activeTab=b.dataset.tab;renderPanel()});const rb=$('#routeButton');if(rb)rb.onclick=()=>startRoute();if(activeTab==='bosses'){$$('.boss-row').forEach(b=>b.onclick=()=>{selectedBoss=b.dataset.boss;renderPanel()});const f=$('#classFilter');if(f)f.onchange=()=>renderLoot(d,selectedBoss,f.value);}renderPins();}
function bossContent(d){if(!d.bosses.length)return `<div class="detail-section"><div class="section-title"><h3>ENCONTROS</h3><span>SEM DADOS CONFIRMADOS</span></div><div class="info-note">O material consultado de WoW Forever ainda não confirma a lista de chefes desta instância.</div></div>`;const names=d.bosses;let body='';if(selectedBoss){const id=bossIds[selectedBoss];body=`<div class="boss-card"><div class="boss-head">${portrait(id,'boss-portrait')}<div><h4>${bossLabel(selectedBoss)}</h4><small>${bossLabel(selectedBoss)!==selectedBoss?selectedBoss+' · ':''}${d.name}</small></div></div><div id="lootArea"></div></div>`;}else{body=`<div class="boss-list">${names.map((n,i)=>`<button class="boss-row" data-boss="${n}"><span class="boss-number">${String(i+1).padStart(2,'0')}</span>${portrait(bossIds[n],'boss-thumb')}<span>${bossLabel(n)}</span><small>ver detalhes →</small></button>`).join('')}</div><div class="info-note" style="margin-top:8px">Selecione um chefe para ver seu retrato e os dados encontrados para Forever.</div>`;}return `<div class="detail-section"><div class="section-title"><h3>${selectedBoss?'DUNGEON · '+d.name:'CHEFES'}</h3><span>${selectedBoss?'DETALHES DO CHEFE':names.length+' ENCONTROS'}</span></div>${selectedBoss?`<button class="tab-button" id="bossBack" style="margin:0 0 8px;padding-left:0">← Voltar aos chefes</button>`:''}${body}</div>`;}
function questContent(d){const factionName=labels[faction],records=(questNPCs[d.id]||[]).filter(q=>q.side==='both'||q.side===faction);if(selectedNpc!==null&&records[selectedNpc]){const q=records[selectedNpc];return `<div class="detail-section"><button class="tab-button" id="npcBack" style="padding-left:0">← Voltar às missões</button><div class="npc-detail-card">${portrait(q.npcId,'npc-portrait')}<div><div class="quest-faction ${q.side==='horde'?'horde-text':''}">${labels[q.side].toUpperCase()} · NPC DE MISSÃO</div><h3>${q.npc}</h3><p class="npc-location">${q.where}</p><b class="npc-coord">${q.coord.includes(',')?'Coordenadas '+q.coord:'Localização: '+q.coord}</b></div></div><div class="quest-card selected-quest"><div class="quest-faction">MISSÃO · ${d.name.toUpperCase()}</div><b>${q.quest}</b><p>Fale com ${q.npc} neste local para iniciar ou continuar a missão.</p></div><div class="info-note">O ponto no mapa usa a posição do NPC no atlas de WoW Forever (ou a entrada da dungeon, se o NPC não tiver posição publicada); as coordenadas acima são as publicadas pelo Wowhead Forever.</div></div>`;}if(!records.length)return `<div class="detail-section"><div class="section-title"><h3>MISSÕES · ${factionName.toUpperCase()}</h3><span>DADOS NÃO PUBLICADOS</span></div><div class="info-note">Não encontrei entradas de missão/NPC confirmadas em português para esta dungeon no guia de Wowhead Forever consultado.</div></div>`;return `<div class="detail-section"><div class="section-title"><h3>MISSÕES · ${factionName.toUpperCase()}</h3><span>${records.length} REGISTROS</span></div><div class="info-note">Selecione um NPC para ver o retrato e centralizar a região no mapa.</div>${records.map((q,i)=>`<div class="quest-card"><div class="quest-faction ${q.side==='horde'?'horde-text':''}">${labels[q.side].toUpperCase()} · ${q.where}</div><b>${q.quest}</b><button class="npc-link" data-npc-index="${i}">♟ &nbsp; ${q.npc} <span>${q.coord.includes(',')?q.coord:'ver mapa'}</span></button></div>`).join('')}</div>`;}
function routeContent(d){if(!origin)return `<div class="detail-section"><div class="section-title"><h3>PLANEJAR ROTA</h3><span>ESCOLHA NO MAPA</span></div><div class="info-note">Clique em <b>Selecionar origem no mapa</b> e escolha a cidade/região onde seu personagem está. Depois, o mapa e o texto mostram um caminho indicativo até ${d.zone}.</div><button class="route-action" id="routeTabStart">⌖ &nbsp; SELECIONAR ORIGEM NO MAPA</button></div>`;const options=routeOptions(origin,d);return `<div class="detail-section"><div class="section-title"><h3>CAMINHO ATÉ ${d.name.toUpperCase()}</h3><span>ORIGEM: ${origin.name.toUpperCase()}</span></div>${options.map((o,i)=>`<button class="route-choice ${routeChoice===i?'active':''}" data-choice="${i}">${o.label}</button>`).join('')}<div class="route-box"><h4>Etapas da viagem</h4>${options[routeChoice].steps.map((s,i)=>`<div class="route-step"><span class="step-dot">${i===options[routeChoice].steps.length-1?'◆':'•'}</span><span>${s}</span></div>`).join('')}<p class="route-note">Rota calculada sobre a rede de voos, barcos e caminhos do atlas de WoW Forever. Tempos e conexões são estimativas; confira no jogo.</p></div><button class="route-action" id="changeOrigin">⌖ &nbsp; TROCAR PONTO DE PARTIDA</button></div>`;}
function routeOptions(o,d){return buildRoutes(o,d);}
function selectDungeon(id){selected=dungeons.find(d=>d.id===id);selectedBoss=null;selectedNpc=null;activeTab='bosses';routeMode=false;origin=null;routeChoice=0;clearRoute();renderList();renderPanel();$('#routeHint').classList.remove('visible');$('#sidebar').classList.remove('open');focusMap(selected.x,selected.y,1.72);}
function startRoute(){if(!selected)return;activeTab='route';routeMode=true;origin=null;renderPanel();$('#routeHint').classList.add('visible');$('#routeHint b').textContent='Escolha seu ponto de partida';$('#routeHint small').textContent='Clique em uma cidade ou região no mapa';}
function finishRoute(p){origin=p;routeMode=false;routeChoice=0;$('#routeHint').classList.remove('visible');drawRoute(p,selected);renderPanel();}
function drawRoute(p,d){const opt=routeOptions(p,d)[routeChoice]||routeOptions(p,d)[0];const style={walk:'stroke="#efd27f" stroke-width="3.5" stroke-dasharray="3 8"',fly:'stroke="#8fd0ff" stroke-width="4"',boat:'stroke="#6fa8dc" stroke-width="4" stroke-dasharray="12 7"'};$('#routeLines').innerHTML=opt.segs.map(s=>`<path d="M${s.pts.map(a=>a.join(' ')).join(' L')}" ${style[s.type]} stroke-linecap="round" stroke-linejoin="round" fill="none"/>`).join('')+opt.stops.map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="5" fill="#fff4cf" stroke="#2a2418" stroke-width="2"/>`).join('')+`<circle cx="${p.x}" cy="${p.y}" r="8" fill="#efd27f" stroke="#2a2418" stroke-width="2"/>`;$('#travelRoute').innerHTML=`<circle cx="${d.x}" cy="${d.y}" r="20" fill="#f1d589" opacity=".3"/>`;}
function clearRoute(){origin=null;$('#routeLines').innerHTML='';$('#travelRoute').innerHTML='';}
$$('.faction').forEach(b=>b.onclick=()=>{faction=b.dataset.faction;$$('.faction').forEach(x=>x.classList.toggle('active',x===b));renderList();if(selected&&(selected.side!==faction&&selected.side!=='both')){selected=null;renderPanel();}});
$('#search').addEventListener('input',renderList);$('#levelRange').addEventListener('input',e=>{$('#levelLabel').textContent=e.target.value==='10'?'Todos':`Nível ${e.target.value}`;renderList()});
$('#cancelRoute').onclick=()=>{$('#routeHint').classList.remove('visible');routeMode=false;};$('#routeHint').onclick=e=>{if(e.target.closest('#cancelRoute'))return;};
$('#routeButton')?.addEventListener('click',startRoute);
$('#detailPanel').addEventListener('click',e=>{const npcButton=e.target.closest('[data-npc-index]');if(npcButton){selectedNpc=Number(npcButton.dataset.npcIndex);renderPanel();const q=(questNPCs[selected.id]||[]).filter(x=>x.side==='both'||x.side===faction)[selectedNpc];if(q)focusMap(q.mapX,q.mapY,2.1);}if(e.target.id==='npcBack'){selectedNpc=null;renderPanel();}if(e.target.id==='bossBack'){selectedBoss=null;renderPanel();}if(e.target.id==='routeTabStart')startRoute();if(e.target.id==='changeOrigin')startRoute();if(e.target.matches('.route-choice')){routeChoice=Number(e.target.dataset.choice);renderPanel();if(origin)drawRoute(origin,selected);}});
$('#mapCanvas').addEventListener('click',e=>{if(!routeMode)return;const rect=$('#mapCanvas').getBoundingClientRect(),svg=$('.world-map').getBoundingClientRect();const x=(e.clientX-svg.left)/svg.width*1659,y=(e.clientY-svg.top)/svg.height*1103;const nearest=WOWDATA.places.map(p=>({name:p[0],region:p[0],x:p[1],y:p[2],d:Math.hypot(p[1]-x,p[2]-y)})).sort((a,b)=>a.d-b.d)[0];finishRoute(nearest);});
$('#zoomIn').onclick=()=>setZoom(zoom+.1);$('#zoomOut').onclick=()=>setZoom(zoom-.1);$('#resetMap').onclick=()=>{tx=0;ty=0;$('#mapCanvas').style.translate='0px 0px';setZoom(1);clearRoute();};function setZoom(v){zoom=Math.max(.75,Math.min(3,v));$('#mapCanvas').style.transform=`scale(${zoom})`;$('#zoomValue').textContent=`${Math.round(zoom*100)}%`;}
function focusMap(x,y,v=1.8){const r=$('#mapViewport').getBoundingClientRect(),scale=Math.max(1,Math.min(3,v)),px=x/1659*r.width,py=y/1103*r.height;zoom=scale;tx=-(px-r.width/2)*scale;ty=-(py-r.height/2)*scale;$('#mapCanvas').style.translate=`${tx}px ${ty}px`;$('#mapCanvas').style.transform=`scale(${zoom})`;$('#zoomValue').textContent=`${Math.round(zoom*100)}%`;}
$('#mapViewport').addEventListener('wheel',e=>{e.preventDefault();const r=$('#mapViewport').getBoundingClientRect(),cx=e.clientX-r.left-r.width/2,cy=e.clientY-r.top-r.height/2,next=Math.max(.75,Math.min(3,zoom*(e.deltaY<0?1.12:.89)));tx=cx-((cx-tx)/zoom)*next;ty=cy-((cy-ty)/zoom)*next;zoom=next;$('#mapCanvas').style.translate=`${tx}px ${ty}px`;$('#mapCanvas').style.transform=`scale(${zoom})`;$('#zoomValue').textContent=`${Math.round(zoom*100)}%`;},{passive:false});
let dragging=false,startX=0,startY=0,tx=0,ty=0;$('#mapViewport').addEventListener('pointerdown',e=>{if(e.target.closest('.map-pin')||routeMode)return;dragging=true;startX=e.clientX-tx;startY=e.clientY-ty;$('#mapViewport').classList.add('dragging');$('#mapViewport').setPointerCapture(e.pointerId)});$('#mapViewport').addEventListener('pointermove',e=>{if(!dragging)return;tx=e.clientX-startX;ty=e.clientY-startY;$('#mapCanvas').style.translate=`${tx}px ${ty}px`});$('#mapViewport').addEventListener('pointerup',()=>{dragging=false;$('#mapViewport').classList.remove('dragging')});
$('#openSidebar').onclick=()=>$('#sidebar').classList.add('open');$('#closeSidebar').onclick=()=>$('#sidebar').classList.remove('open');$('#mobileList').onclick=()=>$('#sidebar').classList.add('open');
function renderLoot(d,boss){
  const area=$('#lootArea');
  if(area){
    const id=bossIds[boss],items=lootRows(id).slice().sort((a,b)=>b[2]-a[2]||b[4]-a[4]);
    area.innerHTML=items.length?`<table class="loot-table"><thead><tr><th>ITEM</th><th>CHANCE</th></tr></thead><tbody>${items.map(([iid,name,q,icon,pct])=>`<tr><td><a class="loot-item q${q}" href="https://www.wowhead.com/forever/pt/item=${iid}" target="_blank" rel="noreferrer"><img class="loot-icon" src="${icon?IMG_ICON+icon+'.jpg':''}" alt="" referrerpolicy="no-referrer" loading="lazy" onerror="this.style.visibility='hidden'">${name}</a></td><td class="loot-pct">${pct?pct+'%':'—'}</td></tr>`).join('')}</tbody></table>`:`<div class="info-note">O Wowhead Forever não lista drops para este chefe.</div>`;
  }
  const back=$('#bossBack');if(back)back.onclick=()=>{selectedBoss=null;renderPanel()};
}
const QUALITY=['poor','common','uncommon','rare','epic','legendary'];
const IMG_THUMB='https://wow.zamimg.com/modelviewer/classic/thumbs/npc/',IMG_SHOT='https://wow.zamimg.com/uploads/screenshots/normal/',IMG_ICON='https://wow.zamimg.com/images/wow/icons/large/';
function bossLabel(name){const n=WOWDATA.npcs[bossIds[name]];return n&&n.n?n.n:name}
function portrait(id,cls){const n=WOWDATA.npcs[id]||{},srcs=[n.m&&IMG_THUMB+n.m+'.png',n.i&&IMG_SHOT+n.i].filter(Boolean);return `<div class="character-portrait ${cls}"><img ${srcs.length?`src="${srcs[0]}" data-alt="${srcs[1]||''}"`:''} alt="" referrerpolicy="no-referrer" loading="lazy"><span>${cls==='npc-portrait'?'♟':'♜'}</span></div>`}
function hookImages(){$$('.character-portrait img').forEach(img=>{if(!img.getAttribute('src')){img.style.display='none';return}img.onerror=()=>{const alt=img.dataset.alt;if(alt){img.dataset.alt='';img.src=alt}else img.style.display='none'}})}
function lootRows(id){const n=WOWDATA.npcs[id];return n&&n.d?n.d:[]}
// Route planner over the atlas travel network (flight paths, zeppelins and boats) with walking legs.
function buildRoutes(o,d){
  const {nodes,flights,boats}=WOWDATA,WALK=1.1,cont=p=>p[0]<800?0:1,dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
  const hordeBoat=/Orgrimmar|Undercity|Grom/,okFaction=f=>f===faction||f==='neutral'||f==='both';
  const V=[{k:'o',n:o.name,p:[o.x,o.y]},{k:'d',n:d.name,p:[d.x,d.y]}];
  nodes.forEach(n=>{if(okFaction(n[1]))V.push({k:'f',n:n[0],p:[n[2],n[3]]})});
  const usable=boats.filter(b=>hordeBoat.test(b.from+b.to)?faction==='horde':/Menethil|Theramore|Auberdine|Stormwind|Darnassus/.test(b.from+b.to)?faction==='alliance':true);
  const ports=[];usable.forEach(b=>{const a=V.length;V.push({k:'p',n:b.from,p:b.a});V.push({k:'p',n:b.to,p:b.b});ports.push([a,a+1,b.s])});
  const adj=V.map(()=>[]),add=(a,b,c,t)=>{adj[a].push({to:b,c,t});adj[b].push({to:a,c,t})};
  const fIdx={};V.forEach((v,i)=>{if(v.k==='f')fIdx[v.n]=i});
  flights.forEach(([a,b,s])=>{const A=fIdx[nodes[a][0]],B=fIdx[nodes[b][0]];if(A!==undefined&&B!==undefined)add(A,B,s+20,'fly')});
  ports.forEach(([a,b,s])=>add(a,b,s+90,'boat'));
  for(let i=0;i<V.length;i++)for(let j=i+1;j<V.length;j++){if(V[i].k==='f'&&V[j].k==='f')continue;if(V[i].k==='p'&&V[j].k==='p')continue;if(cont(V[i].p)!==cont(V[j].p))continue;if(V[i].k==='d'&&V[j].k==='o')continue;add(i,j,dist(V[i].p,V[j].p)*WALK,'walk')}
  function dijkstra(banned){const D=V.map(()=>Infinity),P=[];D[0]=0;const Q=new Set(V.keys());while(Q.size){let u=-1;for(const i of Q)if(u<0||D[i]<D[u])u=i;if(D[u]===Infinity)break;Q.delete(u);for(const e of adj[u]){if(banned.has(e.t))continue;if(D[u]+e.c<D[e.to]){D[e.to]=D[u]+e.c;P[e.to]={from:u,t:e.t}}}}if(D[1]===Infinity)return null;const path=[];let c=1;while(c!==0){path.unshift({to:c,from:P[c].from,t:P[c].t});c=P[c].from}return {total:D[1],path}}
  const fmt=s=>s>=3600?`${Math.floor(s/3600)}h ${Math.round(s%3600/60)}min`:`${Math.max(1,Math.round(s/60))} min`;
  function describe(label,plan){
    const legs=[];plan.path.forEach(e=>{const last=legs[legs.length-1];if(last&&last.t===e.t&&e.t==='fly'){last.to=e.to;last.pts.push(V[e.to].p);return}legs.push({t:e.t,from:e.from,to:e.to,pts:[V[e.from].p,V[e.to].p]})});
    const steps=legs.map(l=>{const a=V[l.from],b=V[l.to];return l.t==='walk'?(l.to===1?`Siga por terra até a entrada de <b>${d.name}</b>`:`Siga por terra até <b>${b.n}</b>`)+(a.k==='o'?'':` (saindo de ${a.n})`):l.t==='fly'?`Voo de <b>${a.n}</b> até <b>${b.n}</b>${l.pts.length>2?' (com escalas)':''}`:`Transporte (navio/zepelim) de <b>${a.n}</b> até <b>${b.n}</b>`});
    return {label:`${label} · ${fmt(plan.total)}`,steps,segs:legs.map(l=>({type:l.t,pts:l.pts})),stops:legs.slice(0,-1).map(l=>V[l.to].p)};
  }
  const opts=[],fast=dijkstra(new Set());if(fast)opts.push(describe('✦ Mais rápido (voos e navios)',fast));
  const noFly=dijkstra(new Set(['fly']));if(noFly&&noFly.path.some(e=>e.t==='boat'))opts.push(describe('✦ Sem voos (terra e navio)',noFly));
  const land=dijkstra(new Set(['fly','boat']));if(land)opts.push(describe('✦ Somente por terra',land));
  return opts.length?opts:[{label:'Sem rota conhecida',steps:['Não há conexão por terra, voo ou navio no mapa a partir deste ponto.'],segs:[],stops:[]}];
}
const renderDetailPanelBase=renderPanel;
renderPanel=function(){
  renderDetailPanelBase();
  if(!selected)return;
  const bossShot=(selected.bosses||[]).map(b=>(WOWDATA.npcs[bossIds[typeof b==='string'?b:b.name]]||{}).i).find(Boolean);
  const cover=$('.detail-cover'),photo=WOWDATA.dz[selected.id]||dungeonPhotos[selected.id]||bossShot,scene=cover?.querySelector('.cover-scene');
  if(photo&&scene){const img=document.createElement('img');img.className='dungeon-photo';img.src=photo.startsWith('http')?photo:IMG_SHOT+photo;img.alt=`Imagem da dungeon ${selected.name}`;img.referrerPolicy='no-referrer';img.onerror=()=>{img.remove()};scene.replaceWith(img)}
  hookImages();
  if(selectedBoss&&activeTab==='bosses')renderLoot(selected,selectedBoss);
};
renderList();renderPanel();
// Deep link: #dungeonId/tab/boss-or-npc-index
(()=>{const [id,tab,extra]=decodeURIComponent(location.hash.slice(1)).split('/');if(!dungeons.some(d=>d.id===id))return;selectDungeon(id);if(tab){activeTab=tab;if(tab==='bosses'&&extra)selectedBoss=extra;if(tab==='quests'&&extra)selectedNpc=Number(extra);renderPanel()}})();

