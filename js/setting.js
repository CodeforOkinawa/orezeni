/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'yokohama_budget';
OpenSpending.year = '2012';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* okinawa */
  '01':{ icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },
  '0100':{ icon: 'icons/courts.svg', color: '#C75746', bcolor: '#935B3B' },
  '02': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '0201': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '0202': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '0203': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '0204': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '0205': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#935B3B' },
  '0206': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '03': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0301': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0302': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0303': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0304': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0305': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#4E6D00' },
  '04': { icon: 'icons/other-medical.svg', color: '#C75746', bcolor: '#D33673' },
  '0401': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0402': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0403': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#D33673' },
  '0404': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  '05': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '0501': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#2A3A03' },
  '0502': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#2A3A03' },
  '06': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '0601': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '0602': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#EC2406' },
  '0603': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#EC2406' },
  '0604': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#EC2406' },
  '0605': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#EC2406' },
  '07': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#EC2406' },
  '0700': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#EC2406' },
  '08': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '0801': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '0802': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '0803': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#C75746' },
  '0804': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#C75746' },
  '0805': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#C75746' },
  '0806': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '0807': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#C75746' },
  '09': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '0900': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '10': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1001': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1002': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },
  '1003': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#790586' },
  '1004': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1005': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1006': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '1007': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1008': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1009': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '11': { icon: 'icons/aid-developing-countries.svg', color: '#c75746', bcolor: '#790586'},
  '1101': { icon: 'icons/farms.svg', color: '#c75746', bcolor: '#790586'},
  '1102': { icon: 'icons/construction.svg', color: '#c75746', bcolor: '#790586'},
  '1103': { icon: 'icons/unknown.svg', color: '#c75746', bcolor: '#790586'},
  '12': { icon: 'icons/public-debt.svg', color: '#c75746', bcolor: '#790586'},
  '1200': { icon: 'icons/public-debt.svg', color: '#c75746', bcolor: '#790586'},
  '13': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'},
  '1301': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'},
  '1302': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'},
  '1303': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'},
  '14': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'},
  '1400': { icon: 'icons/money.svg', color: '#c75746', bcolor: '#790586'}

};


