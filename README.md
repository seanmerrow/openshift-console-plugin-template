# Red Hat AI quickstart catalog plugin
An OpenShift dynamic web plugin to enable the AI quickstart catalog page

## Requiremeents
* OpenShift 4.22
* `cluster-admin` permissions on the cluster

## Installation
There are two ways to install this plugin into your cluster, both requiring Helm

### Cluster login
Before starting, be sure to use `oc login` to log in to your cluster with `cluster-admin` permissions.
```
oc login --token=sha256~Nf5vt....Lp9kHkxCnlECN7fw --server=https://api.crc.testing:6443
```
### Install from the .tgz Helm chart
Download the `ai-quickstart-catalog-plugin-x.y.z.tgz` file from this repo

Use Helm to install the chart. You must name the namespace in to which to install, and optionally create it while doing so.
```
helm install ai-quickstart-catalog-plugin ./ai-quickstart-catalog-plugin-0.7.0.tgz --namespace ai-quickstart-catalog-plugin --create-namespace
```
### Install from the cloned repo
Clone this repo
```
git clone https://github.com/seanmerrow/ai-quickstart-catalog-plugin.git
```
Change to the charts directory
```
cd ai-quickstart-catalog-plugin/charts
```
Install the plugin
```
helm upgrade -i  ai-quickstart-catalog-plugin ./ai-quickstart-catalog-plugin -n ai-quickstart-catalog-plugin --create-namespace
```
## Configuration
As AI quickstarts need to be added, removed or updated, this can be done by editing some files.

### Add, remove or update quickstarts
AI quickstarts that will be displayed are all in the `./src/data/quickstarts.ts` file. 

### Partner logos
Partner logos, used as icons in the catalog, are stored in the `./src/assets` folder.

### Plugin image
The plugin image is set in the `./charts/ai-quickstart-catalog-plugin/values.yanml` file.
