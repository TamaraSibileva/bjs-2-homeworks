function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    console.log("Ошибка! Студент отчислен.");
    return 0;
  }
  
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks')) {
    return 0;
  }

  if (!this.marks.length) {
    return 0;
  }
  
  return this.marks.reduce((sum, item, index, arr) => sum + item / arr.length, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
