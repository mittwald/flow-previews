import{j as r}from"./iframe-BsKdyUUo.js";import{B as o}from"./Button-QyPw2-70.js";import{A as T}from"./ActionGroup-deMRafWY.js";import{L as s,a as y}from"./LightBox-DdX2NW-g.js";import{I as m}from"./Image-CGYLzPm5.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-BNNa1TWi.js";import{u as w}from"./DialogTriggerView-u1JI-dwi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./Text-DM7V5ibr.js";import"./browser-kgZUWjhe.js";import"./EmulatedBoldText-VybBTGHf.js";import"./Text-BeFIQxaH.js";import"./utils-DeHCGthq.js";import"./LoadingSpinner-pItv9nzE.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./context-NhbPwiu7.js";import"./Button-DLwd4SNh.js";import"./ProgressBar-C4DAHdKI.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BowSekYU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./useFocus-BvYTyo5a.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B4-8kfZ1.js";import"./useStatic-BdSd4Y0O.js";import"./Overlay-CLYRtEj1.js";import"./Dialog-CR91adc_.js";import"./RSPContexts-DxWJbArM.js";import"./OverlayArrow-CO3Q51Tz.js";import"./useControlledState-BMR5C57X.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./Group-Dk0IJ4vM.js";import"./SearchField-DHm90Ej9.js";import"./FieldError-CHLtNaA2.js";import"./Form-DEii-ghQ.js";import"./useTextField-BDfBPM-X.js";import"./useFormReset-BCcZ866S.js";import"./TextField-DVuykaoA.js";import"./useEvent-Bb929JbC.js";import"./SelectionManager-bkmIMDCG.js";import"./useCollator-vsGgvR80.js";import"./FocusScope-r24VL_U3.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./DivView-Bl-xHeCG.js";import"./ButtonView-y6eV8uKB.js";import"./context-LgmDjMSt.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
