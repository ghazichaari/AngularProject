
/*
 @license Angular Treeview version 0.1.6
 ⓒ 2013 AHN JAE-HA http://github.com/eu81273/angular.treeview
 License: MIT
 */

(function (f) {
    f.module("angularTreeview", []).directive("treeModel", function ($compile) {
        return{restrict: "A", link: function (b, h, c) {
                var a = c.treeId, g = c.treeModel, e = c.nodeLabel || "label", d = c.nodeChildren || "children", e = '<ul  class="nav nav-list nav-side" data-ng-click="' + a + '.selectNodeHead(node)"><li  class="accordion-group" data-ng-repeat="node in ' + g + '" data-ng-click="' + a + '.selectNodeHead(node)"><div  class="context-menu-4 box menu-1 accordion-toggle" ><i class="item-icon fontello-icon-monitor"  data-ng-show="node.' + d + '.length && node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="item-icon fontello-icon-monitor" class="expanded" data-ng-show="node.' + d + '.length && !node.collapsed" data-ng-click="' + a + '.selectNodeHead(node)"></i><i class="" data-ng-hide="node.' +
                        d + '.length"></i> <span style="font-size: 73%"  data-ng-class="node.selected" data-ng-click="' + a + '.selectNodeLabel(node)"  class="context-menu-one box menu-1">{{node.' + e + '}}</span><div data-ng-hide="node.collapsed" data-tree-id="' + a + '" data-tree-model="node.' + d + '" data-node-id=' + (c.nodeId || "id") + " data-node-label=" + e + " data-node-children=" + d + "></li></ul>";
                a && g && (c.angularTreeview && (b[a] = b[a] || {}, b[a].selectNodeHead = b[a].selectNodeHead || function (a) {
                    a.collapsed = !a.collapsed
                }, b[a].selectNodeLabel = b[a].selectNodeLabel || function (c) {
                    b[a].currentNode && b[a].currentNode.selected &&
                            (b[a].currentNode.selected = void 0);
                    c.selected = "selected";
                    b[a].currentNode = c
                }), h.html('').append($compile(e)(b)))
            }}
    })
})(angular);