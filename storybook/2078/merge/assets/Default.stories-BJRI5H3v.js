import{j as r}from"./iframe-CfnfnCWP.js";import{B as o}from"./Button-CV55_Sir.js";import{A as l}from"./ActionGroup-ptJvXf99.js";import{ag as n,ah as d,u as h}from"./Modal-Bik1OpTp.js";import{I as s}from"./Image-B7xXTfv1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-C231uJAl.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./index-jLgmF_bk.js";import"./Text-C5_UpO0B.js";import"./browser-Ch5bUTc0.js";import"./utils-DU1zOm8r.js";import"./EmulatedBoldText-CoueItQ2.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Bzg-jxuH.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./dynamic-DF8Fk99D.js";import"./getActionGroupSlot-BW2T13eN.js";import"./useStatic-tVkquGmk.js";import"./context-SSfCyC2q.js";import"./RSPContexts-D_4T2k7b.js";import"./Collection-CKHx5VpA.js";import"./CollectionBuilder-CzF4vvEU.js";import"./SelectionIndicator-CeTQtzYy.js";import"./Separator-Dc1fTfOS.js";import"./FileCardList-BnI72QuC.js";import"./Avatar-BKCKuEoN.js";import"./AlertIcon-CjvlmAGq.js";import"./Link-1qGklXs3.js";import"./ControlledNotification-CWDmevtd.js";import"./LayoutCard-leUa_8CQ.js";import"./Accordion-BY6-ouH-.js";import"./Section-DyWVtxP8.js";import"./Alert-CMM8UOVE.js";import"./AlertBadge-DPcqJ-fR.js";import"./Align-BlaWghgk.js";import"./AvatarStack-DHsLYloj.js";import"./BigNumber-CStkPgHw.js";import"./Breadcrumb-BgIohuPw.js";import"./Heading-OB0ZBXrr.js";import"./Legend-C4_L9Y3A.js";import"./Color-BOS3g2Xf.js";import"./TableFooterRow-CoEvYc5I.js";import"./SkeletonText-O8BDJFpb.js";import"./Content-DUix3Zjx.js";import"./Label-bL_gCZh0.js";import"./CounterBadge-OnbWpZxx.js";import"./DonutChart-Dz5CcphO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DslqW-TM.js";import"./Header-D8RivKj8.js";import"./Initials-DkX37n9j.js";import"./InlineCode-W52tiGxP.js";import"./Separator-DigxSFZV.js";import"./MessageSeparator-D39RUA6I.js";import"./NavigationGroup-BqeXEG9A.js";import"./Notification-B_cV56tQ.js";import"./NotificationProvider-AKPPj8Tt.js";import"./ProgressBar-DxOLLNnY.js";import"./Skeleton-DQGH7RxM.js";const Cr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
