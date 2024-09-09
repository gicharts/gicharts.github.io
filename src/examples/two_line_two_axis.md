
# 2 axis, 2 series chart
Chart with two layers containing line charts with differing y-axis scales. Useful if the domain of the charts differ from each other by a large amount.
- **Report category:** Database activity

- **Required report headers:**
    - **Primary category:** Date (Period start (local time))
    - **Primary value:** Sum (Number of successful SQL queries)
    - **Secondary value:** Sum (Number of failed SQL queries)
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
    "description": "Multi series line chart",
    "data": {
        "values": [
            {
                "Date (Period start (local time))": "2024-08-30",
                "Sum (Number of successful SQL queries)": "1214277",
                "Sum (Number of failed SQL queries)": "859"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "Sum (Number of successful SQL queries)": "1190476",
                "Sum (Number of failed SQL queries)": "815"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "Sum (Number of successful SQL queries)": "1185140",
                "Sum (Number of failed SQL queries)": "1734"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "Sum (Number of successful SQL queries)": "1182923",
                "Sum (Number of failed SQL queries)": "883"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "Sum (Number of successful SQL queries)": "1173334",
                "Sum (Number of failed SQL queries)": "1082"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "Sum (Number of successful SQL queries)": "1163267",
                "Sum (Number of failed SQL queries)": "925"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "Sum (Number of successful SQL queries)": "1162699",
                "Sum (Number of failed SQL queries)": "3044"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "Sum (Number of successful SQL queries)": "1156003",
                "Sum (Number of failed SQL queries)": "1123"
            },
            {
                "Date (Period start (local time))": "2024-08-05",
                "Sum (Number of successful SQL queries)": "1146849",
                "Sum (Number of failed SQL queries)": "1141"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "Sum (Number of successful SQL queries)": "1117735",
                "Sum (Number of failed SQL queries)": "1068"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "Sum (Number of successful SQL queries)": "1115409",
                "Sum (Number of failed SQL queries)": "885"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "Sum (Number of successful SQL queries)": "1114375",
                "Sum (Number of failed SQL queries)": "1014"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "Sum (Number of successful SQL queries)": "1110222",
                "Sum (Number of failed SQL queries)": "1059"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "Sum (Number of successful SQL queries)": "1106992",
                "Sum (Number of failed SQL queries)": "929"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "Sum (Number of successful SQL queries)": "1102004",
                "Sum (Number of failed SQL queries)": "1161"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "Sum (Number of successful SQL queries)": "1099713",
                "Sum (Number of failed SQL queries)": "995"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "Sum (Number of successful SQL queries)": "1092962",
                "Sum (Number of failed SQL queries)": "872"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "Sum (Number of successful SQL queries)": "1088089",
                "Sum (Number of failed SQL queries)": "4189"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "Sum (Number of successful SQL queries)": "1088027",
                "Sum (Number of failed SQL queries)": "887"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "Sum (Number of successful SQL queries)": "1087434",
                "Sum (Number of failed SQL queries)": "832"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "Sum (Number of successful SQL queries)": "1086688",
                "Sum (Number of failed SQL queries)": "1052"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "Sum (Number of successful SQL queries)": "1072388",
                "Sum (Number of failed SQL queries)": "3625"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "Sum (Number of successful SQL queries)": "1070187",
                "Sum (Number of failed SQL queries)": "849"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "Sum (Number of successful SQL queries)": "1061750",
                "Sum (Number of failed SQL queries)": "1101"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "Sum (Number of successful SQL queries)": "1033309",
                "Sum (Number of failed SQL queries)": "838"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "Sum (Number of successful SQL queries)": "1014926",
                "Sum (Number of failed SQL queries)": "1136"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "Sum (Number of successful SQL queries)": "995582",
                "Sum (Number of failed SQL queries)": "801"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "Sum (Number of successful SQL queries)": "957755",
                "Sum (Number of failed SQL queries)": "836"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "Sum (Number of successful SQL queries)": "951164",
                "Sum (Number of failed SQL queries)": "844"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "Sum (Number of successful SQL queries)": "768262",
                "Sum (Number of failed SQL queries)": "1061"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "Sum (Number of successful SQL queries)": "496245",
                "Sum (Number of failed SQL queries)": "246"
            },
            {
                "Date (Period start (local time))": "2024-08-04",
                "Sum (Number of successful SQL queries)": "30247",
                "Sum (Number of failed SQL queries)": "351"
            }
        ]
    },
    "width": 620,
    "height": 620,
    "resolve": {
        "scale": {
            "y": "independent"
        }
    },
    "layer": [
        {
            "mark": {
                "type": "line",
                "color": "#0f62fe"
            },
            "encoding": {
                "x": {
                    "field": "Date (Period start (local time))",
                    "type": "temporal"
                },
                "y": {
                    "field": "Sum (Number of successful SQL queries)",
                    "aggregate": "sum",
                    "axis": {
                        "orient": "left",
                        "grid": false
                    },
                    "title": "Successful SQL (blue line)"
                }
            }
        },
        {
            "mark": {
                "type": "line",
                "color": "#ff832b"
            },
            "encoding": {
                "x": {
                    "field": "Date (Period start (local time))",
                    "type": "temporal"
                },
                "y": {
                    "field": "Sum (Number of failed SQL queries)",
                    "aggregate": "sum",
                    "axis": {
                        "orient": "right"
                    },
                    "title": "Failed SQL (orange line)"
                }
            }
        }
    ]
}
    ,
        {"theme": "carbong90"}
    )
```

## GI chart code definition
```json
    {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Multi series line chart",
    "data": {
        "name": "chartData"
    },
    "width": "container",
    "height": "container",
    "resolve": {
        "scale": {
            "y": "independent"
        }
    },
    "layer": [
        {
            "mark": {
                "type": "line",
                "color": "#0f62fe"
            },
            "encoding": {
                "x": {
                    "field": "$primary_category",
                    "type": "temporal"
                },
                "y": {
                    "field": "$primary_measure",
                    "aggregate": "sum",
                    "axis": {
                        "orient": "left",
                        "grid": false
                    },
                    "title": "Successful SQL (blue line)"
                }
            }
        },
        {
            "mark": {
                "type": "line",
                "color": "#ff832b"
            },
            "encoding": {
                "x": {
                    "field": "$primary_category",
                    "type": "temporal"
                },
                "y": {
                    "field": "$secondary_measure",
                    "aggregate": "sum",
                    "axis": {
                        "orient": "right"
                    },
                    "title": "Failed SQL (orange line)"
                }
            }
        }
    ]
}
```

