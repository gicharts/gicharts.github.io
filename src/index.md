---
toc: false
---

<div class="hero">
  <h1>Guardium Insights charts</h1>
  A resource for understanding Guardium Insights flex-charts through examples. Copy, paste, and adjust the definitions to make them your own.
</div>

<div class="grid grid-cols-3">
  <div class="card">
        <a href="examples/age_of_audit_tasks">
            <h2>Age of audit tasks</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/age_of_audit_tasks.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/connection_sql_scatterplot">
            <h2>User scatterplot showing number of connections and SQL</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/connection_sql_scatterplot.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/custom_color_donut">
            <h2>Failed test severity with custom color mappings</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/custom_color_donut.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/datamart_ingestion_90_days">
            <h2>Long term datamart ingestion chart</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/datamart_ingestion_90_days.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/datamart_ingestion_bubbles">
            <h2>Datamart ingestion bubble per file</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/datamart_ingestion_bubbles.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/day_to_day_difference">
            <h2>Percentage difference between days</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/day_to_day_difference.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/failed_login_threshold">
            <h2>Failed login count with visualized threshold</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/failed_login_threshold.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/failed_test_severity_over_time">
            <h2>Failed test severity over time</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/failed_test_severity_over_time.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/histogram_sql_per_day">
            <h2>Histogram of SQL per day</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/histogram_sql_per_day.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/hour_day_of_week_analysis">
            <h2>Weekday and hour analysis</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/hour_day_of_week_analysis.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/long_term_day_hour_heatmap">
            <h2>Multi-week hour-date heatmap</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/long_term_day_hour_heatmap.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/map_of_connections">
            <h2>Map showing client connections</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/map_of_connections.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/object_verb_access_bubble_chart">
            <h2>Object-Verb access bubble chart</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/object_verb_access_bubble_chart.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/previous_day_comparison_to_mean">
            <h2>Yesterday's object access compared to mean</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/previous_day_comparison_to_mean.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/stale_users_dot_plot">
            <h2>Stale users - time since last login</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/stale_users_dot_plot.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/three_octet_connection_analysis">
            <h2>Three octet connection analysis heatmap</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/three_octet_connection_analysis.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/top_k_users_by_connection_count">
            <h2>Top 10 users by connection count</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/top_k_users_by_connection_count.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/two_line_two_axis">
            <h2>2 axis, 2 series chart</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/two_line_two_axis.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/user_behavior_object_verb_execution">
            <h2>User audit trail - object and verb access</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/user_behavior_object_verb_execution.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/user_sql_counts_historical_distribution">
            <h2>Yesterday's SQL counts per user comparison to box-plot</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/user_sql_counts_historical_distribution.png"/>
        </a>
    </div>
<div class="card">
        <a href="examples/y_axis_z_score_comparison">
            <h2>Yesterday's user sql count z-score</h2>
            <img style="max-width: 100%; max-height: 100%" src="images/y_axis_z_score_comparison.png"/>
        </a>
    </div>
</div>

<style>

.card {
    text-align: center;
  }
  
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
