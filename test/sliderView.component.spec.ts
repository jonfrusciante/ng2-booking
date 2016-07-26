import {
  inject,
  async,
  TestComponentBuilder,
  ComponentFixture
} from '@angular/core/testing';
import * as moment from 'moment';
import {expect} from 'chai';
import {SliderView} from '../src/sliderView.component';

describe('SliderView component', () => {

  let builder: TestComponentBuilder;
  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  it('should generate the slider view', async(() => {
    // builder.createAsync(SliderView).then((fixture: ComponentFixture<SliderView>) => {
    //   fixture.componentInstance.date = moment('2016-06-27').toDate();
    //   fixture.componentInstance.ngOnChanges({date: {}});
    //   expect(fixture.componentInstance.view.rowOffsets).to.deep.equal([0, 7, 14, 21, 28]);
    //   expect(fixture.componentInstance.view.days.length).to.equal(35);
    //   expect(fixture.componentInstance.view.days[0].date.toDate()).to.deep.equal(moment('2016-05-29').toDate());
    //   fixture.destroy();
    // });
  }));

  it('it should enable the select button', async(() => {
    // builder.createAsync(SliderView).then((fixture: ComponentFixture<SliderView>) => {
    //   expect(fixture.componentInstance.openRowIndex).to.be.undefined;
    //   expect(fixture.componentInstance.openDay).to.be.undefined;
    //   fixture.componentInstance.date = moment().startOf('month').startOf('week').add(8, 'days').toDate();
    //   fixture.componentInstance.slideBoxIsOpen = true;
    //   fixture.componentInstance.ngOnChanges({date: {}, slideBoxIsOpen: {}});
    //   expect(fixture.componentInstance.openRowIndex).to.equal(7);
    //   expect(fixture.componentInstance.openDay).to.equal(fixture.componentInstance.view.days[8]);
    //   fixture.componentInstance.slideBoxIsOpen = false;
    //   fixture.componentInstance.ngOnChanges({date: {}, slideBoxIsOpen: {}});
    //   expect(fixture.componentInstance.openRowIndex).not.to.be.ok;
    //   expect(fixture.componentInstance.openDay).not.to.be.ok;
    //   fixture.destroy();
    // });
  }));
});
