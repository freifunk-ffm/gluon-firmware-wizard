
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
  // community prefix of the firmware images
  community_prefix: 'gluon-ffffm-',
  // firmware version regex
  version_regex: '-((v[0-9]+.[0-9]+(.[0-9])?)-(((stable|test)-[0-9]{4})|((rc|next|experimental)-[0-9]{4}(-[0-9a-z]{8})?(-[0-9a-z]{8})?)))[.-]',
  //
  prettyPrintVersionRegex: '(v[0-9]+(.[0-9]+){1,3})',
  // relative image paths and branch
  directories: {
    // some demo sources
    'https://firmware.ffffm.net/images/stable/factory/': 'Stable',
    'https://firmware.ffffm.net/images/stable/sysupgrade/': 'Stable',
    'https://firmware.ffffm.net/images/stable/other/': 'Stable',
//    'https://dl.ffm.freifunk.net/firmware/test/factory/': 'Test',
//    'https://dl.ffm.freifunk.net/firmware/test/sysupgrade/': 'Test',
//    'https://dl.ffm.freifunk.net/firmware/test/other/': 'Test',
    'https://firmware.ffffm.net/images/rc/factory/': 'RC',
    'https://firmware.ffffm.net/images/rc/sysupgrade/': 'RC',
    'https://firmware.ffffm.net/images/rc/other/': 'RC',
    'https://firmware.ffffm.net/images/next/factory/': 'Next',
    'https://firmware.ffffm.net/images/next/sysupgrade/': 'Next',
    'https://firmware.ffffm.net/images/next/other/': 'Next'
  },
  preview_pictures: 'pictures/'
};
