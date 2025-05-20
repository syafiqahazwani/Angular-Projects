import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorDirective } from './color.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p appColor>Hover me</p>`
})
class TestComponent {}

describe('ColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ColorDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(ColorDirective));
    expect(directiveEl).toBeTruthy();
  });

  it('should change color on mouse enter and leave', () => {
    const p = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = p.nativeElement;

    // Trigger mouseenter
    p.triggerEventHandler('mouseenter');
    fixture.detectChanges();
    expect(el.style.color).toBe('blue');

    // Trigger mouseleave
    p.triggerEventHandler('mouseleave');
    fixture.detectChanges();
    expect(el.style.color).toBe('black');
  });
});
