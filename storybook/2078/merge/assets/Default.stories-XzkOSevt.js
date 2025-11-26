import{j as r}from"./iframe-D1IXLGfs.js";import{B as o}from"./Button-C4C6Tlp0.js";import{A as l}from"./ActionGroup-Dy6atzM_.js";import{ae as n,af as d}from"./TimeField-AGTx6k1i.js";import{I as s}from"./Image-BtTPpMHP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-BxNDhWjd.js";import{u as h}from"./Popover-BXbsVRKM.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./Text-D1LKMi-w.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Co7rtKcb.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./dynamic-pDnrtSWy.js";import"./Section-C53WOw1M.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./Accordion-BzVkjqgY.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./OverlayTrigger-B4YqZS9k.js";import"./Color-BS8KIqfb.js";import"./Content-BzpcLFjt.js";import"./Label-DqDuDjZM.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const Er={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Pr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Pr as __namedExportsOrder,Er as default};
