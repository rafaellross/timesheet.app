export class Day {
    constructor(Number: number, Description: string, Worked: boolean = true){
        this.Number = Number;
        this.Description = Description;
        this.Start = 0;
        this.End = 0;
        this.Worked = Worked;
    }
    Number: number;
    Description: string;
    Start: number;
    End: number;
    Worked: boolean;
    DayDate: Date;
    TimeSheetId: number;

   setDate(startWeek: Date){
    this.DayDate = new Date(startWeek.getDate()+1);
   }

   hours(start = 0){
        let result: number[] = [];
        for (var index =  Number(start); index < (60*24); index +=15) {
          result.push(index);      
        }  
        return result;
    }
}
