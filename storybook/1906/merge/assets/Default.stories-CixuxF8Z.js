import{j as r}from"./iframe-S6a6IBGW.js";import{B as o}from"./Button-B33IEcV3.js";import{A as l}from"./ActionGroup-DgNfA0Me.js";import{L as s,a as d}from"./LightBox-TzNMBuHR.js";import{I as m}from"./Image-C8_H4hBq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-D0GzEl3K.js";import{u as h}from"./useOverlayController-D5w3iZSN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./Text-CLecf1p6.js";import"./browser-C6w_OiT9.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./utils-B8ercvf4.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./remote-CCjzztUh.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BUR3MtQf.js";import"./useFocus--oJxMCZo.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./dynamic-wFxxwS8T.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./useStatic-DJ0VynuZ.js";import"./OverlayTrigger-4uRsw7zJ.js";import"./Dialog-C_QuIxo5.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./useControlledState-BHa0sYDq.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./VisuallyHidden-BN0xrgav.js";import"./context-DRdj7qWz.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./DialogTriggerView-CjaRjk5V.js";import"./Overlay-CvokbPF3.js";import"./DivView-B4pt4mA3.js";import"./ButtonView-Dfq4uPzV.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
