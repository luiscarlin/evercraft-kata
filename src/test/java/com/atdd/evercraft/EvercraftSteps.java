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
        Before(() -> {
            webDriver = new EventFiringWebDriver(new ChromeDriver());
            webDriver.get("http://localhost:3000/");
        });

        After(() -> webDriver.close());

        Given("^I start a new game$", () -> {
        });

        Given("^there are characters selected$", () -> {
        });

        Given("^I am in the game$", () -> {
        });

        When("^I create a character$", () -> {
            webDriver.findElement(By.id("button-create-character")).click();
            webDriver.findElement(By.id("character-name")).click();
        });

        Then("^my character has default attributes$", () -> {
            String name = webDriver.findElement(By.id("character-name")).getText();
            Assert.assertTrue("Name not found!", name.contains("stranger"));

            String armor = webDriver.findElement(By.id("character-armor")).getText();
            Assert.assertTrue("Armor not found!", armor.contains("10"));

            String hp = webDriver.findElement(By.id("character-hp")).getText();
            Assert.assertTrue("Hit Points not found!", hp.contains("5"));
        });
    }

}
