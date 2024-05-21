package test.steps;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.TempPage;

public class TemperatureSteps {

	private TempPage page;
    
	@Before
    public void beforeScenario(){
    	System.setProperty("webdriver.chrome.driver", "C:\\cucumberTraining\\drivers\\chromedriver.exe");
    	page = PageFactory.initElements(new ChromeDriver(), TempPage.class);
    }	

	
	@After
    public void afterScenario(){
    	page.close();
    }

    @Given("^I go to the temperature conversion webpage$")
    public void i_go_to_the_temperature_conversion_webpage() throws Exception {
        page.open();
    }

    @When("^I enter (.*) Celsius$")
    public void i_enter_Celsius(String celsius) throws Exception {
        page.enterCelsius(celsius);

    }

    @Then("^the outcome of should be (.*) Fahrenheid$")
    public void the_outcome_of_should_be_Fahrenheid(String fahrenheid) throws Exception {
        page.checkFahrenheidIs(fahrenheid);
    }

    @When("^I enter (.*) Fahrenheid$")
    public void i_enter_Fahrenheid(String fahrenheid) throws Exception {
        page.enterFahrenheid(fahrenheid);

    }

    @Then("^the outcome of should be (.*) Celsius$")
    public void the_outcome_of_should_be_Celsius(String celsius) throws Exception {
        page.checkCelsiusIs(celsius);
    }

}

