import{j as r}from"./iframe-MIgL3t-o.js";import{B as o}from"./Button-Bm-VICQC.js";import{A as l}from"./ActionGroup-DbS5du-g.js";import{ae as n,af as d}from"./TimeField-BFURGqwq.js";import{I as p}from"./Image-DAc7VsOT.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-CaixpT4r.js";import{u as h}from"./Popover-CB28VzMp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D08VhguK.js";import"./mergeRefs-DFlQ0eaD.js";import"./index-D5QMlcQF.js";import"./Text-CBtQMAPT.js";import"./browser-ZlggRhGh.js";import"./utils-DBPvjchL.js";import"./EmulatedBoldText-DS7oXEiE.js";import"./LoadingSpinner-B8Zs_K9s.js";import"./Button-BoUtMxCQ.js";import"./ProgressBar-B2x1EXTK.js";import"./Hidden-DewfgLfM.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BN8VYe9y.js";import"./useFocusRing-qMh6fvoq.js";import"./useFocusable-LR8FLvJr.js";import"./useLocalizedStringFormatter-D7iWn3FU.js";import"./dynamic-T1pzav9P.js";import"./Section-DSxo8JPS.js";import"./context-BpnnESCC.js";import"./RSPContexts-ByAL28zK.js";import"./Collection--DnqN1NB.js";import"./CollectionBuilder-49chxnhy.js";import"./SelectionIndicator-BNvv8rtj.js";import"./Separator-BNhZRG5D.js";import"./useStatic-Drcz9tkt.js";import"./Accordion-7dsQrpkO.js";import"./Alert-DsqqMK6J.js";import"./AlertIcon-Cr2UlT4F.js";import"./AlertBadge-C2q-OhWS.js";import"./Align-Bpq8YyVH.js";import"./TableFooterRow-1wnszgLS.js";import"./SkeletonText-DSGRe1mp.js";import"./Avatar-COceV_It.js";import"./AvatarStack-B6vmc5su.js";import"./Badge-cRRWToon.js";import"./BigNumber-CK9gyGUq.js";import"./Breadcrumb-Z996jVAQ.js";import"./Link-e4nLwp4o.js";import"./Heading-BGfwvjE9.js";import"./Legend-BggJIFX2.js";import"./FileCardList-C-TQ3fUn.js";import"./OverlayTrigger-BTgo3ogI.js";import"./Color-_UsPKinm.js";import"./Content-6iLmORfW.js";import"./Label-DND0p0GF.js";import"./ContextualHelpTrigger-D-Yb9hBa.js";import"./CounterBadge-COZTsGXp.js";import"./DonutChart-DdGv6zP9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcofpUEQ.js";import"./Header-BMcQReSK.js";import"./Initials-Dgf_eP_2.js";import"./InlineCode-CpcRW1dM.js";import"./PopoverTrigger-bsw-s53Z.js";import"./Separator-B-iBVOSO.js";import"./Message-Chhe13yv.js";import"./MessageSeparator-C88ZuTHj.js";import"./NavigationGroup-tZPVhu6S.js";import"./Notification-Dr7sL_d0.js";import"./NotificationProvider-C92LmpC-.js";import"./ProgressBar-84Q58tlo.js";import"./Rating-1xjU0K14.js";import"./Skeleton-Bn9kW_6b.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
