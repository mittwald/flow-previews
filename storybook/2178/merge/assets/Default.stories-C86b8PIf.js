import{j as r}from"./iframe-C5kwxwrP.js";import{B as o}from"./Button-xhQyV7SB.js";import{A as l}from"./ActionGroup-KhTdUE8n.js";import{ae as n,af as d}from"./TimeField-BYvcgqwg.js";import{I as p}from"./Image-xuezAXss.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-DN2_qlIM.js";import{u as h}from"./Popover-8f8WewP5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./Text-D7zEodsr.js";import"./browser-CdNWfkH8.js";import"./utils-ClkSWM7u.js";import"./EmulatedBoldText-B3gCae9O.js";import"./LoadingSpinner-BXFlmGo5.js";import"./Button-BX1O3153.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CDCpqoSP.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./dynamic-DeUr6npx.js";import"./Section-CTfCzMjt.js";import"./context-B1WvD-_p.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./useStatic-BI_2AgVn.js";import"./Accordion-_D2E3Sdx.js";import"./Alert-CXp9JRJ_.js";import"./AlertIcon-NlAbnesU.js";import"./AlertBadge-DvJ4aslu.js";import"./Align-C7QGDLuz.js";import"./TableFooterRow-Dmtj36Oo.js";import"./SkeletonText-BOPkQIJz.js";import"./Avatar-B8RfKqK_.js";import"./AvatarStack-DMuCDYvd.js";import"./Badge-DjvMDfrb.js";import"./BigNumber-BUKpylgi.js";import"./Breadcrumb-sCKR4Igg.js";import"./Link-vKMcGo7K.js";import"./Heading-SC8_jTYN.js";import"./Legend-y0Ar6iWb.js";import"./FileCardList-Cn86yoca.js";import"./OverlayTrigger-Br3xhPgq.js";import"./Color-B-qsF8pt.js";import"./Content-BKplhx8p.js";import"./Label-g_jJNVJ9.js";import"./ContextualHelpTrigger-Dfubfga1.js";import"./CounterBadge-CFFm22KU.js";import"./DonutChart-DCgU6wRU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5xFdcQ5.js";import"./Header-Cl9fUDWk.js";import"./Initials-C7J0wROu.js";import"./InlineCode-CiNw8bdK.js";import"./PopoverTrigger-BPBAKMHr.js";import"./Separator-BrRhA1HQ.js";import"./Message-BzU_4CRb.js";import"./MessageSeparator-B6AUCd9I.js";import"./NavigationGroup-CVIW0udI.js";import"./Notification-Du18cKPe.js";import"./NotificationProvider-BI6xuOIs.js";import"./ProgressBar-D-RT1H5h.js";import"./Rating-sNa6Va53.js";import"./Skeleton-ByOM2YeZ.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
