import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({
  name: 'categorySort',
  pure: false
})
export class CategorySortPipe implements PipeTransform {

  transform(input: Item[], categoryFilter){
    var output: Item[] = [];
    if(categoryFilter === "projects"){
      console.log(input);
      for (var i =0; i < input.length; i++){

        if(input[i].category === "Projects"){
          output.push(input[i])
        }
      }
      return output;
    }else if(categoryFilter === "charity"){
      for(var i = 0; i < input.length; i++){
        if(input[i].category === "Charity"){
          output.push(input[i])
        }
      }return output;
    }else if(categoryFilter === "ideas"){
      for(var i =0; i < input.length; i++){
        if(input[i].category === "Ideas"){
          output.push(input[i])
        }
      }return output;
    }else {
      return input;
    }
  }

}
