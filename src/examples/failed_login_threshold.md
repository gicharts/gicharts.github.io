
# Failed login count with visualized threshold
A bar graph showing number of failed logins per user with a graphical threshold (1,000 failed logins).
- **Report category:** Database exception

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
    "description": "Bar chart",
    "width": 400,
    "height": 400,
    "data": {
        "values": [
            {
                "DB user": "BADGUY",
                "Count": "3100"
            },
            {
                "DB user": "POLLY",
                "Count": "1301"
            },
            {
                "DB user": "ELLIOT",
                "Count": "1240"
            },
            {
                "DB user": "FAKEUSER",
                "Count": "618"
            },
            {
                "DB user": "SALLY",
                "Count": "165"
            },
            {
                "DB user": "TANSEL",
                "Count": "156"
            },
            {
                "DB user": "DAN",
                "Count": "156"
            },
            {
                "DB user": "LESLIE",
                "Count": "62"
            },
            {
                "DB user": "JOSH",
                "Count": "62"
            },
            {
                "DB user": "KEN",
                "Count": "61"
            },
            {
                "DB user": "DAVID",
                "Count": "61"
            },
            {
                "DB user": "MARILENE",
                "Count": "52"
            },
            {
                "DB user": "JESSICA",
                "Count": "45"
            },
            {
                "DB user": "RAJESH",
                "Count": "31"
            },
            {
                "DB user": "NAGENDRA",
                "Count": "31"
            },
            {
                "DB user": "USMAN",
                "Count": "31"
            },
            {
                "DB user": "MATT",
                "Count": "31"
            },
            {
                "DB user": "MAURICIO",
                "Count": "27"
            },
            {
                "DB user": "DANIEL",
                "Count": "27"
            },
            {
                "DB user": "DB2ADMIN",
                "Count": "4"
            }
        ]
    },
    "title": "Failed logins per user with login threshold indicator (>1000)",
    "layer": [
        {
            "layer": [
                {
                    "mark": "bar",
                    "encoding": {
                        "x": {
                            "field": "DB user",
                            "type": "nominal",
                            "axis": {
                                "labelAngle": -45,
                                "grid": false
                            },
                            "sort": "Count"
                        },
                        "y": {
                            "field": "Count",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": "bar",
                    "transform": [
                        {
                            "filter": "datum.Count >= 1000"
                        },
                        {
                            "calculate": "1000",
                            "as": "baseline"
                        }
                    ],
                    "encoding": {
                        "x": {
                            "field": "DB user",
                            "type": "ordinal",
                            "sort": "Count"
                        },
                        "y": {
                            "field": "baseline",
                            "type": "quantitative",
                            "title": "Number of failed logins"
                        },
                        "y2": {
                            "field": "Count",
                            "aggregate": "sum"
                        },
                        "color": {
                            "value": "#e45755"
                        }
                    }
                }
            ]
        },
        {
            "encoding": {
                "y": {
                    "datum": 1000
                }
            },
            "layer": [
                {
                    "mark": {
                        "type": "rule"
                    },
                    "encoding": {
                        "color": {
                            "value": "#e45755"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "align": "right",
                        "baseline": "bottom",
                        "dx": -10,
                        "dy": -2,
                        "x": "width",
                        "text": "Failed login threshold",
                        "fontSize": 16
                    },
                    "encoding": {
                        "color": {
                            "value": "#e45755"
                        }
                    }
                }
            ]
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
    "description": "Bar chart",
    "width": "container",
    "height": "container",
    "data": {
        "name": "chartData"
    },
    "title": "Failed logins per user with login threshold indicator (>1000)",
    "layer": [
        {
            "layer": [
                {
                    "mark": "bar",
                    "encoding": {
                        "x": {
                            "field": "$primary_category",
                            "type": "nominal",
                            "axis": {
                                "labelAngle": -45,
                                "grid": false
                            },
                            "sort": "$primary_measure"
                        },
                        "y": {
                            "field": "$primary_measure",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": "bar",
                    "transform": [
                        {
                            "filter": "datum.$primary_measure >= 1000"
                        },
                        {
                            "calculate": "1000",
                            "as": "baseline"
                        }
                    ],
                    "encoding": {
                        "x": {
                            "field": "$primary_category",
                            "type": "ordinal",
                            "sort": "$primary_measure"
                        },
                        "y": {
                            "field": "baseline",
                            "type": "quantitative",
                            "title": "Number of failed logins"
                        },
                        "y2": {
                            "field": "$primary_measure",
                            "aggregate": "sum"
                        },
                        "color": {
                            "value": "#e45755"
                        }
                    }
                }
            ]
        },
        {
            "encoding": {
                "y": {
                    "datum": 1000
                }
            },
            "layer": [
                {
                    "mark": {
                        "type": "rule"
                    },
                    "encoding": {
                        "color": {
                            "value": "#e45755"
                        }
                    }
                },
                {
                    "mark": {
                        "type": "text",
                        "align": "right",
                        "baseline": "bottom",
                        "dx": -10,
                        "dy": -2,
                        "x": "width",
                        "text": "Failed login threshold",
                        "fontSize": 16
                    },
                    "encoding": {
                        "color": {
                            "value": "#e45755"
                        }
                    }
                }
            ]
        }
    ]
}
```

