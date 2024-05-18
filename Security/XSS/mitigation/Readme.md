Mitigation

1. List of all possible way to capture user input
   - URL ==> url query params
   - user input forms
2. For preventing XSS

   - Avoid .innerHTML , because it modify the HTML Content
     Ex:

     document.getElementById('username').innerHTML = name ; // avoid this
     document.getElementById('username').textContent = name ; // better way

   - Use Escaping machanism (like some of tag we can convert into text) ex: <script> <> </>

   ```
   const sanitizedName = name.replace(/</g,'&lt;').replace(/>/g,'&gt;')
   document.getElementById('username').innerHTML= sanitizedName
   ```

   - avoid using Eval

3. Use Library like react
   under the hood they provide lot of capability to prevent some of attacks

   example:

   ```
   function Greeting(){

   const params = new URLSearchParams(window.location.search);
   const name = params.get('name'); // here it will take as string only not as DOM Element
   return <div> {name}</div>

   }

   ```

   Note : avoid dangerInnerHTML kindof stuff

4. Use library for Sanitize Data like DOMPurify , it will take care of user input data

   example

   ```
   const params = new URLSearchParams(window.location.search);
   const name = params.get('name');
   const sanitizedName = DOMPurify.sanitize(name);
   document.getElementById('username').textContent= sanitizedName

   ```

5. There could be case where we dont have any control, like someone injected third party end point which has some malicious code which can do lot of crazy thing

CSP Headers

- There are many headers that can be set from server into your application which can be decide what kind
  of the resources can be loaded from where these resources can be loaded and taking control like do you want to execute or not , comming from multiple resources we are the owner here
- also we can trust your script , we can check its our script or not
