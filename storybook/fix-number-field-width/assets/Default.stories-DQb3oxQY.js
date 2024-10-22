import{R as e}from"./index-Cs7sjTYM.js";import{C as o,a as l,M as t}from"./ContextMenuTrigger-Dcy4M463.js";import{B as p}from"./Button-CE824h2d.js";import{S as D}from"./Separator-CjN-M4fA.js";import{H as L}from"./Heading-CuXfARmX.js";import{S as R}from"./Section-CQTk1giO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-Bg40pdZw.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Popover-BCLqnUPh.js";import"./OverlayTrigger-CRY-wfmv.js";import"./utils-Cd8r7pc9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Cn8oVN-C.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./Action-BV-Ylmd3.js";import"./Text-DbnY-2dT.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-CfieAnFV.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-BRFAoZkT.js";import"./SelectionManager-CLd9IAHF.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-GQF4xS8_.js";import"./LoadingSpinner-CvKk9A5c.js";import"./Button-B89OlhFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Heading-CG14-WVD.js";const je={title:"Actions/ContextMenu",component:o,render:r=>e.createElement(l,null,e.createElement(p,null,"Trigger"),e.createElement(o,{...r},e.createElement(t,{id:"item1"},"Item 1"),e.createElement(t,{id:"item2"},"Item 2"),e.createElement(t,{id:"item3"},"Item 3"))),parameters:{controls:{exclude:["defaultOpen","selectionMode","defaultSelectedKeys"]}}},n={},a={args:{defaultOpen:!0,selectionMode:"single",defaultSelectedKeys:["item2"]}},m={args:{defaultOpen:!0,selectionMode:"multiple",defaultSelectedKeys:["item2","item3"]}},i={render:r=>e.createElement(l,null,e.createElement(p,null,"Trigger"),e.createElement(o,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},w={render:r=>e.createElement(l,null,e.createElement(p,null,"Trigger"),e.createElement(o,{defaultSelectedKeys:["https://www.mittwald.de"],selectionMode:"navigation",...r},e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(D,null),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com"))),args:{defaultOpen:!0}},s={render:r=>e.createElement(l,null,e.createElement(p,null,"Trigger"),e.createElement(o,{selectionMode:"navigation",...r},e.createElement(R,null,e.createElement(L,null,"Websites"),e.createElement(t,{href:"https://www.mittwald.de",id:"https://www.mittwald.de"},"www.mittwald.de"),e.createElement(t,{href:"https://www.google.de"},"www.google.de"),e.createElement(t,{href:"https://www.adobe.com"},"www.adobe.com")))),args:{defaultOpen:!0}},d={args:{width:400}};var c,u,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,M,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "single",
    defaultSelectedKeys: ["item2"]
  }
}`,...(f=(M=a.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var S,E,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    selectionMode: "multiple",
    defaultSelectedKeys: ["item2", "item3"]
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var x,C,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var T,O,W;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(O=w.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var y,K,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(K=s.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var v,H,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    width: 400
  }
}`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const qe=["Default","SingleSelection","MultipleSelection","WithLinks","WithSeparator","WithContextMenuSection","CustomWidth"];export{d as CustomWidth,n as Default,m as MultipleSelection,a as SingleSelection,s as WithContextMenuSection,i as WithLinks,w as WithSeparator,qe as __namedExportsOrder,je as default};
