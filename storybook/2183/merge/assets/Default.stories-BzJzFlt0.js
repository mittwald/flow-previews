import{j as r}from"./iframe-DJotDYDy.js";import{B as o}from"./Button-CQDQfA67.js";import{A as l}from"./ActionGroup-C7fdOZLN.js";import{ae as n,af as d}from"./TimeField-BlAfO89Z.js";import{I as p}from"./Image-DuNd2GJV.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a5 as g}from"./IconWarning-B2TzUZi8.js";import{u as h}from"./Popover-CTYLH_EU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C8D7pSNe.js";import"./mergeRefs-TkKWhRS-.js";import"./index-ebT-aqWZ.js";import"./Text-D93KUIkM.js";import"./browser-D3MZEWQb.js";import"./utils-C6pspRr_.js";import"./EmulatedBoldText-DL9TulOO.js";import"./LoadingSpinner-C00dVMXY.js";import"./Button-Dv79gn0L.js";import"./ProgressBar-Bd3Cq33t.js";import"./Hidden-W-9e78A-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BRylSH4L.js";import"./useFocusRing-C6VIijHL.js";import"./useFocusable-CiM2gaeN.js";import"./useLocalizedStringFormatter-BEYdlta5.js";import"./remote-C1ZUFjaQ.js";import"./dynamic-D8klVav1.js";import"./Section-Bz15vzU3.js";import"./context-OUVwQ3_j.js";import"./RSPContexts-CU0-oOpl.js";import"./Collection-BohX5TfD.js";import"./CollectionBuilder-BdsPzAgw.js";import"./SelectionIndicator-CS7AIL_l.js";import"./Separator-D2bXbcR5.js";import"./useStatic-Dv4cIFiB.js";import"./Accordion-zR5eFsCn.js";import"./Alert-DLOSTbSN.js";import"./AlertIcon-CudStmFb.js";import"./AlertBadge-hHuvqtIQ.js";import"./Align-Dk0iJg5X.js";import"./TableFooterRow-DVt43RQ5.js";import"./SkeletonText-Ca5w9B9h.js";import"./Avatar-CanBm8d9.js";import"./AvatarStack-CkGqbJia.js";import"./Badge-D6gkAHgL.js";import"./BigNumber-CoSdM1jp.js";import"./Breadcrumb-OJI6AK0i.js";import"./Link-Br48FmRg.js";import"./Heading-C_Kr3DP-.js";import"./Legend-BG_Ok682.js";import"./FileCardList-BHXDHcva.js";import"./OverlayTrigger-Ba9XbFcO.js";import"./Color-DSNVJGOK.js";import"./Content-Cmsz75X5.js";import"./Label-DswoIiqU.js";import"./ContextualHelpTrigger-C6QZhAxg.js";import"./CounterBadge-DIAsQ6Mo.js";import"./DonutChart-CDa6nqpQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CShNVj2X.js";import"./Header-LVC8PwXi.js";import"./Initials-Dpb5-Mu6.js";import"./InlineCode-CS-pupFg.js";import"./PopoverTrigger-CTOjZswe.js";import"./Separator-DdvEDZlm.js";import"./Message-BphMRukK.js";import"./MessageSeparator-DL5Mtc4a.js";import"./NavigationGroup-GlfagvwS.js";import"./Notification-Bfz10Opj.js";import"./NotificationProvider-BEeuteXk.js";import"./ProgressBar-DEoqe-N6.js";import"./Rating-1LXSamgX.js";import"./Skeleton-DH-hjyZA.js";const _r={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Rr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Rr as __namedExportsOrder,_r as default};
