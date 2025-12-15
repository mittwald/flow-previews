import{j as e}from"./iframe-Can218wR.js";import{T as t}from"./Text-C2o8kJX0.js";import{S as T}from"./Section-BTVZhucR.js";import{I as h}from"./InlineCode-TSvlP2S4.js";import{I as g}from"./IconWarning-BNaFuPnH.js";import{d as u}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./clsx-B-dksMZM.js";import"./browser-BKQSdhjf.js";import"./utils-BpZeyfMN.js";import"./EmulatedBoldText-CmVjk4cf.js";import"./context-a0yvmfmj.js";import"./Button-DOjUwuNT.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DZl3H9Sd.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./RSPContexts-DDMcPOu0.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./useStatic-s9qeAkES.js";import"./dynamic-B5g7bVbH.js";import"./remote-CHcOizPe.js";const Q={title:"Content/Text",component:t,argTypes:{elementType:{control:"inline-radio",options:["span","p"]}},args:{elementType:"span"},render:r=>e.jsx(T,{children:e.jsx(t,{...r,children:"Text is an unstyled component that can be used to display texts. By default it renders a span."})})},s={},n={render:r=>e.jsx(t,{...r,children:"Text without styling parent components"})},o={render:r=>e.jsxs(t,{...r,children:["Text with unordered list:",e.jsxs("ul",{children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})},a={render:r=>e.jsxs(t,{...r,children:["Text with ordered list:",e.jsxs("ol",{children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})},i={render:r=>e.jsx(t,{...r,children:e.jsx("small",{children:"Small Text"})})},p={args:{color:"dark"},globals:{backgrounds:"light"}},c={args:{color:"light"},globals:{backgrounds:"dark"}},l={args:{align:"end"}},d={render:r=>e.jsxs(T,{children:[e.jsx(t,{children:e.jsxs("strong",{children:["Without specified ",e.jsx(h,{children:"wrap"}),":"]})}),e.jsx(t,{...r,align:"center",children:"This is a centered text in a small container so the text is wrapped."}),e.jsx(t,{children:e.jsxs("strong",{children:["With ",e.jsx(h,{children:"wrap: balance"}),":"]})}),e.jsx(t,{...r,align:"center",wrap:"balance",children:"This is a centered text in a small container so the text is wrapped."})]}),parameters:{viewport:{defaultViewport:"mobile2"}}},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(g,{})," ",u.medium,e.jsxs("small",{children:[u.short," ",e.jsx(g,{})," ",u.short]})]})},x={render:r=>e.jsx(t,{...r,wordBreak:"break-word",children:u.long.replace(/[^\p{L}\p{N}]/gu,"")})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props}>Text without styling parent components</Text>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with unordered list:
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </Text>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      Text with ordered list:
      <ol>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ol>
    </Text>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      <small>Small Text</small>
    </Text>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <Text>
        <strong>
          Without specified <InlineCode>wrap</InlineCode>:
        </strong>
      </Text>
      <Text {...props} align="center">
        This is a centered text in a small container so the text is wrapped.
      </Text>
      <Text>
        <strong>
          With <InlineCode>wrap: balance</InlineCode>:
        </strong>
      </Text>
      <Text {...props} align="center" wrap="balance">
        This is a centered text in a small container so the text is wrapped.
      </Text>
    </Section>,
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props}>
      <IconStar /> {dummyText.medium}
      <small>
        {dummyText.short} <IconStar /> {dummyText.short}
      </small>
    </Text>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: props => <Text {...props} wordBreak="break-word">
      {dummyText.long.replace(/[^\\p{L}\\p{N}]/gu, "")}
    </Text>
}`,...x.parameters?.docs?.source}}};const X=["Default","RawText","UnorderedList","OrderedList","SmallText","Dark","Light","AlignEnd","WrapBalance","WithIcon","WithWordBreak"];export{l as AlignEnd,p as Dark,s as Default,c as Light,a as OrderedList,n as RawText,i as SmallText,o as UnorderedList,m as WithIcon,x as WithWordBreak,d as WrapBalance,X as __namedExportsOrder,Q as default};
