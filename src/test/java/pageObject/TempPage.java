package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;


public class TempPage {
	protected WebDriver driver;

	public TempPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(id = "ucfrom")
	private WebElement fahrenheid;
	@FindBy(id = "ucto")
	private WebElement celsius;
	@FindBy(id = "ucresult")
	private WebElement result;
	@FindBy(xpath = "//*[@id=\"undctable\"]/table/tbody/tr[3]/td[2]/input[4]")
	private WebElement clearButton;

	
	public void open() {
		driver.get("https://www.unitconverters.net/temperature/fahrenheit-to-celsius.htm");
	}

	public void close() {
		driver.close();
	}

	public void enterCelsius(String value) {
		celsius.sendKeys(value);
	}
	public void enterFahrenheid(String value) {
		fahrenheid.sendKeys(value);
	}

	public void checkFahrenheidIs(String value) {
		assertThat(fahrenheid.getAttribute("value"), is(value));
	}
	public void checkCelsiusIs(String value) {
		assertThat(celsius.getAttribute("value"), is(value));
	}
	

}
