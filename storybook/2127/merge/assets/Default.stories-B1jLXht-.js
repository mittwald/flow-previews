import{j as r}from"./iframe-DKDdzEg2.js";import{B as o}from"./Button-IIDunxYf.js";import{A as l}from"./ActionGroup-DccX8bro.js";import{a6 as p,a7 as d}from"./Modal-CwliNNiJ.js";import{I as n}from"./Image-BWRlhe9x.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CYZefWcZ.js";import{u as h}from"./Popover-FiU_odVZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./index-BpsioLCE.js";import"./Text-CjflxeLx.js";import"./browser-CFpNIPwD.js";import"./utils-glgR2nbC.js";import"./EmulatedBoldText-CD_LMSIk.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./Button-CPtKzFV4.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BHOWQ-F6.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./dynamic-Bw-gnOjZ.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./useStatic-D7KAuRzE.js";import"./OverlayTrigger-BFzT5tm9.js";import"./Dialog-B3clCL3D.js";import"./RSPContexts-CyAJ8woy.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./ControlledNotification-A-nlkOWl.js";import"./context-CDCUS0mP.js";import"./LayoutCard-BiMl8twz.js";import"./Accordion-B6qbIRBj.js";import"./Action-Bo6ZQC_V.js";import"./Alert-BKcRTWJ1.js";import"./AlertIcon-DTKwqTaw.js";import"./AlertBadge-qExA_A1s.js";import"./Align-YF_VCib_.js";import"./TableFooterRow-B5kek3pc.js";import"./SkeletonText-BFsiKAVX.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./Avatar-HfBKa7-S.js";import"./AvatarStack-BAqbTSUA.js";import"./Badge-l5GKE6_A.js";import"./BigNumber-59jK5BSe.js";import"./Breadcrumb-81fsSz21.js";import"./Link-D6MGqqc4.js";import"./Heading-Dg8JptjO.js";import"./Legend-w3fonmao.js";import"./FileCardList-B9Uf0zuc.js";import"./CodeBlock-BFll9a2A.js";import"./CopyButton-CpBG4-QY.js";import"./Tooltip-DjRJxdw8.js";import"./react-children-utilities-5wsaFL6D.js";import"./Color-BNN9qFvq.js";import"./Content-C0vcMxy5.js";import"./Section-BlYXDkFo.js";import"./Label-RGDjpvHy.js";import"./ContextualHelpTrigger-CVj6wYkq.js";import"./CounterBadge-5IM3_DLn.js";import"./DonutChart-DfsKudDh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cq7vsP2F.js";import"./Header-CycXZnr3.js";import"./Initials-D_TulZuS.js";import"./InlineCode-DJEF18pw.js";import"./LabeledValue-BwyMvv4-.js";import"./PopoverTrigger-C0NOt86m.js";import"./Markdown-DvRsFFz3.js";import"./Separator-DtSoVEwv.js";import"./Message-Dbcl2XRw.js";import"./MessageSeparator-CSbQdfrJ.js";import"./NavigationGroup-CHqgAgY6.js";import"./Notification-BDRnPedH.js";import"./NotificationProvider-CzLfo5F4.js";import"./ProgressBar-k15nJaNS.js";import"./Rating-CaF2rOcE.js";import"./Skeleton-DHQXuh7L.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
