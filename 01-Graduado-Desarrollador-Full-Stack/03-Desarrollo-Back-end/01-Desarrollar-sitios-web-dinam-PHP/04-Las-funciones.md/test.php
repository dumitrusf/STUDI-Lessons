<?php
function sayHello(...$persons) {
	foreach($persons as $person) {
		echo "Bonjour "  . $person . "!\n";
  }
}
sayHello("Agnès", "Kenza", "Nour");