import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
import { ProductComponent } from './product/product.component';
import { DoanddontsComponent } from './doanddonts/doanddonts.component';
import { ActiveinactivesubscriptionsComponent } from './activeinactivesubscriptions/activeinactivesubscriptions.component';
import { AcceleratorsipsComponent } from './acceleratorsips/acceleratorsips.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ChartsModule } from 'ng2-charts';
import { FaqsComponent } from './faqs/faqs.component';
// import { NgbdAccordionPreventchange } from './accordion-preventchange';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    // NgbdAccordionPreventchange,
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
    TeamsChannelComponent,
    ProductComponent,
    DoanddontsComponent,
    ActiveinactivesubscriptionsComponent,
    AcceleratorsipsComponent,
    ContactusComponent,
    FaqsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    NgxDocViewerModule,
    ChartsModule

    
  ],
  exports: [
    // NgbdAccordionPreventchange
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
