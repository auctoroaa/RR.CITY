import assert from 'node:assert/strict';
import test from 'node:test';
import { formatSiteTitle, SITE_NAME } from './site';

test('uses the site name when no section is provided', () => {
  assert.equal(formatSiteTitle(), SITE_NAME);
});

test('includes a section name', () => {
  assert.equal(formatSiteTitle('Dashboard'), 'Dashboard | RR City');
});
