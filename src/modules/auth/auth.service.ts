import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()

export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {

  }
  
}