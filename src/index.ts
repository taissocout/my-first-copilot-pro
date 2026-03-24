import { runAsk } from './modes/ask.js';
import { runEdit } from './modes/edit.js';
import { runPlan } from './modes/plan.js';
import { runAgent } from './modes/agent.js';
import { runStudy } from './modes/study.js';

const mode = process.argv[2];

switch(mode) {
  case 'ask': runAsk(); break;
  case 'edit': runEdit(); break;
  case 'plan': runPlan(); break;
  case 'agent': runAgent(); break;
  case 'study': runStudy(); break;
  default:
    console.log('Modo inválido. Use: ask | edit | plan | agent | study');
}