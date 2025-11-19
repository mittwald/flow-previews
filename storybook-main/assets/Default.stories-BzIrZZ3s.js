import{j as r}from"./iframe-BtRqkaoN.js";import{B as o}from"./Button-BPlXfnB_.js";import{A as l}from"./ActionGroup-D0a1TuEY.js";import{ag as n,ah as d,u as h}from"./Modal-CDGfx8xL.js";import{I as s}from"./Image-lNfhH4MA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-DkmpBTGx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-lL_ayKQ8.js";import"./index-Bq7uci9y.js";import"./index-m38LNed9.js";import"./Text-C82-Opvq.js";import"./browser-BLYjcYaj.js";import"./utils-DZ-gBwlH.js";import"./EmulatedBoldText-DEqPiTPW.js";import"./LoadingSpinner-jhQv_W0v.js";import"./Button-DBAfHwZW.js";import"./ProgressBar-BPiJZ4Qy.js";import"./Hidden-DEfsXDrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BjeDPPzV.js";import"./useFocusRing-Cuw_RoAO.js";import"./useFocusable-Djt3CoWV.js";import"./useLocalizedStringFormatter-CW_rKmRX.js";import"./dynamic-s-bN7sg4.js";import"./Section-DxORUvzC.js";import"./context-BSa97aaI.js";import"./RSPContexts-Dy3XJREj.js";import"./Collection-BjDSumuQ.js";import"./CollectionBuilder-CvHEghsW.js";import"./SelectionIndicator-lBISxJoi.js";import"./Separator-B_m33Nu6.js";import"./useStatic-Cx2ReuRe.js";import"./FileCardList-DW1fCD53.js";import"./Avatar-CF69g3k0.js";import"./AlertIcon-CEzMYdZY.js";import"./Link-DsBhuJ5I.js";import"./ControlledNotification-XJl_dB2W.js";import"./Flex-C6QDHQJ0.js";import"./Accordion-D844NWAq.js";import"./Alert-CkEZZy6i.js";import"./AlertBadge-D62r_RrJ.js";import"./Align-Ce3rIU_V.js";import"./AvatarStack-CYO7RyGK.js";import"./BigNumber-CsIC2_Nn.js";import"./Breadcrumb-h4t0mPs2.js";import"./Heading-Do1d9f-o.js";import"./Legend-BIz0nErH.js";import"./Color-BQLSKmwj.js";import"./TableFooterRow-B7bMzDHU.js";import"./SkeletonText-YNIzcCkm.js";import"./Content-CY14UYyB.js";import"./Label-DEA5QNgM.js";import"./CounterBadge-CGv0vaW8.js";import"./DonutChart-BSRtiAXh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D0PZlEH1.js";import"./Header-BRGfOg7r.js";import"./Initials-Dm2Il5IW.js";import"./InlineCode-CAALbjrA.js";import"./LayoutCard-BcMz8A0K.js";import"./Separator-QBAhEahF.js";import"./MessageSeparator-BfV-UWPl.js";import"./NavigationGroup-YJbzS_dd.js";import"./Notification-dUzHJ4Jf.js";import"./NotificationProvider-IMF5MrhA.js";import"./ProgressBar-BLfa9fLl.js";import"./Rating-BQYV4n93.js";import"./Skeleton-BHFnD8fZ.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
