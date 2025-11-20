import { test } from "@playwright/test";
import CryptoJS from "crypto-js";
import { encryptData, decryptData } from "../util/encrypt-decrypt";
import securedata from "../testdata/securedata.json";

test("Encrypt Decrypt Sensitive Data in Playwright", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // const encryptedUserName = CryptoJS.AES.encrypt('standard_user', 'wishinfinite').toString()
  // const encryptedUserName = encryptData('standard_user');
  // console.log("Encrypted Username - ", encryptedUserName);
  // console.log("Encrypted Password - ", CryptoJS.AES.encrypt("secret_sauce", "wishinfinite").toString())
  const encryptedUame = "U2FsdGVkX186ANaOSfPlZ9qpwfkAOs2lzs+e4kdH6t0=";
  const encryptedPwd = "U2FsdGVkX1+o+85F0U5RjrvzHzOI3YySR7CA9nfwceo=";

  const SecretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
  const decryptedUname = CryptoJS.AES.decrypt(
    encryptedUame,
    SecretKey
  ).toString(CryptoJS.enc.Utf8);
  const decryptPwd = CryptoJS.AES.decrypt(encryptedPwd, SecretKey).toString(
    CryptoJS.enc.Utf8
  );
  //   const decryptedUname = decryptData(encryptedUame);
  //   const decryptPwd = decryptData(encryptedPwd);
  //   console.log(decryptedUname + " - " + decryptPwd);
  await page.locator('[data-test="username"]').fill(decryptedUname);
  await page.locator('[data-test="password"]').fill(decryptPwd);
  await page.locator('[data-test="login-button"]').click();
});

test("Encrypt Decrypt 2", async ({ page }) => {
  const encUname: any = process.env.encryptedUame;
  const decryptedUname = decryptData(encUname);
  const encPwd: any = process.env.encryptedPwd;
  const decryptPwd = decryptData(encPwd);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(decryptedUname);
  await page.locator('[data-test="password"]').fill(decryptPwd);
  await page.locator('[data-test="login-button"]').click();
});

test("Encrypt Decrypt 3", async ({ page }) => {
  const decryptedUname = decryptData(securedata.encryptedUame);
  const decryptPwd = decryptData(securedata.encryptedPwd);
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(decryptedUname);
  await page.locator('[data-test="password"]').fill(decryptPwd);
  await page.locator('[data-test="login-button"]').click();
});
