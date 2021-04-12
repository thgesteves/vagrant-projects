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

### (Windows hosts only) VirtualBox with Hyper-V enabled

VirtualBox version < 6 does not run correctly with Hyper-v enabled and in version 6 this feature is experimental 
[https://docs.oracle.com/en/virtualization/virtualbox/6.0/admin/hyperv-support.html]

To check if Hyper-V is enabled, run the command `Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V` from an 
Administrator PowerShell.

To completely disable Hyper-V, run the command `Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V` 
from an Administrator PowerShell. Reboot the computer after running this command.

> NOTE: Windows Subsystem for Linux uses Hyper-V (WSL2 only; WSL1 does _not_ use Hyper-V)