import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { BusinessCerntricSolutionsComponent } from './business-cerntric-solutions/business-cerntric-solutions.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CertificationMapComponent } from './certification-map/certification-map.component';
import { CloudServiceHeatMapComponent } from './cloud-service-heat-map/cloud-service-heat-map.component';
import { DesignAndAutomationComponent } from './design-and-automation/design-and-automation.component';
import { EventsLinkComponent } from './events-link/events-link.component';
import { LatestHighlightsComponent } from './latest-highlights/latest-highlights.component';
import { MigrationFactoryComponent } from './migration-factory/migration-factory.component';
import { SapComponent } from './sap/sap.component';
import { SustainabilityAnalysisComponent } from './sustainability-analysis/sustainability-analysis.component';
import { TeamsChannelComponent } from './teams-channel/teams-channel.component';
import { TrendsComponent } from './trends/trends.component';
import { UpcommingEnhancementComponent } from './upcomming-enhancement/upcomming-enhancement.component';
import { ProductComponent } from './product/product.component';
import { DoanddontsComponent } from './doanddonts/doanddonts.component';
import { AcceleratorsipsComponent } from './acceleratorsips/acceleratorsips.component';
import { ActiveinactivesubscriptionsComponent } from './activeinactivesubscriptions/activeinactivesubscriptions.component';
const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'assessment',          component: AssessmentComponent },
    { path: 'business-centric-solutions',          component: BusinessCerntricSolutionsComponent },
    { path: 'case-study',          component: CaseStudyComponent },
    { path: 'certification-map',          component: CertificationMapComponent },
    { path: 'cloud-service-heat-map',          component: CloudServiceHeatMapComponent },
    { path: 'design-and-automation',          component: DesignAndAutomationComponent },
    { path: 'events-link',          component: EventsLinkComponent},
    { path: 'latest-highlights',          component: LatestHighlightsComponent },
    { path: 'migration-factory',          component: MigrationFactoryComponent },
    { path: 'sap',          component: SapComponent },
    { path: 'sustainability-analysis',          component: SustainabilityAnalysisComponent },
    { path: 'teams-channel',          component: TeamsChannelComponent },
    { path: 'trends',             component: TrendsComponent },
    { path: 'upcomming-enhancements',             component: UpcommingEnhancementComponent },
    { path: 'product',             component: ProductComponent},
    { path: 'DoanddontsComponent',             component: DoanddontsComponent},
    { path: 'AcceleratorsipsComponent',             component: AcceleratorsipsComponent},
    { path: 'ActiveinactivesubscriptionsComponent',             component: ActiveinactivesubscriptionsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
