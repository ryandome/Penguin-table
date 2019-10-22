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