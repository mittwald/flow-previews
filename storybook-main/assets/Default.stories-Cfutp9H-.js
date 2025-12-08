import{j as r}from"./iframe-Bl94pFC8.js";import{B as o}from"./Button-AfVTn90Y.js";import{A as l}from"./ActionGroup-CYfLKjjP.js";import{ae as n,af as d}from"./TimeField-Dr4KQ3tF.js";import{I as p}from"./Image-zwt55Zy5.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-SCcj4Iql.js";import{u as h}from"./Popover-Vgu8QpdP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./Text-DCRPGY0z.js";import"./browser-BA3Ei853.js";import"./utils-zKD0YG1w.js";import"./EmulatedBoldText-CCSVbhNW.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./Button-Bw0lcVwr.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DhigdGAb.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./dynamic-CIZa5yke.js";import"./Section-LN95lzay.js";import"./context-BpghOljr.js";import"./RSPContexts-CHIkVN0y.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./Separator-R67wGb_t.js";import"./useStatic-gdaW8QxK.js";import"./Accordion-CCFKHcUe.js";import"./Alert-DXgIB8vT.js";import"./AlertIcon-KdhHTMr9.js";import"./AlertBadge-Bsnm1FW5.js";import"./Align-vdE1Hw63.js";import"./TableFooterRow-yXwprf4A.js";import"./SkeletonText-BxAwRS8K.js";import"./Avatar-CBi98t6a.js";import"./AvatarStack-BCyimaIH.js";import"./Badge-CWRZ3wRS.js";import"./BigNumber-BOmO8_9H.js";import"./Breadcrumb-qLsGxUTH.js";import"./Link-CxjACdrd.js";import"./Heading-gu5HE-XK.js";import"./Legend-Bk5heO9K.js";import"./FileCardList-BKpHqFCP.js";import"./OverlayTrigger-CoDb3nvg.js";import"./Color-BEk31k5R.js";import"./Content-CFmPNCl8.js";import"./Label-DSusOXDR.js";import"./ContextualHelpTrigger-CUwhkzFI.js";import"./CounterBadge-Dy2ngnrh.js";import"./DonutChart-DyH97w7v.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Doe0mmHM.js";import"./Header-DENQ7Dxk.js";import"./Initials-TwvVZF9j.js";import"./InlineCode-CTUORIgt.js";import"./PopoverTrigger-om_tcJyU.js";import"./Separator-F44i8CmN.js";import"./Message-CzqxdJ5a.js";import"./MessageSeparator-DcMZZRKU.js";import"./NavigationGroup-CUhbVSuu.js";import"./Notification-bDPr6UcS.js";import"./NotificationProvider-BFKLdZBe.js";import"./ProgressBar-BdgJs4zS.js";import"./Rating-DCow-Fra.js";import"./Skeleton-BOcdA3Th.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
