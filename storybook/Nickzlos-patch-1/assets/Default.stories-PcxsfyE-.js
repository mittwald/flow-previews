import{R as e}from"./index-BwDkhjyp.js";import{C as n,a as d,M as t}from"./ContextMenuTrigger-LIP4cND7.js";import{B as s}from"./Button-DWl6SRuO.js";import{S as W}from"./Separator-Cv098Q8B.js";import{H as v}from"./Heading-rdQzPY0C.js";import{S as H}from"./Section-Q2S2zUfY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-CbDEtdyo.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./PopoverTrigger-BXqZhBbM.js";import"./OverlayTrigger-DBKZn7pn.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-Bn5j6nR1.js";import"./useSelector-J4AjFox4.js";import"./Action-2q0-LgdR.js";import"./Text-Bxhza4fE.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-C_suByGF.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DGeSE4ad.js";import"./IconWarning-DyJIeaqs.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./useMenuTrigger-RmtceGNU.js";import"./SelectionManager-BD-OU06l.js";import"./useEvent-m5sATXdH.js";import"./LoadingSpinner-BeDxB4g7.js";import"./Button-BTMfZQLF.js";import"./Activity-Cov3f-FH.js";const Ke={title:"Actions/ContextMenu",component:n,render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(W,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},l={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{selectionMode:"navigation",...r},e.createElement(H,null,e.createElement(v,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
