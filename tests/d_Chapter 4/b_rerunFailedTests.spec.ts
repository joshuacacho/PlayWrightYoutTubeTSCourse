import { test, expect } from "@playwright/test";

test("Rerun Failed Tests 1", async ({ page, context, browser }) => {

  expect(true).toBe(true);

});

test("Rerun Failed Tests 2", async ({ page, context, browser }) => {
   expect(true).toBe(true);

});

test("Rerun Failed Tests 3", async ({ page, context, browser }) => {
   expect(true).toBe(false);

});