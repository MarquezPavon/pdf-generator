import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import generateHtml from "./html.service";
import GeneratePdfParams from "../interface/json.interface";

export default async function generatePdf({ archivo }: GeneratePdfParams) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 800,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: false,
      isLandscape: false,
    },
  });

  const page = await browser.newPage();

  
  const html = await generateHtml({ archivo});

  await page.setContent(html, { waitUntil: ["load", "networkidle0" ]});

  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    
  });

  const pdfPath = path.join(__dirname, "..", "output.pdf");
  fs.writeFileSync(pdfPath, pdf);

  await browser.close();

  return pdf;
}
