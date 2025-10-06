export class DateUtils {

static getWeekNumber(date:Date){
 const dia = date.getDate();
    const primeiroDia = new Date(date.getFullYear(), date.getMonth(),1).getDay();
    return Math.ceil((dia + primeiroDia) / 7);
}

}
