export interface User {
    firstName: string,
    lastName: string,
    twitterHandle?: string,
    location: Location
  }
  
  export interface Location {
    city: string,
    state: string
  }
}