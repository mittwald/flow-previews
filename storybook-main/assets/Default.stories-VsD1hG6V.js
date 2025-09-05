import{j as r}from"./iframe-BGMqIB5E.js";import{B as o}from"./Button-BFNUJ6Pn.js";import{A as T}from"./ActionGroup-COdJeeHd.js";import{L as s,a as y}from"./LightBox-C660WYUu.js";import{I as m}from"./Image-00WqPElF.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-mDCCMBSQ.js";import{u as w}from"./DialogTriggerView-DGq9KeX3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C4OPXOmf.js";import"./mergeRefs-CgaIg7wx.js";import"./index-C87vJZqt.js";import"./Text-CM0LFMBt.js";import"./browser-BSs9Ljwu.js";import"./EmulatedBoldText-fvHudQk4.js";import"./Text-BM4jLh1h.js";import"./utils-DSJ2fpWd.js";import"./LoadingSpinner-CFmqrQ7U.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B2NVTRrQ.js";import"./context-C9jpkMPH.js";import"./Button-C2r7IuQP.js";import"./ProgressBar-D-EmigOC.js";import"./Label-CQRoenrp.js";import"./Hidden-BlXCfqaN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DEWKGCco.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DciW20d_.js";import"./useFocus-DimIAfL3.js";import"./useFocusRing-Ch_kecTs.js";import"./useFocusable-DsCZ72OQ.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CZh9r0M7.js";import"./useStatic-ERGKGHTj.js";import"./Overlay-D7C8YAnw.js";import"./Dialog-hZ8yeQT4.js";import"./RSPContexts-W4yDCNDw.js";import"./OverlayArrow-BCKhjmtK.js";import"./useControlledState-CyFiZ_AX.js";import"./Collection-CCbdzQqw.js";import"./CollectionBuilder-CvszDNI1.js";import"./Separator-DQBycTyN.js";import"./Group-Cwbp1Rxy.js";import"./SearchField-BGYYvbmv.js";import"./FieldError-ClTlFvX2.js";import"./Form-DIhLFb81.js";import"./useTextField-0bIYzpQ5.js";import"./useFormReset-CGt1BQBC.js";import"./TextField-B67QJCcl.js";import"./useEvent-CUMNl0wi.js";import"./SelectionManager-Ci5onPc0.js";import"./useCollator-CDcEI0Bz.js";import"./FocusScope-DJHRiFNO.js";import"./VisuallyHidden-C_NToHIT.js";import"./ButtonView-TPA-ggPr.js";import"./context-FbZS6Lb6.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
