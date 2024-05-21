$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/Temperature.feature");
formatter.feature({
  "name": "Temperature converter",
  "description": "  As a user\n  I want to use a temperature conversion webpage\n  So that I can convert Celsius to Fahrenheid",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Celsius to Fahrenheid",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 0 Celsius",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 32 Fahrenheid",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Fahrenheid to Celsius",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 0 Fahrenheid",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be -17.777777778 Celsius",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Fahrenheid to Celsius",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \u003ccelsiusvalue\u003e Celsius",
  "keyword": "When "
});
formatter.step({
  "name": "the outcome of should be \u003cfahrenheidvalue\u003e Fahrenheid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "celsiusvalue",
        "fahrenheidvalue"
      ]
    },
    {
      "cells": [
        "0",
        "32"
      ]
    },
    {
      "cells": [
        "20",
        "68"
      ]
    },
    {
      "cells": [
        "45",
        "113"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Fahrenheid to Celsius",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 0 Celsius",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 32 Fahrenheid",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Fahrenheid to Celsius",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 20 Celsius",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 68 Fahrenheid",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Fahrenheid to Celsius",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 45 Celsius",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 113 Fahrenheid",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Celsius to Fahrenheid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \u003cfahrenheidvalue\u003e Fahrenheid",
  "keyword": "When "
});
formatter.step({
  "name": "the outcome of should be \u003ccelsiusvalue\u003e Celsius",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fahrenheidvalue",
        "celsiusvalue"
      ]
    },
    {
      "cells": [
        "32",
        "-1.70530256E-12"
      ]
    },
    {
      "cells": [
        "68",
        "20"
      ]
    },
    {
      "cells": [
        "113",
        "45"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Celsius to Fahrenheid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 32 Fahrenheid",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be -1.70530256E-12 Celsius",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Celsius to Fahrenheid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 68 Fahrenheid",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 20 Celsius",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Celsius to Fahrenheid",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to the temperature conversion webpage",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureSteps.i_go_to_the_temperature_conversion_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 113 Fahrenheid",
  "keyword": "When "
});
formatter.match({
  "location": "TemperatureSteps.i_enter_Fahrenheid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the outcome of should be 45 Celsius",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureSteps.the_outcome_of_should_be_Celsius(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});