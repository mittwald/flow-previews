import{j as r}from"./iframe-Bl9ZNzly.js";import{B as o}from"./Button-C43dgBgP.js";import{A as l}from"./ActionGroup-B7w-C4eg.js";import{ae as n,af as d}from"./TimeField-B_NJ8Ky6.js";import{I as p}from"./Image-CXwyLNTy.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CdD_Vr9D.js";import{u as h}from"./Popover-B6t3DWPA.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./Text-DVbVn-gX.js";import"./browser-DgAJHjYP.js";import"./utils-Ba3Wc4Cj.js";import"./EmulatedBoldText-C2RodUkO.js";import"./LoadingSpinner-BmMjYWfH.js";import"./Button-CmlWxNPG.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BsRR-XG9.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./dynamic-DN5dqmlD.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./useStatic-CHy8y9O8.js";import"./Accordion-BUjWPilm.js";import"./Section-CDNuzGQn.js";import"./context-B3t2ll3v.js";import"./RSPContexts-CKPxvq-y.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./Alert-C0kR42rQ.js";import"./AlertIcon-CHB7dkgT.js";import"./AlertBadge-D4s5aIEX.js";import"./Align-CpM0_uVF.js";import"./TableFooterRow-DMeEteug.js";import"./SkeletonText-CN7sz2xZ.js";import"./Avatar-BbmMq3FT.js";import"./AvatarStack-B2yM02yc.js";import"./Badge-9mW_yPuD.js";import"./BigNumber-DoG3YCKA.js";import"./Breadcrumb-Cp2zriY7.js";import"./Link-5zhhGX89.js";import"./Heading-6r91OnV5.js";import"./Legend-DkfP-nrK.js";import"./FileCardList-Cz5qlLht.js";import"./OverlayTrigger-DDLdbzyu.js";import"./Color-DNqf-ZTv.js";import"./Content-C5jzPnX3.js";import"./Label-DNzUxKIf.js";import"./ContextualHelpTrigger-ckkh_Rgl.js";import"./CounterBadge-D8ojNEaL.js";import"./DonutChart-CwEutUfZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-LspQ7VGl.js";import"./Header-BkQqDlqE.js";import"./Initials-I4jIDVmP.js";import"./InlineCode-B5iqyuuQ.js";import"./PopoverTrigger-DSjKq8wS.js";import"./Separator-Cyan_bJo.js";import"./Message-CFIx3glm.js";import"./MessageSeparator-BMRRM_XG.js";import"./NavigationGroup-Dk3SJKPd.js";import"./Notification-CB0idSLS.js";import"./NotificationProvider-CofHTDPs.js";import"./ProgressBar-Btc4VOSd.js";import"./Rating-AGxiWe12.js";import"./Skeleton-Bm0zXdSH.js";const _r={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
