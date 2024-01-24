import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {

    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.setValue("world")
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")
    }); 

    xit("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        
        let inputPassword = await $("#password")
        await inputPassword.addValue("SuperSecretPassword!")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)

    }); 


    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua/search');

        let inputSearch = await $('#gsc-i-id1')
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder arrtibute is: " + attr) // outputs: шукати

        await inputSearch.setValue("Cat")
        attr  = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr) // outputs: Cat
    }); 

    xit("should show getLocation command", async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location) // outputs: x, y

        let xLocation = await inputSearch.getLocation("x")
        console.log("Location by x is: " + xLocation) // outputs: x
    });
      
    xit("should show getText command", async () => {
        await browser.url('https://webdriver.io/');
        
        let subtitle = await $('.hero__subtitle')
        console.log("Subtitle text is: " + await subtitle.getText()) // outputs: Next-gen browser...

    });


    xit("homework1", async () => {
        await browser.url('https://webdriver.io/');
        
        let apiButton = await $('.navbar__link[href="/docs/api"]')
        await browser.pause(2000)
        await apiButton.click()
        await browser.pause(4000)

        let url1 = await browser.getUrl()
        console.log(url1);
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api')

        let breadcrumbs = await $$('.breadcrumbs__link')[1]
        console.log("Breadcrumbs text is: " + await breadcrumbs.getText()) // outputs: Introduction

        let Webdriver = await $$('article p a')[0]
        let attr = await Webdriver.getAttribute("href")
        console.log("Value attribute is: " + attr) // outputs: /docs/api/webdriver
                
        let seachButton = await $('.DocSearch-Search-Icon')
        await seachButton.click()
        let inputSearch = await $('.DocSearch-Input')
        await inputSearch.addValue("all is done")
        await browser.pause(1000)
        let clearButton = await $('.DocSearch-Reset')
        await browser.pause(2000)
        await clearButton.click()
        await browser.pause(4000)
        
           
    });


    xit("should show if an element is clickable", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable) // outputs: true
    });

    xit("should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true
    });

    xit("should show if an element is visible", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true
    });



    xit("should show if an element is anabled", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is get started button enabled in viewport: " + isEnabled) // outputs: true
    });

    xit("should show if an element is focused", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log("Is get started button focused before click: " + isFocused) // outputs: false
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is get started button focused before click: " + isFocused) // outputs: true
        await browser.pause(2000)
    });

    xit("should show movement to element action", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
    });
    

    xit("should show save screenshot comand", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenshot.png')
    });

    
    xit("should sitch to another window", async () => {
        await browser.url('https://webdriver.io/');

        await browser.newWindow('https://google.com')
        await browser.pause(2000)
       
        await browser.switchWindow('https://webdriver.io/')
        await browser.pause(2000)
    });


    xit("should show waitUntil command", async () => {
        await browser.url('https://webdriver.io/');

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]').isDisplayed();
        }, 5000, "Button is not displayed")
    });

    xit("should get html for certain elements", async () => {
        await browser.url('https://webdriver.io/');

        const outerHTML = await $('.dropdown__menu').getHTML()
        console.log("uterHTML : " + outerHTML)

        const innerHTML = await $('.dropdown__menu').getHTML(false)
        console.log("innerHTML : " + innerHTML)
    });




    it("homework2", async () => {
        await browser.url('https://webdriver.io/');
        
        let apiButton = await $('nav a[href="/docs/api"]')
        await browser.pause(2000)
        await apiButton.click()
        
        const blogButton = await $('footer a[href="/blog"]')
        await browser.pause(2000)
        await blogButton.scrollIntoView()
        await browser.pause(2000)

        const ProtocolCommands = await $('main a[href="/docs/api/protocols"]')
        let displayedInViewport = await ProtocolCommands.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true

        let clickable = await ProtocolCommands.isClickable()
        console.log("Is clickable: " + clickable) // outputs: true

        await ProtocolCommands.click()

        await browser.waitUntil(async () => {
            return $('#webdriver-protocol').isDisplayed();
        }, 5000, "Button is not displayed")
    });

    // xit, it.skip, describe.skip, it.only






});
