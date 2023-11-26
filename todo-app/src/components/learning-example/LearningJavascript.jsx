
const person={
    name:'sakshat',
    address:{
        line1:'baker street',
        city: 'london',
        country:'uk'
    },
    profiles:['twitter','linked','instagram'],
    printProfile: () =>{
        person.profiles.map(
            profile => console.log(profile)
            
        )
    }
}
export default function LearningJavascript(){
    return(
        <>
         <div>leanigjavascr</div>
         <div>{person.address.city}</div> 
         <div>{person.name}</div>  
         <div>{person.profiles[2]}</div>  
         <div>{person.printProfile()}</div>  

         </>
    )
    
}