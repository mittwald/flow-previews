import{j as r}from"./iframe-DOyiym2O.js";import{B as o}from"./Button-Dhe1yso8.js";import{A as T}from"./ActionGroup-DmbQXpeM.js";import{L as s,a as y}from"./LightBox-CIX2t9px.js";import{I as m}from"./Image-Da3OUoYi.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DM4ryx1N.js";import{u as w}from"./DialogTriggerView-D4vNWmaM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./Text-DNTWXR5k.js";import"./browser-Cgs4Q9ZH.js";import"./EmulatedBoldText-npPiHGdu.js";import"./Text-Db2PSOfB.js";import"./utils-p6TFjs22.js";import"./LoadingSpinner-egM8r-vP.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./context-DNMunrTn.js";import"./Button-lDf0mDtZ.js";import"./ProgressBar-DwMxj3po.js";import"./Label-gKLM5Ku1.js";import"./Hidden-BJphBd81.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DjTxglfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-U0v1W6r8.js";import"./useFocus-CRPlmaKe.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocusable-CF6DJuo2.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Cqvvv9Ww.js";import"./useStatic-BqyjIn97.js";import"./Overlay-C6cSwK3Z.js";import"./Dialog-CZhNJUBb.js";import"./RSPContexts-B59Hd7Xy.js";import"./OverlayArrow-DUzOkRZT.js";import"./useControlledState-CTI65F-h.js";import"./Collection-BIknmaaI.js";import"./CollectionBuilder-MitjRKQw.js";import"./Separator-DGoHVraj.js";import"./Group-BsZagJvP.js";import"./SearchField-B3q2UkIK.js";import"./FieldError-e9k0WgIs.js";import"./Form-D7si9Qjh.js";import"./useTextField-CDeIHIKC.js";import"./useFormReset-D392FMdG.js";import"./TextField-DJtp4_Iq.js";import"./useEvent-DhVC8KrJ.js";import"./SelectionManager-BoGC0shM.js";import"./useCollator-BKrnVFMg.js";import"./FocusScope-BYeNXI2v.js";import"./VisuallyHidden-DEjaPn8D.js";import"./DivView-Bi_F07HR.js";import"./ButtonView-DnvcBrIh.js";import"./context-y7iGkUpV.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
