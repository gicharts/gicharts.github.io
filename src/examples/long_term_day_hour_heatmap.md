
# Multi-week hour-date heatmap
A heatmap showing hours and days of access over a long time period to help with time-based traffic pattern identification.
- **Report category:** Classification

- **Required report headers:**
    - **Primary category:** Date (Connection start (local time))
    - **Secondary category:** Hour (Connection start (local time))
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
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": [
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "6",
                "Count": "24128"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "0",
                "Count": "21794"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "5",
                "Count": "21713"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "19",
                "Count": "21289"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "19",
                "Count": "20598"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "19",
                "Count": "20120"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "4",
                "Count": "19565"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "22",
                "Count": "19453"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "4",
                "Count": "19302"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "2",
                "Count": "18747"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "4",
                "Count": "18717"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "20",
                "Count": "18285"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "19",
                "Count": "18126"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "22",
                "Count": "17849"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "23",
                "Count": "17831"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "0",
                "Count": "17569"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "4",
                "Count": "17393"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "1",
                "Count": "17102"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "22",
                "Count": "15917"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "21",
                "Count": "15185"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "3",
                "Count": "14820"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "23",
                "Count": "14312"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "21",
                "Count": "14119"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "6",
                "Count": "13746"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "5",
                "Count": "13516"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "20",
                "Count": "13484"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "21",
                "Count": "13155"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "18",
                "Count": "12974"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "18",
                "Count": "12973"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "18",
                "Count": "12969"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "12",
                "Count": "12969"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "6",
                "Count": "12962"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "6",
                "Count": "12949"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "18",
                "Count": "12949"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "6",
                "Count": "12948"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "12",
                "Count": "12946"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "18",
                "Count": "12942"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "2",
                "Count": "12941"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "12",
                "Count": "12940"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "6",
                "Count": "12938"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "12",
                "Count": "12936"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "12",
                "Count": "12935"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "6",
                "Count": "12935"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "12",
                "Count": "12935"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "18",
                "Count": "12934"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "12",
                "Count": "12934"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "6",
                "Count": "12923"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "6",
                "Count": "12922"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "18",
                "Count": "12922"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "12",
                "Count": "12921"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "6",
                "Count": "12921"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "6",
                "Count": "12920"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "18",
                "Count": "12919"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "6",
                "Count": "12918"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "18",
                "Count": "12917"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "6",
                "Count": "12912"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "12",
                "Count": "12910"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "18",
                "Count": "12909"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "12",
                "Count": "12907"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "12",
                "Count": "12899"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "6",
                "Count": "12897"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "18",
                "Count": "12895"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "18",
                "Count": "12895"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "12",
                "Count": "12894"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "6",
                "Count": "12884"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "12",
                "Count": "12884"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "12",
                "Count": "12882"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "6",
                "Count": "12881"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "12",
                "Count": "12880"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "18",
                "Count": "12868"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "18",
                "Count": "12868"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "12",
                "Count": "12867"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "6",
                "Count": "12865"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "18",
                "Count": "12858"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "12",
                "Count": "12855"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "18",
                "Count": "12855"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "18",
                "Count": "12855"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "12",
                "Count": "12854"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "18",
                "Count": "12851"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "18",
                "Count": "12845"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "12",
                "Count": "12840"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "12",
                "Count": "12839"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "12",
                "Count": "12839"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "12",
                "Count": "12833"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "6",
                "Count": "12832"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "6",
                "Count": "12829"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "18",
                "Count": "12828"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "6",
                "Count": "12822"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "6",
                "Count": "12817"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "6",
                "Count": "12816"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "6",
                "Count": "12809"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "12",
                "Count": "12807"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "12",
                "Count": "12804"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "12",
                "Count": "12803"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "6",
                "Count": "12802"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "18",
                "Count": "12801"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "18",
                "Count": "12791"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "12",
                "Count": "12781"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "18",
                "Count": "12779"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "18",
                "Count": "12763"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "6",
                "Count": "12758"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "18",
                "Count": "12755"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "12",
                "Count": "12753"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "18",
                "Count": "12753"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "6",
                "Count": "12739"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "16",
                "Count": "12714"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "16",
                "Count": "12675"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "16",
                "Count": "12674"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "8",
                "Count": "12673"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "16",
                "Count": "12672"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "16",
                "Count": "12663"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "16",
                "Count": "12661"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "16",
                "Count": "12659"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "10",
                "Count": "12658"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "10",
                "Count": "12658"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "8",
                "Count": "12657"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "8",
                "Count": "12657"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "14",
                "Count": "12656"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "16",
                "Count": "12656"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "8",
                "Count": "12656"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "10",
                "Count": "12655"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "14",
                "Count": "12653"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "16",
                "Count": "12646"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "14",
                "Count": "12643"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "10",
                "Count": "12642"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "14",
                "Count": "12642"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "10",
                "Count": "12641"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "8",
                "Count": "12641"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "16",
                "Count": "12634"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "10",
                "Count": "12632"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "10",
                "Count": "12632"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "14",
                "Count": "12631"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "14",
                "Count": "12631"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "14",
                "Count": "12630"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "14",
                "Count": "12630"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "14",
                "Count": "12628"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "10",
                "Count": "12628"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "10",
                "Count": "12623"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "16",
                "Count": "12622"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "16",
                "Count": "12622"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "10",
                "Count": "12619"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "14",
                "Count": "12617"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "8",
                "Count": "12616"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "14",
                "Count": "12614"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "8",
                "Count": "12614"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "16",
                "Count": "12613"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "16",
                "Count": "12609"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "14",
                "Count": "12605"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "16",
                "Count": "12605"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "10",
                "Count": "12605"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "10",
                "Count": "12603"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "10",
                "Count": "12603"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "14",
                "Count": "12603"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "8",
                "Count": "12602"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "10",
                "Count": "12601"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "14",
                "Count": "12599"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "14",
                "Count": "12596"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "16",
                "Count": "12595"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "10",
                "Count": "12592"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "8",
                "Count": "12592"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "16",
                "Count": "12583"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "14",
                "Count": "12582"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "8",
                "Count": "12579"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "8",
                "Count": "12577"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "14",
                "Count": "12571"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "8",
                "Count": "12571"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "16",
                "Count": "12568"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "14",
                "Count": "12568"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "16",
                "Count": "12568"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "14",
                "Count": "12567"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "16",
                "Count": "12567"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "10",
                "Count": "12565"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "14",
                "Count": "12559"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "16",
                "Count": "12558"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "10",
                "Count": "12551"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "8",
                "Count": "12550"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "10",
                "Count": "12549"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "8",
                "Count": "12549"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "10",
                "Count": "12547"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "16",
                "Count": "12542"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "8",
                "Count": "12539"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "10",
                "Count": "12539"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "14",
                "Count": "12537"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "14",
                "Count": "12536"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "10",
                "Count": "12535"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "8",
                "Count": "12535"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "14",
                "Count": "12533"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "16",
                "Count": "12529"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "10",
                "Count": "12527"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "9",
                "Count": "12527"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "10",
                "Count": "12518"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "8",
                "Count": "12513"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "8",
                "Count": "12511"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "16",
                "Count": "12505"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "8",
                "Count": "12503"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "14",
                "Count": "12501"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "14",
                "Count": "12501"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "16",
                "Count": "12501"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "8",
                "Count": "12501"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "8",
                "Count": "12500"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "10",
                "Count": "12498"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "10",
                "Count": "12492"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "14",
                "Count": "12491"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "8",
                "Count": "12485"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "8",
                "Count": "12484"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "8",
                "Count": "12475"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "10",
                "Count": "12471"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "10",
                "Count": "12461"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "19",
                "Count": "12459"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "16",
                "Count": "12422"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "8",
                "Count": "12416"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "14",
                "Count": "12408"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "17",
                "Count": "12401"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "8",
                "Count": "12363"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "8",
                "Count": "12332"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "9",
                "Count": "12318"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "15",
                "Count": "12254"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "19",
                "Count": "12228"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "23",
                "Count": "12144"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "9",
                "Count": "12141"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "16",
                "Count": "12123"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "13",
                "Count": "12111"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "7",
                "Count": "12038"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "13",
                "Count": "12015"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "9",
                "Count": "11926"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "6",
                "Count": "11749"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "15",
                "Count": "11745"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "21",
                "Count": "11744"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "4",
                "Count": "11724"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "7",
                "Count": "11706"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "15",
                "Count": "11689"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "21",
                "Count": "11474"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "4",
                "Count": "11466"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "19",
                "Count": "11432"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "3",
                "Count": "11425"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "7",
                "Count": "11353"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "7",
                "Count": "11352"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "21",
                "Count": "11285"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "9",
                "Count": "11264"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "22",
                "Count": "11246"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "11",
                "Count": "11173"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "9",
                "Count": "11149"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "11",
                "Count": "11133"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "13",
                "Count": "11059"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "19",
                "Count": "11056"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "19",
                "Count": "11007"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "15",
                "Count": "11006"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "9",
                "Count": "10940"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "15",
                "Count": "10928"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "7",
                "Count": "10875"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "7",
                "Count": "10848"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "7",
                "Count": "10807"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "5",
                "Count": "10797"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "17",
                "Count": "10784"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "19",
                "Count": "10756"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "17",
                "Count": "10731"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "13",
                "Count": "10722"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "17",
                "Count": "10630"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "9",
                "Count": "10605"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "19",
                "Count": "10594"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "1",
                "Count": "10587"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "7",
                "Count": "10552"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "13",
                "Count": "10539"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "11",
                "Count": "10485"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "17",
                "Count": "10474"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "15",
                "Count": "10469"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "19",
                "Count": "10460"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "9",
                "Count": "10446"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "19",
                "Count": "10327"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "9",
                "Count": "10272"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "7",
                "Count": "10240"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "9",
                "Count": "10172"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "17",
                "Count": "10071"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "15",
                "Count": "10051"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "13",
                "Count": "10019"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "7",
                "Count": "10001"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "17",
                "Count": "9989"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "22",
                "Count": "9926"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "9",
                "Count": "9890"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "7",
                "Count": "9800"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "15",
                "Count": "9776"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "13",
                "Count": "9634"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "11",
                "Count": "9629"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "9",
                "Count": "9606"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "13",
                "Count": "9537"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "13",
                "Count": "9447"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "23",
                "Count": "9416"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "11",
                "Count": "9404"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "22",
                "Count": "9389"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "2",
                "Count": "9301"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "17",
                "Count": "9276"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "15",
                "Count": "9221"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "3",
                "Count": "9218"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "13",
                "Count": "9134"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "13",
                "Count": "9070"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "9",
                "Count": "9068"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "7",
                "Count": "9066"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "19",
                "Count": "9030"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "15",
                "Count": "8973"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "9",
                "Count": "8959"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "7",
                "Count": "8952"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "11",
                "Count": "8938"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "7",
                "Count": "8920"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "11",
                "Count": "8912"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "22",
                "Count": "8882"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "22",
                "Count": "8841"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "11",
                "Count": "8835"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "15",
                "Count": "8822"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "17",
                "Count": "8808"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "19",
                "Count": "8796"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "19",
                "Count": "8728"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "15",
                "Count": "8679"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "17",
                "Count": "8678"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "6",
                "Count": "8556"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "13",
                "Count": "8547"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "9",
                "Count": "8482"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "7",
                "Count": "8470"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "13",
                "Count": "8402"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "7",
                "Count": "8393"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "7",
                "Count": "8333"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "19",
                "Count": "8261"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "13",
                "Count": "8238"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "11",
                "Count": "8237"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "19",
                "Count": "8223"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "11",
                "Count": "8212"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "11",
                "Count": "8196"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "11",
                "Count": "8183"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "11",
                "Count": "8118"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "7",
                "Count": "8118"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "9",
                "Count": "8106"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "17",
                "Count": "8077"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "17",
                "Count": "8017"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "7",
                "Count": "8005"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "15",
                "Count": "7964"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "7",
                "Count": "7962"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "22",
                "Count": "7961"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "15",
                "Count": "7915"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "19",
                "Count": "7860"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "11",
                "Count": "7585"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "13",
                "Count": "7516"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "17",
                "Count": "7509"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "11",
                "Count": "7499"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "13",
                "Count": "7497"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "11",
                "Count": "7494"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "15",
                "Count": "7391"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "5",
                "Count": "7355"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "9",
                "Count": "7274"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "9",
                "Count": "7249"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "11",
                "Count": "7197"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "11",
                "Count": "7158"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "11",
                "Count": "7117"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "13",
                "Count": "7096"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "17",
                "Count": "7081"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "5",
                "Count": "7069"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "19",
                "Count": "7067"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "13",
                "Count": "7042"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "9",
                "Count": "6991"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "13",
                "Count": "6988"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "19",
                "Count": "6976"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "7",
                "Count": "6858"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "2",
                "Count": "6846"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "15",
                "Count": "6836"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "17",
                "Count": "6794"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "11",
                "Count": "6790"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "9",
                "Count": "6754"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "15",
                "Count": "6732"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "13",
                "Count": "6721"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "15",
                "Count": "6688"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "9",
                "Count": "6669"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "13",
                "Count": "6581"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "15",
                "Count": "6571"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "15",
                "Count": "6424"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "17",
                "Count": "6417"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "13",
                "Count": "6415"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "7",
                "Count": "6352"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "5",
                "Count": "6345"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "13",
                "Count": "6287"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "11",
                "Count": "6271"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "7",
                "Count": "6248"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "11",
                "Count": "6232"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "19",
                "Count": "6232"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "15",
                "Count": "6197"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "13",
                "Count": "6196"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "13",
                "Count": "6184"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "17",
                "Count": "6090"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "17",
                "Count": "6063"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "19",
                "Count": "6012"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "13",
                "Count": "5965"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "19",
                "Count": "5961"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "19",
                "Count": "5896"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "11",
                "Count": "5857"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "11",
                "Count": "5827"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "22",
                "Count": "5817"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "17",
                "Count": "5805"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "15",
                "Count": "5804"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "17",
                "Count": "5794"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "17",
                "Count": "5788"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "17",
                "Count": "5732"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "15",
                "Count": "5718"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "9",
                "Count": "5717"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "9",
                "Count": "5715"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "9",
                "Count": "5687"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "17",
                "Count": "5685"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "11",
                "Count": "5612"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "9",
                "Count": "5545"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "23",
                "Count": "5537"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "1",
                "Count": "5528"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "20",
                "Count": "5439"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "15",
                "Count": "5383"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "17",
                "Count": "5302"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "0",
                "Count": "5302"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "15",
                "Count": "5297"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "9",
                "Count": "5276"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "0",
                "Count": "5233"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "0",
                "Count": "5218"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "0",
                "Count": "5207"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "13",
                "Count": "5181"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "0",
                "Count": "5160"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "0",
                "Count": "5157"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "7",
                "Count": "5156"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "0",
                "Count": "5154"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "0",
                "Count": "5149"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "0",
                "Count": "5148"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "7",
                "Count": "5143"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "0",
                "Count": "5140"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "11",
                "Count": "5129"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "17",
                "Count": "5129"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "0",
                "Count": "5119"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "0",
                "Count": "5111"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "0",
                "Count": "5109"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "0",
                "Count": "5109"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "0",
                "Count": "5108"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "0",
                "Count": "5108"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "0",
                "Count": "5108"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "0",
                "Count": "5107"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "0",
                "Count": "5105"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "0",
                "Count": "5105"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "0",
                "Count": "5102"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "0",
                "Count": "5093"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "0",
                "Count": "5092"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "0",
                "Count": "5092"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "7",
                "Count": "5091"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "0",
                "Count": "5088"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "0",
                "Count": "5088"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "0",
                "Count": "5083"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "0",
                "Count": "5082"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "0",
                "Count": "5082"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "19",
                "Count": "5056"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "0",
                "Count": "5042"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "11",
                "Count": "5041"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "15",
                "Count": "5014"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "19",
                "Count": "4971"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "3",
                "Count": "4967"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "23",
                "Count": "4959"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "3",
                "Count": "4959"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "3",
                "Count": "4956"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "3",
                "Count": "4950"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "3",
                "Count": "4949"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "23",
                "Count": "4943"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "12",
                "Count": "4918"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "6",
                "Count": "4911"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "12",
                "Count": "4909"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "6",
                "Count": "4909"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "6",
                "Count": "4909"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "12",
                "Count": "4909"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "18",
                "Count": "4908"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "18",
                "Count": "4908"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "15",
                "Count": "4908"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "12",
                "Count": "4908"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "18",
                "Count": "4907"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "6",
                "Count": "4906"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "3",
                "Count": "4905"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "18",
                "Count": "4902"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "3",
                "Count": "4902"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "3",
                "Count": "4901"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "18",
                "Count": "4900"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "3",
                "Count": "4898"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "3",
                "Count": "4898"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "3",
                "Count": "4897"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "9",
                "Count": "4897"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "9",
                "Count": "4897"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "3",
                "Count": "4897"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "3",
                "Count": "4897"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "3",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "3",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "15",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "3",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "3",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "9",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "3",
                "Count": "4896"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "3",
                "Count": "4895"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "3",
                "Count": "4895"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "3",
                "Count": "4895"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "15",
                "Count": "4895"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "3",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "3",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "15",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "3",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "3",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "9",
                "Count": "4894"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "9",
                "Count": "4893"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "3",
                "Count": "4893"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "3",
                "Count": "4892"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "15",
                "Count": "4890"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "22",
                "Count": "4877"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "23",
                "Count": "4865"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "3",
                "Count": "4856"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "22",
                "Count": "4848"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "23",
                "Count": "4846"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "23",
                "Count": "4846"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "23",
                "Count": "4846"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "23",
                "Count": "4845"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "23",
                "Count": "4845"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "23",
                "Count": "4844"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "23",
                "Count": "4844"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "23",
                "Count": "4844"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "23",
                "Count": "4841"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "3",
                "Count": "4830"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "15",
                "Count": "4823"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "5",
                "Count": "4817"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "23",
                "Count": "4810"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "12",
                "Count": "4799"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "4",
                "Count": "4794"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "23",
                "Count": "4793"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "23",
                "Count": "4790"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "23",
                "Count": "4783"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "23",
                "Count": "4779"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "23",
                "Count": "4777"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "23",
                "Count": "4777"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "23",
                "Count": "4777"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "2",
                "Count": "4777"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "23",
                "Count": "4776"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "23",
                "Count": "4776"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "23",
                "Count": "4776"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "23",
                "Count": "4775"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "23",
                "Count": "4774"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "4",
                "Count": "4773"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "1",
                "Count": "4770"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "23",
                "Count": "4769"
            },
            {
                "Date (Connection start (local time))": "2024-08-02",
                "Hour (Connection start (local time))": "23",
                "Count": "4766"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "4",
                "Count": "4764"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "17",
                "Count": "4762"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "1",
                "Count": "4760"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "4",
                "Count": "4754"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "2",
                "Count": "4749"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "1",
                "Count": "4746"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "2",
                "Count": "4745"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "2",
                "Count": "4743"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "1",
                "Count": "4742"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "5",
                "Count": "4740"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "5",
                "Count": "4736"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "5",
                "Count": "4736"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "7",
                "Count": "4735"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "16",
                "Count": "4733"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "16",
                "Count": "4732"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "16",
                "Count": "4731"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "16",
                "Count": "4731"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "16",
                "Count": "4729"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "2",
                "Count": "4728"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "4",
                "Count": "4717"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "5",
                "Count": "4712"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "2",
                "Count": "4707"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "2",
                "Count": "4706"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "2",
                "Count": "4705"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "4",
                "Count": "4705"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "4",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "14",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "5",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "10",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "2",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "22",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "2",
                "Count": "4702"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "14",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "8",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "22",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "2",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "4",
                "Count": "4701"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "4",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "2",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "2",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "4",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "2",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "10",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "10",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "22",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "2",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "2",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "10",
                "Count": "4700"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "10",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "4",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "2",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-08",
                "Hour (Connection start (local time))": "4",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "8",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "2",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "2",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "11",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "8",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "2",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "4",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "22",
                "Count": "4699"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "2",
                "Count": "4698"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "22",
                "Count": "4698"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "2",
                "Count": "4698"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "4",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "8",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "14",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "8",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "14",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "22",
                "Count": "4697"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "4",
                "Count": "4696"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "1",
                "Count": "4695"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "1",
                "Count": "4694"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "7",
                "Count": "4693"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "4",
                "Count": "4693"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "5",
                "Count": "4691"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "1",
                "Count": "4690"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "5",
                "Count": "4690"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "11",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "5",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "13",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "5",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "5",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "1",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "17",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "13",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "17",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "5",
                "Count": "4689"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "5",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "7",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "5",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "13",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "13",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "5",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "19",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "5",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "5",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "1",
                "Count": "4688"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "1",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "5",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "5",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "5",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "1",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "1",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "5",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-24",
                "Hour (Connection start (local time))": "11",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "1",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "19",
                "Count": "4687"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "1",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "1",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "7",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "13",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "5",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "5",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "1",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "5",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "19",
                "Count": "4686"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "1",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "5",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "1",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "7",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "17",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "7",
                "Count": "4685"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "19",
                "Count": "4684"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "11",
                "Count": "4682"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "11",
                "Count": "4682"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "1",
                "Count": "4672"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "22",
                "Count": "4668"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "4",
                "Count": "4663"
            },
            {
                "Date (Connection start (local time))": "2024-08-04",
                "Hour (Connection start (local time))": "21",
                "Count": "4651"
            },
            {
                "Date (Connection start (local time))": "2024-08-02",
                "Hour (Connection start (local time))": "22",
                "Count": "4630"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "17",
                "Count": "4623"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "17",
                "Count": "4588"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "14",
                "Count": "4588"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "4",
                "Count": "4487"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "20",
                "Count": "4394"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "20",
                "Count": "4333"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "20",
                "Count": "4333"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "20",
                "Count": "4325"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "20",
                "Count": "4323"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "20",
                "Count": "4322"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "20",
                "Count": "4322"
            },
            {
                "Date (Connection start (local time))": "2024-08-26",
                "Hour (Connection start (local time))": "20",
                "Count": "4322"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "20",
                "Count": "4321"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "20",
                "Count": "4320"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "20",
                "Count": "4320"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "20",
                "Count": "4319"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "20",
                "Count": "4318"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "20",
                "Count": "4316"
            },
            {
                "Date (Connection start (local time))": "2024-08-28",
                "Hour (Connection start (local time))": "20",
                "Count": "4316"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "20",
                "Count": "4316"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "20",
                "Count": "4316"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "20",
                "Count": "4315"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "20",
                "Count": "4313"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "20",
                "Count": "4312"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "20",
                "Count": "4312"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "20",
                "Count": "4308"
            },
            {
                "Date (Connection start (local time))": "2024-08-05",
                "Hour (Connection start (local time))": "20",
                "Count": "4308"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "20",
                "Count": "4308"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "20",
                "Count": "4306"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "20",
                "Count": "4305"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "20",
                "Count": "4088"
            },
            {
                "Date (Connection start (local time))": "2024-08-20",
                "Hour (Connection start (local time))": "21",
                "Count": "3976"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "21",
                "Count": "3680"
            },
            {
                "Date (Connection start (local time))": "2024-08-21",
                "Hour (Connection start (local time))": "5",
                "Count": "3336"
            },
            {
                "Date (Connection start (local time))": "2024-08-18",
                "Hour (Connection start (local time))": "21",
                "Count": "3236"
            },
            {
                "Date (Connection start (local time))": "2024-09-01",
                "Hour (Connection start (local time))": "21",
                "Count": "2898"
            },
            {
                "Date (Connection start (local time))": "2024-08-30",
                "Hour (Connection start (local time))": "21",
                "Count": "2870"
            },
            {
                "Date (Connection start (local time))": "2024-09-02",
                "Hour (Connection start (local time))": "21",
                "Count": "2869"
            },
            {
                "Date (Connection start (local time))": "2024-08-25",
                "Hour (Connection start (local time))": "21",
                "Count": "2869"
            },
            {
                "Date (Connection start (local time))": "2024-08-22",
                "Hour (Connection start (local time))": "21",
                "Count": "2863"
            },
            {
                "Date (Connection start (local time))": "2024-08-03",
                "Hour (Connection start (local time))": "21",
                "Count": "2857"
            },
            {
                "Date (Connection start (local time))": "2024-08-31",
                "Hour (Connection start (local time))": "21",
                "Count": "2842"
            },
            {
                "Date (Connection start (local time))": "2024-08-27",
                "Hour (Connection start (local time))": "21",
                "Count": "2837"
            },
            {
                "Date (Connection start (local time))": "2024-08-29",
                "Hour (Connection start (local time))": "21",
                "Count": "2827"
            },
            {
                "Date (Connection start (local time))": "2024-08-13",
                "Hour (Connection start (local time))": "21",
                "Count": "2808"
            },
            {
                "Date (Connection start (local time))": "2024-08-15",
                "Hour (Connection start (local time))": "21",
                "Count": "2806"
            },
            {
                "Date (Connection start (local time))": "2024-08-10",
                "Hour (Connection start (local time))": "21",
                "Count": "2798"
            },
            {
                "Date (Connection start (local time))": "2024-08-16",
                "Hour (Connection start (local time))": "21",
                "Count": "2798"
            },
            {
                "Date (Connection start (local time))": "2024-08-12",
                "Hour (Connection start (local time))": "21",
                "Count": "2791"
            },
            {
                "Date (Connection start (local time))": "2024-08-17",
                "Hour (Connection start (local time))": "21",
                "Count": "2786"
            },
            {
                "Date (Connection start (local time))": "2024-08-19",
                "Hour (Connection start (local time))": "21",
                "Count": "2782"
            },
            {
                "Date (Connection start (local time))": "2024-08-09",
                "Hour (Connection start (local time))": "21",
                "Count": "2780"
            },
            {
                "Date (Connection start (local time))": "2024-08-11",
                "Hour (Connection start (local time))": "21",
                "Count": "2765"
            },
            {
                "Date (Connection start (local time))": "2024-08-14",
                "Hour (Connection start (local time))": "21",
                "Count": "2751"
            },
            {
                "Date (Connection start (local time))": "2024-08-06",
                "Hour (Connection start (local time))": "21",
                "Count": "2749"
            },
            {
                "Date (Connection start (local time))": "2024-08-23",
                "Hour (Connection start (local time))": "21",
                "Count": "2646"
            },
            {
                "Date (Connection start (local time))": "2024-08-07",
                "Hour (Connection start (local time))": "20",
                "Count": "2507"
            },
            {
                "Date (Connection start (local time))": "2024-09-03",
                "Hour (Connection start (local time))": "17",
                "Count": "694"
            }
        ]
    },
    "transform": [
        {
            "calculate": "toNumber(datum['Hour (Connection start (local time))'])",
            "as": "Hour"
        }
    ],
    "width": 800,
    "height": 400,
    "mark": "rect",
    "encoding": {
        "x": {
            "field": "Date (Connection start (local time))",
            "type": "temporal",
            "timeUnit": "yearsmonthsdates"
        },
        "y": {
            "field": "Hour",
            "type": "ordinal",
            "axis": {
                "grid": false
            }
        },
        "color": {
            "field": "Count",
            "aggregate": "sum",
            "scale": {
                "scheme": "darkmulti"
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
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "name": "chartData"
    },
    "transform": [
        {
            "calculate": "toNumber(datum['$secondary_category'])",
            "as": "Hour"
        }
    ],
    "width": "container",
    "height": "container",
    "mark": "rect",
    "encoding": {
        "x": {
            "field": "$primary_category",
            "type": "temporal",
            "timeUnit": "yearsmonthsdates"
        },
        "y": {
            "field": "Hour",
            "type": "ordinal",
            "axis": {
                "grid": false
            }
        },
        "color": {
            "field": "$primary_measure",
            "aggregate": "sum",
            "scale": {
                "scheme": "darkmulti"
            }
        }
    }
}
```

