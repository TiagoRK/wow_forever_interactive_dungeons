# Azeroth Atlas · WoW Forever

Protótipo local de mapa interativo em português. Abra `index.html` em um navegador.

## Dados e procedência

- O fundo cartográfico usa a imagem de terreno publicada no [atlas de WoW Forever](https://wowforever.gg/es/atlas/), sobre a qual o protótipo posiciona os marcadores interativos. A imagem é carregada da web; é necessário estar conectado à internet.
- Nomes de dungeons, missões e NPCs priorizam a localização pt-BR do [guia de missões de masmorras do Wowhead Forever](https://www.wowhead.com/forever/pt/guide/dungeons/every-dungeon-quest-location). Os nomes de instâncias novas também podem ser conferidos no [anúncio da Blizzard em português](https://worldofwarcraft.blizzard.com/pt-br/news/24301455/explore-as-novas-masmorras-de-world-of-warcraft-forever).
- Marcadores das dungeons usam coordenadas reais do atlas de WoW Forever (wowforever.gg), projetadas sobre a imagem de terreno. Os marcadores de Wetlands, Dalaran, Drowned, Krol'dok, Alcaz, Blackmaw e Shaper são **estimados** (o atlas não os publica com precisão) e aparecem com aviso no painel. `data.js` é gerado a partir desses dados.
- Nomes em português, retratos de chefes/NPCs (modelo ou screenshot), ícones e tabelas de loot (com % de drop) vêm das páginas de NPC do [Wowhead Forever pt](https://www.wowhead.com/forever/pt). O Wowhead não publica foto para todas as dungeons; quando não há, é usada a imagem de um chefe ou o painel ilustrado. Loot exibe os itens mais relevantes (qualidade incomum ou superior) de cada chefe.
- A relação de chefes e os registros específicos de Forever vêm do guia de dungeons de Forever. Dungeons novas sem lista de chefes publicada aparecem sem dados.
- NPCs de missão usam a posição do atlas quando existe; caso contrário, a entrada da dungeon.
- Rotas são calculadas (Dijkstra) sobre a rede de voos, barcos e caminhos a pé do atlas, com até 3 opções (mais rápida, sem voos, só por terra). O protótipo não lê voos desbloqueados; confira no jogo.
- O loot dos chefes tem filtro por classe, baseado no tipo de equipamento (tecido, couro, malha, placa, armas) e em restrições de classe dos tooltips do Wowhead Forever.
- Passar o mouse sobre um item mostra o tooltip completo (status, requisitos, preço), como no jogo; os textos vêm de `tooltips.js`, gerado a partir dos tooltips do Wowhead Forever.
- A origem do "Como chegar" é o ponto exato clicado no mapa (ou a entrada de uma dungeon): o app converte o pixel em zona e coordenadas do jogo (grade de zonas do atlas) e traça a rota com setas de direção, sem etapa inicial até uma cidade.
- Os marcadores de NPC de missão são clicáveis diretamente no mapa e o arrastar do mapa não seleciona texto.
- Com um NPC de missão selecionado, "Como chegar" traça a rota até o NPC; caso contrário, até a dungeon.

## Interações

- Alternância entre Aliança e Horda; dungeons dentro de capitais (ex.: Salão dos Thanes, só Aliança) são restritas ao lado; as demais ficam disponíveis para ambas.
- Busca de dungeon/região e filtro por nível.
- Zoom por controles ou scroll do mouse; seleção de dungeon/NPC centraliza e aproxima o mapa.
- Detalhes de dungeon, chefes, missões e NPCs com retratos, além do seletor de origem para planejar uma rota indicativa.
