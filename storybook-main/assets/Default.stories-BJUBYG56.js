import{j as r}from"./iframe-D_6zdLny.js";import{B as o}from"./Button-Hd0_GbPh.js";import{A as l}from"./ActionGroup-DJbcBDj6.js";import{L as s,a as d}from"./LightBox-CGkjqNmm.js";import{I as m}from"./Image-DW3rN9kx.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-L8yPVfI5.js";import{u as h}from"./useOverlayController-ClIsDnWC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./Text-BucMQu3s.js";import"./browser-D7xr6uHh.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./Text-YMXmaajA.js";import"./utils-PQD-Pczy.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./dynamic-fYYLqg_-.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./OverlayTrigger-DoYQAlMH.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./ControlledNotification-BZb_de0x.js";import"./context-BfwnKq6d.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./DialogTriggerView-ChMnJtST.js";import"./Overlay-CjKKkNqK.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./ButtonView-DD55V4Hz.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
