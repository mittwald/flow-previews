import{j as r}from"./iframe-W1iyoXhf.js";import{B as o}from"./Button-IzhK2U-6.js";import{A as l}from"./ActionGroup-C1jzAEQv.js";import{L as s,a as d}from"./LightBox-C93G3ATx.js";import{I as m}from"./Image-GOW5uX9s.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-Cnnsa5dA.js";import{u as h}from"./useOverlayController-BLagNJVD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./Text-DcDEk3cp.js";import"./browser-D1HYvIQy.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./utils-Co92dFN-.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./remote-CbMcOagV.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./dynamic-X2nPVSXv.js";import"./getActionGroupSlot-nARO-zR5.js";import"./useStatic-DFE9WV1t.js";import"./OverlayTrigger-CDdGESRy.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./useControlledState-BeXX8b-c.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";import"./context-Cx4Tf49f.js";import"./OverlayContextProvider-CtixpOlY.js";import"./DialogTriggerView-Bxcqtq7a.js";import"./Overlay-Cm4rNBC9.js";import"./DivView-6GVD0Iaw.js";import"./ButtonView-DeVNGu_o.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
