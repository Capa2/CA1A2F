class Person {
	constructor(parsed) {
		this.id = parsed.id;
		this.phones = parsed.phone;
		this.fname = parsed.firstName;
		this.lname = parsed.lastName;
		this.address = parsed.address;
		this.zip = parsed.address.zip;
		this.hobbies = parsed.hobbies;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.fname + " " + this.lname;
	}

	getPhones() {
		let ps = this.phones;
		let string;
		for (p in ps) {
			string += p.number + " (" + p.info + ") ";
		}
		return string;
	}

	getAddress() {
		return this.address.address + ", " + this.zip.id + " " + this.zip.city;
	}

	getHobbies() {
		let string;
		for (const h in this.hobbies) {
			string += h.name + " (" + h.category + "/" + h.type + ") ";
		}
		return string;
	}
}

export default Person;
