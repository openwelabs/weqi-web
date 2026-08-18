#!/usr/bin/env bash
#
# 部署到 GitHub Pages
#
# 原理：把构建产物 dist/ 推送到 gh-pages 分支。
# 无需额外依赖，纯 git 操作。
#
# 用法：
#   ./deploy.sh            # 构建并部署
#   ./deploy.sh --no-build # 跳过构建，直接部署现有 dist/
#
# 前置条件：
#   - 已配置 git 远程 origin（如 https://github.com/<user>/<repo>.git）
#   - 有推送权限（HTTPS 需已登录，或配置了 SSH key）
#
# 部署后：
#   在 GitHub 仓库 Settings → Pages 中，Source 选择 "Deploy from a branch"，
#   分支选 gh-pages，目录选 / (root)。

set -euo pipefail

# 脚本所在目录（项目根目录）
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

# 部署分支
BRANCH="gh-pages"

# 是否跳过构建
SKIP_BUILD=false
for arg in "$@"; do
  case "$arg" in
    --no-build) SKIP_BUILD=true ;;
    *) echo "未知参数: $arg" >&2; exit 1 ;;
  esac
done

# 1. 构建
if [ "$SKIP_BUILD" = false ]; then
  echo "==> 构建生产版本..."
  npm run build
else
  echo "==> 跳过构建（--no-build）"
fi

if [ ! -d "dist" ]; then
  echo "错误: dist/ 目录不存在，请先构建。" >&2
  exit 1
fi

# 2. 检查远程
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "错误: 未配置 git 远程 origin。" >&2
  echo "请先执行: git remote add origin <仓库地址>" >&2
  exit 1
fi

# 3. 用 git subtree 方式把 dist/ 推送到 gh-pages 分支
#    --prefix dist 只推送 dist/ 目录内容
echo "==> 推送 dist/ 到 $BRANCH 分支..."
git subtree push --prefix dist origin "$BRANCH"

echo ""
echo "✅ 部署完成！"
echo "   访问地址: https://$(git remote get-url origin | sed -E 's#.*github.com[:/]##; s#\.git$##' | tr ':' '/')"
echo ""
echo "   如果首次部署，请到 GitHub 仓库 Settings → Pages 中："
echo "   Source 选择 'Deploy from a branch'，分支选 $BRANCH，目录选 / (root)。"
