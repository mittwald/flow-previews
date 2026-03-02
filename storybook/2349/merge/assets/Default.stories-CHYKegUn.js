import{j as r}from"./iframe-uf-MKLgq.js";import{B as o}from"./Button-mfbo0dyR.js";import{A as d}from"./ActionGroup-Calx21Na.js";import{L as e,a as l}from"./LightBox-BZiXuqrI.js";import{I as t}from"./Image-D_AFS5Pp.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as u}from"./IconWarning-BGOvrRAj.js";import"./flowComponent-CR1nBuBt.js";import{u as B}from"./useOverlayController-CR9kocR-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./utils-DZ6AixXo.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./LoadingSpinner-CRqWvqjj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./remote-7esdTMhw.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./dynamic-fPlHFb8V.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useStatic-CS2X9Zkf.js";import"./OverlayTrigger-CMeRMZHt.js";import"./Dialog-CWJBmICf.js";import"./RSPContexts-nECt4NUH.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./DialogTriggerView-DNqC0AE6.js";import"./Overlay-B_vOLFC2.js";import"./ButtonView-D8n4Xnyv.js";const h=""+new URL("test-D3lGzqAO.svg",import.meta.url).href,Lr={title:"Overlays/LightBox",component:e,parameters:{controls:{exclude:["controller"]}},render:c=>r.jsxs(l,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(e,{...c,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})},i={},s={args:{fitScreen:!1}},n={render:c=>{const g=B("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:g.open,children:"Open LightBox"}),r.jsxs(e,{...c,controller:g,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})}},m={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{width:100,withBorder:!0,alt:"Gopher",src:a.imageSrc})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},p={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{withBorder:!0,alt:"Gopher",src:h})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:h})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
