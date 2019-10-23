var penguinPromise = d3.json("classData.json");

penguinPromise.then(
function(classData)
    {
        var penguin = classData[0]
        console.log(penguin.quizes);
        console.log(penguin.quizes.map(grade));
        //getGrade(classData);
        console.log("classroom",classData)
    },
function(err)
    {
        console.log("broken",err)
    }
)


//var getGrade = function(quiz)
//{
    //return quiz.grade
//}
//getGrade(classroom[0],quizes[0])





row.append("td")
    .text(function(penguin)
    {
        
         var tG = d3.mean(penguin.quizes, getGrade)*2 + d3.mean(penguin.homework, getGrade)*.3 + d3.mean(penguin.test, getGrade)*.3 + penguin.final[0].grade*.35
         
         
    
    //.attr("class","tGrade")
    
         
    if(tG < 70)
        {
            row.append("td")
            .text(function(penguin)
            {
                return tG ;
            })
            .style("color","red")
        }
    else
        {
            row.append("td")
            .text(function(penguin)
            {
                return tG ;   
            })
            .style("color","black")
        }
    
    })
    