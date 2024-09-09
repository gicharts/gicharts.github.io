
# User scatterplot showing number of connections and SQL
Scatterplot showing a correlation relating to connections and SQL. Answers the question 'do users that create more connections execute more SQL.'
- **Report category:** Audit activity

- **Required report headers:**
    - **Primary category:** DB user
    - **Primary value:** Sum (Total count)
    - **Secondary value:** DISTINCT (Session ID)
```js
    import * as vega from "npm:vega";
    import * as vegaLite from "npm:vega-lite";
    import * as vegaLiteApi from "npm:vega-lite-api";

    const vl = vegaLiteApi.register(vega, vegaLite, {theme: "dark"});
```
<div style="text-align: center; width: 100%; max-width: 960px; margin-bottom: 2rem">
    <div id="vis"></div>
</div>



```js 
    const {default: embed} = await import("npm:vega-embed@6");

    embed('#vis',
        {
    "description": "Scatterplot - log scale",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": [
            {
                "DB user": "RDSADMIN",
                "Sum (Total count)": "26037059",
                "DISTINCT (Session ID)": "2976603"
            },
            {
                "DB user": "JESSICA",
                "Sum (Total count)": "5036394",
                "DISTINCT (Session ID)": "2280154"
            },
            {
                "DB user": "APPUSER",
                "Sum (Total count)": "1590940",
                "DISTINCT (Session ID)": "390568"
            },
            {
                "DB user": "MAURICIO",
                "Sum (Total count)": "335534",
                "DISTINCT (Session ID)": "165447"
            },
            {
                "DB user": "DANIEL",
                "Sum (Total count)": "335372",
                "DISTINCT (Session ID)": "165446"
            },
            {
                "DB user": "POLLY",
                "Sum (Total count)": "122290",
                "DISTINCT (Session ID)": "8586"
            },
            {
                "DB user": "SALLY",
                "Sum (Total count)": "115142",
                "DISTINCT (Session ID)": "128"
            },
            {
                "DB user": "DEVAN",
                "Sum (Total count)": "105450",
                "DISTINCT (Session ID)": "128"
            },
            {
                "DB user": "DOUGLAS",
                "Sum (Total count)": "102085",
                "DISTINCT (Session ID)": "133"
            },
            {
                "DB user": "DAVID",
                "Sum (Total count)": "98981",
                "DISTINCT (Session ID)": "134"
            },
            {
                "DB user": "DON",
                "Sum (Total count)": "98814",
                "DISTINCT (Session ID)": "131"
            },
            {
                "DB user": "TANSEL",
                "Sum (Total count)": "98800",
                "DISTINCT (Session ID)": "131"
            },
            {
                "DB user": "MATT",
                "Sum (Total count)": "97883",
                "DISTINCT (Session ID)": "131"
            },
            {
                "DB user": "TONY",
                "Sum (Total count)": "97278",
                "DISTINCT (Session ID)": "128"
            },
            {
                "DB user": "BILL",
                "Sum (Total count)": "95869",
                "DISTINCT (Session ID)": "128"
            },
            {
                "DB user": "USMAN",
                "Sum (Total count)": "86893",
                "DISTINCT (Session ID)": "131"
            },
            {
                "DB user": "ENRIQUE",
                "Sum (Total count)": "85824",
                "DISTINCT (Session ID)": "131"
            },
            {
                "DB user": "JOSHUA",
                "Sum (Total count)": "83398",
                "DISTINCT (Session ID)": "134"
            },
            {
                "DB user": "ANDREW",
                "Sum (Total count)": "83356",
                "DISTINCT (Session ID)": "135"
            },
            {
                "DB user": "RICK",
                "Sum (Total count)": "80590",
                "DISTINCT (Session ID)": "127"
            },
            {
                "DB user": "GDM_USER",
                "Sum (Total count)": "72051",
                "DISTINCT (Session ID)": "4118"
            },
            {
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "41392",
                "DISTINCT (Session ID)": "8483"
            },
            {
                "DB user": "JOE",
                "Sum (Total count)": "12160",
                "DISTINCT (Session ID)": "855"
            },
            {
                "DB user": "RODRIGO",
                "Sum (Total count)": "9500",
                "DISTINCT (Session ID)": "950"
            },
            {
                "DB user": "JOED",
                "Sum (Total count)": "4085",
                "DISTINCT (Session ID)": "665"
            },
            {
                "DB user": "HIGHRISK",
                "Sum (Total count)": "3990",
                "DISTINCT (Session ID)": "380"
            },
            {
                "DB user": "PENTESTER",
                "Sum (Total count)": "1120",
                "DISTINCT (Session ID)": "160"
            },
            {
                "DB user": "SYSTEM",
                "Sum (Total count)": "960",
                "DISTINCT (Session ID)": "32"
            },
            {
                "DB user": "NULL",
                "Sum (Total count)": "527",
                "DISTINCT (Session ID)": "268"
            },
            {
                "DB user": "ROOT",
                "Sum (Total count)": "400",
                "DISTINCT (Session ID)": "80"
            },
            {
                "DB user": "GUARDIUM",
                "Sum (Total count)": "252",
                "DISTINCT (Session ID)": "8"
            },
            {
                "DB user": "ADMIN",
                "Sum (Total count)": "111",
                "DISTINCT (Session ID)": "21"
            },
            {
                "DB user": "POSTGRES",
                "Sum (Total count)": "69",
                "DISTINCT (Session ID)": "51"
            },
            {
                "DB user": "FAKEUSER",
                "Sum (Total count)": "8",
                "DISTINCT (Session ID)": "8"
            },
            {
                "DB user": "MARILENE",
                "Sum (Total count)": "1",
                "DISTINCT (Session ID)": "1"
            }
        ]
    },
    "width": 400,
    "height": 400,
    "mark": {
        "type": "circle",
        "color": "#f1c21b"
    },
    "encoding": {
        "y": {
            "field": "Sum (Total count)",
            "type": "quantitative",
            "title": "Number of SQL (log scale)",
            "axis": {
                "grid": false
            },
            "scale": {
                "type": "log"
            }
        },
        "x": {
            "field": "DISTINCT (Session ID)",
            "type": "quantitative",
            "title": "Number of connections (log scale)",
            "axis": {
                "grid": false
            },
            "scale": {
                "type": "log"
            }
        }
    }
}
    ,
        {"theme": "carbong90"}
    )
```

## GI chart code definition
```json
    {
    "description": "Scatterplot - log scale",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "name": "chartData"
    },
    "width": "container",
    "height": "container",
    "mark": {
        "type": "circle",
        "color": "#f1c21b"
    },
    "encoding": {
        "y": {
            "field": "$primary_measure",
            "type": "quantitative",
            "title": "Number of SQL (log scale)",
            "axis": {
                "grid": false
            },
            "scale": {
                "type": "log"
            }
        },
        "x": {
            "field": "$secondary_measure",
            "type": "quantitative",
            "title": "Number of connections (log scale)",
            "axis": {
                "grid": false
            },
            "scale": {
                "type": "log"
            }
        }
    }
}
```

