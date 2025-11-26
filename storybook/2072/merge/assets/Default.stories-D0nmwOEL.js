import{r as h,j as r}from"./iframe-CzXG2_T8.js";import{am as m,C as g}from"./TimeField-Dl-kHVAX.js";import{L as u}from"./Label-CLEaEiAD.js";import{B as C}from"./Button-CE0-K_QR.js";import{t as w}from"./IconWarning-BlYr5wdx.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-CBC4MB9g.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./clsx-B-dksMZM.js";import"./Accordion-CK3CNQSd.js";import"./dynamic-D9Ldu2R_.js";import"./Section-DRzJ9hQY.js";import"./context-BYHZfe66.js";import"./Button-S7e-r_k_.js";import"./utils-CRR3kiFX.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CoFMJFUW.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./RSPContexts-EC3Gwcat.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./browser-TfqyRUmT.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./useStatic-CSFWNuey.js";import"./ActionGroup-DdNyHVbC.js";import"./Alert-BVRdOGDJ.js";import"./AlertIcon-CKFy_SRY.js";import"./AlertBadge-Bn2Sq-O3.js";import"./Text-pNSdlFVE.js";import"./EmulatedBoldText-Dax89Wj8.js";import"./Align-BrD0lUOJ.js";import"./Popover-BqNRrPxw.js";import"./OverlayTrigger-DvD8AAyr.js";import"./TableFooterRow-DxScdmh-.js";import"./SkeletonText-BajNlo4H.js";import"./Avatar-B3YtQfnh.js";import"./AvatarStack-lqTMKVs4.js";import"./Badge-DuGjQabs.js";import"./BigNumber-8SJtAMTv.js";import"./Breadcrumb-Ba5qYlLB.js";import"./Link-DfCw4YEt.js";import"./Heading-CrkkWjnL.js";import"./Legend-CeMxMq_c.js";import"./FileCardList-BM3lJHXl.js";import"./Image--2MKe1QA.js";import"./Color-BHbT5del.js";import"./Content-BiixoJVq.js";import"./ContextualHelpTrigger-CRKS8P0J.js";import"./CounterBadge-DnONLIGJ.js";import"./DonutChart-CPtp4Q3P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-azF5kucF.js";import"./Header-DUaJeums.js";import"./Initials-D5xq1FWi.js";import"./InlineCode-Bl-Nmkob.js";import"./PopoverTrigger-Cw7IKzZy.js";import"./LoadingSpinner-DXLKn-V2.js";import"./Separator-Camsel6h.js";import"./Message-BmLxOVze.js";import"./MessageSeparator-DhFUPqEZ.js";import"./NavigationGroup-B0lwi3ok.js";import"./Notification-BmLGybW-.js";import"./NotificationProvider-DyGx_RoU.js";import"./ProgressBar-C-A5f-uu.js";import"./Rating-Bcobm7yB.js";import"./Skeleton-BSdRMWz_.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Mr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Mr as __namedExportsOrder,Ir as default};
