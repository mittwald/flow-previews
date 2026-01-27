import{j as r}from"./iframe-DRxscI9O.js";import{B as o}from"./Button-Cn0kN-cE.js";import{A as l}from"./ActionGroup-DaLtREB8.js";import{L as s,a as d}from"./LightBox-fc3HyzN0.js";import{I as m}from"./Image-5w0kWUwb.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-B0GCVytt.js";import{u as h}from"./useOverlayController-CJT4z6k_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./index-1XGI-8ge.js";import"./Text-8YV9_ufN.js";import"./browser-D6b-4R0j.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./utils-CR6NBPUA.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./context-B7-PA0L6.js";import"./remote-5HtQVd9k.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./dynamic-CC7KPApC.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./useStatic-DhnGFhXh.js";import"./OverlayTrigger-CijLEP7N.js";import"./Dialog-Ds8Y2vRW.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useControlledState-CvH2MSRC.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";import"./context-CkpccYw3.js";import"./OverlayContextProvider-CoboHbSN.js";import"./DialogTriggerView-DxqIqCQq.js";import"./Overlay-Bi6ZnUkK.js";import"./DivView-CYkIKBOE.js";import"./ButtonView-3kbETHdX.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
