import{j as r}from"./iframe-CRHerQcT.js";import{B as o}from"./Button-DOdtzIa_.js";import{A as l}from"./ActionGroup-bop6Cb2x.js";import{ag as n,ah as d,u as h}from"./Modal-CHikTCfT.js";import{I as s}from"./Image-HxAJgvwY.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as x,a6 as g}from"./IconWarning-S9zVz1Ke.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./index-DOvz_Dla.js";import"./Text-sklVEIT5.js";import"./browser-C1kPNy51.js";import"./utils-B8O46aeb.js";import"./EmulatedBoldText-CArsfrvv.js";import"./LoadingSpinner-DjcUww4s.js";import"./Button-DPVH9eDh.js";import"./ProgressBar-NMXq-w2-.js";import"./Hidden-BcqgQAy4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C5gXDLZB.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./dynamic-JzWN_IYl.js";import"./Section-DCbopNVT.js";import"./context-C4Lb4VEy.js";import"./RSPContexts-DxbMYf-Z.js";import"./Collection-BkWkcg8z.js";import"./CollectionBuilder-CTEpaBir.js";import"./SelectionIndicator-BJEbb9Gg.js";import"./Separator-CIAUU7Mv.js";import"./useStatic-CvvgeXIU.js";import"./FileCardList-BRkY0El4.js";import"./Avatar-B_AsKOkR.js";import"./AlertIcon-BgWetiy7.js";import"./Link-DtavQq9t.js";import"./ControlledNotification-BLJs-Z1G.js";import"./Flex-Drl5GGOg.js";import"./Accordion-DRGBj4f5.js";import"./Alert-pe0uKkFF.js";import"./AlertBadge-DQMWdOiZ.js";import"./Align-DLnBGGPL.js";import"./AvatarStack-C0_9IyGj.js";import"./BigNumber-C6mS8Wh6.js";import"./Breadcrumb-Wl5kqkjz.js";import"./Heading-PN47vIIN.js";import"./Legend-B6gewgni.js";import"./Color-4MH-JGEe.js";import"./TableFooterRow-D_R0KUn8.js";import"./SkeletonText-DT_aA1lI.js";import"./Content-ozSr22eC.js";import"./Label-RXr9Ag3i.js";import"./CounterBadge-D5n1cIT5.js";import"./DonutChart-BzjBcwZM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrKKi1jH.js";import"./Header-BkK7wzu1.js";import"./Initials-HsORkqZ3.js";import"./InlineCode-DGlO1jad.js";import"./LayoutCard-0IlyXBle.js";import"./Separator-GyMKFIRg.js";import"./MessageSeparator-Bp-V0ng0.js";import"./NavigationGroup-CIbHeakV.js";import"./Notification-BsGc8vQq.js";import"./NotificationProvider-yfmcKWLq.js";import"./ProgressBar-D49n6bfx.js";import"./Rating-C48Ki5al.js";import"./Skeleton-DfnIMzY3.js";const vr={title:"Overlays/LightBox",component:n,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(d,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(n,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=h("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(n,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(l,{children:[r.jsx(o,{children:r.jsx(x,{})}),r.jsx(o,{children:r.jsx(g,{})})]})]})]})}},m={render:()=>r.jsxs(d,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(n,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
