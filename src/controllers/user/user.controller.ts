import { Controller , Get  } from '@nestjs/common';
import { UserService } from '../../services/user/user.service'

@Controller('user')
export class UserController {

    constructor(private serv: UserService) { }
    
    @Get()
    public async getAll() {
    //   return await this.serv.getAll();
    let data =  await this.serv.getAll();
    return data.length > 0 ? data : "No data is avaiable"
    }
}
