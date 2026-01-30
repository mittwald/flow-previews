import{j as r}from"./iframe-BIoFjWpr.js";import{B as o}from"./Button-60lZfz3H.js";import{A as l}from"./ActionGroup-BEBqOCwY.js";import{L as s,a as d}from"./LightBox-aNe_qyYw.js";import{I as m}from"./Image-B9mk24SH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-EC1k16Yv.js";import{u as h}from"./useOverlayController-OHHrE_gT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./Text-Dw86EjFX.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./utils-DZ7CVsEQ.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./remote-CdlQwHLV.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Uox4pFjd.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./dynamic-BzebB2lX.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./useStatic-BOUdEr4J.js";import"./OverlayTrigger-DP9QTZiV.js";import"./Dialog-khxuiED6.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";import"./context-Bujl8L45.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./DialogTriggerView-DulWE1ex.js";import"./Overlay-CPsfc_l9.js";import"./DivView-C9-5hlWI.js";import"./ButtonView-D8SKXTBC.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
