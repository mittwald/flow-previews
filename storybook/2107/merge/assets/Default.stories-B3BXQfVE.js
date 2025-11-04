import{j as r}from"./iframe-BxshUsxH.js";import{B as o}from"./Button-HRLIFp2S.js";import{A as l}from"./ActionGroup-Dg04WDgn.js";import{a5 as p,a6 as d}from"./Modal-PT7cjgn4.js";import{I as n}from"./Image-CcvZpHPH.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-B98y0Q8s.js";import{u as h}from"./Popover-D8mPu2R9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./index-DKGU8PvL.js";import"./Text-18K6QUAV.js";import"./browser-CjJK-aFI.js";import"./utils-CVs5O02N.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./LoadingSpinner-CLA14IJX.js";import"./Button-BSW16sZi.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jrbRSF4x.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./dynamic-DbpBUg3_.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./useStatic-B3TheZVH.js";import"./OverlayTrigger-DqSMwG9L.js";import"./Dialog-g1S8F0Mk.js";import"./RSPContexts-B9j1N_uk.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./ControlledNotification-BKvhz06W.js";import"./context-Dpzgqk2_.js";import"./LayoutCard-DOb3jwRC.js";import"./Accordion-DEPnjlv6.js";import"./Action-CuTPfi8I.js";import"./Alert-B5lIPS-K.js";import"./AlertIcon-CAIekxtK.js";import"./AlertBadge-CATc84Up.js";import"./Align-DMHcV-Z-.js";import"./TableFooterRow-DdBdlw9v.js";import"./SkeletonText-Bp9OgATd.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./Avatar-BPWVlMTS.js";import"./AvatarStack-BR45Yctn.js";import"./Badge-Bk_g3Swr.js";import"./BigNumber-DnCE5n1M.js";import"./Breadcrumb-DtQ3sVXm.js";import"./Link-C-_Opw-i.js";import"./Heading-DdZYTwhD.js";import"./Legend-CyK7PpxD.js";import"./FileCardList-Cfb5d7AC.js";import"./CodeBlock-D0kilfM3.js";import"./CopyButton-BkqTb8K1.js";import"./Tooltip-Bg81ta88.js";import"./react-children-utilities-C2vFZTwt.js";import"./Color-DYQX0n1L.js";import"./Content-BWTtEus_.js";import"./Section-BZHA2v0g.js";import"./Label-Cai8LRw4.js";import"./ContextualHelpTrigger-p7RfMObQ.js";import"./CounterBadge-D__9oxv-.js";import"./DonutChart-kkf7Q-Dm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DPGgsGpw.js";import"./Header-CF_4_vNz.js";import"./Initials-BH4vAllU.js";import"./InlineCode-DjaHKjIt.js";import"./LabeledValue-Bj8_T89u.js";import"./PopoverTrigger-Cwh_kwTN.js";import"./Markdown-C3IX7c8c.js";import"./Separator-CfZgi8IV.js";import"./Message-Cqw0c2-b.js";import"./MessageSeparator-Dr08CMNP.js";import"./NavigationGroup-CfAWN36R.js";import"./Notification-DKARu49o.js";import"./NotificationProvider-BmLKCltC.js";import"./ProgressBar-D2EMuaV0.js";import"./Rating-CWqAGodb.js";import"./Skeleton-Cd2redhc.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
