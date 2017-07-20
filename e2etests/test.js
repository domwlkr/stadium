/* global describe, it, browser */

const expect = require('chai').expect;

describe('Stadium Seat Picker App', () => {
    it('Should load with the correct title', () => {
        browser.url('http://localhost:3000/');
        const actualTitle = browser.getTitle();

        expect(actualTitle).to.eql('Stadium Seat Picker');
    });

    it('Should allow me to select a stadium stand', () => {
        const standName = 'North';
        browser.url('http://localhost:3000/');
        browser.click('.stand.north label');
        const actual = browser.element('.selected-stand').getText();

        expect(actual).to.eql(standName);
    });
});
