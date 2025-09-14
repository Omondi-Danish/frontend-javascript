import { Teacher } from "./Teacher";

export class Subject {
  teacher: Teacher;

  // ✅ Explicitly type the parameter
  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
