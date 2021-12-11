export default class Facility {
  constructor(id = 0, name = '', start_date = '', end_date = '', workers = '', special = true,) {
    this.id = id,
    this.name = name;
    this.start_date = start_date;
    this.end_date = end_date;
    this.workers = workers;
    this.special = special;
  }
}
