
# Top 10 users by connection count
Top 9 users by connection count with an entry called 'All Others' containing the number of connections made by all other users.
- **Report category:** Database activity

- **Required report headers:**
    - **Primary category:** DB user
    - **Primary value:** Count
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
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Stacked bar chart",
    "data": {
        "values": [
            {
                "DB user": "RDSADMIN",
                "Count": "3070609"
            },
            {
                "DB user": "JESSICA",
                "Count": "2274360"
            },
            {
                "DB user": "APPUSER",
                "Count": "390788"
            },
            {
                "DB user": "MAURICIO",
                "Count": "165127"
            },
            {
                "DB user": "DANIEL",
                "Count": "165123"
            },
            {
                "DB user": "BADGUY",
                "Count": "25300"
            },
            {
                "DB user": "POLLY",
                "Count": "19527"
            },
            {
                "DB user": "ELLIOT",
                "Count": "10120"
            },
            {
                "DB user": "FAKEJOSH",
                "Count": "8761"
            },
            {
                "DB user": "GDM_USER",
                "Count": "5147"
            },
            {
                "DB user": "FAKEUSER",
                "Count": "5145"
            },
            {
                "DB user": "SALLY",
                "Count": "1444"
            },
            {
                "DB user": "TANSEL",
                "Count": "1367"
            },
            {
                "DB user": "DAN",
                "Count": "1236"
            },
            {
                "DB user": "POSTGRES",
                "Count": "976"
            },
            {
                "DB user": "RODRIGO",
                "Count": "950"
            },
            {
                "DB user": "JOE",
                "Count": "855"
            },
            {
                "DB user": "JOED",
                "Count": "665"
            },
            {
                "DB user": "DAVID",
                "Count": "626"
            },
            {
                "DB user": "JOSH",
                "Count": "506"
            },
            {
                "DB user": "LESLIE",
                "Count": "506"
            },
            {
                "DB user": "KEN",
                "Count": "492"
            },
            {
                "DB user": "MARILENE",
                "Count": "416"
            },
            {
                "DB user": "MATT",
                "Count": "384"
            },
            {
                "DB user": "USMAN",
                "Count": "384"
            },
            {
                "DB user": "HIGHRISK",
                "Count": "380"
            },
            {
                "DB user": "NULL",
                "Count": "275"
            },
            {
                "DB user": "RAJESH",
                "Count": "255"
            },
            {
                "DB user": "NAGENDRA",
                "Count": "253"
            },
            {
                "DB user": "PENTESTER",
                "Count": "160"
            },
            {
                "DB user": "ANDREW",
                "Count": "135"
            },
            {
                "DB user": "JOSHUA",
                "Count": "134"
            },
            {
                "DB user": "DOUGLAS",
                "Count": "133"
            },
            {
                "DB user": "ENRIQUE",
                "Count": "131"
            },
            {
                "DB user": "DON",
                "Count": "131"
            },
            {
                "DB user": "TONY",
                "Count": "128"
            },
            {
                "DB user": "DEVAN",
                "Count": "128"
            },
            {
                "DB user": "BILL",
                "Count": "128"
            },
            {
                "DB user": "RICK",
                "Count": "127"
            },
            {
                "DB user": "ROOT",
                "Count": "80"
            },
            {
                "DB user": "SYSTEM",
                "Count": "32"
            },
            {
                "DB user": "ADMIN",
                "Count": "30"
            },
            {
                "DB user": "DB2ADMIN",
                "Count": "16"
            },
            {
                "DB user": "GUARDIUM",
                "Count": "8"
            }
        ]
    },
    "transform": [
        {
            "calculate": "toNumber(datum['Count'])",
            "as": "num_Count"
        },
        {
            "window": [
                {
                    "op": "row_number",
                    "as": "rank"
                }
            ],
            "sort": [
                {
                    "field": "num_Count",
                    "order": "descending"
                }
            ]
        },
        {
            "calculate": "datum.rank < 10 ? datum['DB user'] : 'All Others'",
            "as": "ranked_DB user"
        }
    ],
    "width": 400,
    "height": 400,
    "mark": "bar",
    "encoding": {
        "y": {
            "field": "ranked_DB user",
            "type": "nominal",
            "sort": "-x"
        },
        "color": {
            "field": "Count",
            "type": "quantitative"
        },
        "x": {
            "field": "Count",
            "aggregate": "sum"
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
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Stacked bar chart",
    "data": {
        "name": "chartData"
    },
    "transform": [
        {
            "calculate": "toNumber(datum['$primary_measure'])",
            "as": "num_Count"
        },
        {
            "window": [
                {
                    "op": "row_number",
                    "as": "rank"
                }
            ],
            "sort": [
                {
                    "field": "num_Count",
                    "order": "descending"
                }
            ]
        },
        {
            "calculate": "datum.rank < 10 ? datum['$primary_category'] : 'All Others'",
            "as": "ranked_$primary_category"
        }
    ],
    "width": "container",
    "height": "container",
    "mark": "bar",
    "encoding": {
        "y": {
            "field": "ranked_$primary_category",
            "type": "nominal",
            "sort": "-x"
        },
        "color": {
            "field": "$primary_measure",
            "type": "quantitative"
        },
        "x": {
            "field": "$primary_measure",
            "aggregate": "sum"
        }
    }
}
```

