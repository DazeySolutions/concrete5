<?php defined('C5_EXECUTE') or die('Access denied.'); ?>
<br>
<div class='control-group'>
    <?=$form->label('apikey', t('Api Key'))?>
    <div class='controls'>
        <?=$form->text('apikey',$apikey)?>
    </div>
</div>
<div class='control-group'>
    <?=$form->label('apisecret', t('Api Secret'))?>
    <div class='controls'>
        <?=$form->text('apisecret', $apisecret)?>
    </div>
</div>
