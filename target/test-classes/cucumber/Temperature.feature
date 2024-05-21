Feature: Temperature converter
  As a user
  I want to use a temperature conversion webpage
  So that I can convert Celsius to Fahrenheid


Scenario:  Celsius to Fahrenheid
Given I go to the temperature conversion webpage
When I enter 0 Celsius
Then the outcome of should be 32 Fahrenheid

Scenario:  Fahrenheid to Celsius
  Given I go to the temperature conversion webpage
  When I enter 0 Fahrenheid
  Then the outcome of should be -17.777777778 Celsius


Scenario Outline:  Fahrenheid to Celsius
Given I go to the temperature conversion webpage
When I enter <celsiusvalue> Celsius
Then the outcome of should be <fahrenheidvalue> Fahrenheid

Examples:
|celsiusvalue	|fahrenheidvalue	|
|0		        |32		            |
|20		        |68		            |
|45	            |113		        |


  Scenario Outline:  Celsius to Fahrenheid
    Given I go to the temperature conversion webpage
    When I enter <fahrenheidvalue> Fahrenheid
    Then the outcome of should be <celsiusvalue> Celsius

    Examples:
      |fahrenheidvalue	|celsiusvalue	    |
      |32		        |-1.70530256E-12	|
      |68		        |20		            |
      |113	            |45		            |