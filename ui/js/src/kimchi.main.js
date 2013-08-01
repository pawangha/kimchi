/*
 * Project Kimchi
 *
 * Copyright IBM, Corp. 2013
 *
 * Authors:
 *  Hongliang Wang <hlwanghl@cn.ibm.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kimchi.main = function() {
	kimchi.popable();

	$('#nav-menu a.item').on('click', function() {
	    var href = $(this).attr('href');
	    kimchi.vmTimeout && clearTimeout(kimchi.vmTimeout);
	    $('#main').load(href);
	    var left = $(this).parent().position().left;
	    var width = $(this).parent().width();
	    $('.menu-arrow').stop().animate({
		left: left+width/2-10
	    });
	    return false;
	});

	var currentMenu = $('.nav-menu .item.current');
	var left = currentMenu.parent().position().left;
	var width = currentMenu.parent().width();
	$('.menu-arrow').css('left', left+width/2-10);

	$('#main').load('i18n.html', function() {
	    $(this).load('guestTab.html');
	});
};