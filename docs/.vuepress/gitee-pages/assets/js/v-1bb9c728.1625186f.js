"use strict";(self.webpackChunk_jsdawn_vue3_tinymce=self.webpackChunk_jsdawn_vue3_tinymce||[]).push([[50],{980:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-1bb9c728",path:"/example.html",title:"使用示例",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用中文",slug:"使用中文",children:[]},{level:2,title:"经典设置",slug:"经典设置",children:[]},{level:2,title:"类似掘金设置",slug:"类似掘金设置",children:[]}],filePathRelative:"example.md"}},890:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var e=a(252);const p=(0,e._)("h1",{id:"使用示例",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用示例","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用示例")],-1),t=(0,e._)("h2",{id:"使用中文",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用中文","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用中文")],-1),l=(0,e._)("p",null,[(0,e._)("code",null,"language"),(0,e.Uk)(" - 语言 code， "),(0,e._)("code",null,"language_url"),(0,e.Uk)(" - 语言包路径。")],-1),o=(0,e.Uk)("vue 脚手架项目可前往官网 "),r={href:"https://www.tiny.cloud/get-tiny/language-packages/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("下载语言包"),i=(0,e.Uk)(" 放在 "),u=(0,e._)("code",null,"pulish/tinymce/langs",-1),k=(0,e.Uk)(" 中，也可使用该组件语言包 cdn "),b=(0,e._)("code",null,"https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js",-1),d=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> setting <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 以中文简体为例</span>\n    language<span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>\n    language_url<span class="token operator">:</span> <span class="token string">&#39;/tinymce/langs/zh_CN.js&#39;</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="经典设置" tabindex="-1"><a class="header-anchor" href="#经典设置" aria-hidden="true">#</a> 经典设置</h2><p>经典设置，包含了大部分可能用到的富文本编辑器功能和插件。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> classic_setting <span class="token operator">=</span> <span class="token punctuation">{</span>\n  height<span class="token operator">:</span> <span class="token number">190</span><span class="token punctuation">,</span>\n  toolbar<span class="token operator">:</span>\n    <span class="token string">&#39;undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |&#39;</span><span class="token punctuation">,</span>\n  toolbar_drawer<span class="token operator">:</span> <span class="token string">&#39;sliding&#39;</span><span class="token punctuation">,</span>\n  quickbars_selection_toolbar<span class="token operator">:</span>\n    <span class="token string">&#39;removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor&#39;</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token string">&#39;link image media table lists fullscreen quickbars&#39;</span><span class="token punctuation">,</span>\n  fontsize_formats<span class="token operator">:</span> <span class="token string">&#39;12px 14px 16px 18px&#39;</span><span class="token punctuation">,</span>\n  default_link_target<span class="token operator">:</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span>\n  link_title<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  nonbreaking_force_tab<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token comment">// 以中文简体为例</span>\n  language<span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>\n  language_url<span class="token operator">:</span>\n    <span class="token string">&#39;https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',4),m=(0,e._)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"vue3-tinymce-classic",src:"https://codepen.io/jsdawn/embed/BaZmXYO?default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},'\n  See the Pen <a href="https://codepen.io/jsdawn/pen/BaZmXYO">\n  vue3-tinymce-classic</a> by 青山依旧 (<a href="https://codepen.io/jsdawn">@jsdawn</a>)\n  on <a href="https://codepen.io">CodePen</a>.\n',-1),g=(0,e.uE)('<h2 id="类似掘金设置" tabindex="-1"><a class="header-anchor" href="#类似掘金设置" aria-hidden="true">#</a> 类似掘金设置</h2><p>类似掘金设置服务 简洁的图文写作，仅包含较常用的文字格式，图片上传，与链接功能。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> juejin_setting <span class="token operator">=</span> <span class="token punctuation">{</span>\n  menubar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  height<span class="token operator">:</span> <span class="token number">190</span><span class="token punctuation">,</span>\n  toolbar<span class="token operator">:</span>\n    <span class="token string">&#39;bold italic underline h1 h2 blockquote codesample numlist bullist link image | removeformat fullscreen&#39;</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token string">&#39;codesample link image table lists fullscreen&#39;</span><span class="token punctuation">,</span>\n  toolbar_mode<span class="token operator">:</span> <span class="token string">&#39;sliding&#39;</span><span class="token punctuation">,</span>\n  nonbreaking_force_tab<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  link_title<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  default_link_target<span class="token operator">:</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">,</span>\n  content_style<span class="token operator">:</span> <span class="token string">&#39;body{font-size: 16px}&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 自定义 图片上传模式</span>\n  custom_images_upload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  images_upload_url<span class="token operator">:</span> <span class="token string">&#39;your_upload_api_url...&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">custom_images_upload_callback</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span>url<span class="token punctuation">,</span>\n  custom_images_upload_param<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;xxxx01&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',3),h=(0,e._)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"vue3-tinymce-classic",src:"https://codepen.io/jsdawn/embed/gORoYRy?default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},'\n  See the Pen <a href="https://codepen.io/jsdawn/pen/gORoYRy">\n  vue3-tinymce-classic</a> by 青山依旧 (<a href="https://codepen.io/jsdawn">@jsdawn</a>)\n  on <a href="https://codepen.io">CodePen</a>.\n',-1),_={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,t,l,(0,e._)("p",null,[o,(0,e._)("a",r,[c,(0,e.Wm)(a)]),i,u,k,b]),d,m,g,h],64)}}}}]);