import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class NewsModel {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ nullable: false })
  title: string;

  @Field()
  @Column({ nullable: false })
  content: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
