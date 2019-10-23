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
    
    /*addColumn(row,function(penguin)
    {
    let penguinSelected = 0;
    for (let i = 0; i < penguin.length; i++);
    return penguinSelected++;
    }) */
    
     row.append("td")
        .append("img")
        .attr("src",function(penguin)
        {
            return penguin.picture;
        });
    
    addColumn(row,function(penguin)
    {
        return d3.mean(penguin.quizes, getGrade)*10
    })
    addColumn(row,function(penguin)
    {
        return d3.mean(penguin.homework, getGrade)*2
    })
    addColumn(row,function(penguin)
    {
        return d3.mean(penguin.test, getGrade)
    })
    addColumn(row,function(penguin)
    {
        return penguin.final[0].grade
    })
    
    row.append("td")
    .text(function(penguin)
         {
        
         var tG = d3.mean(penguin.quizes, getGrade)*2 + d3.mean(penguin.homework, getGrade)*.3 + d3.mean(penguin.test, getGrade)*.3 + penguin.final[0].grade*.35
         
         return tG
    
    //.attr("class","tGrade")
    
    if(tG < 70)
        {
            row.append("td")
            .text(function(penguin)
            {
                return tG
            })
            .attr("color","red")
          
        }
    
    })
    
    
        //d3.select("td")
        //.attr("id","tGrade")
            
       /* var tGrade = d3.mean(penguin.quizes, getGrade)*2 + d3.mean(penguin.homework, getGrade)*.3 + d3.mean(penguin.test, getGrade)*.3 + penguin.final[0].grade*.35
    
        return tGrade
    if(tGrade < 70)
        {
            d3.select("td")
            .text()
            .attr("color","red")
        } */
     
  
}


/*
var ifGrade = function(penguin)
{
    var meanTotal = function(total)
    {
    d3.mean(penguin.quizes, getGrade)*2 + d3.mean(penguin.homework, getGrade)*.3 + d3.mean(penguin.test, getGrade)*.3 + penguin.final[0].grade*.35
    }
    if(meanTotal < 70)
        {
            d3.select("meanTotal")
            row.attr("color",red)
        }
}
*/





var sortGrades = function(penguin)
{
    d3.select("#quiz")
    .on("click",function()
       {
        penguin.sort(function(a,b)
        {
          return a.quizes - b.quizes;  
        })
    })
}


var penguinPromise = d3.json("classData.json")

penguinPromise.then(
function(penData)
    {
        //ifGrade(penData);
        //sortGrades(penData);
        penguinTable(penData)
    },
function(err)
    {
      console.log("broken",err)  
    })
    


    
    
    
    

    
    
    
    
    
    
    