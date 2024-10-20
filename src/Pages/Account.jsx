
import { SignedIn, SignedOut, RedirectToSignIn, UserProfile } from "@clerk/clerk-react";



const Account = () => {
 
  return (
    <>     {/* If the user is signed in, show the protected content */}
     <SignedIn>
     <UserProfile />
    
   </SignedIn>

   {/* If the user is not signed in, redirect them to the sign-in page */}
   <SignedOut>
     <RedirectToSignIn />
   </SignedOut>
  
  </>
  );
}

export default Account
