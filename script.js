document.addEventListener("DOMContentLoaded", () => {
    const filmes = [
        {
            titulo: "Kraven: O Caçador",
            imagem: "imagens/Kraven.jpg",
            video: "https://www.dropbox.com/scl/fi/120nljaxkdv4eveq68vp5/Kraven.mp4?rlkey=esci2zlr0wu3o8f9pz0fi34ex&st=xu4c75wf&raw=1",
            sinopse: "Kraven é um dos vilões mais icônicos do universo do Homem-Aranha, e neste filme ele é caçado e caçador.",
            categoria: "acao"
        },
        {
            titulo: "Interestelar",
            imagem: "imagens/interestelar.jpg",
            video: "https://www.dropbox.com/scl/fi/c20uyawkjt6jj2gq9ii9u/Interestelar.mp4?rlkey=we36jaxqahprhwqcof3cqul61&st=u2xhh1jl&raw=1",
            sinopse: "Quando um buraco de minhoca é descoberto perto de Saturno, uma equipe de astronautas viaja através dele para encontrar um novo lar para a humanidade.",
            categoria: "drama"
        },
        {
            titulo: "Despertar de um Assassino",
            imagem: "imagens/assassino.jpg",
            video: "https://drive.google.com/file/d/1qtAe7ieAo51oPXcAuT6oD22oCj6iza-4/preview",
            sinopse: "Um thriller psicológico eletrizante, onde um homem acorda sem memória e descobre que é procurado pela polícia.",
            categoria: "acao"
        },
        {
            titulo: "Eu sou a lenda",
            imagem: "imagens/eusou.jpg",
            video: "https://www.dropbox.com/scl/fi/tozq2zzicq55lqiatvk8e/Eu.Sou.A.Lenda.2008.1080P.Bluray.6Ch.X264.Dual-Bludv.mp4?rlkey=mngmgoicmrgj1bw3zljodtpe3&st=t540ca2d&raw=1",
            sinopse: "Após uma epidemia devastadora, o militar Robert Neville luta para sobreviver em um mundo tomado por zumbis.",
            categoria: "acao"
        },
        {
            titulo: "Rede de vingança",
            imagem: "imagens/vingador de.jpg",
            video: "https://www.dropbox.com/scl/fi/4a1sy7q5byqm5oebk1t84/Beekeeper-Rede.De.Vinganca.mp4?rlkey=zp43n1xu7wozigo1u0384pv91&st=nedrwf1p&raw=1",
            sinopse: "Clay tem seu passado exposto e busca vingança contra aqueles que destruíram sua vida.",
            categoria: "acao"
        },
        {
            titulo: "Milagre do destino",
            imagem: "imagens/milagre.jpg",
            video: "hhttps://www.dropbox.com/scl/fi/o2n57khjetn9lkgnj7psx/Milagre-1.mp4?rlkey=1q5mcxlm86f01t6hwmi0zzqnn&st=vwq4jycp&raw=1",
            sinopse: "Baseado em uma história real, uma mulher luta contra um câncer e busca um doador de medula.",
            categoria: "drama"
        },
        {
            titulo: "438 Days",
            imagem: "imagens/438.jpg",
            video: "https://drive.google.com/file/d/1WCNxgvWU6BhAhQ44eMW37U_So0dIPGR7/preview",
            sinopse: "A história real de dois jornalistas presos injustamente durante 438 dias.",
            categoria: "acao"
        },
        {
            titulo: "Fuga da escravidão",
            imagem: "imagens/max.jpg",
            video: "https://www.dropbox.com/scl/fi/4qvo1o9z665xedwowndl4/Fuga-da-escravid-o-do-tr-fico-de-seres-humanos.-Filme-De-Drama-Y-Thriller.-Dublado-Em-Portugu-s-720P_HD.mp4?rlkey=878yx2hyvir2tasifk64azzzg&st=ukyz8cv6&raw=1",
            sinopse: "A emocionante história de um escravo fugindo para a liberdade.",
            categoria: "terror"
        },
  
  
  
        {
          titulo: "Parça 2",
          imagem: "imagens/parça.jpg",
          video: "https://www.dropbox.com/scl/fi/vw8vt4r3r68hutiwmwtyb/Os-par-as-2-Filme-completo-dublado-720P_HD.mp4?rlkey=4q21sco2gidee2ftpor9majc1&st=6zprqvyk&raw=1",
          sinopse: "Em os Parças 2, Romeu (Bruno de Luca) precisa conseguir dinheiro para deixar o país o quanto antes, já que China saiu da cadeia e está em busca de vingança. Com o objetivo de ajudar o parça, Toin (Tom Cavalcante), Ray Van (Whindersson Nunes) e Pilôra (Tirulipa) juntam forças para reformar uma colônia de férias, de forma a atrair jovens de todo tipo e conseguir levantar o dinheiro. Quando o empreendimento enfim começa a funcionar, eles logo passam a competir com uma colônia vizinha, bem mais requintada.",
          categoria: "comedia"
      },
  
        
      {
        titulo: "To de Graça2",
        imagem: "imagens/to de graça 2.jpg",
        video: "https://www.dropbox.com/scl/fi/wlj6lkuysb1b38cy4dgok/t-de-gra-a-o-filme-completo-ESCREVA-SE-720P_HD.mp4?rlkey=dhvn3ed5u5aqoqovbw9snr1q0&st=y43jv32w&raw=1",
        sinopse: "Em os Parças 2, Romeu (Bruno de Luca) precisa conseguir dinheiro para deixar o país o quanto antes, já que China saiu da cadeia e está em busca de vingança. Com o objetivo de ajudar o parça, Toin (Tom Cavalcante), Ray Van (Whindersson Nunes) e Pilôra (Tirulipa) juntam forças para reformar uma colônia de férias, de forma a atrair jovens de todo tipo e conseguir levantar o dinheiro. Quando o empreendimento enfim começa a funcionar, eles logo passam a competir com uma colônia vizinha, bem mais requintada.",
        categoria: "comedia"
    },
  
    {
      titulo: "Comandante na altura",
      imagem: "imagens/altura.jpg",
      video: "https://www.dropbox.com/scl/fi/r9o2sfv2uz7hu85ywyxfj/O.Comandante.P-nico.Nas.Alturas.2019.1080P.Web-Dl.Dual.2.0.mp4?rlkey=lvgax0fuu2sj6khbjcvap50hj&st=7vhn3gra&raw=1",
      sinopse: "Baseado em um acidente aéreo real. Quando o para-brisas de uma aeronave comercial se estilhaça a 30.000 pés de altitude, um piloto e sua tripulação farão de tudo para garantir a segurança dos passageiros e pousar o avião..",
      categoria: "acao"
  },
  
  {
      titulo: "Capitão América 2025",
      imagem: "imagens/america.jpg",
      video: "https://www.dropbox.com/scl/fi/wtcqmjedxmjv59fja9i5r/Capit-o.Am-rica.Admir-vel.Mundo.Novo.2025.1080P.Webrip.R5.Dublado.2.0.mp4?rlkey=k9aim8c2b1ysulqeko6xfnfyo&st=4byszlgo&raw=1",
      sinopse: "Para provar a inocência de um amigo, o novo Capitão América vai contra todos, inclusive o general 'Thunderbolt' Ross, agora o presidente dos Estados Unidos. Descobrindo uma rede de conspirações, Sam Wilson redefine o que é ser um super-herói em um admirável mundo novo..",
      categoria: "acao"
  },
  
  {
      titulo: "Troia",
      imagem: "imagens/troia.jpg",
      video: "https://www.dropbox.com/scl/fi/77tsqr5htqs6ptugu93o2/Troia-The-Pirate-Filmes.mp4?rlkey=jjvsysidh8gawswfq6svxbxks&st=tnnkd6cl&raw=1",
      sinopse: "Em 1193 A.C., Paris (Orlando Bloom) é um príncipe que provoca uma guerra da Messência contra Tróia, ao afastar Helena (Diane Kruger) de seu marido, Menelaus (Brendan Gleeson). Tem início então uma sangrenta batalha, que dura por mais de uma década. A esperança do Priam (Peter O'Toole), rei de Tróia, em vencer a guerra está nas mãos de Aquiles (Brad Pitt), o maior herói da Grécia, e seu filho Hector (Eric Bana)..",
      categoria: "acao"
  },
    
  
  
  {
      titulo: "A Ascensão do império '300'",
      imagem: "imagens/300.jpg",
      video: "https://www.dropbox.com/scl/fi/3b06ry3muwaqockyk762q/300.mp4?rlkey=a1fache0g4uekz5zm2gx62459&st=79r4qqxd&raw=1",
      sinopse: "Grécia, 480 AC. Na Batalha de Termópilas, o rei Leônidas (Gerard Butler) e seus 300 guerreiros de Esparta lutam bravamente contra o numeroso exército do rei Xerxes (Rodrigo Santoro). No front de batalha, eles enfrentam desafios que marcam para sempre os destinos de seus povos. Enquanto enfrentam um dos maiores confrontos da história, a Rainha Gorgos tenta enviar reforços e ajuda para Leônidas. Após três dias de muita luta, porém, todos os espartanos são mortos. Menos Dilos, o único sobrevivente que passa, então, a narrar os acontecimentos desse evento colossal. O sacrifício e a dedicação destes homens uniu a Grécia no combate contra o inimigo persa. Dirigido por Zack Snyder, 300 é um épico sobre coragem, liberdade e martírios...",
      categoria: "acao"
  },
  
  
  
  
  
  {
      titulo: "Mufasa: O Rei Leão",
      imagem: "imagens/mufasa.jpg",
      video: "https://www.dropbox.com/scl/fi/nrv96p8s887oqid1voi5q/Mufasa.2024.1080P.Hdrip.Dublado.mp4?rlkey=t3p1wk9j8y0s4j1ns1qo2hjwo&st=dd50svms&raw=1",
      sinopse: "Prólogo do live action de Rei Leão, produzido pela Disney e dirigido por Barry Jenkins, o longa contará a história de Mufasa e Scar antes de Simba. A trama tem a ajuda de Rafiki, Timão e Pumba, que juntos contam a lenda de Mufasa à jovem filhote de leão Kiara, filha de Simba e Nala. Narrado através de flashbacks, a história apresenta Mufasa como um filhote órfão, perdido e sozinho até que ele conhece um simpático leão chamado Taka – o herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário de deslocados em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho..",
      categoria:  "acao"
    },
    
    
    {
      titulo: "Acertando O Tom",
      imagem: "imagens/tom.jpg",// Coloque a imagem correta para o filme
      video: "https://www.dropbox.com/scl/fi/eiyveady8x7pnymx63h03/Acertando-O-Tom-2023-1080P-Web-Dl-Dual.mp4?rlkey=dgwie1muj7a2260ogsp1tv0qz&st=zd04bi6g&raw=1",//Link para preview do vídeo
      sinopse: "Sam é uma jovem que sonha em viver de música. Quando é forçada a se mudar e a entrar num coro gospel, ela precisa ajudar seus companheiros a ganhar uma competição..",
      categoria:  "drama" // Categoria do filme
    },

    {
        titulo: "Auto da Compadecida 2",
        imagem: "imagens/auto.jpg",// Coloque a imagem correta para o filme
        video: "https://www.dropbox.com/scl/fi/uiq6k9k1c1nk2nav1i0ra/O.Auto.Da.Compadecida.2.2024.1080P.Web-Dl.Nacional.5.1.mp4?rlkey=juw64m1ai5fdm2hxfqm6rg4p7&st=gpg923hz&raw=1",//Link para preview do vídeo
        sinopse: " Após 20 anos desaparecido, João Grilo retorna para a cidade de Taperoá e reencontra com seu fiel escudeiro Chicó, que carrega adiante a história de que Nossa Senhora operou um milagre e ressuscitou o amigo. João Grilo, então, agora é considerado uma espécie de santo e seu status de celebridade chama a atenção especial dos dois políticos mais poderosos da região, querendo utilizá-lo como cabo eleitoral. Vendo toda essa comoção como uma oportunidade para finalmente enriquecer, João Grilo organiza um de seus famosos trambiques. Pena que nada sai como o planejado e o passado retorna e se repete para o sertanejo...",
        categoria:  "comedia" // Categoria do filme
      },
      
      {   
        titulo:"Quarto de Guerra",
        imagem:"imagens/quarto.jpg",
        video:"https://www.dropbox.com/scl/fi/0zpti66h8ie36s4ece1qy/Quarto-de-Guerra-2015-5.1-CH-Dublado-1080p-By-LuanHarper.mp4?rlkey=p4ee43krsytw5a0cwz5ozqr0h&st=7slxjeci&raw=1",
        sinopse:"O Quarto de Guerra é um filme que conta a história de Elizabeth e Tony, um casal em crise de relacionamento. A filha pequena percebe que ambos estão à beira do divórcio, mas eles não conseguem chegar a um acordo. Clara, uma anciã amorosa e cheia de sabedoria, apresenta seu “quarto de guerra” para ajudar Elizabeth. O local é um cômodo de sua casa onde trava batalhas de oração e ensina a jovem esposa a usar táticas e armas espirituais para vencer a luta e reconstruir seu lar",
        categoria:"drama"
      },
    
    
        {titulo:"Acompanhante Perfeito",
         imagem:"imagens/acompanhante.jpg",
         video:"https://www.dropbox.com/scl/fi/a62tts2oejd24onpa1r3g/Acompanhante.Perfeita.2025.1080P.Web-Dl.Dual.5.1.mp4?rlkey=9l4qa59mktcdta38onjkvfz2t&st=lep5m1uo&raw=1",
         sinopse:"Em Acompanhante Perfeita, Iris (Sophie Thatcher) e Josh (Jack Quaid) vivem um romance digno de cinema. Após se conhecerem em um mercado, os dois rapidamente se apaixonam e embarcam em um relacionamento intenso. Para aproveitar um fim de semana especial, eles viajam para uma luxuosa casa de campo com amigos, buscando descanso e diversão. No entanto, o que deveria ser um retiro tranquilo se transforma em um verdadeiro pesadelo quando uma revelação inesperada muda tudo: Iris é, na verdade, um robô. A descoberta desencadeia uma série de eventos caóticos, com perseguições, violência e segredos vindo à tona. Em meio ao terror, Iris, uma máquina altamente sofisticada, precisa lutar para sobreviver e entender sua própria existência. Misturando suspense, terror e comédia, o filme aborda temas como idealizações românticas e relações de gênero, explorando os limites entre humano e máquina. Enquanto a tensão aumenta, a grande questão permanece: será que alguém sairá vivo desse fim de semana?",
         categoria:"drama"
        },
        {
            titulo:" Steve Jobs",
            imagem:"imagens/job.jpg",
            video:"https://www.dropbox.com/scl/fi/jjx3n2c19s9m4evydf0dg/Jobs-1080p.mp4?rlkey=lbjwi0gzhkhxl99bxvmnx4s7k&st=vcd93rlu&raw=1",
            sinopse:"Com roteiro de Aaron Sorkin (A Rede Social), o filme de Danny Boyle procura traçar uma análise da vida de Steve Jobs a partir de três blocos, cada um centrado no momento do lançamento de produtos caros à carreira do magnata da Apple",
            categoria:"acao",
        },
         { titulo:"O Jogo da Imitação",
           imagem:"imagens/jogo.jpg",
           video:"https://www.dropbox.com/scl/fi/r55osyapsrjlygxl84ebi/O-Jogo-Da-Imita-o-2015-BRrip-Blu-Ray-720p-Dublado-AndreTPF.mp4?rlkey=9h6ylevpalc42fzgygqaevsqi&st=tsry7j5g&raw=1",
           sinopse:"“O Jogo da Imitação” é um drama biográfico lançado em 2014, sob a direção de Morten Tyldum. O filme retrata a vida de Alan Turing, um matemático e criptoanalista britânico, que desempenhou um papel crucial na decifração dos códigos da máquina Enigma durante a Segunda Guerra Mundial. Com uma poderosa performance de Benedict Cumberbatch no papel principal, a narrativa explora não apenas os desafios intelectuais enfrentados por Turing, mas também suas lutas pessoais em uma época de intolerância. ",
           categoria:"acao",
         },
         { titulo:"Covil de Ladroes",
            imagem:"imagens/covil.jpg",
            video:"https://www.dropbox.com/scl/fi/u6bqm4vkhrbwt0pgflv4s/covil-de-ladroes.mp4?rlkey=za02txt6l0wik2kk9sm07b4wk&st=ldudhgww&raw=1",
            sinopse:"Em Los Angeles, capital dos roubos a banco, um banho de sangue coloca em interseção a vida de dois grupos: a radical unidade de elite do departamento de polícia local, liderada pelo desmedido Nick (Gerard Butler), e a equipe de assaltantes de banco mais arrojada em atividade. Enquanto os criminosos planejam um ataque ambicioso até então tido como impossível, os homens da lei apertam o cerco pelo elo aparentemente mais fraco da gangue.",
            categoria:"acao",
          },
  
          { titulo:"Oficina do Diabo 2025",
            imagem:"imagens/oficina.jpg",
            video:"https://www.dropbox.com/scl/fi/tw34y7xji2ud41nrnxpya/Oficina.Do.Diabo.2025.720P.Web-Dl.Nacional.2.0.mp4?rlkey=zsesevd4yjoavz0trfgon31ff&st=gmnmh703&raw=1",
            sinopse:" Após tentar a vida como músico na cidade grande, Pedro fracassa e volta, sem rumo, para a casa de sua mãe no interior. O demônio Natan levou Pedro a escolhas erradas, no entanto, suas tentações não conseguiram desvirtuá-lo completamente. Decididos a condenar a alma de Pedro ao Inferno, a Oficina convoca o experiente demônio Fausto para guiar Natan em sua missão.",
            categoria:"drama",
          },
   
   
          { titulo:" Até o Último Homem",
            imagem:"imagens/ate.jpg",
            video:"https://www.dropbox.com/scl/fi/42te4x3riru1zvbzzemmh/At-.O.-ltimo.Homem.2017.1080P.Bluray.6Ch.X264.Dual-Bludv.mp4?rlkey=w34w5iv30y939pmnzl5nuq3dm&st=2mrmd8ir&raw=1",
            sinopse:"Desmond T. Doss, foi o médico do Exército Americano da Segunda Guerra Mundial, que serviu durante a Batalha de Okinawa, se recusando a matar pessoas, tornando-se o primeiro homem da história americana a receber a Medalha de Honra sem disparar um tiro.",
            categoria:"acao",
          },
   
   {titulo:"",
    imagem:"",
    video:"",
    sinopse:" ",
    categoria:"acao",
 },
  
  {titulo:"Padre ",
   imagem:"imagens/padre.jpg",
   video:"https://www.dropbox.com/scl/fi/3nuzreybba0bauu20zkd7/padre.mp4?rlkey=5jw04d8qqbc02cvbns13rlpth&st=w2p2e6ze&raw=1",
   sinopse:"Há séculos humanos e vampiros estão em guerra, o que fez com que o planeta fosse devastado. Padre (Paul Bettany) é um guerreiro lendário que participou da guerra com os vampiros. Hoje ele vive na obscuridade, numa das cidades controladas pela igreja. Ele volta à ativa quando Lucy Pace (Lily Collins) é sequestrada por um grupo de vampiros liderados por Black Hat (Karl Urban). Ao lado do xerife Hicks (Cam Gigandet) e de Priestess (Maggie Q), uma integrante da legião de matadores de vampiros, Padre parte para resgatá-la.",
   categoria:"drama",
  },
  
  {titulo:" Velozes e Furioso 5",
    imagem:"imagens/furioso 5.jpg",
    video:"https://www.dropbox.com/scl/fi/qvwmqxk0mv576xbi83ko5/Velozes-e-Furiosos-5-1080p-The-Pirate-Filmes.mp4?rlkey=f4fgyr6ihy1n28eu3m57ostif&st=q2ufnco2&raw=1",
    sinopse:"Em Velozes & Furiosos 5: Operação Rio, Dominic Toretto (Vin Diesel) foi resgatado da prisão por sua irmã Mia (Jordana Brewster) e Brian O'Conner (Paul Walker), que realizam um ousado resgate sobre rodas. Logo em seguida, ele desaparece. Brian e Mia vão até o Rio de Janeiro, onde encontram Vince (Matt Schulze). Ele propõe ao casal o roubo de carros que estão sendo levados em um trem, algo que, segundo ele, será uma operação simples que renderá um bom lucro. Durante a operação, Dominic reaparece e diz à irmã que os planos mudaram. Ela então leva um dos carros a um esconderijo em plena favela carioca, deixando Dominic e Brian enfrentando policiais e bandidos. Ao desmontar o carro, o trio descobre que ele contém um chip com todas as operações ilegais de Hernan Reis (Joaquim de Almeida), incluindo onde guarda o dinheiro arrecadado. É o suficiente para que eles elaborem um plano para roubar a fortuna de Reis, contando com a ajuda de vários amigos.",
    categoria:"acao",
   },
   
   {titulo:"Velozes e Furioso 7",
    imagem:"imagens/furioso.jpg",
    video:"https://www.dropbox.com/scl/fi/cq84kwoe27getlsfyge1l/Velozes.E.Furiosos.7.2015.1080P.Web-Dl.Dual-Wolverdonfilmes.Com.mp4?rlkey=g9y0igk9awgvfz7zs9xql1de0&st=s08vvxl1&raw=1",
    sinopse:"Velozes e Furiosos 7 acompanha Dom (Vin Diesel), Brian (Paul Walker), Letty (Michelle Rodriguez) e o resto da equipe após os acontecimentos em Londres. Apesar de terem suas chances de voltar para os Estados Unidos e recomeçarem suas vidas, a tranquilidade do grupo é destruída quando Deckard Shaw (Jason Statham), um assassino profissional, quer vingança pela morte de seu irmão. Agora, a equipe tem que se reunir para impedir este novo vilão. Mas dessa vez, não é só sobre ser veloz. A luta é pela sobrevivência.",
    categoria:"acao",
   },
   
   {titulo:"Velozes e Furioso 9",
    imagem:"imagens/furioso 9.jpg",
    video:"https://www.dropbox.com/scl/fi/soknlo6sj1d4ju81ww69j/Velozes-E-Furiosos-9-2021-1080P-Full-Hd-Web-Dl-Dual-5.1.mp4?rlkey=1hj5yt9s7pxpa41b216hashz1&st=7n8bx4tv&raw=1",
    sinopse:"Em Velozes & Furiosos 9, dois anos após o confronto com a ciber-terrorista Cipher - no filme Velozes e Furiosos 8 - Dominic Toretto (Vin Diesel) - agora aposentado - e Letty (Michelle Rodriguez) vivem uma vida pacata ao lado de seu filho Brian. Mas a vida dos dois é logo interrompida quando Roman Pearce, Tej Parker e Ramsey chegam com notícias de que, pouco depois de prender Cipher (Charlize Theron), o avião de Mr. Nobody foi atacado por agentes e sequestraram Cipher, precisando da ajuda dele para investigar mais afundo. Acompanhando eles em uma missão, o grupo logo acha nos escombros parte de um dispositivo chamado Projeto Aries. A calmaria é dissipada quando o irmão desaparecido de Dom retorna e rouba o dispositivo deles com um grupo altamente treinado. Jakob (John Cena), um assassino habilidoso e excelente motorista, está trabalhando ao lado de Cipher. Para enfrentá-los, Toretto vai precisar reunir sua equipe novamente, inclusive Han (Sung Kang), que todos acreditavam estar morto.",
    categoria:"acao",
   },
   
   {titulo:"Velozes e Furioso 10",
    imagem:"imagens/furioso 10.jpg",
    video:"https://www.dropbox.com/scl/fi/t62p91mkdpgjvgadi39gf/Velozes-E-Furiosos-10-2023-1080P-Full-Hd-Web-Dl-Dual-5.1-1.mp4?rlkey=hf1jiuixvvtdjgzu1hk45imuv&st=s8pnsn03&raw=1",
    sinopse:"No décimo filme da série Velozes & Furiosos e último da nova trilogia (Velozes 8, 9 e 10), ao longo de muitas missões e contra probabilidades que pareciam impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante (Jason Momoa), para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas. O fim da estrada começa e Velozes & Furiosos 10 lança os capítulos finais de uma das franquias globais mais famosas e populares do cinema, agora em sua terceira década e ainda forte com o mesmo elenco e personagens centrais de quando começou.",
    categoria:"acao",
   },
   
   {titulo:"  ",
    imagem:"",
    video:"",
    sinopse:"",
    categoria:"acao",
   },
   
   {titulo:"Eli",
    imagem:"imagens/eli.jpg",
    video:"https://www.dropbox.com/scl/fi/2jb3mub2cg2fbpqde8hwh/O-Livro-De-Eli.mp4?rlkey=d9bjhjvdg7kanuw46tfq1veh3&st=fg4zatiy&raw=1",
    sinopse:"Em um futuro não muito distante, 30 anos após o término da última guerra. Eli (Denzel Washington) é um homem solitário, que percorre a América do Norte devastada. Ele apenas deseja paz, mas ao ser desafiado não foge à luta. Seu principal objetivo é proteger a esperança da humanidade, a qual guarda consigo há 30 anos, sendo que para tanto faz o que for preciso para sobreviver. O único que compreende seu intento é Carnegie (Gary Oldman), o autoproclamado déspota de uma cidade repleta de ladrões. Ao mesmo tempo Solara (Mila Kunis), a filha da companheira de Carnegie (Jennifer Beals), fica fascinada com Eli pela possibilidade de que ele lhe mostre o que há além dos domínios que conhece. Só que Carnegie está disposto a impedir sua cruzada, para recuperar Solara e também conseguir o valioso objeto que Eli protege.",
    categoria:"acao",
   },
   
   {titulo:"Hitman 47",
    imagem:"imagens/htiman.jpg",
    video:"https://www.dropbox.com/scl/fi/m531r1jer3vqfmi2udyuh/Hitman.Agente.47.2015.1080P.Bluray.Dual-Wolverdon.mp4?rlkey=fnf5hl0c99xtq1pcnsbx7x9kz&st=q096b0ad&raw=1",
    sinopse:"O agente 47 (Timothy Olyphant) foi criado para ser um exímio matador de aluguel. Suas armas mais poderosas são a ousadia e o orgulho que tem ao executar cada trabalho. O número 47 é uma referência aos dois últimos dígitos do código de barras que tem tatuado em sua nuca. Um dia ele é envolvido em um golpe político, o que faz com que seja perseguido pela Interpol e por militares russos. Enquanto foge pela Europa Oriental ele tenta descobrir quem organizou este plano contra ele, ao mesmo tempo em que precisa lidar com as lembranças que uma bela garota lhe desperta.",
    categoria:"acao",
   },
   
   {titulo:"Hitman 47 2015",
    imagem:"imagens/228985.jpg",
    video:"https://www.dropbox.com/scl/fi/a67yx7azpys3x1xi6lq0c/hitman.mp4?rlkey=c5hsiprzvxgu4ocucfn0xtilc&st=fr4ga040&raw=1",
    sinopse:"Agente 47 (Rupert Friend) é um assassino de elite geneticamente modificado criado para ser a máquina de matar perfeita. Ele precisa caçar uma mega operação que pretende usar o segredo de sua criação para a formação de um exército imbatível. Ao juntar forças com uma misteriosa jovem, que pode ser o diferencial para o sucesso da missão, ele vai descobrir segredos de sua origem em uma batalha épica contra seu maior inimigo.",
    categoria:"acao",
   },
   
   {titulo:"Sonic 3",
    imagem:"imagens/1.jpg",
    video:"https://www.dropbox.com/scl/fi/4c7cm6svgov0c7cem0o84/Sonic.3.O.Filme.2024.1080p.WEB-DL.DUAL.5.1.mp4?rlkey=t4s45ja6y63ar80dtbeorfl7j&st=a7irjyj2&raw=1",
    sinopse:"Sonic 3 – O Filme é o próximo filme de comédia, ação e aventura baseado na popular série de videogames da Sega. Dando continuidade aos eventos de Sonic – O Filme e Sonic 2 – O Filme, a história segue o ouriço velocista Sonic (Ben Schwartz), o guerreiro equidna Knuckles (Idris Elba) e a raposa voadora Tails (Colleen O’Shaughnessey), que agora formam uma aliança para proteger a poderosa Esmeralda Mestra. Contudo, uma nova ameaça surge quando os militares da G.U.N., uma força especial secreta, descobrem que o corpo do Dr. Eggman (Jim Carrey) desapareceu do local onde ocorreu a batalha final, levando a uma nova perseguição cheia de perigos, reviravoltas e ação alucinante. À medida que enfrentam esse novo inimigo, o trio de heróis precisará se unir mais do que nunca para impedir que uma catástrofe ainda maior aconteça. Eles também devem confrontar segredos do passado de Sonic e de Eggman, que podem mudar o destino do mundo.",
    categoria:"acao",
   },
   
   {titulo:"Luta por Justiça",
    imagem:"imagens/jus.jpg",
    video:"",
    sinopse:"Sonic 3  O Filme é o próximo filme de comédia, ação e aventura baseado na popular série de videogames da Sega. Dando continuidade aos eventos de Sonic – O Filme e Sonic 2 – O Filme, a história segue o ouriço velocista Sonic (Ben Schwartz), o guerreiro equidna Knuckles (Idris Elba) e a raposa voadora Tails (Colleen O’Shaughnessey), que agora formam uma aliança para proteger a poderosa Esmeralda Mestra. Contudo, uma nova ameaça surge quando os militares da G.U.N., uma força especial secreta, descobrem que o corpo do Dr. Eggman (Jim Carrey) desapareceu do local onde ocorreu a batalha final, levando a uma nova perseguição cheia de perigos, reviravoltas e ação alucinante. À medida que enfrentam esse novo inimigo, o trio de heróis precisará se unir mais do que nunca para impedir que uma catástrofe ainda maior aconteça. Eles também devem confrontar segredos do passado de Sonic e de Eggman, que podem mudar o destino do mundo.",
    categoria:"acao",
   },
   
   {titulo:"A Queda ",
    imagem:"https://th.bing.com/th/id/OIP.pXAic4j-xlA5qDLO1ZNM5AAAAA?w=115&h=182&c=7&r=0&o=5&cb=ucfimg2&pid=1.7&ucfimg=1",
    video:"https://www.dropbox.com/scl/fi/ccwd183qds9wj3qgv4ckg/A-Queda-2022-1080p-BluRay-DUAL.mp4?rlkey=rrdo3agsw5uyxq660f5yvyhxb&st=adpbkffd&raw=1",
    sinopse:"Para as melhores amigas Becky (Grace Caroline Currey) e Hunter (Virginia Gardner), a vida é sobre vencer medos e ultrapassar limites. A alpinista emocionalmente abalada, Becky, afogada em um mar de tristeza, vivendo semanas dolorosas após o incidente que a marcou para toda a vida, relutantemente decide enfrentar seus fantasmas quando sua amiga, outra alpinista experiente, a convence a embarcar em uma aventura de escalada de alto risco, até o topo de uma torre de TV abandonada",
    categoria:"acao",
   },
   



        
            
  
  
  
  
  
  
  
    ];
  
    const containerFilmes = document.getElementById("filmes-em-destaque");
    const containerCategorias = document.getElementById("categorias");
    const containerSobre = document.getElementById("sobre");
  
    // Função para adicionar filmes no DOM
    function adicionarFilmes(container, filmesArray) {
        container.innerHTML = "";
        filmesArray.forEach((filme) => {
            const divFilme = document.createElement("div");
            divFilme.classList.add("filme");
  
            divFilme.innerHTML = `
                <img src="${filme.imagem}" alt="${filme.titulo}" class="imagem-filme" data-video="${filme.video}">
                <h3>${filme.titulo}</h3>
                <button class="ver-mais">Ver Mais</button>
                <div class="sinopse" style="display: none;">
                    <p>${filme.sinopse}</p>
                </div>
            `;
  
            container.appendChild(divFilme);
        });
  
        const botoesVerMais = container.querySelectorAll(".ver-mais");
        botoesVerMais.forEach((botao) => {
            botao.addEventListener("click", (evento) => {
                const filmeDiv = evento.target.closest(".filme");
                const sinopseDiv = filmeDiv.querySelector(".sinopse");
  
                if (sinopseDiv.style.display === "none" || sinopseDiv.style.display === "") {
                    sinopseDiv.style.display = "block";
                    evento.target.textContent = "Ver Menos";
                } else {
                    sinopseDiv.style.display = "none";
                    evento.target.textContent = "Ver Mais";
                }
            });
        });
  
        const imagensFilmes = container.querySelectorAll(".imagem-filme");
        imagensFilmes.forEach((imagem) => {
            imagem.addEventListener("click", () => {
                const videoSrc = imagem.getAttribute("data-video");
                window.open(videoSrc, "_blank");
            });
        });
    }
  
    // Função para exibir a seção específica
    function exibirSeção(secao) {
        containerFilmes.style.display = "none";
        containerCategorias.style.display = "none";
        containerSobre.style.display = "none";
        secao.style.display = "block";
    }
  
    // Exibir filmes em destaque por padrão
    adicionarFilmes(containerFilmes, filmes.filter(filme => ["acao", "drama", "terror", "Gospel", "aventura", "comedia","Ficção Científica"].includes(filme.categoria)));
  
  
    // Evento de clique nos botões de navegação
    document.getElementById("btn-categorias").addEventListener("click", () => {
        exibirSeção(containerCategorias);
  
        adicionarFilmes(document.getElementById("acao-filmes"), filmes.filter(filme => filme.categoria === "acao"));
        adicionarFilmes(document.getElementById("drama-filmes"), filmes.filter(filme => filme.categoria === "drama"));
        adicionarFilmes(document.getElementById("comedia-filmes"), filmes.filter(filme => filme.categoria === "comedia"));
        adicionarFilmes(document.getElementById("Terror-filmes"), filmes.filter(filme => filme.categoria === "terror"));
        adicionarFilmes(document.getElementById("aventura-filmes"), filmes.filter(filme => filme.categoria === "aventura"));
        adicionarFilmes(document.getElementById("Ficção Científica-filmes"), filmes.filter(filme => filme.categoria === "Ficção Científica"));
    });
  
    document.getElementById("btn-sobre").addEventListener("click", () => {
        exibirSeção(containerSobre);
    });
  
    // Evento de pesquisa
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", () => {
        const termoBusca = searchInput.value.toLowerCase();
        const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(termoBusca));
        adicionarFilmes(containerFilmes, filmesFiltrados);
    });
  // Botão de Sair
  const btnSair = document.getElementById("btn-sair");
  
  if (btnSair) {
      btnSair.addEventListener("click", () => {
          // Redireciona para a página de login
          window.location.href = "OIP.png"; // Substitua com o nome do arquivo correto
      });
  }
  });

  
