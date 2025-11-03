import{j as r}from"./iframe-C3RmV_vn.js";import{B as o}from"./Button-DaazfuBy.js";import{A as l}from"./ActionGroup-DaI6rKw9.js";import{a5 as p,a6 as d}from"./Modal-CjHUQUiD.js";import{I as n}from"./Image-B0ryPUSh.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-BE2KSBI-.js";import{u as h}from"./Popover-BrQ9WlIY.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./index-hkSQrj3P.js";import"./Text-CaziZxQU.js";import"./browser-DymlHLTF.js";import"./utils-D8HC0yU-.js";import"./EmulatedBoldText-CI-5ODle.js";import"./LoadingSpinner-DyOalyyw.js";import"./Button-CgyHIJsr.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DCRPXx9V.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./dynamic-YRcCSNg3.js";import"./getActionGroupSlot-BgdQ1S-5.js";import"./useStatic-_h3OjEkL.js";import"./OverlayTrigger-IdlugrEk.js";import"./Dialog-K1R3KO66.js";import"./RSPContexts-BOh9wduO.js";import"./OverlayArrow-FKi2RhHZ.js";import"./useControlledState-NromYU6N.js";import"./Collection-D7H86Y8V.js";import"./CollectionBuilder-CsxHJ8eB.js";import"./SelectionIndicator-BJ_0QZSn.js";import"./Separator-ev5cyWKA.js";import"./ControlledNotification-CByqMhuw.js";import"./context-BR4xGGrb.js";import"./LayoutCard-De9YTy0g.js";import"./Accordion-DeGc61A7.js";import"./Action-C26yRlV4.js";import"./Alert-D_C58G56.js";import"./AlertIcon-0DtXBii2.js";import"./AlertBadge-CNKskcx3.js";import"./Align-DNYCt6uS.js";import"./TableFooterRow-BZnfistZ.js";import"./SkeletonText-BpA-RQWQ.js";import"./ClearPropsContextView-Brt3ROUs.js";import"./Avatar-D1juHQpF.js";import"./AvatarStack-C5feK4ne.js";import"./Badge-DG403MXU.js";import"./BigNumber-CgKfebEz.js";import"./Breadcrumb-B0tIpvZK.js";import"./Link-DvQUX475.js";import"./Heading-BU4qnENK.js";import"./Legend-BSZ3J9ai.js";import"./FileCardList-DCQZnQsv.js";import"./CodeBlock-DzUKpqG9.js";import"./CopyButton-DlsGGdL3.js";import"./Tooltip-D7tr0CXI.js";import"./react-children-utilities-Mj0r6IMA.js";import"./Color-ByegzaLv.js";import"./Content-DSufA99H.js";import"./Section-BPR37q8p.js";import"./Label-D3eoPZkV.js";import"./ContextualHelpTrigger-BQ6k47a4.js";import"./CounterBadge-Ca1OGzZj.js";import"./DonutChart-6V9LvPQT.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CI4Fulyk.js";import"./Header-DaWWc1Jz.js";import"./Initials-6SKCyCkr.js";import"./InlineCode-CdmNZpBo.js";import"./LabeledValue-Ji1sW1K_.js";import"./PopoverTrigger-nHTqFl4u.js";import"./Markdown-DnuGI4cM.js";import"./Separator-B2g7KZrm.js";import"./Message-DlANTTrI.js";import"./MessageSeparator-750v-t38.js";import"./NavigationGroup-CEkjEBpj.js";import"./Notification-CELsKl2c.js";import"./NotificationProvider-Ceb0o9Cl.js";import"./ProgressBar-DOFcIVSi.js";import"./Rating-Cu404PkR.js";import"./Skeleton-tU7Rn1rq.js";const Vr={title:"Overlays/LightBox",component:p,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(p,{...a,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(p,{...a,controller:c,children:[r.jsx(n,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(n,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(p,{children:r.jsx(n,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
