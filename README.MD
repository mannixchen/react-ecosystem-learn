# 本地 git 仓同步到 github 新库
要将现有的本地Git项目同步到GitHub作为一个新仓库，可以按照以下步骤操作：

1. **在GitHub上创建新仓库**：
    - 登录GitHub，点击右上角的 "+" 图标，选择“New repository”。
    - 填写仓库名称、描述，并选择公开或私有仓库，然后点击“Create repository”, 不需要任何初始化, 给个名字就行。

2. **在本地项目中初始化Git（如果尚未初始化）**：
    - 打开终端（或命令提示符），切换到项目目录。
    - 输入 `git init` 初始化Git仓库。

3. **添加GitHub仓库为远程仓库**：
    - 在终端中，输入 `git remote add origin your-repository-url`，将GitHub仓库URL替换成你刚创建的仓库的URL。
    - 我这里 url 是:`git@github.com:mannixchen/react-ecosystem-learn.git` 本地已经配好 ssh
4. **添加、提交并推送本地更改**：
    - 输入 `git add .` 添加所有更改。
    - 输入 `git commit -m "Initial commit"` 提交更改。
    - 输入 `git push -u origin main`（或 `master`，取决于你的默认分支名）将更改推送到GitHub仓库。我这边是 main

完成这些步骤后，你的本地项目就会作为一个新仓库出现在GitHub上。
