import { manSVG, womanSVG } from "../svg";
const fs = require('fs');

export function calculatePercentage(data: any) {
  let total = 0;

  let fullData: { total: number; [key: string]: number } = {
    total: 0,
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      total += data[key];
    }
  }

  fullData.total = total;

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const percentage = (data[key] / total) * 100;
      fullData[`${key.charAt(0).toUpperCase() + key.slice(1)}`] = parseFloat(percentage.toFixed(1));
    }
  }
  return fullData;
}

export async function generateIcons(female: number, male: number): Promise<string> {
  const teamFemale = Math.round(female / 10)
  const teamMale = Math.round(male / 10)
  
  const base64Female = Buffer.from(womanSVG).toString("base64");
  const base64Male = Buffer.from(manSVG).toString("base64");

  let html = '<div style="display: flex; flex-wrap: wrap; ">';

  for (let i = 0; i < teamFemale + teamMale; i++) {
    if (i > 0 && i % 5 === 0) {
      html +=
        '</div><div style="display: flex; flex-wrap: wrap; margin-top: 30px;">';
    }

    const imageSize = i < teamMale ? "30px" : "30px"; 
    const base64Image = i < teamMale ? base64Male : base64Female;

    html += `<img style="margin-right: 3px; transform: scale(1.5); width: ${imageSize}; height: ${imageSize};" src="data:image/svg+xml;base64,${base64Image}" alt="Image">`;
  }

  html += "</div>";
  return html;
}