import{j as r}from"./iframe-Dnm846PF.js";import{B as o}from"./Button-D3IXyzzj.js";import{A as l}from"./ActionGroup-BXn_SmSG.js";import{L as s,a as d}from"./LightBox-i38Z1f7e.js";import{I as m}from"./Image-K9DYUJ63.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-CExbEpDP.js";import{u as h}from"./useOverlayController-D7G3MHJE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./Text-DtZxu6g8.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./utils-VDIU0BnD.js";import"./LoadingSpinner-DASF7rgv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./remote-XcyFsW5Q.js";import"./Button-B-4mNKoj.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CU4gAXU4.js";import"./useFocus-D-7SE4fF.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./dynamic-CwAvPpRM.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./useStatic-D4cjHvMF.js";import"./OverlayTrigger-D2F_jz3v.js";import"./Dialog-BfuTmdIH.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./VisuallyHidden-C6zUvnKf.js";import"./context-CfRQ154N.js";import"./OverlayContextProvider-e7mKKUrq.js";import"./DialogTriggerView-By1KcQyW.js";import"./Overlay-BMhiI98R.js";import"./DivView-f5ijXLKg.js";import"./ButtonView-BMLSQLb1.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
