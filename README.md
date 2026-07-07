# Red Hat AI quickstart catalog plugin
An OpenShift dynamic web plugin to enable the AI quickstart catalog page

## Requiremeents
* OpenShift 4.22
* `cluster-admin` permissions on the cluster

## Installation

> [!WARNING]
> After installation, there may be a brief delay while the plugin comes up and enables the new menu

### Cluster login
Before starting, be sure to use `oc login` to log in to your cluster with `cluster-admin` permissions.
```
oc login --token=sha256~Nf5vt....Lp9kHkxCnlECN7fw --server=https://api.crc.testing:6443
```

### Install from the cloned repo
Clone this repo, using the branch for your release of OpenShift
```
git clone https://github.com/seanmerrow/ai-quickstart-catalog-plugin.git -b release-4.22
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

### Update the image
A new plugin image will need to be created after modifying any of the files. Once the new image is created, it will need to be uploaded to a registry that is accessible by the OpenShift cluster.

### Plugin image
The plugin image location is set in the `./charts/ai-quickstart-catalog-plugin/values.yanml` file.
