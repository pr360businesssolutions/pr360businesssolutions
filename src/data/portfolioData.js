// Portfolio / demo project data.
//
// IMPORTANT (honesty rules):
// - Every item here is a QA DEMONSTRATION built to show capability.
// - `repo` is intentionally null until a real public repository exists.
//   The UI shows a "Repository coming soon" state instead of a fake link.
// - Execution evidence is described, not fabricated. Replace `evidence`
//   captions and add real screenshots/report files once available.

export const portfolio = [
  {
    id: 'selenium-framework',
    badge: 'Demo Project',
    type: 'Automation Framework',
    title: 'Web Automation Framework – Selenium with Java',
    short:
      'A reusable Selenium + TestNG framework built on the Page Object Model, with data-driven tests, parallel execution and failure screenshots.',
    tech: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model'],
    repo: null,
    overview:
      'A maintainable UI automation framework demonstrating how PR 360° structures Selenium projects for real client applications. It separates page logic, test logic, test data and utilities so suites stay readable as they grow.',
    objective:
      'Show a production-style framework architecture that is reusable, data-driven and easy to extend for regression automation.',
    scope: [
      'Functional UI flows via Page Object Model',
      'Data-driven test scenarios',
      'Cross-browser execution where configured',
      'Parallel execution via TestNG',
      'Screenshot capture on failures',
      'HTML / TestNG execution reports',
    ],
    features: [
      'Reusable Page Object Model architecture',
      'Data-driven testing with external test data',
      'Reusable utilities and base test methods',
      'TestNG annotations, groups and assertions',
      'Cross-browser execution where configured',
      'Parallel execution where configured',
      'Automatic screenshot capture on failures',
      'Execution reporting',
    ],
    structure: `selenium-framework/
├── src/main/java/
│   ├── base/          # BaseTest, driver factory
│   ├── pages/         # Page Object classes
│   └── utils/         # Waits, config, screenshot, data readers
├── src/test/java/
│   └── tests/         # TestNG test classes
├── test-data/         # Data-driven inputs
├── testng.xml         # Suite + parallel configuration
└── pom.xml            # Maven dependencies`,
    codeSamples: [
      {
        label: 'Page Object (LoginPage.java)',
        language: 'java',
        code: `public class LoginPage extends BasePage {
    private final By username = By.id("username");
    private final By password = By.id("password");
    private final By loginBtn = By.cssSelector("button[type='submit']");

    public LoginPage(WebDriver driver) { super(driver); }

    public DashboardPage login(String user, String pass) {
        type(username, user);
        type(password, pass);
        click(loginBtn);
        return new DashboardPage(driver);
    }
}`,
      },
      {
        label: 'Data-driven test (LoginTest.java)',
        language: 'java',
        code: `@Test(dataProvider = "validUsers")
public void validLoginShowsDashboard(String user, String pass) {
    DashboardPage dashboard = new LoginPage(driver).login(user, pass);
    Assert.assertTrue(dashboard.isLoaded(), "Dashboard should load after valid login");
}`,
      },
    ],
    scenarios: [
      'Valid login navigates to the dashboard',
      'Invalid credentials show an error message',
      'Required-field validation on empty submit',
      'Regression suite runs across configured browsers in parallel',
    ],
    evidence: [
      'TestNG HTML report showing passed/failed counts',
      'Screenshot captured automatically on a failed assertion',
      'Console/execution log of a parallel run',
    ],
  },
  {
    id: 'playwright-framework',
    badge: 'Demo Project',
    type: 'Automation Framework',
    title: 'Modern Web Automation – Playwright with TypeScript',
    short:
      'A modern Playwright + TypeScript framework using fixtures, reusable page abstractions, parallel cross-browser runs and HTML reports with traces.',
    tech: ['Playwright', 'TypeScript', 'Node.js'],
    repo: null,
    overview:
      'A fast, modern end-to-end framework demonstrating PR 360°’s Playwright setup: typed page abstractions, reusable fixtures, cross-browser projects and rich HTML reporting with trace and screenshot evidence on failure.',
    objective:
      'Demonstrate a maintainable TypeScript automation framework suited to SaaS applications with frequent releases.',
    scope: [
      'End-to-end UI flows',
      'Cross-browser testing (Chromium, Firefox, WebKit)',
      'Parallel execution via Playwright projects',
      'API integration checks where demonstrated',
      'HTML report with traces and screenshots',
    ],
    features: [
      'Reusable fixtures for setup and teardown',
      'Page Object / reusable page abstraction',
      'Cross-browser testing',
      'Parallel execution',
      'Test data management',
      'Reusable, resilient locators',
      'API integration where demonstrated',
      'HTML execution reports',
      'Screenshot and trace evidence on failures',
    ],
    structure: `playwright-framework/
├── tests/             # Spec files
├── pages/             # Page object classes
├── fixtures/          # Custom fixtures
├── utils/             # Helpers, test data
├── playwright.config.ts
└── package.json`,
    codeSamples: [
      {
        label: 'Page object (login.page.ts)',
        language: 'typescript',
        code: `import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByLabel('Username');
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Sign in' });
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
}`,
      },
      {
        label: 'Spec (login.spec.ts)',
        language: 'typescript',
        code: `import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('valid login lands on dashboard', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/login');
  await login.login('demo_user', 'demo_pass');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});`,
      },
    ],
    scenarios: [
      'Valid login lands on the dashboard',
      'Invalid login surfaces an error toast',
      'Form validation on empty fields',
      'Cross-browser smoke suite runs in parallel',
    ],
    evidence: [
      'Playwright HTML report with per-test status',
      'Trace viewer output for a failed step',
      'Screenshot attached on failure',
    ],
  },
  {
    id: 'api-testing',
    badge: 'Demo Project',
    type: 'API Testing',
    title: 'REST API Testing & Validation',
    short:
      'A Postman collection demonstrating positive and negative REST API testing: status-code checks, response-body and JSON-schema validation, and environment variables.',
    tech: ['Postman', 'JavaScript test scripts', 'REST APIs'],
    repo: null,
    overview:
      'An API testing demonstration built against public/demo APIs, showing how PR 360° validates integrations: request construction, assertions on status codes and bodies, JSON schema validation, and reusable environment variables.',
    objective:
      'Demonstrate structured API test coverage with clear positive and negative scenarios and repeatable collection runs.',
    scope: [
      'GET, POST, PUT, DELETE where supported by the demo API',
      'Positive and negative scenarios',
      'Status-code and response-body validation',
      'JSON schema validation',
      'Environment variables for reusability',
      'Collection run execution report',
    ],
    features: [
      'CRUD requests against a demo/public API',
      'Positive testing',
      'Negative testing',
      'Status-code validation',
      'Response body validation',
      'JSON schema validation',
      'Auth testing using safe demo credentials / public test APIs',
      'Environment variables',
      'Collection execution reports',
    ],
    structure: `api-testing/
├── PR360_API_Demo.postman_collection.json
├── PR360_Demo.postman_environment.json
└── reports/           # Newman / collection run output`,
    codeSamples: [
      {
        label: 'Postman test script (Create user)',
        language: 'javascript',
        code: `pm.test("Status code is 201 Created", () => {
  pm.response.to.have.status(201);
});

pm.test("Response has an id", () => {
  const body = pm.response.json();
  pm.expect(body).to.have.property("id");
  pm.environment.set("userId", body.id);
});

pm.test("Content-Type is JSON", () => {
  pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});`,
      },
      {
        label: 'Negative test (Invalid payload)',
        language: 'javascript',
        code: `pm.test("Invalid request returns 400", () => {
  pm.response.to.have.status(400);
});

pm.test("Error message is present", () => {
  const body = pm.response.json();
  pm.expect(body).to.have.property("error");
});`,
      },
    ],
    scenarios: [
      'Create resource returns 201 and an id',
      'Fetch resource returns the created record',
      'Invalid payload returns 400 with an error',
      'Delete resource returns the expected status',
    ],
    evidence: [
      'Collection runner summary (passed/failed assertions)',
      'Sample request/response pairs',
      'Newman HTML report',
    ],
  },
  {
    id: 'manual-testing',
    badge: 'QA Demonstration',
    type: 'Manual QA',
    title: 'Complete Manual Testing Demonstration',
    short:
      'A full manual QA deliverable set for a sample application: requirement analysis, test scenarios, detailed test cases, bug reports and an execution summary.',
    tech: ['Test Case Design', 'Bug Reporting', 'Exploratory Testing'],
    repo: null,
    overview:
      'An end-to-end manual testing demonstration on a sample application, showing the documentation PR 360° produces: requirement understanding, scenarios, detailed test cases covering positive, negative and edge conditions, bug reports and a test execution summary.',
    objective:
      'Demonstrate structured manual QA documentation and disciplined test coverage for a typical business application.',
    scope: [
      'Requirement analysis',
      'Test scenario preparation',
      'Detailed test case design',
      'Positive, negative and edge cases',
      'Functional and regression testing',
      'Defect reporting and execution summary',
    ],
    features: [
      'Sample application testing',
      'Requirement analysis',
      'Test scenario preparation',
      'Detailed test cases',
      'Positive test scenarios',
      'Negative test scenarios',
      'Edge cases',
      'Functional testing',
      'Regression testing',
      'Bug reporting',
      'Test execution summary',
    ],
    structure: `manual-testing-demo/
├── 01_Requirement_Understanding.pdf
├── 02_Test_Scenarios.xlsx
├── 03_Test_Cases.xlsx
├── 04_Bug_Reports.xlsx
└── 05_Execution_Summary.pdf`,
    codeSamples: [
      {
        label: 'Sample test case (login)',
        language: 'text',
        code: `TC_LOGIN_001  |  Priority: P1  |  Type: Functional
Title: Valid user can log in
Pre-condition: Registered active account exists
Steps:
  1. Open the login page
  2. Enter valid username and password
  3. Click "Sign in"
Expected: User is authenticated and the dashboard is displayed`,
      },
      {
        label: 'Sample bug report',
        language: 'text',
        code: `BUG_LOGIN_004  |  Severity: Major  |  Priority: High
Summary: Error message not shown for locked account
Steps to reproduce:
  1. Attempt login with a locked account
Expected: "Account locked" message is displayed
Actual: Page reloads with no feedback
Evidence: screenshot attached`,
      },
    ],
    scenarios: [
      'Positive: valid credentials authenticate the user',
      'Negative: invalid credentials are rejected with a clear message',
      'Edge: field boundaries, special characters, session timeout',
      'Regression: core flows re-validated after a fix',
    ],
    evidence: [
      'Test scenario and test case sheets',
      'Bug report log with severity/priority',
      'Test execution summary report',
    ],
  },
]
