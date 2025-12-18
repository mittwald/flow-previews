import{j as r}from"./iframe-CgWIZppF.js";import{B as o}from"./Button-B2z86NVg.js";import{A as l}from"./ActionGroup-C2VcbEo2.js";import{L as s,a as d}from"./LightBox-BrKeT6BF.js";import{I as m}from"./Image-DwoXUJtX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-CJrmQcXC.js";import{u as h}from"./useOverlayController-CUfZ3j8o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./Text-B7pZrZSG.js";import"./browser-C8d3FCf4.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./utils-CqFMFg3g.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./context-DG5uy-SY.js";import"./remote-DVGHPh_8.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./dynamic-BqY2cEs-.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./useStatic-CFKrTcwu.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./context-B2MrOWQ_.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./DialogTriggerView-3MFEbPUb.js";import"./Overlay-4C_rDxAb.js";import"./DivView-C_A0hyWp.js";import"./ButtonView-DRUBn2V0.js";const fr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},n={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
