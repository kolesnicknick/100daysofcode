import { NextFunction, Request, Response } from 'express';
import { bodyValidator, controller, get, post, use } from '../decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
       <form method="post">
            <div>
                <label>Email       .</label>
               <input name="email"> 
            </div>
            <div>
                <label>Password</label>
               <input name="password" type="password"> 
            </div>
            <button type="submit">Submit</button>
        </form>`);
  };

  @post('/login')
  @use(logger)
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'koleskolia@yandex.ru' && password === 'qwer') {
      // @ts-ignore
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send(`<div> 
       <div>
            Wrong login password
       </div>
       <a href="/login">Login</a>
    </div>`);
    }
  }

  @get('/logout')
  @use(logger)
  getLogout(req: Request, res: Response) {
    // @ts-ignore
    req.session = { loggedIn: false };
    res.redirect('/');
  };
}
