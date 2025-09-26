import{j as r}from"./iframe-RErHS549.js";import{B as o}from"./Button-ICc2foaw.js";import{A as T}from"./ActionGroup-Amtb79Gu.js";import{L as s,a as y}from"./LightBox-B4u8p-rr.js";import{I as m}from"./Image-CYSQ5h-r.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-BaoYyhFJ.js";import{u as w}from"./DialogTriggerView-DWnrIBjB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./Text-CPoMhumh.js";import"./browser-32b-cNga.js";import"./EmulatedBoldText-JQA-sSfV.js";import"./Text-CT26T-mx.js";import"./utils-CdmgfGZ7.js";import"./LoadingSpinner-BMdPihtW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./context-BoCUnuIe.js";import"./Button-CLgYLV7x.js";import"./ProgressBar-BrVHyxaL.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-ky1cKMBf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Qq9By8Rc.js";import"./useFocus-JMpVLlR6.js";import"./useFocusRing-DWSWsOVe.js";import"./useFocusable-D3_285Zs.js";import"./dynamic-CQ7OwhYg.js";import"./getActionGroupSlot-Bne6ZDFO.js";import"./useStatic-BxcMFVdb.js";import"./Overlay-ClI1jIVN.js";import"./ClearPropsContextView-0a_DlM-r.js";import"./useControlledState-D306zaQt.js";import"./ButtonView-Df1iN2s8.js";import"./context-BXN4gM-G.js";import"./RSPContexts-B8Y67nNQ.js";import"./FocusScope-CM6IwZZ2.js";import"./useCollator-BIKtW1yK.js";import"./VisuallyHidden-L1E0nJWV.js";import"./Collection-C5b3lBlU.js";import"./CollectionBuilder-CejpnVI0.js";import"./Separator-Bss8HbVG.js";import"./Group-Co5LQX_Y.js";import"./SearchField-tD8L5lUZ.js";import"./FieldError-CXwIJwJV.js";import"./Form-CN0G9X2_.js";import"./useTextField-CpUnEOqT.js";import"./useFormReset-8mkS99ko.js";import"./TextField-BRNj-bGL.js";import"./useEvent-CfCGwGWG.js";import"./SelectionManager-Bhum3Vdb.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("LightBox");
    return <>
        <Button onPress={controller.open}>Open LightBox</Button>
        <LightBox {...props} controller={controller}>
          <Image src={dummyText.imageSrc} />
          <ActionGroup>
            <Button>
              <IconDownload />
            </Button>
            <Button>
              <IconDelete />
            </Button>
          </ActionGroup>
        </LightBox>
      </>;
  }
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var L,S,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
