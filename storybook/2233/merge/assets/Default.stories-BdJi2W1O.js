import{j as r}from"./iframe-BeQWUZkN.js";import{B as o}from"./Button-CGVqLO1a.js";import{A as l}from"./ActionGroup-nS8Oj4Mn.js";import{L as s,a as d}from"./LightBox-CY11pnCk.js";import{I as m}from"./Image-D9YnIp37.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-BINGtqrd.js";import{u as h}from"./useOverlayController-Cg89pKF6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./Text-DBLOUBNs.js";import"./browser-CC8M21FF.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./utils-DahaGO1Z.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./remote-BjhB0wla.js";import"./Button-CL6J7LkF.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DC5PU-Mt.js";import"./useFocus-B8WX1wz4.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./dynamic-CY8Jd6pV.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./useStatic-H-gT8Tnv.js";import"./OverlayTrigger-CQFXwfOk.js";import"./Dialog-BcNKaqXQ.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";import"./context-C8zS221N.js";import"./OverlayContextProvider-DSplWZAb.js";import"./DialogTriggerView-CKSxQMo-.js";import"./Overlay-Bet1T5Qv.js";import"./DivView-DZmjViEd.js";import"./ButtonView-Cu0HfPXx.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
