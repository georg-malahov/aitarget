/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, ChangeDetectorRef } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DetailedTargetingComponent } from './detailed-targeting.component';
import { FbService } from '../fb/fb.service';

describe('Component: DetailedTargeting', () => {
  it('should create an instance', () => {
    inject([FbService, ChangeDetectorRef], (FbService: FbService, ref: ChangeDetectorRef) => {
      let component = new DetailedTargetingComponent(FbService, ref);
      expect(component)
        .toBeTruthy();
    });
  });

  it('should have search method', () => {
    inject([FbService, ChangeDetectorRef], (FbService: FbService, ref: ChangeDetectorRef) => {
      let component = new DetailedTargetingComponent(FbService, ref);
      expect(component.search)
        .toEqual(jasmine.any(Function));
    });
  });
});
