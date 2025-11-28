import{j as r}from"./iframe-C3akzpV1.js";import{B as o}from"./Button-C_UT-1QU.js";import{A as l}from"./ActionGroup-BTjiPvx2.js";import{ae as n,af as d}from"./TimeField-DAn-563Z.js";import{I as p}from"./Image-dY_1AQAY.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-C4SgI6OV.js";import{u as h}from"./Popover-Ds9ANfz7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqwY9XEq.js";import"./mergeRefs-BXY85axa.js";import"./index-BSfx5kph.js";import"./Text-ItbFkn--.js";import"./browser-mTtOjkkJ.js";import"./utils-FFzu0Pw2.js";import"./EmulatedBoldText-B3LO_M0J.js";import"./LoadingSpinner-DNlomGtB.js";import"./Button-D5o5rXyo.js";import"./ProgressBar-72_GXUSH.js";import"./Hidden-Bcrhq7St.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BgN9eCaX.js";import"./useFocusRing-DQs4OSUU.js";import"./useFocusable-CC2L6-Hl.js";import"./useLocalizedStringFormatter-BXg2U2e2.js";import"./dynamic-O2zPY50D.js";import"./Section-5SrLYku3.js";import"./context-CfnX_riS.js";import"./RSPContexts-DVc_zOA3.js";import"./Collection-DTGfPiJx.js";import"./CollectionBuilder-BExMR5Fd.js";import"./SelectionIndicator-B2cJMogF.js";import"./Separator-C1Ah5vxC.js";import"./useStatic-DFnfS72f.js";import"./Accordion-CnycAhcp.js";import"./Alert-DSPCig_4.js";import"./AlertIcon-KuJe6yIM.js";import"./AlertBadge-DKJSIQMi.js";import"./Align-CXBZBCXD.js";import"./TableFooterRow-DBL3SUB0.js";import"./SkeletonText-CSIMGEyC.js";import"./Avatar-CfRfmXe3.js";import"./AvatarStack-DoZxY-NC.js";import"./Badge-A9sRZW6O.js";import"./BigNumber-DDJD3MBR.js";import"./Breadcrumb-Cdr0vGx4.js";import"./Link-Yn6v2d1m.js";import"./Heading-Dx6berQj.js";import"./Legend-D_mPT_Dz.js";import"./FileCardList-DVpuYyK9.js";import"./OverlayTrigger-BeAJLsRg.js";import"./Color-C0tW3a4A.js";import"./Content-D_Dg4gNK.js";import"./Label-DuiJLVmM.js";import"./ContextualHelpTrigger-B4NbXTkX.js";import"./CounterBadge-2MxVkVfw.js";import"./DonutChart-DDZkVGZJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQeVhZkV.js";import"./Header-P2jmXQ5Q.js";import"./Initials-CcNlP_Ax.js";import"./InlineCode-kLchHmKQ.js";import"./PopoverTrigger-DBjbYvg8.js";import"./Separator-B02tK38r.js";import"./Message-DJdW1Dm_.js";import"./MessageSeparator-Ckz-pkPt.js";import"./NavigationGroup-G3mKXWuk.js";import"./Notification-Bn7dQSYD.js";import"./NotificationProvider-RbXQAcKo.js";import"./ProgressBar-BfOMQEaa.js";import"./Rating-DL9Taqdj.js";import"./Skeleton-sg2lGCG1.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const _r=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,_r as __namedExportsOrder,Pr as default};
