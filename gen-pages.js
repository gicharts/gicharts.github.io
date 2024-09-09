import * as fs from 'fs';

const genMarkdown = (deffile) => {
    const defjson = fs.readFileSync("charts/" + deffile);
    const def = JSON.parse(defjson);

    const chartVegaDef = {...def.vega_def};
    chartVegaDef.width = def.width;
    chartVegaDef.height = def.height;
    chartVegaDef.data = def.data;
    let chartVegaDefString = JSON.stringify(chartVegaDef, 0, 4);
    for(const h of def.report_headers){
        chartVegaDefString = chartVegaDefString.replaceAll(h.replace, h.name)
    }


    return `
# ${def.name}
${def.description}
- **Report category:** ${def.report_category}

- **Required report headers:**
${def.report_headers.map( h => "    - **" + h.type + ":** " + h.name + "").join("\n")}
\`\`\`js
    import * as vega from "npm:vega";
    import * as vegaLite from "npm:vega-lite";
    import * as vegaLiteApi from "npm:vega-lite-api";

    const vl = vegaLiteApi.register(vega, vegaLite, {theme: "dark"});
\`\`\`
<div style="text-align: center; width: 100%; max-width: 960px; margin-bottom: 2rem">
    <div id="vis"></div>
</div>

${def.tips.map( t => `<div class="tip">${t}</div>`).join("\n")}

\`\`\`js 
    const {default: embed} = await import("npm:vega-embed@6");

    embed('#vis',
        ${chartVegaDefString}
    ,
        {"theme": "carbong90"}
    )
\`\`\`

## GI chart code definition
\`\`\`json
    ${JSON.stringify(def.vega_def, 0, 4)}
\`\`\`

`
}

let charts = [];

for (let f of fs.readdirSync("charts")) {
    console.log("Processing: " + f);
    fs.writeFileSync("src/examples/" + f.split('.')[0] + ".md", genMarkdown(f))
    charts.push(f)
}

fs.writeFileSync("src/index.md", `---
toc: false
---

<div class="hero">
  <h1>Guardium Insights charts</h1>
  <p>A resource for Guardium Insights charts examples. Copy and adjust the definitions to make them your own.
  This is a Guardium community project. To contribute an example, see the <a href="https://github.com/gicharts/gicharts.github.io/blob/main/CONTRIBUTING.md">contributing page</a> on the github repository.</p>
</div>

<div class="grid grid-cols-3">
  ${charts.map(c => {
    const defjson = fs.readFileSync("charts/" + c);
    const def = JSON.parse(defjson);
    const id = c.split('.')[0];
    return `<div class="card">
        <a href="examples/${id}">
            <h2>${def.name}</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/${id}.png"/>
        </a>
    </div>`
  }).join("\n")}
</div>

<style>

.card {
    text-align: center;
  }
  
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
`
)

