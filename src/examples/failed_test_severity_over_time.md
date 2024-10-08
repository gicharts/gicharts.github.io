
# Failed test severity over time
A normalized area graph showing the severity of failed vulnerability assessment tests over time.
- **Report category:** Vulnerability assessments

- **Required report headers:**
    - **Primary category:** Severity
    - **Secondary category:** Date (Execution date (local time))
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
    "description": "Normalized stacked area chart",
    "data": {
        "values": [
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-26",
                "Count": "478"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-25",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-24",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-09",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-22",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-04",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-11",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-12",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-29",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-10",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-15",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-26",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-17",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-02",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-19",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-03",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-30",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-01",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-08",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-05",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-16",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-23",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-18",
                "Count": "470"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-03",
                "Count": "456"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-02",
                "Count": "456"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-04",
                "Count": "456"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-27",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-25",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-31",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-05",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-29",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-13",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-26",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-17",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-03",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-28",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-21",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-07",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-19",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-06",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-28",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-14",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-30",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-24",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-23",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-12",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-04",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-10",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-27",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-01",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-11",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-20",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-06-18",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-24",
                "Count": "455"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-09",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-15",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-12",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-25",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-05",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-11",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-07",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-22",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-02",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-29",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-17",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-10",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-19",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-23",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-01",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-06",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-26",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-24",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-31",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-08-08",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-16",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-30",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-08",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-05",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-07-18",
                "Count": "452"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-22",
                "Count": "451"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-15",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-17",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-25",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-19",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-18",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-22",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-01",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-30",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-24",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-23",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-29",
                "Count": "440"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-16",
                "Count": "440"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-21",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-16",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-02",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-15",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-17",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-06",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-14",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-07",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-09",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-03",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-20",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-10",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-13",
                "Count": "434"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-05-08",
                "Count": "434"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-04",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-11",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-09",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-08",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-03",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-02",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-10",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-05",
                "Count": "420"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-12",
                "Count": "419"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-30",
                "Count": "296"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-01",
                "Count": "246"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-19",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-14",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-23",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-28",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-20",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-05",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-02",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-28",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-04",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-21",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-17",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-29",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-03",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-03",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-13",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-24",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-26",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-18",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-31",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-25",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-30",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-11",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-07",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-06",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-10",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-24",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-27",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-27",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-01",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-06-12",
                "Count": "235"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-22",
                "Count": "234"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-04",
                "Count": "234"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-21",
                "Count": "224"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-10",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-03",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-16",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-14",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-09",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-06",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-20",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-15",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-08",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-07",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-17",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-02",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-05-13",
                "Count": "222"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-16",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-07",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-12",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-03",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-08",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-06",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-27",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-15",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-29",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-21",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-04",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-13",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-28",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-17",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-21",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-01",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-07",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-25",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-09",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-14",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-27",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-10",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-20",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-18",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-24",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-14",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-22",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-28",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-13",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-20",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-02",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-05",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-11",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-31",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-26",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-19",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-04-06",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-03-23",
                "Count": "218"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-05",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-30",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-15",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-08",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-01",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-31",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-25",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-22",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-12",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-18",
                "Count": "183"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-06",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-02",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-16",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-24",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-19",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-29",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-11",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-08-07",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-23",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-10",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-08",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-05",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-17",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-09",
                "Count": "182"
            },
            {
                "Severity": "MAJOR",
                "Date (Execution date (local time))": "2024-07-26",
                "Count": "182"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-26",
                "Count": "177"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-16",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-30",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-29",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-19",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-18",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-15",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-23",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-25",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-17",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-24",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-22",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-01",
                "Count": "169"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-08",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-10",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-02",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-11",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-12",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-03",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-05",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-09",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-04",
                "Count": "163"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-18",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-27",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-30",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-31",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-02",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-17",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-06",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-28",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-04",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-23",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-19",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-26",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-14",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-20",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-05",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-24",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-25",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-03",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-27",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-13",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-03",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-28",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-12",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-21",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-24",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-11",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-29",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-01",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-04",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-10",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-06-07",
                "Count": "117"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-22",
                "Count": "115"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-21",
                "Count": "115"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-03",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-14",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-16",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-09",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-02",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-17",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-08",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-13",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-07",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-20",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-10",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-05",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-15",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-05-06",
                "Count": "109"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-09",
                "Count": "108"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-08",
                "Count": "108"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-11",
                "Count": "108"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-10",
                "Count": "108"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-30",
                "Count": "106"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-16",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-29",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-23",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-17",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-30",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-25",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-01",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-24",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-19",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-18",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-02",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-08",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-07",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-22",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-15",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-31",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-26",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-07-12",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-06",
                "Count": "104"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-08-05",
                "Count": "104"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-19",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-22",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-16",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-17",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-01",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-25",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-08",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-10",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-04",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-09",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-18",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-24",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-15",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-30",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-11",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-03",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-23",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-26",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-02",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-12",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-05",
                "Count": "73"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-29",
                "Count": "73"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-01",
                "Count": "65"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-07",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-18",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-27",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-20",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-17",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-28",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-10",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-08",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-25",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-14",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-04",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-13",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-23",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-21",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-12",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-01",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-15",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-06",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-22",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-13",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-31",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-21",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-07",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-20",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-29",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-27",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-16",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-05",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-24",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-02",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-11",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-19",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-26",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-06",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-14",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-03",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-04-28",
                "Count": "60"
            },
            {
                "Severity": "CRITICAL",
                "Date (Execution date (local time))": "2024-03-09",
                "Count": "60"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-09",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-03",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-30",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-02",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-03",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-17",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-27",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-06",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-12",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-13",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-25",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-15",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-26",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-04",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-29",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-10",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-04",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-23",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-19",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-02",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-03",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-21",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-24",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-08",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-27",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-06",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-07",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-13",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-28",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-28",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-10",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-18",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-22",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-17",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-01",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-05",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-24",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-20",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-11",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-14",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-21",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-07",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-31",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-16",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-05-20",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-06-14",
                "Count": "59"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-01",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-15",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-08",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-06",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-24",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-05",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-19",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-17",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-23",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-22",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-18",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-29",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-12",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-16",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-30",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-25",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-02",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-07",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-31",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-09",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-26",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-08-05",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-08",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-11",
                "Count": "57"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-07-10",
                "Count": "57"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-30",
                "Count": "55"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-01",
                "Count": "38"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-14",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-27",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-08",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-10",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-24",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-06",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-21",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-16",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-07",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-11",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-20",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-27",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-04",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-02",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-21",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-29",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-13",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-06",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-13",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-07",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-25",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-18",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-26",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-20",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-17",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-22",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-03",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-09",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-28",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-15",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-28",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-23",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-12",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-31",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-04-14",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-19",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-01",
                "Count": "36"
            },
            {
                "Severity": "MINOR",
                "Date (Execution date (local time))": "2024-03-05",
                "Count": "36"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-30",
                "Count": "21"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-01",
                "Count": "15"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-06",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-16",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-22",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-31",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-11",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-01",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-20",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-21",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-29",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-14",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-27",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-28",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-23",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-26",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-20",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-28",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-13",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-09",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-06",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-21",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-15",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-04",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-02",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-13",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-19",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-12",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-10",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-25",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-14",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-03",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-17",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-24",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-08",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-27",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-05",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-18",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-03-07",
                "Count": "14"
            },
            {
                "Severity": "CAUTION",
                "Date (Execution date (local time))": "2024-04-07",
                "Count": "14"
            }
        ]
    },
    "title": "Percentage of VA test failures by severity over time",
    "width": 600,
    "height": 300,
    "mark": {
        "type": "area"
    },
    "encoding": {
        "x": {
            "field": "Date (Execution date (local time))",
            "type": "temporal"
        },
        "color": {
            "field": "Severity",
            "type": "nominal",
            "legend": {
                "orient": "bottom"
            },
            "scale": {
                "scheme": "yelloworangered"
            },
            "sort": [
                "CAUTION",
                "MINOR",
                "MAJOR",
                "CRITICAL"
            ]
        },
        "y": {
            "field": "Count",
            "aggregate": "sum",
            "stack": "normalize"
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
    "description": "Normalized stacked area chart",
    "data": {
        "name": "chartData"
    },
    "title": "Percentage of VA test failures by severity over time",
    "width": "container",
    "height": "container",
    "mark": {
        "type": "area"
    },
    "encoding": {
        "x": {
            "field": "$secondary_category",
            "type": "temporal"
        },
        "color": {
            "field": "$primary_category",
            "type": "nominal",
            "legend": {
                "orient": "bottom"
            },
            "scale": {
                "scheme": "yelloworangered"
            },
            "sort": [
                "CAUTION",
                "MINOR",
                "MAJOR",
                "CRITICAL"
            ]
        },
        "y": {
            "field": "$primary_measure",
            "aggregate": "sum",
            "stack": "normalize"
        }
    }
}
```

