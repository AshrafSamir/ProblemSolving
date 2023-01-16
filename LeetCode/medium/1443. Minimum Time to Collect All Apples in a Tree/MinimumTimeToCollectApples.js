/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */

// solution 1 accepted
var minTime = function (n, edges, hasApple) {
  let graph = [];
  let time = 0;

  for (let i = 0; i < n; i++) {
    graph[i] = new Array();
  }
  for (let node of edges) {
    graph[node[0]].push(node[1]);
    graph[node[1]].push(node[0]);
  }

  function dfs(start, parent, hasApple) {
    let flag = false;
    for (let node of graph[start]) {
      if (node == parent) continue;

      if (dfs(node, start, hasApple)) {
        flag = true;
        time += 2;
      }
    }
    if (hasApple[start] || flag) return true;
    return flag;
  }

  dfs(0, -1, hasApple);
  return time;
};

// solution 2 produces time limit exceeded error
var minTime1 = function (n, edges, hasApple) {
  let time = 0;
  let visited = [];

  function dfs(start, edges, visited, hasApple) {
    let flag = false;
    visited[start] = true;

    for (let i = 0; i < edges.length; i++) {
      if (edges[i][0] == start && !visited[edges[i][1]]) {
        if (dfs(edges[i][1], edges, visited, hasApple)) {
          time += 2;
          flag = true;
        }
      } else if (edges[i][1] == start && !visited[edges[i][0]]) {
        if (dfs(edges[i][0], edges, visited, hasApple)) {
          time += 2;
          flag = true;
        }
      }
    }
    if (hasApple[start] || flag) flag = true;
    return flag;
  }

  dfs(0, edges, visited, hasApple);
  return time;
};

console.log(
  minTime(
    4,
    [
      [0, 2],
      [0, 3],
      [1, 2],
    ],
    [false, true, false, false]
  )
); // 4
