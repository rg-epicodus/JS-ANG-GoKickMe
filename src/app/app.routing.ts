import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent }   from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
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
