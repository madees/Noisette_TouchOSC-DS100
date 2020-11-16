# Noisette_TouchOSC-DS100
Chataigne and TouchOSC example of DS100 Module usage. Now include also CL/QL link as another example.

A simple interface to act as a "side-car" mixing console Soundscape sound object controler.

How to setup ?
Of course, IP of DS100 device should be setup accordingly.
Also, please check that in TouchOSC the "Connections" OSC IP adress correspond to Chataigne one, and the other way around in Chataigne TouchOSC module send commands to Ipad IP.

You can add another module to changes parameters like Object ID (to follow channel select on mixing desk), Master level, EnSpace sends ect. to follow mixing desk faders...
Simple example is provided, with CL/QL Yamaha module, it gather "Last Cue" as channel select, "Mono output fader" as DS100 master output level and surround paner channel parameters map to one object (only setup with channel #1, for proof of concept, you can copy paste the State container to add more channels).
Yamaha CL/QL module is based on https://github.com/l-r-r/Yamaha-CLQL-Chataigne-Module, adapted to add last cue, input channels surround panner parameters.
Please check that the Chataigne CL/QL module is using correct console model and IP for its remote port.

For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join me on Discord : https://discord.com/invite/ngnJ5z my contact there is also "madees".
