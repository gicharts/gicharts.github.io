
# Three octet connection analysis heatmap
A heatmap showing server IPs and the first 3 octets of the client IPs connecting to them. Using the first 3 octets helps consolidate a large number of client IPs into groups that are easier to visualize
- **Report category:** Database activity

- **Required report headers:**
    - **Primary category:** Server hostname
    - **Secondary category:** Client IP
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
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "127.0.0.1",
                "Count": "2906733"
            },
            {
                "Server hostname": "OSPREY.GDEMO.COM",
                "Client IP": "192.168.252.70",
                "Count": "2501256"
            },
            {
                "Server hostname": "RAPTOR.GDEMO.COM",
                "Client IP": "192.168.252.70",
                "Count": "436480"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "169.63.131.191",
                "Count": "16739"
            },
            {
                "Server hostname": "RAPTOR.GDEMO.COM",
                "Client IP": "192.168.252.229",
                "Count": "4658"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.63.131.191",
                "Count": "920"
            },
            {
                "Server hostname": "RAPTOR.GDEMO.COM",
                "Client IP": "192.168.252.239",
                "Count": "132"
            },
            {
                "Server hostname": "192.168.252.229",
                "Client IP": "192.168.252.70",
                "Count": "36"
            },
            {
                "Server hostname": "192.168.252.239",
                "Client IP": "192.168.252.70",
                "Count": "20"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.146.59",
                "Count": "16"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "129.41.56.4",
                "Count": "14"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.148",
                "Count": "10"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "116.12.186.83",
                "Count": "10"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.33",
                "Count": "10"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.63.131.178",
                "Count": "8"
            },
            {
                "Server hostname": "SNOWGOOSE.GDEMO.COM",
                "Client IP": "192.168.252.240",
                "Count": "8"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.134",
                "Count": "7"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.146.53",
                "Count": "6"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.99",
                "Count": "6"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "103.6.151.193",
                "Count": "6"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.114",
                "Count": "6"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.130",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.131",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.206",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.158",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "199.45.154.147",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.202",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.145.98",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.146.48",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.40",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.146.58",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.145.96",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.32",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.145.100",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.145.106",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.211",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.115",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.221",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.193",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.146.60",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.116",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.219",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "167.94.145.99",
                "Count": "5"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.215",
                "Count": "5"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.120",
                "Count": "4"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.213",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.63.131.188",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.161.162",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "161.156.29.129",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.63.131.175",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.63.131.176",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.101",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.107",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "161.156.29.150",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.117",
                "Count": "4"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.105",
                "Count": "4"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "206.168.34.211",
                "Count": "4"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.241",
                "Count": "2"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.248",
                "Count": "2"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.142.125.210",
                "Count": "2"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.182",
                "Count": "2"
            },
            {
                "Server hostname": "TZ-AWS-POC3_PGSALESDB",
                "Client IP": "169.47.182.109",
                "Count": "2"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.13",
                "Count": "2"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.227",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.16",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.19",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.7",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.38",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.75",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.158",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.209",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.151",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.214",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.135",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.114",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.115",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.193",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.230",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.7",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.91",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.58",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.42",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.22",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.241",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.150",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.7",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.30",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.134",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.142",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.35",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.23",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.140",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.179",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.129",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.2",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.5",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.252",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.243",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.168",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.95",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.38",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.59",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.149.163",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.62",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.211",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.124",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.165",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.109",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.186",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.253",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.129",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.111",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.53",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.243",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.211.100",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.233",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.101",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.8",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.58",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.52",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.80",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.133.60",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.49",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.66",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.97",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.20",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.67",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.250",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "87.236.176.33",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.136",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.241",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.180",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.140",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.122",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "162.216.150.227",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "35.203.210.236",
                "Count": "1"
            },
            {
                "Server hostname": "AURORA-MYSQL01-INSTANCE-1",
                "Client IP": "147.185.132.149",
                "Count": "1"
            }
        ]
    },
    "transform": [
        {
            "calculate": "split(datum['Client IP'], '.')[0] + '.' + split(datum['Client IP'], '.')[1] + '.' + split(datum['Client IP'], '.')[2]",
            "as": "First 3 octets of client IP"
        },
        {
            "calculate": "split(datum['Client IP'], '.')[0] * 256 + split(datum['Client IP'], '.')[1] * 1",
            "as": "cip_num"
        }
    ],
    "width": 600,
    "height": 400,
    "mark": "rect",
    "encoding": {
        "y": {
            "field": "Server hostname",
            "axis": {
                "grid": false
            },
            "type": "nominal"
        },
        "x": {
            "field": "First 3 octets of client IP",
            "type": "nominal",
            "axis": {
                "labelAngle": -45,
                "grid": false
            },
            "sort": {
                "field": "cip_num",
                "op": "min"
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
            "calculate": "split(datum['$secondary_category'], '.')[0] + '.' + split(datum['$secondary_category'], '.')[1] + '.' + split(datum['$secondary_category'], '.')[2]",
            "as": "First 3 octets of client IP"
        },
        {
            "calculate": "split(datum['$secondary_category'], '.')[0] * 256 + split(datum['$secondary_category'], '.')[1] * 1",
            "as": "cip_num"
        }
    ],
    "width": "container",
    "height": "container",
    "mark": "rect",
    "encoding": {
        "y": {
            "field": "$primary_category",
            "axis": {
                "grid": false
            },
            "type": "nominal"
        },
        "x": {
            "field": "First 3 octets of client IP",
            "type": "nominal",
            "axis": {
                "labelAngle": -45,
                "grid": false
            },
            "sort": {
                "field": "cip_num",
                "op": "min"
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

