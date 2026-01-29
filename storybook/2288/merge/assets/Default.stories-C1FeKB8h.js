import{j as r}from"./iframe-Bj8CIgLy.js";import{B as o}from"./Button-b_60CJFp.js";import{A as l}from"./ActionGroup-C-nWA-s8.js";import{L as s,a as d}from"./LightBox-Cl10T3Rz.js";import{I as m}from"./Image-CBJhGe2x.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-KvO0562x.js";import{u as h}from"./useOverlayController-1hyOtPEK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./Text-BbFFlg8m.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./utils-D41FTHpf.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./remote-ChNLl0N8.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./dynamic-DEq-wVmB.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./useStatic-BJFVwiuT.js";import"./OverlayTrigger-BDKA1kYb.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./context-CihUwagI.js";import"./OverlayContextProvider-CVeWPhf8.js";import"./DialogTriggerView-DmeO6kRm.js";import"./Overlay-B_Uf6VPT.js";import"./DivView-CDIp3Iid.js";import"./ButtonView-DoUQTLRD.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
