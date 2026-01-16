import{j as r}from"./iframe-DEsugzBP.js";import{B as o}from"./Button-Bh57nksp.js";import{A as l}from"./ActionGroup-BfLYMaYj.js";import{L as s,a as d}from"./LightBox-D2iChXMF.js";import{I as m}from"./Image-nvqBBkX_.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-qDYXGw-D.js";import{u as h}from"./useOverlayController-Bq883NOw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./Text-CGG2whlc.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./utils-k3goWFVI.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./remote-Bm53ArvY.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CsaWzeZC.js";import"./useFocus-B3AZuBYY.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./dynamic-FU-wbqWq.js";import"./getActionGroupSlot-d_28ev7h.js";import"./useStatic-BMQe5ifs.js";import"./OverlayTrigger-CImrZmh1.js";import"./Dialog-B0UO0Xtu.js";import"./RSPContexts-BS5BTC1y.js";import"./OverlayArrow-CBh5kmtO.js";import"./useControlledState-Dcr_irR6.js";import"./Collection-YQKIf0Qf.js";import"./CollectionBuilder-CkaEUbci.js";import"./SelectionIndicator-BsQYAog2.js";import"./Separator-DPTgStgW.js";import"./SelectionManager-CV2D7rSd.js";import"./useEvent-Dk4Rqcvb.js";import"./useCollator-DjsjFHtz.js";import"./FocusScope-BvFRWRMs.js";import"./VisuallyHidden-DVFgokJG.js";import"./context-20QbnAW8.js";import"./OverlayContextProvider-CajcDkAh.js";import"./DialogTriggerView-BEasOqHk.js";import"./Overlay-7Lf-PQAv.js";import"./DivView-BmxKPDwf.js";import"./ButtonView-CimpCjSg.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
