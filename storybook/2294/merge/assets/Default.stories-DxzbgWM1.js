import{j as r}from"./iframe-CvJspzLv.js";import{B as o}from"./Button-DPWvzJXv.js";import{A as l}from"./ActionGroup-DsNPEUIc.js";import{L as s,a as d}from"./LightBox-CsJk2dps.js";import{I as m}from"./Image-CJzKlKdw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-BERZaob7.js";import{u as h}from"./useOverlayController-BI0XpmO3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./Text-QUQe3Lsq.js";import"./browser-CBUTrPGa.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./utils-BL4G7l_u.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./remote-BqqZGE8h.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DO5nHrqL.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./dynamic-7-1UCAS5.js";import"./getActionGroupSlot-DdQssjpq.js";import"./useStatic-B0ICfBk6.js";import"./OverlayTrigger-08hVypIJ.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./context-KW9IbNQ1.js";import"./OverlayContextProvider-BI-9o36W.js";import"./DialogTriggerView-jOXw3rKI.js";import"./Overlay-mVIgeDGU.js";import"./DivView-vT5eXO49.js";import"./ButtonView-ClFFq5XN.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
