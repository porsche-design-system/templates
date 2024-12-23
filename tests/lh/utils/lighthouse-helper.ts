import * as fs from 'node:fs';
import { type Browser, chromium, expect as playwrightExpect, test as playwrightTest } from '@playwright/test';
import getPort from 'get-port';
import lighthouse from 'lighthouse';

export const test = playwrightTest.extend<{
  port: number;
  browser: Browser;
  lighthouseDesktopAudit: () => Promise<{
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  }>;
  lighthouseMobileAudit: () => Promise<{
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  }>;
}>({
  port: [
    async ({}, use) => {
      // Assign a unique port for each playwright worker to support parallel tests
      const port = await getPort();
      await use(port);
    },
    { scope: 'worker' },
  ],
  browser: [
    async ({ port }, use) => {
      const browser = await chromium.launch({
        args: [`--remote-debugging-port=${port}`],
      });
      await use(browser);
    },
    { scope: 'worker' },
  ],
  lighthouseMobileAudit: async ({ page, port }, use, testInfo) => {
    const audit = async () => {
      const {
        report,
        lhr: {
          categories: {
            performance: { score: performance },
            accessibility: { score: accessibility },
            'best-practices': { score: bestPractices },
            seo: { score: seo },
          },
        },
      } = await lighthouse(
        page.url(),
        {
          logLevel: 'info',
          output: 'html',
          port,
        },
        {
          extends: 'lighthouse:default',
          settings: {
            formFactor: 'mobile',
          },
        }
      );

      fs.mkdirSync(testInfo.outputDir, { recursive: true });
      fs.writeFileSync(`${testInfo.outputDir}/lighthouse.html`, report as string);

      return {
        performance: performance * 100,
        accessibility: accessibility * 100,
        bestPractices: bestPractices * 100,
        seo: seo * 100,
      };
    };

    await use(audit);
  },
  lighthouseDesktopAudit: async ({ page, port }, use, testInfo) => {
    const audit = async () => {
      const {
        report,
        lhr: {
          categories: {
            performance: { score: performance },
            accessibility: { score: accessibility },
            'best-practices': { score: bestPractices },
            seo: { score: seo },
          },
        },
      } = await lighthouse(
        page.url(),
        {
          logLevel: 'info',
          output: 'html',
          port,
        },
        {
          extends: 'lighthouse:default',
          settings: {
            formFactor: 'desktop',
            throttling: {
              rttMs: 40,
              throughputKbps: 10240,
              cpuSlowdownMultiplier: 1,
              requestLatencyMs: 0,
              downloadThroughputKbps: 0,
              uploadThroughputKbps: 0,
            },
            screenEmulation: {
              mobile: false,
              width: 1280,
              height: 800,
              deviceScaleFactor: 1,
              disabled: false,
            },
          },
        }
      );

      fs.mkdirSync(testInfo.outputDir, { recursive: true });
      fs.writeFileSync(`${testInfo.outputDir}/lighthouse.html`, report as string);

      return {
        performance: performance * 100,
        accessibility: accessibility * 100,
        bestPractices: bestPractices * 100,
        seo: seo * 100,
      };
    };

    await use(audit);
  },
});

export const expect = playwrightExpect;
