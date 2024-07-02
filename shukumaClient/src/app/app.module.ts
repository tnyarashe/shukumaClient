import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RegisterComponent} from './comps/UserUI/register/register.component'
import { AdminComponent } from './comps/UserUI/admin/admin.component';
import { CategoriesComponent } from './comps/UserUI/categories/categories.component';
import { FooterComponent } from './comps/UserUI/footer/footer.component';
// import { HomeComponent } from './comps/UserUI/homeUser/home.component';
import { LandingComponent } from './comps/UserUI/landing/landing.component';
import { LoginComponent } from './comps/UserUI/login/login.component';
import { MapComponent } from './comps/UserUI/map/map.component';
import { NavComponent } from './comps/UserUI/nav/nav.component';
import { SingleproductComponent } from './comps/UserUI/singleproduct/singleproduct.component';
import { UserprofileComponent } from './comps/UserUI/userprofile/userprofile.component';
import { SearchComponent } from './comps/UserUI/search/search.component';
import { CartComponent } from './comps/UserUI/cart/cart.component';
import { OrderComponent } from './comps/UserUI/order/order.component';
import { CheckoutComponent } from './comps/UserUI/checkout/checkout.component';
// import { TrackDeliveriesComponent } from './comps/UserUI/track-deliveries/track-deliveries.component';
import { CusOrdersComponent } from './comps/UserUI/cus-orders/cus-orders.component';
import { SingleOrderComponent } from './comps/UserUI/single-order/single-order.component';
import { SettingsComponent } from './comps/UserUI/settings/settings.component';

import { AddproductComponent } from './comps/BusinessUI/addproduct/addproduct.component';
import { AdminDashboardComponent } from './comps/BusinessUI/admin-dashboard/admin-dashboard.component';
import { ChatsComponent } from './comps/BusinessUI/chats/chats.component';
import { SidenavComponent } from './comps/BusinessUI/sidenav/sidenav.component';
import { StatsComponent } from './comps/BusinessUI/stats/stats.component';
import { ViewOneProductComponent } from './comps/BusinessUI/view-one-product/view-one-product.component';
import { ViewOrdersComponent } from './comps/BusinessUI/view-orders/view-orders.component';
import { ViewProductsComponent } from './comps/BusinessUI/view-products/view-products.component';
import { ViewOneOrderComponent } from './comps/BusinessUI/view-one-order/view-one-order.component';
import { BusinessprofileComponent } from './comps/BusinessUI/businessprofile/businessprofile.component';
import { UserhomeComponent } from './comps/UserUI/userhome/userhome.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
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
    ViewOrdersComponent,
    ViewProductsComponent,
    ViewOneOrderComponent,
    BusinessprofileComponent,
    UserhomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

