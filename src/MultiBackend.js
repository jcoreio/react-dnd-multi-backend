'use strict';

module.exports = function multiBackendCreator(createBackends) {
  createBackends = Array.prototype.slice.call(arguments);

  return function(manager) {
    var backends = createBackends.map(function(createBackend) {
      return createBackend(manager);
    });

    return {
      setup: function() {
        backends.forEach(function(backend) {
          backend.setup();
        });
      },
      teardown: function() {
        backends.forEach(function(backend) {
          backend.teardown();
        });
      },
      connectDragSource: function(sourceId, node, options) {
        var disconnects = backends.map(function(backend) {
          return backend.connectDragSource(sourceId, node, options);
        });

        return function() {
          disconnects.forEach(function(disconnect) {
            disconnect();
          });
        };
      },
      connectDragPreview: function(sourceId, node, options) {
        var disconnects = backends.map(function(backend) {
          return backend.connectDragPreview(sourceId, node, options);
        });

        return function() {
          disconnects.forEach(function(disconnect) {
            disconnect();
          });
        };
      },
      connectDropTarget: function(targetId, node) {
        var disconnects = backends.map(function(backend) {
          return backend.connectDropTarget(targetId, node);
        });

        return function() {
          disconnects.forEach(function(disconnect) {
            disconnect();
          });
        };
      },
    };
  };
};
