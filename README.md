# Angular Todo Application

 

This project was generated with [Angular CLI] 9.1.4.


##  Routing

 -> how to set default routing
 -> page not found routing
 -> routing from code using ActivatedRoute
 -> do not user "href" as it will load entire page use 'routerLink' attribute

##  service

-> Hardcoded Authentication service (i.e static authentication serice)
-> after sucessful login store the username in th session (key = authenticatedUser)
-> check the user is logged in user or not in the session (key = authenticatedUser)
-> remove then session key while logout (removeItem)

## Header Menu

-> Show and Hide the Menu based on logged in or logged out user
-> using `*ngIf = staticAuthenticateService.isLoggedInUser()`
-> when we are calling the 'staticAuthenticateService.isLoggedInUser()' in the header         compoenent does not work as it will load only once
hence we have to call the service 



## Guard Route

-> if user is loggedout ( i.e sessionStorage does not conatin our key ) then disable the route menu using canActivate: [RouteGuardService]

-> implemented CanActivate interface
-> override canActivate() method
-> add those router links which you want to show after login 

-> code
  `{path:'home/:username',component:HomeComponent, canActivate : [RouteGuardService]},
{path:'todos',component:TodoListComponent, canActivate : [RouteGuardService]},
{path:'logout',component:LogoutComponent, canActivate : [RouteGuardService]},`
