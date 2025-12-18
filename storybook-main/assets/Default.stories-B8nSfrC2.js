import{j as r}from"./iframe-BA9q8iRx.js";import{B as o}from"./Button-DkX1WVEp.js";import{A as l}from"./ActionGroup-BrY_lNP4.js";import{ae as n,af as d}from"./TimeField-Bb9rzd1E.js";import{I as p}from"./Image-D59ZwdJj.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-Ddu6VgyQ.js";import{u as h}from"./Popover-_2bXyvx4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./Text-Ms6nMBSf.js";import"./browser-XONib2dq.js";import"./utils-QcIDpANH.js";import"./EmulatedBoldText-W46YB4wy.js";import"./LoadingSpinner-CRPfYfmX.js";import"./Button-BZr9UZHX.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cn4rMbpf.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./dynamic-HfD9Y7Ln.js";import"./Section-DoGwkV6i.js";import"./context-YS9jQ858.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./useStatic-CdSu_vHo.js";import"./Accordion-De7o6t37.js";import"./Alert-BjtrXFM-.js";import"./AlertIcon-GpJO-Z9B.js";import"./AlertBadge-sp5O60vm.js";import"./Align-BWXUYBVs.js";import"./TableFooterRow-Bg6u5xet.js";import"./SkeletonText-DWBy4XXw.js";import"./Avatar-FlDD9lPa.js";import"./AvatarStack-B7IAlHRg.js";import"./Badge-S78DqCsX.js";import"./BigNumber-BUzL_XWj.js";import"./Breadcrumb-BFLF3mqz.js";import"./Link-VeHt-BOj.js";import"./Heading-C0QNs5qM.js";import"./Legend-fwXNEwdb.js";import"./FileCardList-DuDEn_SG.js";import"./OverlayTrigger-Cse3DARB.js";import"./Color-BbyB7Xdi.js";import"./Content-54YS0aSC.js";import"./Label-CWXXLsJz.js";import"./ContextualHelpTrigger-CZA_SHxX.js";import"./CounterBadge-KIh2ANDP.js";import"./DonutChart-BD3mO4TH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlyfKHZS.js";import"./Header-BmRR_eGb.js";import"./Initials--0Iralrr.js";import"./InlineCode-DDc9VIyV.js";import"./PopoverTrigger-CMZxvGxV.js";import"./Separator-D9V6A4pH.js";import"./Message-DDdzUGgv.js";import"./MessageSeparator-C3c69HOv.js";import"./NavigationGroup-guqWICeG.js";import"./Notification-NBit0Jcr.js";import"./NotificationProvider-CRnsHJPf.js";import"./ProgressBar-B-88x21X.js";import"./Rating-TF40lZ1V.js";import"./Skeleton-COhBmV-c.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
