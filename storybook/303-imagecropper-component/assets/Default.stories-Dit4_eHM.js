import{R as e}from"./index-Cs7sjTYM.js";import{F as i}from"./FileDropZone-CT-fX184.js";import{T as a}from"./Text-U6fXasfV.js";import{L as T}from"./LabeledValue-Bjxbi9jA.js";import{L as x}from"./Label-LjpPhEpK.js";import{S as L}from"./Section-DDZL8g9_.js";import{u as j}from"./useFileController-CCfEqIEM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-DXVDIrTY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./IconApp-BvR14QOm.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./IconWarning-CKNdQ7e9.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvQ8syNA.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Button-BebB4Pfr.js";import"./utils-BwYH5X3X.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./useFocusRing-if03xCoO.js";import"./usePress-1fQJjpyE.js";import"./IllustratedMessage-BCsfzvzH.js";import"./Heading-TK7j1OMP.js";import"./Heading-eVsuDLmW.js";import"./RSPContexts-BseA8goh.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dd84vsje.js";import"./FocusScope--STy3lDT.js";import"./useDescription-BalOtq5q.js";import"./VisuallyHidden-BWHYRTKp.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";import"./Input-8WbdzIVX.js";import"./PressResponder-CCvTmYWN.js";import"./useSelector-DDdDwEvg.js";const Ee={title:"Upload/FileDropZone",component:i,parameters:{controls:{exclude:["className","controller"]}},render:n=>{const r=j(),t=r.useFiles();return e.createElement(L,null,e.createElement(i,{...n,controller:r}),e.createElement(T,null,e.createElement(x,null,"Selected files"),e.createElement(a,null,t.length>0?t.map(m=>m.name).join(", "):"-")))}},o={},l={args:{allowsMultiple:!0}},p={args:{acceptedFileTypes:["image/png","image/jpeg"]},render:n=>{const r=j(),t=r.useFiles();return e.createElement(L,null,e.createElement(i,{...n,controller:r},e.createElement(a,null,"Accepted file types are jpg and png.")),e.createElement(T,null,e.createElement(x,null,"Selected files"),e.createElement(a,null,t.length>0?t.map(m=>m.name).join(", "):"-")))}};var s,c,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,f,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    allowsMultiple: true
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var F,E,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    acceptedFileTypes: ["image/png", "image/jpeg"]
  },
  render: props => {
    const controller = useFileController();
    const files = controller.useFiles();
    return <Section>
        <FileDropZone {...props} controller={controller}>
          <Text>Accepted file types are jpg and png.</Text>
        </FileDropZone>
        <LabeledValue>
          <Label>Selected files</Label>
          <Text>
            {files.length > 0 ? files.map(f => f.name).join(", ") : "-"}
          </Text>
        </LabeledValue>
      </Section>;
  }
}`,...(S=(E=p.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Se=["Default","AllowsMultiple","AcceptedFileTypes"];export{p as AcceptedFileTypes,l as AllowsMultiple,o as Default,Se as __namedExportsOrder,Ee as default};
