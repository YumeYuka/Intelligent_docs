import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,o as n}from"./app-boC1pG93.js";const l={};function t(d,e){return n(),a("div",null,e[0]||(e[0]=[s(`<p>阅读此模块可以了解如何配置<code>苏柚Nyanya</code>模块自定义配置文件。</p><h6 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h6><p>苏柚Nyanya使用开源的<a href="https://github.com/GunRain/FVV" target="_blank" rel="noopener noreferrer">FVV文本格式</a>，您应该先了解该文本格式后再配置配置文件。</p><h2 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>Name</span></a></h2><ul><li>类型: <code>string</code></li><li>示例值: <code>苏柚Nyanya配置文件</code><br><code>Name</code>是一个字符串，用于定义配置文件的名称。</li></ul><h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2><ul><li>类型: <code>string</code></li><li>示例值: <code>张三</code><br><code>Author</code>是一个字符串，用于定义配置文件的作者。</li></ul><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h2><ul><li>类型: <code>string</code></li><li>示例值: <code>1.0.0</code><br><code>Version</code>是一个字符串，用于定义配置文件的版本。</li></ul><h2 id="classify" tabindex="-1"><a class="header-anchor" href="#classify"><span>Classify</span></a></h2><ul><li>类型: <code>string</code></li><li>示例值: <code>/sdcard/Classify</code><br><code>Classify</code>是一个字符串，用于定义分类文件夹的路径。</li></ul><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>Delay</span></a></h2><ul><li>类型: <code>int</code></li><li>示例值: <code>60</code><br><code>Delay</code>是一个整数，用于定义分类文件前的延时时间，单位为<code>喵(秒)</code>。</li></ul><h2 id="multiuser" tabindex="-1"><a class="header-anchor" href="#multiuser"><span>MultiUser</span></a></h2><ul><li>类型: <code>bool</code></li><li>示例值: <code>false</code><br><code>MultiUser</code>是一个布尔值，用于定义是否启用多用户功能，如果您的设备上没有启用多用户，开启与关闭没有区别，请按需选择。</li></ul><h2 id="subapp" tabindex="-1"><a class="header-anchor" href="#subapp"><span>SubApp</span></a></h2><ul><li>类型: <code>bool</code></li><li>示例值: <code>true</code><br><code>SubApp</code>是一个布尔值，用于定义是否启用分监听路径分类功能，开启后会以监听路径组名称为分类文件的分类路径，关闭则是所有分类文件放到同一分类路径。</li></ul><h2 id="subtime" tabindex="-1"><a class="header-anchor" href="#subtime"><span>SubTime</span></a></h2><ul><li>类型: <code>bool</code></li><li>示例值: <code>true</code><br><code>SubTime</code>是一个布尔值，用于定义是否启用分时间分类功能，开启后会以当前日期为分类文件的分类路径，关闭则是所有分类文件放到同一分类路径。</li></ul><h2 id="defaulttype" tabindex="-1"><a class="header-anchor" href="#defaulttype"><span>DefaultType</span></a></h2><ul><li>类型: <code>string</code></li><li>示例值: <code>其他</code><br><code>DefaultType</code>是一个字符串，用于定义分类文件的默认类型。</li></ul><h2 id="listenlist" tabindex="-1"><a class="header-anchor" href="#listenlist"><span>ListenList</span></a></h2><ul><li>类型: <code>string[]</code></li><li>示例值:</li></ul><div class="language-fvv line-numbers-mode" data-highlighter="shiki" data-ext="fvv" data-title="fvv" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ListenList = {</span></span>
<span class="line"><span>  默认下载路径 = [&quot;/sdcard/Download&quot;];</span></span>
<span class="line"><span>  &lt;其他路径...&gt;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ListenList</code>是一个字符串组组，用于定义监听路径的名称以及路径。<br> 可以添加多个监听路径，例如<code>Download</code>、<code>Tencent</code>、<code>WeChat</code>等。</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p><code>ListenList</code>中的路径将会一直被监听，<strong>请勿写入嵌套路径等可能导致运行出错的配置！！！</strong> (eg. 已经有了<code>/sdcard/Download</code>还写入<code>/sdcard/Download/XXX</code>或者再写入<code>/storage/emulated/0/Download</code>)</p></div><h2 id="suffixlist" tabindex="-1"><a class="header-anchor" href="#suffixlist"><span>SuffixList</span></a></h2><ul><li>类型: <code>string[]</code></li><li>示例值:</li></ul><div class="language-fvv line-numbers-mode" data-highlighter="shiki" data-ext="fvv" data-title="fvv" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>SuffixList = {</span></span>
<span class="line"><span>  FVV文本文件 = [&quot;fvv&quot;, &quot;fw&quot;, &quot;rpp&quot;, &quot;rxx&quot;, &quot;r++&quot;];</span></span>
<span class="line"><span>  RKSTDC压缩文件 = [&quot;rkc&quot;];</span></span>
<span class="line"><span>  &lt;其他后缀...&gt;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>SuffixList</code>是一个字符串组组，用于定义分类后缀的文件夹名称以及后缀。<br> 可以添加多个分类文件夹，例如<code>Apk</code>、<code>Document</code>、<code>Music</code>等。<br> 其对应值为分类文件的类型。</p><h2 id="ignorelist" tabindex="-1"><a class="header-anchor" href="#ignorelist"><span>IgnoreList</span></a></h2><ul><li>类型: <code>string[]</code></li><li>示例值:</li></ul><div class="language-fvv line-numbers-mode" data-highlighter="shiki" data-ext="fvv" data-title="fvv" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>IgnoreList = [</span></span>
<span class="line"><span>  &quot;bak&quot;,</span></span>
<span class="line"><span>  &lt;其他后缀...&gt;</span></span>
<span class="line"><span>];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>IgnoreList</code>是一个字符串组，用于定义要忽略的文件后缀。</p><h2 id="namelist" tabindex="-1"><a class="header-anchor" href="#namelist"><span>NameList</span></a></h2><ul><li>类型: <code>string[]</code></li><li>示例值:</li></ul><div class="language-fvv line-numbers-mode" data-highlighter="shiki" data-ext="fvv" data-title="fvv" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>NameList = {</span></span>
<span class="line"><span>  喵喵喵 = [&quot;喵&quot;, &quot;meow&quot;];</span></span>
<span class="line"><span>  生活 = [&quot;114514&quot;, &quot;一一四五一四&quot;];</span></span>
<span class="line"><span>  &lt;其他名称...&gt;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NameList</code>是一个字符串组组，用于定义分类名称的文件夹名称以及名称。</p><h2 id="ignorenamelist" tabindex="-1"><a class="header-anchor" href="#ignorenamelist"><span>IgnoreNameList</span></a></h2><ul><li>类型: <code>string[]</code></li><li>示例值:</li></ul><div class="language-fvv line-numbers-mode" data-highlighter="shiki" data-ext="fvv" data-title="fvv" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>IgnoreNameList = [</span></span>
<span class="line"><span>  &quot;tmp&quot;,</span></span>
<span class="line"><span>  &lt;其他名称...&gt;</span></span>
<span class="line"><span>];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>IgnoreNameList</code>是一个字符串组，用于定义要忽略的文件名称。</p>`,42)]))}const c=i(l,[["render",t],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/config/","title":"自定义配置","lang":"zh-CN","frontmatter":{"title":"自定义配置","icon":"file","index":false,"category":["自定义配置"],"description":"阅读此模块可以了解如何配置苏柚Nyanya模块自定义配置文件。 注意 苏柚Nyanya使用开源的FVV文本格式，您应该先了解该文本格式后再配置配置文件。 Name 类型: string 示例值: 苏柚Nyanya配置文件 Name是一个字符串，用于定义配置文件的名称。 Author 类型: string 示例值: 张三 Author是一个字符串，用于定...","head":[["meta",{"property":"og:url","content":"https://github.com/YumeYuka/Intelligent_docs/config/"}],["meta",{"property":"og:site_name","content":"苏柚Nyanya"}],["meta",{"property":"og:title","content":"自定义配置"}],["meta",{"property":"og:description","content":"阅读此模块可以了解如何配置苏柚Nyanya模块自定义配置文件。 注意 苏柚Nyanya使用开源的FVV文本格式，您应该先了解该文本格式后再配置配置文件。 Name 类型: string 示例值: 苏柚Nyanya配置文件 Name是一个字符串，用于定义配置文件的名称。 Author 类型: string 示例值: 张三 Author是一个字符串，用于定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-18T14:26:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-18T14:26:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-18T14:26:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"YumeYuka\\",\\"url\\":\\"https://github.com/YumeYuka\\"}]}"]]},"headers":[{"level":2,"title":"Name","slug":"name","link":"#name","children":[]},{"level":2,"title":"Author","slug":"author","link":"#author","children":[]},{"level":2,"title":"Version","slug":"version","link":"#version","children":[]},{"level":2,"title":"Classify","slug":"classify","link":"#classify","children":[]},{"level":2,"title":"Delay","slug":"delay","link":"#delay","children":[]},{"level":2,"title":"MultiUser","slug":"multiuser","link":"#multiuser","children":[]},{"level":2,"title":"SubApp","slug":"subapp","link":"#subapp","children":[]},{"level":2,"title":"SubTime","slug":"subtime","link":"#subtime","children":[]},{"level":2,"title":"DefaultType","slug":"defaulttype","link":"#defaulttype","children":[]},{"level":2,"title":"ListenList","slug":"listenlist","link":"#listenlist","children":[]},{"level":2,"title":"SuffixList","slug":"suffixlist","link":"#suffixlist","children":[]},{"level":2,"title":"IgnoreList","slug":"ignorelist","link":"#ignorelist","children":[]},{"level":2,"title":"NameList","slug":"namelist","link":"#namelist","children":[]},{"level":2,"title":"IgnoreNameList","slug":"ignorenamelist","link":"#ignorenamelist","children":[]}],"git":{"createdTime":1735040160000,"updatedTime":1739888810000,"contributors":[{"name":"宫绫","username":"宫绫","email":"gun-rain@770995.xyz","commits":13,"url":"https://github.com/宫绫"},{"name":"YumeYuka","username":"YumeYuka","email":"nightrainmilkyway@gmail.com","commits":3,"url":"https://github.com/YumeYuka"},{"name":"NightRainMilkyWay","username":"NightRainMilkyWay","email":"NightRainMilkyWay@gmail.com","commits":2,"url":"https://github.com/NightRainMilkyWay"}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"config/README.md","localizedDate":"2024年12月24日","autoDesc":true}');export{c as comp,p as data};
