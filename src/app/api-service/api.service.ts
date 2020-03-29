import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup, AdminLogin, VolSearch, CountO, AbsanceVal, EditCountryCity, CountryNotes, AddEditLocation, EditMemVol, AddEditCitySupervisor, AddEditCountrySupervisor, EditHomePage, EditAboutPage, EditTerms, AddEditAgancy, AddEditCustomer, SiteOptEditOpt, SiteOptMemSett, SiteOptLangSett, SiteOptLogoSett, SiteOptContSett, SiteOptSocialSett, AddNewUser, OpenCloseSite, UserLogin, EditMyProfile, UserRating, EditAddMyVol, RegDay, UserNote } from  '../crud-class/policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://localhost/Ramadan-Aman/backend';

  readPolicies(): Observable<Signup[]>{
    return this.httpClient.get<Signup[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }


  createPolicy(policy: Signup): Observable<Signup>{
    return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }



  updatePolicy(policy: Signup){
    return this.httpClient.put<Signup>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }



  deletePolicy(id: number){
    return this.httpClient.delete<Signup>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

/////////////////////////////////////* start user pages *///////////////////////////////////////////////////////

/////////for users Signup
SignUpRequest(policy: Signup): Observable<Signup>{
  return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}

/////////for users login
UserLoginRequest(policy: UserLogin): Observable<UserLogin>{
  return this.httpClient.post<UserLogin>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}



/////////for users Edit My Profile
UserEditProfileRequest(policy: EditMyProfile): Observable<EditMyProfile>{
  return this.httpClient.post<EditMyProfile>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Edit My Profile
UserRatingRequest(policy: UserRating): Observable<UserRating>{
  return this.httpClient.post<UserRating>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}



/////////for users Edit My Volunteers
UserEditMyVolRequest(policy: EditAddMyVol): Observable<EditAddMyVol>{
  return this.httpClient.post<EditAddMyVol>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Registered Day
UserRegDayRequest(policy: RegDay): Observable<RegDay>{
  return this.httpClient.post<RegDay>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}


/////////for users Notes
UserNotesRequest(policy: UserNote): Observable<UserNote>{
  return this.httpClient.post<UserNote>(`${this.PHP_API_SERVER}/api/create.php`, policy);
}





////////////////////////////////////////* end User Pages *//////////////////////////////////////////////////////

  /////////for admin login
  LoginRequest(policy: AdminLogin): Observable<AdminLogin>{
    return this.httpClient.post<AdminLogin>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }


  

 

  API_SERVER = 'http://localhost/Ramadan-Aman/frontend/my-app/backend-for-test';

   /////////volunteer search
   VolSearchRequest(policy: VolSearch): Observable<VolSearch>{
    return this.httpClient.post<VolSearch>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }






  ///read countries object
  readCountriesO(): Observable<CountO[]>{
    return this.httpClient.get<CountO[]>(`${this.API_SERVER}/php-test.php`);
  }


  /////////Absance Status 
  AbsanceRequest(policy: AbsanceVal): Observable<AbsanceVal>{
    return this.httpClient.post<AbsanceVal>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  /////////Edit Country And City
  EditCountryCity(policy: EditCountryCity): Observable<EditCountryCity>{
    return this.httpClient.post<EditCountryCity>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////Country Notes
  CountryNotesRequest(policy: CountryNotes): Observable<CountryNotes>{
    return this.httpClient.post<CountryNotes>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  ///////// add edit location
  AddEditLocationRequest(policy: AddEditLocation): Observable<AddEditLocation>{
    return this.httpClient.post<AddEditLocation>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  ///////// edit member & volunteers
  EditMemVolRequest(policy: EditMemVol): Observable<EditMemVol>{
    return this.httpClient.post<EditMemVol>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  ///////// edit site supervisor
  EditSiteSupRequest(policy: EditMemVol): Observable<EditMemVol>{
    return this.httpClient.post<EditMemVol>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  ///////// add & edit city supervisor
  AddEditCitySupRequest(policy: AddEditCitySupervisor): Observable<AddEditCitySupervisor>{
    return this.httpClient.post<AddEditCitySupervisor>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  ///////// add & edit Country supervisor
  AddEditCountrySupRequest(policy: AddEditCountrySupervisor): Observable<AddEditCountrySupervisor>{
    return this.httpClient.post<AddEditCountrySupervisor>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  /////////  edit Home Page
  EditHomePageRequest(policy: EditHomePage): Observable<EditHomePage>{
    return this.httpClient.post<EditHomePage>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

   ///////// edit About Page
   EditAboutPageRequest(policy: EditAboutPage): Observable<EditAboutPage>{
    return this.httpClient.post<EditAboutPage>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  ///////// Edit Terms
  EditTermsRequest(policy: EditTerms): Observable<EditTerms>{
    return this.httpClient.post<EditTerms>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////Add Edit Agancy
  AddEditAgancyRequest(policy: AddEditAgancy): Observable<AddEditAgancy>{
    return this.httpClient.post<AddEditAgancy>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////Add Edit Customer
  AddEditCustomerRequest(policy: AddEditCustomer): Observable<AddEditCustomer>{
    return this.httpClient.post<AddEditCustomer>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////site option Edit option
  SitOptEditOptRequest(policy: SiteOptEditOpt): Observable<SiteOptEditOpt>{
    return this.httpClient.post<SiteOptEditOpt>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }



  /////////Site Option Member Settings
  SiteOptMemSettRequest(policy: SiteOptMemSett): Observable<SiteOptMemSett>{
    return this.httpClient.post<SiteOptMemSett>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }



  /////////Site Options Language Settings
  SiteOptLangSettRequest(policy: SiteOptLangSett): Observable<SiteOptLangSett>{
    return this.httpClient.post<SiteOptLangSett>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }




  /////////Site Options Logo Settings
  SiteOptLogoSettRequest(policy: SiteOptLogoSett): Observable<SiteOptLogoSett>{
    return this.httpClient.post<SiteOptLogoSett>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }




  ///////// Site Options Contact Us Settings
  SiteOptContSettRequest(policy: SiteOptContSett): Observable<SiteOptContSett>{
    return this.httpClient.post<SiteOptContSett>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }



  ///////// Site Options Socail Link Settings
  SiteOptSocailSettRequest(policy: SiteOptSocialSett): Observable<SiteOptSocialSett>{
    return this.httpClient.post<SiteOptSocialSett>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }




  ///////// Add New User
  AddNewUserRequest(policy: AddNewUser): Observable<AddNewUser>{
    return this.httpClient.post<AddNewUser>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  ///////// Open Close Site
  OpenCloseSiteRequest(policy: OpenCloseSite): Observable<OpenCloseSite>{
    return this.httpClient.post<OpenCloseSite>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }





  constructor(private httpClient: HttpClient) {}
}