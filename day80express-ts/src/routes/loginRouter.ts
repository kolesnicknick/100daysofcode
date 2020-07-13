import { Request, Response, Router } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
        </form>
`);
});

router.post('/login', (req: Request, res: Response) => {
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
});


router.get('/', (req: Request, res: Response) => {
  // @ts-ignore
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div> 
       <div>
            You are logged in
       </div>
       <a href="/logout">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div> 
       <div>
            You are NOT logged in
       </div>
       <a href="/login">Log in</a>
    </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  // @ts-ignore
  req.session = { loggedIn: false };
  res.redirect('/');
});

export { router };
