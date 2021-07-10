const {element, by} = require("protractor");

class Careers {
    constructor() {
        this.searchField = element(by.id("jobSearchFilterForm"));
        this.keywordField = element(by.id("new_form_job_search_1445745853_copy-keyword"));
        this.firstFromDropdown = element(by.css(".autocomplete-suggestion[data-index='0']"));
        this.choseLocation = element(by.css('.select2-selection__arrow'));
        this.locationCanada = element(by.css("[aria-label='Canada']"));
        this.findButton = element(by.css(".recruiting-search__submit"));
        this.tittleOfFoundVacancy = element(by.css("h1"));
        this.allCitiesCanada = element(by.xpath("//li[@title='All Cities in Canada']"));


        this.clickOnKeywordField = () => {
            this.keywordField.click()
        };
        this.enterKeyword = (keyword) => {
            this.keywordField.sendKeys(keyword)
        };
        this.clickOnFirstSuggestedResult = () => {
            this.firstFromDropdown.click()
        };
        this.clickToChooseLocation = () => {
            this.choseLocation.click()
        };
        this.clickOnLocationCanada = () => {
            this.locationCanada.click()
        };
        this.clickOnAllCitiesOfCanada = () => {
           this. allCitiesCanada.click()
        };
        this.clickOnFindButton = () => {
            this.findButton.click()
        }
    }

}

module.exports = Careers;