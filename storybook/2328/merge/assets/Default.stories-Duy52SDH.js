import{j as r}from"./iframe-olJof__V.js";import{B as o}from"./Button-CPlz8rsS.js";import{A as l}from"./ActionGroup-7XqXhcJT.js";import{L as s,a as d}from"./LightBox-DbtR6cjd.js";import{I as m}from"./Image-BTIypaSk.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-Dxqo3db7.js";import"./flowComponent-CoGNni0d.js";import{u as h}from"./useOverlayController-CA843Gf5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-Dd-S15-B.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./utils-B7tchdhx.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./LoadingSpinner-CT-rb4W5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./remote-BFSWQwUW.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UZLq5kUQ.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./dynamic-C_FBHMxE.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./useStatic-DVdbIJHO.js";import"./OverlayTrigger-CdRn1WXI.js";import"./Dialog-DOR07iZd.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./DialogTriggerView-DJfbuzoO.js";import"./Overlay-CYa-63WO.js";import"./DivView-BdWtqWf7.js";import"./ButtonView-BwM21LNf.js";const jr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,fr as __namedExportsOrder,jr as default};
