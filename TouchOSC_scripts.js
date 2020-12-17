
/*
TouchOSC module scripts to avoid values feedback infinite loop because of bi-directionnal feature.

Use module/scripts/update rate parameter in Chataigne to adapt to network speed.
If you encountered infinte loops with constantly jumping values, decrease rate. 
Default is 20 Hz (50ms delay by OSC adress sent, should be more than enough even with WIFI)
*/

// global variable used as a pause counter. >1 means some message are in transmission.
var inActivity =20;
// Default value to 20 so it start after 1 second when you launch the module.
root.states.ds100_TouchOSCMappings.active.set(false);

// re activate Rx after a while (inActivity*update rate period)
function update(deltaTime)
{
	if(inActivity>0) inActivity--; else root.states.ds100_TouchOSCMappings.active.set(true);
}

function oscEvent(address, args)
{
	// Set flags depending of OSC Rx from TouchOSC (= someone is touching it !)
	if((local.match(address, "/main/ChPlus")) || (local.match(address, "/main/ChMinus"))) // This is a channel change, so update values from DS100
		{
			inActivity=0;
			root.states.ds100_TouchOSCMappings.active.set(true);
		}
		else // This is a parameter value, so pause update values from DS100
		{
			inActivity=2;
			root.states.ds100_TouchOSCMappings.active.set(false);
		}
}
