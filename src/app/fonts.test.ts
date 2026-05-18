// Mock the next/font/local module before importing the fonts
jest.mock('next/font/local', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    className: 'mock-font-class',
    variable: '--mock-variable',
    style: {},
  })),
}));

import { ibmPlexSans, ibmPlexMono } from './fonts';

describe('Font Configuration Tests', () => {
  describe('ibmPlexSans', () => {
    it('should be defined', () => {
      expect(ibmPlexSans).toBeDefined();
    });

    it('should have className property', () => {
      expect(ibmPlexSans.className).toBeDefined();
      expect(typeof ibmPlexSans.className).toBe('string');
    });

    it('should have variable property', () => {
      expect(ibmPlexSans.variable).toBeDefined();
      expect(typeof ibmPlexSans.variable).toBe('string');
    });

    it('should have style property as an object', () => {
      expect(ibmPlexSans.style).toBeDefined();
      expect(typeof ibmPlexSans.style).toBe('object');
    });
  });

  describe('ibmPlexMono', () => {
    it('should be defined', () => {
      expect(ibmPlexMono).toBeDefined();
    });

    it('should have className property', () => {
      expect(ibmPlexMono.className).toBeDefined();
      expect(typeof ibmPlexMono.className).toBe('string');
    });

    it('should have variable property', () => {
      expect(ibmPlexMono.variable).toBeDefined();
      expect(typeof ibmPlexMono.variable).toBe('string');
    });

    it('should have style property as an object', () => {
      expect(ibmPlexMono.style).toBeDefined();
      expect(typeof ibmPlexMono.style).toBe('object');
    });
  });

  describe('Font properties comparison', () => {
    it('both fonts should have similar structure', () => {
      expect(ibmPlexSans).toHaveProperty('className');
      expect(ibmPlexMono).toHaveProperty('className');
      expect(ibmPlexSans).toHaveProperty('variable');
      expect(ibmPlexMono).toHaveProperty('variable');
      expect(ibmPlexSans).toHaveProperty('style');
      expect(ibmPlexMono).toHaveProperty('style');
    });

    it('both fonts should have string className values', () => {
      expect(typeof ibmPlexSans.className).toBe('string');
      expect(typeof ibmPlexMono.className).toBe('string');
    });
  });
});