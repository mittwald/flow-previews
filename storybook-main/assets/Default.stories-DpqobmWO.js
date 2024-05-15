import{R as e}from"./index-uCp2LrAq.js";import{C as a,$ as E,M as t}from"./index-VV7y5rlT.js";import"./index-tTUbIpLW.js";import{B as x}from"./Button-DonSouXV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CvYijzQN.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./index-yGv1oPtN.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./usePress-GzZvjGFA.js";import"./FocusScope-DsV13NlO.js";import"./useEvent-JfVSFEa6.js";import"./Dialog-CUn0EhxI.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CblaC-Mh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-LW5SiPO7.js";import"./VisuallyHidden-ORZgQdGI.js";import"./Collection-BDIHGFnI.js";import"./Popover-IRcdiENY.js";import"./Text-5ecqfi7M.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./index-ZGtVZsDz.js";import"./Text-CRgtz34V.js";import"./index-DePfloUh.js";import"./Wrap-DQq6jo70.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./LoadingSpinner-BHiCCzsu.js";import"./Button-r8qbaGYD.js";const ne={title:"Actions/ContextMenu",component:a,render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{...i},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},r={},o={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},n={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:i=>e.createElement(E,null,e.createElement(x,null,"Trigger"),e.createElement(a,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...i},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
