class Student {
    constructor(firstName, lastName, birthDay, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
        this.presenceFactor = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "Редиска!",
            NORMAL: "Хорошо, но можно лучше",
            GOOD: "Молодец!"
        };
    }

    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    get avaragePresence() {
        var precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }    

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    summary() {
        if (this.averageMark < this.goodMarksMin && this.avaragePresence < this.presenceFactor) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.avaragePresence < this.presenceFactor)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}

const student1 = new Student('Іван', 'Петров', '2000-01-01', [89, 96, 88, 92, 88]);
const student2 = new Student('Марія', 'Сидорова', '2002-03-15', [95, 88, 89, 90, 89]);
const student3 = new Student('Олег', 'Коваль', '2001-07-10', [78, 82, 70, 88, 75]);

student1.absent();
student2.present();
student3.absent();
student1.present();
student2.present();

console.log('Студент 1:');
console.log('Средний бал:', student1.averageMark);
console.log('Средний процент посещения:', student1.avaragePresence);
student1.summary();

console.log('\nСтудент 2:');
console.log('Средний бал:', student2.averageMark);
console.log('Средний процент посещения:', student2.avaragePresence);
student2.summary();

console.log('\nСтудент 3:');
console.log('Средний бал:', student3.averageMark);
console.log('Средний процент посещения:', student3.avaragePresence);
student3.summary();