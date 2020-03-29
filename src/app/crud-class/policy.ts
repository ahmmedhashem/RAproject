
/////////////////////////////////////////////* Start User Pages */////////////////////////////////////////////////

//Sign Up Data for users
export  class  Signup {
    id              : number;
    RegType         : number;
    AgencyType      : number;
    AcadimicId      : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    BirthDate       : number;
    Gender          : number;
    Nationality     : number;
    Country         : number;
    City            : number;
    NewsLetter      : number; 
    Username        : number;
    Phone           : number;
    Email           : number;
    Password        : number; 
    Terms           : number; 
}

// Login Data for users
export  class  UserLogin {
    Username : number;
    Password : number;
    Remember : number;
}


// edit my profile
export  class  EditMyProfile {
    Id              : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    Email           : number;
    Password        : number; 
    Phone           : number;
    BirthDate       : number;
    Gender          : number;
    Nationality     : number;
}



// Rating for users
export  class  UserRating {
    Id      : number;
    Rate    : number;
}


// edit my Voulnteers for their parent
export  class  EditAddMyVol {
    Id              : number;
    StNameEn        : number;
    EdNameEn        : number;
    RdNameEn        : number;
    ThameEn         : number;
    StNameAr        : number;
    EdNameAr        : number;
    RdNameAr        : number;
    ThameAr         : number;
    BirthDate       : number;
    Phone           : number;
    Gender          : number;
}



// for  user register day
export  class  RegDay {
    Id      : number;
    Day     : number;
    City    : number;
    Place   : number;
}


// for  user notes
export  class  UserNote {
    Id      : number;
    Note    : number;
  
}



/////////////////////////////////////////////* End User Pages */////////////////////////////////////////////////





//login admin info
export class AdminLogin {
    AdminUsername : number;
    AdminPassword : number;
   
}

//volunteer search
export class VolSearch {
    Phone   : number;
    Name    : number;
    Gov     : number;
    Day     : number;
    Country : number;
    City    : number;
    Place   : number;
    Date    : number;

}



//volunteer search
export class CountO {
    id   : number;
    name    : number;
}

//Absance Value
export class AbsanceVal {
    ID        : number;
    Status    : number;
}

//Edit Country & City
export class EditCountryCity {
    SectionType : number;
    Country     : number;
    NameEn      : number;
    NameAr      : number;
    Image       : number;
    PhoneCode   : number;
    Status      : number;
}

//Country Notes
export class CountryNotes {
    Country      : number;
    NotesEn      : number;
    NotesAr      : number;
    Phone        : number;
}


//Add Edit Location
export class AddEditLocation {
    NameEn          : number;
    NameAr          : number;
    Country         : number;
    City            : number;
    PersonReq       : number;
    PlaceType       : number;
    VolHours        : number;
    MapCode         : number;
    Days            : number;
    AlertMessEn     : number;
    AlertMessAr     : number;
    Active          : number;

}

//edit member & volunteers
export class EditMemVol {
    Type           : number;
    Password       : number;
    FirstNameEn    : number;
    SecondNameEn   : number;
    ThirdNameEn    : number;
    FourthNameEn   : number;
    FirstNameAr    : number;
    SecondNameAr   : number;
    ThirdNameAr    : number;
    FourthNameAr   : number;
    Phone          : number;
    Email          : number;
    Gender         : number;
    MemType        : number;
    Place          : number;
    Nationalty     : number;
    NewsLetter     : number;
    Notes          : number;
    Status         : number;

}



//add edit City Supervisor
export class AddEditCitySupervisor {
    Username    : number;
    Password    : number;
    Fullname    : number;
    Email       : number;
    Country     : number;
    City        : number;
    Status      : number;
}


//add edit Country Supervisor
export class AddEditCountrySupervisor {
    Username    : number;
    Password    : number;
    Fullname    : number;
    Email       : number;
    Country     : number;
    Status      : number;
}


//add edit Home Page
export class EditHomePage {
    Banar           : number;
    AboutTextEn     : number;
    AboutTextAr     : number;
}


//add edit About Page
export class EditAboutPage { 
    AboutTextEn     : number;
    AboutTextAr     : number;
    Banar           : number;
}


//add edit Terms
export class EditTerms { 
    HeaderEn        : number;
    HeaderAr        : number;
    ListOneEn       : number;
    ListOneAr       : number;
    ListTwoEn       : number;
    ListTwoAr       : number;
    ListThreeEn     : number;
    ListThreeAr     : number;
    ListFourEn      : number;
    ListFourAr      : number;
    ListFiveEn      : number;
    ListFiveAr      : number;
    ListSixEn       : number;
    ListSixAr       : number;
    ListSevenEn     : number;
    ListSevenAr     : number;
}


//add edit Official agancy
export class AddEditAgancy { 
    Country    : number;
    NameEn     : number;
    NameAr     : number;
    Status     :number
}


//add edit Customer
export class AddEditCustomer { 
    Country    : number;
    NameEn     : number;
    NameAr     : number;
    Link       : number;
    Image      : number;
    Status     : number;
}


//Site OPtions Edit Options 
export class SiteOptEditOpt { 
    SiteNameEn          : number;
    SiteNameAr          : number;
    SiteDescEn          : number;
    SiteDescAr          : number;
    KeywordsEn          : number;
    KeywordsAr          : number;
    SiteEmail           : number;
    RamadanStartDate    : number;
}


//Site OPtions Member Settings
export class SiteOptMemSett { 
    AllowNewReg        : number;
    MemActivation      : number;
    CalenderEditing    : number;
}


//Site OPtions Language Settings
export class SiteOptLangSett { 
    DefultLang    : number;
    OtherLang     : number;
}



//Site OPtions Site Logo Settings
export class SiteOptLogoSett { 
    SiteLogo    : number;
    SiteColor     : number;
}


//Site OPtions Contact Settings
export class SiteOptContSett { 
    Phone       : number;
    Email       : number;
}



//Site OPtions Social Settings
export class SiteOptSocialSett { 
    Facebook    : number;
    Twitter     : number;
    Youtube     : number;
    LinkedIn    : number;
    Instagram   : number;
    Snapchat    : number;
}


//Add new user
export class AddNewUser { 
    Username    : number;
    Password    : number;
    FullName    : number;
    Email       : number;
    Type        : number;
    Country     : number;
}



//Open Close Site
export class OpenCloseSite { 
    Status    : number;
    MessageEn    : number;
    MessageAr    : number;
}


