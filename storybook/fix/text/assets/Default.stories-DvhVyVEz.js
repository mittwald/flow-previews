import{R as e}from"./index-BwDkhjyp.js";import{C as n,a as d,M as t}from"./ContextMenuTrigger-D05WcQsc.js";import{B as s}from"./Button-w6OZw61K.js";import{S as W}from"./Separator-apJGhmsG.js";import{H as v}from"./Heading-DVg7wytp.js";import{S as H}from"./Section-BeFlFaPG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-DpPOHS38.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./PopoverTrigger-C-NNp23A.js";import"./OverlayTrigger-C-T-XlBI.js";import"./utils-CcQIssJO.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CscfTk_S.js";import"./useFocusable-C-qOUFhv.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bw-L1sLn.js";import"./FocusScope-DBQ4F6TM.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BopbO3Wg.js";import"./context-D0eOVtdN.js";import"./useSelector-43iio57k.js";import"./Action-DFrA058B.js";import"./Text-BXlBw2yu.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-DqgvIX4k.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-ZB_mDMmk.js";import"./IconWarning-BtAGI7Yn.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";import"./Separator-mwJ01TZq.js";import"./useMenuTrigger-_tXWyjWN.js";import"./SelectionManager-CSYAD4ny.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-CsAgL5A_.js";import"./Button-CoDApBTL.js";import"./Activity-Cov3f-FH.js";const Ke={title:"Actions/ContextMenu",component:n,render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(W,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},l={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{selectionMode:"navigation",...r},e.createElement(H,null,e.createElement(v,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "single",
    defaultSelectedKeys: ["item2"]
  }
}`,...(M=(h=a.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var f,S,E;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "multiple",
    defaultSelectedKeys: ["item2", "item3"]
  }
}`,...(E=(S=m.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,x,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu defaultSelectedKeys={["https://www.mittwald.de"]} selectionMode="navigation" {...props}>
        <MenuItem href="https://www.mittwald.de" id="https://www.mittwald.de">
          www.mittwald.de
        </MenuItem>
        <MenuItem href="https://www.google.de">www.google.de</MenuItem>
        <MenuItem href="https://www.adobe.com">www.adobe.com</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>,
  args: {
    defaultOpen: true
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,T,O;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu defaultSelectedKeys={["https://www.mittwald.de"]} selectionMode="navigation" {...props}>
        <MenuItem href="https://www.mittwald.de" id="https://www.mittwald.de">
          www.mittwald.de
        </MenuItem>
        <Separator />
        <MenuItem href="https://www.google.de">www.google.de</MenuItem>
        <MenuItem href="https://www.adobe.com">www.adobe.com</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>,
  args: {
    defaultOpen: true
  }
}`,...(O=(T=w.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var y,K,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu selectionMode="navigation" {...props}>
        <Section>
          <Heading>Websites</Heading>
          <MenuItem href="https://www.mittwald.de" id="https://www.mittwald.de">
            www.mittwald.de
          </MenuItem>
          <MenuItem href="https://www.google.de">www.google.de</MenuItem>
          <MenuItem href="https://www.adobe.com">www.adobe.com</MenuItem>
        </Section>
      </ContextMenu>
    </ContextMenuTrigger>,
  args: {
    defaultOpen: true
  }
}`,...(B=(K=l.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const Be=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator","WithContextMenuSection"];export{o as Default,m as MultipleSelection,a as SingleSelection,l as WithContextMenuSection,i as WithLinks,w as WithSeparator,Be as __namedExportsOrder,Ke as default};
