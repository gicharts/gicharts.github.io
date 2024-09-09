
# Weekday and hour analysis
A heatmap showing the number of records with the day of the week and the hours they occurred. Useful for determining the normal hours when events occur regularly on a weekly basis (eg: office hours).
- **Report category:** All

- **Required report headers:**
    - **Primary category:** Hour (Date created (local time))
    - **Secondary category:** Day of week (Date created (local time))
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

<div class="tip">This chart can be used with almost any report type as long as it contains a time field to analyze</div>

```js 
    const {default: embed} = await import("npm:vega-embed@6");

    embed('#vis',
        {
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": [
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "6",
                "Count": "328"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "5",
                "Count": "316"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "3",
                "Count": "316"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "5",
                "Count": "314"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "3",
                "Count": "296"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "6",
                "Count": "291"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "5",
                "Count": "289"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "4",
                "Count": "288"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "6",
                "Count": "284"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "6",
                "Count": "267"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "4",
                "Count": "265"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "6",
                "Count": "262"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "6",
                "Count": "259"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "3",
                "Count": "249"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "5",
                "Count": "246"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "4",
                "Count": "240"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "4",
                "Count": "237"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "4",
                "Count": "235"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "5",
                "Count": "234"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "5",
                "Count": "229"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "5",
                "Count": "228"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "3",
                "Count": "218"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "4",
                "Count": "215"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "3",
                "Count": "207"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "5",
                "Count": "205"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "2",
                "Count": "188"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "4",
                "Count": "187"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "5",
                "Count": "185"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "4",
                "Count": "177"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "4",
                "Count": "163"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "3",
                "Count": "159"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "6",
                "Count": "145"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "3",
                "Count": "140"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "3",
                "Count": "137"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "2",
                "Count": "134"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "2",
                "Count": "132"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "4",
                "Count": "118"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "4",
                "Count": "117"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "3",
                "Count": "117"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "3",
                "Count": "115"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "3",
                "Count": "112"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "2",
                "Count": "109"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "6",
                "Count": "109"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "6",
                "Count": "108"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "5",
                "Count": "107"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "3",
                "Count": "107"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "4",
                "Count": "103"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "3",
                "Count": "103"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "2",
                "Count": "100"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "4",
                "Count": "100"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "4",
                "Count": "100"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "2",
                "Count": "100"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "2",
                "Count": "99"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "4",
                "Count": "98"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "6",
                "Count": "97"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "6",
                "Count": "95"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "6",
                "Count": "95"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "5",
                "Count": "94"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "4",
                "Count": "94"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "2",
                "Count": "93"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "4",
                "Count": "92"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "2",
                "Count": "91"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "3",
                "Count": "89"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "4",
                "Count": "85"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "5",
                "Count": "84"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "5",
                "Count": "82"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "2",
                "Count": "80"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "1",
                "Count": "76"
            },
            {
                "Hour (Date created (local time))": "4",
                "Day of week (Date created (local time))": "7",
                "Count": "74"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "4",
                "Count": "74"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "6",
                "Count": "74"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "6",
                "Count": "70"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "3",
                "Count": "69"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "3",
                "Count": "67"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "5",
                "Count": "66"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "6",
                "Count": "64"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "3",
                "Count": "63"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "4",
                "Count": "60"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "5",
                "Count": "59"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "2",
                "Count": "57"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "2",
                "Count": "56"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "5",
                "Count": "49"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "2",
                "Count": "48"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "4",
                "Count": "46"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "5",
                "Count": "45"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "5",
                "Count": "43"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "4",
                "Count": "43"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "2",
                "Count": "42"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "3",
                "Count": "41"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "2",
                "Count": "41"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "2",
                "Count": "40"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "5",
                "Count": "39"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "5",
                "Count": "38"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "2",
                "Count": "37"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "6",
                "Count": "35"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "7",
                "Count": "35"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "6",
                "Count": "35"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "5",
                "Count": "33"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "3",
                "Count": "33"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "6",
                "Count": "32"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "1",
                "Count": "31"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "1",
                "Count": "31"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "7",
                "Count": "30"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "3",
                "Count": "28"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "4",
                "Count": "28"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "2",
                "Count": "28"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "3",
                "Count": "27"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "7",
                "Count": "25"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "2",
                "Count": "25"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "5",
                "Count": "25"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "1",
                "Count": "25"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "3",
                "Count": "25"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "6",
                "Count": "24"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "3",
                "Count": "24"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "2",
                "Count": "23"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "1",
                "Count": "23"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "7",
                "Count": "22"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "6",
                "Count": "21"
            },
            {
                "Hour (Date created (local time))": "14",
                "Day of week (Date created (local time))": "1",
                "Count": "20"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "1",
                "Count": "20"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "3",
                "Count": "19"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "1",
                "Count": "19"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "2",
                "Count": "19"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "5",
                "Count": "19"
            },
            {
                "Hour (Date created (local time))": "13",
                "Day of week (Date created (local time))": "7",
                "Count": "19"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "6",
                "Count": "18"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "7",
                "Count": "17"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "6",
                "Count": "17"
            },
            {
                "Hour (Date created (local time))": "15",
                "Day of week (Date created (local time))": "7",
                "Count": "17"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "1",
                "Count": "17"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "1",
                "Count": "15"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "1",
                "Count": "13"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "4",
                "Count": "13"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "1",
                "Count": "13"
            },
            {
                "Hour (Date created (local time))": "9",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "19",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "10",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "3",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "6",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "2",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "18",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "1",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "2",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "5",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "17",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "2",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "2",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "23",
                "Day of week (Date created (local time))": "6",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "11",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "22",
                "Day of week (Date created (local time))": "5",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "6",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "0",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "21",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "8",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "20",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "12",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "7",
                "Day of week (Date created (local time))": "7",
                "Count": "12"
            },
            {
                "Hour (Date created (local time))": "16",
                "Day of week (Date created (local time))": "1",
                "Count": "12"
            }
        ]
    },
    "transform": [
        {
            "lookup": "Day of week (Date created (local time))",
            "from": {
                "data": {
                    "values": [
                        {
                            "a": "1",
                            "b": "Sunday"
                        },
                        {
                            "a": "2",
                            "b": "Monday"
                        },
                        {
                            "a": "3",
                            "b": "Tuesday"
                        },
                        {
                            "a": "4",
                            "b": "Wednesday"
                        },
                        {
                            "a": "5",
                            "b": "Thursday"
                        },
                        {
                            "a": "6",
                            "b": "Friday"
                        },
                        {
                            "a": "7",
                            "b": "Saturday"
                        }
                    ]
                },
                "key": "a",
                "fields": [
                    "b"
                ]
            }
        }
    ],
    "width": 700,
    "height": 400,
    "mark": "rect",
    "encoding": {
        "x": {
            "field": "Hour (Date created (local time))",
            "type": "nominal",
            "scale": {
                "domain": [
                    "0",
                    "1",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23"
                ]
            },
            "axis": {
                "grid": false
            }
        },
        "y": {
            "field": "b",
            "scale": {
                "domain": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            },
            "type": "nominal",
            "axis": {
                "grid": false
            },
            "title": "Day of week"
        },
        "color": {
            "field": "Count",
            "scale": {
                "scheme": "viridis"
            },
            "type": "quantitative"
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
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "name": "chartData"
    },
    "transform": [
        {
            "lookup": "$secondary_category",
            "from": {
                "data": {
                    "values": [
                        {
                            "a": "1",
                            "b": "Sunday"
                        },
                        {
                            "a": "2",
                            "b": "Monday"
                        },
                        {
                            "a": "3",
                            "b": "Tuesday"
                        },
                        {
                            "a": "4",
                            "b": "Wednesday"
                        },
                        {
                            "a": "5",
                            "b": "Thursday"
                        },
                        {
                            "a": "6",
                            "b": "Friday"
                        },
                        {
                            "a": "7",
                            "b": "Saturday"
                        }
                    ]
                },
                "key": "a",
                "fields": [
                    "b"
                ]
            }
        }
    ],
    "width": "container",
    "height": "container",
    "mark": "rect",
    "encoding": {
        "x": {
            "field": "$primary_category",
            "type": "nominal",
            "scale": {
                "domain": [
                    "0",
                    "1",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23"
                ]
            },
            "axis": {
                "grid": false
            }
        },
        "y": {
            "field": "b",
            "scale": {
                "domain": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ]
            },
            "type": "nominal",
            "axis": {
                "grid": false
            },
            "title": "Day of week"
        },
        "color": {
            "field": "$primary_measure",
            "scale": {
                "scheme": "viridis"
            },
            "type": "quantitative"
        }
    }
}
```

