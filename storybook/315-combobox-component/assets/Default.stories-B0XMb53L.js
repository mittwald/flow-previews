import{R as e}from"./index-uCp2LrAq.js";import{C as l,$ as d,M as t}from"./MenuItem-BQ_UzLcm.js";import{B as s}from"./Button-kgu6ukff.js";import{S as y}from"./Separator-DA-sXNaF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CVx7Nq_O.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Popover-DHpMNNyD.js";import"./Dialog-DkqyJwif.js";import"./utils-VMHz66w6.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CxiI-V8Q.js";import"./useFocusable-6uy--nFO.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DI1g9pTm.js";import"./FocusScope-Bl0UA8jw.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-Dg6JcKHx.js";import"./IconApp-Bpay03mZ.js";import"./IconWarning-CbiRLlNJ.js";import"./Text-KrSbjq4H.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-CV99Jc8q.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-bm5IiiHI.js";import"./Header-DRa9GF5F.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BVYhIw4u.js";import"./LoadingSpinner-InQx5M66.js";import"./Button-D3p9ry0o.js";const se={title:"Actions/ContextMenu",component:l,render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(l,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},n={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},a={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},i={render:r=>e.createElement(d,null,e.createElement(s,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(y,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var w,p,c;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(I=m.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var C,b,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(b=i.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const we=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator"];export{o as Default,a as MultipleSelection,n as SingleSelection,m as WithLinks,i as WithSeparator,we as __namedExportsOrder,se as default};
