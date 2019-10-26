import resourcesArray from '../data/api.js';
import findById from '../common/utils.js';
import renderDisplayPage from '../results/render-display.js';
import { renderFavorites } from '../favorites/render-favorites.js';

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
    const expected = '<li class="avel-gordly-center-for-healing"><div class="heading-div"><a href="www.ohsuhealth.com/counseling" target="_blank">Avel Gordly Center for Healing</a><input type="checkbox" class="checkbox" value="avel-gordly-center-for-healing" id="avel-gordly-center-for-healing"></div><div class="contact-div"><p class="phone">📞: (503)494-4745</p></div><p class="description">Outpatient psychiatry, drug and alcohol counseling and treatment, culturally specific services. Sliding scale fee</p><p class="hours">🕔: 8:30a.m.-5p.m. Mon.-Fri.</p><div class="directions-div"><p class="transit">🚍: Downtown Bus, MAX</p><p class="address">📮:621 SW Alder St., Ste. 520</p></div></li>';

    const dom = renderDisplayPage(avelGordlyCenterForHealing);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});

test('renders favorites page', function(assert) {
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
    const expected = '<li class="avel-gordly-center-for-healing"><div class="heading-div"><a href="www.ohsuhealth.com/counseling">Avel Gordly Center for Healing</a></div><p class="phone">📞: (503)494-4745</p><p class="hours">🕒: 8:30a.m.-5p.m. Mon.-Fri.</p></li>';

    const dom = renderFavorites(avelGordlyCenterForHealing);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;

    const foundItem = findById(resourcesArray, id);

    assert.equal(foundItem, expected);
});