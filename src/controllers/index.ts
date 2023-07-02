import { CrudController } from './crudController';
import { CircuitController } from './crud/circuitController';
import { ConstructorController } from './crud/constructorController';
import { ConstructorResultController } from './crud/constructorResultController';
import { ConstructorStandingController } from './crud/constructorStandingController';
import { DriverController } from './crud/driverController';
import { DriverStandingController } from './crud/driverStandingController';
import { LapTimeController } from './crud/lapTimeController';
import { PitStopController } from './crud/pitStopController';
import { QualifyingController } from './crud/qualifyingController';
import { RaceController } from './crud/raceController';
import { ResultController } from './crud/resultController';
import { SprintResultController } from './crud/sprintResultController';


// SECTION

// Crud
const circuitController = new CircuitController()
const constructorController = new ConstructorController()
const constructorResultController = new ConstructorResultController()
const constructorStandingController = new ConstructorStandingController()
const driverController = new DriverController()
const driverStandingController = new DriverStandingController()
const lapTimeController = new LapTimeController()
const pitStopController = new PitStopController()
const qualifyingController = new QualifyingController()
const raceController = new RaceController()
const resultController = new ResultController()
const sprintResultController = new SprintResultController()

// SECTION

export {
  CrudController,
  circuitController,
  constructorController,
  constructorResultController,
  constructorStandingController,
  driverController,
  driverStandingController,
  lapTimeController,
  pitStopController,
  qualifyingController,
  raceController,
  resultController,
  sprintResultController
};
