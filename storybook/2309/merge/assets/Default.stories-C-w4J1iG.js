import{j as r}from"./iframe-CnD5cTjE.js";import{B as o}from"./Button-CxHLWJvy.js";import{A as l}from"./ActionGroup-D3QUuhXI.js";import{L as s,a as d}from"./LightBox-B1QYU2b0.js";import{I as m}from"./Image-CSnWJcnV.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{c as x,a7 as g}from"./IconWarning-K8fT7_bQ.js";import{u as h}from"./useOverlayController-DeY3Y9Ly.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./Text-Bqsx-GQX.js";import"./browser-DH0afsgD.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./utils-BYl_EWK3.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./remote-CRObq-IF.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgDG_638.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useFocusable-DUJmCsdq.js";import"./dynamic-DmWwIwdY.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./useStatic-CR0dXYGS.js";import"./OverlayTrigger-CQqJu3uy.js";import"./Dialog-BpNR7iRs.js";import"./RSPContexts-AjJzFs_t.js";import"./OverlayArrow-W0sikX14.js";import"./useControlledState-C-7lgoXp.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";import"./context-CRbXRYLt.js";import"./OverlayContextProvider-CWXPLkIC.js";import"./DialogTriggerView-Dr18Qd6j.js";import"./Overlay-BDAC3gwK.js";import"./DivView-BC6mQS6M.js";import"./ButtonView-Dbti4Nd6.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
