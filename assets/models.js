var battle = battle || {};

function Models() {
  this.coffeeMachine = { modelId: "938ac4c92de04958a9c8895d39bffe09", objectId: "4470723123" };
  this.microwave = { modelId: "3fb6a0e0f7c54f1e8d713b6374fe700b", objectId: "4470803123" };
  this.vacuumCleaner = { modelId: "1de5820af456459d95eb26bf9ee4d29f", objectId: "4470743123" };
  this.bimsyncLogo = { modelId: "11dec8ffbc2c445ca7f282f25e1375fd", objectId: "4484933123" }
  this.powerwall = { modelId: "2af635952f3e494681c60403154abdb6", objectId: "4904413123" }
  this.teslaS = { modelId: "c16bc5de11ad4d328b70bb5abb7fda2c", objectId: "4904273123" }

  this.initialize = function() {
    for (model of this.getModels()) {
      this.transformModel(model);
    };
  }

  this.getModels = function(callback) {
    var models;
    $.ajax({
      url : "https://api.bimsync.com/1.0/models?project_id=" + battle.context.projectId,
      beforeSend: function (xhr) {
           xhr.setRequestHeader ("Authorization", "Bearer " + battle.context.accessToken);
      },
      async: false,
      success : function(data) {
          models = data;
      }
    });
    return models;
  }

  this.transformModel = function(model) {
    var transform = { position : model.translation, rotation : model.rotation };
    battle.context.$viewer.viewer('transformmodel', model.id, transform);
    this.applyTransform(model.id, transform);
  }

  this.applyTransform = function(modelId, transform) {
    if (modelId == this.coffeeMachine.modelId) {
        this.coffeeMachine.transform = transform;
    } else if (modelId == this.microwave.modelId) {
        this.microwave.transform = transform;
    } else if (modelId == this.vacuumCleaner.modelId) {
      this.vacuumCleaner.transform = transform;
    } else if (modelId == this.teslaS.modelId) {
      this.teslaS.transform = transform;
      console.log(JSON.stringify(transform));
    } else if (modelId == this.powerwall.modelId) {
      this.powerwall.transform = transform;
    } else if (modelId == this.bimsyncLogo.modelId) {
      this.bimsyncLogo.transform = transform;
    }
  }

};
