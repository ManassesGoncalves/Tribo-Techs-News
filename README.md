# Tribo-Techs-News

#### Install dependencies
> - [node](https://nodejs.org/dist/v22.12.0/node-v22.12.0-x64.msi)
> - [nvm for windows](https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe)
> - npm install -g volta
> - npm install

#### Check installation version
> - node -v
__If the node version is higher than v18.xx.x, install the following package__
> - nvm i hydrogen
> - nvm use 18 --default

The file __.nvmrc__ is created in the root directory of the project to specify the node version to be used.

#### HELP
> __If npm doesn't work, use the following guide__
> Open the PowerShell with Administrator and use the following command:
> - Get-ExecutionPolicy -List
> - Set-ExecutionPolicy RemoteSigned
> _Press Y (or S ) to confirm the change._
> - Set-ExecutionPolicy Unrestricted
> _Press Y (or S ) to confirm the change._