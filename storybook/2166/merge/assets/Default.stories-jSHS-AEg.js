import{j as r}from"./iframe-2LgrIkRd.js";import{B as o}from"./Button-Cq_XMZKZ.js";import{A as l}from"./ActionGroup-ByO56kJD.js";import{ae as n,af as d}from"./TimeField-D5pHgFYZ.js";import{I as p}from"./Image-OXpu_gFV.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-D60ymTiJ.js";import{u as h}from"./Popover-BsRqhSlP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./Text-CmoFb8XW.js";import"./browser-DE_neHhx.js";import"./utils-BnxtooML.js";import"./EmulatedBoldText-DybYTyQs.js";import"./LoadingSpinner-C9JNq8vi.js";import"./Button-EKWPB4tZ.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CE6tX24V.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./dynamic-DCrPXVv3.js";import"./Section-BlB_8KjT.js";import"./context-lHzLNF7G.js";import"./RSPContexts-Dor-CtSJ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./useStatic-yAY0kCCB.js";import"./Accordion-CyEZGz5t.js";import"./Alert-fpXXpeEV.js";import"./AlertIcon-5TMA0R6D.js";import"./AlertBadge-DD7luv0F.js";import"./Align-C4SFZ7ME.js";import"./TableFooterRow-CUlgLSqo.js";import"./SkeletonText-BGsYoe3X.js";import"./Avatar-C4UmcXDE.js";import"./AvatarStack-B-BstC3Q.js";import"./Badge-BgCXtZ0L.js";import"./BigNumber-CVZSlJts.js";import"./Breadcrumb-C_L5ewoM.js";import"./Link-BdaxMzeJ.js";import"./Heading-DilTAoZJ.js";import"./Legend-fylTc-bA.js";import"./FileCardList-CrJP7G2S.js";import"./OverlayTrigger-CbpE00TN.js";import"./Color-BYYxr454.js";import"./Content-NoHT_5O2.js";import"./Label-DREYQWel.js";import"./ContextualHelpTrigger-TtfataTj.js";import"./CounterBadge-CFnk4a6U.js";import"./DonutChart-DInnhXKC.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-S15YJh2T.js";import"./Header-DRDABVjU.js";import"./Initials-CWWZSIcH.js";import"./InlineCode-FHoqqrut.js";import"./PopoverTrigger-Cj-rCTR6.js";import"./Separator-Bqiy7SnE.js";import"./Message-cn2BI7mT.js";import"./MessageSeparator-CfbbRyt-.js";import"./NavigationGroup-DuKvOMC6.js";import"./Notification-BGXUVOCQ.js";import"./NotificationProvider-Cexjnfj1.js";import"./ProgressBar-D0rsyG47.js";import"./Rating-IUsLANbY.js";import"./Skeleton-TGcUA8kF.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
