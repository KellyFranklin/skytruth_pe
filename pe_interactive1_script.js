const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 650 - margin.left - margin.right;
const height = 717 - margin.top - margin.bottom;

const svg = d3
  .select('#interactive1')
  .append('svg')
  .attr(
    'viewBox',
    `0 0 ${width + margin.left + margin.right} ${
      height + margin.top + margin.bottom
    }`
  )
  .attr('preserveAspectRatio', 'xMinYMin');

const g = svg.append('g');

const interactiveBkgImage = g
  .append('svg:image')
  .attr('xlink:href', 'https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/interactive1_bkg.jpg')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 650)
  .attr('height', 717);

const Regions = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Regions.png')
  .attr('x', 12)
  .attr('y', 8.5)
  .attr('width', 626)
  .attr('height', 725)
  .attr('opacity', 0.6) //0.6
  .attr('class', 'areas_button regions land');

const Regions_line = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Regions_outline.png')
  .attr('x', 12)
  .attr('y', 8.5)
  .attr('width', 626)
  .attr('height', 725)
  .attr('opacity', 1)
  .attr('class', 'areas_button regions');

const regions_text1 = g
  .append('text')
  .attr('x', 255)
  .attr('y', 245)
  .text('MIMAROPA')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label regions')
  .attr('opacity', 1);

const regions_text2 = g
  .append('text')
  .attr('x', 355)
  .attr('y', 500)
  .text('WESTERN VISAYAS')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label regions')
  .attr('opacity', 1);

const regions_text3 = g
  .append('text')
  .attr('x', 520)
  .attr('y', 81)
  .text('CALABARZON')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label regions')
  .attr('opacity', 1); 

const Provinces = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Provinces.png')
  .attr('x', 12)
  .attr('y', 100)
  .attr('width', 507)
  .attr('height', 633)
  .attr('opacity', 0) //0.7
  .attr('class', 'areas_button provinces land');

const Provinces_outline = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Provinces_outline.png')
  .attr('x', 12)
  .attr('y', 100)
  .attr('width', 507)
  .attr('height', 633)
  .attr('opacity', 0)
  .attr('class', 'areas_button provinces');

const provinces_text1 = g
  .append('text')
  .attr('x', 270)
  .attr('y', 220)
  .text('ORIENTAL')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label provinces')
  .attr('opacity', 0);

const provinces_text2 = g
  .append('text')
  .attr('x', 270.5)
  .attr('y', 240)
  .text('MINDORO')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label provinces')
  .attr('opacity', 0);

const provinces_text3 = g
  .append('text')
  .attr('x', 200)
  .attr('y', 551)
  .text('PALAWAN')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label provinces')
  .attr('opacity', 0);

const provinces_text4 = g
  .append('text')
  .attr('x', 398)
  .attr('y', 367)
  .text('ANTIQUE')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label provinces')
  .attr('opacity', 0);

const provinces_text5 = g
  .append('text')
  .attr('x', 252)
  .attr('y', 120)
  .text('BATANGAS')
  .attr('fill', 'white')
  .attr('class', 'areas_button interactive1_label provinces')
  .attr('opacity', 0);

const Municipalities = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Municipalities.png')
  .attr('x', 226.4)
  .attr('y', 137.6)
  .attr('width', 223.5)
  .attr('height', 313)
  .attr('opacity', 0) //0.85
  .attr('class', 'areas_button municipalities land');

const Municipalities_outline = g
  .append('svg:image')
  .attr('xlink:href','https://raw.githubusercontent.com/KellyFranklin/skytruth_pe/main/Municipalities_outline.png')
  .attr('x', 226.4)
  .attr('y', 137.6)
  .attr('width', 223.5)
  .attr('height', 313)
  .attr('opacity', 0)
  .attr('class', 'areas_button municipalities');

const municipalities_text1 = g
  .append('text')
  .attr('x', 292)
  .attr('y', 220)
  .text('15 municipalities in')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_lightLabel municipalities')
  .attr('opacity', 0);

const municipalities_text2 = g
  .append('text')
  .attr('x', 292)
  .attr('y', 240)
  .text('ORIENTAL')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_label municipalities')
  .attr('opacity', 0);

const municipalities_text3 = g
  .append('text')
  .attr('x', 292)
  .attr('y', 260)
  .text('MINDORO')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_label municipalities')
  .attr('opacity', 0);

