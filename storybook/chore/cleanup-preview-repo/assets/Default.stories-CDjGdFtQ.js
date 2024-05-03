import{R as e}from"./index-BwDkhjyp.js";import{C as i,$ as E,M as t}from"./index-Cn-1BwI3.js";import"./index-Cc1SKcvR.js";import{B as x}from"./Button-C62AkZmc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BLFgELHw.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./index-D-AgJkDe.js";import"./useFocusable-D_aGyKeu.js";import"./utils-XD1Mdlza.js";import"./usePress-z0VJBnEb.js";import"./FocusScope-De_7glvQ.js";import"./useEvent-G_vqJ8Z6.js";import"./Dialog-CR-xtpFq.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CbNQgDoo.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CmZ4cjgJ.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DyJW6laa.js";import"./VisuallyHidden-Jdk5bsYG.js";import"./Collection-CGt-Hk0C.js";import"./Popover-BrzTAAvE.js";import"./Text-C9sPPhMf.js";import"./IconApp-iqYUtoxJ.js";import"./IconWarning-jqA-R3DE.js";import"./index-DxJw5mhE.js";import"./Text-Cl0wCOtv.js";import"./index-dhKWstfL.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./LoadingSpinner-4VZ_XG4P.js";import"./Button-CTl9mfdD.js";const oe={title:"Actions/ContextMenu",component:i,render:a=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(i,{...a},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:a=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(i,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...a},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
