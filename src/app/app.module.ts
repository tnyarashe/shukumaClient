import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule} from '@angular/google-maps';
// import { NgxChartsModule } from '@swimlane/ngx-charts'

import { AppComponent } from './app.component';
import { authInterceptorProviders } from './auth-interceptor.interceptor';

import { RegisterComponent} from './comps/UserUI/register/register.component'
import { AdminComponent } from './comps/UserUI/admin/admin.component';
import { CategoriesComponent } from './comps/UserUI/categories/categories.component';
import { FooterComponent } from './comps/UserUI/footer/footer.component';
// import { HomeComponent } from './comps/UserUI/homeUser/home.component';
import { LandingComponent } from './comps/UserUI/landing/landing.component';
import { LoginComponent } from './comps/UserUI/login/login.component';
import { MapComponent } from './comps/UserUI/map/map.component';

import { SingleproductComponent } from './comps/UserUI/singleproduct/singleproduct.component';
import { UserprofileComponent } from './comps/UserUI/userprofile/userprofile.component';
import { SearchComponent } from './comps/UserUI/search/search.component';
import { CartComponent } from './comps/UserUI/cart/cart.component';
import { OrderComponent } from './comps/UserUI/order/order.component';
import { CheckoutComponent } from './comps/UserUI/checkout/checkout.component';
// import { TrackDeliveriesComponent } from './comps/UserUI/track-deliveries/track-deliveries.component';
import { CusOrdersComponent } from './comps/BusinessUI/cus-orders/cus-orders.component';
import { SingleOrderComponent } from './comps/UserUI/single-order/single-order.component';
import { SettingsComponent } from './comps/UserUI/settings/settings.component';

import { AddproductComponent } from './comps/BusinessUI/addproduct/addproduct.component';
import { AdminDashboardComponent } from './comps/BusinessUI/admin-dashboard/admin-dashboard.component';
import { ChatsComponent } from './comps/BusinessUI/chats/chats.component';
import { SidenavComponent } from './comps/BusinessUI/sidenav/sidenav.component';
import { StatsComponent } from './comps/BusinessUI/stats/stats.component';
import { ViewOneProductComponent } from './comps/BusinessUI/view-one-product/view-one-product.component';
import { ViewProductsComponent } from './comps/BusinessUI/view-products/view-products.component';
import { ViewOneOrderComponent } from './comps/BusinessUI/view-one-order/view-one-order.component';
import { DriverDashComponent } from './comps/DriverUI/driver-dash/driver-dash.component';
import { DriverProfileComponent } from './comps/DriverUI/driver-profile/driver-profile.component';
import { ViewOrderComponent } from './comps/DriverUI/view-order/view-order.component';
import { DriverBottomNavComponent } from './comps/DriverUI/driver-bottom-nav/driver-bottom-nav.component';
import { BusinessprofileComponent } from './comps/BusinessUI/businessprofile/businessprofile.component';
import { UserhomeComponent } from './comps/UserUI/userhome/userhome.component';
import { FavouritesComponent } from './comps/UserUI/favourites/favourites.component';
import { NavigationComponent } from './comps/UserUI/navigation/navigation.component';
import { SpinnerComponent } from './comps/UserUI/spinner/spinner.component';
import { RegisterBusinessComponent } from './comps/BusinessUI/register-business/register-business.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    MapComponent,
    LandingComponent,
    FooterComponent,
    SingleproductComponent,
    UserprofileComponent,
    CategoriesComponent,
    SearchComponent,
    CartComponent,
    OrderComponent,
    CheckoutComponent,
    CusOrdersComponent,
    SingleOrderComponent,
    SettingsComponent,
    AddproductComponent,
    AdminDashboardComponent,
    ChatsComponent,
    SidenavComponent,
    StatsComponent,
    ViewOneProductComponent,
    ViewProductsComponent,
    ViewOneOrderComponent,
    DriverDashComponent,
    DriverProfileComponent,
    ViewOrderComponent,
    DriverBottomNavComponent,
    BusinessprofileComponent,
    UserhomeComponent,
    FavouritesComponent,
    SpinnerComponent,
    NavigationComponent,
    RegisterBusinessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    GoogleMapsModule,
  ],
  providers: [
    provideClientHydration(),
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

