## Demo for openHASP config in openHAB

Copy the respective files to the items, rules, sitemap and things directory of your openHAB server.
Make sure to update the IP-address for your MQTT-broker in the `haspLVGL_demo.things` file.

Once the files are loaded into openHAB, go to the webpage of your plate. Navigate to `Configuration > MQTT Settings` and set the plate name to `demo_plate` and update the MQTT Broker settings of your server.

Restart the plate and the demo page should load automatically to your device.

More information can be found on the [wiki](https://haswitchplate.github.io/openHASP-docs/#example-1/) of openHASP. 
