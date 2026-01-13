import{j as r}from"./iframe-D5OSMSYj.js";import{B as o}from"./Button-DTe5su69.js";import{A as l}from"./ActionGroup-EdAZBuJq.js";import{L as s,a as d}from"./LightBox-C2JPothW.js";import{I as m}from"./Image-BpMsLaPl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-aBoV8v8e.js";import{u as h}from"./useOverlayController-Dbdtg8pO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./Text-DAhCT_ah.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./utils-B2fStg81.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./remote-DoBIDVY0.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./dynamic-B1x5IqP1.js";import"./getActionGroupSlot-BAkzknoy.js";import"./useStatic-Ct4NfCBd.js";import"./OverlayTrigger-DrBj6jwS.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useControlledState-BLX_f1Wx.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";import"./context-g3auhbgQ.js";import"./OverlayContextProvider-DZuBuoMh.js";import"./DialogTriggerView-D73yyfww.js";import"./Overlay-BwRuE40u.js";import"./DivView-CPMPhVfR.js";import"./ButtonView-BHglFPrX.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
