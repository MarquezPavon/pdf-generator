import {calculatePercentage,generateIcons,} from "../helpers/functions";
import GeneratePdfParams from "../interface/json.interface";
import generateGrafic from "./grafic.service";
import { ALF, empresa1, empresa2, empresa3, germanFlag, lean_canvas1, lean_canvas2, lean_canvas3, lean_canvas4, lean_canvas5, lean_canvas6, lean_canvas7, lean_canvas8, lean_canvas9 } from "../svg";

export default async function generateHtml({archivo,}: GeneratePdfParams): Promise<string> {
  const { contact_person, company_info, shares, financials, lean_canvas } = archivo;

  const team = await calculatePercentage(company_info.team);

  const totalFinancials = await calculatePercentage(financials.clients);

  const icons = await generateIcons(team.Male, team.Female);

  const grafic = await generateGrafic(financials);

  return `
  <!doctype html>
  <html>
  
  <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <!-- Agrega esto en la sección <head> de tu HTML -->
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  </head>
  
  <body style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto',
  'Helvetica Neue', 'Arial, sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol'; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #ffffff;
  text-align: left; background: rgb(238, 108, 50); background: linear-gradient(
  90deg,rgba(238, 108, 50, 1) 0%,rgba(1, 92, 142, 1) 100%);
  padding: 15px;">

      <!-- CABECERA -->
      <div style="background: white; border-radius: 15px; padding: 10px; display: flex; flex-direction: column;" >
          <div style="display: flex; margin-top: 10px;">
              <div style="text-align: center; border-radius: 20px; background: #0855a3; padding: 5px 10px;">
                  <p style="color: white; margin: 0;">INFORME DE EXCELENCIA INNOVADORA CEEIs CLM</p>
              </div>
              <div style= "display: flex; justify-content: end; width:340px; align-items: center; gap:5px;">
              <img style="width:45px;" src="${empresa1}"></p>
              <img style="width:45px;" src="${empresa2}"></p>
              <img style="width:45px;" src="${empresa3}"></p>

              </div>
          </div>
          <h2 style="color: #0855a3; margin-top: 15px; text-align: center; margin-bottom: 0;">CUESTIONARIO DE INNOVACIÓN</h2>
      </div>
      <!-- FIN CABECERA -->
  
      <h2 style="color: white; text-align: center; margin: 20px 0 0 0;">INFORMACIÓN GENERAL</h2>
  
      <!-- PERSONA DE CONTACTO -->
      <div style="background: white; border-radius: 15px; margin-bottom: 15px; padding: 15px;">
          <h5 style="color: #eb6c33; font-weight: bold; margin: 0; font-size: 18px;">PERSONA DE CONTACTO</h5>
          <div style="display: flex;">
              <div style="width: 32%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Nombre y apellidos</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    contact_person.name
                  }  ${contact_person.last_name}</p>
              </div>
              <div style="width: 16%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Cargo</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    contact_person.role
                  }</p>
              </div>
              <div style="width: 27%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Teléfono</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    contact_person.phone
                  }</p>
              </div>
              <div style="width: 25%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Correo electrónico</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    contact_person.email
                  }</p>
              </div>
          </div>
      </div>
      <!-- FIN PERSONA DE CONTACTO -->
  
      <!-- DATOS DE LA EMPRESA -->
      <div style="background: white; padding: 15px; border-radius: 15px; margin-bottom: 15px;">
          <h5 style="color: #eb6c33; font-weight: bold; margin: 0; font-size: 18px;">DATOS DE LA EMPRESA</h5>
          <img style="width:50px; height:30px;position: absolute; translate: 680px -30px" src="${ALF}" alt="Anillos SVG">

          <div style="display: flex; margin-bottom: 15px;">
              <div style="width: 23%;">
                  <p style="color: #0855a3; font-weight: bold; font-size: 18px; margin: 0;">CIF</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.cif
                  }</p>
              </div>
              <div style="width: 51%;">
                  <p style="color: #0855a3; font-weight: bold; font-size: 18px; margin: 0;">Razón social</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.business_name
                  }</p>
              </div>
              <div style="width: 23%;">
                  <p style="color: #0855a3; font-weight: bold; font-size: 18px; margin: 0;">Nombre comercial</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.commercial_name
                  }</p>
              </div>
          </div>
          <div style="display: flex; width: 100%;">
              <div style="width: 23%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Dirección</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.address
                  }</p>
              </div>
              <div style="width: 26%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">CP</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.cp
                  }</p>
              </div>
              <div style="width: 25%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Provincia</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.province
                  }</p>
              </div>
              <div style="width: 25%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Localidad</p>
                  <p style=" color: #000000; margin: 0; font-size: 18px;">${
                    company_info.cirty
                  }</p>
              </div>
          </div>
          <hr class="my-3">
          <div style="display: flex;">
              <div style="width: 23%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Telefóno</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.phone
                  }</p>
              </div>
              <div style="width: 26%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Página web</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.web
                  }</p>
              </div>
              <div style="width: 25%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Correo electrónico</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.email
                  }</p>
              </div>
              <div style="width: 20%;">
                  <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Sector</p>
                  <p style="color: #000000; margin: 0; font-size: 18px;">${
                    company_info.sector
                  }</p>
              </div>
          </div>
          <hr style="margin: 15px 0;">
          <div style="display: flex; width: 100%; padding: 0;">
              <div style="display: flex; flex-direction: column; padding: 0; margin: 0; width: 80%;">
                  <div style="display: flex; margin-bottom: 15px;">
                      <div style="width: 61%;">
                          <p style="color: #0855a3; margin: 0; font-size: 18px; font-weight: bold;">Actividad principal de
                              la empresa:</p>
                          <p class="text-dark m-0 fs-18" style="color: #000000; margin: 0; font-size: 18px;">${
                            company_info.main_activity
                          }</p>
                      </div>
                      <div style="width: 20%;">
                          <p style="color: #0855a3; margin: 0; font-size: 18px; font-weight: bold;">Equipo</p>
                          <p style="color: #000000; margin: 0; font-size: 18px;">${
                            team.total
                          }</p>
                      </div>
                  </div>
                  <div style="display: flex; margin: 0; padding: 0; width: 100%;">
                      <div style="padding: 0; width: 61%;">
                          <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">CNAE:</p>
                          <p style="color: #000000; margin: 0; font-size: 18px;">${
                            company_info.cnae
                          }</p>
                      </div>
                      <div style="padding: 0; width: 20%;">
                          <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">Hombres</p>
                          <p style="color: #000000; margin: 0; font-size: 18px;">${
                            team.Male
                          }%</p>
                      </div>
                      <div style="padding: 0; width: 15%; ">
                          <p style="color: #0855a3; font-weight: bold; margin: 0; font-size: 18px;">
                              Mujeres</p>
                          <p style="color: #000000; margin: 0; font-size: 18px;">${
                            team.Female
                          }%</p>
  
                      </div>
                  </div>
              </div>
              <div class="br" style="width: 20%;">
                  <div style="position: absolute; z-index:5; translate: -10% 10%">${icons}</div>
              </div>
          </div>
      </div>

      <!-- GRAFICAS -->
      <div style="display: flex; gap: 10px; height: 350px; margin-bottom: 20px">
        <!-- GRAFICA IZQUIERDA -->
        <div style="width: 45%; display: flex; flex-direction: column; background: white; padding: 15px; border-radius: 15px;">
            <h6 style="color: #eb6c33; font-weight: bold; margin: 0; font-size:18px;">PARTICIPACIÓN O ACCIONARIADO</h6>
            <p style="color: #000000; margin: 8px 0; font-size: 18px;">Privada sin participación extranjera</p>
            <div style=" height: 30px; display: flex; justify-content: space-between; align-items: center; width: 95%;">
        <div style="display: flex; width: 200px; height:20px; align-items:center ">
            <p style="color: #0855a3; margin: 0; font-size: 18px; font-weight: bold;">Inversores</p>
            <p style="color: #000000;margin: 0 0 0 10px; translate: 0 -12px; font-size: 30px">__</p>
        </div>
        <div>

            <p style="color: #0855a3; margin: 0; font-size: 18px; font-weight: bold;">Fundadores</p>
        </div>

        </div>
            <div style="display: flex; justify-content: space-between; width: 95%; margin-bottom: 5px;">
                <div style="display: flex; justify-content: center; align-items: center; height: 30px;">
                    <p style="height: 30px; color: #000000; margin: 0; font-size: 18px;">${shares.founders}% </p>
                    <p style="color: #000000; margin: 0; font-size: 30px; translate: 86.2px -17.9px; font-weight: normal; display: inline-block; transform: scaleX(-1);">/</p>
                </div>
                <div
                    style="width: 35%; height: 30px; display: flex; justify-content: space-around; align-items: center;">
                    <p style="width: 50%; height: 100%; color: #000000; margin: 0; font-size: 18px;">${shares.investors}%</p>
                    <p style="width: 40%; height: 100%; color: #000000; margin: 0; font-size: 30px; text-align: right; translate: -5px -10px;">/</p>
                </div>
            </div>
            <div style="width: 95%; height: 40px; border-radius: 20px; background-color: #5ec3d5;">
                <div style="width: ${shares.founders}%; background: #0855a3; height: 100%;border-radius: 20px;"></div>
            </div>
            <h6 style="margin:20px 0; color: #eb6c33; font-weight: bold; font-size: 17px;">GRUPO EMPRESARIAL</h6>
            <p style="color: #0855a3; margin: 0; font-size: 17px; font-weight: bold;">País donde se halla la empresa
                matriz</p>
            <p style="color: #000000; margin: 0; font-size: 18px;">${company_info.business_group.country}
               <img style="width:20px; translate: 0 5px;" src="${germanFlag}"></p>
        </div>
        <!-- FIN GRAFICA IZQUIERDA -->

        <!-- GRAFICA DERECHA -->
        <div style="width: 55%; background: white; border-radius: 15px; padding: 15px;">
            <h6 style="color: #eb6c33; font-weight: bold; font-size: 17px; margin: 0;">DATOS ECONÓNMICOS <span
                    style="font-weight: normal;">(Valorados sin incluir IVA)</span></h6>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <p style="color: #0855a3;font-weight: bold; font-size: 18px; margin: 0;">Cifra de negocios <span
                        style="font-weight: normal;">(2022)</span></p>
                <p style="color: #0855a3;font-weight: bold; font-size: 18px; margin: 0;">Clientes <span
                        style="font-weight: normal;">(2022)</span></p>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0; margin: 0; width: 84%;">
                <p style="color: #000000; font-size: 35px; margin: 0; translate: 0 -5px;">${financials.billing?.toFixed(0).slice(0, 3)}k €</p>
                <p style="color: #000000; font-size: 35px; margin: 0; translate: 0 -5px;">${totalFinancials.total}</p>
            </div>
            <hr style="margin: 0;">
            <div style="width: 370px; height: 200px; display: flex; justify-content: center;">
        <canvas id="grafica"></canvas>
    </div>
    </div>
    </div>
    <div style=" width: 10px; height: 50px; margin-top:15px; margin-bottom:20px;"></div>
      <!-- FIN GRAFICA DERECHA -->
      <!-- FIN GRAFICAS -->

      <!-- CABECERA -->
      <div style="background: white; border-radius: 15px; padding: 10px; display: flex; flex-direction: column; margin-bottom:50px; " >
          <div style="display: flex; margin-top: 10px;">
              <div style="text-align: center; border-radius: 20px; background: #0855a3; padding: 5px 10px;">
                  <p style="color: white; margin: 0;">INFORME DE EXCELENCIA INNOVADORA CEEIs CLM</p>
              </div>
              <div style= "display: flex; justify-content: end; width:340px; align-items: center; gap:5px;">
              <img style="width:45px;" src="${empresa1}"></p>
              <img style="width:45px;" src="${empresa2}"></p>
              <img style="width:45px;" src="${empresa3}"></p>

              </div>
          </div>
          <h2 style="color: #0855a3; margin-top: 15px; text-align: center; margin-bottom: 0;">CUESTIONARIO DE INNOVACIÓN</h2>
      </div>
      <!-- FIN CABECERA -->

      <div style="background: white;height: 800px; border-radius: 15px; padding: 30px; display: flex; flex-direction: column;">
        <h6 style="color: #eb6c33; font-weight: bold; font-size: 20px; margin: 0;">MODELO DE NEGOCIO - LEAN CANVAS</h6>
        <p style="color: #000000; font-size: 16px; margin: 15px 0; font-weight: bold">El comité evaluador lo examinará
            y calificará para el rating final.</p>


        <div style="border: 2px solid black;width: 703px; height: 500px; display: flex; flex-direction: column;">
            <div
                style="display: flex; width: 703px; height: 375px; border-bottom: 2px solid black; box-sizing: border-box;">
                <div style="width: 140.6px; height: 375px; border-right: 2px solid black; box-sizing: border-box;">
                    <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Socios clave</p>
                    <img style="width:25px; color:#000000; position:absolute; translate: 100px -26px" src="${lean_canvas1}" alt="">
                    <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.key_partners}</p>

                </div>
                <div style="width: 140.6px; height: 375px; border-right: 2px solid black; box-sizing: border-box;">
                    <div
                        style="width: 140.6px; height: 187.5px; border-bottom: 2px solid black; box-sizing: border-box;">
                        <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Actividad clave</p>
                    <img style="width:40px; color:#000000; position:absolute; translate: 100px -26px" src="${lean_canvas2}" alt="">
                        <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.key_activities}</p>
                    </div>
                    <div style="width: 140.6px; height: 187.5px; box-sizing: border-box;">
                        <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Recursos clave</p>
                        <img style="width:40px; color:#000000; position:absolute; translate: 100px -26px" src="${lean_canvas5}" alt="">
                        <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.key_resources}</p>
                    </div>
                </div>
                <div style="width: 140.6px; height: 375px; border-right: 2px solid black; box-sizing: border-box;">
                    <p style="color: #000000; margin: 5px 8px; font-style: italic; font-size: 12px;">Propuestas de valor</p>
                    <img style="width:25px; color:#000000; position:absolute; translate: 113px -26px" src="${lean_canvas3}" alt="">
                </div>
                <div style="width: 140.6px; height: 375px; border-right: 2px solid black; box-sizing: border-box;">
                    <div
                        style="width: 140.6px; height: 187.5px; border-bottom: 2px solid black; box-sizing: border-box;">
                        <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Relaciones con los clientes</p>
                        <img style="width:50px; color:#000000; position:absolute; translate: 98px -45px" src="${lean_canvas4}" alt="">
                    <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.clients_relations}</p>

                    </div>
                    <div style="width: 140.6px; height: 187.5px; box-sizing: border-box;">
                        <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Canales</p>
                        <img style="width:50px; color:#000000; position:absolute; translate: 80px -25px" src="${lean_canvas6}" alt="">

                    </div>
                </div>
                <div style="width: 140.6px; height: 375px; box-sizing: border-box;">
                    <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Segmentos de <br> clientes</p>
                    <img style="width:25px; color:#000000; position:absolute; translate: 110px -40px" src="${lean_canvas7}" alt="">

                    <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.clients_segments}</p>

                </div>
            </div>
            <div style="display: flex; width: 703px; height: 125px; box-sizing: border-box;">
                <div style="width: 351.5px; height: 125px; box-sizing: border-box;">
                    <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Extructuras de costes</p>
                    <img style="width:40px; color:#000000; position:absolute; translate: 310px -25px" src="${lean_canvas8}" alt="">
                    <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${lean_canvas.costs}</p>

                </div>
                <div style="width: 351.5px; height: 125px; box-sizing: border-box; border-left: 2px solid black;">
                    <p style="color: #000000; margin: 5px 10px; font-style: italic; font-size: 12px;">Líneas de ingresos</p>
                    <img style="width:40px; color:#000000; position:absolute; translate: 310px -25px" src="${lean_canvas9}" alt="">
                    <p style="color: #0855a3; margin: 5px 10px; font-size: 12px;">${
                      lean_canvas.incomes
                    }</p>

                </div>
            </div>
        </div>
    </div>
      
      </div>
      
    ${grafic}
        </body>
        </html>`;
}
