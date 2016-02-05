import { foo } from './modules/module';
import { bar } from './modules/module2';
import $ from '../vendor/jquery/dist/jquery';

console.log('Hello js base app es6 version', foo, bar);
$('#foo').html(foo);
$('#bar').html(bar);

