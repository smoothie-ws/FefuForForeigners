let currentLanguage = 'en';

function toggleLanguage() {
    // title
    const webTitle = document.getElementById('web-title');

    // header
    const headingLabel = document.getElementById('headingLabel');
    const aboutButton = document.getElementById('aboutButton');
    const prosButton = document.getElementById('prosButton');
    const oppsButton = document.getElementById('oppsButton');
    const visitButton = document.getElementById('visitButton');
    const langButton = document.getElementById('langButton');

    // about
    const aboutLabel1 = document.getElementById('aboutLabel1');
    const aboutLabel2 = document.getElementById('aboutLabel2');
    const aboutLabel3 = document.getElementById('aboutLabel3');
    const applyButton = document.getElementById('applyButton');

    // pros
    const seaProHeading = document.getElementById('seaProHeading');
    const seaProText = document.getElementById('seaProText');
    const seaProLink = document.getElementById('seaProLink');

    const infrProHeading = document.getElementById('infrProHeading');
    const infrProText = document.getElementById('infrProText');
    const infrProLink = document.getElementById('infrProLink');

    const sportsProHeading = document.getElementById('sportsProHeading');
    const sportsProText = document.getElementById('sportsProText');
    const sportsProLink = document.getElementById('sportsProLink');

    const studentsProHeading = document.getElementById('studentsProHeading');
    const studentsProText = document.getElementById('studentsProText');
    const studentsProLink = document.getElementById('studentsProLink');

    // opps
    const opps1 = document.getElementById('opps1');
    const opps2 = document.getElementById('opps2');
    const opps3 = document.getElementById('opps3');
    const opps4 = document.getElementById('opps4');

    // footer
    const footnote = document.getElementById('footnote');
    const footleft = document.getElementById('footer-left');
    const footright = document.getElementById('footer-right');

    if (currentLanguage === 'en') {
        currentLanguage = 'ru';
        webTitle.textContent = 'ДВФУ';

        headingLabel.innerHTML = '<img src="assets/logo.png" alt="" width="64" height="64"> Дальневосточный Федеральный Университет';
        aboutButton.textContent = 'О ДВФУ';
        prosButton.textContent = 'Преимущества';
        oppsButton.textContent = 'Возможности';
        visitButton.textContent = 'ПОСЕТИТЬ ОНЛАЙН';
        langButton.innerHTML = '<img alt="" width="35" height="35" src="assets/langs/ru.png"> <span>РУССКИЙ</span >';

        aboutLabel1.innerHTML = 'Дальневосточный Федеральный Университет <b>(ДВФУ)</b> – престижное российское учебное заведение, предлагающее <b>разнообразные программы</b> и <b>мультикультурную среду.</b>';
        aboutLabel2.textContent = 'Университет предоставляет широкие возможности для исследований в различных областях, что делает его ведущим центром образования и инноваций в России.';
        aboutLabel3.innerHTML = 'Здесь находятся отличные факультеты, включая <a href="https://russky.digital/"><img alt="" width="16" height="16" src="assets/faculties/imct.png"> ИМКТ</a>, <a href="https://www.dvfu.ru/en/school_of_engineering/"><img alt="" width="16" height="16" src="assets/faculties/pi.png"> Политехнический институт</a>, <a href="https://www.dvfu.ru/en/school_of_law/"><img alt="" width="16" height="16" src="assets/faculties/law.png"> Юридическую школу</a>, <a href="https://www.dvfu.ru/en/school_of_education/"><img alt="" width="16" height="16" src="assets/faculties/educate.png"> Школу образования</a>, а также <a href="https://www.dvfu.ru/en/academics/" title="Список всех факультетов ДВФУ"> многие другие…</a>';
        applyButton.textContent = 'Подать заявку на поступление можно здесь';

        seaProHeading.textContent = 'Жизнь у моря';
        seaProText.textContent = 'Студенты могут комфортно жить и учиться на берегах Японского моря.';
        seaProLink.innerHTML = 'Узнать о географии <b>ДВФУ</b>';

        infrProHeading.textContent = 'Инфраструктура';
        infrProText.textContent = 'Смарт-кампус ДВФУ - это полноценный центр со всеми элементами небольшого города. Университет имеет свой собственный транспорт, включая автобусы и городской транспорт.';
        infrProLink.innerHTML = 'Узнать о <b>Кампусе ДВФУ</b>';

        sportsProHeading.textContent = 'Спорт';
        sportsProText.textContent = 'На территории университетского кампуса расположены многочисленные спортзалы, бассейны, фитнес-центры и стадион.';
        sportsProLink.innerHTML = 'Узнать о спорте в <b>ДВФУ</b>';

        studentsProHeading.textContent = 'Студенческая жизнь';
        studentsProText.textContent = 'Быть студентом Дальневосточного федерального университета означает, что у вас есть пожизненная возможность превзойти ваши амбиции. Именно по этой причине более 3500 международных студентов выбрали Дальневосточный федеральный университет в качестве места для получения высшего образования.';
        studentsProLink.innerHTML = 'Узнать о жизни студентов в <b>ДВФУ</b>';

        opps1.textContent = 'Учитесь с комфортом и пользой';
        opps2.textContent = 'Развивайте свой талант';
        opps3.textContent = 'Создавайте свои собственные стартапы';
        opps4.textContent = 'Стажируйтесь в топовых компаниях';

        footnote.textContent = 'Для поступления в Дальневосточный федеральный университет (ДВФУ) в качестве иностранного студента обычно требуется предоставить академические транскрипты, подтверждение знания языка (например, результаты экзаменов TOEFL или IELTS) и паспорт. Кроме того, вам может понадобиться оформить студенческую визу на время обучения. ДВФУ предлагает широкий спектр поддерживающих услуг для иностранных студентов, включая языковые курсы и программы культурной интеграции, чтобы обеспечить плавный переход в университетскую жизнь. Благодаря разнообразным академическим программам и отличным исследовательским возможностям, ДВФУ создает благоприятную и поддерживающую среду для обучения иностранных студентов.'
        footleft.textContent = '© Дальневосточный федеральный университет, 2012-2024';
        footright.innerHTML = "Информация, размещенная на этом веб-сайте, является собственностью ДВФУ. <br> Любое копирование материалов веб-сайта без разрешения владельца запрещено.";

    } else if (currentLanguage === 'ru') {
        currentLanguage = 'ch';
        webTitle.textContent = 'FEFU';

        headingLabel.innerHTML = '<img src="assets/logo.png" alt="" width="64" height="64"> 远东联邦大学';
        aboutButton.textContent = '关于 FEFU';
        prosButton.textContent = '优点';
        oppsButton.textContent = '机会';
        visitButton.textContent = '在线访问';
        langButton.innerHTML = '<img alt="" width="35" height="35" src="assets/langs/ch.png"> <span>中国人</span >';

        aboutLabel1.innerHTML = '远东联邦大学 <b>(FEFU)</b> 是一所享有盛誉的俄罗斯学府，提供 <b>多元化的课程</b> 和 <b>多文化环境。</b>';
        aboutLabel2.textContent = '该大学提供强大的研究机会，涵盖各个领域，使其成为俄罗斯教育和创新的领先中心。';
        aboutLabel3.innerHTML = '这里有一些出色的学院，包括 <a href="https://russky.digital/"> <img alt="" width="16" height="16" src="assets/faculties/imct.png"> IMCT</a>、<a href="https://www.dvfu.ru/en/school_of_engineering/"><img alt="" width="16" height="16" src="assets/faculties/pi.png">  机械工程学院</a>、<a href="https://www.dvfu.ru/en/school_of_law/"><img alt="" width="16" height="16" src="assets/faculties/law.png"> 法学院</a>、<a href="https://www.dvfu.ru/en/school_of_education/"><img alt="" width="16" height="16" src="assets/faculties/educate.png"> 教育学院</a>，以及 <a href="https://www.dvfu.ru/en/academics/" title="FEFU 所有学院的列表">更多…</a>';
        applyButton.textContent = '您可以在此申请入学';

        seaProHeading.textContent = '海滨生活';
        seaProText.textContent = '学生们可以在日本海的海滨舒适地生活和学习。';
        seaProLink.innerHTML = '了解 <b>远东联邦大学</b> 的地理情况';

        infrProHeading.textContent = '基础设施';
        infrProText.textContent = '远东联邦大学的智能校园是一个完整的小镇中心，拥有完整的各种元素。它有自己的巴士和城市交通工具。';
        infrProLink.innerHTML = '了解 <b>远东联邦大学校园</b>';

        sportsProHeading.textContent = '体育';
        sportsProText.textContent = '大学校园内设有许多健身房、游泳池、健身中心和一个体育场。';
        sportsProLink.innerHTML = '了解 <b>远东联邦大学</b> 的体育活动';

        studentsProHeading.textContent = '学生生活';
        studentsProText.textContent = '成为远东联邦大学的学生意味着您有机会超越自己的雄心。因此，超过3500名国际学生选择远东联邦大学作为他们攻读高等教育的目的地。';
        studentsProLink.innerHTML = '了解 <b>远东联邦大学</b> 的学生生活';

        opps1.textContent = '舒适和有益的学习';
        opps2.textContent = '发展你的才华';
        opps3.textContent = '创建你自己的创业公司';
        opps4.textContent = '在一流公司实习';

        footnote.textContent = '作为外国留学生申请远东联邦大学（FEFU）时，您通常需要提供学术成绩单、语言能力证明（如托福或雅思成绩）和护照。此外，您可能需要为您的学习期间获得学生签证。FEFU为国际学生提供各种支持服务，包括语言课程和文化融合项目，以确保顺利过渡到大学生活中。凭借其多样化的学术课程和强大的研究机会，FEFU为国际学生提供了一个丰富和支持的学习环境。';
        footleft.textContent = '© 远东联邦大学，2012-2024';
        footright.innerHTML = "本网站发布的信息属于FEFU的财产。<br>未经所有者许可，禁止复制网站材料。";

    } else {
        currentLanguage = 'en';
        webTitle.textContent = 'FEFU';

        headingLabel.innerHTML = '<img src="assets/logo.png" alt="" width="64" height="64"> Far Eastern Federal University';
        aboutButton.textContent = "What's FEFU";
        prosButton.textContent = 'Advantages';
        oppsButton.textContent = 'Opportunities';
        visitButton.textContent = 'VISIT ONLINE';
        langButton.innerHTML = '<img alt="" width="35" height="35" src="assets/langs/en.png"> <span>ENGLISH</span >';

        aboutLabel1.innerHTML = 'Far Eastern Federal University <b>(FEFU)</b> is a prestigious Russian institution, offering <b>diverse programs</b> and a <b>multicultural environment.</b>';
        aboutLabel2.textContent = 'It provides strong research opportunities across various fields, making it a leading center for education and innovation in Russia.';
        aboutLabel3.innerHTML = 'There are some great faculties including <a href = "https://russky.digital/"> <img alt="" width="16" height="16" src="assets/faculties/imct.png"> IMCT</a>, <a href="https://www.dvfu.ru/en/school_of_engineering/"><img alt="" width="16" height="16" src="assets/faculties/pi.png"> Polytechnic Institute</a>, <a href="https://www.dvfu.ru/en/school_of_law/"><img alt="" width="16" height="16" src="assets/faculties/law.png"> School of Law</a>, <a href="https://www.dvfu.ru/en/school_of_education/"><img alt="" width="16" height="16" src="assets/faculties/educate.png"> School of Education</a>, and <a href = "https://www.dvfu.ru/en/academics/" title = "List of all FEFU faculties"> more…</a > ';
        applyButton.textContent = 'You can apply for admission here';

        seaProHeading.textContent = 'Life by the Sea';
        seaProText.textContent = 'Students can comfortably live and study on the shores of the Sea of Japan.';
        seaProLink.innerHTML = 'Read about geography of <b>FEFU</b>';

        infrProHeading.textContent = 'Infrastructure';
        infrProText.textContent = 'Smart Campus of FEFU is a full-fledged center with a complete set of all the elements of a small town. It has its own bus and municipal transport.';
        infrProLink.innerHTML = 'Read about <b>FEFU Campus</b>';

        sportsProHeading.textContent = 'Sports';
        sportsProText.textContent = 'The university campus hosts numerous gyms, pools, fitness centers, and a stadium.';
        sportsProLink.innerHTML = 'Read about sports in <b>FEFU</b>';

        studentsProHeading.textContent = "Students' Life";
        studentsProText.textContent = 'To be a student at Far Eastern Federal University means you have a lifetime opportunity to exceed your ambitious.For this reason, more than 3500 international students have chosen Far Eastern Federal University to be their destination for higher education.';
        studentsProLink.innerHTML = 'Read about <b>FEFU</b> students life';

        opps1.textContent = 'Study with comfort and benefit';
        opps2.textContent = 'Develop your talent';
        opps3.textContent = 'Make your own startups';
        opps4.textContent = 'Intern at top-tier companies';

        footnote.textContent = 'To apply to Far Eastern Federal University (FEFU) as a foreign student, you will typically need to provide academic transcripts, proof of language proficiency (such as TOEFL or IELTS scores), and a passport. Additionally, you may need to obtain a student visa for the duration of your studies. FEFU offers a range of support services for international students, including language courses and cultural integration programs to ensure a smooth transition into university life.With its diverse academic programs and strong research opportunities, FEFU provides an enriching and supportive environment for international students to pursue their education.';
        footleft.textContent = '© Far Eastern Federal University, 2012-2024';
        footright.innerHTML = "The information posted on this website is the property of FEFU. <br> Any copying of website materials without the owner's permission is prohibited.";
    }
}
