import{j as r}from"./iframe-BuRyV86k.js";import{B as o}from"./Button-CyndH9Xm.js";import{A as l}from"./ActionGroup-B0lwPl2x.js";import{L as s,a as d}from"./LightBox-DMHjBvWx.js";import{I as m}from"./Image-CxBFbLTr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a9 as g}from"./IconWarning-DAJxMizk.js";import{u as h}from"./useOverlayController-BJSaXgbE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./Text-DPwKDAaR.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./utils-DCjU3VYp.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./remote-Cg9OAbJn.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B_1LlkAk.js";import"./useFocus-CQWcTqjz.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./dynamic-clmxwr04.js";import"./getActionGroupSlot-BzS6Espk.js";import"./useStatic-Bozflp-3.js";import"./OverlayTrigger-BevBDs3M.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./context-BBsiVWSW.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./DialogTriggerView-C0TjJf3c.js";import"./Overlay-DLsTRWoL.js";import"./DivView-Dh50Tg8K.js";import"./ButtonView-CxrixtJG.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
