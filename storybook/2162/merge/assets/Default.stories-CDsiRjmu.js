import{r as h,j as r}from"./iframe-BfrlpeCk.js";import{am as m,C as g}from"./TimeField-BhoCwCxW.js";import{L as u}from"./Label-wUl7laod.js";import{B as C}from"./Button-E46WDd4_.js";import{t as w}from"./IconWarning-DOKEq-WK.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./clsx-B-dksMZM.js";import"./Accordion-BFQx9JCl.js";import"./dynamic-BUKqVZ1H.js";import"./Section-Bb4j7C6a.js";import"./context-DUvcrLtv.js";import"./Button-Cjbcx8Zu.js";import"./utils-CZEyphdB.js";import"./ProgressBar-DuqIuA6U.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jvNFAhRM.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./RSPContexts-Bw86vYvh.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./browser-C0N36_KR.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./useStatic-Bz7IWGfO.js";import"./ActionGroup-dgAOdJZ4.js";import"./Alert-CRvY5VYZ.js";import"./AlertIcon-CfJrkVpH.js";import"./AlertBadge-Dxv4P94g.js";import"./Text-DdebjF6X.js";import"./EmulatedBoldText-eBeMz5kz.js";import"./Align-YsnAwz9T.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./TableFooterRow-DwOitp-g.js";import"./SkeletonText-B-NyxpC1.js";import"./Avatar-B8_C9MNe.js";import"./AvatarStack-DWIfq5vn.js";import"./Badge-MeQ_8EOt.js";import"./BigNumber-BcZHvOWT.js";import"./Breadcrumb-D1tMkTMn.js";import"./Link-h05bzThL.js";import"./Heading-BzrDriRC.js";import"./Legend-CKP3pUkG.js";import"./FileCardList-BHWA4e_z.js";import"./Image-DmrVA4vT.js";import"./Color-CWKr_WHZ.js";import"./Content-BsqW8diX.js";import"./ContextualHelpTrigger-DO42vOyq.js";import"./CounterBadge-kCoMDryj.js";import"./DonutChart-Ddn2-NTo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DBVcyvdC.js";import"./Header-3cW2glxq.js";import"./Initials-C8m56NNk.js";import"./InlineCode-C2U9lI57.js";import"./PopoverTrigger-BauBuR_D.js";import"./LoadingSpinner-BwJAEpX5.js";import"./Separator-DPowy5kr.js";import"./Message-Cb-yd-qn.js";import"./MessageSeparator-tn0XlbcW.js";import"./NavigationGroup-Bdh44MUn.js";import"./Notification-C8AOzGHV.js";import"./NotificationProvider-Bv1lRKSn.js";import"./ProgressBar-BrBPhSDZ.js";import"./Rating-DroWCOnR.js";import"./Skeleton-BV_rDckR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
