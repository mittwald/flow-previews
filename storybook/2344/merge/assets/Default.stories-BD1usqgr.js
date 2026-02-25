import{j as r}from"./iframe-BoiTaxGN.js";import{B as o}from"./Button-MYsVPgLO.js";import{A as l}from"./ActionGroup-aDJBka0X.js";import{L as s,a as d}from"./LightBox-B2IbiKnU.js";import{I as m}from"./Image-D6AayUUg.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-DctWBCm0.js";import"./flowComponent-5SfKf5nB.js";import{u as h}from"./useOverlayController-BbkltkAX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-ClfpXeTF.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./utils-RetFhwyR.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./LoadingSpinner-BBdroSRA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./remote-C4jG3DXh.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./dynamic-X8snMUB4.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./useStatic-bFyj34a0.js";import"./OverlayTrigger-Db6so5Mf.js";import"./Dialog-BL8T3CnU.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./DialogTriggerView-C5uIlAdd.js";import"./Overlay-CDL6WOnf.js";import"./DivView-Bkjk5d7f.js";import"./ButtonView-Jmrl6E5f.js";const jr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
