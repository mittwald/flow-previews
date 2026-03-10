import{j as r}from"./iframe-DAdEF_a9.js";import{B as o}from"./Button-BL7hv3yg.js";import{A as d}from"./ActionGroup-BlNNsUJ6.js";import{L as e,a as l}from"./LightBox-CC0dDbZe.js";import{I as t}from"./Image-BFhhqrqA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as u}from"./IconWarning-B_QPuDoh.js";import"./flowComponent-CSaST_uw.js";import{u as B}from"./useOverlayController-BdzCJ-ub.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-BlXexclX.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./Text-ConA-l-E.js";import"./utils-B1o5BDIk.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./LoadingSpinner-BzYwrllt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./remote-BQ_isGLI.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./dynamic-pIUCZeo6.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./useStatic-CKtHP4uD.js";import"./OverlayTrigger-DC0b_r1T.js";import"./Dialog-CWk-zVbe.js";import"./RSPContexts-BAZVNF9B.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./OverlayContextProvider-DG82vmF2.js";import"./DialogTriggerView-0-F2PlRY.js";import"./Overlay-BvmU2R8J.js";import"./ButtonView-B0xnqfb2.js";const h=""+new URL("test-D3lGzqAO.svg",import.meta.url).href,Lr={title:"Overlays/LightBox",component:e,parameters:{controls:{exclude:["controller"]}},render:c=>r.jsxs(l,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(e,{...c,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})},i={},s={args:{fitScreen:!1}},n={render:c=>{const g=B("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:g.open,children:"Open LightBox"}),r.jsxs(e,{...c,controller:g,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})}},m={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{width:100,withBorder:!0,alt:"Gopher",src:a.imageSrc})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},p={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{withBorder:!0,alt:"Gopher",src:h})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:h})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Sr=["Default","WithoutFitScreen","WithController","WithImageTrigger","WithSvg"];export{i as Default,n as WithController,m as WithImageTrigger,p as WithSvg,s as WithoutFitScreen,Sr as __namedExportsOrder,Lr as default};
