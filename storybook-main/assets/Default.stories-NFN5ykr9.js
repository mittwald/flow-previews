import{j as r}from"./iframe-Dswl8YqW.js";import{B as o}from"./Button-BlDvIS3Y.js";import{A as l}from"./ActionGroup-DkHaLZ1F.js";import{ag as n,ah as d,u as h}from"./Modal-CHITtey4.js";import{I as s}from"./Image-CfXDNzs_.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-Dt5PaZc0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./Text-CuuEScv1.js";import"./browser-BqLtz9Zq.js";import"./utils-7BbO5OC0.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Button-CdXhm7oQ.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DC5A8m43.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./dynamic-DeI_eRCJ.js";import"./Section-B6yNflVq.js";import"./context-BYCR6GGl.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Link-2_MM-8En.js";import"./ControlledNotification-Cdu3NdkW.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./Label-CMIuj4QW.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
