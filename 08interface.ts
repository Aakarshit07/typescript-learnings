
// interface is like a high level overview ki User kaisa hoga.
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // Not Good way to assign the method
    startTrail: () => string,
    // Better way to assign the method
    startCamping(): string,
    getCoupon(couponName: string, value: number): number

}

// reopening of interface
interface User {
    githubToken: string
}

//Inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

// form more interfaces refer Docs

const soul: Admin = { 
    dbId: 431, 
    email: "a@a.com", 
    userId: 123, 
    startTrail: () => {
        return "trail strted";
    },
    startCamping: () => {
        return "camping strted";
    },
    // parameter we dont need to match the name.
    getCoupon: (name: "Soul", off: 10) => {
        return 453;
    },
    githubToken: "soul",
    role : "admin"
}
soul.email = "s@so.com"

