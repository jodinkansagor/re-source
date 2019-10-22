import { renderDisplayPage } from '../common/utils.js';

const test = QUnit.test;

test('renders display page', function(assert) {
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
    const expected = '<li class="avel-gordly-center-for-healing"><h2>Avel Gordly Center for Healing</h2><p class="description">Outpatient psychiatry, drug and alcohol counseling and treatment, culturally specific services. Sliding scale fee</p><p class="hours">8:30a.m.-5p.m. Mon.-Fri.</p><p class="transit">Downtown Bus, MAX</p><p class="website">www.ohsuhealth.com/counseling</p><p class="neighborhood">SW</p><input type="checkbox" class="checkbox"></li>';

    const dom = renderDisplayPage(avelGordlyCenterForHealing);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});
