@regression
Feature: Api demos app

  Scenario: User success access Read Asset
    Given user on home screen API Demos
    When user access Content menu screen
    And user click assets
    And user click Read Asset
    Then system display text This text is stored in a raw Asset

  Scenario: User success access Data Types
    Given user on home screen API Demos
    When user access Content menu screen
    And user click clipboard
    And user click data types
    Then system display data types screen

  @Views  
  Scenario: User success access Visibility
    Given user on home screen API Demos
    When user access views menu screen
    And user click visibility
    Then system display visibility screen