const cars="Prius,2017,red,automatic,y,y,y,n,n,y,10000#Ionic,2020,blue,automatic,y,y,y,y,y,y,13000#Audi,2013,gray,manual,y,y,n,n,n,n,7500#Golf,1995,black,manual,n,n,n,n,n,n,2100#Kia,2007,white,automatic,n,y,n,n,n,n,5300#Mercedes,1998,silver,automatic,y,y,y,n,n,n,8600";

const car=parseCarsInfo(cars);
console.log(checkFeatures(car) );







function parseCarsInfo(cars) {
  const allString = cars.split('#');
  return allString.map(cars => {
    const fields = cars.split(',');
    return {
   
Type: fields[0],
Model: fields[1],
Color: fields[2],
Transmission: fields[3],
Features:{
	AC:fields[4],
	ElectricWindows:fields[5],
	ElectricMirrors: fields[6],
	Sunroof: fields[7],
	AutoPark:fields[8],
	CruiseControl:fields[9],
	TotalPrice: fields[10]
 
  }
 
  };
  })
  }
  function customsComputing(cars) {
	return cars.map(car => {
		let model=Number(car.Model);
  let totalCustoms=Number(car.Features.TotalPrice);
    
	if ((Object.values(model))>=2015 ){
  totalCustoms=totalCustoms*1.10;
  }
    if(2010<= model <=2014){
  totalCustoms=(1.08)*totalCustoms;
  }
  
  if(2005<= model<=2009){
   totalCustoms=(1.06)*totalCustoms;

  }
  if(2000<= model<=2004){
   totalCustoms=(1.04)*totalCustoms;

  }
  if(1999>= model){
  totalCustoms=(1.02)*totalCustoms;

  }

	return totalCustoms;
  });
}
  function checkTransmission(tCustomes=customsComputing(cars)){
  
	return cars.map(car => {
		const Transmission=car.Transmission;
   
    
	if(Transmission=="automatic"){
  tCustomes=tCustomes*(0.03);
  }
  
  
	return totalCustoms;
  });
  
  }
  function checkFeatures(totCustoms=checkTransmission(cars)){
  return cars.map(car => {
		const Ac=car.Features.AC;
    let  ElectricWindows=car.Features.ElectricWindows;
    const ElectricMirrors=car.Features.ElectricMirrors;
    const Sunroof=car.Features.Sunroof;
    const Autopark=car.Features.Autopark;
    const CruiseControl=car.Features.CruiseControl;
    
	if(Ac=="y" || Autopark=="y"){
  totCustoms=totCustoms*(1.05);
  }

  if(ElectricWindows==="y"){
   totCustoms=totCustoms*(1.08);
  }
  if(ElectricMirrors==="y"){
     totCustoms=totCustoms*(1.06);}
 if(Sunroof==="y"){
   totCustoms=totCustoms*(1.07);
  }
  if(CruiseControl==="y"){
     totCustoms=totCustoms*(1.06);
     }
  
	return totCustoms;
  });
  
  }



   
  