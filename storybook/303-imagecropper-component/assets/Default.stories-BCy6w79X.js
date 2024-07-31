import{R as e}from"./index-Cs7sjTYM.js";import{C as n,a as d,M as t}from"./ContextMenuTrigger-BWb-4unj.js";import{B as s}from"./Button-BNaSPzM2.js";import{S as W}from"./Separator-CZyH1MxL.js";import{H as v}from"./Heading-cV1cAfm3.js";import{S as H}from"./Section-CLAa2zTx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-S4fYrZHa.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./clsx-B-dksMZM.js";import"./index-BMdlDBjA.js";import"./PopoverTrigger-DazYzOz-.js";import"./OverlayTrigger-D5LrxbZh.js";import"./utils-Cy-A-nlV.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BBlidXZz.js";import"./useFocusable-OFlS-6qe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-COi_Rbo6.js";import"./usePress-CTrgc7uI.js";import"./FocusScope-67rE8EpU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-n83dATVM.js";import"./VisuallyHidden-D76woJCP.js";import"./context-D6owL0WJ.js";import"./useSelector-CuLBdmz2.js";import"./Action-D09RsEKV.js";import"./Text-DabHCseC.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dh5WnJTs.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BUZKcXPP.js";import"./IconWarning-BHhVudlO.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-DR5xXegF.js";import"./Header-CXhviMrv.js";import"./Separator-CWkByXs_.js";import"./useMenuTrigger-D4xBCXDE.js";import"./SelectionManager-Dy9tah2i.js";import"./useEvent-CpHTlQWK.js";import"./useDescription-BDysBDpW.js";import"./LoadingSpinner-JoUWEwvb.js";import"./Button-DrQgql3X.js";import"./Activity-Bj6QwKZx.js";const We={title:"Actions/ContextMenu",component:n,render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(W,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},l={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{selectionMode:"navigation",...r},e.createElement(H,null,e.createElement(v,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(K=l.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const ve=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator","WithContextMenuSection"];export{o as Default,m as MultipleSelection,a as SingleSelection,l as WithContextMenuSection,i as WithLinks,w as WithSeparator,ve as __namedExportsOrder,We as default};
