import{j as r}from"./iframe-Dq6d4A4K.js";import{B as o}from"./Button-CRlV5nO0.js";import{A as l}from"./ActionGroup-C7CI4xmc.js";import{L as s,a as d}from"./LightBox-CIa-t6FK.js";import{I as m}from"./Image-DD5FCYwO.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-CufYr70B.js";import{u as h}from"./useOverlayController-C30vz3f6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./index-cJyKvq7H.js";import"./Text-0vHLnm-v.js";import"./browser-DRZjKHqy.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./utils-JgkAdQlm.js";import"./LoadingSpinner-C8xohBci.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./context-Dane2eIN.js";import"./remote-9zlx4mlg.js";import"./Button-DJxkILn0.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BTTZyaX9.js";import"./useFocus-CdRm64Xm.js";import"./useFocusRing-HiCcztDi.js";import"./useFocusable-SW4CEV0n.js";import"./dynamic-D3ex2ST8.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./useStatic-qDMUdwgV.js";import"./OverlayTrigger-Coxo9lqL.js";import"./Dialog-D4b1JxJ9.js";import"./RSPContexts-CrxTMHNd.js";import"./OverlayArrow-CZpwCw1e.js";import"./useControlledState-B_V0UpKw.js";import"./Collection-CUuQgOW5.js";import"./CollectionBuilder-BBsN2d06.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./Separator-DMKKn_KL.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";import"./context-Cu2JCu7X.js";import"./OverlayContextProvider-CIowSog5.js";import"./DialogTriggerView-DOKTd9Fn.js";import"./Overlay-CeOtgcoC.js";import"./DivView-Ceeu1UvA.js";import"./ButtonView-CpiXtfU3.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
