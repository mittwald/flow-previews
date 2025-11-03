import{j as r}from"./iframe-9u6Ufs56.js";import{B as o}from"./Button-_dn7QVPB.js";import{A as l}from"./ActionGroup-CWJ1NwlO.js";import{a5 as p,a6 as d}from"./Modal-DRS8W_HN.js";import{I as n}from"./Image-B9Cscj9i.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-e2U-5o25.js";import{u as h}from"./Popover-U_HYlJek.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./index-B3MDoUBn.js";import"./Text-DBIGrc3m.js";import"./browser-BeFavaxk.js";import"./utils-8ZPSUmH_.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-OI1cZ2Vi.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./dynamic-CQrWC-Om.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./useStatic-DAyA5uHy.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./ControlledNotification-irCIGaEl.js";import"./context-C-QTHw1p.js";import"./LayoutCard-rFftX_5x.js";import"./Accordion-B0i5v90U.js";import"./Action-M6Kgfb_M.js";import"./Alert-BQ8YQR_W.js";import"./AlertIcon-C5b9VCt7.js";import"./AlertBadge-CNA6uKSn.js";import"./Align-8__Vbjw2.js";import"./TableFooterRow-B391BAgL.js";import"./SkeletonText-q8x3n-e-.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./Avatar-C2H-R3m6.js";import"./AvatarStack-D6bPCT5Z.js";import"./Badge-CIynJGVc.js";import"./BigNumber-zhac89k-.js";import"./Breadcrumb-6vQEAbHW.js";import"./Link-Brltyk4S.js";import"./Heading-3nkwrjYk.js";import"./Legend-DEpFCRHA.js";import"./FileCardList-BaVbzUxM.js";import"./CodeBlock-BiC9piZk.js";import"./CopyButton-B9mW4h-U.js";import"./Tooltip-BKgm2KH6.js";import"./react-children-utilities-B8hFFp2J.js";import"./Color-CZ1w209L.js";import"./Content-De6yv-na.js";import"./Section-Czu0clYN.js";import"./Label-D88lgx7Z.js";import"./ContextualHelpTrigger-nxMOucmM.js";import"./CounterBadge-KUrZxjtT.js";import"./DonutChart-ClsX_6Hx.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CMdk7KOR.js";import"./Header-B-ndv2TP.js";import"./Initials-CPfqnq7b.js";import"./InlineCode-RQOLEMSt.js";import"./LabeledValue-B3MQdaw0.js";import"./PopoverTrigger-CUVq5mS7.js";import"./Markdown-AKsw2lGU.js";import"./Separator-BA2h878Y.js";import"./Message-jo39yurl.js";import"./MessageSeparator-DSUYeihd.js";import"./NavigationGroup-C2BtXn54.js";import"./Notification-CrQoxCY-.js";import"./NotificationProvider-DwOg9r8C.js";import"./ProgressBar-DFtsm5DE.js";import"./Rating-DgNl63vx.js";import"./Skeleton-Bq2Z_NYu.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
