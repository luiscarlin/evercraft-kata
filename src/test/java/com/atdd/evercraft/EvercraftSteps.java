package com.atdd.evercraft;

import cucumber.api.java8.En;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import static org.junit.Assert.*;

public class EvercraftSteps implements En {

    EventFiringWebDriver webDriver;

    public EvercraftSteps() {
        final String FIRST_CREATED_CHARACTER = "First Character";
        final String SECOND_CREATED_CHARACTER = "Second Character";
        final String DEFAULT_ARMOR_CLASS = "10";
        final String DEFAULT_HIT_POINTS = "5";

        Before(() -> {
            webDriver = new EventFiringWebDriver(new ChromeDriver());
            webDriver.get("http://localhost:3000/");
        });

        After(() -> webDriver.close());

        Given("^I am in the game$", () -> { });

        And("^there are characters created$", () -> {
            webDriver.findElement(By.id("new-character-name-player")).sendKeys(FIRST_CREATED_CHARACTER);
            webDriver.findElement(By.id("button-create-character-player")).click();

            webDriver.findElement(By.id("new-character-name-player")).sendKeys(SECOND_CREATED_CHARACTER);
            webDriver.findElement(By.id("button-create-character-player")).click();
        });

        When("^I create a character$", () -> {
            webDriver.findElement(By.id("new-character-name-player")).sendKeys(FIRST_CREATED_CHARACTER);
            webDriver.findElement(By.id("button-create-character-player")).click();
        });

        Then("^my character has default attributes$", () -> {
            String name = webDriver.findElement(By.id("character-name-player")).getText();
            Assert.assertEquals(name, FIRST_CREATED_CHARACTER);

            String armor = webDriver.findElement(By.id("character-armor-player")).getText();
            Assert.assertEquals(armor, "Armor Class: " + DEFAULT_ARMOR_CLASS);

            String hp = webDriver.findElement(By.id("character-hp-player")).getText();
            Assert.assertEquals(hp, "Hit Points: " + DEFAULT_HIT_POINTS);
        });

        When("^I access character info$", () -> {
        });

        Then("^I can see details for all characters$", () -> {
            String name = webDriver.findElements(By.id("character-name-player")).get(0).getText();
            Assert.assertEquals(name, FIRST_CREATED_CHARACTER);

            String armor = webDriver.findElements(By.id("character-armor-player")).get(0).getText();
            Assert.assertEquals(armor, "Armor Class: " + DEFAULT_ARMOR_CLASS);

            String hp = webDriver.findElements(By.id("character-hp-player")).get(0).getText();
            Assert.assertEquals(hp, "Hit Points: " + DEFAULT_HIT_POINTS);

            name = webDriver.findElements(By.id("character-name-player")).get(1).getText();
            Assert.assertEquals(name, SECOND_CREATED_CHARACTER);

            armor = webDriver.findElements(By.id("character-armor-player")).get(1).getText();
            Assert.assertEquals(armor, "Armor Class: " + DEFAULT_ARMOR_CLASS);

            hp = webDriver.findElements(By.id("character-hp-player")).get(1).getText();
            Assert.assertEquals(hp, "Hit Points: " + DEFAULT_HIT_POINTS);
        });

        Given("^I have a target to attack$", () -> {
            webDriver.findElement(By.id("new-character-name-player")).sendKeys(FIRST_CREATED_CHARACTER);
            webDriver.findElement(By.id("button-create-character-player")).click();

            webDriver.findElement(By.id("new-character-name-player")).sendKeys(SECOND_CREATED_CHARACTER);
            webDriver.findElement(By.id("button-create-character-player")).click();
        });

        When("^I successfully attack$", () -> {
            webDriver.findElement(By.id("start-battle")).click();

            // todo: select from dropdown
            webDriver.findElement(By.id("attack-button")).click();
        });

        Then("^my target is damaged$", () -> {
            String hp = webDriver.findElement(By.id("character-hp-defender")).getText();
            Assert.assertEquals(hp, "Hit Points: 9");
        });
    }
}