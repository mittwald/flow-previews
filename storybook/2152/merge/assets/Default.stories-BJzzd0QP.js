import{j as r}from"./iframe-CwbJq3r1.js";import{B as o}from"./Button-CDiKsYfE.js";import{A as l}from"./ActionGroup-DSsfeKXt.js";import{ag as n,ah as d,u as h}from"./Modal-UmnffMZn.js";import{I as s}from"./Image-Bmadiq8c.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning--_iZ6FJr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./index-BteSo1JG.js";import"./Text-CrE3MVm4.js";import"./browser-kBiuzLEF.js";import"./utils-CPaMkJSd.js";import"./EmulatedBoldText-BqYq2ptk.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Button-Bhd7ARuI.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BZjsOLmp.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./dynamic-IznNfavT.js";import"./Section-BfEoCltm.js";import"./context-B56GsAs1.js";import"./RSPContexts-y_L0XZPW.js";import"./Collection-BPSIvTLJ.js";import"./CollectionBuilder-Dfx3RB_n.js";import"./SelectionIndicator-D2MfWhCg.js";import"./Separator-BubC8oQ4.js";import"./useStatic-D3JCqzcf.js";import"./FileCardList-CFXH-qjX.js";import"./Avatar-C4sAvZAr.js";import"./AlertIcon-D4SK6nAz.js";import"./Link-BAl7QXrG.js";import"./ControlledNotification-Deb0rzCB.js";import"./Flex-DUcNemwf.js";import"./Accordion-BQnPG_jT.js";import"./Alert-x-P_ExCm.js";import"./AlertBadge-DzKW-VdF.js";import"./Align-DDaFErA1.js";import"./AvatarStack-DTk1p07I.js";import"./BigNumber-CBUp9ofh.js";import"./Breadcrumb-CmDjMlTt.js";import"./Heading-FVvo5o9O.js";import"./Legend-D05yZHp2.js";import"./Color-DfZVycWq.js";import"./TableFooterRow-DQtCx6U6.js";import"./SkeletonText-C0pUD_bb.js";import"./Content-C5Mjar79.js";import"./Label-hfc8gnGk.js";import"./CounterBadge-Dgds6XQc.js";import"./DonutChart-Bll2GL_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CSYNvEVP.js";import"./Header-DUtH1frW.js";import"./Initials-DbAAmjP_.js";import"./InlineCode-CA30spDN.js";import"./LayoutCard-BEWgIH8M.js";import"./Separator-ucvqUY6a.js";import"./MessageSeparator-BVYCvU4X.js";import"./NavigationGroup-CmJE1VHy.js";import"./Notification-Cfojyaki.js";import"./NotificationProvider-x4r_49LO.js";import"./ProgressBar-DSuKBqER.js";import"./Rating-e_Mh9Lse.js";import"./Skeleton-DkzLlt2Q.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
