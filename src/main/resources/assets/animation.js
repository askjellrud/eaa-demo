var battle = battle || {};

function Animation() {
  var fps = 30;

  this.moveProduct = function(product, moveTo, milliseconds, callback) {
    var steps = milliseconds * fps / 1000;
    var original = JSON.parse(JSON.stringify(product.transform));
    var i = 0;
    var task = function() {
        product.transform.position.x -= (original.position.x - moveTo.position.x) / steps;
        product.transform.position.y -= (original.position.y - moveTo.position.y) / steps;
        product.transform.position.z -= (original.position.z - moveTo.position.z) / steps;
        battle.context.$viewer.viewer('transformmodel', product.modelId, product.transform);
        if (++i < steps) {
            setTimeout(task, milliseconds / steps);
        } else {
          callback();
        }
    };
    task(); 
  }

  this.rotateProduct = function(product, degrees, milliseconds, callback) {
    var steps = milliseconds * fps / 1000;
    var i = 0;
    var task = function() {
      product.transform.rotation.angle -= (degrees * Math.PI / 180) / steps;
      battle.context.$viewer.viewer('transformmodel', product.modelId, product.transform);
      if (++i < steps) {
          setTimeout(task, milliseconds / steps);
      } else {
        callback();
      }
    };
    task(); 
  }

  this.moveCamera = function(moveTo, milliseconds, callback) {
    battle.context.$viewer.viewer('viewpoint', null, function(viewpoint) {
      var steps = milliseconds * fps / 1000;
      var current = JSON.parse(JSON.stringify(viewpoint));
      var i = 0;
      var task = function() {
        current.location.x -= (viewpoint.location.x - moveTo.location.x) / steps;
        current.location.y -= (viewpoint.location.y - moveTo.location.y) / steps;
        current.location.z -= (viewpoint.location.z - moveTo.location.z) / steps;
        battle.context.$viewer.viewer('viewpoint', current);
        if (++i < steps) {
          setTimeout(task, milliseconds / steps);
        } else {
          callback();
        }
      };
      task();
    });
  }

  this.rotateCamera = function(degrees, milliseconds, callback) {
    battle.context.$viewer.viewer('viewpoint', null, function(viewpoint) {
      var steps = milliseconds * fps / 1000;
      var direction = new THREE.Vector3(viewpoint.direction.x, viewpoint.direction.y, viewpoint.direction.z);

      var i = 0;
      var task = function() {
        var radians = (degrees * Math.PI / 180) / steps;
        var rotateHorizontal = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), radians);
        direction.applyMatrix4(rotateHorizontal);
        viewpoint.direction = direction;
        battle.context.$viewer.viewer('viewpoint', viewpoint);
        if (++i < steps) {
          setTimeout(task, milliseconds / steps);
        } else {
          callback();
        }
      };
      task(); 
    });
  }

  this.tiltCamera = function(degrees, milliseconds, callback) {
    battle.context.$viewer.viewer('viewpoint', null, function(viewpoint) {
      var steps = milliseconds * fps / 1000;
      var direction = new THREE.Vector3(viewpoint.direction.x, viewpoint.direction.y, viewpoint.direction.z);

      var i = 0;
      var task = function() {
        var radians = (degrees * Math.PI / 180);
        var left = getLeft(viewpoint, 1.0);
        var rotateVertical = new THREE.Matrix4().makeRotationAxis(left, radians / steps);
        direction.applyMatrix4(rotateVertical);
        viewpoint.direction = direction;
        battle.context.$viewer.viewer('viewpoint', viewpoint);
        if (++i < steps) {
          setTimeout(task, milliseconds / steps);
        } else {
          callback();
        }
      };
      task();
    });
  }

  var getLeft = (function() {
    var left = new THREE.Vector3();
    return (function(camera, distance) {
      left.copy(camera.direction);
      left.z = 0;
      left.normalize();
      left.crossVectors(camera.up, left).normalize().multiplyScalar(distance);
      return left;
    });
  })();
};
