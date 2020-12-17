# Noisette_TouchOSC-DS100
Example of Chataigne DS100 OSC Module usage.

A simple interface to act as a "side-car" for mixing console with iPad & touchOSC as bi-directionnal Soundscape sound object controller.

For latest DS100 OSC module version (1.4.1), I've reviewed the previous example DS100<>TouchOSC noisette.
It is now including also CL/QL>DS100 as another mapping example, and additionnal User Defined buttons and fader.

## How to setup TouchOSC<>DS100
1. First install DS100 OSC module (in Chataigne/Files menu/Community module manager...). You can also download the module folder from https://github.com/madees/dbaudio-DS100-Chataigne-Module/archive/master.zip and manually unzip and copy the DS100 OSC module master folder in your ..Chataigne/modules/ folder).
2. Next, install CL/QL SCP module (as it is not in Community modules, manually unzip and copy the CL/QL module master folder in your ..Chataigne/modules/ folder).
3. Download the .touchosc file and sync it to your iPad TouchOSC.
4. Download the .noisette and TouchOSC.js in a folder.
5. Launch Chataigne and open this .noisette.
6. IP of DS100 device should be setup accordingly in DS100 module OSC output settings.
7. In TouchOSC settings, set the "Connections" OSC IP adress/port to Chataigne one.
8. The other way around, in Chataigne TouchOSC module, OSC output/port set it to Ipad IP.

### WARNING
This version can still self oscillate (feedback with bi directionnal TouchOSC module mappings), if network speed is very slow (when the Rx values feedback from DS100 are received in Chataigne, map back to TouchOSC (usually due to WIFI big lag) AFTER a new values is sent by TouchOSC, the Noisette may oscillate infinitely between those two values).

You can find this setting in TouchOSC module/Scripts container, or there is a shortcut on DashBoard, default is 20Hz (=50 ms period, max round trip time of coms should be less).

If you encountered loops, first clic on the button in dashboard: it will pause Rx for one period. If loops start again, reduce the update rate until it's stable. 
Minimum update rate of 1 means 1 to 2 second pause, slows a lot Rx but very safe margin, and still usable if you're essentially using TouchOSC to Tx parameters instead of monitoring. Anyway, you can also turn off the whole "DS100>TouchOSC" mapping container, but of course it will be one way only, TouchOSC>DS100.

### Optionnally, CL/QL>DS100 remote setup
9. In the Chataigne CL/QL module, check the "model" accordingly to Yamaha hardware.
10. Set the console in "Surround" mode. We won't use 5.1 consoles buses but only Direct outs+Surround panner metadatas.
11. As CL/QL SCP is just sending in broadcast, nothing to set on the console except network mask to be on the same domain in its remote config.
12. In Chataigne CL/QL Module, "Remote Host" output set to the console remote IP.

A first mappings container "CL>DS100" is provided, it gather "Last Cue" as channel selection on TouchOSC, "Mono output fader" mapped to DS100 master output level (WARNING: it ovewrite all DS100 output levels! turn it off if you think it isn't a good idea).

Another mappings container send surround paner channel parameters to one object (only setup with channel #1, for proof of concept, you can copy paste the State container and adapt channel numbers to add more simultaneous channels control from console surround panners).

Yamaha CL/QL Chataigne module is based on https://github.com/l-r-r/Yamaha-CLQL-Chataigne-Module, adapted to add last cue and input channels surround panner parameters.
Please check that the Chataigne CL/QL module is using correct console model and IP for its remote port.

## More to come
User defined 4x Push, 4x Toggle, 1 fader are there to add more Chataigne control. Not done in the file, but typically to activate Generators mapped to sound objects parameters, play sequences in time machine, adapt speed or time position in a sequence with the fader...

For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join us on Discord : https://discord.com/invite/ngnJ5z 

My contact on Discord is also "madees". Any feedback or ideas on improvements or features are welcome !
