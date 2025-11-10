import{j as r}from"./iframe-Bzotfv2d.js";import{B as o}from"./Button-B5Yu3Ofr.js";import{A as l}from"./ActionGroup-THbN8B7U.js";import{a6 as p,a7 as d}from"./Modal-COByggjk.js";import{I as n}from"./Image-CQeciW3U.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-DA_wmemp.js";import{u as h}from"./Popover-DIj_9e80.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./index-s2lSSiFB.js";import"./Text-C-DP5r93.js";import"./browser-Da6kOqay.js";import"./utils-F6vOfgTC.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CZ6Qg3vv.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./dynamic-XEUS-i0b.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";import"./OverlayTrigger-DYCZz7an.js";import"./Dialog-DRtGMcXs.js";import"./RSPContexts-94nDykOv.js";import"./OverlayArrow-w3VLB_7G.js";import"./useControlledState-BqxXkR6q.js";import"./Collection-BBYs79dF.js";import"./CollectionBuilder-BcriWVNa.js";import"./SelectionIndicator-CkQFqim6.js";import"./Separator-D-my95s-.js";import"./ControlledNotification-TPI0xyld.js";import"./context-DytNMng2.js";import"./LayoutCard-J6TlJO4o.js";import"./Accordion-BptsSE4V.js";import"./Action-BGM-IIID.js";import"./Alert-eyCmAgC6.js";import"./AlertIcon-CgsKNc5r.js";import"./AlertBadge-S_MnisZk.js";import"./Align-BJUu4eGR.js";import"./TableFooterRow-DxgEmBL4.js";import"./SkeletonText-OeVXjdS7.js";import"./ClearPropsContextView-CsYOqVLr.js";import"./Avatar-cPF8oF7Q.js";import"./AvatarStack-BkUGgLvx.js";import"./Badge-CdzfZfsb.js";import"./BigNumber-BNjBbCLr.js";import"./Breadcrumb-B6JxXwVP.js";import"./Link-BAhU_8bm.js";import"./Heading-DTNjAjmU.js";import"./Legend-f-p8RcrW.js";import"./FileCardList-B5PDKscr.js";import"./CodeBlock-CnJ67bJ1.js";import"./CopyButton-sBgtGoeo.js";import"./Tooltip-DpS8robH.js";import"./react-children-utilities-X89ZXH3Y.js";import"./Color-Ch6SLtqy.js";import"./Content-D54xBao4.js";import"./Section-BjhFx9b4.js";import"./Label-9yzciBbq.js";import"./ContextualHelpTrigger-vzTqAVe_.js";import"./CounterBadge-BT0YRSln.js";import"./DonutChart-BmBQlJrD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGT6z0iR.js";import"./Header-DK-dy0Ik.js";import"./Initials-BjRxm0kU.js";import"./InlineCode-Dw8GCp6l.js";import"./LabeledValue-BUIGIaaH.js";import"./PopoverTrigger-Q37AsHcH.js";import"./Markdown-MT0EBmbc.js";import"./Separator-BnZ4szOt.js";import"./Message-DSIYRhqg.js";import"./MessageSeparator-DiJiVxnC.js";import"./NavigationGroup-BnO0sRue.js";import"./Notification-BIJ3tqS6.js";import"./NotificationProvider-Bad9adCH.js";import"./ProgressBar-DxbK2q7l.js";import"./Rating-CvLf8bfK.js";import"./Skeleton-BSBbHv2z.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Xr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,m as WithImageTrigger,e as WithoutFitScreen,Xr as __namedExportsOrder,Vr as default};
