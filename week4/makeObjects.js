let aLecture = new Object();
aLecture.korName = "웹프로그래밍";
aLecture.engName = "Web Programming";
aLecture.classCode = "V024003";
aLecture.nStudents = 0;
aLecture.studetNames = [];
aLecture.register = function(name) {
    this.studetNames[this.nStudents] = name;
    this.nStudents++;
};
aLecture.unregister = function(name) {
    const idx = this.studentNames.indexOf(name);
    if (idx !== -1) {
        this.studentNames.splice(idx, 1);
        this.nStudents--;
  }
};
aLecture.getStudentCount = function() {
    return this.nStudents;
};
aLecture.getStudentNames = function(idx) {
    return this.studetNames[idx];
};

let bLecture = {
  korName: '웹 프로그래밍',
  engName: 'Web Programming',
  classCode: "V024003",
  nStudents: 0,
  studetNames: [],
  register: function(name) {
    this.studetNames[this.nStudents] = name;
    this.nStudents++;
    },
    unregister: function(name) {
    // ...
    this.nStudents--;
    },
    getStudentCount: function() {
        return this.nStudents;
    },
    getStudentNames: function(idx) {
        return this.studetNames[idx];
    }
};


function Lecture(korName, engName, classCode) {
  this.korName = korName;
  this.engName = engName;
  this.classCode = classCode;
  this.nStudents = 0;
  this.studetNames = [];
  this.register = function(name) {
    this.studetNames[this.nStudents] = name;
    this.nStudents++;
  };
  this.unregister = function(name) {
    // ...
    this.nStudents--;
  };
  this.getStudentCount = function() {
     return this.nStudents;
  };
  this.getStudentNames = function(idx) {
    return this.studetNames[idx];
  };
}