import{j as r}from"./iframe-CF9WEugj.js";import{B as o}from"./Button-Dt7_Feft.js";import{A as l}from"./ActionGroup-C2mwfdOU.js";import{L as s,a as d}from"./LightBox-Bf8OBsem.js";import{I as m}from"./Image-BNBZ_Z0k.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-DXWyAVP8.js";import{u as h}from"./useOverlayController-CbGkJu3W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./Text-Czdsn8RZ.js";import"./browser-CV2qUG2E.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./utils-B4BZttt0.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./remote-DKS26xip.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLNiG6M.js";import"./useFocus-DZR1guyz.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocusable-CSB6sBEJ.js";import"./dynamic-DQFpeFdM.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./useStatic-De5kLziu.js";import"./OverlayTrigger-ZNA0xvDx.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./context-Dm_RzWW0.js";import"./OverlayContextProvider-BjE0srji.js";import"./DialogTriggerView-BK5QB_3_.js";import"./Overlay-Cuj0RgmJ.js";import"./DivView-CihT0LYe.js";import"./ButtonView-ClexYkyB.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
