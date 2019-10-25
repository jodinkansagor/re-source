const avelGordlyCenterForHealing = {
    id: 'avel-gordly-center-for-healing',
    name: 'Avel Gordly Center for Healing',
    phone: '(503)494-4745',
    address: '621 SW Alder St., Ste. 520',
    description: 'Outpatient psychiatry, drug and alcohol counseling and treatment, culturally specific services. Sliding scale fee.',
    hours: ' Mon.-Fri. 8:30a.m.-5p.m.',
    transit: 'Downtown Bus, MAX',
    website: 'http://www.ohsuhealth.com/counseling',
    neighborhood: 'SW',
    type: ['medical'],
    filter: []
};
const budClarkClinic = {
    id: 'bud-clark-clinic',
    name: 'Bud Clark Clinic',
    phone: '(971)271-6360',
    address: '650 NW Irving St.',
    description: 'Walk-in clinic for short-term treatment for injuries, new illnesses and urgent medical needs.',
    hours: ' Mon.-Fri. 8:00a.m.-3:30p.m. closed 11:30a.m.-1p.m.',
    transit: 'Bus: 17; MAX Yellow, Green',
    website: 'false',
    neighborhood: 'NW',
    type: ['medical'],
    filter: []
};
const cascadeAidsProject = {
    id: 'cascade-aids',
    name: 'Cascade AIDS Project',
    phone: '(503)223-5907',
    address: '520 NW Davis St., Ste. 215',
    description: 'Free and confidential HIV and STI testing services. Check calendar online or call for locations/times. Education, housing, and support services for HIV-positive individuals who meet eligibility requirements. Call for intake.',
    hours: '9a.m.-5:00p.m. Mon.-Thu. 9a.m.-3p.m. Fri.',
    transit: 'Downtown Bus, MAX',
    website: 'http://www.cascadeaids.org',
    neighborhood: 'NW',
    type: ['medical', 'shelter'],
    filter: ['lgbt']
};
const cascadiaBHUrgentWalkInClinic = {
    id: 'cascadia-b-h-urgent-walk-in-clinic',
    name: 'Cascadia BH Urgent Walk-In Clinic',
    phone: '(503)963-2575',
    address: '4212 SE Division St., Ste. 100',
    description: 'Urgent mental health needs. Selected on clinical need, may include counseling, medication prescribing, referrals to affordable mental health, medical, and substance treatment and referrals to other community resources.',
    hours: ' Mon.-Sun. 7a.m.-10:30p.m.',
    transit: 'Bus:2',
    website: 'http://www.cascadiabhc.org',
    neighborhood: 'SE',
    type: ['medical'],
    filter: []
};
const northByNortheastCommunityHealthCenter = {
    id: 'north-by-northeast-community-health-center',
    name: 'North by Northeast Community Health Center',
    phone: '(503)287-4932',
    address: '714 NE Alberta St.',
    description: 'Primary care services provided with a focus on African-American health and management of hypertension and diabetes. Accepts OHP CareOregon. Insurance enrollment assistance for uninsured adult residents. First time patients, call.',
    hours: ' Mon.-Fri. 9a.m.-5p.m.',
    transit: 'Bus: 6, 72',
    website: 'http://www.nxneclinic.org',
    neighborhood: 'N-NE',
    type: ['medical'],
    filter: []
};
const bethlehemChildrensClothesCloset = {
    id: 'bethlehem-childrens-clothes-closet',
    name: 'Bethlehem Children’s Clothes Closet',
    phone: '(503)777-6784',
    address: '5415 SE Powell Blvd',
    description: 'Enter through back parking lot. Free clothing for newborns to juniors.',
    hours: '4th Saturday only - Noon-2p.m.',
    transit: 'Bus: 9, 71',
    website: 'http://www.smpdx.org',
    neighborhood: 'SE',
    type: ['clothing'],
    filter: ['lgbt']
};
const mainspring = {
    id: 'mainspring',
    name: 'Mainspring',
    phone: '(503)233-5533',
    address: '3500 NE 82nd Ave.',
    description: 'Clothing for people in need. Clothing pantry access once per month. Personal care products when available.',
    hours: ' Mon.-Wed. 10a.m.-12:45p.m.',
    transit: 'Bus: 24, 72',
    website: 'http://www.mainspringpdx.org',
    neighborhood: 'N-NE',
    type: ['clothing'],
    filter: ['lgbt']
};
const outsideIn = {
    id: 'outside-in',
    name: 'Outside In Clinic',
    phone: '503-535-3860',
    address: '1132 SW 13th Ave',
    description: 'Primary care and referrals, same day appointments. Transgender health services, syringe exchange, tattoo removal, general medicine, women\'s health care, naturopath, Medicare enrollment. Accepts most insurance. Sliding scale with $10 nominal fee.',
    hours: 'Mon. 8:30a.m.-5:30p.m. Tue-Thu. 8:30a.m.-7:30p.m.',
    transit: 'Downtown Bus; MAX Red, Blue',
    website: 'http://www.outsidein.org',
    neighborhood: 'SW',
    type: ['medical'],
    filter: ['lgbt']
};
const parkroseKitchen = {
    id: 'parkrose-kitchen',
    name: 'Parkrose Community Kitchen',
    phone: 'none',
    address: '12505 NE Halsey St.',
    description: 'Dinner every Tuesday night from November through April.',
    hours: 'Tuesdays 6-7p.m.',
    transit: 'Bus: 73, 77',
    website: 'false',
    neighborhood: 'NE',
    type: ['meal'],
    filter: []
};
const seCommFoodPantryAndClothes = {
    id: 'se-comm-food-clothes',
    name: 'Southeast Community Food Pantry & Clothes Closet, Inc.',
    phone: '(503)-895-6102',
    address: '5535 SE Rhone St.',
    description: 'Clothing (Thursday only) and food pantry.',
    hours: '2-7p.m. Monday and Thursday only.',
    transit: 'Bus: 9, 14, 71',
    website: 'http://www.southeastcommunity.org',
    neighborhood: 'SE',
    type: ['clothing', 'meal'],
    filter: []
};
const stAndreBessette = {
    id: 'st-andre-bessette',
    name: 'St. Andre Bessette',
    phone: '(503)228-0746',
    address: '601 W Burnside St.',
    description: 'Clothing once every 30 days, socks and hygiene every 7 days, sleeping bags on Thursday.',
    hours: '9:30-11:20a.m.',
    transit: 'Bus: 12, 20, 33, 54, Downtown MAX',
    website: 'http://www.saintandrechurch.org',
    neighborhood: 'SW',
    type: ['clothing'],
    filter: ['religious']
};
const transitionProjects = {
    id: 'transition-projects',
    name: 'Transition Projects',
    phone: '(503)280-4700',
    address: '650 NW Irving St',
    description: 'Clothes and showers available daily. Short-term residential programs: Clark Center(self-id. men only), Doreen\'s Place(self-id men), Jean\'s Place(self-id women). Emergency shelters: Laurelwood Center (self-id women, couples), SOS (self-id women), Willamette(coupled, single self-id women), Walnut Park(all genders, couples). Shelter hours, services, location vary. Call or come in for more info',
    hours: 'Resource Center hours 8a.m.-4p.m. daily',
    transit: 'Bus: 17, 33, MAX',
    website: 'http://www.tprojects.org',
    neighborhood: 'NW',
    type: ['clothing', 'shelter'],
    filter: ['lgbt']
};
const allSaintsEpiscopalChurch = {
    id: 'all-saints-episcopal-church',
    name: 'All Saints Episcopal Church',
    phone: '(503)777-3829',
    address: '4033 SE Woodstock Blvd.',
    description: 'Hot Meals',
    hours: '11:30a.m. Sat.',
    transit: 'Bus: 19, 75',
    website: 'http://www.allsaintspdx.org',
    neighborhood: 'SE',
    type: ['meal'],
    filter: ['religious']
};
const blanchetHouseOfHospitality = {
    id: 'blanchet-house-of-hospitality',
    name: 'Blanchet House of Hospitality',
    phone: '(503)241-4340',
    address: '310 NW Glisan St.',
    description: 'Free hot meals. No questions asked.',
    hours: ' Mon.-Sat. 6:30-7:30a.m.(breakfast); 11:30a.m.-12:30p.m.(lunch); 5-6p.m.(dinner) ',
    transit: 'Bus: 4, 8, 35, 44, 77, MAX',
    website: 'http://www.blanchethouse.org',
    neighborhood: 'NW',
    type: ['meal'],
    filter: []
};
const firstBaptistChurch = {
    id: 'first-baptist-church',
    name: 'First Baptist Church',
    phone: '(503)228-7465',
    address: '909 SW 11th Ave.',
    description: 'Hot lunch',
    hours: ' Mon.-Thurs. 2-4p.m.',
    transit: 'Bus: 15, 51; MAX Red, Blue; Streetcar',
    website: 'http://www.fbc-portland.org',
    neighborhood: 'SW',
    type: ['meal'],
    filter: ['religious']
};
const graceMemorialEpiscopalChurch = {
    id: 'grace-memorial-episcopal-church',
    name: 'Grace Memorial Episcopal Church',
    phone: '(503)287-0418',
    address: '1535 NE 17th Ave',
    description: 'Sack lunch, one per person, once a week. Dinner at 6p.m. on Fridays.',
    hours: ' Tues.-Thurs. Sack lunch 11a.m.-1p.m.',
    transit: 'Bus: 8, 9, 73, 77, MAX',
    website: 'http://www.grace-memorial.org',
    neighborhood: 'N-NE',
    type: ['meal'],
    filter: ['religious']
};
const cityTeamPortland = {
    id: 'city-team-portland',
    name: 'City Team Portland',
    phone: '(503)231-9334',
    address: '526 SE Grand Ave.',
    description: 'Men Only. Sobriety required. $5/night for shelter. Dinner, breakfast, shower included daily.',
    hours: 'shelter sign-up 5:45-6:30p.m.',
    transit: 'Bus: 6, Streetcar',
    website: 'http://www.cityteam.org',
    neighborhood: 'SE',
    type: ['shelter'],
    filter: ['onlyMen']
};
const humanSolutionsFamilyCenter = {
    id: 'human-solutions-family-center',
    name: 'Human Solutions',
    phone: '(503)548-0200',
    address: '12350 SE Powell Blvd (Office only. Call 211 for intake.)',
    description: '24-hour shelter. Lilac Meadows for families with at least one child under 18. Gresham Women\'s Shelter for self-ident. women. No walk-up access. Call 211 for eligibility/intake',
    hours: 'call 211 for intake',
    transit: 'Bus: 9, 17, 71, MAX Blue',
    website: 'http://www.humansolutions.org/services/homeless-services/',
    neighborhood: 'SE',
    type: ['shelter'],
    filter: ['onlyWomen']
};
const portlandRescueMission = {
    id: 'portland-rescue-mission',
    name: 'Portland Rescue Mission',
    phone: '(503)906-7690',
    address: '111 W Burnside',
    description: 'Emergency shelter for men only, TB card required, optional chapel service. Lottery number for beds and emergency shelter tickets handed out 5:45p.m., numbers announced 6:45p.m. Check-in hours 8p.m. Showers available for men 2-4p.m. daily.',
    hours: 'Guest Care Center hours: 2-4p.m.; lobby drop-in 24hours',
    transit: 'Bus: 12, 19, 20, MAX',
    website: 'http://www.portlandrescuemission.org',
    neighborhood: 'SW',
    type: ['shelter'],
    filter: ['onlyMen', 'religious']
};

const resourcesArray = [budClarkClinic, avelGordlyCenterForHealing, cascadeAidsProject, cascadiaBHUrgentWalkInClinic, northByNortheastCommunityHealthCenter, bethlehemChildrensClothesCloset, mainspring, outsideIn, seCommFoodPantryAndClothes, transitionProjects, graceMemorialEpiscopalChurch, blanchetHouseOfHospitality, stAndreBessette, allSaintsEpiscopalChurch, firstBaptistChurch, humanSolutionsFamilyCenter, parkroseKitchen, portlandRescueMission, cityTeamPortland];

export default resourcesArray;
