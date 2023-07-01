import { ErrorService } from './errorService';
import { UtilService } from "@/services/utilService";
// Crud
import { ICrudExecOption, CrudService } from './crudService';
import { ScheduleService } from './scheduleService';
import { CircuitService } from './crud/circuitService';
import { ConstructorResultService } from './crud/constructorResultService';
import { ConstructorService } from './crud/constructorService';
import { ConstructorStandingService } from './crud/constructorStandingService';
import { DriverService } from './crud/driverService';
import { DriverStandingService } from './crud/driverStandingService';
import { LapTimeService } from './crud/lapTimeService';
import { PitStopService } from './crud/pitStopService';
import { QualifyingService } from './crud/qualifyingService';
import { RaceService } from './crud/raceService';
import { ResultService } from './crud/resultService';
import { SprintResultService } from './crud/sprintResultService';

// SECTION

const errorService = new ErrorService();
const utilService = new UtilService();
const scheduleService = new ScheduleService();
// Crud
const circuitService = new CircuitService()
const constructorResultService = new ConstructorResultService()
const constructorService = new ConstructorService()
const constructorStandingService = new ConstructorStandingService()
const driverService = new DriverService()
const driverStandingService = new DriverStandingService()
const lapTimeService = new LapTimeService()
const pitStopService = new PitStopService()
const qualifyingService = new QualifyingService()
const raceService = new RaceService()
const resultService = new ResultService()
const sprintResultService = new SprintResultService()

// SECTION

export {
  CrudService,
  ICrudExecOption,
  utilService,
  errorService,
  scheduleService,
  circuitService,
  constructorResultService,
  constructorService,
  constructorStandingService,
  driverService,
  driverStandingService,
  lapTimeService,
  pitStopService,
  qualifyingService,
  raceService,
  resultService,
  sprintResultService
};
