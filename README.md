# Noisette_TouchOSC-DS100
Files Chataigne and TouchOSC editor as an example of DS100 Module usage

A simple interface to act as a "side-car" mixing console Soundscape sound object controler.
Works bi-directional as stand alone.

You can add another module to changes parameters like Object ID (to follow channel select on mixing desk), Master level, EnSpace sends ect. to follow mixing desk faders...
Simple example is provided, with CL/QL Yamaha module, it gather "Last Cue" as channel select, "Mono output fader" as DS100 master output level and surround paner channel parameters map to one object (only setup with channel #1, for proof of concept, you can copy paste the State container to add more channels).
Yamaha CL/QL module is based on https://github.com/l-r-r/Yamaha-CLQL-Chataigne-Module, adapted to add last cue, input channels surround panner parameters.

For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join me on Discord : https://discord.com/invite/ngnJ5z my contact there is also "madees".
