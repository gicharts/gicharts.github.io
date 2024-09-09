# Contributing

The GI charts project is a Guardium community project and welcomes all contributions
but particularly new chart examples. Please feel free to open an issue and we'll
review it.

## Adding a new chart example
Copy and adjust a JSON definition in the /charts directory. The following is a description
of what each field in the JSON is defined as:
- **name**: The name of the chart
- **description**: The description of the chart that appears at the top of the chart page underneath the title
- **report_category**: The data category for the report (eg: Exceptions, Database activity, Classification)
- **report_headers**: The fields selected for the chart in the chart editor
   - **type**: The name of the field type such as "Primary category", "Secondary category", "Primary value", etc.
   - **replace**: The name of the string used in the vega template for the field
   - **name**: The field chosen. If using an aggregate or data format, include that so that it appears as it does in the Guardium Insights UI
- **tips**: An array of strings shown as green 'tips' in the chart's page. Provide hepful hints or other context for using the vega definition or the chart.
- **width**: The width of the chart on its page
- **height**: The height of the chart on its page
- **data**: An array of sample data values to show in the chart example
- **vega_def**: The vega definition as it appears in the GI charts code area

Take an approximately square-shaped screenshot of the chart and include it in /src/images folder. Make it a 
png file with the same name as the json file created in the charts directory.

Finally, open a PR for this repository and include a screenshot of the chart page.


