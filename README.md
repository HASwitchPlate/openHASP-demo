# openHASP_demo
Demo for openHASP config in OpenHab

Copy the respective files to the items, rules, sitemap, things and transform directory of your OpenHab server.
Make sure to update the IP-address for your MQTT-broker in the `openHASP_demo.things` file.

Once the files are loaded into OpenHab, go to the webpage on your openHASP esp. Navigate to `Configuration>MQTT Settings` and set the plate name to `demo_plate` and update the MQTT Broker settings to your MQTT broker.
Restart the esp and the demo page should load automatically to your device.

More information can be found on the [website](https://www.openHASP.com/) of openHASP. 
