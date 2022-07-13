const word_set = new Set([
	'песьо',
	'монокль',
	'чепчик',
	'унікум',
	'тюбік',
	'дурбелик',
	'чмоня',
	'тупік',
	'крило',
	'франик',
	'жуйка',
	'тормоз',
	'кальян',
	'мостік',
	'корок',
	'пательня',
	'гуцул',
	'паляниця',
	'скала',
	'рама',
	'край',
	'дрова',
	'ромашки',
	'мюслі',
	'зсу',
	'москаль',
	'свинособака',
	'калуш',
	'тіпок',
	'вишні',
	'барбарис',
	'автозак',
	'омлет',
	'вольво',
	'бандера',
	'камера',
	'мохіто',
	'торчин',
	'дача',
	'священник',
	'секта',
	'байдарка',
	'весло',
	'кондиціонер',
	'кукарача',
	'форт',
	'люцифер',
	'вподобайка',
	'бантік',
	'м‘ясо',
	'ворота',
	'машина',
	'царапина',
	'плуг',
	'мафія',
	'аматор',
	'панель',
	'шабаш',
	'стрічка',
	'інстаграм',
	'мексика',
	'кактус',
	'бусінка',
	'гангстер',
	'ствол',
	'рукоятка',
	'двигун',
	'палка',
	'контроль',
	'закон',
	'вдача',
	'крутелик',
	'лікарня',
	'зіниця',
	'морган',
	'плюшка',
	'бас',
	'жук',
	'трава',
	'шашлик',
	'подушка',
	'зірка',
	'ляпота',
	'булька',
	'пожежа',
	'вподобайка',
	'жираф',
	'біометрія',
	'конфуз',
	'валянок',
	'карта',
	'фірма',
	'сквірт',
	'водоспад',
	'потік',
	'смерма',
	'життя',
	'пуголовок',
	'цикл',
	'кляп',
	'шкіра',
	'чокер',
	'прутень',
	'хлист',
	'вогник',
	'очко',
	'чорнобаївка',
	'газ',
	'кондиціонер',
	'нітрофуран',
	'пітая',
	'пітарда',
	'студент',
	'мадагаскар',
	'канал',
	'говерла',
	'карпати',
	'забіяка',
	'ян',
	'гопнік',
	'перу',
	'манчестер',
	'ювентус',
	'бінт',
	'шлем',
	'ракушка',
	'нокаут',
	'нокдаун',
	'армані',
	'гуччі',
	'торба',
	'мерседес',
	'рейнольдс',
	'депп',
	'джонсон',
	'сіна',
	'дедпул',
	'дивергент',
	'сепаратист',
	'мародер',
	'аферист',
	'танцюрист',
	'столяр',
	'стоматолог',
	'арбітр',
	'програміст',
	'бізнесмен',
	'депо',
	'тролейбус',
	'афганістан',
	'альпака',
	'стопка',
	'джек',
	'джейсмон',
	'зубровка',
	'алкоголік',
	'пастух',
	'анонс',
	'прутень',
	'губи',
	'груди',
	'репетитор',
	'роман',
	'круїз',
	'дзвінок',
	'болт',
	'гайка',
	'безпека',
	'горох',
	'бур’ян',
	'бовдур',
	'бангладеш',
	'карбонара',
	'кавказ',
	'любов',
	'гарбиль',
	'сопільче',
	'свисток',
	'кеш',
	'телеграм',
	'фригідність',
	'крокодил',
	'яма',
	'тікток',
	'снепчат',
	'чмоня',
	'хромосома',
	'шарага',
	'жалюзі',
	'мак',
	'айфон',
	'село',
	'циганка',
	'байдарка',
	'ксяомі',
	'кальян',
	'гвинтокрил',
	'катер',
	'тубус',
	'тиран',
	'голка',
	'банка',
	'згущонка',
	'ґрунт',
	'сапер',
	'кіт',
	'хом’як',
	'єврей',
	'міністр',
	'народ',
	'розетка',
	'капітан',
	'чізкейк',
	'спагеті',
	'компот',
	'італія',
	'байрактар',
	'вазонок',
	'м’яч',
	'патрон',
	'напальчник',
	'ключ',
	'техас',
	'оскар',
	'гопак',
	'офіс',
	'воєнка',
	'кашалот',
	'мавританець',
	'цицька',
	'сосок',
	'вібратор',
	'жмот',
	'корона',
	'вірус',
	'актив',
	'пасив',
	'гей',
	'натюрморт',
	'зевс',
	'розчепірка',
	'кислота',
	'ньютон',
	'єдиноріг',
	'гомосапіенс',
	'картон',
	'шлакоблок',
	'гуру',
	'гордон',
	'гондон',
	'подушка',
	'шланг',
	'штахета',
	'окунь',
	'кєнт',
	'бульдозер',
	'вогонь',
	'тапок',
	'лопух',
	'аквамен',
	'залупа',
	'лупа',
	'тазік',
	'тормоз',
	'акушер',
	'парасоля',
	'презерватив',
	'чебурашка',
	'макітра',
	'гештальт',
	'косплей',
	'бутон',
	'плід',
	'підгузник',
	'роутер',
	'равлик',
	'алабай',
	'осел',
	'паралелепіпед',
	'реприза',
	'мальдіви',
	'ролекс',
	'орк',
	'матча',
	'нігерія',
	'тернопіль',
	'кувалда',
	'вангог',
	'валер’янка',
	'нежить',
	'бобер',
	'зірка',
	'вареники',
	'борщ',
	'ганчірка',
	'панталони',
	'єпископ',
	'викрутка',
	'вазелін',
	'вівця',
	'гангстер',
	'міньйон',
	'дементор',
	'вовкулака',
	'гібрид',
	'гігант',
	'фундамент',
	'батл',
	'рандеву',
	'килим',
	'аванс',
	'барометр',
	'скульптор',
	'хайлайтер',
	'акваланг',
	'нептун',
	'тесла',
	'повія',
	'багно',
	'перегар',
	'рушниця',
	'табуретка',
	'рагуль',
	'розмарин',
	'круасан',
	'макака',
	'самба',
	'румба',
	'румбарбар',
	'акрил',
	'торетто',
	'флеш',
	'браузер',
	'платина',
	'хром',
	'бляха',
	'рейк‘явік',
	'дядя',
	'персик',
	'хуцкер',
	'нація',
	'памп',
	'зброд',
	'піксель',
	'кракен',
	'нфт',
	'шифратор',
	'сухофрукт',
	'живодер',
	'комбат',
	'роман',
	'рішала',
	'перспектива',
	'кактус',
	'прокол',
	'бритва',
	'ерудит',
	'дача',
	'інкогніто',
	'шкварок',
	'качка',
	'віндовс',
	'дєдінсайд',
	'інфузорія',
	'кіберспіртсмен',
	'вазелін',
	'хатіко',
	'паляниця',
	'ром',
	'капець',
	'абстракція',
	'інструктор',
	'макарон',
	'калач',
	'клин',
	'піцца',
	'донатело',
	'круасан',
	'ковобой',
	'берсерк',
	'унікум',
	'скріншот',
	'абсолют',
	'монополія',
	'валькірія',
	'риф',
	'соло',
	'конфуцій',
	'андроїд',
	'пуск',
	'калина',
	'хвіст',
	'плойка',
	'чек',
	'іржа',
	'аватар',
	'вендетта',
	'скала',
	'пульс',
	'наруто',
	'режисер',
	'мотор',
	'шапіто',
	'рамштайн',
	'бумульве',
	'королева',
	'слово',
	'маршал',
	'портупея',
	'фалоімітатор',
	'вульва',
	'бдсм',
	'пірсінг',
	'альберт',
	'отвір',
	'бондаж',
	'лубрикант',
	'євнух',
	'лебідка',
	'камшот',
	'фетіш',
	'домінант',
	'пасив',
	'хаб',
	'півко',
	'деніелс',
	'квентін',
	'очко',
	'ствол',
	'карти',
	'пенетрація',
	'бульбулятор',
	'водний',
	'кєкс',
	'шишичка',
	'місіонер',
	'месія',
	'інквізитор',
	'поляк',
	'парад',
	'шоколад',
	'клик',
	'синька',
	'ніагара',
	'нігер',
	'бобер',
	'центр',
	'шлейф',
	'ондатра',
	'амбасадор',
	'марка',
	'шевченко',
	'екстезі',
	'патруль',
]);

// TODO ВОЛОСПАД,

let words = [...word_set];
words = Array.from(words).sort((a, b) => b - a);
console.log('====================================');
console.log(words.sort());
console.log('====================================');
const word_list = words.sort((a, b) => a - b);
export default word_list;