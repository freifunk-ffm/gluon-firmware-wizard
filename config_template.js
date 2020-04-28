/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
  // list images on console that match no model
  listMissingImages: false,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // set enabled categories of devices (see devices.js)
  enabled_device_categories: ["recommended"],
  // community prefix of the firmware images
  community_prefix: 'gluon-ffda-',
  // firmware version regex
  version_regex: /-([\d]+\.[\d]+\.[\d]+([+-~][\d]+)?)[.-]/,
  // relative image paths and branch
  directories: {
    // some demo sources
    './images/gluon-factory-example.html': 'stable',
    './images/gluon-other-example.html': 'stable',
    './images/gluon-sysupgrade-example.html': 'stable'
  },
  // path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'CHANGELOG.html',
  // links for instructions like flashing of certain devices (optional)
  // can be set for a whole model or individual revisions
  // overwrites default values from devices_info in devices.js
  // devices_info: {
  //   'AVM': {
  //     "FRITZ!Box 4040": "https://fritz-tools.readthedocs.io"
  //   },
  //   "TP-Link": {
  //     "TL-WR841N/ND": {"v13": "https://wiki.freifunk.net/TP-Link_WR841ND/Flash-Anleitung_v13"}
  //   }
  // }
};
