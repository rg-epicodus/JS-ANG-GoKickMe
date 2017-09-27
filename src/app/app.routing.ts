import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }   from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'marketplace',
    component: MarketplaceComponent
  }
]



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
