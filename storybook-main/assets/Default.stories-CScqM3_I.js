import{j as r}from"./iframe-CKZ3lvbD.js";import{B as o}from"./Button-CJlIPsW5.js";import{A as l}from"./ActionGroup-OimQLutj.js";import{L as s,a as d}from"./LightBox-Dj08M4wa.js";import{I as m}from"./Image-3twuDj3M.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-C7p1kK8i.js";import{u as h}from"./useOverlayController-CXRFu3Cx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./Text-C_6aanp2.js";import"./browser-burL9SPa.js";import"./EmulatedBoldText-DqsKkhpE.js";import"./Text-CCMj3K8Y.js";import"./utils-BvJRIsTz.js";import"./LoadingSpinner-D6ABJv6G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./context-C9x0o2NL.js";import"./remote-CtPArtkt.js";import"./Button-BHDMacWQ.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BdqAXD8t.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./dynamic-BOUQFyUk.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./useStatic-B8hmur2r.js";import"./OverlayTrigger-C1yyJzXM.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./context-Ca4O4Dr-.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./DialogTriggerView-C3l-2Kzw.js";import"./Overlay-CqRKsDPP.js";import"./DivView-CCNdXm3T.js";import"./ButtonView-DfeKjjgQ.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
