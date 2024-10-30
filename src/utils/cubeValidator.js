
export function validateCube(cells) {
  // 计算已填充的格子数
  const filledCount = cells.filter(cell => cell === 'filled').length;
  
  if (filledCount !== 6) {
    return {
      isValid: false,
      message: `需要恰好6个面才能组成立方体，当前选择了${filledCount}个面`
    };
  }

  // 将一维数组转换为二维网格
  const grid = [];
  for (let i = 0; i < 4; i++) {
    grid.push(cells.slice(i * 3, (i + 1) * 3));
  }

  // 检查连通性
  const visited = new Set();
  let startRow = -1;
  let startCol = -1;

  // 找到第一个填充的格子作为起点
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === 'filled') {
        startRow = i;
        startCol = j;
        break;
      }
    }
    if (startRow !== -1) break;
  }

  // DFS遍历检查连通性
  function dfs(row, col) {
    if (row < 0 || row >= 4 || col < 0 || col >= 3 || 
        grid[row][col] === 'empty' || 
        visited.has(`${row},${col}`)) {
      return;
    }

    visited.add(`${row},${col}`);

    // 检查四个方向
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  dfs(startRow, startCol);

  if (visited.size !== filledCount) {
    return {
      isValid: false,
      message: "所有填充的格子必须相连"
    };
  }

  // 检查是否形成有效的展开图
  const pattern = cells.map(cell => cell === 'filled' ? '1' : '0').join('');
  
  // 所有有效的展开图模式
  const validPatterns = [
'111010010010',
'111010010100',
'111010100100',
'111010001010',
'111001001010',
'110100100101',
'110100101001',
'110101001001',
'110100010101',
'101001001011',
'100100100111',
  ];

  if (!validPatterns.includes(pattern)) {
    return {
      isValid: false,
      message: "当前选择的格子无法组成有效的立方体展开图"
    };
  }

  return {
    isValid: true,
    message: "可以组成有效的立方体！"
  };
}
