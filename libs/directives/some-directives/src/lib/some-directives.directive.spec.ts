import '@ng-web-apis/universal/mocks';
import { Component, DebugElement, DebugNode } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SomeDirectivesDirective } from './some-directives.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div *tssSomeDirectives="null">Default</div>
  `,
})
class TestComponent {}

describe('SomeDirectivesDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: DebugNode[];
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [SomeDirectivesDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAllNodes(
      By.directive(SomeDirectivesDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([tssSomeDirectives])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
