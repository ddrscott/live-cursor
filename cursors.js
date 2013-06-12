// Created using:
// puts (1..6).to_a.collect do |c| 
//    open("http://www.totallylayouts.com/tumblr/cursors/mouse-cursors/index.php?p=#{c}").read.scan(/(http:\/\/www.totallylayouts.com\/cursors\/cartoon\/.+\.png)/)
// end.flatten.inspect
var ALL_CURSORS = ["http://www.totallylayouts.com/cursors/cartoon/yoda_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/yellow_angry_bird.png",
 "http://www.totallylayouts.com/cursors/cartoon/white_angry_bird.png",
 "http://www.totallylayouts.com/cursors/cartoon/wanda_fairly_odd_parents.png",
 "http://www.totallylayouts.com/cursors/cartoon/tweetie_pie.png",
 "http://www.totallylayouts.com/cursors/cartoon/the_pink_panther.png",
 "http://www.totallylayouts.com/cursors/cartoon/the_joker.png",
 "http://www.totallylayouts.com/cursors/cartoon/storm_trooper_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/stewie_griffin_laser_gun.png",
 "http://www.totallylayouts.com/cursors/cartoon/stan_american_dad.png",
 "http://www.totallylayouts.com/cursors/cartoon/squidward_tenticles_sponge_bob_square_pants.png",
 "http://www.totallylayouts.com/cursors/cartoon/sponge_bob_square_pants.png",
 "http://www.totallylayouts.com/cursors/cartoon/spider_man.png",
 "http://www.totallylayouts.com/cursors/cartoon/snowball.png",
 "http://www.totallylayouts.com/cursors/cartoon/smurfette_the_smurfs.png",
 "http://www.totallylayouts.com/cursors/cartoon/sesame_street_bert.png",
 "http://www.totallylayouts.com/cursors/cartoon/sebastian_the_little_mermaid.png",
 "http://www.totallylayouts.com/cursors/cartoon/scooby_doo.png",
 "http://www.totallylayouts.com/cursors/cartoon/santas_little_helper.png",
 "http://www.totallylayouts.com/cursors/cartoon/red_angry_bird.png",
 "http://www.totallylayouts.com/cursors/cartoon/r2_d2_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/princess_jasmine_aladdin.png",
 "http://www.totallylayouts.com/cursors/cartoon/pluto.png",
 "http://www.totallylayouts.com/cursors/cartoon/pikachu_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/peter_griffin_football.png",
 "http://www.totallylayouts.com/cursors/cartoon/peter_griffin.png",
 "http://www.totallylayouts.com/cursors/cartoon/peppa_pig.png",
 "http://www.totallylayouts.com/cursors/cartoon/patrick_star_sponge_bob_square_pants.png",
 "http://www.totallylayouts.com/cursors/cartoon/oscar_the_grouch_sesame_street.png",
 "http://www.totallylayouts.com/cursors/cartoon/ned_flanders.png",
 "http://www.totallylayouts.com/cursors/cartoon/mr_krabs_sponge_bob_square_pants.png",
 "http://www.totallylayouts.com/cursors/cartoon/mickey_mouse_hand.png",
 "http://www.totallylayouts.com/cursors/cartoon/mickey_mouse_finger.png",
 "http://www.totallylayouts.com/cursors/cartoon/meowth_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/meg_griffin.png",
 "http://www.totallylayouts.com/cursors/cartoon/marge_simpson.png",
 "http://www.totallylayouts.com/cursors/cartoon/maggie_simpson.png",
 "http://www.totallylayouts.com/cursors/cartoon/luke_skywalker_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/lois_griffin.png",
 "http://www.totallylayouts.com/cursors/cartoon/lisa_simpson_portrait.png",
 "http://www.totallylayouts.com/cursors/cartoon/lisa_simpson.png",
 "http://www.totallylayouts.com/cursors/cartoon/kung_fu_panda.png",
 "http://www.totallylayouts.com/cursors/cartoon/klaus_american_dad.png",
 "http://www.totallylayouts.com/cursors/cartoon/jimmy_neutron.png",
 "http://www.totallylayouts.com/cursors/cartoon/jigglypuff_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/inspector_gadget.png",
 "http://www.totallylayouts.com/cursors/cartoon/homer_simpson_naked.png",
 "http://www.totallylayouts.com/cursors/cartoon/hello_kitty_swimming.png",
 "http://www.totallylayouts.com/cursors/cartoon/hello_kitty_reading.png",
 "http://www.totallylayouts.com/cursors/cartoon/hello_kitty_polka_dot_dress.png",
 "http://www.totallylayouts.com/cursors/cartoon/hello_kitty_ballerina.png",
 "http://www.totallylayouts.com/cursors/cartoon/green_angry_bird.png",
 "http://www.totallylayouts.com/cursors/cartoon/gary_spongebob_square_pants.png",
 "http://www.totallylayouts.com/cursors/cartoon/fluffy_cat.png",
 "http://www.totallylayouts.com/cursors/cartoon/flounder_the_little_mermaid.png",
 "http://www.totallylayouts.com/cursors/cartoon/elmo_sesame_street.png",
 "http://www.totallylayouts.com/cursors/cartoon/eevee_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/dora_the_explorer.png",
 "http://www.totallylayouts.com/cursors/cartoon/dexters_lab.png",
 "http://www.totallylayouts.com/cursors/cartoon/dee_dee_dexters_lab.png",
 "http://www.totallylayouts.com/cursors/cartoon/darth_vader_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/danny_phantom.png",
 "http://www.totallylayouts.com/cursors/cartoon/cradles_powerpuff_girls.png",
 "http://www.totallylayouts.com/cursors/cartoon/cosmo_fairly_odd_parents.png",
 "http://www.totallylayouts.com/cursors/cartoon/cookie_monster_sesame_street.png",
 "http://www.totallylayouts.com/cursors/cartoon/cleveland_brown.png",
 "http://www.totallylayouts.com/cursors/cartoon/chris_griffin_air_guitar.png",
 "http://www.totallylayouts.com/cursors/cartoon/chewbacca.png",
 "http://www.totallylayouts.com/cursors/cartoon/c3po_star_wars.png",
 "http://www.totallylayouts.com/cursors/cartoon/buzz_lightyear_toy_story.png",
 "http://www.totallylayouts.com/cursors/cartoon/buttercup_powerpuff_girls.png",
 "http://www.totallylayouts.com/cursors/cartoon/bulbasaur_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/brian_griffin.png",
 "http://www.totallylayouts.com/cursors/cartoon/bob_the_builder.png",
 "http://www.totallylayouts.com/cursors/cartoon/blue.png",
 "http://www.totallylayouts.com/cursors/cartoon/blossom_powerpuff_girls.png",
 "http://www.totallylayouts.com/cursors/cartoon/big_bird_sesame_street.png",
 "http://www.totallylayouts.com/cursors/cartoon/betty_boop.png",
 "http://www.totallylayouts.com/cursors/cartoon/bert_and_earnie_sesame_street.png",
 "http://www.totallylayouts.com/cursors/cartoon/batman.png",
 "http://www.totallylayouts.com/cursors/cartoon/bart_simpson_spray_can.png",
 "http://www.totallylayouts.com/cursors/cartoon/bart_simpson.png",
 "http://www.totallylayouts.com/cursors/cartoon/barney_gumble.png",
 "http://www.totallylayouts.com/cursors/cartoon/baby_sylvester.png",
 "http://www.totallylayouts.com/cursors/cartoon/baby_roadrunner.png",
 "http://www.totallylayouts.com/cursors/cartoon/baby_marvin_the_martian.png",
 "http://www.totallylayouts.com/cursors/cartoon/ash_catchem_pokemon.png",
 "http://www.totallylayouts.com/cursors/cartoon/ariel_the_little_mermaid.png",
 "http://www.totallylayouts.com/cursors/cartoon/angry_birds_pig.png",
 "http://www.totallylayouts.com/cursors/cartoon/adventure_time_princess.png",
 "http://www.totallylayouts.com/cursors/cartoon/adventure_time_jake.png",
 "http://www.totallylayouts.com/cursors/cartoon/adventure_time_finn.png"]
 
var cursorsGiven = 0;

exports.nextCursor = function() {
    return ALL_CURSORS[(cursorsGiven += 1) % ALL_CURSORS.length];
}