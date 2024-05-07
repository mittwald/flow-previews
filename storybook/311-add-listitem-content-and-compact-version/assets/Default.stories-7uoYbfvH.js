import{R as e}from"./index-BwDkhjyp.js";import{C as a,$ as E,M as t}from"./index-CG2PcncX.js";import"./index-DNh5nAxU.js";import{B as x}from"./Button-M_rcOT4T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B3-LTTWn.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DDlP1Cgs.js";import"./useFocusable-Ddi47NB9.js";import"./utils-D7InqjV7.js";import"./usePress-BZaguEpt.js";import"./FocusScope-4iKrC6rw.js";import"./useEvent-BkyXxHlT.js";import"./Dialog-CeEUt42U.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BBzZ3ne4.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DFbr5jK-.js";import"./VisuallyHidden-DV81ojJ5.js";import"./Collection-D_WRBQDn.js";import"./Popover-C71TfZyc.js";import"./Text-nCCH5eH7.js";import"./IconApp-D-kcT16p.js";import"./IconWarning-D9rAmEP3.js";import"./index-C0kgWbNG.js";import"./Text-B0HvyfcO.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-BMSUnczS.js";import"./Button-tv1ba3Dw.js";const ne={title:"Actions/ContextMenu",component:a,render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{...i},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...i},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "single",
    defaultSelectedKeys: ["item2"]
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var w,g,f;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "multiple",
    defaultSelectedKeys: ["item2", "item3"]
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var M,h,S;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(S=(h=m.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const me=["Default","SingleSelection","MultipleSelection","WithLinks"];export{r as Default,n as MultipleSelection,o as SingleSelection,m as WithLinks,me as __namedExportsOrder,ne as default};
