import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from 'protractor';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: []
    })
  })


  it('should create', () => {
    expect(AppComponent).toBeTruthy();
  });

  // it('should render the navbar in the AppComponent', () => {
  //   expect(fixture.componentInstance(By.css('navbar')))
  // });

  
  // it('true to be true', () => {
  //   expect(true).toBe(true)
  // })

})