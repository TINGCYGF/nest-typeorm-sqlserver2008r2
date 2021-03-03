import {Column, PrimaryGeneratedColumn} from "typeorm";

export interface NavInterface {


  id?: number;

  title?: string;

  url?: string;

  description?: string;

  status?: number;
}
