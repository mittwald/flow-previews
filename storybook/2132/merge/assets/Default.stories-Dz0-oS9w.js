import{j as r}from"./iframe-U-SQzk2U.js";import{B as o}from"./Button-B_mH5guI.js";import{A as l}from"./ActionGroup-QOnDMJ0K.js";import{ae as p,af as d}from"./TimeField-CC_Pyjeg.js";import{I as n}from"./Image-fMegGqHo.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CDCEBJyf.js";import{u as h}from"./Popover-BJPafbQW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./Text-MZxPcWY_.js";import"./browser-w1PF0DBJ.js";import"./utils-DoPZZ_D6.js";import"./EmulatedBoldText-2j5mm0bP.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DG48XepE.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./dynamic-BNi_8Fxs.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./useStatic-BAhUJhAM.js";import"./Accordion-ZeIRJCaw.js";import"./Section-Cs2_EqxV.js";import"./context-ChAoIJrl.js";import"./RSPContexts-CXcRuCAV.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./Alert-PBaqSyU5.js";import"./AlertIcon-81NvLES1.js";import"./AlertBadge-BDdG2Xyu.js";import"./Align-BaKWMIPi.js";import"./TableFooterRow-DhmvhUbW.js";import"./SkeletonText-B7Idi9Co.js";import"./Avatar-Dp_xN1xq.js";import"./AvatarStack-BziCuf6l.js";import"./Badge-DINRYIZ4.js";import"./BigNumber-DxxIndo0.js";import"./Breadcrumb-C7c-KnuV.js";import"./Link-C1W3HrwR.js";import"./Heading-LgN9kaRj.js";import"./Legend-Iz7Sss5n.js";import"./FileCardList-BFx3LKHI.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./Color-DHmCSMDw.js";import"./Content-DqP6eARh.js";import"./Label-C3BVuxS7.js";import"./ContextualHelpTrigger-G5U05qXX.js";import"./CounterBadge-DERld0YM.js";import"./DonutChart-CG4udGsV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CQRWQTua.js";import"./Header-D2ZfwLZJ.js";import"./Initials-CdiKdV33.js";import"./InlineCode-CY3vRQgR.js";import"./PopoverTrigger-Coxd46NM.js";import"./Separator-DjGJVRMe.js";import"./Message-DV2VcofZ.js";import"./MessageSeparator-DMC7QGGP.js";import"./NavigationGroup-BXxl9KBJ.js";import"./Notification-tY-Mb6kR.js";import"./NotificationProvider-BrhLMx6A.js";import"./ProgressBar-BwkFEgmn.js";import"./Rating-worVxwfb.js";import"./Skeleton-D7CUbSzy.js";const Rr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...m.parameters?.docs?.source}}};const br=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,br as __namedExportsOrder,Rr as default};
