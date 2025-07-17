import{j as r}from"./iframe-ioB74BFE.js";import{B as o}from"./Button-MpugPYzI.js";import{A as T}from"./ActionGroup-xgvliJmO.js";import{L as m,a as y}from"./LightBox-Cni5UBYm.js";import{I as s}from"./Image-649sdUSq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DcmAhB0m.js";import{u as w}from"./DialogTriggerView-CvOFscXk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./Text-BZaQwICB.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./Text-CCXZaIsU.js";import"./utils-B4cCkl7w.js";import"./LoadingSpinner-DAUxEQn_.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./context-BPL8pm8m.js";import"./Button-C3ElHjZf.js";import"./ProgressBar-6K_Q5ytM.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CB1mDCyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3I07Rsr.js";import"./useFocus-Cm5D2sPa.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocusable-2c5mTAR9.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CF5EeO16.js";import"./useStatic-BxLAdQVw.js";import"./Overlay-BE7ImjF8.js";import"./Dialog-CftsoPvf.js";import"./RSPContexts-CvEKqGkH.js";import"./OverlayArrow-BGE95OS1.js";import"./useControlledState-DPunIX8S.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./Input-Bztt3-Ug.js";import"./SearchField-D30c1-ND.js";import"./FieldError-Z5j2ND32.js";import"./Form-u9b0IMfB.js";import"./Group-DEqMnOwE.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./TextField-DC2JuRaU.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./useCollator-CLy1qn58.js";import"./FocusScope-Dmal2fI9.js";import"./VisuallyHidden-BOO0yHnw.js";import"./DivView-C5mkbepe.js";import"./ButtonView-CrLDH0sU.js";import"./context-hIhIfxI4.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
