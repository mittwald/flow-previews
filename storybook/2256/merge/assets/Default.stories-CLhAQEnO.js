import{j as r}from"./iframe-ICCBaEZ0.js";import{B as o}from"./Button-BPUjkcWl.js";import{A as l}from"./ActionGroup-Cyu4G9Rw.js";import{L as s,a as d}from"./LightBox-qE_xQd2S.js";import{I as m}from"./Image-Bd3OW3OU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-DNTau7lk.js";import{u as h}from"./useOverlayController-CTkEh9O7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./Text-wotACWdr.js";import"./browser-BXZux_wF.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./utils-Bdyed02U.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./remote-CrBsxa38.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./dynamic-D4nz3o_q.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./OverlayTrigger-CZVSbWDN.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./context-CFn3lEGQ.js";import"./OverlayContextProvider-DutSGNyV.js";import"./DialogTriggerView-CX_Wmf8Y.js";import"./Overlay-Dd5bKsRq.js";import"./DivView-5G_D8wOU.js";import"./ButtonView-BszEJvVk.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
