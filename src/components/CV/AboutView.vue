<template>

    <div class="aboutme">
        <h1>Tommaso Ramella</h1>
        <h2>Data scientist, Ph.D. in Sociology</h2>
        <p class="description">I am a data scientist, with a rich foundation in <strong>longitudinal and time-series forecasting</strong>, and <strong>causal inference</strong>. During my PhD and postdoc in Economics, I applied <strong>econometrics and causal inference</strong> techniques on a wide range of labour-market related topics: unemployment, employability, well-being at work, education. Besides my academic resaerch, I also got involved in private and political projects, which generally consisted in evaluatign the causal effect of policies. My path brought me to focus on the renewable energy market, specializing in time-series forecasting with econometrics and <strong>ML and deep learning techniques.</strong> 
            I like to take care of the whole data process, from the data gathering and data cleaning, to the statisical modeling and testing. Now, the focus os my work is currently <strong>ML-engineering</strong>, which includes training models, building the libraries and the infrustructure to train them, and put them in production. </p>
    </div>
    <div class="skills">
        <h2>Skills</h2>
        <ul class="topics">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Time Series Forecasting</li>
            <li>Econometrics</li>
            <li>Statistical Analysis</li>
            <li>ML Engineering</li>
        </ul>
        <ul class="tools">
            <li>Python</li>
            <li>Stata</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Touchdesigner</li>
        </ul>
    </div>
</template>


<script>
</script>


<style scoped>
.description {
    text-align: justify;
    margin: 0 10%;
    padding: 1em;
}

.aboutme {
    margin: 0 10%;
    padding: 1em;
}

.skills {
    margin: 0 10%;
    padding: 1em;
}

.skills ul {
    list-style-type: none; /* Remove default bullet points */
    padding: 0;
}

.skills li {
    display: inline-block; /* Display items in a line */
    margin: 0.5em; /* Space between rectangles */
    padding: 0.5em 1em; /* Padding inside the rectangle */
    background-color: #f0f0f0; /* Light grey background */
    color: #333; /* Darker text color for better contrast */
    border-radius: 12px; /* Rounded corners */
    border: 1px solid #ccc; /* Border color */
    font-size: 0.9em; /* Slightly smaller font size */
}

.skills .topics li {
    background-color: #caf3cb; /* Green background for topics list */
}

/* Specific styling for tools list items */
.skills .tools li {
    background-color: #b6d7f2; /* Blue background for tools list */
}
.plot-container {
  margin: 0 10%;
  padding: 1em;
}

</style>
