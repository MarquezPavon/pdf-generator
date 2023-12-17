import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import GeneratePdfParams from "../interface/json.interface";

const canvas = new ChartJSNodeCanvas({ width: 400, height: 400 });

export default async function generateGrafic(
  data: GeneratePdfParams["archivo"]["financials"]
): Promise<string> {
  const labels = Object.keys(data.clients);
  const dataFull = Object.values(data.clients);

  return `<script>      
  const grafica = document.getElementById("grafica")
  const myPieChart = new Chart(grafica, {
    type: 'doughnut',
    data: {
      labels: ${JSON.stringify(labels)},
      datasets: [{
        label: "Resultado de elecciones estudiantiles",
        data: ${JSON.stringify(dataFull)},
        backgroundColor: ["#eb6c33", "#0855a3", "#5ec3d5"]
      }]
    },
    options: {
        responsive: true, 
        maintainAspectRatio: false,
        
        animation: {
            duration: 0,
          }
    }
  })
    </script>`;
}
