/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Setter to assign a teacher to the subject
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
