import {
  Circuits,
  ConstructorResults,
  ConstructorStandings,
  Constructors,
  DriverStandings,
  Drivers,
  LapTimes,
  PitStops,
  Qualifying,
  Races,
  Results,
  SprintResults,
  Status
} from '@/models/tables';

console.log('Loading Associate Model.....');

// Constructors -> Qualifying
Constructors.hasMany(Qualifying, {
  foreignKey: 'constructor_id',
  as: 'ConstructorsHasQualifying'
})
Qualifying.belongsTo(Constructors, {
  foreignKey: 'constructor_id',
  as: 'QualifyingToConstructors'
})

// Races -> Qualifying
Races.hasMany(Qualifying, {
  foreignKey: 'race_id',
  as: 'RacesHasQualifying'
})
Qualifying.belongsTo(Races, {
  foreignKey: 'race_id',
  as: 'QualifyingToRaces'
})

