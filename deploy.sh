#!/usr/bin/env bash
#
# 部署到 GitHub Pages
#
# 原理：把构建产物 dist/ 推送到 gh-pages 分支。
# 使用 git worktree 方式，无需额外依赖。
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
# 临时 worktree 目录
WORKTREE="$(mktemp -d)"

# 是否跳过构建
SKIP_BUILD=false
for arg in "$@"; do
  case "$arg" in
    --no-build) SKIP_BUILD=true ;;
    *) echo "未知参数: $arg" >&2; exit 1 ;;
  esac
done

# 清理函数：确保退出时移除临时 worktree
cleanup() {
  git worktree remove --force "$WORKTREE" >/dev/null 2>&1 || true
  rm -rf "$WORKTREE"
}
trap cleanup EXIT

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

# 3. 准备 gh-pages 分支的 worktree
#    若分支不存在则基于当前 HEAD 创建（孤儿分支，不含历史）
if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  echo "==> 检出已有 $BRANCH 分支..."
  git worktree add "$WORKTREE" "$BRANCH"
else
  echo "==> 创建 $BRANCH 分支（孤儿分支）..."
  git worktree add --detach "$WORKTREE"
  git -C "$WORKTREE" checkout --orphan "$BRANCH"
fi

# 4. 清空 worktree 内容（保留 .git），复制 dist/ 进去
echo "==> 复制 dist/ 到 $BRANCH 分支..."
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a dist/. "$WORKTREE/"

# 5. 提交并推送
cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "==> 无内容变更，跳过提交。"
else
  git commit -m "deploy: 更新 GitHub Pages 站点"
fi
echo "==> 推送 $BRANCH 分支..."
git push origin "$BRANCH"

cd "$ROOT"
echo ""
echo "✅ 部署完成！"
echo "   访问地址: https://$(git remote get-url origin | sed -E 's#.*github.com[:/]##; s#\.git$##' | tr ':' '/')"
echo ""
echo "   如果首次部署，请到 GitHub 仓库 Settings → Pages 中："
echo "   Source 选择 'Deploy from a branch'，分支选 $BRANCH，目录选 / (root)。"
