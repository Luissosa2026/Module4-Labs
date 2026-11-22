const myChart = echarts.init(document.getElementById("main"));

// Chart config 
const options = {
    title: { text: "Fake Store Categories" },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: "# products",
        type: "bar",
        data: []
    }]
};

// Pull product data
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Countem up
        const categories = {};

        products.forEach(product => {
            const category = product.category;
            categories[category] = (categories[category] || 0) + 1;
        });

        // Fill chart data
        options.xAxis.data = Object.keys(categories);
        options.series[0].data = Object.values(categories);
        myChart.setOption(options);
    });