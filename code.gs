/* 
 * LEGAL DISCLAIMER:
 * Authorized use only. This script simulates 
 * adversary behavior for security research.
 *  Filename: Code.gs
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Page')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
