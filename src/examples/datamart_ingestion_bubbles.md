
# Datamart ingestion bubble per file
A bubble chart showing a bubble for every datamart file ingested with their sizes.
- **Report category:** Datamart ingestion status

- **Required report headers:**
    - **Primary category:** Period start
    - **Secondary category:** Data type
    - **Primary value:** Sum (Export record count)
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
    "description": "3-Category circle",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": [
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "57336"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "56650"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "53547"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "53392"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "52101"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "51799"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "49290"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "47487"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "47087"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "46917"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "46908"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "46878"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "46804"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "46380"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "46084"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "45980"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "45442"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "45285"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "44382"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "43094"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "42404"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "41724"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "40012"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "39547"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "39300"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "37921"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "37156"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "36392"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "35950"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "35843"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "33880"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "33055"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "32549"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "32235"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "32160"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "32058"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "31986"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "31914"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "31777"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "31349"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "31129"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "30753"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "30392"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "30070"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "29941"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "29784"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "29631"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "29137"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "28951"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "28398"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "28265"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "27586"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "27406"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "27320"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "26983"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "24846"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "23754"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "23384"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "23294"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "21960"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "21914"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "21808"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "21178"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "21068"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "21051"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "21042"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20951"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20844"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20836"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20816"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20799"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20793"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20775"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20772"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20717"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20699"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20599"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20552"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20549"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20500"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20445"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20386"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20371"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20363"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20358"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20350"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20340"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20337"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20330"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20330"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20309"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20306"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20304"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20299"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20296"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20294"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20289"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20267"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20266"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20265"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20258"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20253"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20244"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20240"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20234"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20234"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20229"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20223"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20196"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20121"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20109"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20109"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20094"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "20064"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "19993"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19986"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19974"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19958"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19925"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19924"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19922"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19910"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19906"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19902"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19878"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19852"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19842"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19840"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19829"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19762"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19732"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19686"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "19676"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19619"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19614"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19588"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19576"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19536"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19515"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19509"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19470"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19450"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19434"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19425"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19412"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19392"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19374"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19373"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19372"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19362"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19362"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19273"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19229"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19187"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19160"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19159"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19115"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19089"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19088"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19078"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "19060"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "19056"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18877"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18869"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18850"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18850"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "18801"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18798"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18791"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18724"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18723"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18720"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18718"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18709"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18684"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18666"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18665"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "18636"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "18621"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18590"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18571"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18558"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18496"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18480"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18477"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18474"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18468"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18442"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18440"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18430"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18430"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18418"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18410"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18407"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18401"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18384"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18384"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18371"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18369"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18363"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18356"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18355"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18344"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18342"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18338"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18336"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18330"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18326"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18326"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18325"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18320"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18309"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18304"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18284"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18283"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18272"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18264"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18261"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18258"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18255"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18252"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18252"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18250"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18248"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18247"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18244"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18242"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18234"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18226"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18218"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18210"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18204"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "18204"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18199"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18196"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18194"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18186"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18182"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18178"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18151"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18150"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18148"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18148"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18143"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18142"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18139"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18138"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18128"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18126"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18122"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18117"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18114"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18109"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18102"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18100"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18091"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18086"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18083"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18078"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18075"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18063"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18058"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18057"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18057"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18052"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18050"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18048"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18028"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18016"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18010"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "18004"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17999"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17998"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17998"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17997"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17984"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17984"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17978"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17978"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17974"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17944"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17940"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17936"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17934"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17934"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17931"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17926"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17926"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17924"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17922"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17922"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17908"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17907"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17897"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17892"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17889"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17888"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17884"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17879"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17873"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17868"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17856"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17852"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17829"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17820"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17818"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17777"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17773"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17766"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17765"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17760"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17725"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17722"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17716"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17682"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17612"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17582"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17413"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17376"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17366"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17365"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17356"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17136"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "17028"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17022"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17020"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "17013"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16985"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16982"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16952"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16897"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16888"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16747"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "16741"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16592"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16520"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16513"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "16444"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16426"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16413"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16383"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16377"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16336"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16324"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16319"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "16268"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16266"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16156"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "16072"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "16071"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "16004"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15938"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15870"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15810"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15737"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15700"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15652"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15566"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15502"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "15397"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15395"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15288"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15152"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15122"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15072"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "15063"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15060"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "15050"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "15030"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "14971"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "14962"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14960"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14798"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "14720"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "14673"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "14663"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14518"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14516"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14470"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14440"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14400"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14397"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "14238"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "14054"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "14050"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13962"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13943"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13910"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "13892"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13866"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13821"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13810"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13777"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "13762"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13728"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13554"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13554"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13518"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "13517"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "13438"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13436"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13432"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "13423"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13335"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13236"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13186"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "13184"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13181"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13029"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "13028"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12936"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "12908"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12892"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12825"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12819"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "12735"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12685"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12652"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "12522"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12516"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12422"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12328"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12279"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12196"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12190"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12177"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12102"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "12098"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12093"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "12026"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "12018"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "12016"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11974"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11933"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11902"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11806"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11766"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11740"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11726"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11659"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11588"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11545"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11542"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11541"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11537"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11497"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "11477"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11451"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11402"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11392"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "11371"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11353"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11277"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11245"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11208"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11207"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11198"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "11172"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11162"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11134"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11080"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "11080"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11077"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11071"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11070"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11060"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "11056"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "11037"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10982"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10903"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10887"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10838"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10834"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10798"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10779"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10772"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10683"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10680"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10655"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10650"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10646"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10638"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10628"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10616"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10592"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10567"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10566"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10553"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10549"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10542"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10535"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10530"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10514"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10486"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10463"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10435"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10432"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10425"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10404"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10380"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10374"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10360"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10341"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10332"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10329"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10327"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10326"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10310"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "10310"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "10308"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10296"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10279"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10262"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10261"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10219"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10216"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10214"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10208"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10199"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10153"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10151"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10124"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10117"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10102"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10083"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10063"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10061"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10046"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10043"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10036"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "10010"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9996"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9991"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9985"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9983"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9972"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9903"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9895"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9894"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9890"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9857"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9851"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9842"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9842"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9830"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9824"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9824"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9819"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9819"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9813"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9811"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9806"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9801"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9797"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9792"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9772"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9769"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9758"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9747"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9737"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9736"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9731"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9700"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9696"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9687"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9628"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9625"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9594"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9553"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9553"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9539"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9529"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9504"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9486"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9477"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9471"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9466"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9462"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9404"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9396"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9369"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9321"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9306"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9306"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9295"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9288"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9280"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9276"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9243"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9241"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9238"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9232"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9232"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9182"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9182"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9159"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9151"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9123"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9110"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "9087"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9056"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "9042"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "9033"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "9029"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8982"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8973"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8961"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8956"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8924"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8915"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8912"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8896"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8882"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8850"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8840"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8820"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8809"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8808"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8807"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8799"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8793"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8783"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8782"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8782"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8773"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8773"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8771"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8770"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8769"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8769"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8769"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8768"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8764"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8760"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8758"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8754"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8751"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8744"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8743"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8743"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8743"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8740"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8730"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8730"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8730"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8726"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8726"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8725"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8723"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8723"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8721"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8721"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8719"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8718"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8718"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8717"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8717"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8717"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8707"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8704"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8704"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8704"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8703"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8699"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8692"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8692"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8686"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8680"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8679"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8679"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8677"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8655"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8654"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8652"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8642"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8641"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8639"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8631"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8630"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8618"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8617"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8605"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8604"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8601"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8595"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8593"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8591"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8591"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8588"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8586"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8579"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8578"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8578"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8574"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8572"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8570"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8565"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8564"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8561"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8553"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8552"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8549"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8549"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8548"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8547"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8539"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8537"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8536"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8536"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8536"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8535"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8534"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8529"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8526"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8526"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8526"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8523"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8523"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8523"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8522"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8522"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8522"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8519"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8510"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8510"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8509"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8509"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8509"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8503"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8500"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8498"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8496"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8491"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8491"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8489"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8488"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8484"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8483"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8482"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8480"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8479"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8476"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8474"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8474"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8473"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8470"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8464"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8461"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8461"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8460"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8457"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8450"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8445"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8418"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8417"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8411"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8402"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8402"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8389"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8383"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8382"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8380"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8379"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8368"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8366"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8363"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8361"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8351"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8331"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8307"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8303"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8301"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8287"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8277"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8266"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8253"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8239"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8237"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8236"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8223"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8195"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8179"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8179"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8164"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8154"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8150"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8144"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8124"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8107"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "8102"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8094"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "8089"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "8079"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8070"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8035"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8033"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8025"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "8024"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7976"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7968"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7966"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7947"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7946"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7942"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7941"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7919"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7912"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7912"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7903"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7898"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7890"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7845"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7830"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7824"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7810"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7809"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7796"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7795"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7742"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7736"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7728"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7718"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7716"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7693"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7690"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7687"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7679"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7664"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7638"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7620"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7601"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7572"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7550"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7542"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7492"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7474"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7474"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7472"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7471"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7460"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7448"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7419"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7417"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7417"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7416"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7405"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7394"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7390"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7382"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7379"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7378"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7375"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7364"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7361"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7338"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7333"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7315"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7313"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7311"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7308"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7284"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7267"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7266"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7260"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7260"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7254"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7250"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7247"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7212"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7198"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7178"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7175"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7168"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7160"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7153"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7127"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7107"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "7086"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7068"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7042"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7040"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "7040"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7012"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "7008"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "7000"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6958"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6954"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6947"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6925"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6925"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6922"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6906"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6859"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6844"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6839"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6830"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6797"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6793"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6778"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6765"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6765"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6758"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6740"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6708"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6689"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6685"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6649"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6632"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6610"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6590"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6572"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6538"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6526"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6506"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6482"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6479"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6478"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6386"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6344"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6313"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6304"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6294"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6288"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6255"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6248"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6236"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6208"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6185"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6174"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6169"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6159"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6133"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6117"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6110"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6106"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6074"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6053"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6046"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6042"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "6037"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6031"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6024"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "6021"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6020"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6016"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "6007"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "6001"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5996"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5956"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5946"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5943"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5941"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5935"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5928"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5925"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5917"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5899"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5891"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5884"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5876"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5870"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5860"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5860"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5854"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5846"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5818"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5806"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5802"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5788"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5779"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5769"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5765"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5757"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5754"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5751"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5706"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5675"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5662"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5652"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5647"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5645"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5638"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5623"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5616"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5599"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5596"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5590"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5586"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5561"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "VA",
                "Sum (Export record count)": "5559"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5544"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5529"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5508"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5505"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5485"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5479"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5478"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5478"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5474"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5470"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5455"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5452"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5434"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5434"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5432"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5421"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5413"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5401"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5384"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5378"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5356"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5351"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5346"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5342"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5332"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5324"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5320"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5320"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5266"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5220"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5161"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5154"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5132"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5096"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5092"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5091"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5087"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5086"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5085"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5077"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5062"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5060"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "5055"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "5052"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "5030"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5022"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5021"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5018"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5017"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5016"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5016"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "5014"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4999"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4991"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4979"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4978"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4978"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4968"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4940"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4939"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4932"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4914"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4904"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4903"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4884"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4882"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4872"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4851"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4831"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4791"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4779"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4779"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4778"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4776"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4772"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4760"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4724"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4714"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4672"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4662"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4637"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4623"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4615"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4612"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4591"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4580"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4570"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4559"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4552"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4549"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4516"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4495"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4494"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4475"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4471"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4465"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4442"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4434"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4384"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4377"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4360"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4359"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4357"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4353"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4352"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4352"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4350"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4344"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4342"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4336"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4335"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4333"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4324"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4317"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4315"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4312"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4312"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4307"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4298"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4266"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4258"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4255"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4254"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4253"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4253"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4250"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4250"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4250"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4250"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4250"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4248"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4246"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4246"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4246"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4244"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4243"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4243"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4242"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4241"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4238"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4238"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4238"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4237"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4237"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4236"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4235"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4232"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4227"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4226"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4225"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4224"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4224"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4223"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4221"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4221"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4221"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4219"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4214"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4213"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4213"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4204"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4202"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4200"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4199"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4186"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4181"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4177"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4168"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4164"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4161"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4150"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4145"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4137"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4135"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4134"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4134"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4129"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4120"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4099"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4098"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4098"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4095"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4087"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4084"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4050"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4050"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4038"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4037"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "4029"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "4029"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4026"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4017"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "4014"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4010"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4008"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4008"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4003"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "4000"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3998"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3998"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3995"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3993"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3984"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3968"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3944"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3927"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3919"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3917"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3914"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3900"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3900"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3885"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3881"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3869"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3858"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3858"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3847"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3841"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3831"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3791"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3785"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3748"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3700"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3690"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3688"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3687"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3681"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3677"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3672"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3669"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3647"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3638"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3628"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3628"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3623"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3614"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3599"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3593"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3585"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3549"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3545"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3544"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3542"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3541"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3537"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3528"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3525"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3524"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3524"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3524"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3510"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3486"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3482"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3465"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3461"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3461"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3461"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3426"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3425"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3406"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3406"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3405"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3403"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3398"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3388"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3346"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3345"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3341"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3340"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3338"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3337"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3337"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3333"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3325"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3315"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3312"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3311"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3311"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3310"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3309"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3304"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3302"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3294"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3289"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3275"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3263"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3261"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3253"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3250"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3247"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3246"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3242"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3242"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3237"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3237"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3232"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3229"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3229"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3228"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3227"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3219"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "3200"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3192"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3178"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3170"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3109"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3107"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3084"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3066"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "3024"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3016"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3016"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3012"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "3006"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "3004"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2992"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2990"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2982"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2980"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2970"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2970"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2963"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2962"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2960"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2957"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2956"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2948"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2942"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2930"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2916"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2912"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2897"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2892"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2890"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2890"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2890"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2883"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2879"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2864"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2864"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2864"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2861"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2860"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2860"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "FULL_SQL",
                "Sum (Export record count)": "2860"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2849"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2790"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2765"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2764"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2750"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2717"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2660"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2655"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2651"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2631"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2611"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2610"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2587"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2546"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2543"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2504"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2491"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2477"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2461"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2444"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2444"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2441"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2438"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2429"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2417"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2404"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2402"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2398"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2396"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2394"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2393"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2392"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2390"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2390"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2390"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2386"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2386"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2384"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2383"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2382"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2380"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2380"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2378"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2378"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2376"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2376"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2374"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2368"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2366"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2354"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2352"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2346"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2338"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2334"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2334"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2332"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2332"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2331"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2330"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2330"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2329"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2324"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2324"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2322"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2322"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2318"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2318"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2318"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2317"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2317"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2316"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2316"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2314"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2314"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2314"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2313"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2312"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2312"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2312"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2311"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2311"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2311"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2310"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2310"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2310"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2310"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2310"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2308"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2306"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2306"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2304"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2302"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2302"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2302"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2301"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2300"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2300"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2300"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2300"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2300"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2298"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2296"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2295"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2294"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2294"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2294"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2293"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2293"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2292"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2292"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2290"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2290"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2290"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2290"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2290"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2288"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2286"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2286"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2286"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2284"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2282"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2282"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2282"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2280"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2278"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2278"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2278"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2276"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2276"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2276"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2276"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2275"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2274"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2274"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2274"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2274"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2274"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2272"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2270"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2270"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2268"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2267"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2266"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2266"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2266"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2266"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2264"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2262"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2262"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2260"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2258"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2256"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2244"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2244"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2243"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2234"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2234"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2234"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2234"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2233"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2230"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2230"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2226"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2224"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2224"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2224"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2223"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2222"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2220"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2218"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2218"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2216"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2208"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2206"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2201"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2196"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2180"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2180"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2178"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2168"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2166"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2166"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "ACCESS_LOG_DETAILED",
                "Sum (Export record count)": "2154"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2136"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2126"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "2126"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2114"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2107"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2100"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "2030"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2029"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "2029"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "2001"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1993"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1993"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1985"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1973"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1967"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1925"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1924"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1911"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1892"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1886"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1878"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1873"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1867"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1864"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1833"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1833"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1832"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1828"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1822"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1811"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1806"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1797"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1794"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1792"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1791"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1790"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1785"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1777"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1760"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1756"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1755"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1752"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1745"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1741"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1738"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1718"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1714"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1700"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1683"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1682"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "1678"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1645"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1637"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1625"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1624"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1605"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1598"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1596"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1593"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1584"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1579"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1572"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1571"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1525"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1519"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1515"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1512"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1501"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1496"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1454"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1413"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1402"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1394"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1385"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1384"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1383"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1383"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1370"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1362"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1358"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1353"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1346"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1343"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1342"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1337"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1323"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1316"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1308"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1306"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1305"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1304"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1289"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1287"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1281"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1281"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1280"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1277"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1271"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1271"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1270"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1270"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1270"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1269"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1269"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1269"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1267"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1267"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1266"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1265"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1265"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1265"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1251"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1249"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1242"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1242"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1234"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1232"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1231"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1230"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1227"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1223"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1215"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1210"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1209"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1208"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1198"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1183"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1181"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1170"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1170"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1169"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1169"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1169"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1164"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1164"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "1163"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1157"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1156"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1156"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1143"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1143"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1143"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1142"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1141"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1139"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1139"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1131"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1130"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1130"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1124"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1121"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1119"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1118"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1117"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1117"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1109"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1105"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1104"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1098"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1094"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1094"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1082"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1081"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1075"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1060"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1060"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1059"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1046"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1042"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1039"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "1039"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "1035"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "1031"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1026"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1024"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1023"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1015"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "1012"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "996"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "994"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "992"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "986"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "977"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "971"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "962"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "955"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "953"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "941"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "935"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "933"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "928"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "925"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "901"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "897"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "894"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "887"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "886"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "879"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "874"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "871"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "865"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "865"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "864"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "862"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "862"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "861"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "855"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "852"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "848"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "847"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "845"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "842"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "841"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "837"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "829"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "829"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "827"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "815"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "812"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "810"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "810"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "810"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "810"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "809"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "808"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "808"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "808"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "804"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "793"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "786"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "783"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "756"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "743"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "739"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "739"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "739"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "738"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "738"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "738"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "738"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "738"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "737"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "737"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "737"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "737"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "737"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "736"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "735"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "733"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "731"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "729"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "728"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "725"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "725"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "725"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "725"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "725"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "724"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "723"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "722"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "721"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "721"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "718"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "706"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "699"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "697"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "696"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "694"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "682"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "678"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "677"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "675"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "675"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "674"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "674"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "667"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "663"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "662"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "657"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "656"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "655"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "655"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "655"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "654"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "652"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "651"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "646"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "640"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "636"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "628"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "627"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "621"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "614"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "609"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "602"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "597"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "596"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "579"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "576"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "573"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "560"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "558"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "557"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "557"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "552"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "545"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "540"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "538"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "531"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "529"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "529"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "529"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "528"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "527"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "526"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "526"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "526"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "526"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "526"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "521"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "517"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "515"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "514"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "513"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "513"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "513"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "SESSION",
                "Sum (Export record count)": "513"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "512"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "508"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "506"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "505"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "505"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "504"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "501"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "501"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "500"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "500"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "496"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "496"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "494"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "493"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "485"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "476"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "475"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "473"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "472"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "471"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "471"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "467"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "466"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "466"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "465"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "464"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "464"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "463"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "459"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "456"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "456"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "454"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "454"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "454"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "454"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "454"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "452"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "452"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "450"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "450"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "448"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "448"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "447"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "447"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "446"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "446"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "446"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "445"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "443"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "443"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "443"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "442"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "441"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "441"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "441"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "441"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "441"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "440"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "439"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "439"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "439"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "439"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "438"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "438"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "438"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "438"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "437"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "437"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "437"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "435"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "435"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "434"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "434"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "434"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "434"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "433"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "433"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "433"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "433"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "432"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "432"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "432"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "431"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "431"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "431"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "431"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "430"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "430"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "429"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "429"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "428"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "428"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "427"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "427"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "427"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "426"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "426"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "426"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "426"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "426"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "425"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "425"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "425"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "425"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "424"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "423"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "423"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "423"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "422"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "422"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "421"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "420"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "419"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "419"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "419"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "419"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "418"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "418"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "418"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "417"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "416"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "416"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "414"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "413"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "412"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "410"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "409"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "409"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "408"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "407"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "407"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "407"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "406"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "406"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "404"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "400"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "400"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "400"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "399"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "399"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "398"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "396"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "396"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "389"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "386"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "386"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "384"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "384"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "382"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "381"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "379"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "376"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "374"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "373"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "371"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "369"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "368"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "368"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "367"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "364"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "364"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "364"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "362"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "362"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "361"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "360"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "360"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "360"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "358"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "358"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "356"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "354"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "354"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "354"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "352"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "351"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "350"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "349"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "349"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "349"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "349"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "348"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "346"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "343"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "341"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "340"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "336"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "335"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "334"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "334"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "334"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "333"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "319"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "318"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "314"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "313"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "312"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "309"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "308"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "305"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "302"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "302"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "301"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "300"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "299"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "297"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "296"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "294"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "293"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "293"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "293"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "291"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "291"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "290"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "290"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "290"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "290"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "289"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "287"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "285"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "284"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "284"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "284"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "284"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "283"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "282"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "282"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "282"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "281"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "281"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "279"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "279"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "279"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "279"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "278"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "278"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "277"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "276"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "275"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "275"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "274"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "274"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "273"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "272"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "271"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "271"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "269"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "269"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "269"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "269"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "269"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "268"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "268"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "267"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "267"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "266"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "266"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "265"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "262"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "262"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "261"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "259"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "259"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "258"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "258"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "258"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "255"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "252"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "251"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "251"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "250"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "250"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "250"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "250"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "248"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "248"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "247"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "247"
            },
            {
                "Period start": "2024-09-06 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "246"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "245"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "245"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "244"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "244"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "243"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "243"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "243"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "242"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "241"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "241"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "240"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "240"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "240"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "239"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "239"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "239"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "238"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "237"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "236"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "235"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "235"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "234"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "234"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "234"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "233"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "233"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "233"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "232"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "231"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "231"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "231"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "231"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "230"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "229"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "228"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "228"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "228"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "228"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "228"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "227"
            },
            {
                "Period start": "2024-09-06 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "226"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "225"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "224"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "223"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "222"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "221"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "220"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "219"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "218"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "217"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "217"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "216"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "215"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "215"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "215"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "214"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "213"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "213"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "213"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "213"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "213"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "212"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "211"
            },
            {
                "Period start": "2024-08-31 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "210"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "209"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "209"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "209"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "209"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "208"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "207"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "207"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "207"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "206"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-23 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "204"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "202"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "201"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "201"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "201"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "201"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "200"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "199"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "198"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "197"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "197"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "196"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "195"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "195"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "195"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "194"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "194"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "194"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "194"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "194"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "193"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "193"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "192"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "192"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "192"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "191"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "190"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "190"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "190"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "190"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "190"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "189"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "189"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "188"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "188"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "188"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "188"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "188"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "186"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "185"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "185"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "185"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "185"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "184"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "183"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "182"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "180"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "179"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "178"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "177"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "176"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "175"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "174"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "172"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "170"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "169"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "169"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "168"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "167"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "167"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "167"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "166"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "166"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "166"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "166"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "166"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "164"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "163"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "163"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "162"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "162"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "162"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "162"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "161"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "161"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "160"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "160"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "160"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "160"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "160"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "159"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "158"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "158"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "156"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "156"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "154"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "154"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "154"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "154"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "154"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "152"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "152"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "152"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "152"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "152"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "151"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "150"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "150"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "148"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "146"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "146"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "146"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "146"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "145"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "144"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "144"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "143"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "143"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "142"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "142"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "141"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "141"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "140"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "140"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "140"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "140"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "140"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "139"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "138"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "138"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "138"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "138"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "137"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "136"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "136"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "136"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "136"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "136"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "135"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "134"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "134"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "134"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "133"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "133"
            },
            {
                "Period start": "2024-08-24 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "133"
            },
            {
                "Period start": "2024-08-25 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "133"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "133"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "132"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "132"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "132"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "132"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "132"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "131"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "131"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "131"
            },
            {
                "Period start": "2024-09-01 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "131"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "131"
            },
            {
                "Period start": "2024-08-18 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-08-31 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "130"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "129"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "129"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "129"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "129"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "129"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "128"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "125"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "124"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "124"
            },
            {
                "Period start": "2024-08-29 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "123"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "122"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "122"
            },
            {
                "Period start": "2024-08-22 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "121"
            },
            {
                "Period start": "2024-08-26 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "120"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "120"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-08-22 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "119"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "118"
            },
            {
                "Period start": "2024-08-28 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "118"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "118"
            },
            {
                "Period start": "2024-08-18 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "118"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-22 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-21 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-27 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-29 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-29 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-09-01 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "117"
            },
            {
                "Period start": "2024-08-26 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "116"
            },
            {
                "Period start": "2024-08-18 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "116"
            },
            {
                "Period start": "2024-08-28 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "116"
            },
            {
                "Period start": "2024-09-04 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-19 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-27 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-26 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-23 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-23 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-09-02 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-09-02 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-08-28 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "115"
            },
            {
                "Period start": "2024-09-04 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-09-01 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-08-18 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-08-20 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-08-30 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "114"
            },
            {
                "Period start": "2024-08-19 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-08-23 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-02 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-01 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-08-19 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-03 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "113"
            },
            {
                "Period start": "2024-09-04 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "112"
            },
            {
                "Period start": "2024-08-30 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "112"
            },
            {
                "Period start": "2024-09-06 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "112"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "111"
            },
            {
                "Period start": "2024-08-21 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "111"
            },
            {
                "Period start": "2024-09-03 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "111"
            },
            {
                "Period start": "2024-08-21 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "111"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "111"
            },
            {
                "Period start": "2024-08-20 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "110"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "110"
            },
            {
                "Period start": "2024-08-20 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "110"
            },
            {
                "Period start": "2024-08-25 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-08-30 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-08-27 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-09-03 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "109"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-08-25 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-08-25 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-05 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-05 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-05 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "107"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "106"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "104"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "104"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "104"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "104"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "104"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "99"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "98"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "98"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "98"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "98"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "98"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "97"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "97"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "96"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "95"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "95"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "95"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "95"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "95"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "94"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "94"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "94"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "94"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "93"
            },
            {
                "Period start": "2024-08-30 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "92"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-09-01 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "91"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "90"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "90"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "90"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "89"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "88"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "87"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "AGG_ANALYTIC_INPUT",
                "Sum (Export record count)": "86"
            },
            {
                "Period start": "2024-09-03 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "86"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "85"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "85"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "85"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "85"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "84"
            },
            {
                "Period start": "2024-08-19 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "84"
            },
            {
                "Period start": "2024-08-22 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "83"
            },
            {
                "Period start": "2024-08-27 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "83"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "83"
            },
            {
                "Period start": "2024-08-20 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "83"
            },
            {
                "Period start": "2024-08-22 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-09-03 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-08-23 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-09-04 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-08-20 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-08-30 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "82"
            },
            {
                "Period start": "2024-08-28 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "81"
            },
            {
                "Period start": "2024-09-02 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "81"
            },
            {
                "Period start": "2024-08-27 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-08-26 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-08-21 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-09-04 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-09-05 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-09-02 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "80"
            },
            {
                "Period start": "2024-08-26 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "79"
            },
            {
                "Period start": "2024-08-24 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-09-05 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-26 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-29 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-25 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-09-01 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-30 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-20 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-23 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-19 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "78"
            },
            {
                "Period start": "2024-08-18 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "77"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "77"
            },
            {
                "Period start": "2024-08-29 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "77"
            },
            {
                "Period start": "2024-09-03 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-25 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-09-02 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-18 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-28 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-22 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "76"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-08-19 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-09-04 20:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-08-27 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "74"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "73"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "69"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "POLICY_VIOLATIONS_DETAILED",
                "Sum (Export record count)": "68"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "67"
            },
            {
                "Period start": "2024-08-28 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "64"
            },
            {
                "Period start": "2024-08-21 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "63"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "55"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "53"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "52"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "50"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "50"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "50"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "50"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "49"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "48"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "48"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "48"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "48"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "48"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "47"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "47"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "47"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "46"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "45"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-08-27 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "44"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "43"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-24 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-09-04 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "42"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "41"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-31 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "40"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "39"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "39"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "39"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 16:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "38"
            },
            {
                "Period start": "2024-09-06 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "37"
            },
            {
                "Period start": "2024-08-21 03:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "37"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "37"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "37"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "37"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-29 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-29 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "36"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "35"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "35"
            },
            {
                "Period start": "2024-08-19 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-18 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-03 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-31 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-20 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "34"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-08-27 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "33"
            },
            {
                "Period start": "2024-08-18 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-29 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-18 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-22 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-23 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "32"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-22 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-29 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "31"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-18 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-30 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-26 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-01 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-26 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-22 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-25 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-26 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-27 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "30"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "29"
            },
            {
                "Period start": "2024-08-21 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "29"
            },
            {
                "Period start": "2024-08-19 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "29"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "29"
            },
            {
                "Period start": "2024-09-05 04:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "29"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-18 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-30 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-29 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-30 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 10:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-09-01 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-26 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-20 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "28"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "27"
            },
            {
                "Period start": "2024-08-28 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "27"
            },
            {
                "Period start": "2024-09-02 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "27"
            },
            {
                "Period start": "2024-09-01 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "27"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "27"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-17 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-21 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-17 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-17 22:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-20 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-27 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-05 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-06 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-29 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-06 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 13:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-01 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-03 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-03 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-21 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-04 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-24 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-20 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-09-02 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 19:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-19 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-24 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-19 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "26"
            },
            {
                "Period start": "2024-08-28 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "25"
            },
            {
                "Period start": "2024-08-20 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-21 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-21 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-03 01:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-27 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-27 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-03 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-02 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-25 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "24"
            },
            {
                "Period start": "2024-08-23 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "23"
            },
            {
                "Period start": "2024-08-22 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "23"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-02 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-05 21:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 15:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "SENTENCE",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-25 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-09-02 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "22"
            },
            {
                "Period start": "2024-08-30 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-08-30 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-09-02 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-08-20 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-08-27 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-09-06 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-09-02 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "21"
            },
            {
                "Period start": "2024-09-03 09:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-08-21 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 13:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-08-27 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-08-27 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "20"
            },
            {
                "Period start": "2024-08-30 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-27 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-20 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-09-03 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-29 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-21 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-29 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-21 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-19 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-09-04 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-23 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "19"
            },
            {
                "Period start": "2024-08-28 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-08-29 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-08-22 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "OBJECT",
                "Sum (Export record count)": "18"
            },
            {
                "Period start": "2024-08-23 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-24 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-09-03 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-23 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-26 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-31 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-23 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-21 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-31 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-26 19:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-20 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-09-05 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-29 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-25 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-20 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-24 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-27 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-28 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-08-21 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-09-06 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "17"
            },
            {
                "Period start": "2024-09-05 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-20 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-30 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-26 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-09-02 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-21 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "16"
            },
            {
                "Period start": "2024-08-28 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-19 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-03 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-24 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-04 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-18 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-18 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-18 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-01 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-24 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-03 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-28 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-06 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-31 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-29 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-05 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-09-01 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-28 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-22 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-31 21:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-22 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-25 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-19 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-24 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "15"
            },
            {
                "Period start": "2024-08-27 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-18 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-09-03 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-09-03 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-24 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-09-06 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-23 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-28 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-19 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "14"
            },
            {
                "Period start": "2024-08-30 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-18 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-30 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-25 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-29 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-18 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-24 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-20 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-29 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-02 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-19 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-25 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-31 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-24 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-18 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-19 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-06 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-31 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-05 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-05 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-06 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-28 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-04 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-26 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-05 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-30 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-31 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-25 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-04 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-22 18:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-04 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-26 06:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-21 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-26 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-26 12:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-23 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-19 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-19 00:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-25 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-26 08:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-08-22 14:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "13"
            },
            {
                "Period start": "2024-09-04 02:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "12"
            },
            {
                "Period start": "2024-08-25 09:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "12"
            },
            {
                "Period start": "2024-09-02 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "12"
            },
            {
                "Period start": "2024-09-04 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "11"
            },
            {
                "Period start": "2024-08-24 22:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "10"
            },
            {
                "Period start": "2024-08-24 15:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "10"
            },
            {
                "Period start": "2024-08-27 00:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "10"
            },
            {
                "Period start": "2024-08-31 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "10"
            },
            {
                "Period start": "2024-08-31 14:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "9"
            },
            {
                "Period start": "2024-09-01 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "9"
            },
            {
                "Period start": "2024-08-20 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-09-02 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-08-25 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-08-23 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-08-20 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-08-31 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-09-03 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-09-03 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "8"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "7"
            },
            {
                "Period start": "2024-09-05 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "7"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "7"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "6"
            },
            {
                "Period start": "2024-08-30 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "6"
            },
            {
                "Period start": "2024-08-23 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "6"
            },
            {
                "Period start": "2024-09-06 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-30 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-24 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-27 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-31 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-17 20:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-22 08:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "5"
            },
            {
                "Period start": "2024-08-23 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-30 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-29 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-09-05 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-25 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-29 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-09-03 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-20 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-09-03 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-18 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-29 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-26 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "4"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-21 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-20 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-09-01 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-28 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-30 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-19 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-09-04 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-25 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-23 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-27 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-09-02 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "3"
            },
            {
                "Period start": "2024-08-26 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-05 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-21 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-22 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-18 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-28 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-20 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-05 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-28 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-02 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-18 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-03 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-22 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-24 21:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-31 09:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-24 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-06 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-06 02:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-05 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-26 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-05 06:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-25 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-09-06 11:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-24 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-31 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-23 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-23 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-18 23:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-29 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-31 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "2"
            },
            {
                "Period start": "2024-08-31 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-24 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-27 17:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-09-06 01:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-09-05 09:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-18 05:00:00.0",
                "Data type": "EXCEPTION",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-30 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-24 16:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-09-04 07:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            },
            {
                "Period start": "2024-08-31 10:00:00.0",
                "Data type": "SESSION_END",
                "Sum (Export record count)": "1"
            }
        ]
    },
    "width": 400,
    "height": 600,
    "mark": "circle",
    "encoding": {
        "x": {
            "field": "Period start",
            "type": "temporal",
            "axis": {
                "grid": false
            }
        },
        "y": {
            "field": "Sum (Export record count)",
            "type": "quantitative",
            "axis": {
                "grid": false
            }
        },
        "color": {
            "field": "Data type",
            "type": "nominal",
            "scale": {
                "scheme": "category10"
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
    "description": "3-Category circle",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "name": "chartData"
    },
    "width": "container",
    "height": "container",
    "mark": "circle",
    "encoding": {
        "x": {
            "field": "$primary_category",
            "type": "temporal",
            "axis": {
                "grid": false
            }
        },
        "y": {
            "field": "$primary_measure",
            "type": "quantitative",
            "axis": {
                "grid": false
            }
        },
        "color": {
            "field": "$secondary_category",
            "type": "nominal",
            "scale": {
                "scheme": "category10"
            }
        }
    }
}
```

