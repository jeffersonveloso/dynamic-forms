import { Injectable } from '@angular/core';
import { ControlDescriptor } from '../components/dynamic-form/control';
import { TextboxControl } from '../components/dynamic-form/textbox.control';
import { TextareaControl } from '../components/dynamic-form/textarea.control';
import { SelectControl } from '../components/dynamic-form/select.control';
import { FileControl} from '../components/dynamic-form/file.control';
@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  constructor() { }

  getControls(descriptors: ControlDescriptor[]) {
    let controls = descriptors.map((descriptor, index) => {
      let options = {
        ...descriptor,
        type: descriptor.type,
        key: descriptor.name,
        label: descriptor.title,
        value: '',
        required: descriptor.required,
        order: index
      };

      switch (descriptor.type) {
        case 'text':
        case 'number':
          return new TextboxControl(options);
        case 'textarea':
          return new TextareaControl(options);
        case 'select':
          return new SelectControl(options);
        case 'file':
          return new FileControl(options);
        default:
          console.error(`${descriptor.type} is not supported`);
      }
    });

    console.log(controls);
    return controls.filter(x => !!x).sort((a, b) => a.order - b.order);
  }
}
