import{j as r}from"./iframe-BFddea_x.js";import{B as o}from"./Button-DmFob37h.js";import{A as d}from"./ActionGroup-B4CMqS7f.js";import{L as e,a as l}from"./LightBox-DsXAG6f6.js";import{I as t}from"./Image-UDW_fzf-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{h as x,a6 as u}from"./IconWarning-Cwahpn-Q.js";import"./flowComponent-BHBUnD7I.js";import{u as B}from"./useOverlayController-D1CCctag.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./utils-D-aZUMcZ.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./remote-DmjGOFpp.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./dynamic-C85Jl_PG.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useStatic-4M_8h910.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./DialogTriggerView-D9jblR2E.js";import"./Overlay-Dpbqdx3Y.js";import"./ButtonView-O_aZgiJ1.js";const h=""+new URL("test-D3lGzqAO.svg",import.meta.url).href,Lr={title:"Overlays/LightBox",component:e,parameters:{controls:{exclude:["controller"]}},render:c=>r.jsxs(l,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(e,{...c,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})},i={},s={args:{fitScreen:!1}},n={render:c=>{const g=B("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:g.open,children:"Open LightBox"}),r.jsxs(e,{...c,controller:g,children:[r.jsx(t,{src:a.imageSrc}),r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(u,{})})]})]})]})}},m={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{width:100,withBorder:!0,alt:"Gopher",src:a.imageSrc})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},p={render:()=>r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(t,{withBorder:!0,alt:"Gopher",src:h})}),r.jsx(e,{children:r.jsx(t,{alt:"Gopher",src:h})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
