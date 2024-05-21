package test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

 

@RunWith(Cucumber.class)

@CucumberOptions(
		monochrome = true,
		plugin  = { "pretty", "html:target/cucumber" },
        glue = "test.steps",
        features = "classpath:cucumber"
)

public class RunTemperatureTest {

}
