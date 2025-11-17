import{j as r}from"./iframe-DBiC_ZnR.js";import{B as o}from"./Button-Dz2v4SBO.js";import{A as l}from"./ActionGroup-D-mz5Ka-.js";import{ag as n,ah as d,u as h}from"./Modal-CFT07oZI.js";import{I as s}from"./Image-D5b2Er5_.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CK2ZGKNK.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0XIYrNX.js";import"./index-Bp9tFnUt.js";import"./index-CVV0Ew5-.js";import"./Text-BcLTITKQ.js";import"./browser-DU6w9x_W.js";import"./utils-DtstTdJR.js";import"./EmulatedBoldText-ClmR1Uhh.js";import"./LoadingSpinner-TzV_vALb.js";import"./Button-L3lWig61.js";import"./ProgressBar-DmZeIXpS.js";import"./Hidden-Dw7083pg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7Lcog2P0.js";import"./useFocusRing-DtYok8JN.js";import"./useFocusable-CIN_gk5Z.js";import"./useLocalizedStringFormatter-D7iDpTHP.js";import"./dynamic-CtV33ye2.js";import"./getActionGroupSlot-CAWRcoDx.js";import"./useStatic-DEZxNC-q.js";import"./context-BMyT49yV.js";import"./RSPContexts-BN9qRqww.js";import"./Collection-CSHv5Add.js";import"./CollectionBuilder-Bq-WlyGC.js";import"./SelectionIndicator-CqAhSFEy.js";import"./Separator-CJkt4YbH.js";import"./FileCardList-BQ0PrUKt.js";import"./Avatar-BwVc0hzE.js";import"./AlertIcon-_-sw5S_n.js";import"./Link-D0ngLqvb.js";import"./ControlledNotification-BYDi47LJ.js";import"./LayoutCard-DujkBG9b.js";import"./Accordion-BPGdA9fR.js";import"./Section-PPvrLtVe.js";import"./Alert-D-T0L3mL.js";import"./AlertBadge-hinnerB-.js";import"./Align-bv03_ePf.js";import"./AvatarStack-BuYJ-fes.js";import"./BigNumber-CBIvAU_0.js";import"./Breadcrumb-B-xNS-GU.js";import"./Heading-DAHW42f0.js";import"./Legend-ByhIQaF3.js";import"./Color-CORewqWi.js";import"./TableFooterRow-BbDFkWI7.js";import"./SkeletonText-CiTXgN5i.js";import"./Content-CsyIBpFy.js";import"./Label-xzCvdkIk.js";import"./CounterBadge-DytJIUgP.js";import"./DonutChart-D3VLTo_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C4HRucEG.js";import"./Header-DKDAJOov.js";import"./Initials-BFBRnihA.js";import"./InlineCode-Bt3wPgje.js";import"./Separator-BeLwNHQN.js";import"./MessageSeparator-_4Z2k_CE.js";import"./NavigationGroup-CjgLGw0v.js";import"./Notification-GKnJp8ZA.js";import"./NotificationProvider-DzFmVfpi.js";import"./ProgressBar-2UwBkw3O.js";import"./Rating-DLMdLSIQ.js";import"./Skeleton-BBSK6hjL.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
