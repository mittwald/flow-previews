import{j as r}from"./iframe-RkNYvT67.js";import{B as o}from"./Button-Cq2sGnot.js";import{A as l}from"./ActionGroup-U66WTNaW.js";import{ah as n,ai as d,u as h}from"./Modal-xVut-wtw.js";import{I as s}from"./Image-Du0dM-WM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-Bv_c0irh.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./index-CYuD20gW.js";import"./Text-CGI13fZ7.js";import"./browser-O08qKn7T.js";import"./utils-Cw0V24oX.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./LoadingSpinner-C8ge1gn9.js";import"./Button-BaIk0AjS.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DpnYhhMC.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./dynamic-D525euPD.js";import"./Section-C9URTgx-.js";import"./context-QFyIn5AW.js";import"./RSPContexts-iWdoYzW5.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./useStatic-DSkca5nN.js";import"./FileCardList-BOij6tHP.js";import"./Avatar-D-Vh6qCe.js";import"./AlertIcon-Dfi2fKkE.js";import"./Link-CcuThIFH.js";import"./ControlledNotification-Bv9UL5dV.js";import"./Flex-B3wiFoJ1.js";import"./Accordion-DmcKhtrA.js";import"./Alert-D3bKy03a.js";import"./AlertBadge-Bdr69yR6.js";import"./Align-fxln_Dgz.js";import"./AvatarStack-C0E2D8b6.js";import"./BigNumber-DNM4Asro.js";import"./Breadcrumb-BVRejx5y.js";import"./Heading-4A_9k7B7.js";import"./Legend-CfpByMiV.js";import"./Color-CF8_g_Rt.js";import"./TableFooterRow-DKyMLwZS.js";import"./SkeletonText-mgkPpEwS.js";import"./Content-CugomRfa.js";import"./Label-CSQY-O06.js";import"./CounterBadge-B73tBZKq.js";import"./DonutChart-Bi52zQsm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-2cEex6ck.js";import"./Header-Daa8R0Vo.js";import"./Initials-BYiwEIK7.js";import"./InlineCode-vcmJPAHr.js";import"./LayoutCard-552oNMIB.js";import"./Separator-BzLOFugX.js";import"./MessageSeparator-CT9RS-8F.js";import"./NavigationGroup-bJXjtOzI.js";import"./Notification-DMDBZmDj.js";import"./NotificationProvider-Cdy3Vamk.js";import"./ProgressBar-YmHjvNRH.js";import"./Rating-B1PBw_H7.js";import"./Skeleton-DFoxDyNL.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
