import{j as r}from"./iframe-DZYTde4e.js";import{B as o}from"./Button-CI_UMDNZ.js";import{A as l}from"./ActionGroup-Ckwbfgsv.js";import{ae as n,af as d}from"./TimeField-D-kTf3v3.js";import{I as p}from"./Image-EqBeX_Jm.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-DXCUbPmL.js";import{u as h}from"./Popover-DM3qcDl0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgtZzzdB.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./Text-BDClvQAl.js";import"./browser-D1RFTwuv.js";import"./utils-Z6vXhZ96.js";import"./EmulatedBoldText-S-B02nx0.js";import"./LoadingSpinner-qhZotF0H.js";import"./Button-CC2_Lwz2.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Du59aHbH.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./dynamic-Cr3CK9yB.js";import"./Section-BS2Y3V6J.js";import"./context-CBzv9cN1.js";import"./RSPContexts-BlMA0jp2.js";import"./Collection-BPkXYQex.js";import"./CollectionBuilder-D0jI_Gb0.js";import"./SelectionIndicator-BtmzIdOy.js";import"./Separator-B8KzwdIi.js";import"./useStatic-Cc8Tg3eq.js";import"./Accordion-DiPyOI-t.js";import"./Alert-o31AdO5J.js";import"./AlertIcon-DI40NDQv.js";import"./AlertBadge-B-5ctEFQ.js";import"./Align-Bd9WPaYv.js";import"./TableFooterRow-DLS1mk-5.js";import"./SkeletonText-BUQiET49.js";import"./Avatar-Dmmmqcaw.js";import"./AvatarStack-BhWncLCg.js";import"./Badge-X0UYy-cl.js";import"./BigNumber-8rUzV783.js";import"./Breadcrumb-ySYD737Q.js";import"./Link-DC_xwsX0.js";import"./Heading-CAPeE680.js";import"./Legend-7UlaW6sh.js";import"./FileCardList-CawIlP9w.js";import"./OverlayTrigger-m1G0j68U.js";import"./Color-BBOLURjV.js";import"./Content-eCyDCyWy.js";import"./Label-DZlptx1G.js";import"./ContextualHelpTrigger-ql3WkHfV.js";import"./CounterBadge-CzzRj_yg.js";import"./DonutChart-D3LmI0Kl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-O-W3HO2z.js";import"./Header-DCViW_g1.js";import"./Initials-t14XTLYH.js";import"./InlineCode-Ji-F6tIS.js";import"./PopoverTrigger--kk_uIkh.js";import"./Separator-DBcIVj4L.js";import"./Message-Bphq-Ucd.js";import"./MessageSeparator-BFaxocAk.js";import"./NavigationGroup-CwR3lyRV.js";import"./Notification-Boctb1zI.js";import"./NotificationProvider-DZIN2fGZ.js";import"./ProgressBar-DQG5KsVg.js";import"./Rating-BX6XEAkD.js";import"./Skeleton-BXF3hqOE.js";const Pr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(p,{src:s.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(p,{width:100,withBorder:!0,alt:"Gopher",src:s.imageSrc})}),r.jsx(n,{children:r.jsx(p,{alt:"Gopher",src:s.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
