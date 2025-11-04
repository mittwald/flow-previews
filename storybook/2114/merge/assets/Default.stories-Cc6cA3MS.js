import{j as r}from"./iframe-BnYuPSwa.js";import{B as o}from"./Button-D7B2hjaJ.js";import{A as l}from"./ActionGroup-OB84NbT7.js";import{a5 as p,a6 as d}from"./Modal-CMwT1WB3.js";import{I as n}from"./Image-D6oVUh4j.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-BustMFuX.js";import{u as h}from"./Popover-CIQAqIV0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./index-CqvtBndu.js";import"./Text-DmoS4eOG.js";import"./browser-Bkf_ja0R.js";import"./utils-DoWPBSSq.js";import"./EmulatedBoldText-DyenmRAR.js";import"./LoadingSpinner-14_SbsZZ.js";import"./Button-C47MeqAR.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQlYt1c9.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./dynamic-Dm-4Ig_M.js";import"./getActionGroupSlot-DLw-maV0.js";import"./useStatic-B3gZPUVa.js";import"./OverlayTrigger-dzvMh6qS.js";import"./Dialog-BiHrEAWw.js";import"./RSPContexts-DdoqaBcc.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./ControlledNotification-DFyhdCgQ.js";import"./context-CLEKsYXA.js";import"./LayoutCard-BqXQhFvn.js";import"./Accordion-DBVhvv3-.js";import"./Action-DJ16dVnI.js";import"./Alert-Bn9swion.js";import"./AlertIcon-B4i3LjbA.js";import"./AlertBadge-B-Z_FZet.js";import"./Align-qE7NmhZJ.js";import"./TableFooterRow-tTbQ-t0r.js";import"./SkeletonText-D3gw5PRP.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./Avatar-B7jo30ig.js";import"./AvatarStack-GCRCG9vj.js";import"./Badge-BM88wgML.js";import"./BigNumber-DdChOXuv.js";import"./Breadcrumb-30UhIvGz.js";import"./Link-CQXfsiwR.js";import"./Heading-4zkTqPYo.js";import"./Legend-BO-XPcOX.js";import"./FileCardList-CADZDmbR.js";import"./CodeBlock-Dx6NJdQY.js";import"./CopyButton-C-PHfocO.js";import"./Tooltip-bYhq-tOp.js";import"./react-children-utilities-DSiaUIOe.js";import"./Color-D8b8dr-e.js";import"./Content-B8GWvRnh.js";import"./Section-DPXS4_zS.js";import"./Label-BsOGPmFL.js";import"./ContextualHelpTrigger-9AdY9RaJ.js";import"./CounterBadge-Ca9fUhDU.js";import"./DonutChart-CMqab4Gx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BNBKeAQZ.js";import"./Header-Edj1w5H7.js";import"./Initials-tqv3AKZA.js";import"./InlineCode-CNZzcUkk.js";import"./LabeledValue-BHKpE3hG.js";import"./PopoverTrigger-B1k_GuHv.js";import"./Markdown-BCg6CSiV.js";import"./Separator-CxMrgUmw.js";import"./Message-Bp4nIuQ2.js";import"./MessageSeparator-U6bJZDm5.js";import"./NavigationGroup-D0_CAdq_.js";import"./Notification-DTPhDc6_.js";import"./NotificationProvider-DC5Mfz_i.js";import"./ProgressBar-rB7SKFsx.js";import"./Rating-BSwAqbXq.js";import"./Skeleton-CYJlRTn2.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
