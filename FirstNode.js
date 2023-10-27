var firstName='Aravind';
var lastName='LN';
console.log('First name: '+firstName);
console.log('Last name: '+lastName);

var cities=['Bangalore', 'Hyderbad', 'Mysore','Chennai'];
for(i in cities)
{
    console.log(cities[i]);

}
console.log('--------------------------------\n');
for(j of cities)
{
    console.log(j);

}
console.log(('Delhi' in cities));
console.log(cities.findIndex('Delhi'));
console.log((("Chennai" in cities)?"Found":"Not Found"));
