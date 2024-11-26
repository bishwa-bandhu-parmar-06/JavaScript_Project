function area_function()
{
    var radius = parseFloat(document.getElementById("radiusinput").value);
    var area = Math.PI * Math.pow(radius, 2);
    document.write(area);
    
}
