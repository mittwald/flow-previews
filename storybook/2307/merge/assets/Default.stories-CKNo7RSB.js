import{j as r}from"./iframe-XxUhdOIM.js";import{B as o}from"./Button-CGELadBW.js";import{A as l}from"./ActionGroup-CpnIRFBl.js";import{L as s,a as d}from"./LightBox-ZN-jjZSc.js";import{I as m}from"./Image-BaNx1Pph.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-HmbpUhBv.js";import{u as h}from"./useOverlayController-BEKeYHy5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./Text-Cnwgd4MT.js";import"./browser-DmOXQPuo.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./utils-BCq0Cvc3.js";import"./LoadingSpinner-eRWTE9TH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./remote-6r6BNiZ9.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BmkrUKzN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C6bNQEHg.js";import"./useFocus-EZLK-muK.js";import"./useFocusRing-B4cqEnOC.js";import"./useFocusable-BMaOCfpv.js";import"./dynamic-DlcFrL20.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./useStatic-BtKbO9c7.js";import"./OverlayTrigger-B9bnxvcN.js";import"./Dialog-Cu17hg-L.js";import"./RSPContexts-CtuUzpub.js";import"./OverlayArrow-4i6vqPwo.js";import"./useControlledState-BjbUFAiJ.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./useCollator-C4FEsSYx.js";import"./FocusScope-Bd3CxSOo.js";import"./VisuallyHidden-BH7c3L8h.js";import"./context-DxgidNIJ.js";import"./OverlayContextProvider-DKE9AqME.js";import"./DialogTriggerView-C7kmpAG-.js";import"./Overlay-CLKBiVpB.js";import"./DivView-DexXqgYT.js";import"./ButtonView-BOkSZ7Ty.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...n.parameters?.docs?.source}}};const Lr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Lr as __namedExportsOrder,fr as default};
