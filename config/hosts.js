var one_tick = 20; //seconds

//service name must be unique for a certain host.
//host name must be unique
module.exports =
  [
    
 {
      name:'SEP EFORMS ACC ADMIN',
      host: 'weform1a.cc.cec.eu.int',
      port:1061,
      ping_service_name: 'http',
      timeout:10000,
      ping_interval: one_tick,
      failed_ping_interval: one_tick / 3,
      enabled: true,
      services : [   
      {
          name: '',
        }    
      ]
    } ,




{
      name:'SEP EFORMS ACC MS1',
      host: 'weform1a.cc.cec.eu.int',
      port:1063,
      ping_service_name: 'http',
      timeout:10000,
      ping_interval: one_tick, //seconds
      failed_ping_interval: one_tick / 3, //seconds
      enabled: true,
      alert_to: ['your-email@domain.com'],
      warning_if_takes_more_than: 1500, //miliseconds
      services : [
        {
          name: 'lbProbe',
          method: 'get',
          url : '/lbProbe',
          expected: {statuscode: 302, contains: ''}
        },
        {
          name: 'EForms page',
          method: 'get',
          url : '/eforms/index.html',
          expected: {statuscode: 200,contains: ''}         
        }
      ]
    } 
	

  ];