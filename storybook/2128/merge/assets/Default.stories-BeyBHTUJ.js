import{r as h,j as r}from"./iframe-RkNYvT67.js";import{ap as m,d as g}from"./Modal-xVut-wtw.js";import{L as u}from"./Label-CSQY-O06.js";import{B as C}from"./Button-Cq2sGnot.js";import{x as w}from"./IconWarning-Bv_c0irh.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D525euPD.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./index-CYuD20gW.js";import"./context-QFyIn5AW.js";import"./Button-BaIk0AjS.js";import"./utils-Cw0V24oX.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DpnYhhMC.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./RSPContexts-iWdoYzW5.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./browser-O08qKn7T.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./useStatic-DSkca5nN.js";import"./FileCardList-BOij6tHP.js";import"./Avatar-D-Vh6qCe.js";import"./AlertIcon-Dfi2fKkE.js";import"./Image-Du0dM-WM.js";import"./Text-CGI13fZ7.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./Link-CcuThIFH.js";import"./ControlledNotification-Bv9UL5dV.js";import"./LoadingSpinner-C8ge1gn9.js";import"./Flex-B3wiFoJ1.js";import"./Accordion-DmcKhtrA.js";import"./Section-C9URTgx-.js";import"./ActionGroup-U66WTNaW.js";import"./Alert-D3bKy03a.js";import"./AlertBadge-Bdr69yR6.js";import"./Align-fxln_Dgz.js";import"./AvatarStack-C0E2D8b6.js";import"./BigNumber-DNM4Asro.js";import"./Breadcrumb-BVRejx5y.js";import"./Heading-4A_9k7B7.js";import"./Legend-CfpByMiV.js";import"./Color-CF8_g_Rt.js";import"./TableFooterRow-DKyMLwZS.js";import"./SkeletonText-mgkPpEwS.js";import"./Content-CugomRfa.js";import"./CounterBadge-B73tBZKq.js";import"./DonutChart-Bi52zQsm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-2cEex6ck.js";import"./Header-Daa8R0Vo.js";import"./Initials-BYiwEIK7.js";import"./InlineCode-vcmJPAHr.js";import"./LayoutCard-552oNMIB.js";import"./Separator-BzLOFugX.js";import"./MessageSeparator-CT9RS-8F.js";import"./NavigationGroup-bJXjtOzI.js";import"./Notification-DMDBZmDj.js";import"./NotificationProvider-Cdy3Vamk.js";import"./ProgressBar-YmHjvNRH.js";import"./Rating-B1PBw_H7.js";import"./Skeleton-DFoxDyNL.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Er=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Er as __namedExportsOrder,yr as default};
