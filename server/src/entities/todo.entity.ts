import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class Todo {
  @PrimaryColumn()
  id: string;
  @Column()
  message: string;
}

export default Todo;
