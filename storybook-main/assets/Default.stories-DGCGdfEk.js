import{j as e}from"./iframe-BxshUsxH.js";import{T as t}from"./Text-18K6QUAV.js";import{S as T}from"./Section-BZHA2v0g.js";import{I as h}from"./InlineCode-DjaHKjIt.js";import{I as g}from"./IconWarning-B98y0Q8s.js";import{d as u}from"./dummyText-CX_I_Wpl.js";import"./index-nuYtCEEu.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./clsx-B-dksMZM.js";import"./index-DKGU8PvL.js";import"./browser-CjJK-aFI.js";import"./utils-CVs5O02N.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./Action-CuTPfi8I.js";import"./context-Dpzgqk2_.js";import"./useStatic-B3TheZVH.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./dynamic-DbpBUg3_.js";import"./Dialog-g1S8F0Mk.js";import"./Button-BSW16sZi.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jrbRSF4x.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./RSPContexts-B9j1N_uk.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";const $={title:"Content/Text",component:t,argTypes:{elementType:{control:"inline-radio",options:["span","p"],defaultValue:"span"}},args:{elementType:"span"},render:r=>e.jsx(T,{children:e.jsx(t,{...r,children:"Text is an unstyled component that can be used to display texts. By default it renders a span."})})},s={},n={render:r=>e.jsx(t,{...r,children:"Text without styling parent components"})},o={render:r=>e.jsxs(t,{...r,children:["Text with unordered list:",e.jsxs("ul",{children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})},a={render:r=>e.jsxs(t,{...r,children:["Text with ordered list:",e.jsxs("ol",{children:[e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"}),e.jsx("li",{children:"Item"})]})]})},i={render:r=>e.jsx(t,{...r,children:e.jsx("small",{children:"Small Text"})})},p={args:{color:"dark"},globals:{backgrounds:"light"}},l={args:{color:"light"},globals:{backgrounds:"dark"}},c={args:{align:"end"}},d={render:r=>e.jsxs(T,{children:[e.jsx(t,{children:e.jsxs("strong",{children:["Without specified ",e.jsx(h,{children:"wrap"}),":"]})}),e.jsx(t,{...r,align:"center",children:"This is a centered text in a small container so the text is wrapped."}),e.jsx(t,{children:e.jsxs("strong",{children:["With ",e.jsx(h,{children:"wrap: balance"}),":"]})}),e.jsx(t,{...r,align:"center",wrap:"balance",children:"This is a centered text in a small container so the text is wrapped."})]}),parameters:{viewport:{defaultViewport:"mobile2"}}},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(g,{})," ",u.medium,e.jsxs("small",{children:[u.short," ",e.jsx(g,{})," ",u.short]})]})},x={render:r=>e.jsx(t,{...r,wordBreak:"break-word",children:u.long.replace(/[^\p{L}\p{N}]/gu,"")})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    align: "end"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ee=["Default","RawText","UnorderedList","OrderedList","SmallText","Dark","Light","AlignEnd","WrapBalance","WithIcon","WithWordBreak"];export{c as AlignEnd,p as Dark,s as Default,l as Light,a as OrderedList,n as RawText,i as SmallText,o as UnorderedList,m as WithIcon,x as WithWordBreak,d as WrapBalance,ee as __namedExportsOrder,$ as default};
