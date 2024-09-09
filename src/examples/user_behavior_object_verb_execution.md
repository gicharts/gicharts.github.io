
# User audit trail - object and verb access
A chart designed to analyze the behavior of a single or small group of users over time. The concentration on a specific user allows for a detailed time-based analysis of verb execution on database objects without too much chart crowding.
- **Report category:** Database activity

- **Required report headers:**
    - **Primary category:** Period start (local time)
    - **Secondary category:** Verb
    - **Tertiary category:** Object name
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

<div class="tip">A close study of the chart will reveal that some objects may have had multiple verbs executed on them within an hour. Those objects are represented with a mix of the colors facilitated by transparency.</div>
<div class="tip">This chart contains a transform to normalize database objects by removing the schema prefix if the SQL statement contained the schema.</div>

```js 
    const {default: embed} = await import("npm:vega-embed@6");

    embed('#vis',
        {
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "values": [
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.descriptions",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "country_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "USE",
                "Object name": "salesDB",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "USE",
                "Object name": "salesDB",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.catalog",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "categories",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT_ERROR",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.feedback",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "USE",
                "Object name": "salesDB",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.items",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "1"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "63"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "63"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "61"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "61"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "59"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "59"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "57"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "57"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "57"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "57"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "56"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "55"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "55"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "54"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "53"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "52"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "51"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "51"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "51"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "51"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "50"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "49"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "49"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "48"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "47"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "46"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "46"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "46"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "46"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "45"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "44"
            },
            {
                "Period start (local time)": "2024-09-05 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "44"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "43"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "43"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "41"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "41"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "39"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "39"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "39"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "39"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "36"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "36"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "34"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "34"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "32"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "32"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "32"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "32"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "31"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "31"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "31"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "31"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "29"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "29"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "28"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "27"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "27"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "27"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "27"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "25"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "25"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "25"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "25"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "23"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "22"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "21"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "20"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "19"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "18"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "17"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "16"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "15"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "UPDATE",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "13"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "status",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.status",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "12"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "11"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "11"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "11"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "11"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "10"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "country",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.country",
                "Sum (Total count)": "9"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-05 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-05 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "INSERT",
                "Object name": "partnumbers",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "8"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-05 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "7"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-05 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-05 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "6"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-07 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-05 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "5"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-07 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "4"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "descriptions",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 22:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.descriptions",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 22:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 03:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 05:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 23:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-05 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "3"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "product_ERROR",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product_ERROR",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "dependent",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 02:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "partnumbers",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "categories",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.partnumbers",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "SALES",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "UPDATE",
                "Object name": "product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "descriptions",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 07:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 08:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 19:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 09:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 04:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.admin",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-07 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.categories",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 15:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "ACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "INSERT",
                "Object name": "APPUSER.BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 18:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.ORDERS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 20:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 17:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PAYMENTCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 10:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 20:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 23:00:00.0",
                "Verb": "UPDATE",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PERSON",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "SELECT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.SALES",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "PATIENTS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 15:00:00.0",
                "Verb": "INSERT",
                "Object name": "product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 17:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.countries",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 16:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.dependent",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 19:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 01:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.product",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 11:00:00.0",
                "Verb": "SELECT",
                "Object name": "account",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 12:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.PATIENTS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 00:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 07:00:00.0",
                "Verb": "INSERT",
                "Object name": "BANKACCOUNT",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-05 06:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 13:00:00.0",
                "Verb": "SELECT",
                "Object name": "APPUSER.CREDITCARDS",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-04 14:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 21:00:00.0",
                "Verb": "SELECT",
                "Object name": "CUSTOMER",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 00:00:00.0",
                "Verb": "select",
                "Object name": "creditcards",
                "Sum (Total count)": "2"
            },
            {
                "Period start (local time)": "2024-09-06 17:00:00.0",
                "Verb": "INSERT",
                "Object name": "CREDITCARDS",
                "Sum (Total count)": "2"
            }
        ]
    },
    "transform": [
        {
            "calculate": "upper(datum['Object name'])",
            "as": "UpperObject"
        },
        {
            "calculate": "if(!split(datum.UpperObject, '.')[1], datum.UpperObject, split(datum.UpperObject, '.')[1])",
            "as": "normalUpperObject"
        },
        {
            "calculate": "timeOffset('hours', toDate(datum['Period start (local time)']), 1)",
            "as": "PeriodEnd"
        }
    ],
    "width": 800,
    "height": 400,
    "mark": {
        "type": "rect",
        "opacity": 0.5
    },
    "encoding": {
        "y": {
            "field": "normalUpperObject",
            "type": "nominal",
            "title": "Database object",
            "axis": {
                "labelFontSize": 8,
                "grid": false
            }
        },
        "x": {
            "field": "Period start (local time)",
            "type": "temporal",
            "axis": {
                "format": "%Y-%m-%d %H:%M:%S"
            },
            "title": "Hour"
        },
        "x2": {
            "field": "PeriodEnd",
            "type": "temporal",
            "axis": {
                "format": "%Y-%m-%d %H:%M:%S"
            }
        },
        "color": {
            "field": "Verb",
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
    "description": "Heatmap",
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "name": "chartData"
    },
    "transform": [
        {
            "calculate": "upper(datum['$tertiary_category'])",
            "as": "UpperObject"
        },
        {
            "calculate": "if(!split(datum.UpperObject, '.')[1], datum.UpperObject, split(datum.UpperObject, '.')[1])",
            "as": "normalUpperObject"
        },
        {
            "calculate": "timeOffset('hours', toDate(datum['$primary_category']), 1)",
            "as": "PeriodEnd"
        }
    ],
    "width": "container",
    "height": "container",
    "mark": {
        "type": "rect",
        "opacity": 0.5
    },
    "encoding": {
        "y": {
            "field": "normalUpperObject",
            "type": "nominal",
            "title": "Database object",
            "axis": {
                "labelFontSize": 8,
                "grid": false
            }
        },
        "x": {
            "field": "$primary_category",
            "type": "temporal",
            "axis": {
                "format": "%Y-%m-%d %H:%M:%S"
            },
            "title": "Hour"
        },
        "x2": {
            "field": "PeriodEnd",
            "type": "temporal",
            "axis": {
                "format": "%Y-%m-%d %H:%M:%S"
            }
        },
        "color": {
            "field": "$secondary_category",
            "scale": {
                "scheme": "category10"
            }
        }
    }
}
```