const municipalities_text4 = g
  .append('text')
  .attr('x', 290)
  .attr('y', 100)
  .text('3 municipalities in')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_lightLabel municipalities')
  .attr('opacity', 0);

const municipalities_text5 = g
  .append('text')
  .attr('x', 290)
  .attr('y', 120)
  .text('BATANGAS')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_label municipalities')
  .attr('opacity', 0);

const municipalities_text6 = g
  .append('text')
  .attr('x', 210)
  .attr('y', 325)
  .text('1 municipality in')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_lightLabel municipalities')
  .attr('opacity', 0);

const municipalities_text7 = g
  .append('text')
  .attr('x', 210)
  .attr('y', 345)
  .text('ANTIQUE')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_label municipalities')
  .attr('opacity', 0);

const municipalities_text8 = g
  .append('text')
  .attr('x', 330)
  .attr('y', 505)
  .text('2 municipalities in')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_lightLabel municipalities')
  .attr('opacity', 0);

const municipalities_text9 = g
  .append('text')
  .attr('x', 330)
  .attr('y', 525)
  .text('PALAWAN')
  .attr('fill', 'white')
  .attr('text-anchor','middle')
  .attr('class', 'areas_button interactive1_label municipalities')
  .attr('opacity', 0);

const municipalities_line1 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 370)
  .attr("y1", 138)
  .attr("x2", 370)
  .attr("y2", 164)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line2 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 370)
  .attr("y1", 138)
  .attr("x2", 380)
  .attr("y2", 138)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line3 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 370)
  .attr("y1", 164)
  .attr("x2", 380)
  .attr("y2", 164)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line4 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 290)
  .attr("y1", 150.5)
  .attr("x2", 370)
  .attr("y2", 150.5)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line5 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 290)
  .attr("y1", 128)
  .attr("x2", 290)
  .attr("y2", 150.5)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line10 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 330)
  .attr("y1", 460)
  .attr("x2", 330)
  .attr("y2", 486)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line11 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 420)
  .attr("y1", 445)
  .attr("x2", 420)
  .attr("y2", 460)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line12 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 230)
  .attr("y1", 445)
  .attr("x2", 230)
  .attr("y2", 460)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line13 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 230)
  .attr("y1", 460)
  .attr("x2", 420)
  .attr("y2", 460)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line14 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 272)
  .attr("y1", 320)
  .attr("x2", 410)
  .attr("y2", 320)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line15 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 410)
  .attr("y1", 300)
  .attr("x2", 410)
  .attr("y2", 340)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line16 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 410)
  .attr("y1", 300)
  .attr("x2", 420)
  .attr("y2", 300)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);

const municipalities_line17 = g
  .append('line')
  .style("stroke", "white")
  .style("stroke-width", 1)
  .attr("x1", 410)
  .attr("y1", 340)
  .attr("x2", 420)
  .attr("y2", 340)
  .attr('class', 'areas_button municipalities')
  .attr('opacity', 0);


const interactive1buttons = document.getElementsByClassName('interactive1_button');
const buttons1array = [].slice.call(interactive1buttons);
const areasAll = document.getElementsByClassName('areas_button');
const areasArray = [].slice.call(areasAll);

// console.log(areasArray);

buttons1array.forEach(button => {
  button.addEventListener("click", e => {
    let buttonID = button.id;
    let area = buttonID.slice(buttonID.indexOf('_') +1);

    if (button.classList.contains('pe_button_active')) {
    } else {
      let selectedButtonClass = document.getElementsByClassName('pe_button_active');
      let selectedButtonArray = [].slice.call(selectedButtonClass);
      let selectedButton = selectedButtonArray[0];

      selectedButton.classList.toggle('pe_button_active');
      button.classList.toggle('pe_button_active');

      areasArray.forEach(element => {
        element.style.opacity = 0;
      })

      let areasSelected = document.getElementsByClassName(area);
      let areasSelectedArray = [].slice.call(areasSelected);

      setTimeout(() => {
        areasSelectedArray.forEach(element => {
          if (element.classList.contains('land')) {
            if (element.classList.contains('municipalities')) {
              element.style.opacity = 0.8;
            } else {
              element.style.opacity = 0.6;
            }
          } else {
            element.style.opacity = 1;
          };
        })
      }, 500)
    }
  })
})
