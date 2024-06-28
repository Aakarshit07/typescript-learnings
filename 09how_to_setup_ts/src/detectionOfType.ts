function detectType(val: number | string) {
    if (typeof val === "string") {
       return val.toLowerCase();
    } 
    return val + 3;

    //what if we have more than one type like and number array.
}

function provedeId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return;
    }
    id?.toLowerCase();
}


function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}


interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    // we can't return admin becauser the propert is in admin or not
    
    // here we checking if isAdmin in accound or not
    if("isAdmin" in account) {
        return account.isAdmin
    }

}