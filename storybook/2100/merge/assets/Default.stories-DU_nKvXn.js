import{j as r}from"./iframe-DGNlk_vV.js";import{L as e}from"./LayoutCard-Bi4mSr74.js";import{a2 as l,a3 as a,a4 as m,T as d}from"./Modal-Dqy40C9s.js";import{A as c}from"./AlertIcon-DkXhyzKN.js";import{S as p}from"./Section-oB0UkYgk.js";import{H as n}from"./Heading-L3PTpp92.js";import{L as s}from"./Label-C-LvYOEv.js";import{L as T}from"./LabeledValue-C3kPJ1aU.js";import{T as x}from"./Text-DsxTDDTq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./index-Bbt_YQGl.js";import"./dynamic-CKWjdq05.js";import"./Popover-C8jQUmvs.js";import"./context-CfZGyFhp.js";import"./useStatic-D_bMrpdM.js";import"./OverlayTrigger-Uz8qZ1np.js";import"./Dialog-btvz5H9Q.js";import"./Button-DpZIFY9G.js";import"./utils-DL8q1so0.js";import"./ProgressBar-BoB3EqYI.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BQuOJgUT.js";import"./useFocusRing-DxF43p1t.js";import"./useFocusable-CXOlwDl1.js";import"./RSPContexts-ClaGjYhr.js";import"./OverlayArrow-DNNRAYvS.js";import"./useControlledState-UWLM0vlv.js";import"./Collection-ChtRuM1d.js";import"./CollectionBuilder-BJ_Sw59I.js";import"./SelectionIndicator-B0PsrhoI.js";import"./Separator-BOOd5uBZ.js";import"./browser-ec9CZx7q.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./ControlledNotification-CLuRI8eV.js";import"./ClearPropsContextView-NN4EGP09.js";import"./LoadingSpinner-Vfx511Qq.js";import"./IconWarning-C6wJTaOd.js";import"./Button-DhezJY1m.js";import"./Accordion-ral1YniH.js";import"./Action-rOePJQYP.js";import"./getActionGroupSlot-DqNd_pBE.js";import"./ActionGroup-B5jvEoxw.js";import"./Alert-XjfM08Aq.js";import"./AlertBadge-CBXPV5eK.js";import"./Align-D4P59A8y.js";import"./TableFooterRow-BpMW61H4.js";import"./SkeletonText-J_7Ni8Mk.js";import"./Avatar-Dw_c7mqj.js";import"./AvatarStack-33IzluzG.js";import"./Badge-Dv-EenjR.js";import"./BigNumber-vSkzSwe6.js";import"./Breadcrumb-DzZ7GAz2.js";import"./Link-B-YmT7AY.js";import"./Legend-CZSR-8sq.js";import"./FileCardList-CPC5o29W.js";import"./Image-ueWl-811.js";import"./CodeBlock-D4ETgOxi.js";import"./CopyButton-Bm9lbUjF.js";import"./Tooltip-MnuGQmV-.js";import"./react-children-utilities-C0bzJkZ7.js";import"./Color-DqV6qNlZ.js";import"./Content-ol93GJzs.js";import"./ContextualHelpTrigger-BP63Y_WB.js";import"./CounterBadge-hqs-zUxV.js";import"./DonutChart-BvfT4frN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BF1clYx1.js";import"./Header-Ch__bQKy.js";import"./Initials-C7j3L0wD.js";import"./InlineCode-C_cjRttB.js";import"./PopoverTrigger-DTI8QbE9.js";import"./Markdown-BMPTuZdO.js";import"./Separator-CJaXs9en.js";import"./Message-_Z1AL0qW.js";import"./MessageSeparator-CF43wMDs.js";import"./NavigationGroup-BUYtw5-B.js";import"./Notification-B4EHDdCQ.js";import"./NotificationProvider-DahzwZut.js";import"./ProgressBar-a361S-qP.js";import"./Rating-D2kSNe99.js";import"./Skeleton-BrrKNlRW.js";import"./EmulatedBoldText-Bby43l11.js";const Pr={title:"Structure/Layout Card",component:e,argTypes:{elementType:{control:"inline-radio",options:["div","main"]}},args:{elementType:"div"},render:o=>r.jsx(e,{...o,children:"Layout Card is a structure element that can contain any content"})},t={},i={render:o=>r.jsx(e,{...o,children:r.jsxs(l,{children:[r.jsxs(a,{id:"general",children:[r.jsxs(m,{children:["General",r.jsx(c,{status:"info"})]}),r.jsxs(p,{children:[r.jsx(n,{children:"General"}),r.jsx(d,{defaultValue:"example@mittwald.de",children:r.jsx(s,{children:"Mail address"})})]})]}),r.jsxs(a,{id:"storage",children:[r.jsx(m,{children:"Storage settings"}),r.jsxs(p,{children:[r.jsx(n,{children:"Storage"}),r.jsxs(T,{children:[r.jsx(s,{children:"Available storage"}),r.jsx(x,{children:"2.4 GB"})]})]})]})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <LayoutCard {...props}>
      <Tabs>
        <Tab id="general">
          <TabTitle>
            General
            <AlertIcon status="info" />
          </TabTitle>
          <Section>
            <Heading>General</Heading>
            <TextField defaultValue="example@mittwald.de">
              <Label>Mail address</Label>
            </TextField>
          </Section>
        </Tab>
        <Tab id="storage">
          <TabTitle>Storage settings</TabTitle>
          <Section>
            <Heading>Storage</Heading>
            <LabeledValue>
              <Label>Available storage</Label>
              <Text>2.4 GB</Text>
            </LabeledValue>
          </Section>
        </Tab>
      </Tabs>
    </LayoutCard>
}`,...i.parameters?.docs?.source}}};const Qr=["Default","WithTabs"];export{t as Default,i as WithTabs,Qr as __namedExportsOrder,Pr as default};
