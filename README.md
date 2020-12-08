# Noisette_TouchOSC-DS100
A simple interface to act as a "side-car" for CL5 mixing console with Soundscape sound object controler.

Example of DS100 Module usage.
First version ("TouchOSC-DS100-CL5_Oct2020") is in zip archive with corresponding previous version of DS100 OSC module included. It has been tested and works usually without loop issue, but by slowing down a lot Rx of parameters (pause for 10x the update rate period settings, by default (20Hz) it means an update on TouchOSC Rx twice a second). With very slow Rx (usually because of WIFI latency, if it takes more than 0.5s to receive values from DS100 to TouchOSC), it still may oscillate.

For latest DS100 OSC module, I've review the example noisette also, it is now including also CL/QL link as another example.
Mapping is done only for CHANNEL 1 as proof of concept, but you may easily copy paste the state container and adapt to other channels depending of your application.
The Chatainge CL/QL module used is included, and differs from official l-r-r distro as it has been modified specifically for this application during a CL5/DS100 workshop.
You should just setup the Yammie in surround mode to have channels surround panner parameters sent to DS100 by OSC (ONE WAY ONLY, Yammie>DS100).

WARNING: this new version can self oscillate (feedback with bi directionnal TouchOSC module mappings), depending on network speeds (when the Rx values feedback from DS100 are received in Chataigne, map back to TouchOSC (usually WIFI speed) AFTER a new values is sent by TouchOSC, the Noisette may oscillate infinitely between those two values).
I'm working on it, as I want to have this loop restriction smarter and included into the noisette instead of in the module as previously made in V1 (so for others projects that don't need bi-directionnal loops, it doesn't slow the communication of the DS100 OSC module, and user may adapt the Rx pause accordingly to their network performance).
If you want to work with me on that issue, welcome ! Please join the Chataigne Discord.

BEFORE THAT I WILL STRONGLY AVOID TO USE IT ON PRODUCTION !!!
Anyway you can stop/avoid infinite loops manually by de-activating "DS100>TouchOSC mappings", especially if you're most interrested in one way TouchOSC>DS100, or the Yamaha CL/QL part of the noisette.

## How to setup ?
Of course, IP of DS100 device should be setup accordingly.
Also, please check that in TouchOSC the "Connections" OSC IP adress correspond to Chataigne one, and the other way around in Chataigne TouchOSC module send commands to Ipad IP.

You can add another module to changes parameters like Object ID (to follow channel select on mixing desk), Master level, EnSpace sends ect. to follow mixing desk faders...
Simple example is provided, with CL/QL Yamaha module, it gather "Last Cue" as channel select, "Mono output fader" as DS100 master output level and surround paner channel parameters map to one object (only setup with channel #1, for proof of concept, you can copy paste the State container to add more channels).
Yamaha CL/QL module is based on https://github.com/l-r-r/Yamaha-CLQL-Chataigne-Module, adapted to add last cue, input channels surround panner parameters.
Please check that the Chataigne CL/QL module is using correct console model and IP for its remote port.

For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join me on Discord : https://discord.com/invite/ngnJ5z my contact there is also "madees".
