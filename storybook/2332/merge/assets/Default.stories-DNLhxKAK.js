import{j as r}from"./iframe-Bas3a7fO.js";import{B as o}from"./Button-CCev3q47.js";import{A as l}from"./ActionGroup-D7GnjScM.js";import{L as s,a as d}from"./LightBox-DyOCkQ1u.js";import{I as m}from"./Image-TGym18Lo.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-9FMOeqa7.js";import"./flowComponent-DM0zlvyg.js";import{u as h}from"./useOverlayController-Bne___mw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./utils-eswKxOcw.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./remote-CQRN9i7s.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./dynamic-CtBYvx23.js";import"./getActionGroupSlot-DxyevWSt.js";import"./useStatic-LTDZm_8J.js";import"./OverlayTrigger-BU9PdTSa.js";import"./Dialog-BsJqG9mx.js";import"./RSPContexts-BxdWTHUz.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./DialogTriggerView-D9aUp3bv.js";import"./Overlay-CKC1BDXC.js";import"./ButtonView-fFevQyKz.js";const Br={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const jr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,jr as __namedExportsOrder,Br as default};
