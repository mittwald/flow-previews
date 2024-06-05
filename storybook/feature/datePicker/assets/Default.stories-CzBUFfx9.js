import{R as e}from"./index-uCp2LrAq.js";import{C as l,a as s,M as t}from"./ContextMenuTrigger-C4l5bo88.js";import{B as d}from"./Button-ulZ4Jbdu.js";import{S as y}from"./Separator-DwUaIUI6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-wUaQYyEI.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-CJjKvP3U.js";import"./Action-Benk5eLT.js";import"./Text-CkBcFDZm.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-PvbfzXMy.js";import"./utils-CblGkSXh.js";import"./OverlayTrigger-CZl3hatG.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DFzBEdBA.js";import"./useFocusable-SxMTR87z.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CELuk77o.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BPPmAJfG.js";import"./FocusScope-Be1QW02A.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CQbC_8pq.js";import"./IconApp-Cxjf7gPB.js";import"./IconWarning-2GqJK2gc.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-B_ssJImm.js";import"./Header-BW0XyIS8.js";import"./SelectionManager-Ca2csQpH.js";import"./useEvent-BUAZZNDw.js";import"./useCollator-fUoTTx-r.js";import"./Separator-DNy1xdqg.js";import"./LoadingSpinner-CTgdLL_K.js";import"./Button-EGpG9HXG.js";const ge={title:"Actions/ContextMenu",component:l,render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},n={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},a={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},i={render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(y,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var w,p,c;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "single",
    defaultSelectedKeys: ["item2"]
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,M,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "multiple",
    defaultSelectedKeys: ["item2", "item3"]
  }
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,I,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(I=m.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,O,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const fe=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator"];export{o as Default,a as MultipleSelection,n as SingleSelection,m as WithLinks,i as WithSeparator,fe as __namedExportsOrder,ge as default};
