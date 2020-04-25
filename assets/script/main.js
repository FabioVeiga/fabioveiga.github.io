
var Main = function(_language = 'en'){
    
    let language = _language
    //catch up everyElement
    let htmlLang = document.querySelector('html')
    let linkedin = document.getElementById('linkedin')
    let txtAbout = document.getElementById('txtAbout')
    let txtResume = document.getElementById('txtResume')
    let txtSkills = document.getElementById('txtSkills')
    let txtPortfolio = document.getElementById('txtPortfolio')
    //let txtContact = document.getElementById('txtContact')
    let txtProfession = document.getElementById('txtProfession')
    let divAboutMe = document.getElementById('divAboutMe')
    let lblBirthday = document.getElementById('lblBirthday')
    let lblPhone = document.getElementById('lblPhone')
    let lblCity = document.getElementById('lblCity')
    let lblAge = document.getElementById('lblAge')
    let lblDegree = document.getElementById('lblDegree')
    let lblResume = document.getElementById('lblResume')
    let txtEducation = document.getElementById('txtEducation')
    let txtSumary = document.getElementById('txtSumary')
    let txtExperience = document.getElementById('txtExperience')
    let prosegur = document.getElementById('prosegur')
    let attps = document.getElementById('attps')
    let txtPortuguese = document.getElementById('txtPortuguese')
    let txtSpanish = document.getElementById('txtSpanish')
    let txtEnglish = document.getElementById('txtEnglish')

    this.changeLang =  function(){
        switch(language){
            case 'pt-BR':
                langPortuguese();
                break
                case 'es':
                langSpanish();
                break
            default:
                langEnglish();
                break 
        }
    }

    function langEnglish(){
        htmlLang.setAttribute('lang',language)
        linkedin.setAttribute('href','https://www.linkedin.com/in/fabio-luiz-veiga-65612731/?locale=en_US')
        txtAbout.innerHTML = 'About'
        txtResume.innerHTML = 'Resume'
        txtPortfolio.innerHTML = 'Portfolio'
        //txtContact.innerHTML = 'Contact'
        divAboutMe.innerHTML = ''
        divAboutMe.innerHTML += `<p>I have been working for over ${new Date().getFullYear() - 2009} years in IT. More than ${new Date().getFullYear() - 2012} years as a system analyst. I started my career as technical support that allowed me to understand the needs of users and this provided me as a system analyst to commit my energies bringing quality to the systems and their use with better performance, functions, usability and etc.</p>`
        txtProfession.innerHTML = 'System analyst & Developer.'
        lblBirthday.innerHTML = 'Birthday'
        lblPhone.innerHTML = 'Phone'
        lblCity.innerHTML = 'City'
        lblAge.innerHTML = 'Age'
        lblDegree.innerHTML = '<strong>Degree</strong>: Sciences Computer'
        lblResume.innerHTML = 'Resume'
        txtEducation.innerHTML = 'Education'
        txtSumary.innerHTML = 'Sumary'
        txtExperience.innerHTML = 'Experience'
        //Prosegur
        prosegur.innerHTML = '<h4>Senior Systems Analyst</h4>'
        prosegur.innerHTML += '<h5>04/2016 - 10/2019</h5>'
        prosegur.innerHTML += '<p><em>Prosegur S/A, São Paulo, BR </em></p>'
        prosegur.innerHTML += '<ul>'
        prosegur.innerHTML += '<li>Responsible for the technological innovation of new products, suitable new environments, develop projects, use-case, testing, prototype designs, system debugging, and functional documentation.</li>'
        prosegur.innerHTML += '<li>Track deployment of systems, services or products derived from new technologies at clients or internally. </li>'
        prosegur.innerHTML += '<li>Test system integration APIs, legacies and Intersystem. Discussions with software manufacturers aimed at processes improvements, acting as global QA.</li>'
        prosegur.innerHTML += '<li> Development and maintenance of scripts (Jobs, Procedures, Triggering, Functions, Views) in the database (SQL Server, Oracle, MySql), debugging Visual Studio, solving problems in Brazil, South American countries and Spain.</li>'
        prosegur.innerHTML += '</ul>'
        //ATTPS
        attps.innerHTML = '<h4>Systems Analyst</h4>'
        attps.innerHTML += '<h5>03/2015 - 04/2016</h5>'
        attps.innerHTML += '<p><em>Attps Informática, São Paulo, BR</em></p>'
        attps.innerHTML += '<ul>'
        attps.innerHTML += '<li>I worked “in loco” at PROSEGUR S/A, with requirements analysis, tests, and system approvals, use case, structuring new projects and maintaining and improving current projects.</li>'
        attps.innerHTML += '<li>The main project was Effective Automation Machines, which was a product that runs at more than 2,000 establishments, generating systemic advances, and bug fixes.</li>'
        attps.innerHTML += '<li>Define business goals to determine systems requirements.</li>'
        attps.innerHTML += '</ul>'
        txtPortuguese.innerHTML = '<span class="skill" id="txtPortuguese">Portuguese <i class="val">100%</i></span>'
        txtSpanish.innerHTML = '<span class="skill" id="txtSpanish">Spanish <i class="val">80%</i></span>'
        txtEnglish.innerHTML = '<span class="skill" id="txtEnglish">English <i class="val">60%</i></span>'
    }

    function langPortuguese(){
        htmlLang.setAttribute('lang',language)
        linkedin.setAttribute('href','https://www.linkedin.com/in/fabio-luiz-veiga-65612731/?locale=pt_BR')
        txtAbout.innerHTML = 'Sobre'
        txtSkills.innerHTML = 'Habilidades'
        txtResume.innerHTML = 'Currículo'
        txtPortfolio.innerHTML = 'Portfolío'
        //txtContact.innerHTML = 'Contato'
        divAboutMe.innerHTML = ''
        divAboutMe.innerHTML += `<p>Trabalho há mais de ${new Date().getFullYear() - 2009} anos na área de TI e no que tange sistemas trabalho há quase ${new Date().getFullYear() - 2012} anos. Comecei minha trajetória como suporte técnico que me permitiu entender as necessidades dos usuários e isso me proporcionou como analista de sistema à empenhar minhas energias trazendo qualidade nos sistemas e em sua utilização com melhores desempenho, funções, usabilidade e etc.</p>`
        txtProfession.innerHTML = 'Analista de sistema & Desenvolvedor.'
        lblBirthday.innerHTML = 'Nascimento'
        lblPhone.innerHTML = 'Telefone'
        lblCity.innerHTML = 'Cidade'
        lblAge.innerHTML = 'Idade'
        lblDegree.innerHTML = '<strong>Formação</strong>: Sistema de informação'
        lblResume.innerHTML = 'Currículo'
        txtEducation.innerHTML = 'Educação'
        txtSumary.innerHTML = 'Sumário'
        txtExperience.innerHTML = 'Experiência'
        //Prosegur
        prosegur.innerHTML = '<h4>Analista de Sistema Sênior</h4>'
        prosegur.innerHTML += '<h5>04/2016 - 10/2019</h5>'
        prosegur.innerHTML += '<p><em>Prosegur S/A, São Paulo, BR </em></p>'
        prosegur.innerHTML += '<ul>'
        prosegur.innerHTML += '<li>Manter e melhorar o ambiente tecnológico trazendo novas soluções para serem aderidos pela àrea de negocio.</li>'
        prosegur.innerHTML += '<li>Realizar o levantamento de requisitos, gerar os documentos AS-IS/TO-BE, casos de uso, funcionais e técnicos.</li>'
        prosegur.innerHTML += '<li>Acompanhar todo o ciclo do projeto até sua implantação e sustentação.</li>'
        prosegur.innerHTML += '<li>Testar suas integrações com legados e terceiros atravez de API’s ou arquivos.</li>'
        prosegur.innerHTML += '<li>QA global e nas atribuições técnicas era responsável por desenvolver e manter scripts (Jobs, Procedures, Trigger, Functions, Views) na base de dados (SQL Server, Oracle, MySql), debugs nas linguagens Visual Basic e Asp.Net.</li>'
        prosegur.innerHTML += '<li>Troubleshooting em suporte nível Brasil, Países Sul Americanos e Espanha.</li>'
        prosegur.innerHTML += '</ul>'
        //ATTPS
        attps.innerHTML = '<h4>Analista de Sistemas</h4>'
        attps.innerHTML += '<h5>03/2015 - 04/2016</h5>'
        attps.innerHTML += '<p><em>Attps Informática, São Paulo, BR</em></p>'
        attps.innerHTML += '<ul>'
        attps.innerHTML += '<li>Trabalho “in loco” na empresa PROSEGUR S/A, com analise de requisitos, testes e homologações de sistemas, caso de uso, estruturação de novos projetos e mantendo e melhorando projetos atuais.</li>'
        attps.innerHTML += '<li>O projeto principal foi o Effective Automation Machines, um produto que roda em mais de 2.000 estabelecimentos, gerando avanços sistêmicos e correções de erros.</li>'
        attps.innerHTML += '<li>Defina metas de negócios para determinar os requisitos do sistema.</li>'
        attps.innerHTML += '</ul>'
        txtPortuguese.innerHTML = '<span class="skill" id="txtPortuguese">Português <i class="val">100%</i></span>'
        txtSpanish.innerHTML = '<span class="skill" id="txtSpanish">Espanhol <i class="val">80%</i></span>'
        txtEnglish.innerHTML = '<span class="skill" id="txtEnglish">Inglês <i class="val">60%</i></span>'
        
    }

    function langSpanish(){
        htmlLang.setAttribute('lang',language)
        txtAbout.innerHTML = 'Sobre'
        txtSkills.innerHTML = 'Habilidades'
        txtResume.innerHTML = 'Currículum'
        txtPortfolio.innerHTML = 'Portfolio'
        //txtContact.innerHTML = 'Contacto'
        divAboutMe.innerHTML = ''
        divAboutMe.innerHTML += `<p>He trabajado durante más de ${new Date().getFullYear() - 2009} años en TI. Más de ${new Date().getFullYear() - 2012} años como analista de sistemas. Comencé mi carrera como soporte técnico que me permitió comprender las necesidades de los usuarios y esto me proporcionó como analista de sistemas para comprometer mis energías aportando calidad a los sistemas y su uso con un mejor rendimiento, funciones, usabilidad, etc.</p>`
        txtProfession.innerHTML = 'Analista de sistema & Desarrollador.'
        lblBirthday.innerHTML = 'Nascimeniento'
        lblPhone.innerHTML = 'Telefone'
        lblCity.innerHTML = 'Ciudad'
        lblAge.innerHTML = 'Idad'
        lblDegree.innerHTML = '<strong>Grade</strong>: Computadora de ciencias'
        lblResume.innerHTML = 'Currículum'
        txtSumary.innerHTML = 'Resumen'
        txtEducation.innerHTML = 'Educacion'
        txtExperience.innerHTML = 'Experiencia'
        //Prosegur
        prosegur.innerHTML = '<h4>Analista de Sistema Senior</h4>'
        prosegur.innerHTML += '<h5>04/2016 - 10/2019</h5>'
        prosegur.innerHTML += '<p><em>Prosegur S/A, São Paulo, BR </em></p>'
        prosegur.innerHTML += '<ul>'
        prosegur.innerHTML += '<li>Mantener y mejorar el entorno tecnologico buscando nuevas soluciones para negocio.</li>'
        prosegur.innerHTML += '<li>Realizar el levantamiento de requisitos, generar los documientos AS-IS/TO-BE, casis de uso, funcionaloes e tecnicos.</li>'
        prosegur.innerHTML += '<li>Acompanhar todo el ciclo del proyecto hasta sua implantacion y sustentacion.</li>'
        prosegur.innerHTML += '<li>Propar las integrações con los legados e terceiros por meio de las API’s o arquivos.</li>'
        prosegur.innerHTML += '<li>QA global y en las atribuiciones tecnicas era responsável por desarrolar y mantener scripts (Jobs, Procedures, Trigger, Functions, Views) en la base de datos (SQL Server, Oracle, MySql), debugs en las linguagenes Visual Basic y Asp.Net.</li>'
        prosegur.innerHTML += '<li>Troubleshooting con soporte nível Brasil, Países Sul Americanos y Espanha.</li>'
        prosegur.innerHTML += '</ul>'
        //ATTPS
        attps.innerHTML = '<h4>Analista de Sistemas</h4>'
        attps.innerHTML += '<h5>03/2015 - 04/2016</h5>'
        attps.innerHTML += '<p><em>Attps Informática, São Paulo, BR</em></p>'
        attps.innerHTML += '<ul>'
        attps.innerHTML += '<li>He trabajo “in loco” en la empresa PROSEGUR S/A, con analisis de requisitos, pruebas y homologaciones de sistemas, casis de uso, estruturas de nuevos proyecto y mantenendo e mejorando proyectos actuales.</li>'
        attps.innerHTML += '<li>El proyecto principal fue el Maquinas de Automacion de Efetictvos, um producto que tines em mais de 2.000 tiendas, generando avanzos sistemicos y coreciones de BUGs.</li>'
        attps.innerHTML += '<li>Definir las metas de negócios para determinar los requisitos del sistema.</li>'
        attps.innerHTML += '</ul>'
        txtPortuguese.innerHTML = '<span class="skill" id="txtPortuguese">Portugues <i class="val">100%</i></span>'
        txtSpanish.innerHTML = '<span class="skill" id="txtSpanish">Espanol <i class="val">80%</i></span>'
        txtEnglish.innerHTML = '<span class="skill" id="txtEnglish">Inglés <i class="val">60%</i></span>'
    }
}
