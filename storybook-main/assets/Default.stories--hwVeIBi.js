import{j as r}from"./iframe-CbwCPhjt.js";import{B as o}from"./Button-nOGOhIJH.js";import{A as T}from"./ActionGroup-DAXGCV3G.js";import{L as s,a as y}from"./LightBox-lAgemac1.js";import{I as m}from"./Image-Dnh43guZ.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-B6sLHyS3.js";import{u as w}from"./DialogTriggerView-UbA78170.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./Text-Ci_Uq_zV.js";import"./browser-BDcX4-kr.js";import"./EmulatedBoldText-CeiCaZ9N.js";import"./Text-Bo_2a3q0.js";import"./utils-DoFRGSuI.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./context-DGTw6Ntc.js";import"./Button-DQX_QvYf.js";import"./ProgressBar-Boef7pj0.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZwWLEEp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B0jvTCtV.js";import"./useFocus-BeWrqrnh.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B5o4vquU.js";import"./useStatic-CNtjMAIH.js";import"./Overlay-BeXc0FjD.js";import"./Dialog-BLGTqvvx.js";import"./RSPContexts-CJnpvChB.js";import"./OverlayArrow-CBC8qT36.js";import"./useControlledState-vYcp2K1J.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./Group-DlZG06gX.js";import"./SearchField-WLounB_6.js";import"./FieldError-WwADG8x9.js";import"./Form-8EM0qQv2.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./TextField-5B8lnaMV.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./useCollator-CAu6FifQ.js";import"./FocusScope-CmGH9Vi6.js";import"./VisuallyHidden-DvTk0uSk.js";import"./DivView-BArOfYzi.js";import"./ButtonView-COxzVi6f.js";import"./context-zAWxkEGj.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
