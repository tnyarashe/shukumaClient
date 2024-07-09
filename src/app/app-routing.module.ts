import { NgModule } from '@angular/core';
// import { HomeComponent } from './comps/BusinessUI/home/home.component';
import { UserhomeComponent } from './comps/UserUI/userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './comps/UserUI/register/register.component';
import { LoginComponent } from './comps/UserUI/login/login.component';
import { AdminComponent } from './comps/BusinessUI/admin/admin.component';
import { MapComponent } from './comps/UserUI/map/map.component';
import { LandingComponent } from './comps/UserUI/landing/landing.component';
import { CategoriesComponent } from './comps/UserUI/categories/categories.component';
import { SingleproductComponent } from './comps/UserUI/singleproduct/singleproduct.component';
import { UserprofileComponent } from './comps/UserUI/userprofile/userprofile.component';
import { CartComponent } from './comps/UserUI/cart/cart.component';
import { OrderComponent } from './comps/UserUI/order/order.component';
import { FooterComponent } from './comps/UserUI/footer/footer.component';
import { CheckoutComponent } from './comps/UserUI/checkout/checkout.component';
import { BusinessOrdersComponent } from './comps/BusinessUI/business-orders/business-orders.component';
import { SingleOrderComponent } from './comps/UserUI/single-order/single-order.component';
import { SettingsComponent } from './comps/UserUI/settings/settings.component';
import { DriverDashComponent } from './comps/DriverUI/driver-dash/driver-dash.component';
import { ViewOrderComponent } from './comps/DriverUI/view-order/view-order.component';
import { DriverProfileComponent } from './comps/DriverUI/driver-profile/driver-profile.component';
// import { NavigationComponent } from './comps/UserUI/navigation/navigation.component';
import { BusinessprofileComponent } from './comps/BusinessUI/businessprofile/businessprofile.component';
import { AdminDashboardComponent } from './comps/BusinessUI/admin-dashboard/admin-dashboard.component';
import { ChatsComponent } from './comps/BusinessUI/chats/chats.component';
import { StatsComponent } from './comps/BusinessUI/stats/stats.component';
import { SidenavComponent } from './comps/BusinessUI/sidenav/sidenav.component';
import { ViewProductsComponent } from './comps/BusinessUI/view-products/view-products.component';
import { ViewOneProductComponent } from './comps/BusinessUI/view-one-product/view-one-product.component';
import { AddProductComponent } from './comps/BusinessUI/addproduct/addproduct.component';
import { FavouritesComponent } from './comps/UserUI/favourites/favourites.component';
import { SpinnerComponent } from './comps/UserUI/spinner/spinner.component';
import { RegisterBusinessComponent } from './comps/BusinessUI/register-business/register-business.component';
import { TrackDeliveryComponent } from './comps/UserUI/track-delivery/track-delivery.component';

const routes: Routes = [
  {path: '', redirectTo:'welcome' , pathMatch: 'full'},

  {path : 'addproduct', component: AddProductComponent},
  {path : 'oneproduct', component: ViewOneProductComponent},
  {path : 'products', component: ViewProductsComponent},
  {path : 'sidenav',component:SidenavComponent},
  {path: 'settingsBusiness',component:SettingsComponent},
  {path: 'stats', component:StatsComponent},
  {path: 'chats', component:ChatsComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'userhome', component:UserhomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'map', component: MapComponent},
  {path: 'businessprofile', component: BusinessprofileComponent},
  {path: 'welcome', component:LandingComponent},
  {path: 'category/:catname', component:CategoriesComponent},
  {path: 'product', component: SingleproductComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view_item/:id', component: SingleproductComponent},
  {path: 'orders',component: OrderComponent},
  {path: 'business-orders',component: BusinessOrdersComponent},
  {path: 'footer', component: FooterComponent},
  // {path: 'nav', component: NavigationComponent},
  {path: 'registerBusiness', component:RegisterBusinessComponent},
  {path: 'tracking', component: TrackDeliveryComponent},



  {path: 'settings', component: SettingsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'vieworder', component: SingleOrderComponent},
  {path: 'favourites', component:FavouritesComponent},
  {path: 'spinner', component:SpinnerComponent },

  // Driver Routes
  {path: 'driver/dash', component: DriverDashComponent},
  {path: 'view-one/', component: ViewOrderComponent},
  {path: 'driver/profile', component: DriverProfileComponent},
  {path: 'favourites', component:FavouritesComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
