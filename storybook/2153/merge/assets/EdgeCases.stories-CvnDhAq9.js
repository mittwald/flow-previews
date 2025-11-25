import{j as t}from"./iframe-BLnMNn74.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import T from"./Default.stories-BFHANXf4.js";import{ad as a,ae as o,af as n}from"./Modal-8XeHYI3F.js";import{S as r}from"./Section-C4IRs01H.js";import{T as e}from"./Text-BLxKn04K.js";import"./index-nuYtCEEu.js";import"./Heading-D0fV1MUw.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./index-BEG_ZaEs.js";import"./RSPContexts-PYGgvhgu.js";import"./utils-mouUCLqv.js";import"./Label-DsxxKAsc.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./context-DeTRhxa_.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./Header-Dvm5iR7H.js";import"./AlertIcon-D_ZK5_qh.js";import"./IconWarning-DVYn3YAA.js";import"./dynamic-lDfDlCad.js";import"./context-tC_fb_7Z.js";import"./Button-DcXCtAho.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./browser-3pbWDgJF.js";import"./useStatic-C1gHOY5o.js";import"./FileCardList-C-nFF2lq.js";import"./Avatar-uSFzf8En.js";import"./Image-C3aTXuYo.js";import"./Link-BiwBBQmE.js";import"./Button-BheRlZ5y.js";import"./LoadingSpinner-CXYzRfKv.js";import"./ControlledNotification-CJ1U_sXf.js";import"./Flex-DEZ5_BjM.js";import"./Accordion-DYry0ver.js";import"./ActionGroup-D4qujtmo.js";import"./Alert-DpWN8tfH.js";import"./AlertBadge-DR63qZD8.js";import"./Align-DGThSHH9.js";import"./AvatarStack-C5tI56sp.js";import"./BigNumber-B8IdDyzZ.js";import"./Breadcrumb-QEC6aw0y.js";import"./Legend-DalDE9ec.js";import"./Color-CZRI8S1_.js";import"./TableFooterRow-DZByrFxu.js";import"./SkeletonText-CgnC14Qd.js";import"./Content-D01rsQck.js";import"./CounterBadge-DDvI3NyR.js";import"./DonutChart-CCUCxJB3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-48_UokG_.js";import"./Initials-CGdYflvx.js";import"./InlineCode-5yLIxxaJ.js";import"./LayoutCard-BJitsBmJ.js";import"./Separator-B4qHJCoW.js";import"./MessageSeparator-BlU-rXLl.js";import"./NavigationGroup-BwV6U3dj.js";import"./Notification-BlXVrBim.js";import"./NotificationProvider-B_e8WRLe.js";import"./ProgressBar-CqlEDKCU.js";import"./Rating-CMJWfAMs.js";import"./Skeleton-Dhd804V2.js";import"./EmulatedBoldText-Y_QL0NOh.js";const Ht={title:"Navigation/Tabs/Edge Cases",...T},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(o,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.long})})]}),t.jsxs(o,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(o,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]}),t.jsxs(o,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(e,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(o,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]}),t.jsxs(o,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Tab>
    </Tabs>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
          <Tabs {...props} disabledKeys={["spam"]}>
            <Tab id="subA">
              <TabTitle>Sub tab A</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
            <Tab id="subB">
              <TabTitle>Sub tab B</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
          </Tabs>
        </Section>
      </Tab>
    </Tabs>
}`,...p.parameters?.docs?.source}}};const Kt=["DifferentHeight","Nested"];export{s as DifferentHeight,p as Nested,Kt as __namedExportsOrder,Ht as default};
