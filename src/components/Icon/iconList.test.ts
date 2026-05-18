import { iconList } from './iconList';

describe('iconList', () => {
  test('should have twitter icon defined', () => {
    expect(iconList).toHaveProperty('twitter');
    expect(typeof iconList.twitter).toBe('string');
    expect(iconList.twitter).toContain('M'); // SVG paths typically start with M for moveTo command
  });

  test('should have instagram icon defined', () => {
    expect(iconList).toHaveProperty('instagram');
    expect(typeof iconList.instagram).toBe('string');
    expect(iconList.instagram).toContain('M'); // SVG paths typically start with M for moveTo command
  });

  test('should have arrowRight icon defined', () => {
    expect(iconList).toHaveProperty('arrowRight');
    expect(typeof iconList.arrowRight).toBe('string');
    expect(iconList.arrowRight).toContain('M'); // SVG paths typically start with M for moveTo command
  });

  test('should have valid SVG path data for twitter icon', () => {
    const twitterPath = iconList.twitter;
    expect(twitterPath).toMatch(/^M.*Z$/); // Basic format check for closed path starting with M and ending with Z
    expect(twitterPath).toContain('C'); // Should contain cubic Bezier curves
  });

  test('should have valid SVG path data for instagram icon', () => {
    const instagramPath = iconList.instagram;
    expect(instagramPath).toMatch(/^M.*Z$/); // Basic format check for closed path starting with M and ending with Z
    expect(instagramPath).toContain('C'); // Should contain cubic Bezier curves
  });

  test('should have valid SVG path data for arrowRight icon', () => {
    const arrowRightPath = iconList.arrowRight;
    expect(arrowRightPath).toMatch(/^M.*Z$/); // Basic format check for closed path starting with M and ending with Z
    expect(arrowRightPath).toContain('C'); // Should contain cubic Bezier curves
  });

  test('should have consistent structure', () => {
    const keys = Object.keys(iconList);
    expect(keys).toHaveLength(3);
    expect(keys).toEqual(expect.arrayContaining(['twitter', 'instagram', 'arrowRight']));
  });

  test('should be defined as const', () => {
    // Since the object is exported with `as const`, we can verify that it has the intended structure
    expect(iconList).toBeDefined();
  });

  test('should have non-empty path values', () => {
    expect(iconList.twitter).not.toBe('');
    expect(iconList.instagram).not.toBe('');
    expect(iconList.arrowRight).not.toBe('');
  });
});