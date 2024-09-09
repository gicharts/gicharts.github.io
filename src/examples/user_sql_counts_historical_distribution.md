
# Yesterday's SQL counts per user comparison to box-plot
Yesterday's number of SQL executed per user (red dots) compared to their historical distribution of access as represented by a box plot. 
- **Report category:** Database activity

- **Required report headers:**
    - **Primary category:** Date (Period start (local time))
    - **Secondary category:** DB user
    - **Primary value:** Sum (Total count)
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
    "width": 800,
    "height": 400,
    "title": "Number of SQL executed per user yesterday (red dots) compared to historical distribution (box-plots)",
    "data": {
        "values": [
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13870"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "DANIEL",
                "Sum (Total count)": "13864"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13814"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "DANIEL",
                "Sum (Total count)": "13808"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13656"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "DANIEL",
                "Sum (Total count)": "13650"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13616"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "DANIEL",
                "Sum (Total count)": "13610"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13500"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "DANIEL",
                "Sum (Total count)": "13494"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13290"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "DANIEL",
                "Sum (Total count)": "13284"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13226"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13224"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "DANIEL",
                "Sum (Total count)": "13220"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "DANIEL",
                "Sum (Total count)": "13218"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "MAURICIO",
                "Sum (Total count)": "13098"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "DANIEL",
                "Sum (Total count)": "13092"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12958"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "DANIEL",
                "Sum (Total count)": "12952"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12826"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "DANIEL",
                "Sum (Total count)": "12820"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12704"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "DANIEL",
                "Sum (Total count)": "12698"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12666"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "DANIEL",
                "Sum (Total count)": "12660"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12644"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "DANIEL",
                "Sum (Total count)": "12638"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12598"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "DANIEL",
                "Sum (Total count)": "12592"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12490"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "DANIEL",
                "Sum (Total count)": "12484"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12330"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "DANIEL",
                "Sum (Total count)": "12324"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12312"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "DANIEL",
                "Sum (Total count)": "12306"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12196"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "DANIEL",
                "Sum (Total count)": "12190"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12182"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "DANIEL",
                "Sum (Total count)": "12176"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "MAURICIO",
                "Sum (Total count)": "12018"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "DANIEL",
                "Sum (Total count)": "12012"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11994"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "DANIEL",
                "Sum (Total count)": "11988"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11740"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "DANIEL",
                "Sum (Total count)": "11734"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11646"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "DANIEL",
                "Sum (Total count)": "11640"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11592"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "DANIEL",
                "Sum (Total count)": "11586"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11564"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "DANIEL",
                "Sum (Total count)": "11558"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "MAURICIO",
                "Sum (Total count)": "11240"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "DANIEL",
                "Sum (Total count)": "11234"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "8077"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "7934"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "TANSEL",
                "Sum (Total count)": "7789"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "SALLY",
                "Sum (Total count)": "7549"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "TANSEL",
                "Sum (Total count)": "7492"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "DON",
                "Sum (Total count)": "7405"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "7357"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "USMAN",
                "Sum (Total count)": "7261"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "TANSEL",
                "Sum (Total count)": "7260"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "MATT",
                "Sum (Total count)": "7108"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "DEVAN",
                "Sum (Total count)": "7069"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "USMAN",
                "Sum (Total count)": "7053"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "BILL",
                "Sum (Total count)": "6925"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "TONY",
                "Sum (Total count)": "6775"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "TANSEL",
                "Sum (Total count)": "6635"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "6589"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "USMAN",
                "Sum (Total count)": "6573"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "JOSHUA",
                "Sum (Total count)": "6542"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "TONY",
                "Sum (Total count)": "6541"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "SALLY",
                "Sum (Total count)": "6493"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "RICK",
                "Sum (Total count)": "6445"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "DAVID",
                "Sum (Total count)": "6441"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "MATT",
                "Sum (Total count)": "6440"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "POLLY",
                "Sum (Total count)": "6436"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "SALLY",
                "Sum (Total count)": "6435"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "POLLY",
                "Sum (Total count)": "6413"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "POLLY",
                "Sum (Total count)": "6288"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "ANDREW",
                "Sum (Total count)": "6253"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "DEVAN",
                "Sum (Total count)": "6195"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "DON",
                "Sum (Total count)": "6190"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "DAVID",
                "Sum (Total count)": "6157"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "POLLY",
                "Sum (Total count)": "6042"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "MATT",
                "Sum (Total count)": "6014"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "POLLY",
                "Sum (Total count)": "5983"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "POLLY",
                "Sum (Total count)": "5927"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "JOSHUA",
                "Sum (Total count)": "5916"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "POLLY",
                "Sum (Total count)": "5881"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "ANDREW",
                "Sum (Total count)": "5774"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "RICK",
                "Sum (Total count)": "5774"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "BILL",
                "Sum (Total count)": "5725"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "DEVAN",
                "Sum (Total count)": "5725"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "MATT",
                "Sum (Total count)": "5629"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "BILL",
                "Sum (Total count)": "5611"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "5588"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "DEVAN",
                "Sum (Total count)": "5544"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "DAVID",
                "Sum (Total count)": "5520"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "MATT",
                "Sum (Total count)": "5501"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "MATT",
                "Sum (Total count)": "5484"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "DAVID",
                "Sum (Total count)": "5456"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "SALLY",
                "Sum (Total count)": "5451"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "POLLY",
                "Sum (Total count)": "5438"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "5413"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "RICK",
                "Sum (Total count)": "5387"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "TONY",
                "Sum (Total count)": "5383"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "SALLY",
                "Sum (Total count)": "5363"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "RICK",
                "Sum (Total count)": "5342"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "DEVAN",
                "Sum (Total count)": "5342"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "BILL",
                "Sum (Total count)": "5340"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "5293"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "DON",
                "Sum (Total count)": "5252"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "SALLY",
                "Sum (Total count)": "5245"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "DAVID",
                "Sum (Total count)": "5210"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "BILL",
                "Sum (Total count)": "5177"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "SALLY",
                "Sum (Total count)": "5168"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "TONY",
                "Sum (Total count)": "5160"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "POLLY",
                "Sum (Total count)": "5124"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "ANDREW",
                "Sum (Total count)": "5122"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "SALLY",
                "Sum (Total count)": "5112"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "DON",
                "Sum (Total count)": "5091"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "DEVAN",
                "Sum (Total count)": "5054"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "GDM_USER",
                "Sum (Total count)": "5010"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "ANDREW",
                "Sum (Total count)": "5006"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "DAVID",
                "Sum (Total count)": "4957"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "POLLY",
                "Sum (Total count)": "4955"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "JOSHUA",
                "Sum (Total count)": "4910"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "MATT",
                "Sum (Total count)": "4888"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "USMAN",
                "Sum (Total count)": "4849"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "TONY",
                "Sum (Total count)": "4814"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "RICK",
                "Sum (Total count)": "4793"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "POLLY",
                "Sum (Total count)": "4778"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "TANSEL",
                "Sum (Total count)": "4719"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "JOSHUA",
                "Sum (Total count)": "4711"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "DON",
                "Sum (Total count)": "4691"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "4678"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "SALLY",
                "Sum (Total count)": "4669"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "POLLY",
                "Sum (Total count)": "4645"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "ANDREW",
                "Sum (Total count)": "4626"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "4621"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "BILL",
                "Sum (Total count)": "4618"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "DEVAN",
                "Sum (Total count)": "4616"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "4615"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "DON",
                "Sum (Total count)": "4551"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "TANSEL",
                "Sum (Total count)": "4544"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "BILL",
                "Sum (Total count)": "4525"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "DEVAN",
                "Sum (Total count)": "4457"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "DAVID",
                "Sum (Total count)": "4429"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "4429"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "USMAN",
                "Sum (Total count)": "4407"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "4370"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "4343"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "SALLY",
                "Sum (Total count)": "4334"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "BILL",
                "Sum (Total count)": "4334"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "MATT",
                "Sum (Total count)": "4332"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "4286"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "SALLY",
                "Sum (Total count)": "4285"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "JOSHUA",
                "Sum (Total count)": "4274"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "POLLY",
                "Sum (Total count)": "4253"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "DAVID",
                "Sum (Total count)": "4249"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "SALLY",
                "Sum (Total count)": "4219"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "DEVAN",
                "Sum (Total count)": "4211"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "BILL",
                "Sum (Total count)": "4190"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "SALLY",
                "Sum (Total count)": "4190"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "DEVAN",
                "Sum (Total count)": "4189"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "RICK",
                "Sum (Total count)": "4141"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "DAVID",
                "Sum (Total count)": "4141"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "DEVAN",
                "Sum (Total count)": "4141"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "ANDREW",
                "Sum (Total count)": "4140"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "ANDREW",
                "Sum (Total count)": "4137"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "RICK",
                "Sum (Total count)": "4129"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "TONY",
                "Sum (Total count)": "4094"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "DON",
                "Sum (Total count)": "4058"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "POLLY",
                "Sum (Total count)": "4055"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "4045"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "TONY",
                "Sum (Total count)": "4042"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "TONY",
                "Sum (Total count)": "4013"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "DEVAN",
                "Sum (Total count)": "3998"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "MATT",
                "Sum (Total count)": "3998"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "TONY",
                "Sum (Total count)": "3997"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "TONY",
                "Sum (Total count)": "3954"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "DON",
                "Sum (Total count)": "3950"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3932"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "TONY",
                "Sum (Total count)": "3910"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "SALLY",
                "Sum (Total count)": "3907"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "POLLY",
                "Sum (Total count)": "3902"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "DON",
                "Sum (Total count)": "3901"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "3900"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "USMAN",
                "Sum (Total count)": "3854"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "SALLY",
                "Sum (Total count)": "3854"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "TONY",
                "Sum (Total count)": "3834"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "DEVAN",
                "Sum (Total count)": "3830"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "POLLY",
                "Sum (Total count)": "3818"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "TONY",
                "Sum (Total count)": "3806"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3797"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "SALLY",
                "Sum (Total count)": "3795"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "SALLY",
                "Sum (Total count)": "3781"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "DON",
                "Sum (Total count)": "3761"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "USMAN",
                "Sum (Total count)": "3752"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "TANSEL",
                "Sum (Total count)": "3723"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "3710"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "DAVID",
                "Sum (Total count)": "3710"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3709"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "BILL",
                "Sum (Total count)": "3676"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "POLLY",
                "Sum (Total count)": "3671"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "USMAN",
                "Sum (Total count)": "3666"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "USMAN",
                "Sum (Total count)": "3662"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "USMAN",
                "Sum (Total count)": "3661"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "MATT",
                "Sum (Total count)": "3660"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "POLLY",
                "Sum (Total count)": "3641"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "RICK",
                "Sum (Total count)": "3624"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "DON",
                "Sum (Total count)": "3614"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3613"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "DAVID",
                "Sum (Total count)": "3573"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "ANDREW",
                "Sum (Total count)": "3553"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3535"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "TANSEL",
                "Sum (Total count)": "3516"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "MATT",
                "Sum (Total count)": "3511"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "3507"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3474"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "TONY",
                "Sum (Total count)": "3469"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3469"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "RICK",
                "Sum (Total count)": "3469"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "BILL",
                "Sum (Total count)": "3469"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "MATT",
                "Sum (Total count)": "3453"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "POLLY",
                "Sum (Total count)": "3439"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "USMAN",
                "Sum (Total count)": "3437"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "JOSHUA",
                "Sum (Total count)": "3432"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "BILL",
                "Sum (Total count)": "3421"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "TANSEL",
                "Sum (Total count)": "3415"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "POLLY",
                "Sum (Total count)": "3411"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "3392"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "DAVID",
                "Sum (Total count)": "3382"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "ANDREW",
                "Sum (Total count)": "3373"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "POLLY",
                "Sum (Total count)": "3339"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "BILL",
                "Sum (Total count)": "3339"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "TANSEL",
                "Sum (Total count)": "3316"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "MATT",
                "Sum (Total count)": "3284"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "3278"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "DEVAN",
                "Sum (Total count)": "3277"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "MATT",
                "Sum (Total count)": "3277"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "TANSEL",
                "Sum (Total count)": "3276"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "DAVID",
                "Sum (Total count)": "3201"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "DON",
                "Sum (Total count)": "3182"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "TONY",
                "Sum (Total count)": "3181"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "3178"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3144"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "TANSEL",
                "Sum (Total count)": "3123"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3123"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3122"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "TANSEL",
                "Sum (Total count)": "3119"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3115"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "BILL",
                "Sum (Total count)": "3100"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "TANSEL",
                "Sum (Total count)": "3086"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "DEVAN",
                "Sum (Total count)": "3085"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "3084"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "GDM_USER",
                "Sum (Total count)": "3082"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "3066"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "DEVAN",
                "Sum (Total count)": "3059"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "DAVID",
                "Sum (Total count)": "3053"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "ANDREW",
                "Sum (Total count)": "3038"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "DON",
                "Sum (Total count)": "3037"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "RICK",
                "Sum (Total count)": "2987"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "ANDREW",
                "Sum (Total count)": "2975"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "POLLY",
                "Sum (Total count)": "2959"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "DON",
                "Sum (Total count)": "2957"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "TANSEL",
                "Sum (Total count)": "2931"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "TANSEL",
                "Sum (Total count)": "2903"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2901"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "TONY",
                "Sum (Total count)": "2894"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "DEVAN",
                "Sum (Total count)": "2893"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "BILL",
                "Sum (Total count)": "2885"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "TANSEL",
                "Sum (Total count)": "2846"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "RICK",
                "Sum (Total count)": "2846"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2844"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "RICK",
                "Sum (Total count)": "2843"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2815"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "POLLY",
                "Sum (Total count)": "2810"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "DAVID",
                "Sum (Total count)": "2798"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2797"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "DON",
                "Sum (Total count)": "2775"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2767"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2763"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "SALLY",
                "Sum (Total count)": "2750"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "ANDREW",
                "Sum (Total count)": "2750"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "MATT",
                "Sum (Total count)": "2750"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "BILL",
                "Sum (Total count)": "2750"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "BILL",
                "Sum (Total count)": "2749"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "DON",
                "Sum (Total count)": "2749"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2749"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "USMAN",
                "Sum (Total count)": "2749"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "DEVAN",
                "Sum (Total count)": "2703"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "RICK",
                "Sum (Total count)": "2702"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "BILL",
                "Sum (Total count)": "2701"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "SALLY",
                "Sum (Total count)": "2701"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "DEVAN",
                "Sum (Total count)": "2691"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "SALLY",
                "Sum (Total count)": "2689"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "TANSEL",
                "Sum (Total count)": "2676"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2654"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "DON",
                "Sum (Total count)": "2654"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "USMAN",
                "Sum (Total count)": "2653"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2653"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "DON",
                "Sum (Total count)": "2653"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2639"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "DEVAN",
                "Sum (Total count)": "2627"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "DON",
                "Sum (Total count)": "2606"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "DEVAN",
                "Sum (Total count)": "2606"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "SALLY",
                "Sum (Total count)": "2606"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "DAVID",
                "Sum (Total count)": "2605"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2600"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "DON",
                "Sum (Total count)": "2599"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "ANDREW",
                "Sum (Total count)": "2579"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "POLLY",
                "Sum (Total count)": "2565"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "SALLY",
                "Sum (Total count)": "2558"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "SALLY",
                "Sum (Total count)": "2557"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "USMAN",
                "Sum (Total count)": "2556"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "TONY",
                "Sum (Total count)": "2554"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "SALLY",
                "Sum (Total count)": "2541"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2538"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "DEVAN",
                "Sum (Total count)": "2528"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "DAVID",
                "Sum (Total count)": "2525"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2510"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2507"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "DON",
                "Sum (Total count)": "2462"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "TANSEL",
                "Sum (Total count)": "2462"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2453"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "BILL",
                "Sum (Total count)": "2442"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2413"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2413"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "POLLY",
                "Sum (Total count)": "2409"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2380"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "RICK",
                "Sum (Total count)": "2366"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2355"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "TONY",
                "Sum (Total count)": "2318"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2317"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2311"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2308"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "MATT",
                "Sum (Total count)": "2270"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2270"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "SALLY",
                "Sum (Total count)": "2269"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "MATT",
                "Sum (Total count)": "2268"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "ANDREW",
                "Sum (Total count)": "2265"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "POLLY",
                "Sum (Total count)": "2238"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "RICK",
                "Sum (Total count)": "2222"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "DAVID",
                "Sum (Total count)": "2222"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "DAVID",
                "Sum (Total count)": "2215"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "MATT",
                "Sum (Total count)": "2214"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "TANSEL",
                "Sum (Total count)": "2213"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2198"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "MATT",
                "Sum (Total count)": "2196"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "RICK",
                "Sum (Total count)": "2193"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "ANDREW",
                "Sum (Total count)": "2188"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "USMAN",
                "Sum (Total count)": "2174"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "TANSEL",
                "Sum (Total count)": "2173"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "ANDREW",
                "Sum (Total count)": "2170"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "USMAN",
                "Sum (Total count)": "2154"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "JOSHUA",
                "Sum (Total count)": "2141"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "USMAN",
                "Sum (Total count)": "2126"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "MATT",
                "Sum (Total count)": "2126"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2125"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "ANDREW",
                "Sum (Total count)": "2125"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "DAVID",
                "Sum (Total count)": "2125"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "BILL",
                "Sum (Total count)": "2122"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "RICK",
                "Sum (Total count)": "2116"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "DON",
                "Sum (Total count)": "2099"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2097"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "RICK",
                "Sum (Total count)": "2095"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "TONY",
                "Sum (Total count)": "2077"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2071"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2071"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2065"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2061"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "GDM_USER",
                "Sum (Total count)": "2047"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "POLLY",
                "Sum (Total count)": "2036"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "2030"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "TANSEL",
                "Sum (Total count)": "2029"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "2025"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "DON",
                "Sum (Total count)": "2025"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "USMAN",
                "Sum (Total count)": "1982"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1982"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "BILL",
                "Sum (Total count)": "1981"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1981"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "ANDREW",
                "Sum (Total count)": "1979"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "TONY",
                "Sum (Total count)": "1975"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1961"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1959"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "POLLY",
                "Sum (Total count)": "1952"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "DAVID",
                "Sum (Total count)": "1945"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "MATT",
                "Sum (Total count)": "1934"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "TONY",
                "Sum (Total count)": "1934"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "USMAN",
                "Sum (Total count)": "1933"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1933"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1932"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1927"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1924"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "DAVID",
                "Sum (Total count)": "1908"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1886"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "ANDREW",
                "Sum (Total count)": "1885"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1885"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "MATT",
                "Sum (Total count)": "1838"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "USMAN",
                "Sum (Total count)": "1837"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "BILL",
                "Sum (Total count)": "1837"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1790"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "DAVID",
                "Sum (Total count)": "1790"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "TONY",
                "Sum (Total count)": "1789"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "BILL",
                "Sum (Total count)": "1789"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "RICK",
                "Sum (Total count)": "1789"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "DON",
                "Sum (Total count)": "1789"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "POLLY",
                "Sum (Total count)": "1786"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "MATT",
                "Sum (Total count)": "1783"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "ANDREW",
                "Sum (Total count)": "1763"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "MATT",
                "Sum (Total count)": "1761"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "TONY",
                "Sum (Total count)": "1753"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "DEVAN",
                "Sum (Total count)": "1748"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1742"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "DAVID",
                "Sum (Total count)": "1742"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "DAVID",
                "Sum (Total count)": "1741"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1741"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "DON",
                "Sum (Total count)": "1741"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1738"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "RICK",
                "Sum (Total count)": "1734"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1729"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1716"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "DEVAN",
                "Sum (Total count)": "1694"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "DON",
                "Sum (Total count)": "1693"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "USMAN",
                "Sum (Total count)": "1693"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "ANDREW",
                "Sum (Total count)": "1646"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "MATT",
                "Sum (Total count)": "1645"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "TONY",
                "Sum (Total count)": "1644"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "DON",
                "Sum (Total count)": "1640"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1637"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "USMAN",
                "Sum (Total count)": "1631"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1622"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1621"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "DEVAN",
                "Sum (Total count)": "1598"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "MATT",
                "Sum (Total count)": "1596"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "TANSEL",
                "Sum (Total count)": "1595"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "ANDREW",
                "Sum (Total count)": "1571"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1550"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "USMAN",
                "Sum (Total count)": "1550"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "BILL",
                "Sum (Total count)": "1549"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "TANSEL",
                "Sum (Total count)": "1502"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "ANDREW",
                "Sum (Total count)": "1475"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "POLLY",
                "Sum (Total count)": "1466"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1453"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1452"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "BILL",
                "Sum (Total count)": "1406"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "TANSEL",
                "Sum (Total count)": "1405"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "TONY",
                "Sum (Total count)": "1399"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1398"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "BILL",
                "Sum (Total count)": "1384"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1380"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "TONY",
                "Sum (Total count)": "1358"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "USMAN",
                "Sum (Total count)": "1358"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "SALLY",
                "Sum (Total count)": "1357"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "RICK",
                "Sum (Total count)": "1357"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1355"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1350"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1339"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1338"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1336"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1335"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "1329"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1324"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1320"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1315"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "TONY",
                "Sum (Total count)": "1314"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1312"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "DON",
                "Sum (Total count)": "1309"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "ANDREW",
                "Sum (Total count)": "1301"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "DAVID",
                "Sum (Total count)": "1301"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "RICK",
                "Sum (Total count)": "1286"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1279"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1277"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1273"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1271"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1270"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1267"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1262"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "TONY",
                "Sum (Total count)": "1261"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "DEVAN",
                "Sum (Total count)": "1261"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "DAVID",
                "Sum (Total count)": "1260"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1259"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "POLLY",
                "Sum (Total count)": "1230"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1218"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1217"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "SALLY",
                "Sum (Total count)": "1216"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "TONY",
                "Sum (Total count)": "1214"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1191"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1175"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1168"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "DEVAN",
                "Sum (Total count)": "1165"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "TONY",
                "Sum (Total count)": "1165"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "SALLY",
                "Sum (Total count)": "1165"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "BILL",
                "Sum (Total count)": "1162"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1158"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "GDM_USER",
                "Sum (Total count)": "1127"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "SALLY",
                "Sum (Total count)": "1117"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "RICK",
                "Sum (Total count)": "1117"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "USMAN",
                "Sum (Total count)": "1114"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "USMAN",
                "Sum (Total count)": "1069"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1069"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "RICK",
                "Sum (Total count)": "1069"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "1063"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "BILL",
                "Sum (Total count)": "1051"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "TANSEL",
                "Sum (Total count)": "1022"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "DAVID",
                "Sum (Total count)": "1022"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "JOSHUA",
                "Sum (Total count)": "1021"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "1021"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "TANSEL",
                "Sum (Total count)": "1015"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "RICK",
                "Sum (Total count)": "999"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "DAVID",
                "Sum (Total count)": "974"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "MATT",
                "Sum (Total count)": "968"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "POLLY",
                "Sum (Total count)": "950"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "ANDREW",
                "Sum (Total count)": "925"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "JOSHUA",
                "Sum (Total count)": "925"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "MATT",
                "Sum (Total count)": "920"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "RICK",
                "Sum (Total count)": "897"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "DEVAN",
                "Sum (Total count)": "893"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "SALLY",
                "Sum (Total count)": "877"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "ANDREW",
                "Sum (Total count)": "876"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "JOSHUA",
                "Sum (Total count)": "829"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "DAVID",
                "Sum (Total count)": "829"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "827"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "JOSHUA",
                "Sum (Total count)": "823"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "823"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "RICK",
                "Sum (Total count)": "801"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "782"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "DON",
                "Sum (Total count)": "781"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "TANSEL",
                "Sum (Total count)": "781"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "ANDREW",
                "Sum (Total count)": "780"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "DEVAN",
                "Sum (Total count)": "734"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "TANSEL",
                "Sum (Total count)": "734"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "JOSHUA",
                "Sum (Total count)": "734"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "USMAN",
                "Sum (Total count)": "733"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "ANDREW",
                "Sum (Total count)": "733"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "USMAN",
                "Sum (Total count)": "725"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "720"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "DAVID",
                "Sum (Total count)": "719"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "GDM_USER",
                "Sum (Total count)": "701"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "GDM_USER",
                "Sum (Total count)": "698"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "RICK",
                "Sum (Total count)": "686"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "MATT",
                "Sum (Total count)": "686"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "JOSHUA",
                "Sum (Total count)": "685"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "DEVAN",
                "Sum (Total count)": "685"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "RICK",
                "Sum (Total count)": "684"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "USMAN",
                "Sum (Total count)": "684"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "ANDREW",
                "Sum (Total count)": "681"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "USMAN",
                "Sum (Total count)": "673"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "SALLY",
                "Sum (Total count)": "638"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "TONY",
                "Sum (Total count)": "638"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "DON",
                "Sum (Total count)": "637"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "JOSHUA",
                "Sum (Total count)": "628"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "SALLY",
                "Sum (Total count)": "589"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "ANDREW",
                "Sum (Total count)": "589"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "BILL",
                "Sum (Total count)": "584"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "DAVID",
                "Sum (Total count)": "571"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "BILL",
                "Sum (Total count)": "541"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "TANSEL",
                "Sum (Total count)": "541"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "532"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "DEVAN",
                "Sum (Total count)": "446"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "DEVAN",
                "Sum (Total count)": "446"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "MATT",
                "Sum (Total count)": "430"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "BILL",
                "Sum (Total count)": "422"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "DON",
                "Sum (Total count)": "415"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "390"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "JOE",
                "Sum (Total count)": "384"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "RICK",
                "Sum (Total count)": "377"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "BILL",
                "Sum (Total count)": "350"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "RODRIGO",
                "Sum (Total count)": "300"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "JOE",
                "Sum (Total count)": "256"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "TONY",
                "Sum (Total count)": "254"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "TANSEL",
                "Sum (Total count)": "254"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "GUARDIUM",
                "Sum (Total count)": "252"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "USMAN",
                "Sum (Total count)": "233"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "DAVID",
                "Sum (Total count)": "224"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "JOSHUA",
                "Sum (Total count)": "208"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "USMAN",
                "Sum (Total count)": "206"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "RODRIGO",
                "Sum (Total count)": "200"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "JOSHUA",
                "Sum (Total count)": "158"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "MATT",
                "Sum (Total count)": "153"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "JOED",
                "Sum (Total count)": "129"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "126"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "MATT",
                "Sum (Total count)": "88"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "JOED",
                "Sum (Total count)": "86"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "POLLY",
                "Sum (Total count)": "85"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "HIGHRISK",
                "Sum (Total count)": "84"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "TONY",
                "Sum (Total count)": "80"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "BILL",
                "Sum (Total count)": "76"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "SALLY",
                "Sum (Total count)": "62"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "62"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "TANSEL",
                "Sum (Total count)": "61"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "ANDREW",
                "Sum (Total count)": "61"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "RICK",
                "Sum (Total count)": "61"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "DEVAN",
                "Sum (Total count)": "60"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "USMAN",
                "Sum (Total count)": "54"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "ANDREW",
                "Sum (Total count)": "53"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "RICK",
                "Sum (Total count)": "52"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "50"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "50"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "MATT",
                "Sum (Total count)": "47"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "TANSEL",
                "Sum (Total count)": "46"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "FAKEJOSH",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "PENTESTER",
                "Sum (Total count)": "42"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "ANDREW",
                "Sum (Total count)": "40"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "ADMIN",
                "Sum (Total count)": "36"
            },
            {
                "Date (Period start (local time))": "2024-08-31",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-24",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-17",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-07",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-06",
                "DB user": "DON",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "SYSTEM",
                "Sum (Total count)": "30"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "ADMIN",
                "Sum (Total count)": "28"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "ADMIN",
                "Sum (Total count)": "25"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "ADMIN",
                "Sum (Total count)": "22"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "POSTGRES",
                "Sum (Total count)": "17"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "DOUGLAS",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-18",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-25",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-16",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "DON",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "RICK",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-11",
                "DB user": "ENRIQUE",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "ROOT",
                "Sum (Total count)": "15"
            },
            {
                "Date (Period start (local time))": "2024-09-03",
                "DB user": "POSTGRES",
                "Sum (Total count)": "9"
            },
            {
                "Date (Period start (local time))": "2024-08-27",
                "DB user": "POSTGRES",
                "Sum (Total count)": "8"
            },
            {
                "Date (Period start (local time))": "2024-08-28",
                "DB user": "POSTGRES",
                "Sum (Total count)": "5"
            },
            {
                "Date (Period start (local time))": "2024-08-23",
                "DB user": "POSTGRES",
                "Sum (Total count)": "5"
            },
            {
                "Date (Period start (local time))": "2024-08-07",
                "DB user": "POSTGRES",
                "Sum (Total count)": "5"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "POSTGRES",
                "Sum (Total count)": "4"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "POSTGRES",
                "Sum (Total count)": "3"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "POSTGRES",
                "Sum (Total count)": "3"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "2"
            },
            {
                "Date (Period start (local time))": "2024-08-15",
                "DB user": "POSTGRES",
                "Sum (Total count)": "2"
            },
            {
                "Date (Period start (local time))": "2024-08-09",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "MARILENE",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-30",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-09-06",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-26",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-13",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-10",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-09-01",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-29",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-09-05",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-19",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-22",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-12",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-09-04",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-14",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-09-02",
                "DB user": "FAKEUSER",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-08",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-20",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            },
            {
                "Date (Period start (local time))": "2024-08-21",
                "DB user": "POSTGRES",
                "Sum (Total count)": "1"
            }
        ]
    },
    "layer": [
        {
            "transform": [
                {
                    "calculate": "toNumber(datum['Sum (Total count)'])",
                    "as": "sql_count"
                }
            ],
            "mark": {
                "type": "boxplot",
                "box": {
                    "color": "#be95ff"
                },
                "rule": {
                    "color": "#f4f4f4"
                }
            },
            "encoding": {
                "x": {
                    "field": "DB user",
                    "type": "ordinal",
                    "axis": {
                        "labelAngle": -30,
                        "grid": false
                    }
                },
                "y": {
                    "field": "sql_count",
                    "type": "quantitative",
                    "axis": {
                        "grid": false
                    }
                }
            }
        },
        {
            "transform": [
                {
                    "filter": "datum['Date (Period start (local time))'] == timeFormat(timeOffset('day', now(), -1), '%Y-%m-%d')"
                }
            ],
            "mark": {
                "type": "point",
                "color": "red",
                "fill": "red"
            },
            "encoding": {
                "y": {
                    "field": "Sum (Total count)",
                    "type": "quantitative"
                },
                "x": {
                    "field": "DB user",
                    "type": "ordinal"
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
    "description": "Stacked bar chart",
    "width": "container",
    "height": "container",
    "title": "Number of SQL executed per user yesterday (red dots) compared to historical distribution (box-plots)",
    "data": {
        "name": "chartData"
    },
    "layer": [
        {
            "transform": [
                {
                    "calculate": "toNumber(datum['$primary_measure'])",
                    "as": "sql_count"
                }
            ],
            "mark": {
                "type": "boxplot",
                "box": {
                    "color": "#be95ff"
                },
                "rule": {
                    "color": "#f4f4f4"
                }
            },
            "encoding": {
                "x": {
                    "field": "$secondary_category",
                    "type": "ordinal",
                    "axis": {
                        "labelAngle": -30,
                        "grid": false
                    }
                },
                "y": {
                    "field": "sql_count",
                    "type": "quantitative",
                    "axis": {
                        "grid": false
                    }
                }
            }
        },
        {
            "transform": [
                {
                    "filter": "datum['$primary_category'] == timeFormat(timeOffset('day', now(), -1), '%Y-%m-%d')"
                }
            ],
            "mark": {
                "type": "point",
                "color": "red",
                "fill": "red"
            },
            "encoding": {
                "y": {
                    "field": "$primary_measure",
                    "type": "quantitative"
                },
                "x": {
                    "field": "$secondary_category",
                    "type": "ordinal"
                }
            }
        }
    ]
}
```

