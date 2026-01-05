import{j as r}from"./iframe-CnrbHwTe.js";import{B as o}from"./Button-DoJYz9nf.js";import{A as l}from"./ActionGroup-CHRx5nJi.js";import{L as s,a as d}from"./LightBox-Diioa6tD.js";import{I as m}from"./Image-CzwlVzga.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-DgLNPfaL.js";import{u as h}from"./useOverlayController-CZACBNcH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./Text-eTz9hgbN.js";import"./browser-TZQakXKU.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./Text-nMrjd92_.js";import"./utils-r4y_43wh.js";import"./LoadingSpinner-BfrmZLfO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./context-B7MLny9I.js";import"./remote-CmycR9zC.js";import"./Button-CDvqfYYW.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoQNUybf.js";import"./useFocus-CW3ebFsS.js";import"./useFocusRing-CRQTw2D7.js";import"./useFocusable-DrwEzR41.js";import"./dynamic-D-DaJWqs.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./useStatic-D1Vs9fsX.js";import"./OverlayTrigger-QfzKXgOG.js";import"./Dialog-CsKt9ioo.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./context-BuaNu4Hn.js";import"./OverlayContextProvider-DyMWHvaJ.js";import"./DialogTriggerView-Dr6pD7sv.js";import"./Overlay-DGr8g2Vn.js";import"./DivView-C1e2NZxw.js";import"./ButtonView-DIEJPe8r.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
