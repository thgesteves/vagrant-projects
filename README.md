# vagrant-projects 

A collection of Vagrant projects that provision some softwares that I use on my development environments. These projects 
use CentOS box and are configured to run with VirtualBox, but they can be easily changed to run with other virtualization 
providers like Hyper-V and Docker.

## Prerequisites

All projects in this repository require Vagrant and Oracle VM VirtualBox.

1. Install [Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://vagrantup.com/)

## Usage

1. Clone this repository `git clone https://github.com/thgesteves/vagrant-projects`
2. Change into the desired project folder
3. Start Vagrant with command `vagrant up` (in the first time the environment starts, Vagrant will run the provision script 
that setups the whole system)
4. Suspend and halt the environment using `vagrant suspend` and `vagrant halt`. See all commands using `vagrant help`

## Known issue

### Hyper-V on Windows hosts

The projects in this repository are unlikely to work correctly on Windows hosts with Hyper-V enabled.

Windows features that enable Hyper-V include Application Guard, Containers, Credential Guard, Device Guard, Hyper-V, 
Virtual Machine Platform, Windows Hypervisor Platform, Windows Sandbox, and Windows Subsystem for Linux 
(WSL2 only; WSL1 does _not_ use Hyper-V). If you encounter problems with the projects on a Windows host, please try 
disabling these features.

To completely disable all Hyper-V features, it may be necessary to run the command `bcdedit /set hypervisorlaunchtype Off` 
from an Administrator Command Prompt. After running this command, reboot the computer.