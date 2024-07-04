import{R as e}from"./index-BwDkhjyp.js";import{C as n,a as d,M as t}from"./ContextMenuTrigger-BuF8irH6.js";import{B as s}from"./Button-CGYujOOx.js";import{S as W}from"./Separator-rF9M-VlY.js";import{H as v}from"./Heading-CYnWOiGh.js";import{S as H}from"./Section-DhcKGvwf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-CAjBRoKS.js";import"./flowComponent-pf1ZT_RA.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./PopoverTrigger-DfYVWCk8.js";import"./OverlayTrigger-CcMw9uE5.js";import"./utils-_0I8Kdxf.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTAo9QmE.js";import"./useFocusable-Di1f8vLw.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CS6YBkA6.js";import"./usePress-CipJ8IEr.js";import"./FocusScope-h9apr_hQ.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-h5MY4Xo1.js";import"./VisuallyHidden-CctDujdB.js";import"./context-ZkthLU-2.js";import"./useSelector-Pyc-engy.js";import"./Action-DJglBR0x.js";import"./Text-OHQxmlAI.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-YaHrFsZr.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Collection-BUjDbYEY.js";import"./Header-CClMDSoE.js";import"./Separator-DAfHJ8px.js";import"./useMenuTrigger-I7P_BxpU.js";import"./SelectionManager-C8SlKI3Z.js";import"./useEvent-BSX0jSmh.js";import"./useDescription-CvuWAMaA.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./Button-j9P20aTv.js";import"./Activity-DsHdYeGi.js";const We={title:"Actions/ContextMenu",component:n,render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(W,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},l={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(n,{selectionMode:"navigation",...r},e.createElement(H,null,e.createElement(v,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
