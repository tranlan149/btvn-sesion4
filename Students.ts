class Student{
    private id:number;
    private name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
}
class Course{
    private id:number;
    private title:string;

    constructor(id:number, title:string){
        this.id = id;
        this.title = title;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
}
class Enrollment{
    private student:Student;
    private course : Course;
    private scheduleTime: string;

    constructor(student:Student, course:Course, scheduleTime:string){
        this.student = student;
        this.course = course;
        this.scheduleTime = scheduleTime;
    }
}
class StudyManager{
    private students : Student[];
    private courses : Course[];
    private enrollments : Enrollment[];

    constructor(students:Student[],courses:Course[], enrollments:Enrollment[]){
        this.students = [];
        this.courses = [];
        this.enrollments = [];
    }
    addStudent(name:string):void{
        let id =  Math.random();
        let student = new Student(id, name);
        this.students.push(student);
    }
    addCourse(title:string):void{
        let id = Math.random();
        let course = new Course(id, title);
        this.courses.push(course);

    }
    enrollStudent(studentId:number, courseId:number, scheduleTime:string):void{
        const student = this.students.find(item=>item.getId()===studentId);
        const course = this.courses.find(item=>item.getId()===courseId);
        let enroll = new Enrollment(student, course, scheduleTime);
        this.enrollments.push(enroll);
    }
}