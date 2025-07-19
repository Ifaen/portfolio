import puppeteer from "puppeteer";
import { execSync } from "child_process";
import { pxToMm } from "../utils";

const LANGUAGES = ["en", "es"];

async function launchBrowser() {
  let chromiumPath: string;

  try {
    chromiumPath = execSync("which chromium").toString().trim();
  } catch {
    throw new Error(
      "Could not find 'chromium'. Is it installed in your dev shell?"
    );
  }

  return puppeteer.launch({
    executablePath: chromiumPath,
    headless: true,
  });
}

async function generatePDF(lang: string) {
  const browser = await launchBrowser();
  const page = await browser.newPage();

  await page.goto(`${import.meta.env.VITE_URL}/cv`, {
    waitUntil: "networkidle0",
  });

  // Set the language using your context
  await page.evaluate((lang) => {
    window.localStorage.setItem("language", lang);
  }, lang);

  // Reload page
  await page.reload({ waitUntil: "networkidle0" });

  // Isolate cv-content
  await page.evaluate(() => {
    const cv = document.getElementById("cv-content");
    document.body.innerHTML = "";
    document.body.appendChild(cv!.cloneNode(true));
  });

  await page.pdf({
    path: `public/certificates/${lang}/Santiago-Fuentes-CV.pdf`,
    width: `${pxToMm(1200)}mm`,
    height: `${pxToMm(1694)}mm`,
    printBackground: true,
  });

  await browser.close();
}

(async () => {
  for (const lang of LANGUAGES) {
    await generatePDF(lang);
    console.log(`✔ PDF generated for ${lang}`);
  }
})();
