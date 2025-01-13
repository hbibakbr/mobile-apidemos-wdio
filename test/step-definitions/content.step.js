const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^user on home screen API Demos$/, async () => {
    await $('//android.widget.TextView[@text="API Demos"]').isDisplayed()
});

When(/^user access Content menu screen$/, async () => {
    await $('//android.widget.TextView[@content-desc="Content"]').click()
});

When(/^user click assets$/, async () => {
    await $('//android.widget.TextView[@content-desc="Assets"]').click()
});

When(/^user click Read Asset$/, async () => {
    await $('//android.widget.TextView[@content-desc="Read Asset"]').click()
});

When(/^user click clipboard$/, async () => {
    await $('//android.widget.TextView[@content-desc="Clipboard"]').click()
});

When(/^user click data types$/, async () => {
    await $('//android.widget.TextView[@content-desc="Data Types"]').click()
});

Then(/^system display text (.+)$/, async (text) => {
    const element = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/text"]')
    await expect(element).toHaveText(expect.stringContaining(text))
});

Then(/^system display data types screen$/, async () => {
    const element = await $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')
    await expect(element).toBeDisplayed()
});

// Views

When(/^user access views menu screen$/, async () => {
    await $('~Views').click()
});

When(/^user click visibility$/, async () => {
    await driver.execute('mobile: scroll', { 
        strategy: 'accessibility id', 
        selector: 'Visibility' 
    });
    const elem = await $('~Visibility');
    await elem.click();
});

Then(/^system display visibility screen$/, async () => {
    const element = await $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]')
    await expect(element).toBeDisplayed()
});