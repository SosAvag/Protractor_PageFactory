const {element, by} = require("protractor");

class History {
    constructor() {
        this.titleOfHistorySection = element(by.css("h1"));
        this.historyButton = element(by.css(".top-navigation__sub-link[href='/about/who-we-are/history']"));

        this.clickOnHistoryButton = () => {
           this.historyButton.click()
        };
    }

}
module.exports = History;