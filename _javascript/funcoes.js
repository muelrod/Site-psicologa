
function insere_texto(id) {
    var texto = '';

    switch (id) {
        case 'texto1':
            texto = 'O primeiro passo é a escolha de uma plataforma segura e confiável para realizar a sessão. Existem diversas\n' +
                '    opções, desde aplicativos especializados até softwares de videoconferência. É crucial que a plataforma escolhida seja\n' +
                '    compatível com as regulamentações éticas e de privacidade para garantir a confidencialidade do paciente.'
            break;
        case 'texto2':
            texto = 'Assim como em um atendimento presencial, o paciente e o psicólogo devem combinar horários que se adequem às suas\n' +
            '        agendas. Geralmente, os agendamentos são feitos por meio de um sistema online, proporcionando praticidade e\n' +
            '        flexibilidade para ambas as partes'
            break;

        case 'texto3':
            texto = 'Tanto o psicólogo quanto o paciente devem garantir que estão em um ambiente tranquilo e privado durante a sessão.\n' +
                '    Isso contribui para a concentração e para a criação de um espaço seguro para a expressão emocional.'
            break;

        case 'texto4':
            texto = 'Antes do início da sessão, é importante que ambas as partes testem a conexão com a internet, a câmera e o áudio para\n' +
                '    evitar interrupções durante a sessão. A qualidade da conexão é crucial para uma comunicação eficaz. '
            break;

        case 'texto5':
            texto = 'Durante a sessão, o psicólogo trabalha com o paciente da mesma forma que faria em um atendimento presencial. São\n' +
                '    discutidos os desafios emocionais, os padrões de pensamento, as estratégias de enfrentamento e as metas\n' +
                '    terapêuticas. A abordagem pode variar de acordo com a modalidade terapêutica escolhida, como a terapia\n' +
                '    cognitivo-comportamental, psicanálise, entre outras. '
            break;

        case 'texto6':
            texto = '  Algumas modalidades de terapia online podem incorporar recursos tecnológicos adicionais, como aplicativos de\n' +
                '    monitoramento emocional, ferramentas de autoajuda ou exercícios práticos que podem ser realizados entre as sessões\n' +
                '    para maximizar os benefícios terapêuticos. '
            break;

        case 'texto7':
            texto = ' Ao final de cada sessão, o psicólogo pode conduzir uma avaliação do progresso do paciente e fornecer feedback\n' +
                '    construtivo. A comunicação aberta é fundamental para garantir que a terapia esteja sendo eficaz e que as\n' +
                '    necessidades do paciente estejam sendo atendidas. '
            break;

        case 'texto8':
            texto = 'É imperativo que o psicólogo mantenha os mesmos padrões éticos e de confidencialidade que seriam esperados em um\n' +
                '    ambiente presencial. Isso inclui a proteção dos dados do paciente e a garantia de um ambiente seguro e ético para a\n' +
                '    expressão emocional.'
            break;

        case 'texto9':
            texto= ' Reconhecer a necessidade de ajuda psicológica é crucial para cuidar da saúde mental. Sinais como persistentes\n' +
                '    sentimentos de tristeza, dificuldades nas relações, alterações no sono ou apetite, problemas de concentração,\n' +
                '    comportamentos autodestrutivos, trauma não resolvido, aumento da ansiedade, questões de autoestima e dificuldades em\n' +
                '    lidar com mudanças podem indicar a importância de buscar apoio profissional. Se identificar esses sinais em sua\n' +
                '    vida, considerar a ajuda de um psicólogo ou terapeuta é uma escolha corajosa e positiva para explorar emoções,\n' +
                '    desenvolver estratégias de enfrentamento e receber suporte durante desafios emocionais. Lembrando que buscar ajuda é\n' +
                '    um ato de autocuidado e coragem.'
            break;

        case 'texto10':
            texto= 'A duração de uma sessão de terapia pode variar dependendo do profissional e do tipo de abordagem terapêutica. No\n' +
                '    entanto, em geral, as sessões de terapia costumam durar em média 50 minutos a 1 hora.'
            break;

        case 'texto11':
            texto= 'Os custos de uma sessão psicológica podem variar consideravelmente dependendo de vários fatores, como a região\n' +
                ' geográfica, a experiência do psicólogo, o tipo de terapia oferecida e o contexto em que a terapia é realizada'
            break;

        case 'texto12':
            texto= ' A terapia online e presencial têm características distintas. A terapia online oferece acessibilidade e conforto em\n' +
                '    casa, enquanto a presencial proporciona conexão imediata e privacidade no consultório. Ambas são eficazes, mas a\n' +
                '    escolha depende das preferências e circunstâncias individuais, considerando fatores como tecnologia, barreiras\n' +
                '    físicas e familiaridade. Discutir essas opções com o terapeuta é essencial para uma decisão informada.'
            break;

        case 'texto13':
            texto= ' Escolher o psicólogo certo envolve considerar suas necessidades, especialização e abordagem terapêutica. Verifique\n' +
                '    as qualificações, licença e feedback de outros clientes. Estabeleça uma conexão pessoal durante a primeira consulta\n' +
                '    e assegure-se de que o profissional seja acessível financeiramente e geograficamente. A ética profissional e a\n' +
                '    sensibilidade cultural também são importantes. Leve o tempo necessário para encontrar um psicólogo com quem se sinta\n' +
                '    confortável e confiante.'
            break;
    }
    document.getElementById(id).innerHTML = texto;

}