const robotFactory= (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop');
      }
    };
  }
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep();

  //PROPERTY VALUE SHORTHAND

  /*
  const robotFactory= (model, mobile) => {
    return{
      model,
      mobile,
      beep(){
        console.log('Beep Boop');
      }
    };
  }
  */

  //Destructured Assignment
  /*
  const residence = vampire.residence; 
  console.log(residence); // Prints 'Transylvania' 

  const { residence } = vampire; 
  console.log(residence); // Prints 'Transylvania'*/