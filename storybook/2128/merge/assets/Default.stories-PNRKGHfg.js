import{j as r}from"./iframe-HHJxrKwA.js";import{B as o}from"./Button-CMFIu-2V.js";import{A as l}from"./ActionGroup-BwzLbpYf.js";import{ah as n,ai as d,u as h}from"./Modal-T9ideOdw.js";import{I as s}from"./Image-BVGsM23c.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-wsvw38Iz.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xvY9fOVo.js";import"./index-kZYQ5p_C.js";import"./index-DaaiETUi.js";import"./Text-DpCjRkNG.js";import"./browser-B_OFrHH8.js";import"./utils-CqW00CMD.js";import"./EmulatedBoldText-voWdu8Zi.js";import"./LoadingSpinner-CeGC15LV.js";import"./Button-CpujMQDr.js";import"./ProgressBar-BFgUsHfp.js";import"./Hidden-BU2s8wDC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BPRr7l02.js";import"./useFocusRing-Cv3jUmeb.js";import"./useFocusable-BvYt2clO.js";import"./useLocalizedStringFormatter-DYYCi_Wo.js";import"./dynamic-C72LaG0o.js";import"./Section-Byk_fwnD.js";import"./context-BVuVVWhQ.js";import"./RSPContexts-CI2I3CcO.js";import"./Collection-AoD9PaOI.js";import"./CollectionBuilder-BljvGYLf.js";import"./SelectionIndicator-CSgFHR1s.js";import"./Separator-Dggcol34.js";import"./useStatic-DrdWJfEu.js";import"./FileCardList-D5TI9EMK.js";import"./Avatar-BL-u7Rdm.js";import"./AlertIcon-BGK-JIKH.js";import"./Link-DCbgeGNX.js";import"./ControlledNotification-KlNAuKxq.js";import"./Flex-C7vv3uag.js";import"./Accordion-BZ3ouy-_.js";import"./Alert-CwwRXMkc.js";import"./AlertBadge-D0eRjTre.js";import"./Align-B2oqC2QR.js";import"./AvatarStack-B6bz7kAB.js";import"./BigNumber-C7pZ7_lj.js";import"./Breadcrumb-DXXDE0Ik.js";import"./Heading-DYmofqbD.js";import"./Legend-B9dFpFZY.js";import"./Color-gAx7Pts-.js";import"./TableFooterRow-CEbqxy8h.js";import"./SkeletonText-PAxx1wq8.js";import"./Content-Dgn2c9yW.js";import"./Label-Cd3K2WO5.js";import"./CounterBadge-C_LNAor4.js";import"./DonutChart-CF4XtXhZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BA7YQChN.js";import"./Header-CYWloTaj.js";import"./Initials-BTKA_iJE.js";import"./InlineCode-37DSuu8y.js";import"./LayoutCard-DsQ2Pyni.js";import"./Separator-CMOVKCX6.js";import"./MessageSeparator-DnifOB9g.js";import"./NavigationGroup-CktbrD9Y.js";import"./Notification-Bu7C660S.js";import"./NotificationProvider-BH1LT37R.js";import"./ProgressBar-DiXmMAYK.js";import"./Rating-B5eof2ex.js";import"./Skeleton-CPNzswlC.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
