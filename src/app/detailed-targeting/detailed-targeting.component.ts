import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FbService } from '../fb/fb.service';

@Component({
  moduleId: module.id,
  selector: 'app-detailed-targeting',
  templateUrl: 'detailed-targeting.component.html',
  styleUrls: ['detailed-targeting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FbService]
})
export class DetailedTargetingComponent implements OnInit {

  @Input() adaccountId: string;

  private defaultAdaccountId = 'act_944874195534529';

  q = 'sport';
  res = 'loading results...';

  constructor (private FbService: FbService,
               private ref: ChangeDetectorRef) {}

  search (q) {
    this.FbService.get((FB) => {
      FB.api(`/${this.adaccountId || this.defaultAdaccountId}/targetingsearch`, {q: q}, (response) => {
        this.res = response;
        this.ref.markForCheck();
        this.ref.detectChanges();
      });
    });
  }

  ngOnInit () {
    this.search(this.q);
  }

}
