import{j as r}from"./iframe-DwkHntCQ.js";import{B as o}from"./Button-DN4_LEM9.js";import{A as l}from"./ActionGroup-BUhBVZaF.js";import{L as n,a as d}from"./LightBox-1w6jeCQd.js";import{I as s}from"./Image-DouymOMf.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CscgxAB5.js";import{u as h}from"./useOverlayController-Dk9bMBr8.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./Text-DBgNVic9.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Text-BtFh1iC6.js";import"./utils-Di7WFWpe.js";import"./LoadingSpinner-Bd24wSd4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./context-BkqugFd7.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BCP8B4jj.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./dynamic-A00wcWEh.js";import"./getActionGroupSlot-HBCgi1hX.js";import"./useStatic-BqeeL3zA.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./Dialog-Cj1dv_FM.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./useControlledState-DyDKUpf4.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useEvent-N-KGhH9j.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./VisuallyHidden-CVpyzdGa.js";import"./ControlledNotification-B20ejBs1.js";import"./context-DyX3upIJ.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./DialogTriggerView-CIpO0wl_.js";import"./Overlay-nwqA1Nwt.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./ClearPropsContext-D7-qaIYX.js";import"./ButtonView-DVdQseSU.js";const Ir={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};const Tr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Tr as __namedExportsOrder,Ir as default};
