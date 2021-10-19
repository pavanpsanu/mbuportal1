import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DesignAndAutomationComponent } from './design-and-automation/design-and-automation.component';
import { MigrationFactoryComponent } from './migration-factory/migration-factory.component';
import { BusinessCerntricSolutionsComponent } from './business-cerntric-solutions/business-cerntric-solutions.component';
import { SustainabilityAnalysisComponent } from './sustainability-analysis/sustainability-analysis.component';
import { SapComponent } from './sap/sap.component';
import { EventsLinkComponent } from './events-link/events-link.component';
import { UpcommingEnhancementComponent } from './upcomming-enhancement/upcomming-enhancement.component';
import { CloudServiceHeatMapComponent } from './cloud-service-heat-map/cloud-service-heat-map.component';
import { LatestHighlightsComponent } from './latest-highlights/latest-highlights.component';
import { TrendsComponent } from './trends/trends.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CertificationMapComponent } from './certification-map/certification-map.component';
import { TeamsChannelComponent } from './teams-channel/teams-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AssessmentComponent,
    DesignAndAutomationComponent,
    MigrationFactoryComponent,
    BusinessCerntricSolutionsComponent,
    SustainabilityAnalysisComponent,
    SapComponent,
    EventsLinkComponent,
    UpcommingEnhancementComponent,
    CloudServiceHeatMapComponent,
    LatestHighlightsComponent,
    TrendsComponent,
    CaseStudyComponent,
    CertificationMapComponent,
    TeamsChannelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
