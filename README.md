# Azeroth Atlas · WoW Forever

Protótipo local de mapa interativo em português. Abra `index.html` em um navegador.

## Dados e procedência

- O fundo cartográfico usa a imagem de terreno publicada no [atlas de WoW Forever](https://wowforever.gg/es/atlas/), sobre a qual o protótipo posiciona os marcadores interativos. A imagem é carregada da web; é necessário estar conectado à internet.
- Nomes de dungeons, missões e NPCs priorizam a localização pt-BR do [guia de missões de masmorras do Wowhead Forever](https://www.wowhead.com/forever/pt/guide/dungeons/every-dungeon-quest-location). Os nomes de instâncias novas também podem ser conferidos no [anúncio da Blizzard em português](https://worldofwarcraft.blizzard.com/pt-br/news/24301455/explore-as-novas-masmorras-de-world-of-warcraft-forever).
- Marcadores das dungeons usam coordenadas reais do atlas de WoW Forever (wowforever.gg), projetadas sobre a imagem de terreno. Os marcadores de Wetlands, Dalaran, Drowned, Krol'dok, Alcaz, Blackmaw e Shaper são **estimados** (o atlas não os publica com precisão) e aparecem com aviso no painel. `data.js` é gerado a partir desses dados.
- Nomes em português, retratos de chefes/NPCs (modelo ou screenshot), ícones e tabelas de loot (com % de drop) vêm das páginas de NPC do [Wowhead Forever pt](https://www.wowhead.com/forever/pt). O Wowhead não publica foto para todas as dungeons; quando não há, é usada a imagem de um chefe ou o painel ilustrado. Loot exibe os itens mais relevantes (qualidade incomum ou superior) de cada chefe.
- A relação de chefes e os registros específicos de Forever vêm do guia de dungeons de Forever. Dungeons novas sem lista de chefes publicada aparecem sem dados.
- NPCs de missão usam a posição do atlas quando existe; caso contrário, a entrada da dungeon. Ao escolher a origem de uma rota para um NPC, só o pin dele fica visível.
- Capitais têm rótulo pequeno centralizado acima do ícone, com bandeira da Aliança (azul) ou da Horda (vermelha).
- Rotas por terra: trechos e setas ficam **vermelhos** ao cruzar território da facção inimiga (conforme a facção selecionada). A classificação é aproximada, por zona (ex.: Sertões do Norte, Durotar, Mulgore = Horda; Elwynn, Dun Morogh, Teldrassil = Aliança).
- Slider de nível com trilho preenchido e marcador dourado.
- Rotas são calculadas (Dijkstra) sobre a rede de voos, barcos e caminhos a pé do atlas, com até 3 opções (mais rápida, sem voos, só por terra). O protótipo não lê voos desbloqueados; confira no jogo.
- O loot dos chefes tem filtro por classe, baseado no tipo de equipamento (tecido, couro, malha, placa, armas) e em restrições de classe dos tooltips do Wowhead Forever.
- Passar o mouse sobre um item mostra o tooltip completo (status, requisitos, preço), como no jogo; os textos vêm de `tooltips.js`, gerado a partir dos tooltips do Wowhead Forever.
- A origem do "Como chegar" é o ponto exato clicado no mapa (ou a entrada de uma dungeon): o app converte o pixel em zona e coordenadas do jogo (grade de zonas do atlas) e traça a rota com setas de direção, sem etapa inicial até uma cidade.
- Ao selecionar uma dungeon, as demais somem do mapa; clicar em área vazia desseleciona. Dungeons mistas usam pin meio azul/meio vermelho, e as capitais têm rótulo no mapa.
- As missões dos NPCs têm link para a busca no Wowhead Forever.
- Os marcadores de NPC de missão são clicáveis diretamente no mapa e o arrastar do mapa não seleciona texto.
- Selecionar um pin (dungeon ou NPC) mantém o zoom e a posição atuais do mapa.
- A lista de dungeons (botão ‹ no topo) e o painel de detalhes (aba ›/‹ na borda) podem ser recolhidos e expandidos.
- Os trechos "por terra" seguem o relevo das zonas do atlas (busca A* sobre a grade de zonas, preferindo o interior das zonas e suas fronteiras) em vez de linhas retas.
- O clique de origem usa a matriz do SVG, então o ponto fica exatamente sob o cursor em qualquer zoom ou tamanho de janela.
- Com um NPC de missão selecionado, "Como chegar" traça a rota até o NPC; caso contrário, até a dungeon.

## Interações

- Alternância entre Aliança e Horda; dungeons dentro de capitais (ex.: Salão dos Thanes, só Aliança) são restritas ao lado; as demais ficam disponíveis para ambas.
- Busca de dungeon/região e filtro por nível.
- Zoom por controles ou scroll do mouse; seleção de dungeon/NPC centraliza e aproxima o mapa.
- Detalhes de dungeon, chefes, missões e NPCs com retratos, além do seletor de origem para planejar uma rota indicativa.

## Hospedagem

Site estático (GitHub Pages): https://tiagork.github.io/wow_forever_interactive_dungeons/ . Em Settings > Pages, use a branch main, pasta raiz. Para rodar local: python -m http.server e abra http://localhost:8000.


## Mobile

O mesmo site se adapta ao celular (<= 860px): painéis viram gaveta/bottom sheet, pinça para zoom, arraste com um dedo, efeitos pesados desativados (mobile.css, mobile.js).

