Feature: Evercraft
  Scenario: Character creation
    Given I am in the game
    When I create a character
    Then my character has default attributes

  Scenario: Character info
    Given I am in the game
    And there are characters created
    When I access character info
    Then I can see details for all characters

