import{j as r}from"./iframe-C0EFV5oe.js";import{B as o}from"./Button-BqN-Pb_Z.js";import{A as d}from"./ActionGroup-EFGw0Sw-.js";import{L as e,a as l}from"./LightBox-acWlSCT-.js";import{I as t}from"./Image-Ca_yb6wX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as u}from"./IconWarning-Xp-mdAXG.js";import"./flowComponent-DYluwTXq.js";import{u as B}from"./useOverlayController-DSjMGOL2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DOyzWtc3.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./utils-BH6nMpvt.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./LoadingSpinner-AXwRYWdI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./remote-CJHR20lz.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./dynamic-DNPsW2Gv.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./useStatic-BaJc0e4A.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./Dialog-DJ2-3VRx.js";import"./RSPContexts-DN9Cbb61.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./OverlayContextProvider-CfXne1yD.js";import"./DialogTriggerView-B7MKS-pg.js";import"./Overlay-Z2wG9VEn.js";import"./ButtonView-BsJw5G4L.js";const h=""+new URL("test-D3lGzqAO.svg",import.meta.url).href,Lr={title:"Overlays/LightBox",component:e,parameters:{controls:{exclude:["controller"]}},render:c=>r.jsxs(l,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(e,{...c,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})},i={},s={args:{fitScreen:!1}},n={render:c=>{const g=B("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:g.open,children:"Open LightBox"}),r.jsxs(e,{...c,controller:g,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})}},m={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{width:100,withBorder:!0,alt:"Gopher",src:a.imageSrc})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},p={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{withBorder:!0,alt:"Gopher",src:h})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:h})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
