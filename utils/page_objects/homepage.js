const {element, by, browser} = require("protractor");

class Homepage {
    constructor() {
        this.narrow = element(by.css(".background-video__container"));
        this.aboutButton = element(by.css(".top-navigation__item-link[href='/about']"));
        this.historyButton = element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));
        this.careersButton = element(by.css(".top-navigation__item-link[href='/careers']"));
        this.allCitiesCanada = element(by.xpath("//li[@title='All Cities in Canada']"));

        this.get = (url) => {
            browser.get(url);
        };
        this.hoverOnAboutButton = () =>{
            browser.actions().mouseMove(this.aboutButton).perform();
        };
        this.clickOnCareersButton = () => {
            this.careersButton.click()
        }

    }
}
module.exports = Homepage;