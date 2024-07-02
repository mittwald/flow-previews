import{R as e}from"./index-uCp2LrAq.js";import{C as n,a as l,M as t}from"./ContextMenuTrigger-C2y7UYa8.js";import{B as s}from"./Button-CKjWx2QM.js";import{S as W}from"./Separator-WwpLu8pv.js";import{H as v}from"./Heading-BTmWJFHE.js";import{S as H}from"./Section-C8kIh9p2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-d9koHm8X.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-6KT5KTFb.js";import"./OverlayTrigger-PMv2-p4P.js";import"./utils-CRveUs4Q.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DobB3-tX.js";import"./useFocusable-DIY1EfD0.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./FocusScope-DRFNwxZB.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-BwH5wu93.js";import"./context-DGHf5otc.js";import"./useSelector-BUIORffs.js";import"./Action-DH-nwfeD.js";import"./Text-CzfDsx2u.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-BxG67LRB.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Separator-D-FRkinj.js";import"./useMenuTrigger-BGlgYenP.js";import"./SelectionManager-ADoBXYhu.js";import"./useEvent-YC2gB4eD.js";import"./useDescription-DkXZ8A7g.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";import"./Activity-DYbiBj6P.js";const Be={title:"Actions/ContextMenu",component:n,render:r=>e.createElement(l,null,e.createElement(s,null,"Trigger"),e.createElement(n,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(l,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(l,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(W,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},d={render:r=>e.createElement(l,null,e.createElement(s,null,"Trigger"),e.createElement(n,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(H,null,e.createElement(v,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(T=w.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var y,K,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu defaultSelectedKeys={["https://www.mittwald.de"]} selectionMode="navigation" {...props}>
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
}`,...(B=(K=d.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const We=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator","WithContextMenuSection"];export{o as Default,m as MultipleSelection,a as SingleSelection,d as WithContextMenuSection,i as WithLinks,w as WithSeparator,We as __namedExportsOrder,Be as default};
