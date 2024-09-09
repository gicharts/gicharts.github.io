
# Failed test severity with custom color mappings
A donut chart mapping vulnerability assessment severity levels to custom colors. The default colors do not communicate danger as well as these colors do.
- **Report category:** Vulnerability assessments

- **Required report headers:**
    - **Primary category:** Severity
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

<div class="tip">The values in this example are mapped to "CAUTION, MINOR, MAJOR and CRITICAL". This may need modification for other types on reports.</div>

```js 
    const {default: embed} = await import("npm:vega-embed@6");

    embed('#vis',
        {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Donut chart",
    "width": 400,
    "height": 400,
    "data": {
        "values": [
            {
                "Severity": "MINOR",
                "Count": 2260
            },
            {
                "Severity": "MAJOR",
                "Count": 911
            },
            {
                "Severity": "CRITICAL",
                "Count": 520
            },
            {
                "Severity": "CAUTION",
                "Count": 285
            }
        ]
    },
    "layer": [
        {
            "mark": {
                "type": "arc",
                "radius": {
                    "expr": "max(70, min(containerSize()[0], containerSize()[1]) / 2 - 70)"
                },
                "innerRadius": {
                    "expr": "max(100, min(containerSize()[0], containerSize()[1]) / 2 - 100)"
                }
            },
            "encoding": {
                "color": {
                    "field": "Severity",
                    "type": "nominal",
                    "scale": {
                        "scheme": "yelloworangered"
                    },
                    "sort": [
                        "CAUTION",
                        "MAJOR",
                        "MINOR",
                        "CRITICAL"
                    ],
                    "legend": {
                        "title": null,
                        "columns": {
                            "signal": "ceil(width / 100)"
                        },
                        "orient": "bottom",
                        "symbolType": "square"
                    }
                },
                "theta": {
                    "field": "Count",
                    "type": "quantitative",
                    "stack": true
                },
                "order": {
                    "field": "Count",
                    "type": "quantitative",
                    "sort": "descending"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "radius": {
                    "expr": "min(containerSize()[0], containerSize()[1]) / 2 - 50"
                }
            },
            "encoding": {
                "text": {
                    "field": "Count",
                    "type": "quantitative"
                },
                "color": {
                    "value": "white"
                },
                "theta": {
                    "field": "Count",
                    "type": "quantitative",
                    "stack": true
                },
                "order": {
                    "field": "Count",
                    "type": "quantitative",
                    "sort": "descending"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "fontSize": 20
            },
            "encoding": {
                "text": {
                    "field": "Count",
                    "aggregate": "sum"
                },
                "yOffset": {
                    "value": -10
                },
                "color": {
                    "value": "white"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "dy": 10,
                "fontSize": 14
            },
            "encoding": {
                "text": {
                    "value": "Total failed tests"
                },
                "color": {
                    "value": "#cccccc"
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
    "description": "Donut chart",
    "width": "container",
    "height": "container",
    "data": {
        "name": "chartData"
    },
    "layer": [
        {
            "mark": {
                "type": "arc",
                "radius": {
                    "expr": "max(70, min(containerSize()[0], containerSize()[1]) / 2 - 70)"
                },
                "innerRadius": {
                    "expr": "max(100, min(containerSize()[0], containerSize()[1]) / 2 - 100)"
                }
            },
            "encoding": {
                "color": {
                    "field": "$primary_category",
                    "type": "nominal",
                    "scale": {
                        "scheme": "yelloworangered"
                    },
                    "sort": [
                        "CAUTION",
                        "MAJOR",
                        "MINOR",
                        "CRITICAL"
                    ],
                    "legend": {
                        "title": null,
                        "columns": {
                            "signal": "ceil(width / 100)"
                        },
                        "orient": "bottom",
                        "symbolType": "square"
                    }
                },
                "theta": {
                    "field": "$primary_measure",
                    "type": "quantitative",
                    "stack": true
                },
                "order": {
                    "field": "$primary_measure",
                    "type": "quantitative",
                    "sort": "descending"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "radius": {
                    "expr": "min(containerSize()[0], containerSize()[1]) / 2 - 50"
                }
            },
            "encoding": {
                "text": {
                    "field": "$primary_measure",
                    "type": "quantitative"
                },
                "color": {
                    "value": "white"
                },
                "theta": {
                    "field": "$primary_measure",
                    "type": "quantitative",
                    "stack": true
                },
                "order": {
                    "field": "$primary_measure",
                    "type": "quantitative",
                    "sort": "descending"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "fontSize": 20
            },
            "encoding": {
                "text": {
                    "field": "$primary_measure",
                    "aggregate": "sum"
                },
                "yOffset": {
                    "value": -10
                },
                "color": {
                    "value": "white"
                }
            }
        },
        {
            "mark": {
                "type": "text",
                "dy": 10,
                "fontSize": 14
            },
            "encoding": {
                "text": {
                    "value": "Total failed tests"
                },
                "color": {
                    "value": "#cccccc"
                }
            }
        }
    ]
}
```

