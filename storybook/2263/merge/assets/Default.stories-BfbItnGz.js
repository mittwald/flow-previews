import{j as r}from"./iframe-Pk_Kk4JL.js";import{B as o}from"./Button-D9QX6l1e.js";import{A as l}from"./ActionGroup-Bf9c-qmg.js";import{L as s,a as d}from"./LightBox-BhbySJ-K.js";import{I as m}from"./Image-C0mImCaU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-BZbEOivs.js";import{u as h}from"./useOverlayController-C-ffow-t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./Text-yAUoHBmv.js";import"./browser-DxGxcnNA.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./utils-CLxMEgR2.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./context-CrHSUJ76.js";import"./remote-jZTk_Znj.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./dynamic-I4mA0X6x.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./useStatic-i-ZCX3ob.js";import"./OverlayTrigger-C6V65Cj9.js";import"./Dialog-hqEaC_v2.js";import"./RSPContexts-DW-Mep96.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./context-DgSiNkYd.js";import"./OverlayContextProvider-FOEyue6v.js";import"./DialogTriggerView-DOtuJtGs.js";import"./Overlay-CthK8Mzz.js";import"./DivView-Bz6qTPDe.js";import"./ButtonView-22oYLQp2.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
