import t from 'tap';
import * as check from "../lib/index.js";
import { assert } from "../lib/index.js";

if (check.isLinux())
{
	if (check.isFedora()) 
	{
		t.test('distro', async t => { 

		t.ok(await check.isFedora(), "distro");
		t.ok(await check.isFedoraLike(), "distro");
		t.notOk(await check.isArch(), "distro");
		t.notOk(await check.isArchLike(), "distro");
		t.notOk(await check.isManjaro(), "distro");
		t.notOk(await check.isDebian(), "distro");
		t.notOk(await check.isDebianLike(), "distro");
		t.notOk(await check.isUbuntu(), "distro");
		t.notOk(await check.isUbuntuLike(), "distro");
		t.notOk(await check.isMint(), "distro");
		t.notOk(await check.isPopOS(), "distro");
		t.notOk(await check.isElementaryOS(), "distro");
		t.notOk(await check.isDeepin(), "distro");
		t.notOk(await check.isRaspberryPiOS(), "distro");
		t.notOk(await check.isRaspbian(), "distro");
		t.notOk(await check.isOpenSUSE(), "distro");
		t.notOk(await check.isSlackware(), "distro");
		t.notOk(await check.isGentoo(), "distro");
		
		t.resolves(assert.shouldFedora(), "distro");
		t.resolves(assert.shouldFedoraLike(), "distro");
		t.rejects(assert.shouldArch(), "distro");
		t.rejects(assert.shouldArchLike(), "distro");
		t.rejects(assert.shouldManjaro(), "distro");
		t.rejects(assert.shouldDebian(), "distro");
		t.rejects(assert.shouldDebianLike(), "distro");
		t.rejects(assert.shouldUbuntu(), "distro");
		t.rejects(assert.shouldUbuntuLike(), "distro");
		t.rejects(assert.shouldMint(), "distro");
		t.rejects(assert.shouldPopOS(), "distro");
		t.rejects(assert.shouldElementaryOS(), "distro");
		t.rejects(assert.shouldDeepin(), "distro");
		t.rejects(assert.shouldRaspberryPiOS(), "distro");
		t.rejects(assert.shouldRaspbian(), "distro");
		t.rejects(assert.shouldOpenSUSE(), "distro");
		t.rejects(assert.shouldSlackware(), "distro");
		t.rejects(assert.shouldGentoo(), "distro");
		
		t.end();
		});
	}

	if (check.isGnome()){

		t.test('de', t => { 

		t.ok(check.isGnome(), "de");
		t.notOk(check.isKDE(), "de");
		t.notOk(check.isXFCE(), "de");
		t.notOk(check.isMate(), "de");
		t.notOk(check.isCinnamon(), "de");

		t.doesNotThrow(function(){ assert.shouldGnome() }, "de");
		t.throws(function(){ assert.shouldKDE() }, "de");
		t.throws(function(){ assert.shouldXFCE() }, "de");
		t.throws(function(){ assert.shouldMate() }, "de");
		t.throws(function(){ assert.shouldCinnamon() }, "de");

		t.end();
		});
	}
	
	t.test('wayland', t => {
	
	if (process.env['WAYLAND_DISPLAY']) {
		t.ok(check.isWayland(), "wayland");
		t.doesNotThrow(function(){ assert.shouldWayland() }, "wayland");
	} else { 
		t.notOk(check.isWayland(), "wayland");
		t.throws(function(){ assert.shouldWayland() }, "wayland");
	}
		
	t.end();
	});
}
