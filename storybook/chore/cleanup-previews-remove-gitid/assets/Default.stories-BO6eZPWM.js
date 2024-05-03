import{R as e}from"./index-BwDkhjyp.js";import{C as a,$ as E,M as t}from"./index-DbrZWI7Y.js";import"./index-CkqFYb2z.js";import{B as x}from"./Button-Cq_ZV_AH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B9DLSnGg.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-DybNggUs.js";import"./useFocusable-MoxYh-uU.js";import"./utils-CFgm1FN7.js";import"./usePress-MPJq79ab.js";import"./FocusScope-rBNftQuu.js";import"./useEvent-bUe--On6.js";import"./Dialog-DzxZJdi6.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-B4XMciY_.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DihPW0Td.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-B4xl8Q9B.js";import"./VisuallyHidden-nkBW5OaY.js";import"./Collection-DC4Wq3pw.js";import"./Popover-C-oWjOfV.js";import"./Text-lHr3U40N.js";import"./IconApp-JyWhxCMW.js";import"./IconWarning-C_kJLkLV.js";import"./index-C54xbiei.js";import"./Text-CJTQbeNn.js";import"./index-dhKWstfL.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-CMA-K2VV.js";import"./Button-BK2AeOPB.js";const ne={title:"Actions/ContextMenu",component:a,render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{...i},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...i},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
