import{j as r}from"./iframe-CPn2ZlG8.js";import{B as o}from"./Button-i2RXMGoH.js";import{A as l}from"./ActionGroup-gwUYpalQ.js";import{a5 as p,a6 as d}from"./Modal-BBOS47oM.js";import{I as n}from"./Image-C-mKiOK_.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-BTNOc1CF.js";import{u as h}from"./Popover-BXUF-6SC.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./index-B0eWxAoc.js";import"./Text-6RCNpXVe.js";import"./browser-Cl13ZrDl.js";import"./utils-DBul4rcK.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./LoadingSpinner-mgkNzsmz.js";import"./Button-Di4iIPFk.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BiAR75ic.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./dynamic-CmzXv2ZH.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./useStatic-BnTfOIpp.js";import"./OverlayTrigger-20DAFHoE.js";import"./Dialog-CXw6CUzT.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./ControlledNotification-BEs41KlO.js";import"./context-CgTN8SSG.js";import"./LayoutCard-C_hSjeDr.js";import"./Accordion-B-bChxW6.js";import"./Action-Dgdncsxu.js";import"./Alert-Ug9GHVUz.js";import"./AlertIcon-zTj1UJpO.js";import"./AlertBadge-BsQaA3x6.js";import"./Align-DE9bebnk.js";import"./TableFooterRow-B5LtY95q.js";import"./SkeletonText-oiPGeqDP.js";import"./ClearPropsContextView-BhabDAmt.js";import"./Avatar-DDyQczM4.js";import"./AvatarStack-CWZ-VL73.js";import"./Badge-D9v8JAmm.js";import"./BigNumber-C4G7-3T-.js";import"./Breadcrumb-Bacspdd1.js";import"./Link-DVlBL-qV.js";import"./Heading-BzbKq0dK.js";import"./Legend-DDMMG7bH.js";import"./FileCardList-rzh9hTjl.js";import"./CodeBlock-DfQLW9jR.js";import"./CopyButton-BPFZIEl4.js";import"./Tooltip-BEM5VXj8.js";import"./react-children-utilities-WPpO_PnD.js";import"./Color-BEtva2JY.js";import"./Content-35wcbQLb.js";import"./Section-K5CfbtJu.js";import"./Label-Opx6KdMe.js";import"./ContextualHelpTrigger-BF0zQddW.js";import"./CounterBadge-DQvxwwoY.js";import"./DonutChart-BrF9Zm5P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGRfp6b0.js";import"./Header-DnNd6Njs.js";import"./Initials-Bv6RP1-8.js";import"./InlineCode-CHc7o_jp.js";import"./LabeledValue-j0cEpKgE.js";import"./PopoverTrigger-CMl9e6LO.js";import"./Markdown-Coe6N29n.js";import"./Separator-CJJgusYM.js";import"./Message-Dqi0-r_q.js";import"./MessageSeparator-CroayyHM.js";import"./NavigationGroup-qSfETvJA.js";import"./Notification-r_T3n36Q.js";import"./NotificationProvider-u0HbSQig.js";import"./ProgressBar-BXbWnBwm.js";import"./Rating-DIBuOTMV.js";import"./Skeleton-1myRvyzI.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Xr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Xr as __namedExportsOrder,Vr as default};
