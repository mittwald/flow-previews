import{j as r}from"./iframe-BECefjM4.js";import{B as o}from"./Button-DAjxqCNq.js";import{A as l}from"./ActionGroup-p2GKrbTu.js";import{L as s,a as d}from"./LightBox-DPR2Z-Wx.js";import{I as m}from"./Image-CkO53M69.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-CvVn1QxU.js";import{u as h}from"./useOverlayController-7vnF_84u.js";import"./flowComponent-BuliJvUF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./utils-bqUpXLHN.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./LoadingSpinner-DXxHNnrx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./remote-CqI4D0us.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-427CihAL.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./dynamic-DJ76M0aZ.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./useStatic-Bcu2QKMg.js";import"./OverlayTrigger-Cg8XmR5v.js";import"./Dialog-BvIZXNXz.js";import"./RSPContexts-C61Ijawi.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./context-mnhTcWwX.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./DialogTriggerView-Dgo2WbQG.js";import"./Overlay-yXgmDyXI.js";import"./DivView-DwAnsCd0.js";import"./ButtonView-C56jVANI.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
