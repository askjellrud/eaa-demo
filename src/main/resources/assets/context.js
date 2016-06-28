var battle = battle || {};

function Context() {
  this.$viewer = $('#viewer');
  this.$bimsync = $('#bimsync');
  this.projectId = this.$bimsync.data('project-id');
  this.accessToken = this.$bimsync.data('access-token');

  this.map = {
      east: 260510.732,
      north: 6652950.935,
      altitude: 99.05,
      crs: '32633',
      coverage: 'land_utm33_10m',
      wmsUrl: false,
      wmtsLayer: 'topo2',
      wmsLayers: 'topo2',
      wmtsUrl: 'http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts',
      wmscUrl:  'http://opencache.statkart.no/gatekeeper/gk/gk.open_cache',
      wcsUrl: 'http://wms.geonorge.no/skwms1/wcs.dtm'
  };
  this.spaces = ['4908573492',
                 '4908573493', 
                 '4908573494', 
                 '4908573495', 
                 '4908573496', 
                 '4908573497', 
                 '4908573498', 
                 '4908573124', 
                 '4908573125', 
                 '4908573126', 
                 '4908573127', 
                 '4908573128', 
                 '4908573129', 
                 '4908573130', 
                 '4908573131'];
};
