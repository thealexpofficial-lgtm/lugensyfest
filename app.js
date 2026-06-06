
    const artists = [
        { name: "Alex Pristupa", role: "UKG/House", img: "Без имени-1.jpg", desc: "Мультижанровый продюсер-миллионник, представляющий актуальную электронную сцену Беларуси. В своем творчестве он делает ключевой упор на аутентичное UK-звучание и смелые эксперименты с танцевальной музыкой, создавая плотный и качающий саунд. Организатор фестиваля.", links: [{ title: "LINK", url: "https://linktr.ee/alexpristupa" }] },
        { name: "CHERNELLA", role: "Hip-Hop", img: "photo_2026-05-16_04-00-07.jpg", desc: "Артист, который не ищет легких путей и транслирует в творчестве реальную жизнь без выдуманных легенд. CHERNELLA — это фирменный голос, самобытный стиль и абсолютная уверенность в каждом треке.", links: [{ title: "LINK", url: "https://t.me/cherne11aa" }] },
        { name: "curxlxss", role: "UK/Drum & Bass", img: "photo_2026-05-12_03-19-30.jpg", desc: "Харизматичный мультижанровый артист с эмоциональными треками, умеющий удивлять своими экспериментами. Смешивая UK-звучание и Drum & Bass, он создает музыку, которая помогает слушателю пережить самые сокровенные моменты и выпустить чувства на волю.", links: [{ title: "LINK", url: "https://t.me/ezblaze" }] },
        { name: "Narvent", role: "Synthwave", img: "photo_2026-05-19_08-17-53.jpg", desc: "Музыкант из Казани, ставший мировой звездой синтвейва и ретрофутуризма благодаря хиту «Memory Reboot». Его музыка — это симбиоз ретрофутуризма и современной массовой культуры, который можно встретить на просторах популярных социальных сетей.", links: [{ title: "LINK", url: "https://t.me/narventof" }] },
        { name: ".zyko", role: "Bass/Future House", img: "photo_2026-05-12_10-20-20.jpg", desc: "Мультижанровый продюсер и артист, ориентирующийся на золотую классику EDM. В его сетах мощная энергетика Bass и Future House переплетается с проверенными танцевальными традициями, создавая идеальный баланс для танцпола.", links: [{ title: "LINK", url: "https://t.me/dotzyko" }] },
        { name: "FRXNT Prod", role: "Bass House/G-House", img: "IMG_0121.JPG", desc: "Талантливый саунд-продюсер, специализиющийся на актуальных жанрах электронной танцевальной музыки. Его треки созданы для того, чтобы задавать ритм танцполу и держать публику в постоянном движении. Мастодонт жанра G-House в СНГ.", links: [{ title: "LINK", url: "https://t.me/FRXNTPROD" }] },
        { name: "priestprayer", role: "Bass House/IDM", img: "photo_2026-05-17_02-02-38.jpg", desc: "Электронный артист, смешивающий тёмную атмосферу, мощный бас и эмоции в разных жанрах - от Bass House и Garage до Drum & Bass. Его музыка сочетает мрачный андерграундный вайб, энергичные дропы и кинематографичное звучание.", links: [{ title: "LINK", url: "https://t.me/lugensy" }] },
        { name: "HELIQULA", role: "Bass House/Trap", img: "photo_2026-05-08_10-10-57.jpg", desc: "Шизофренически-эзотерический бред, созданный в 2022 году. Внедрился в тело нищего доходяги с целью поделиться своим видением мира и музыкальной индустрии. Готовит для фестиваля гипнотический коктейль из Bass House и Trap.", links: [{ title: "LINK", url: "https://band.link/heliqula" }] },
        { name: "TRAPOV", role: "Hip-Hop", img: "photo_2026-05-14_11-59-56.jpg", desc: "Представитель новой школы с аутентичной подачей и футуристичным взглядом на поп-рэп. Его визитная карточка — цепляющие припевы и стильный качающий звук, который мгновенно захватывает внимание.", links: [{ title: "LINK", url: "https://band.link/pT9qJ" }] },
        { name: "Calmdreams", role: "UKG", img: "photo_2026-05-17_01-59-56.jpg", desc: "Новый проект российского исполнителя, начавшего свою музыкальную карьеру в 2019 году. В его музыке гармонично сочетаются классический UK Garage, сложные мелодические линии и элементы смежных жанров, погружающие слушателя в незабываемое путешествие.", links: [{ title: "LINK", url: "https://band.link/calmdreams" }] },
        { name: "dmtw", role: "Drum & Bass", img: "Без имени-2.jpg", desc: "Казанский 21-летний недофонкер, недодрамнбейсер, пишущий все подряд. В музыкальной индустрии с 7 лет, за это время прошел через такие инструменты, как домра, гитара, фортепиано, FL studio и компьютерная мышка.", links: [{ title: "LINK", url: "https://t.me/+d5CD8O-hGAtjMmNi" }] },
        { name: "ORPHANE", role: "Hip-Hop/Drum & Bass", img: "photo_2026-05-22_04-30-50.jpg", desc: "Представитель независимой сцены, создающий глубокий авторский рэп. Его творчество наполнено искренней лирикой и честными историями, которые находят прямой отклик в сердцах слушателей.", links: [{ title: "LINK", url: "https://music.yandex.ru/artist/17443564" }] },
        { name: "Speedground", role: "UKG", img: "photo_2026-05-22_04-29-19.jpg", desc: "Московский диджей и продюсер, мастерски работающий со сложной ритмической структурой. Его сеты и треки строятся вокруг каноничного ломаного бита, объединяя в себе энергию Bass, UKG, Breaks и олдскульного Jungle.", links: [{ title: "LINK", url: "https://taplink.cc/speedground" }] },
        { name: "Don Philips", role: "House", img: "Без названия.png", desc: "Опытный музыкант с десятилетним бэкграундом, чьи ремиксы получали поддержку на «Радио Рекорд», а релизы выходили на зарубежных лейблах. Завоевав внушительную аудиторию в сети и посотрудничав со многими известными именами, он выходит за диджейский пульт, чтобы разделить свою главную мечту с танцполом.", links: [{ title: "LINK", url: "https://vk.com/donphilips" }] },
        { name: "SXTXRMANE", role: "Electronic", img: "photo_2026-05-22_04-27-56.jpg", desc: "Московский артист, находящийся в постоянном поиске уникального музыкального языка. Он смело экспериментирует с современным электронным звучанием, размывая границы привычных жанров.", links: [{ title: "LINK", url: "https://t.me/sxtxrmane" }] }
    ];

    const rosterContainer = document.getElementById('roster');
    const modal = document.getElementById('artistModal');

    artists.forEach((artist, index) => {
        const cardNumber = String(index + 1).padStart(2, '0');
        const card = document.createElement('div');
        card.className = 'artist-card';
        
        card.innerHTML = `
            <div class="card-header">
                <span class="card-index"></span>
                <div class="card-status-dot"></div>
            </div>
            <div class="artist-img-placeholder">
                <img>
            </div>
            <div class="card-footer">
                <div class="artist-name"></div>
                <div class="artist-role"></div>
            </div>
        `;
        
        card.querySelector('.card-index').textContent = `// ${cardNumber}`;
        
        const cardImg = card.querySelector('.artist-img-placeholder img');
        cardImg.src = artist.img;
        cardImg.alt = artist.name;
        
        card.querySelector('.artist-name').textContent = artist.name;
        card.querySelector('.artist-role').textContent = artist.role;

        card.onclick = () => {
            document.getElementById('modalName').textContent = artist.name;
            
            const modalDesc = document.getElementById('modalDesc');
            modalDesc.textContent = ''; 
            
            const boldGenre = document.createElement('strong');
            boldGenre.textContent = 'Genre: ';
            modalDesc.appendChild(boldGenre);
            modalDesc.appendChild(document.createTextNode(artist.role));
            
            modalDesc.appendChild(document.createElement('br'));
            modalDesc.appendChild(document.createElement('br'));
            modalDesc.appendChild(document.createTextNode(artist.desc));
            
            const modalImg = document.getElementById('modalImg');
            modalImg.src = artist.img;
            modalImg.alt = artist.name;
            
            const linksContainer = document.getElementById('modalLinks');
            linksContainer.textContent = '';
            
            artist.links.forEach(link => {
                let rawUrl = link.url.trim();
                
                if (!/^https?:\/\//i.test(rawUrl)) {
                    rawUrl = 'https://' + rawUrl;
                }
                
                try {
                    const parsedUrl = new URL(rawUrl);
                    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
                        const a = document.createElement('a');
                        a.href = parsedUrl.href;
                        a.textContent = link.title;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        linksContainer.appendChild(a);
                    }
                } catch (e) {
                    // Игнорируем невалидные URL
                }
            });
            
            modal.style.display = 'flex';
        };
        rosterContainer.appendChild(card);
    });

    document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
