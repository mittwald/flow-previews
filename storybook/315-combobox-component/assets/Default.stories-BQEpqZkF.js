import{R as e}from"./index-uCp2LrAq.js";import{C as l,a as s,M as t}from"./ContextMenuTrigger-CIcfoFu4.js";import{B as d}from"./Button-C83TB_Br.js";import{S as y}from"./Separator-BevloPyC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cgwf_8Pz.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./PopoverTrigger-DfcoxKbn.js";import"./Action-BZHYLJuU.js";import"./Text-45YGqDyb.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-CV99Jc8q.js";import"./utils-VMHz66w6.js";import"./OverlayTrigger-Bw1ONM8y.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CzGgKwTX.js";import"./useFocusable-BnMUMntI.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BwUp6-ib.js";import"./FocusScope-CWd9kKtL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-C35j07Di.js";import"./IconApp-Bvp8_lYy.js";import"./IconWarning-B_x1GzbP.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-RpYJwiSj.js";import"./Header-CyVwCXR-.js";import"./SelectionManager-1UU5Js-l.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BfUCqNhO.js";import"./LoadingSpinner-Bqf3v_Ad.js";import"./Button-DEqt5BuM.js";const ue={title:"Actions/ContextMenu",component:l,render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},o={},n={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},a={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},m={render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},i={render:r=>e.createElement(s,null,e.createElement(d,null,"Trigger"),e.createElement(l,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(y,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}};var w,p,c;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const ge=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator"];export{o as Default,a as MultipleSelection,n as SingleSelection,m as WithLinks,i as WithSeparator,ge as __namedExportsOrder,ue as default};
