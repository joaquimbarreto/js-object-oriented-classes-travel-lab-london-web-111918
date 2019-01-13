class Driver{
    
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date( startDate );
    }

    yearsExperienceFromBeginningOf(year) {
        let endDate = new Date(year);
        return endDate.getFullYear() - this.startDate.getFullYear();
    }
        
}

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];
  
class Route {

    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

}