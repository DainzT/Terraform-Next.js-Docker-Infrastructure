# Terraform Next.js Docker Infrastructure
This project showcases how Terraform can be used to automate the management and provisioning of Docker infrastructure for a Next.js application. It demonstrates the full lifecycle process: building, updating, and destroying the Docker-based environment.

# Structure Overview
```
terraform-nextjs-docker-infrastructure/
├── infrastructure/
│   ├── LICENSE
│   ├── README.md
│   ├── main.tf
│   ├── outputs.tf
│   ├── terraform.tf
│   ├── terraform.tfvars
│   └── variables.tf
├── .dockerignore
├── Dockerfile
├── package.json
├── ...
```

# Prerequisites

## 1. Docker Desktop (comes with Docker CLI)
### For **Windows** and **macOS**
Use **Docker Desktop**, which bundles the Docker Engine, CLI, and other tools.
- Download from Docker's official site: https://www.docker.com/products/docker-desktop/
- Documentation for Windows: https://docs.docker.com/desktop/setup/install/windows-install/
- Documentation for macOS: https://docs.docker.com/desktop/setup/install/mac-install/ 


## 2. Terraform CLI
Install free open source manager to download terraform directly into your CLI

### **Windows**: Using Using Chocolatey 
1. **Install Chocolatey**. If you don't already have it, open a **PowerShell terminal as an administrator**. Run the following command:
```
# powershell
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\
```
2. **Install Terraform**. After Chocolatey is installed, use the following command in your **PowerShell terminal** to install Terraform:
```
# powershell
> choco install terraform
```
3. **Verify the installation**. To confirm that Terraform is installed and working, in your terminal and run:
```
# powershell
> terraform -version
```

### **macOS**: Using Homebrew
1. **Install Homebrew**. If you don't have Homebrew installed, open a **Terminal** and run the following command:
```
# powershell
> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. **Add HashiCorp tap**. To ensure you get the official version, add the HashiCorp tap to your Homebrew installation:
```
# bash
> brew tap hashicorp/tap
```
3. **Install Terraform**. Now, install Terraform using Homebrew:
```
# bash
> brew install hashicorp/tap/terraform
```
4. **Verify the installation**. After the installation is complete, run this command in your terminal:
```
# bash
> terraform -version
```

# Navigate to infrastructure folder to read more about terraform:

## Terraform flow:

- Scope -  Identify the infrastructure for your project.
- Author  - Write the configuration for your infrastructure.
- Initialize -  Install the plugins Terraform needs to manage the infrastructure.
- Plan - Preview the changes Terraform will make to match your configuration.
- Apply  - Make the planned changes.

## Terraform basic commands:
- terraform version:
- terraform -help:
- terraform fmt: 
- terraform apply:
- terraform plam:
- terraform validate:
- terraform apply:
- terraform destroy:
- terraform output:

## Terraform module structure:
```
.
├── LICENSE
├── README.md
├── main.tf
├── outputs.tf
├── terraform.tf
├── terraform.tfvars
├── variables.tf
```
