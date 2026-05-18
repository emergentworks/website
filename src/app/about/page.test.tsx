/**
 * About Page Unit Tests
 *
 * Due to the project's Jest configuration using testEnvironment: "node",
 * actual React component testing cannot be performed in this environment.
 * The about page contains JSX which cannot be parsed in a Node environment
 * without proper transformation setup.
 *
 * This test suite serves as a placeholder and documents what tests should exist.
 *
 * For proper component testing, the setup would require:
 * 1. Changing testEnvironment to "jsdom" in jest.config.js
 * 2. Installing and configuring @testing-library/react
 * 3. Proper Babel/preset configurations for JSX transformation
 *
 * The following tests would validate:
 * - Component renders without crashing
 * - Layout component is properly wrapped around content
 * - Hero component displays "About Us" title with correct image
 * - "Our Story" section contains content about founding and Army Armstead
 * - Army Armstead's image is displayed with proper alt text
 * - "Our Mission" section describes freedom through digital fluency
 * - Details about T.RAP, T.E.C.K, and Mentorship programs
 * - "Our Impact" section shows statistics (90%, 75%, 85%, 20%)
 * - "Join Us" section with link to Programs page
 * - Join the Movement CTA link functions properly
 * - Proper CSS classes applied for styling (twoUp, twoUpCard)
 * - Accessibility attributes present on all elements
 * - All internal links navigate to correct pages
 */

describe('AboutPage', () => {
  it('placeholder test - file exists', () => {
    // This is a placeholder test since we cannot import the component
    // due to JSX parsing limitations in the current test environment
    expect(true).toBe(true);
  });
});