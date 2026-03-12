import{j as r}from"./iframe-JHVlk64D.js";import{B as o}from"./Button-BViHWx5D.js";import{A as d}from"./ActionGroup-DZgnsmND.js";import{L as e,a as l}from"./LightBox-BPicAFXr.js";import{I as t}from"./Image-CL6Hl73G.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{c as x,ae as u}from"./IconWarning-D57fWT31.js";import"./flowComponent-Ck8MmBsO.js";import{u as B}from"./useOverlayController-B_kJVQUM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D35H-2yr.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./utils-D9FbIhNL.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./remote-CdnDmctD.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./dynamic-B8NPXIjt.js";import"./getActionGroupSlot-DipsrrNF.js";import"./useStatic-BkeDEY_1.js";import"./OverlayTrigger-CMrYL6HW.js";import"./Dialog-DIqACfnD.js";import"./RSPContexts-BaSES6Qq.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./DialogTriggerView-CIorkltE.js";import"./Overlay-KmyQfYDW.js";import"./ButtonView-BHsHy_WH.js";const h=""+new URL("test-D3lGzqAO.svg",import.meta.url).href,Sr={title:"Overlays/LightBox",component:e,parameters:{controls:{exclude:["controller"]}},render:c=>r.jsxs(l,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(e,{...c,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})},i={},s={args:{fitScreen:!1}},n={render:c=>{const g=B("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:g.open,children:"Open LightBox"}),r.jsxs(e,{...c,controller:g,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})}},m={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{width:100,withBorder:!0,alt:"Gopher",src:a.imageSrc})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},p={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{withBorder:!0,alt:"Gopher",src:h})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:h})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image withBorder alt="Gopher" src={svg} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={svg} />
      </LightBox>
    </LightBoxTrigger>
}`,...p.parameters?.docs?.source}}};const fr=["Default","WithoutFitScreen","WithController","WithImageTrigger","WithSvg"];export{i as Default,n as WithController,m as WithImageTrigger,p as WithSvg,s as WithoutFitScreen,fr as __namedExportsOrder,Sr as default};
