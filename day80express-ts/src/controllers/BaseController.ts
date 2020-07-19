import { controller, get } from '../decorators';
import { Request, Response } from 'express';

@controller('')
class BaseController {
  @get('/')
  getBase(req: Request, res: Response) {
    // @ts-ignore
    if (req.session && req.session.loggedIn) {
      res.send(`
    <div> 
       <div>
            You are logged in
       </div>
       <a href="/auth/logout">Logout</a>
    </div>
    `);
    } else {
      res.send(`
    <div> 
       <div>
            You are NOT logged in
       </div>
       <a href="/auth/login">Log in</a>
    </div>
    `);
    }
  }
}
