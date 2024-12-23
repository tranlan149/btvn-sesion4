class Employee{
    private id:number;
    private name:string;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }

}
class Task{
    private id: number;
    private title: string;
    private deadline: string;
    private isCompleted : boolean;

    constructor(id:number, title:string, deadline:string, isCompleted:boolean){
        this.id = id;
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getDeadline(){
        return this.deadline;
    }
    getIscompleted(){
        return this.isCompleted;
    }
    setIsComplete(isCompleted:boolean){
        this.isCompleted = isCompleted;
    }
}
class Assignment{
    private employee: Employee;
    private task: Task;

    constructor(employee:Employee, task:Task){
        this.employee = employee;
        this.task = task;
    }
}
class TaskManager{
    private employees: Employee[];
    private tasks:Task[];
    private assignments : Assignment[];

    constructor(employee:Employee[], task:Task[], assignment:Assignment[]){
        this.employees = [];
        this.tasks = [];
        this.assignments = [];
    }
    addEmployee(name:string):void{
        //thêm nhân viên mới vào danh sách
        let id:number = Math.random();
        let employee = new Employee(id, name);
        this.employees.push(employee);

    }
    addTask(title:string, deadline:string):void{
        //thêm task mới hoàn thành
        let id:number = Math.random();
        let task = new Task(id, title, deadline, false);
        this.tasks.push(task);
    }
    assignTask(employeeId:number, taskId:number):void{
        //Phân công task cho nhân viên
        // Timf kiem employee da co san trong mang (find, findIndex)
        let employee = this.employees.find(item=>item.getId()===employeeId);
        // Tim kiem task da co san torng mang tasks (find, findIndex)
        let task = this.tasks.find(item=>item.getId()===taskId);
        let assign = new Assignment(employee, task);
        this.assignments.push(assign);
        
    }
    completeTask(taskId:number): void{
        //đánh dấu task hoàn thành
        for(let i:number=0; i<this.tasks.length; i++){
            if(this.tasks[i].getId() === taskId){
                this.tasks[i].setIsComplete(true);
            }
        }


    }
    listTask(taskId:number):void{
        // Hiển thị danh sách task với trạng thái hoàn thành và quá hạn nếu có
        if(this.tasks.length<0){
            console.log("danh sách trống");
        }
        else{
            this.tasks.forEach((item=>{
                console.log(`${item.getId} ${item.getTitle} ${item.getIscompleted} ${item.getDeadline}`)
            }))
        }
        
    }

}
class Main{

}