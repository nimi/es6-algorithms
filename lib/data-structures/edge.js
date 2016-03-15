"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Graph edge.
 *
 * @constructor
 * @public
 * @param {Vertex} e Vertex which this edge connects.
 * @param {Vertex} v Vertex which this edge connects.
 * @param {Number} distance Weight of the edge.
 * @module data-structures/edge
 */

var Edge = function Edge(e, v, distance) {
  _classCallCheck(this, Edge);

  this.from = e;
  this.to = v;
  this.distance = distance;
};

exports.Edge = Edge;