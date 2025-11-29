import { LegislativeProject } from './types';

// Data from user prompt
// Year set to 2025 as explicitly requested by the user.

const SOURCE_URL = 'https://www.prezydent.pl/aktualnosci/wydarzenia/prezydent-apeluje-o-procedowanie-inicjatyw-ustawodawczych,111116';

export const INITIAL_PROJECTS: LegislativeProject[] = [
  {
    id: '1',
    title: 'Tak dla CPK',
    submissionDate: '2025-08-07',
    category: 'Infrastruktura',
    description: 'Projekt ustawy wspierający budowę Centralnego Portu Komunikacyjnego.',
    longDescription: 'Kompleksowa regulacja mająca na celu przyspieszenie procesów inwestycyjnych związanych z budową Centralnego Portu Komunikacyjnego. Ustawa przewiduje uproszczenie procedur wywłaszczeniowych, środowiskowych oraz zamówień publicznych dla kluczowych elementów infrastruktury lotniczej i kolejowej (tzw. szprych).',
    impact: 'Strategiczny rozwój transportu w Europie Środkowej, wzrost PKB, tysiące nowych miejsc pracy oraz zwiększenie obronności kraju poprzez infrastrukturę dual-use.',
    status: 'frozen',
    iconName: 'plane',
    url: SOURCE_URL
  },
  {
    id: '2',
    title: 'PIT Zero. Rodzina na Plus',
    submissionDate: '2025-08-08',
    category: 'Podatki / Rodzina',
    description: 'Rozszerzenie ulg podatkowych dla rodzin wielodzietnych.',
    longDescription: 'Projekt nowelizacji ustawy o podatku dochodowym od osób fizycznych, wprowadzający całkowite zwolnienie z PIT dla rodziców wychowujących co najmniej trójkę dzieci, niezależnie od dochodu. Dodatkowo ustawa podnosi kwotę wolną od podatku dla wszystkich pracujących rodziców.',
    impact: 'Zwiększenie dochodu rozporządzalnego polskich rodzin, stymulacja demograficzna oraz redukcja ubóstwa wśród rodzin wielodzietnych.',
    status: 'frozen',
    iconName: 'users',
    url: SOURCE_URL
  },
  {
    id: '3',
    title: 'Ochrona polskiej wsi',
    submissionDate: '2025-08-09',
    category: 'Rolnictwo',
    description: 'Pakiet ustaw chroniących interesy polskich rolników i bezpieczeństwo żywnościowe.',
    longDescription: 'Pakiet legislacyjny wprowadzający cła na wybrane produkty rolne spoza UE, system dopłat do paliwa rolniczego oraz fundusz stabilizacyjny dla producentów zbóż. Ustawa zakłada również rygorystyczne kontrole jakości żywności importowanej.',
    impact: 'Stabilizacja cen skupu, ochrona rodzimej produkcji żywności oraz zapewnienie bezpieczeństwa żywnościowego kraju.',
    status: 'frozen',
    iconName: 'sprout',
    url: SOURCE_URL
  },
  {
    id: '4',
    title: 'Mrożenie cen energii',
    submissionDate: '2025-08-21',
    category: 'Energetyka',
    description: 'Przedłużenie tarcz ochronnych na ceny prądu i gazu.',
    longDescription: 'Pilny projekt ustawy przedłużający mechanizmy osłonowe dla gospodarstw domowych, podmiotów wrażliwych oraz małych i średnich przedsiębiorstw. Zakłada utrzymanie maksymalnych cen energii elektrycznej i gazu na poziomie z poprzedniego roku.',
    impact: 'Ochrona obywateli przed drastycznym wzrostem rachunków, ograniczenie inflacji i wsparcie płynności finansowej MŚP.',
    status: 'frozen',
    iconName: 'zap',
    url: SOURCE_URL
  },
  {
    id: '5',
    title: 'Ustawa ukraińska',
    submissionDate: '2025-08-25',
    category: 'Sprawy Zagraniczne',
    description: 'Regulacje dotyczące pomocy oraz relacji z Ukrainą.',
    longDescription: 'Ustawa porządkująca zasady pobytu uchodźców wojennych z Ukrainy, zasady dostępu do rynku pracy oraz świadczeń socjalnych. Wprowadza także mechanizmy wsparcia dla polskich firm biorących udział w powojennej odbudowie Ukrainy.',
    impact: 'Uporządkowanie relacji dwustronnych, uszczelnienie systemu świadczeń oraz stymulacja współpracy gospodarczej.',
    status: 'frozen',
    iconName: 'flag',
    url: SOURCE_URL
  },
  {
    id: '6',
    title: 'Technologie Przełomowe',
    submissionDate: '2025-08-29',
    category: 'Rozwój / Nauka',
    description: 'Wsparcie dla innowacji i polskich startupów technologicznych.',
    longDescription: 'Utworzenie Narodowego Funduszu Technologii Przełomowych, który będzie inwestował w polskie startupy z branży AI, biotechnologii i technologii kosmicznych. Projekt przewiduje także ulgi podatkowe (IP Box) dla firm komercjalizujących badania naukowe.',
    impact: 'Wzrost konkurencyjności polskiej gospodarki, zatrzymanie drenażu mózgów i rozwój nowoczesnych gałęzi przemysłu.',
    status: 'frozen',
    iconName: 'cpu',
    url: SOURCE_URL
  },
  {
    id: '7',
    title: 'Stop Banderyzmowi',
    submissionDate: '2025-09-26',
    category: 'Pamięć Historyczna',
    description: 'Ustawa penalizująca propagowanie ideologii banderowskiej.',
    longDescription: 'Nowelizacja ustawy o IPN, wprowadzająca odpowiedzialność karną za publiczne propagowanie ideologii OUN-UPA oraz zaprzeczanie zbrodniom wołyńskim. Ustawa ma na celu ochronę prawdy historycznej.',
    impact: 'Ochrona pamięci ofiar, edukacja historyczna społeczeństwa oraz jasne postawienie granic w debacie publicznej.',
    status: 'frozen',
    iconName: 'shield-alert',
    url: SOURCE_URL
  },
  {
    id: '8',
    title: 'Obywatelstwo polskie',
    submissionDate: '2025-09-26',
    category: 'Sprawy Wewnętrzne',
    description: 'Zaostrzenie kryteriów przyznawania obywatelstwa polskiego.',
    longDescription: 'Projekt zakłada wydłużenie okresu niezbędnego do ubiegania się o obywatelstwo, wprowadzenie obowiązkowych egzaminów z języka i historii oraz zaostrzenie weryfikacji pod kątem bezpieczeństwa państwa.',
    impact: 'Zwiększenie kontroli nad procesami migracyjnymi i zapewnienie, że nowi obywatele są zintegrowani ze społeczeństwem.',
    status: 'frozen',
    iconName: 'user-check',
    url: SOURCE_URL
  },
  {
    id: '9',
    title: 'Tak! Dla Polskich Portów',
    submissionDate: '2025-10-17',
    category: 'Gospodarka Morska',
    description: 'Strategia rozwoju portów morskich w Gdańsku, Gdyni i Świnoujściu.',
    longDescription: 'Specustawa mająca na celu rozbudowę infrastruktury dostępowej (kolejowej i drogowej) do portów morskich oraz budowę nowych terminali kontenerowych. Umożliwia szybsze wydawanie decyzji lokalizacyjnych.',
    impact: 'Wzrost przeładunków w portach, uniezależnienie logistyczne od portów zagranicznych oraz zwiększenie dochodów budżetowych z ceł i podatków.',
    status: 'frozen',
    iconName: 'anchor',
    url: SOURCE_URL
  },
  {
    id: '10',
    title: 'Godna Emerytura',
    submissionDate: '2025-11-03',
    category: 'Polityka Społeczna',
    description: 'Dodatki stażowe wliczane do emerytury dla wieloletnich pracowników.',
    longDescription: 'Projekt wprowadza mechanizm zaliczania dodatków stażowych do podstawy wymiaru emerytury, co ma szczególne znaczenie dla pracowników budżetówki. Zakłada także waloryzację kwotową dla najniższych świadczeń.',
    impact: 'Poprawa stopy życiowej seniorów, docenienie długoletniej pracy zawodowej i redukcja ubóstwa wśród emerytów.',
    status: 'frozen',
    iconName: 'coins',
    url: SOURCE_URL
  },
  {
    id: '11',
    title: 'Tani prąd –33%',
    submissionDate: '2025-11-07',
    category: 'Energetyka',
    description: 'Obniżenie taryf energetycznych dla gospodarstw domowych.',
    longDescription: 'Ustawa nakładająca na spółki energetyczne obowiązek obniżenia taryf dla odbiorców indywidualnych o 33% poprzez redukcję marż oraz system rekompensat budżetowych finansowany z podatku od nadzwyczajnych zysków.',
    impact: 'Bezpośrednia ulga finansowa dla milionów Polaków, zwiększenie siły nabywczej konsumentów.',
    status: 'frozen',
    iconName: 'plug',
    url: SOURCE_URL
  },
  {
    id: '12',
    title: 'Prawo o ruchu drogowym',
    submissionDate: '2025-11-07',
    category: 'Transport',
    description: 'Zmiany w przepisach zwiększające bezpieczeństwo na drogach.',
    longDescription: 'Zaostrzenie kar za drastyczne przekroczenia prędkości oraz jazdę pod wpływem alkoholu. Wprowadzenie pojęcia "zabójstwa drogowego" do kodeksu karnego oraz obowiązkowych kursów doszkalających dla młodych kierowców.',
    impact: 'Zmniejszenie liczby wypadków śmiertelnych, poprawa kultury jazdy i zwiększenie bezpieczeństwa pieszych.',
    status: 'frozen',
    iconName: 'car',
    url: SOURCE_URL
  },
  {
    id: '13',
    title: 'Fundusz Medyczny',
    submissionDate: '2025-11-18',
    category: 'Zdrowie',
    description: 'Zwiększenie nakładów na leczenie chorób rzadkich i onkologię.',
    longDescription: 'Nowelizacja ustawy o Funduszu Medycznym, gwarantująca stały odpis procentowy z PKB na leczenie chorób onkologicznych i rzadkich. Upraszcza procedurę refundacji nowoczesnych terapii lekowych.',
    impact: 'Szybszy dostęp do ratujących życie terapii, poprawa wskaźników wyleczalności nowotworów i wsparcie dla najbardziej potrzebujących pacjentów.',
    status: 'frozen',
    iconName: 'stethoscope',
    url: SOURCE_URL
  }
];