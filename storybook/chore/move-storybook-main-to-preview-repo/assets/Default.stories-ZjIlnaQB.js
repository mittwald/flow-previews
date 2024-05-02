import{R as e}from"./index-BwDkhjyp.js";import{C as i,$ as E,M as t}from"./index-BZPBLnuf.js";import"./index-I3tg1ZlH.js";import{B as x}from"./Button-B7Tl_OC2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Dglj5cqB.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-CpKCd2Kn.js";import"./useFocusable-DLPCeG8s.js";import"./utils-DDqfTkhb.js";import"./usePress-CJfWxQWU.js";import"./FocusScope-DR0UY-fH.js";import"./useEvent-CbpoCiOF.js";import"./Dialog-BB9pmluw.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CTItOegv.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-m5PKJKvJ.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DNsw1HUe.js";import"./VisuallyHidden-BNJtAZAq.js";import"./Collection-DnI787mR.js";import"./Popover-BcxlGwlN.js";import"./Text-Ck09bxUA.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DWDcGR9n.js";import"./index-ClBBAz8G.js";import"./Text-CME0CjX1.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-BD6r3owA.js";import"./Button-EahR66DC.js";const oe={title:"Actions/ContextMenu",component:i,render:a=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(i,{...a},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:a=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(i,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...a},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(h=m.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const ne=["Default","SingleSelection","MultipleSelection","WithLinks"];export{r as Default,n as MultipleSelection,o as SingleSelection,m as WithLinks,ne as __namedExportsOrder,oe as default};
