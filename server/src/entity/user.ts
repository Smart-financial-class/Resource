import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

// @EntityModel('photo')
// export class Photo {
//   // 此实体中的所有属性应该与数据库表一一对应
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   description: string;
  
//   @Column()
//   filename: string;
  
//   @Column()
//   views: number;
  
//   @Column()
//   isPublished: boolean;
// }

@EntityModel()
export class User {
  // 此实体中的所有属性应该与数据库表一一对应
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  email: string;
  
  @Column({
    length: 11
})
  phone: string;
  
  @Column({
    length: 1
  })
  status: string;
}