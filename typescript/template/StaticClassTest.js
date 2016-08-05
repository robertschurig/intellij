import {${NAME}} from '${PATH}/${NAME}';
import RewiredModule = RewireInterfaces.RewiredModule;

interface ${NAME}Spy extends ${NAME} {
  myStaticFunction(): void;
}

interface ${NAME}ModuleSpy extends RewiredModule {
  ${NAME}: ${NAME}Spy;
}

describe('${NAME}', () => {
  let rewire = require('rewire'),
  revert: Function,
  EventEmitter: EventEmitterSpy;

let instance: ${NAME}Spy;

beforeEach(() => {
  let infect: InfectSpy;
let module: ${NAME}ModuleSpy;

EventEmitter = jasmine.createSpyObj('EventEmitter', ['once', 'on', 'emit']);
infect = <InfectSpy>jasmine.createSpyObj('infect', ['get', 'func']);
infect.get.and.returnValue(EventEmitter);

module = <${NAME}ModuleSpy>rewire('${PATH}/${NAME}');
revert = module.__set__({
  infect: infect
});
instance = module.${NAME};
});

afterEach(() => {
  revert();
});

it('should xxx', () => {
  instance.myStaticFunction();
});
});