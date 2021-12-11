export default class FacilityUsage {
  constructor(id = 0, unit = '', start_date = '', end_date = '', usage = '', total = '', discount = true,) {
    this.id = id,
    this.unit = unit;
    this.start_date = start_date;
    this.end_date = end_date;
    this.usage = usage;
    this.total = total;
    this.discount = discount;
  }
}
