export default function IterationComponent()
{
    var names=[{
        name:"Ivy",
        age:70,
        salary:300
    },
    {name:"Dia",
        age:30,
        salary:600},
        
        {name:"sia",
        age:10,
        salary:400}
];
    function namesjsx()
    {var namesjsx=[];
        namesjsx=names.map((employee)=>{
            return<h3> employee names is: {employee.name},age:{employee.age},salary:{employee.salary}</h3>
        })
        
        return namesjsx;

    }
  
    return (
        <div> 
            <h1> total employee:{names.length}</h1>
            <h2> here is the list</h2>
          {namesjsx()}
        </div>
    )
    

}