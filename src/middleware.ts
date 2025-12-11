// comment for just redirect issues after that uncommet

// import { authMiddleware } from "@clerk/nextjs"

// export default authMiddleware({
//     publicRoutes:['/','/auth(.*)','/portal(.*)','/images(.*)'],
//     ignoredRoutes:['/chatbot'],
// })

// export const config={ 
//      matcher: ['/((?!.+.[w]+$|_next).*)','/','/(api|trpc)(.*)'],
// }



import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['(.*)'], // everything is public
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
