mobiscroll.setOptions({
    locale: mobiscroll.localeEs,
    theme: 'ios',
    themeVariant: 'light'
  });
  
  var allLabels = mobiscroll.eventcalendar('#demo-labels-all', {
    view: {
      calendar: { type: 'month', labels: 'all' },
    },
  });
  
  var nrLabels = mobiscroll.eventcalendar('#demo-labels-nr', {
    view: {
      calendar: { type: 'month', labels: 3 },
    },
  });
  
  var fitLabels = mobiscroll.eventcalendar('#demo-labels-fit', {
    view: {
      calendar: { type: 'month', labels: true },
    },
  });
  
  var allLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-all-w', {
    view: {
      calendar: { type: 'week', labels: 'all' },
    },
  });
  
  var nrLabelsWeeks = mobiscroll.eventcalendar('#demo-labels-nr-w', {
    view: {
      calendar: { type: 'week', labels: 3 },
    },
  });
  
  var labelsWeeks = mobiscroll.eventcalendar('#demo-labels-fit-w', {
    view: {
      calendar: { type: 'week', labels: true },
    },
  });
  
  mobiscroll.getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    function (events) {
      //fitLabels.setEvents(events);
      allLabels.setEvents(events);
      //nrLabels.setEvents(events);
      //labelsWeeks.setEvents(events);
      //allLabelsWeeks.setEvents(events);
      //nrLabelsWeeks.setEvents(events);
    },
    'jsonp',
  );
    