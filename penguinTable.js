 var getGrade = function(quiz)
 {
    return quiz.grade;
 }


var addColumn = function(row,fcn)
{
    row.append("td").text(fcn)
}

var penguinTable = function(penguins)
{
    d3.selectAll("tbody *").remove();
    
    var row = d3.select("tbody")
    .selectAll("tr")
    .data(penguins)
    .enter()
    .append("tr");
    
    addColumn(row,function(penguin)
    {
    let penguinSelected = 0;
    for (let i = 0; i < penguin.length; i++);
    return penguinSelected++;
    })
    
     row.append("td")
        .append("img")
        .attr("src",function(penguin)
        {
            return penguin.picture;
        });
    
    addColumn(row,function(penguin)
    {
        return d3.mean(penguin.quizes, getGrade)
    })
    addColumn(row,function(penguin)
    {
        return d3.mean(penguin.homework, getGrade)
    })
    
    
}


var penguinPromise = d3.json("classData.json")

penguinPromise.then(
function(penData)
    {
        penguinTable(penData)
    },
function(err)
    {
      console.log("broken",err)  
    })
    
    
    
    
    

    
    
    
    
    
    
    