export class User {
    id: number;
    name: string;
    email: string;
    sex: string;
    weight: number;
    growth: number;
    age: number;
    password: string;
    enabled: boolean;
    registered: Date;
    roles: string[];

    constructor(id: number, name: string, email: string, sex: string, weight: number, growth: number, age: number, password: string, enabled: boolean, roles: string[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.sex = sex;
        this.weight = weight;
        this.growth = growth;
        this.age = age;
        this.password = password;
        this.enabled = enabled;
        this.roles = roles;       
    }
}