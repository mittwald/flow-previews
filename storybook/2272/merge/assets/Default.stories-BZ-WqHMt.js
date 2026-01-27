import{j as r}from"./iframe-COrLnxQ5.js";import{B as o}from"./Button-B5T-9t49.js";import{A as l}from"./ActionGroup-BkAJhlM8.js";import{L as s,a as d}from"./LightBox-BwQ-2WpJ.js";import{I as m}from"./Image-BLvwQIBu.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-CG-OJrgb.js";import{u as h}from"./useOverlayController-JMrb6iCJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./Text-xUIxpGpZ.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./utils-VsjjISTT.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./remote-DmDOnO_p.js";import"./Button-XrgEKXm-.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYo5WNMt.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./dynamic-6q-iLiJj.js";import"./getActionGroupSlot-CizQjHpL.js";import"./useStatic-CZwWlCB5.js";import"./OverlayTrigger-Dx3VRxcY.js";import"./Dialog-CXGseDzt.js";import"./RSPContexts-Ds5AG3kQ.js";import"./OverlayArrow-B9AznsvA.js";import"./useControlledState-B-eslxlj.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";import"./context-Dy8NilHt.js";import"./OverlayContextProvider-BtJ2k2E0.js";import"./DialogTriggerView-DuFcxNsd.js";import"./Overlay-B4VcLYFM.js";import"./DivView-BJBq84cv.js";import"./ButtonView-BaOHg3N5.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
