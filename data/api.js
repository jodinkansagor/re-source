const avelGordlyCenterForHealing = {
    id: 'avel-gordly-center-for-healing',
    name: 'Avel Gordly Center for Healing',
    phone: '(503)494-4745',
    address: '621 SW Alder St., Ste. 520',
    description: 'Outpatient psychiatry, drug and alcohol counseling and treatment, culturally specific services. Sliding scale fee',
    hours: '8:30a.m.-5p.m. Mon.-Fri.',
    transit: 'Downtown Bus, MAX',
    website: 'www.ohsuhealth.com/counseling',
    neighborhood: 'SW',
    type: ['medical']
};
const budClarkClinic = {
    id: 'bud-clark-clinic',
    name: 'Bud Clark Clinic',
    phone: '(971)271-6360',
    address: '650 NW Irving St.',
    description: 'Walk-in clinic for short-term treatment for injuries, new illnesses and urgent medical needs.',
    hours: '8:00a.m.-3:30p.m. Mon.-Fri., closed 11:30a.m.-1p.m.',
    transit: 'Bus: 17; MAX Yellow, Green',
    website: 'na',
    neighborhood: 'NW',
    type: ['medical']
};
const cascadiaBHUrgentWalkInClinic = {
    id: 'cascadia-b-h-urgent-walk-in-clinic',
    name: 'Cascadia BH Urgent Walk-In Clinic',
    phone: '(503)963-2575',
    address: '4212 SE Division St., Ste. 100',
    description: 'Urgent mantal health needs. Selected on clinical need, may include counseling, medication prescribing, referrals to affordable mental health, medical, and substance treatment and referals to other community resources.',
    hours: '7a.m.-10:30p.m. Mon.-Sun.',
    transit: 'Bus:2',
    website: 'www.cascadiabhc.org',
    neighborhood: 'SE',
    type: ['medical']
};
const northByNortheastCommunityHealthCenter = {
    id: 'north-by-northeast-comunit-health-center',
    name: 'North By Northeast Community Health Center',
    phone: '(503)287-4932',
    address: '714 NE Alberta St.',
    description: 'Primary care services provided with a focus on African-American health and management of hypertension and diabetes. Accepts OHP CareOregon. Insurance enrollment assistance for uninsured adult residents. First time patients, call.',
    hours: '9a.m.-5p.m. Mon.-Fri.',
    transit: 'Bus: 6, 72',
    website: 'www.nxneclinic.org',
    neighborhood: 'NE',
    type: ['medical']
};
const bethlehemChildrensClothesCloset = {
    id: 'bethlehem-childrens-clothes-closet',
    name: 'Bethlehem Childrens Clothes Closet',
    phone: '(503)777-6784',
    address: '5415 SE Powell Blvd',
    description: 'Enter through back parking lot. Free clothing for newborns to juniors.',
    hours: 'noon-2p.m. 4th Saturday only',
    transit: 'Bus: 9, 71',
    website: 'www.smpdx.org',
    neighborhood: 'SE',
    type: ['clothing']
};
const mainspring = {
    id: 'mainspring',
    name: 'Mainspring',
    phone: '(503)233-5533',
    address: '3500 NE 82nd Ave.',
    description: 'Clothing for people in need. Clothing pantry access once per month. Personal care products when available.',
    hours: '10a.m.-12:45p.m. Mon.-Wed.',
    transit: 'Bus: 24, 72',
    website: 'www.mainspringpdx.org',
    neighborhood: 'NE',
    type: ['clothing']
};
const stAndreBessette = {
    id: 'st-andre-bessette',
    name: 'St. Andre Bessette',
    phone: '(503)228-0746',
    address: '601 W Burnside St.',
    description: 'Clothing once every 30 days, socks and hygene every 7 days, sleeping bags on Thursday.',
    hours: '9:30-11:20a.m.',
    transit: 'Bus: 12, 20, 33, 54, Downtown MAX',
    website: 'www.saintandrechurch.org',
    neighborhood: 'SW',
    type: ['clothing']
};
const transitionProjects = {
    id: 'transition-projects',
    name: 'Transition Projects',
    phone: '(503)280-4700',
    address: '650 NW Irving St',
    description: 'Clothes and showers available daily. Short-term residential programs: Clar Center(self-id. men only), Doreen\'s Place(self-id men), Jean\'s Place(self-id women). Emergency shelters: Laurelwood Center (self-id women, couples), SOS (self-id women), Willamette(coupled, singe sel-id women), Walnut Park(all genders, couples). Shelter hours, services, location vary. Call or come in for more info',
    hours: 'resource center hours 8a.m.-4p.m. daily',
    transit: 'Bus: 17, 33, MAX',
    website: 'www.tprojects.org',
    neighborhood: 'NW',
    type: ['clothing', 'shelter']
};
const allSaintsEpiscopalChurch = {
    id: 'all-saints-episcopal-church',
    name: 'All Saints Episcopal Church',
    phone: '(503)777-3829',
    address: '4033 SE Woodstock Blvd.',
    description: 'Hot Meals',
    hours: '11:30a.m. Sat.',
    transit: 'Bus: 19, 75',
    website: 'www.allsaintspdx.org',
    neighborhood: 'SE',
    type: ['meal']
};
const blanchetHouseOfHospitality = {
    id: 'blanchet-house-of-hospitality',
    name: 'Blanchet House of Hospitality',
    phone: '(503)241-4340',
    address: '310 NW Glisan St.',
    description: 'Free hot meals. No questions asked.',
    hours: '6:30-7:30a.m.(breakfast); 11:30a.m.-12:30p.m.(lunch); 5-6p.m.(dinner) Mon.-Sat.',
    transit: 'Bus: 4, 8, 35, 44, 77, MAX',
    website: 'www.blanchethouse.org',
    neighborhood: 'NW',
    type: ['meal']
};
const firstBaptistChurch = {
    id: 'first-baptist-church',
    name: 'First Baptist Church',
    phone: '(503)228-7465',
    address: '909 SW 11th Ave.',
    description: 'Hot lunch',
    hours: '2-4p.m. Mon.-Thurs.',
    transit: 'Bus: 15, 51; MAX Red, Blue; Streetcar',
    website: 'www.fbc-portland.org',
    neighborhood: 'SW',
    type: ['meal']
};
const graceMemorialEpiscopalChurch = {
    id: 'grace-memorial-episcopal-church',
    name: 'Grace Memorial Episcopal Church',
    phone: '(503)287-0418',
    address: '1535 NE 17th Ave',
    description: 'sack lunch, one per person, once a week. Dinner at 6p.m. on Fridays',
    hours: 'sack lunch 11a.m.-1p.m. on Tues.-Thurs.',
    transit: 'Bus: 8, 9, 73, 77, MAX',
    website: 'www.grace-memorial.org',
    neighborhood: 'NE',
    type: ['meal']
};
const cityTeamPortland = {
    id: 'city-team-portland',
    name: 'City Team Portland',
    phone: '(503)231-9334',
    address: '526 SE Grand Ave.',
    description: 'Men Only. Sobriety required. $5/night for shelter. Dinner, breakfast, shower included daily.',
    hours: 'shelter sign-up 5:45-6:30p.m.',
    transit: 'Bus: 6, Streetcar',
    website: 'www.cityteam.org',
    neighborhood: 'SE',
    type: ['shelter']
};
const humanSolutionsFamilyCenter = {
    id: 'human-solutions-family-center',
    name: 'Human Solutions Family Center',
    phone: '(503)548-0200',
    address: 'confidential',
    description: '24-hour shelter. Lilac Medows for families with at least on child under 18. Gresham Women\'s Shelter for self-ident. women. No walk-up access. Call 211 for eligibility/intake',
    hours: 'call 211 for intake',
    transit: 'confidential location',
    website: 'unavailable',
    neighborhood: 'NE',
    type: ['shelter']
};
const portlandRescueMission = {
    id: 'portland-rescue-mission',
    name: 'Portland Rescue Mission',
    phone: '(503)906-7690',
    address: '111 W Burnside',
    description: 'Emergency shelter for men only, TB card required, optional chapel service. Lottery number for beds and emergency shelter tickets handed out 5:45p.m., numbers announced 6:45p.m. Check-in hours 8p.m. Showers available for men 2-4p.m. daily.',
    hours: 'guest carcenter hours: 2-4p.m.; lobby drop-in 24hours',
    transit: 'Bus: 12, 19, 20, MAX',
    website: 'www.portlandrescuemission.org',
    neighborhood: 'SW',
    type: ['shelter']
};

const resourcesArray = [budClarkClinic, avelGordlyCenterForHealing, cascadiaBHUrgentWalkInClinic, northByNortheastCommunityHealthCenter, bethlehemChildrensClothesCloset, mainspring, transitionProjects, graceMemorialEpiscopalChurch, blanchetHouseOfHospitality, stAndreBessette, allSaintsEpiscopalChurch, firstBaptistChurch, humanSolutionsFamilyCenter, portlandRescueMission, cityTeamPortland];

export default resourcesArray;
